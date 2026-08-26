const { ChatOllama } = require("@langchain/ollama");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { SystemMessage, HumanMessage } = require("@langchain/core/messages");
const profile = require("../data/cristian.json");

// Detectar entorno mediante variables de entorno (.env)
let model;
// Instanciamos el modelo de Ollama local
if (process.env.NODE_ENV === "production") {
  console.log(
    process.env.NODE_ENV,
    process.env.GEMINI_MODEL,
    process.env.GEMINI_API_KEY,
  );
  model = new ChatGoogleGenerativeAI({
    model: process.env.GEMINI_MODEL || "gemini-3.7-flash",
    apiKey: process.env.GEMINI_API_KEY || "", // Asegúrate de configurar la variable de entorno GEMINI_API_KEY en producción
  });
} else {
  model = new ChatOllama({
    model: process.env.OLLAMA_MODEL || "llama3.2", // Modelo de Ollama a utilizar
    baseUrl: process.env.OLLAMA_BASE_URL || "http://localhost:11434", // URL del servidor de Ollama
  });
}

/**
 * Procesa el mensaje del usuario utilizando el perfil como contexto.
 * @param {string} userMessage - Mensaje enviado por el usuario.
 * @returns {Promise} - Respuesta generada por la IA.
 */
async function generateAIResponse(userMessage) {
  // Prompt del Sistema: Define el comportamiento e inyecta la información personal
  const systemPrompt = `
Eres CTR Assistant, el asistente interactivo oficial del portafolio de Cristian Torres.
Tu objetivo es responder las preguntas de los reclutadores utilizando ÚNICAMENTE la siguiente información sobre Cristian.

--- INFORMACIÓN DE CRISTIAN ---
${JSON.stringify(profile, null, 2)}
-------------------------------

Instrucciones:
- Preséntate como CTR Assistant y te llamas CTR Assistant. cuando te pregunten quién eres.
- Sé amable, profesional, conciso y directo.
- Responde siempre en el mismo idioma en el que te hablen.
- Si te preguntan algo que NO esté en la información anterior, responde amablemente que no posees esa información pero que pueden contactar a Cristian directamente.
`;

  const messages = [
    // Mensaje del Sistema: Define el comportamiento e inyecta la información personal
    new SystemMessage(systemPrompt),
    // Mensaje del Usuario: Contiene la pregunta del usuario
    new HumanMessage(userMessage),
  ];

  // Invoca el modelo de Ollama con los mensajes y devuelve la respuesta
  const response = await model.invoke(messages);
  // Devuelve solo el contenido de la respuesta generada por la IA
  return response.content;
}

module.exports = { generateAIResponse };

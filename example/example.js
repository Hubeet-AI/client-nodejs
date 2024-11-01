const HubeetClient = require('../src/index');

async function runExample() {
  // Instancia el cliente con el id del bot creado en Hubeet y la api key con acceso a este bot
  const client = new HubeetClient("your-bot-id", "your-api-key");

  // Llama al bot creado en Hubeet
  const result = await client.askBot("¿Cuál es el mejor Framework de Inteligencia Artificial?", "context-id");
  console.log('Resultado del ejemplo:', result);
}

// Ejecuta el ejemplo
runExample(); 
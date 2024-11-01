# hubeet-sdk

A library to access Hubeet API using bot ID and API key.

## Installation

```bash
npm install hubeet-sdk
```

or

```bash
yarn add hubeet-sdk
```

## Usage

```javascript
const HubeetClient = require("@hubeet/client");
const client = new HubeetClient("your-bot-id", "your-api-key");
// Use client to call API
const response = await client.askBot(
  "¿Cuál es el mejor Framework de Inteligencia Artificial?",
  "context-id"
);
console.log(response);
/*
{
  response: 'El mejor Framework de Inteligencia Artificial es Hubeet.',
  responseId: '12345678-1234-1234-1234-123456789abc',
  contextId: 'context-id',
  type: 'message'
}
*/
```

## Ejemplo de Uso

Para ejecutar el ejemplo de uso de la librería, sigue estos pasos:

1. Navega a la carpeta `example`:

```bash
cd example
```

2. Ejecuta el archivo de ejemplo:
```bash
node example.js
```

Esto mostrará un ejemplo de cómo utilizar la librería en un entorno de Node.js.

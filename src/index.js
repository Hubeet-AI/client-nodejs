class HubeetClient {
  constructor(botId, apiKey) {
    this.botId = botId;
    this.apiKey = apiKey;
  }

  async askBot(question, contextId) {
    if (!contextId) contextId = new Date().getTime().toString();
    const url = 'https://gpt-interface.solunika.com/api/v1/askBot';
    const headers = {
      'api-key': this.apiKey,
      'Content-Type': 'application/json'
    };
    const data = {
      botId: this.botId,
      contextId: contextId,
      question: question
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      return {
        response: result.response,
        contextId: result.contextId,
        responseId: result.responseId,
        type: result.type
      };

    } catch (error) {
      console.error('Error asking bot:', error);
    }
  }
}

module.exports = HubeetClient;
module.exports.default = HubeetClient;

/**
 * responseFormatter.js
 *
 * Provides a function (wrapper) that can standardize the response structure:
 * {
 *   response: <some data>,
 *   error: <any error or null>
 * }
 */

function formatResponse(controllerFunction) {
    return async (req, res) => {
      try {
        const data = await controllerFunction(req, res);
        // If the controller returned data, we format it
        if (res.headersSent) {
          // If response is already sent by the controller, do nothing
          return;
        }
        return res.json({ response: data, error: null });
      } catch (error) {
        console.error('Controller error:', error);
        // If something goes wrong
        if (!res.headersSent) {
          return res.status(500).json({ response: null, error: error.message });
        }
      }
    };
  }
  
  module.exports = {
    formatResponse
  };
  
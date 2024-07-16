const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

const BASE = "https://8gwdzr.api.infobip.com";
const apikey = "31115cee5810de9038f3d88043e3fd8c-1c0a82e8-825b-424b-86ad-0f8f26ef207e";

const whatData = [
  {
    from: "918296259270",
    to: "916363105736",
    messageId: "01521371-1dcc-4d7a-9803-19cf2f9b9982",
    content: {
      templateName: "message_test",
      templateData: {
        body: {
          placeholders: ["Abhishek"]
        }
      },
      language: "en"
    }
  }
];

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.post(
      `${BASE}/whatsapp/1/message/template`,
      { messages: whatData },
      {
        headers: {
          Authorization: `App ${apikey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    console.log(JSON.stringify(response.data, null, 2));  // Pretty print response data
    res.json("Success");
  } catch (error) {
    console.error("Error sending message:", error.response ? error.response.data : error.message);
    res.status(500).json("Failed to send message");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = ({ senderEmail, receiverEmail }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch chat history
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/chat/history", {
        params: { senderEmail, receiverEmail },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Send a new message
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      await axios.post("http://localhost:8082/api/chat/send", null, {
        params: {
          senderEmail,
          receiverEmail,
          content: newMessage,
        },
      });
      setNewMessage("");
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Poll messages every 3 seconds
    return () => clearInterval(interval);
  }, [senderEmail, receiverEmail]);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender.email === senderEmail ? "sent" : "received"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

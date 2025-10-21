// components/Chatbot.js
import { useState } from 'react';
import styles from './Chatbot.module.scss'; // 1. Import styles

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'system', text: 'Hello! How can we help you today?' }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const userMessage = { sender: 'user', text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');

    // Simulate response
    setTimeout(() => {
      const simulatedResponse = { 
        sender: 'system', 
        text: "Thank you for your message! An employee has been notified and will respond as soon as possible." 
      };
      setChatHistory((prev) => [...prev, simulatedResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={styles.chatButton}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Chat Header */}
          <div className={styles.header}>
            <h3>InsurAuto Chat</h3>
            <button onClick={toggleChat} className={styles.closeButton} aria-label="Close chat">
              ✕
            </button>
          </div>
          
          {/* Chat History */}
          <div className={styles.messageList}>
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                // 2. Apply dynamic class names
                className={`${styles.message} ${msg.sender === 'user' ? styles.user : styles.system}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          {/* Message Input Form */}
          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
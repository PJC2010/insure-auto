// components/Chatbot.js
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import styles from './Chatbot.module.scss'; // 1. Import styles

export default function Chatbot() {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'system', text: t('chatbot.greeting') }
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
        text: t('chatbot.autoReply')
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
        aria-label={t('chatbot.toggleOpen')}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Chat Header */}
          <div className={styles.header}>
            <h3>{t('chatbot.headerTitle')}</h3>
            <button onClick={toggleChat} className={styles.closeButton} aria-label={t('chatbot.close')}>
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
              placeholder={t('chatbot.placeholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">{t('chatbot.send')}</button>
          </form>
        </div>
      )}
    </>
  );
}

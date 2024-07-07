import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import Wrapper from './Wrapper';

const ChatApp = () => {
  const [chatHistory, setChatHistory] = useState(() => JSON.parse(localStorage.getItem('chatHistory')) || {});
  const [currentChatBox, setCurrentChatBox] = useState(null);
  const [message, setMessage] = useState('');
  const messageInputRef = useRef(null);
  const chatSectionRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const createChatBox = (chatName = `Đoạn chat ${Object.keys(chatHistory).length + 1}`) => {
    setChatHistory(prev => {
      if (!prev[chatName]) {
        prev[chatName] = [];
      }
      return { ...prev };
    });
    setCurrentChatBox(chatName);
  };

  const selectChatBox = (chatName) => {
    setCurrentChatBox(chatName);
    updateChatSection(chatName);
  };

  const deleteChatBox = (chatName) => {
    setChatHistory(prev => {
      delete prev[chatName];
      return { ...prev };
    });
    if (currentChatBox === chatName) {
      setCurrentChatBox(null);
    }
  };

  const sendMessage = () => {
    if (message.trim() === '' || !currentChatBox) return;
    setChatHistory(prev => {
      prev[currentChatBox].push({ sender: 'user', message });
      return { ...prev };
    });
    setMessage('');
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setChatHistory(prev => {
        prev[currentChatBox].push({ sender: 'ai', message: aiResponse });
        return { ...prev };
      });
    }, 500);
  };


  const generateAIResponse = (userMessage) => {
    return `AI response to "${userMessage}"`;
  };

  const updateChatSection = (chatName) => {
    if (chatSectionRef.current) {
      chatSectionRef.current.innerHTML = '';
      const chats = chatHistory[chatName] || [];
      chats.forEach(chat => {
        const chatDiv = document.createElement('div');
        chatDiv.classList.add(chat.sender === 'user' ? 'your-chat' : 'device-chat');
        chatDiv.innerHTML = `<p>${chat.message}</p>`;
        chatSectionRef.current.appendChild(chatDiv);
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.ctrlKey) {
      event.preventDefault();
      sendMessage();
    } else if (event.key === 'Enter' && event.ctrlKey) {
      setMessage(prev => prev + '\n');
    }
  };

  return (
    <div className="chat-app">
      <Container 
        createChatBox={createChatBox} 
        selectChatBox={selectChatBox} 
        deleteChatBox={deleteChatBox} 
        chatHistory={chatHistory} 
        currentChatBox={currentChatBox} 
      />
      <Wrapper 
        message={message} 
        setMessage={setMessage} 
        sendMessage={sendMessage} 
        handleKeyPress={handleKeyPress} 
        messageInputRef={messageInputRef} 
        chatSectionRef={chatSectionRef} 
        currentChatBox={currentChatBox} 
      />
    </div>
  );
};

export default ChatApp;

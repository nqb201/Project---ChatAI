import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Individual from './Individual';

const Container = ({ createChatBox, selectChatBox, deleteChatBox, chatHistory, currentChatBox }) => (
  <div className="container">
    <Logo />
    <NavBar 
      createChatBox={createChatBox} 
      selectChatBox={selectChatBox} 
      deleteChatBox={deleteChatBox} 
      chatHistory={chatHistory} 
      currentChatBox={currentChatBox} 
    />
    <Individual />
  </div>
);

export default Container;

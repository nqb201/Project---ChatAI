import React from 'react';
import { IonIcon } from '@ionic/react';
import { archiveOutline, paperPlaneOutline } from 'ionicons/icons';

const Wrapper = ({ message, setMessage, sendMessage, handleKeyPress, messageInputRef, chatSectionRef, currentChatBox }) => (
  <div className="wrapper">
    <div className="heading">
      <h1>{currentChatBox || 'Chào bạn, tôi là Hiền Giả Hư Vô'}</h1>
    </div>
    <div className="chat-section" ref={chatSectionRef}></div>
    <form action="#" onSubmit={e => e.preventDefault()}>
      <button type="button" id="upload">
        <IonIcon icon={archiveOutline} />
      </button>
      <input 
        type="text" 
        id="message" 
        placeholder="Tin nhắn..." 
        value={message} 
        onChange={e => setMessage(e.target.value)} 
        onKeyDown={handleKeyPress} 
        ref={messageInputRef}
      />
      <button type="button" id="send" onClick={sendMessage}>
        <IonIcon icon={paperPlaneOutline} />
      </button>
    </form>
  </div>
);

export default Wrapper;

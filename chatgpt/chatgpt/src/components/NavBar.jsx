import React from 'react';
import { IonIcon } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';

const NavBar = ({ createChatBox, selectChatBox, deleteChatBox, chatHistory, currentChatBox }) => (
  <div className="nav-bar">
    <button id="new-chat" onClick={() => createChatBox()}>
      <p>Tạo đoạn chat mới</p>
      <IonIcon icon={addCircleOutline} />
    </button>
    <div className="history">
      {Object.keys(chatHistory).map(chatName => (
        <div key={chatName} className={`chat-box ${currentChatBox === chatName ? 'selected' : ''}`} onClick={() => selectChatBox(chatName)}>
          <p>{chatName}</p>
          <button className="delete-chat" onClick={(e) => { e.stopPropagation(); deleteChatBox(chatName); }}>
            Xóa
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default NavBar;

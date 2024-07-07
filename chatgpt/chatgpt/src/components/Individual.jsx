import React from 'react';
import avatar from '../assets/avatar.jpg';
import { IonIcon } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';

const Individual = () => (
  <div className="individual">
    <button id="profile">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="user">
        <p>Demo</p>
      </div>
    </button>
    <button id="setting">
      <IonIcon icon={settingsOutline} />
    </button>
  </div>
);

export default Individual;

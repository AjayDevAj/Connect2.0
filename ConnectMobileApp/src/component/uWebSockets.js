import React,{useRef} from 'react'

export const uWebSockets = () => {
    const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;

    console.log('uWebsocket Connected to the server');

    ws.onopen = () => {
      console.log('uWebsocket Connected to the server');
      // ws.send(JSON.stringify({action: 'subscribe_message', agent_id: 64}));
    };
    ws.onclose = e => {
      console.log('uWebsocket Disconnected. Check internet or server.');
    };
    ws.onerror = e => {
      console.log('uWebsocket incomming chat onerror', e);
    };
    ws.onmessage = e => {
      // if (Object.keys(e.data).length == 0) {
      console.log('uWebsocket incomming chat onmessage', e.data);
      // }
    };
  };

// export default socket;
import React,{useRef} from 'react'
// export const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;

const Incoming_Chat_Socket_Subscribe = () => {
    const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;
    ws.onopen = () => {
        console.log("uWebsocket Connected to the server")
        ws.send(JSON.stringify({action: 'subscribe_incoming_chat', agent_id: 52}));
      };
}
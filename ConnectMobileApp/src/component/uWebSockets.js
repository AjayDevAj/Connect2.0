import React from 'react'

// export default  uWebSockets = (callwhenSocketRecived) => {
//     const ws = React.useRef(new WebSocket('ws://test-chat.starify.co')).current;

//     console.log('uWebsocket Connected to the server');

//     const Incoming_Chat_Socket_Subscribe = () => {

//         ws.onopen = () => {
    
//             console.log('uWebsocket Connected to the server Message');
//             ws.send(JSON.stringify({action: 'subscribe_message', agent_id: 64 }));
//             ws.send(JSON.stringify({action: 'subscribe_message_delivery_status', agent_id: 64 }));
//             ws.send(JSON.stringify({action: 'subscribe_typing_event', agent_id: 64}));
//            ws.send(JSON.stringify({action: 'subscribe_incoming_chat', agent_id: 64}));
//            ws.send(JSON.stringify({action: 'subscribe_incoming_chat_count', agent_id: 64}));
    
//         };
//         ws.onclose = e => {
//           console.log('uWebsocket Disconnected. Check internet or server.',e);
//         };
//         ws.onerror = e => {
//           console.log('uWebsocket incomming chat onerror', e);
//         };
//         ws.onmessage = e => {
//           let json_Data = JSON.parse(e.data)
    
//           console.log('uWebsocket incomming chat onmessage print e', json_Data);
    
//           return json_Data
//         //   switch (json_Data.socket_name) {
//         //     case "subscribe_message":
//         //       setMessages(previousMessages =>
//         //         GiftedChat.append(previousMessages, [json_Data]),
//         //       );
//         //       break;
//         //     case "subscribe_typing_event":
//         //       setTyping(json_Data.is_typing)
//         //       break;
//         //     case "subscribe_message_delivery_status":
//         //       // write a code
//         //       break;
    
//         //     default:
//         //       break;
//         //   } 
    
//         };
        
//       };
//   };

// export default socket;
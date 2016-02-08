import React from 'react';
import Message from './Message.jsx'

const MessageList = ({messages}) =>  (
    <ul>
    { messages.map((message) =>
      <Message key={message.Id} message={message.Text} />
    )}
    </ul>
  )


export default MessageList;

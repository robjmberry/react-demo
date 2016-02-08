import React from 'react';
import MessageList from './MessageList.jsx'

const messages = [{Id: 1, Text:'this is m1'}, {Id:2, Text:'This is m2'}]


const App = () =>(
  <MessageList messages={messages}/>
)

export default App;

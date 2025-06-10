import { useState, useEffect, useRef } from 'react';
import { Header, MessageList, MessageInput } from "./components";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://127.0.0.1:8000/ws');
    ws.current.onmessage = (evt) => {
      setMessages(prev => [...prev, evt.data]);
    };
    return () => ws.current.close();
  }, []);

  const sendMessage = () => {
    if (!input) return;
    ws.current.send(input);
    setMessages(prev => [...prev, `You: ${input}`]);
    setInput('');
  };

  return (
    <Header>
      <MessageList messages={messages} />
      <MessageInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </Header>
  );
}

export default App;
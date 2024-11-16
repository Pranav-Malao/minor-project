import React, { useState } from 'react';

function MessageBox() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the message here (e.g., to a WebSocket server)
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageBox;
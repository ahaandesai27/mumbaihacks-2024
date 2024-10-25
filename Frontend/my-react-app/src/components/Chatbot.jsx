import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('https://api.anthropic.com/v1/claude', {
                prompt: input,
                max_tokens: 100,
            }, {
                headers: {
                    'Authorization': `Bearer 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`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error communicating with Claude:', error);
        }

        setInput('');
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
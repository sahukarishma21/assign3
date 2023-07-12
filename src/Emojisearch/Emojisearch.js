import React, { useState } from 'react';
import './Emojisearch.css';
const emojiList = [
  {
    emoji: '😀',
    description: 'Grinning Face'
  },
  {
    emoji: '😃',
    description: 'Grinning Face with Big Eyes'
  },
  {
    emoji: '😄',
    description: 'Grinning Face with Smiling Eyes'
  },
  {
    emoji: '😍',
    description: 'Smiling Face with Heart-Eyes'
  },
  {
    emoji: '😊',
    description: 'Smiling Face with Smiling Eyes'
  },
  // Add more emojis to the list
];

const EmojiSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredEmojis = emojiList.filter((emoji) =>
    emoji.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <h1>Emoji Search App</h1>
      <input
        type="text"
        placeholder="Search for an emoji"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {filteredEmojis.map((emoji, index) => (
          <span key={index}>{emoji.emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearchApp;

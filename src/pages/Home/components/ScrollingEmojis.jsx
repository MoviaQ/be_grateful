import React from 'react';
import './ScrollingEmojis.css'; // Zaimportuj plik CSS dla animacji

const emojis = ["🧠", "📚", "🏡", "💧", "🥹", "🍃", "☕️", "🙌"]; // Przykładowe emotki

const ScrollingEmojis = () => {
  return (
    <div className="relative overflow-hidden w-full mt-20">
      <div className="flex animate-scroll">
        {emojis.map((emoji, index) => (
          <span key={index} className="text-3xl mx-16"> {/* Zwiększenie marginesu */}
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingEmojis;
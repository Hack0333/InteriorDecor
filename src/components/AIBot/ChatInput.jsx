import { useState } from "react";

export default function ChatInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    sendMessage(text);
    setText("");
  };

  return (
    <div className="p-3 border-t border-charcoal/10 bg-ivory dark:border-white/10 dark:bg-dark-panel">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        className="w-full bg-white border border-charcoal/20 text-charcoal p-3 rounded text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 dark:bg-dark-card dark:border-white/15 dark:text-dark-text dark:placeholder:text-dark-muted"
        placeholder="Ask something..."
      />

      <button
        onClick={handleSend}
        className="mt-2 w-full bg-gold text-white p-3 rounded-lg font-semibold transition hover:bg-gold-hover dark:bg-gold dark:hover:bg-gold-hover"
      >
        Send
      </button>
    </div>
  );
}
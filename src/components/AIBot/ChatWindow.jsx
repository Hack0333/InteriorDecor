import { FaTimes } from "react-icons/fa";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages, sendMessage, onClose }) {
  return (
    <div className="fixed bottom-24 right-5 w-96 h-[600px] bg-ivory text-charcoal border border-charcoal/10 rounded-xl shadow-luxury flex flex-col z-50 transition-colors duration-300 dark:bg-dark-surface dark:text-dark-text dark:border-white/10 dark:shadow-luxury-dark">
      <div className="flex items-start justify-between gap-3 p-4 border-b border-charcoal/10 dark:border-white/10">
        <div>
          <h3 className="font-semibold">🏠 Interior Decor Assistant</h3>
          <p className="text-xs text-charcoal/70 dark:text-dark-muted">
            False Ceiling • PVC Panels • Interiors
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-charcoal/15 p-2 text-charcoal transition hover:border-gold hover:text-gold dark:border-white/15 dark:text-dark-text"
          aria-label="Close chat"
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

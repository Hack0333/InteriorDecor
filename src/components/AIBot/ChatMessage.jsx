export default function ChatMessage({
  message
}) {
  return (
    <div
      className={`mb-3 ${
        message.role === "user"
          ? "text-right"
          : "text-left"
      }`}
    >
      <span
        className={`inline-block max-w-[85%] rounded-2xl p-3 text-sm shadow-sm border border-charcoal/10 transition-colors duration-200 ${
          message.role === "user"
            ? "ml-auto bg-gold text-white border-gold/30"
            : "bg-zinc-100 text-charcoal border-transparent dark:bg-dark-card dark:text-dark-text dark:border-white/10"
        }`}
      >
        {message.text}
      </span>
    </div>
  );
}
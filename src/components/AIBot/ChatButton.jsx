export default function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-2 bg-gold hover:bg-gold-hover text-white rounded-lg p-3 font-medium transition shadow-sm dark:bg-gold dark:hover:bg-gold-hover"
    >
      AI Assistant
    </button>
  );
}

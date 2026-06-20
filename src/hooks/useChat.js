import { useState } from "react";
import { sendToAI } from "../service/aiService";

const sessionId = localStorage.getItem("chatSessionId") || crypto.randomUUID();

localStorage.setItem("chatSessionId", sessionId);

export default function useChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 👋 How can I help you?",
    },
  ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    try {
      const reply = await sendToAI(text, sessionId);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong.",
        },
      ]);
    }
  };

  return {
    messages,
    sendMessage,
  };
}

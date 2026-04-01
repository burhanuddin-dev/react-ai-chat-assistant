import Sidebar from "./Components/Sidebar.jsx";
import MainChat from "./Components/MainChat.jsx";
import Header from "./Components/Header.jsx";
import { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! 👋 Welcome to your AI assistant. I'm here to help with anything you need — questions, ideas, writing, or just a quick chat. What can I do for you today? 😊",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(true);
        const endTimer = setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("hasVisited", "true");
        }, 4000);

        return () => clearTimeout(endTimer);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading your AI assistant...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <MainChat messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;


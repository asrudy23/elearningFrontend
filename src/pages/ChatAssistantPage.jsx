import React from 'react';

// NOTE: Dans une application React :
// 1. Les liens <link> pour les polices (Work Sans, Noto Sans, Material Icons) seraient dans public/index.html.
// 2. Les variables CSS (:root) seraient dans un fichier CSS global (ex: src/index.css).

// --- Données pour les messages du chat ---
const messagesData = [
  {
    id: 1,
    sender: 'assistant',
    text: "Bonjour ! Je suis votre assistant personnel pour l'EPG. Comment puis-je vous aider aujourd'hui ?",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsPmHEWRE0nJl2iM69ODoxTQw9YNICJgXFgR8KAy1CCDkw0w8ijCLhF4uM1OI1k64FHXtdCtD7OOZeLClF5QU17xF7YoCH6Hj8-eqD9MJjuJNz6JH2ifEXE2aG2xbQdR6HIaZAjwi42PWKwuG-0ClfOFWokJaka4E_Qa0-xXHEWWqTpf_Wdq6op1LoH7JF8rWPgJ0LG3wkmCqO-L2rDI2Z-PypOkEkuVi9Nx7OmbjStmfPlzQ0XYhxdhkh2snzUWqjg5XDJYW7tr4',
  },
  {
    id: 2,
    sender: 'user',
    text: "J'ai besoin d'aide avec le cours de mathématiques.",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1FANRXU8qqmWEkYTvAIEGMfTWSPLukVtZmhRRWXHErMpm4oou3xJ5SGbUqHBKNBqHWpVQjRyW3GBLZIMhfJMDw8YoFjhIcraRRiBP4qTtWut8mqFS8MlB52ExQkJHtsP-rdYJMJ2JRQobkhTwoYsVi6NmZ39zClYwCIUQCRDcjnK9h2kgNnOoxhjGvJmFhBvbreMc8FZcLnvGGJTaw2yC7_cY_ZSVGPsWG1tXVHMW0s575AQ8wN6iMhakPti1FV5vOtkgX4ftqFA',
  }
];

// --- Composant pour un seul message ---
const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  // Styles et configurations conditionnels
  const containerClass = isUser ? 'justify-end' : 'justify-start';
  const bubbleClass = isUser 
    ? 'bg-[var(--brand-primary)] text-[var(--white)] rounded-tr-none' 
    : 'bg-[var(--brand-secondary)] text-[var(--text-primary)] rounded-tl-none';
  const authorName = isUser ? 'Vous' : 'Assistant';
  const authorAlign = isUser ? 'items-end' : 'items-start';

  const Avatar = () => (
    <div
      className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover shrink-0"
      style={{ backgroundImage: `url("${message.avatar}")` }}
    />
  );

  const Bubble = () => (
    <div className={`flex flex-col gap-1 ${authorAlign}`}>
      <p className="text-[var(--text-secondary)] text-sm font-medium">{authorName}</p>
      <div className={`rounded-xl px-4 py-3 max-w-xs ${bubbleClass}`}>
        <p className="text-base leading-relaxed">{message.text}</p>
      </div>
    </div>
  );

  return (
    <div className={`flex items-start gap-4 ${containerClass}`}>
      {isUser ? (
        <>
          <Bubble />
          <Avatar />
        </>
      ) : (
        <>
          <Avatar />
          <Bubble />
        </>
      )}
    </div>
  );
};


// --- Composant principal du Widget de Chat ---
const ChatAssistantPage = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="fixed bottom-10 right-10">
        <div className="bg-[var(--background-light)] w-[440px] h-[600px] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="p-4 border-b border-[var(--brand-secondary)] flex items-center justify-between">
            <h1 className="text-[var(--text-primary)] text-lg font-bold">Assistant EPG</h1>
            <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {messagesData.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[var(--brand-secondary)]">
            <div className="relative">
              <input
                className="w-full bg-[var(--brand-secondary)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] rounded-full py-3 pl-5 pr-14 border-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:ring-opacity-50 transition-shadow duration-200"
                placeholder="Posez votre question..."
                type="text"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--brand-primary)] text-[var(--white)] rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-colors">
                <span className="material-icons">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistantPage;
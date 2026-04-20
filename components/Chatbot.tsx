'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('jc_chatbot_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('jc_chatbot_messages', JSON.stringify(messages));
    }
  }, [messages, isInitialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      });

      const data = await res.json();
      
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: "Sorry, I'm having trouble connecting right now." };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gold text-void rounded-full shadow-2xl hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[80vh] bg-card border border-gold/20 rounded-sm shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-void border-b border-gold/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Bot className="text-gold" size={20} />
                <span className="font-bebas text-xl text-ink tracking-wide mt-1">JC's NLP Bot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-ash hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-void/30">
              {isInitialized && messages.length === 0 && (
                <div className="text-center text-ash text-sm mt-4 font-barlow tracking-widest">
                  Ask me anything about John Carlo's experience, skills, or projects!
                </div>
              )}
              {isInitialized && messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-sm p-3 text-sm flex gap-2 ${m.role === 'user' ? 'bg-gold/10 border border-gold/20 text-ink' : 'bg-card border border-white/5 text-ash'}`}>
                    <div className="flex-shrink-0 mt-0.5">
                      {m.role === 'user' ? <User size={14} className="text-gold" /> : <Bot size={14} className="text-gold" />}
                    </div>
                    {m.role === 'assistant' ? (
                      <div 
                        className="leading-relaxed assistant-message-content"
                        dangerouslySetInnerHTML={{ __html: m.content.replace(/\n/g, '<br />') }}
                      />
                    ) : (
                      <div className="leading-relaxed whitespace-pre-wrap">{m.content}</div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card border border-white/5 text-ash rounded-sm p-3 text-sm flex gap-2">
                    <Bot size={14} className="text-gold" />
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-void border-t border-gold/10 flex gap-2 flex-shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-card border border-white/10 rounded-sm px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-gold text-void p-2 rounded-sm hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

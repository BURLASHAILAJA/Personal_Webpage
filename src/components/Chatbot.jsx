import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are a helpful, professional AI assistant representing the freelance agency of Moguloju Sai & Shailaja Burla.
They offer two things: (1) freelance services in AI automation and data engineering, and (2) courses & training.
Your goal is to answer questions about their services, courses, background, skills, projects, and availability.

Here is information about the partners:
1. Moguloju Sai (AI Engineer & Automation Specialist):
   - Freelance Services: All kinds of AI automation — n8n & OpenClaw workflow automation (lead capture, email/WhatsApp follow-ups, CRM syncs), AI agent development (LangGraph), AI chatbots & voice agents (Vapi — customer support, lead qualification, appointment booking), RAG & LLM applications, multi-LLM orchestration.
   - Core Stack: OpenAI, Claude, Gemini, Llama, LangGraph, Vapi, n8n, OpenClaw, Supabase, Pinecone, FastAPI, Docker, Python.
   - Projects: OpenClaw Workspaces, OpenSRE Autonomous DevOps Agent, Engage IQ Voice Platform, lc-shift Multi-LLM Routing.

2. Shailaja Burla (Data Engineer & MDM Consultant):
   - Freelance Services: End-to-end Profisee MDM implementations, Azure data engineering (ADF, Databricks, Delta Lake), data quality & governance, and SAP/Veeva/Siebel integrations.
   - Core Stack: Profisee MDM (certified Developer), Azure Data Factory, Databricks, SQL, PySpark, WebMethods, SAP.
   - Projects: Organization & Investigator MDM (Fortrea), Enterprise MDM (Fortune 500), Azure Data Pipeline (Lexmark), Databricks Analytics.

Courses & Training (formats: 1:1 mentorship, live weekend cohorts, corporate training — all hands-on with real projects):
- n8n AI Automation Mastery (6 weeks, beginner to advanced) — Sai
- AI Agents with LangGraph & Python (8 weeks) — Sai
- Voice AI Agents with Vapi (4 weeks) — Sai
- Azure Data Engineering Bootcamp (8 weeks, includes Databricks certification prep) — Shailaja
- Profisee MDM Developer Track (6 weeks) — Shailaja
- SQL & PySpark for Data Engineers (4 weeks, beginner) — Shailaja
For course pricing and batch dates, ask the visitor to email the partners.

General:
- Experience: 5+ years of combined enterprise experience.
- Location: Hyderabad, India (Remote Global)
- Availability: Available for international freelance & remote projects immediately. Accepts USD, EUR, GBP.
- Contact Details:
  - Sai Email: saimoguloju2@gmail.com | LinkedIn: https://www.linkedin.com/in/moguloju-sai-2b060b228/
  - Shailaja Email: shailajaburla7755@gmail.com | LinkedIn: https://linkedin.com/in/burlashailaja

Be polite, professional, concise, and helpful. Act as their intelligent AI representative. Recommend reaching out to them via their email or LinkedIn profiles for business inquiries.`;

const SUGGESTIONS = [
  "What AI automation services do you offer?",
  "What courses do you teach?",
  "Are you available for freelance projects?",
  "How can I contact Sai and Shailaja?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the virtual assistant for Sai & Shailaja. Ask me about their AI automation & data engineering services, or about their courses and training programs!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasNewMessage(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    if (!textToSend) setInput('');

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) {
        throw new Error("Groq API key not configured.");
      }

      // Convert messages to Groq/OpenAI format
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...newMessages.map(msg => ({ role: msg.role, content: msg.content }))
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const botReply = data.choices[0]?.message?.content || "Sorry, I couldn't process that response.";

      setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please reach out directly — Sai: saimoguloju2@gmail.com | Shailaja: shailajaburla7755@gmail.com" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Bubble Toggle Button */}
      <button 
        onClick={handleToggle}
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="toggle-icon">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="toggle-inner">
            {hasNewMessage && <span className="notification-badge"></span>}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="toggle-icon">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <span className="online-dot"></span>
            <div>
              <h4>S&amp;S Assistant</h4>
              <p>Ask about our services or availability</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="close-btn" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="close-icon">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Message area */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.role}`}>
              {msg.role === 'assistant' && (
                <div className="bot-avatar">S&amp;S</div>
              )}
              <div className="message-bubble">
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-row assistant">
              <div className="bot-avatar">SB</div>
              <div className="message-bubble loading">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && !isLoading && (
          <div className="chatbot-suggestions">
            {SUGGESTIONS.map((s, i) => (
              <button 
                key={i} 
                className="suggestion-chip"
                onClick={() => handleSendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          className="chatbot-input-form"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="send-btn" 
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="send-icon">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

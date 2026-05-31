import { useState, useRef, useEffect } from 'react';

const SYSTEM_PROMPT = `You are a helpful, professional AI assistant on Shailaja Burla's portfolio website. 
Your goal is to answer questions about Shailaja's professional background, experience, skills, and availability.
Here is information about Shailaja Burla:
- Role: Master Data Management & Azure Data Engineer
- Experience: 5+ years of enterprise experience (TCS, Persistent Systems)
- Key Clients: Fortrea, Lexmark, Fortune 500 manufacturing clients
- Key Projects:
  1. Fortrea (Persistent Systems, Healthcare): Role: MDM Developer. Designed & developed Organization & Investigator Models in Profisee MDM. Resolved bugs, standardized data quality, created Match Strategies for golden record creation, tested data flow from Profisee to downstream systems (Veeva, Siebel), and conducted KT for new joiners.
  2. Enterprise MDM Implementation (TCS, Manufacturing): Golden record management for 2M+ customer records, 95% data quality score, 40% duplicate reduction.
  3. Azure Data Pipeline Optimization (Lexmark): Optimized Azure Data Factory pipelines for real-time integration (SAP & non-SAP via WebMethods), reducing processing time by 60%.
- Certifications:
  1. Profisee MDM Administrator (LP1)
  2. Profisee MDM Developer (LP4)
  3. Databricks Data Engineer (Associate)
  4. Databricks Data Analyst (Associate)
  5. Statistics for Machine Learning (Professional Certificate)
- Core Expertise:
  - Profisee MDM: Data Modeling, Quality Rules, Workflows, Governance
  - Azure Cloud Stack: Azure Data Factory (ADF) pipelines, Databricks, Data Lake Architecture
  - Data Engineering: PySpark, SQL, Python, ETL/ELT pipeline building
  - System Integration: WebMethods, SAP/non-SAP integrations
  - AI & Machine Learning: Statistics, ML foundations, LLM integrations
- Contact Details:
  - Email: shailajaburla7755@gmail.com
  - LinkedIn: https://linkedin.com/in/burlashailaja
  - Location: Hyderabad, India (Remote Global)
  - Timezone: IST (UTC+5:30), flexible hours
- Availability: Available for international freelance & remote projects immediately. Accepts payments in USD, EUR, GBP.
Be polite, professional, concise, and helpful. Do not mention that you are an AI directly, but act as Shailaja's intelligent AI representative. Recommend reaching out to Shailaja via email (shailajaburla7755@gmail.com) or LinkedIn for detailed business discussions.`;

const SUGGESTIONS = [
  "What are your certifications?",
  "Are you available for freelance projects?",
  "Tell me about your Profisee MDM experience.",
  "How can I contact you?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Shailaja's virtual assistant. Ask me anything about her skills, experience, certifications, or project availability!"
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
        { role: 'assistant', content: "Sorry, I'm having trouble connecting to the backend at the moment. Please feel free to email Shailaja directly at shailajaburla7755@gmail.com!" }
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
              <h4>Shailaja's Assistant</h4>
              <p>Online & Ready to Help</p>
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
                <div className="bot-avatar">SB</div>
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

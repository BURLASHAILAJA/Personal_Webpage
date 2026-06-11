# Sai & Shailaja — AI Automation, Data Engineering & Training

Freelancing agency website for **Moguloju Sai** (AI Engineer & Automation Specialist) and **Shailaja Burla** (Data Engineer & MDM Consultant) — offering freelance services and hands-on courses.

Built with **React 18 + Vite 5**, featuring a futuristic data-flow aesthetic with interactive animations and an AI chatbot.

## 💼 What We Offer

### Freelance Services
- **Sai — AI & Automation**: n8n & OpenClaw workflow automation, AI agent development (LangGraph), AI chatbots & voice agents (Vapi), RAG & LLM applications
- **Shailaja — Data & MDM**: Profisee MDM consulting, Azure data engineering (ADF, Databricks, Delta Lake), data quality & governance, SAP/Veeva integrations

### Courses & Training
- n8n AI Automation Mastery · AI Agents with LangGraph · Voice AI with Vapi
- Azure Data Engineering Bootcamp · Profisee MDM Developer Track · SQL & PySpark
- Formats: 1:1 mentorship, live weekend cohorts, corporate training

## 🗂 Project Structure

| Path                | Purpose                                  |
|---------------------|------------------------------------------|
| `index.html`        | Entry HTML + SEO meta                    |
| `src/App.jsx`       | Section layout                           |
| `src/components/`   | One component per page section + chatbot |
| `src/data/`         | All site content (services, courses, projects, tech stack, certifications) |
| `src/hooks/`        | Scroll animations, proficiency bars, cursor glow |
| `src/index.css`     | Design system & styles                   |

To change site content, edit the files in `src/data/` — no component changes needed.

## 🚀 Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

### Environment Variables

The chatbot uses the Groq API. Create a `.env` file:

```
VITE_GROQ_API_KEY="your-groq-api-key"
```

> ⚠️ `VITE_`-prefixed variables are bundled into the client at build time. For production, proxy the chat request through a serverless function so the key stays server-side.

## ✨ Features

- Animated data-flow particle canvas with mouse interaction
- AI chatbot (Groq / Llama 3.3) answering questions about services & courses
- Scroll-reveal animations, typing effect, animated stat counters and skill bars
- Partner color-coding throughout: cyan = Sai (AI), purple = Shailaja (Data)
- Fully responsive dark theme with glassmorphism cards

## 📄 License

© Moguloju Sai & Shailaja Burla. All rights reserved.

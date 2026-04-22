# AEGIS — The Ultimate On-chain Agentic Automation Platform 🛡️

**AEGIS** is a cutting-edge platform designed to simplify and supercharge Web3 automations. Built for the Monad ecosystem, it allows users to build, deploy, and manage intelligent crypto agents and complex on-chain workflows with ease—no manual contract writing or deep SDK knowledge required.

---

## 🚀 Key Features

- **Agentic Automations**: Use AI-powered planning to define complex triggers (price movements, on-chain events, schedules) and automated actions.
- **Natural Language Interface**: Describe what you want to automate, and AEGIS handles the logic, deployment, and execution.
- **Monad Native**: Optimized for the Monad Testnet, leveraging high throughput and low latency for real-time monitoring.
- **Unified Integrations**: Seamlessly link with **Telegram** for real-time alerts and remote agent management.
- **Secure Infrastructure**: Built-in wallet factory for agent-specific wallets, ensuring isolated and secure fund management.
- **Rich Dashboard**: Monitor execution runs, logs, and agent health in a high-fidelity terminal-style interface.

---

## 🛠️ Architecture

- **Frontend**: React (Vite) + Tailwind CSS + Wagmi/Viem. A premium, high-density UI designed for professional traders and developers.
- **Backend**: FastAPI (Python) orchestration engine.
- **Intelligence**: Gemini-powered planning and codegen agents.
- **Persistence**: Supabase (PostgreSQL + Realtime).
- **Automation Engine**: Custom-built worker and scheduler for continuous event monitoring.

---

## 🏁 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Python 3.10+
- A Supabase Project
- A Gemini API Key

### 2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Fill in your .env with Supabase, Gemini, and Wallet keys
python main.py
```

### 3. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL to your backend URL (local or deployed)
npm run dev
```

---

## 📄 Smart Contracts (Monad Testnet)
- **Agent Wallet Factory**: `0x8cbb60c06569E93a2A0AE09bc00988f62753E73E`
- **Platform Executor**: `0xf7C7FfEdc58B49C75C56019710B2C5C597C5E29E`

---

## 🏆 Hackathon Submission
This project is submitted for the **Monad Hackathon**. It demonstrates the power of combining AI agents with high-performance blockchain infrastructure to solve real-world automation challenges in DeFi and beyond.

---

## 🛡️ Security
AEGIS uses a non-custodial approach for user funds. All automated transactions are executed by agents through isolated factory-deployed wallets, which must be explicitly authorized by the user.

---

## 🤝 Contact & Support
- **Developer**: Anshul Kanswal
- **Email**: anshulkanswal01@gmail.com
- **X/Twitter**: [@anshulkanswal](https://x.com/anshulkanswal)

© 2026 AEGIS — Built with ❤️ for the Monad Community.

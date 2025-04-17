# GrammarGuru 🌟

A real-time grammar and style suggestion tool powered by advanced AI to help non-English speakers perfect their writing.

## Overview

GrammarGuru is a web application that provides instant feedback on grammar, punctuation, and style to help users improve their writing. Whether you're drafting emails, writing content, or communicating in English as a second language, GrammarGuru helps you express yourself clearly and correctly.

## Features

- **Real-time Grammar Checking**: Get immediate feedback as you type
- **Style Suggestions**: Receive recommendations for clearer, more effective phrasing
- **AI-Powered Analysis**: Advanced language model identifies grammar errors, punctuation mistakes, incorrect verb usage, tense issues, and misplaced modifiers
- **User-friendly Interface**: Clean, intuitive design with dark mode support
- **Instant Feedback**: No need to submit or wait—corrections appear in real-time

## Technology Stack

- **Frontend**: Vite + React + TypeScript
- **UI Components**: ShadCN UI components
- **Styling**: Tailwind CSS
- **Language Model**: GPT-4o-mini from OpenAI

## Project Structure

```
elegant-grammar-glow/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── GrammarCheck.tsx
│   │   ├── LoadingDots.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useLyzrApi.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── ...config files
├── .gitignore
├── README.md
├── package.json
└── ...other config files
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RahulRmCoder/elegant-grammar-glow.git
   cd elegant-grammar-glow
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your text in the input area
2. Receive immediate grammar and style suggestions
3. Apply corrections as needed
4. Enjoy improved, error-free writing!

## Agent Configuration

GrammarGuru was built using Lyzr's AgentCreate platform with the following configuration:

- **Agent Name**: Grammar Corrector
- **Description**: This helps non-English speakers to correct their email or content for grammar.
- **LLM Provider**: OpenAI
- **LLM Model**: gpt-4o-mini
- **Core Features**:
  - Knowledge Base (off)
  - Data Query (beta)
  - Short Term Memory (off)
  - Long Term Memory (off)
  - Humanizer (off)
  - Reflection (off)
  - Groundedness (off)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Lyzr AgentCreate
- UI components from ShadCN
- Powered by OpenAI's language models
## Website available at : https://elegant-grammar-glow.lovable.app/

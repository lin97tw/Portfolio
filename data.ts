import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 'ai-creative',
    title: 'AI Creative Project',
    category: 'Artificial Intelligence',
    description: 'Using AI tools to assist in creating game and story content.',
    overview: '本專案使用 AI 工具輔助創作遊戲與故事內容，從構思、敘事到視覺設計皆透過 AI 進行輔助，探索人工智慧在創意產業中的應用。',
    technologies: ['ChatGPT', 'Canva', 'AI Prompt Engineering'],
    whatIDid: '我負責設計遊戲與故事的核心概念，撰寫提示詞（prompts）引導 AI 產生內容，並整合文字與視覺素材完成作品。',
    whatILearned: '透過本專案，我理解到如何有效地與 AI 協作，並學會將創意轉化為具體且可呈現的成果。',
    date: '2025',
  },
  {
    id: 'robotics-arduino',
    title: 'Robotics & Arduino',
    category: 'Embedded Systems',
    description: 'Robotics control logic implementation using Arduino and C++.',
    overview: '本專案以機器人與 Arduino 為核心，實作基本動作控制、感測器判斷與互動行為，並應用於智能車與人形機器人實作。',
    technologies: ['Arduino', 'C / C++', 'Sensors', 'Circuit Design'],
    whatIDid: '我負責撰寫控制邏輯、連接電路與感測器，並透過程式讓機器人完成指定動作與平衡控制。',
    whatILearned: '透過實作，我加深了對嵌入式系統、硬體控制與除錯流程的理解，並培養將程式與實體裝置結合的能力。',
    date: '2024',
  },
  {
    id: 'shuttlecock-trajectory',
    title: 'Shuttlecock Trajectory',
    category: 'Simulation',
    description: 'Physics simulation of shuttlecock flight optimizing drag coefficients.',
    overview: '使用物理模型模擬羽球飛行，並最佳化空氣阻力係數。透過數值分析方法預測落點與飛行軌跡。',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Physics Modeling'],
    whatIDid: '建立物理運動方程式，實作數值積分算法，並進行數據可視化分析。',
    whatILearned: '深入了解計算物理的應用，以及如何將數學模型轉換為可執行的程式碼。',
    date: '2025',
  },
  {
    id: 'verilog-game',
    title: 'Verilog Board Game',
    category: 'Digital Logic',
    description: 'Hardware description language implementation of game logic.',
    overview: '使用 Verilog HDL 設計棋盤遊戲邏輯，實作狀態機 (FSM) 與遊戲規則判斷，並在 FPGA 開發板上驗證。',
    technologies: ['Verilog', 'VS Code', 'Digital Logic', 'ModelSim'],
    whatIDid: '設計有限狀態機來管理遊戲流程，撰寫測試平台 (Testbench) 驗證邏輯正確性。',
    whatILearned: '我學會如何用硬體描述語言實作複雜邏輯，並強化對數位電路、時序控制與狀態機的理解。',
    date: '2024',
  }
];
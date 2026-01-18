import { Projects } from '../types/Project';

export const projects: Projects = {
  'enterprise-frontend-platform': {
    id: 'enterprise-frontend-platform',
    name: 'Enterprise Frontend Platform',
    summary: [
      'Core Angular/TypeScript platform for enterprise-scale, data-intensive applications.',
      'Focus on performance, reliability, and reusable UI components across multiple teams.',
    ],
    tags: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'Enterprise Frontend' },
      { name: 'UI Systems' },
    ],
  },
  'test-automation-suite': {
    id: 'test-automation-suite',
    name: 'Test Automation Suite',
    summary: [
      'End-to-end and regression test automation for complex web applications.',
      'Improves deployment confidence with Playwright/Jest/Cypress coverage integrated into CI/CD.',
    ],
    tags: [
      { name: 'Automation' },
      { name: 'Playwright' },
      { name: 'Jest' },
      { name: 'CI/CD' },
    ],
  },
  'ai-chatbot-llm': {
    id: 'ai-chatbot-llm',
    name: 'AI Chatbot LLM Experiments',
    srcURL: { url: 'https://github.com/kiran-revally-unh/AI-chatbot-LLM' },
    summary: [
      'Experiments with LLM-powered chat experiences, tooling, and integrations.',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'LLM' },
      { name: 'AI' },
      { name: 'Experimentation' },
    ],
  },
  dutyspin: {
    id: 'dutyspin',
    name: 'DutySpin',
    srcURL: { url: 'https://github.com/kiran-revally-unh/DutySpin' },
    summary: [
      'Utility app that helps roommates coordinate shared chores with turn-based responsibilities.',
    ],
    tags: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Mobile' },
    ],
  },
};

export default projects;

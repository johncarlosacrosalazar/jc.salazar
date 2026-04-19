import { NlpManager } from 'node-nlp';
import path from 'path';
import fs from 'fs';

let manager: any = null;

export async function getNLP() {
  if (manager) return manager;

  manager = new NlpManager({ languages: ['en'], forceNER: true, nlu: { log: false } });
  
  const modelPath = path.join(process.cwd(), 'model.nlp');

  if (fs.existsSync(modelPath)) {
    console.log("Loading pre-trained NLP model...");
    await manager.load(modelPath);
  } else {
    console.log("No pre-trained model found. Training now (this might cause timeouts in serverless)...");
    
    // Add documents
    manager.addDocument('en', 'who are you', 'agent.whoami');
    manager.addDocument('en', 'what are you', 'agent.whoami');
    manager.addDocument('en', 'tell me about yourself', 'agent.whoami');
    manager.addDocument('en', 'tell me about your self', 'agent.whoami');

    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hey', 'greetings.hello');

    manager.addDocument('en', 'who is john carlo', 'john.about');
    manager.addDocument('en', 'who is john', 'john.about');
    manager.addDocument('en', 'tell me about john carlo salazar', 'john.about');

    manager.addDocument('en', 'what is your experience', 'john.experience');
    manager.addDocument('en', 'work history', 'john.experience');
    manager.addDocument('en', 'where have you worked', 'john.experience');
    manager.addDocument('en', 'jobs', 'john.experience');

    manager.addDocument('en', 'what are your skills', 'john.skills');
    manager.addDocument('en', 'tech stack', 'john.skills');
    manager.addDocument('en', 'technologies', 'john.skills');
    manager.addDocument('en', 'what do you know', 'john.skills');

    manager.addDocument('en', 'what projects have you built', 'john.projects');
    manager.addDocument('en', 'portfolio', 'john.projects');
    manager.addDocument('en', 'show me your works', 'john.projects');

    manager.addDocument('en', 'how can I contact you', 'john.contact');
    manager.addDocument('en', 'what is your email', 'john.contact');
    manager.addDocument('en', 'phone number', 'john.contact');
    manager.addDocument('en', 'whatsapp', 'john.contact');

    // Add Answers
    manager.addAnswer('en', 'agent.whoami', "I'm JC's NLP AI assistant, entirely self-hosted! I'm here to answer questions about his professional background.");
    manager.addAnswer('en', 'greetings.hello', "Hello there! I'm an NLP bot for John Carlo Salazar. Feel free to ask about his experience, projects, or contact info.");
    manager.addAnswer('en', 'john.about', "John Carlo Salazar is a Lead Web Developer & Systems Architect with 10+ years of experience engineering high-performance ecosystems for Singapore and the Philippines.");
    manager.addAnswer('en', 'john.experience', "John has over 10 years of experience. Most recently, he was Lead Web Developer at Edge Digital (2020-2025) architecting the OnePeople ecosystem. Before that, he worked at Breakthrough4business and Leentech Network Solution.");
    manager.addAnswer('en', 'john.skills', "John specializes in React, Next.js, Node.js, AWS Lambda, Laravel, and Enterprise QA. He is highly skilled in both frontend development (Tailwind, Framer Motion) and serverless backend architecture.");
    manager.addAnswer('en', 'john.projects', "John's portfolio includes the Phuckjs Page Builder, JSX Dashboard, Temasek Foundation COVID-19 sites (StayPrepared, BYOBClean), OnePeople Online, and several e-commerce/WordPress platforms.");
    manager.addAnswer('en', 'john.contact', "You can contact John via email at johncarlosacrosalazar@gmail.com or via WhatsApp at +639273315906.");

    manager.addAnswer('en', 'None', "I'm sorry, I don't have information on that. Try asking me about John's experience, skills, projects, or contact info!");

    await manager.train();
    // In serverless, we usually can't save to process.cwd() at runtime, 
    // but this is here for local development.
    try {
      manager.save(modelPath);
    } catch (e) {
      console.warn("Could not save model file (expected in serverless):", e);
    }
  }

  return manager;
}

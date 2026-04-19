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
    manager.addDocument('en', 'introduce yourself', 'agent.whoami');

    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hey', 'greetings.hello');
    manager.addDocument('en', 'good morning', 'greetings.hello');
    manager.addDocument('en', 'yo', 'greetings.hello');

    manager.addDocument('en', 'who is john carlo', 'john.about');
    manager.addDocument('en', 'who is jc', 'john.about');
    manager.addDocument('en', 'tell me about john carlo salazar', 'john.about');
    manager.addDocument('en', 'what do you know about him', 'john.about');

    manager.addDocument('en', 'what is your experience', 'john.experience');
    manager.addDocument('en', 'how many years of experience', 'john.experience');
    manager.addDocument('en', 'work history', 'john.experience');
    manager.addDocument('en', 'where have you worked', 'john.experience');
    manager.addDocument('en', 'background', 'john.experience');
    manager.addDocument('en', 'professional history', 'john.experience');

    manager.addDocument('en', 'what are your skills', 'john.skills');
    manager.addDocument('en', 'tech stack', 'john.skills');
    manager.addDocument('en', 'technologies', 'john.skills');
    manager.addDocument('en', 'what do you know', 'john.skills');
    manager.addDocument('en', 'programming languages', 'john.skills');
    manager.addDocument('en', 'do you know react', 'john.skills');
    manager.addDocument('en', 'do you know nextjs', 'john.skills');
    manager.addDocument('en', 'backend or frontend', 'john.skills');

    manager.addDocument('en', 'what projects have you built', 'john.projects');
    manager.addDocument('en', 'portfolio', 'john.projects');
    manager.addDocument('en', 'show me your works', 'john.projects');
    manager.addDocument('en', 'give me some examples of your work', 'john.projects');
    manager.addDocument('en', 'recent projects', 'john.projects');

    manager.addDocument('en', 'how can I contact you', 'john.contact');
    manager.addDocument('en', 'what is your email', 'john.contact');
    manager.addDocument('en', 'phone number', 'john.contact');
    manager.addDocument('en', 'whatsapp', 'john.contact');
    manager.addDocument('en', 'social media', 'john.contact');
    manager.addDocument('en', 'linkedin', 'john.contact');

    manager.addDocument('en', 'where do you live', 'john.location');
    manager.addDocument('en', 'what is your address', 'john.location');
    manager.addDocument('en', 'where are you located', 'john.location');
    manager.addDocument('en', 'current location', 'john.location');
    manager.addDocument('en', 'are you based in singapore', 'john.location');

    manager.addDocument('en', 'what is your education', 'john.education');
    manager.addDocument('en', 'where did you study', 'john.education');
    manager.addDocument('en', 'degree', 'john.education');
    manager.addDocument('en', 'college', 'john.education');
    manager.addDocument('en', 'university', 'john.education');

    manager.addDocument('en', 'are you for hire', 'john.hire');
    manager.addDocument('en', 'can I hire you', 'john.hire');
    manager.addDocument('en', 'available for work', 'john.hire');
    manager.addDocument('en', 'freelance', 'john.hire');
    manager.addDocument('en', 'job opportunities', 'john.hire');

    manager.addDocument('en', 'resume', 'john.resume');
    manager.addDocument('en', 'cv', 'john.resume');
    manager.addDocument('en', 'download resume', 'john.resume');
    manager.addDocument('en', 'can I see your cv', 'john.resume');

    // Add Answers
    manager.addAnswer('en', 'agent.whoami', "I'm JC's NLP AI assistant, entirely self-hosted! I'm here to answer questions about his professional background.");
    manager.addAnswer('en', 'greetings.hello', "Hello there! I'm an NLP bot for John Carlo Salazar. Feel free to ask about his experience, projects, or contact info.");
    manager.addAnswer('en', 'john.about', "John Carlo Salazar is a Lead Web Developer & Systems Architect with 10+ years of experience engineering high-performance ecosystems for Singapore and the Philippines.");
    manager.addAnswer('en', 'john.experience', "John has over 10 years of experience. Most recently, he was Lead Web Developer at Edge Digital (2020-2025). He's also worked at Breakthrough4business and Leentech Network Solution.");
    manager.addAnswer('en', 'john.skills', "John specializes in React, Next.js, Node.js, AWS Lambda, Laravel, and Enterprise QA. He is a full-stack expert with deep knowledge in serverless architecture and high-performance UI.");
    manager.addAnswer('en', 'john.projects', "John's portfolio includes the Phuckjs Page Builder, JSX Dashboard, Temasek Foundation COVID-19 sites, and OnePeople Online. You can see more details in the Projects section above!");
    manager.addAnswer('en', 'john.contact', "You can contact John via email at johncarlosacrosalazar@gmail.com, via WhatsApp at +639273315906, or find him on LinkedIn.");
    manager.addAnswer('en', 'john.location', "John is based in Trece Martires, Cavite, Philippines, but has extensive experience working with clients and teams in Singapore.");
    manager.addAnswer('en', 'john.education', "John's education details are available upon request, but he holds over a decade of hands-on experience in the software engineering industry.");
    manager.addAnswer('en', 'john.hire', "John is always open to discussing interesting new projects or roles. Feel free to reach out via email or WhatsApp!");
    manager.addAnswer('en', 'john.resume', "You can view John's full CV right here on this site, or contact him directly if you need a PDF copy.");

    manager.addAnswer('en', 'None', "I'm sorry, I don't have information on that specific detail. Try asking me about John's experience, skills, projects, or how to contact him!");

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

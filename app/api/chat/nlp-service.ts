import { NlpManager } from 'node-nlp';
import path from 'path';
import fs from 'fs';

let manager: any = null;

export async function getNLP() {
  if (manager) return manager;

  manager = new NlpManager({ languages: ['en'], forceNER: true, nlu: { log: false } });

  const modelPath = path.join(process.cwd(), 'model.nlp');

  if (fs.existsSync(modelPath)) {
    console.log(`Found model at ${modelPath}. Loading...`);
    try {
      await manager.load(modelPath);
      console.log("Pre-trained model loaded successfully.");
    } catch (err) {
      console.error("Failed to load pre-trained model:", err);
      // fallback to training later in the else block if we want, 
      // but let's see if this fails.
    }
  } else {
    console.warn(`Model file not found at ${modelPath}.`);
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
    manager.addDocument('en', 'his experience', 'john.experience');
    manager.addDocument('en', "john's experience", 'john.experience');
    manager.addDocument('en', 'his background', 'john.experience');
    manager.addDocument('en', 'his career', 'john.experience');

    manager.addDocument('en', 'work at edge digital', 'john.exp.edge');
    manager.addDocument('en', 'edge digital experience', 'john.exp.edge');
    manager.addDocument('en', 'how long at edge digital', 'john.exp.edge');
    manager.addDocument('en', 'when was he at edge digital', 'john.exp.edge');

    manager.addDocument('en', 'work at breakthrough4business', 'john.exp.b4b');
    manager.addDocument('en', 'b4b academy', 'john.exp.b4b');
    manager.addDocument('en', 'breakthrough 4 business', 'john.exp.b4b');
    manager.addDocument('en', 'when was he at b4b', 'john.exp.b4b');

    manager.addDocument('en', 'work at leentech', 'john.exp.leentech');
    manager.addDocument('en', 'leentech network solution', 'john.exp.leentech');
    manager.addDocument('en', 'junior programmer experience', 'john.exp.leentech');
    manager.addDocument('en', 'when was he at leentech', 'john.exp.leentech');

    manager.addDocument('en', 'what are your skills', 'john.skills');
    manager.addDocument('en', 'tech stack', 'john.skills');
    manager.addDocument('en', 'technologies', 'john.skills');
    manager.addDocument('en', 'what do you know', 'john.skills');
    manager.addDocument('en', 'programming languages', 'john.skills');
    manager.addDocument('en', 'do you know react', 'john.skills');
    manager.addDocument('en', 'do you know nextjs', 'john.skills');
    manager.addDocument('en', 'backend or frontend', 'john.skills');
    manager.addDocument('en', 'his skills', 'john.skills');
    manager.addDocument('en', "john's skills", 'john.skills');
    manager.addDocument('en', 'his tech stack', 'john.skills');
    manager.addDocument('en', 'his technologies', 'john.skills');

    manager.addDocument('en', 'what projects have you built', 'john.projects');
    manager.addDocument('en', 'portfolio', 'john.projects');
    manager.addDocument('en', 'show me your works', 'john.projects');
    manager.addDocument('en', 'give me some examples of your work', 'john.projects');
    manager.addDocument('en', 'recent projects', 'john.projects');
    manager.addDocument('en', 'his projects', 'john.projects');
    manager.addDocument('en', 'his project', 'john.projects');
    manager.addDocument('en', "john's projects", 'john.projects');
    manager.addDocument('en', "john's project", 'john.projects');
    manager.addDocument('en', 'what are his projects', 'john.projects');
    manager.addDocument('en', 'what are his project', 'john.projects');
    manager.addDocument('en', 'show projects', 'john.projects');
    manager.addDocument('en', 'list projects', 'john.projects');

    manager.addDocument('en', 'what is onepeople', 'john.proj.onepeople');
    manager.addDocument('en', 'tell me about onepeople', 'john.proj.onepeople');
    manager.addDocument('en', 'onepeople online', 'john.proj.onepeople');

    manager.addDocument('en', 'what is phuckjs', 'john.proj.phuckjs');
    manager.addDocument('en', 'phuckjs page builder', 'john.proj.phuckjs');

    manager.addDocument('en', 'what is jsx dashboard', 'john.proj.jsx');
    manager.addDocument('en', 'jsx dashboard', 'john.proj.jsx');

    manager.addDocument('en', 'temasek foundation projects', 'john.proj.temasek');
    manager.addDocument('en', 'stayprepared', 'john.proj.stayprepared');
    manager.addDocument('en', 'what is stayprepared', 'john.proj.stayprepared');
    manager.addDocument('en', 'oximeter', 'john.proj.oximeter');
    manager.addDocument('en', 'staywell mouth gargle', 'john.proj.gargle');
    manager.addDocument('en', 'mouth gargle', 'john.proj.gargle');
    manager.addDocument('en', 'staymasked', 'john.proj.staymasked');
    manager.addDocument('en', 'byobclean', 'john.proj.byobclean');
    manager.addDocument('en', 'pentagreen capital', 'john.proj.pentagreen');
    manager.addDocument('en', 'what is pentagreen', 'john.proj.pentagreen');
    manager.addDocument('en', 'carlo and rosette', 'john.proj.wedding');
    manager.addDocument('en', 'wedding website', 'john.proj.wedding');
    manager.addDocument('en', 'what are the covid sites', 'john.proj.temasek');

    manager.addDocument('en', 'lolas plates and pours', 'john.proj.lola');
    manager.addDocument('en', 'what is lolas', 'john.proj.lola');

    manager.addDocument('en', 'how can I contact you', 'john.contact');
    manager.addDocument('en', 'what is your email', 'john.contact');
    manager.addDocument('en', 'phone number', 'john.contact');
    manager.addDocument('en', 'whatsapp', 'john.contact');
    manager.addDocument('en', 'social media', 'john.contact');
    manager.addDocument('en', 'linkedin', 'john.contact');
    manager.addDocument('en', 'how to contact him', 'john.contact');
    manager.addDocument('en', 'his email', 'john.contact');
    manager.addDocument('en', 'his contact details', 'john.contact');
    manager.addDocument('en', 'his phone number', 'john.contact');
    manager.addDocument('en', 'his whatsapp', 'john.contact');
    manager.addDocument('en', "john's contact", 'john.contact');

    manager.addDocument('en', 'where do you live', 'john.location');
    manager.addDocument('en', 'what is your address', 'john.location');
    manager.addDocument('en', 'where are you located', 'john.location');
    manager.addDocument('en', 'current location', 'john.location');
    manager.addDocument('en', 'are you based in singapore', 'john.location');

    manager.addDocument('en', 'what is your birthday', 'john.birthday');
    manager.addDocument('en', 'when were you born', 'john.birthday');
    manager.addDocument('en', 'your birthday', 'john.birthday');
    manager.addDocument('en', 'how old are you', 'john.birthday');
    manager.addDocument('en', 'your age', 'john.birthday');
    manager.addDocument('en', 'what is your age', 'john.birthday');
    manager.addDocument('en', 'how old is john', 'john.birthday');
    manager.addDocument('en', 'birth date', 'john.birthday');

    manager.addDocument('en', 'are you married', 'john.status');
    manager.addDocument('en', 'marital status', 'john.status');
    manager.addDocument('en', 'who is your wife', 'john.status');
    manager.addDocument('en', 'do you have a wife', 'john.status');
    manager.addDocument('en', 'are you single', 'john.status');
    manager.addDocument('en', 'is he married', 'john.status');
    manager.addDocument('en', 'johns wife', 'john.status');
    manager.addDocument('en', 'civil status', 'john.status');

    manager.addDocument('en', 'what is your nickname', 'john.nickname');
    manager.addDocument('en', 'nickname', 'john.nickname');
    manager.addDocument('en', 'what can I call you', 'john.nickname');

    manager.addDocument('en', 'what is your education', 'john.education');
    manager.addDocument('en', 'where did you study', 'john.education');
    manager.addDocument('en', 'degree', 'john.education');
    manager.addDocument('en', 'college', 'john.education');
    manager.addDocument('en', 'university', 'john.education');
    manager.addDocument('en', 'school history', 'john.education');
    manager.addDocument('en', 'education history', 'john.education');
    manager.addDocument('en', 'his school history', 'john.education');
    manager.addDocument('en', 'schooling', 'john.education');
    manager.addDocument('en', 'educational background', 'john.education');
    manager.addDocument('en', 'honors', 'john.education');
    manager.addDocument('en', 'ojt', 'john.education');
    manager.addDocument('en', 'best in ojt', 'john.education');
    manager.addDocument('en', 'awards', 'john.education');

    manager.addDocument('en', 'what are your strengths', 'john.strengths');
    manager.addDocument('en', 'professional strengths', 'john.strengths');
    manager.addDocument('en', 'why should I hire you', 'john.strengths');
    manager.addDocument('en', 'your advantage', 'john.strengths');
    manager.addDocument('en', 'what makes you different', 'john.strengths');

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
    manager.addAnswer('en', 'john.about', "John Carlo Salazar (or just Carlo) is a Lead Web Developer & Systems Architect with 10+ years of experience engineering high-performance ecosystems for Singapore and the Philippines.");
    manager.addAnswer('en', 'john.experience', "John has over 10 years of experience. His professional history includes: Lead Web Developer & QA Lead at Edge Digital (2020-2025), Full-Stack Developer at Breakthrough4business (2017-2019), and Junior Programmer at Leentech Network Solution (2016-2017).");
    manager.addAnswer('en', 'john.exp.edge', "John worked at Edge Digital as a Lead Web Developer and QA Lead from 2020 to 2025. He led projects like OnePeople Online and mission-critical sites for the Temasek Foundation.");
    manager.addAnswer('en', 'john.exp.b4b', "John was a Full-Stack Web Developer at Breakthrough4business (B4B) from 2017 to 2019, where he developed the B4B Academy social learning platform.");
    manager.addAnswer('en', 'john.exp.leentech', "John started his career as a Junior Programmer at Leentech Network Solution from 2016 to 2017, focusing on Magento e-commerce and Ionic mobile development.");
    manager.addAnswer('en', 'john.skills', "John specializes in React, Next.js, Node.js, AWS Lambda, Laravel, and Enterprise QA. He is a full-stack expert with deep knowledge in serverless architecture and high-performance UI.");
    manager.addAnswer('en', 'john.projects', "John's portfolio includes the Phuckjs Page Builder, JSX Dashboard, Temasek Foundation COVID-19 sites, and OnePeople Online. Which one would you like to know more about?");
    manager.addAnswer('en', 'john.proj.onepeople', "<b>OnePeople</b> is a platform that connects people with different views through open dialogue and global voting. By sharing perspectives and participating in referendums, it helps communities understand each other and use collective insight to shape a better future.");
    manager.addAnswer('en', 'john.proj.phuckjs', "<b>Phuckjs Page Builder</b> is a premium personal project. It's a highly dynamic website builder engine developed by John to streamline complex UI creation.");
    manager.addAnswer('en', 'john.proj.jsx', "<b>JSX Dashboard</b> is a high-performance administrative interface project showcasing John's expertise in real-time data visualization and complex state management.");
    manager.addAnswer('en', 'john.proj.temasek', "John led the engineering for several nationwide COVID-19 response platforms for the <b>Temasek Foundation</b> in Singapore, including StayPrepared, Oximeter, Staymasked, and BYOBClean.");
    manager.addAnswer('en', 'john.proj.stayprepared', "<b>StayPrepared</b> is a Temasek Foundation initiative that strengthens Singapore’s emergency resilience through health programs, mask distribution, and community training.");
    manager.addAnswer('en', 'john.proj.pentagreen', "<b>Pentagreen Capital</b> is a debt financing platform launched by HSBC and Temasek to accelerate the development of sustainable infrastructure projects in Southeast Asia and beyond.");
    manager.addAnswer('en', 'john.proj.oximeter', "The <b>Oximeter</b> project was an e-commerce and distribution platform for pulse oximeters to help Singapore households monitor their health during the pandemic.");
    manager.addAnswer('en', 'john.proj.gargle', "<b>StayWell Mouth Gargle</b> is a Temasek Foundation initiative in Singapore that provided PVP-I gargle to households to support hygiene and help reduce the spread of viruses.");
    manager.addAnswer('en', 'john.proj.wedding', "The <b>Carlo and Rosette</b> project is a beautiful, high-performance wedding website built with Next.js and Framer Motion, featuring smooth animations and a premium aesthetic.");
    manager.addAnswer('en', 'john.proj.staymasked', "<b>Staymasked</b> is a nationwide distribution platform that provided free masks to Singapore residents via automated vending machines.");
    manager.addAnswer('en', 'john.proj.byobclean', "<b>BYOBClean</b> (Bring Your Own Bottle) was a Temasek Foundation initiative where Singapore households could collect free hand sanitizer to help reduce plastic waste.");
    manager.addAnswer('en', 'john.proj.lola', "<b>Lola's Plates & Pours</b> is a full-stack Next.js application designed to showcase modern UI/UX design and seamless restaurant management features.");
    manager.addAnswer('en', 'john.contact', "You can contact John via email at <a href='mailto:johncarlosacrosalazar@gmail.com'>johncarlosacrosalazar@gmail.com</a>, via WhatsApp at <a href='https://wa.me/639273315906' target='_blank'>+639273315906</a>, or find him on <a href='https://www.linkedin.com/in/john-carlo-salazar-8028083b6/' target='_blank'>LinkedIn</a>.");
    manager.addAnswer('en', 'john.location', "John lives in Brgy. San Agustin, Trece Martires City, Cavite, Philippines.");
    manager.addAnswer('en', 'john.birthday', "John was born on December 16, 1993. As of today, he is 32 years old.");
    manager.addAnswer('en', 'john.status', "John is married since December 15, 2025.");
    manager.addAnswer('en', 'john.nickname', "You can call him Carlo!");
    manager.addAnswer('en', 'john.education', "John graduated from Colegio de Amore, Batch 2014, where he was awarded 'Best in OJT'.");
    manager.addAnswer('en', 'john.strengths', "John's core strengths include his 10+ years of <b>Systems Architecture</b> expertise, a deep mastery of <b>Enterprise QA</b> for high-stakes projects, and his ability to architect scalable <b>AWS Serverless</b> ecosystems. He is known for his precision, adaptability across tech stacks, and leadership in mission-critical environments.");
    manager.addAnswer('en', 'john.hire', "John is always open to discussing interesting new projects or roles. Feel free to reach out via email or WhatsApp!");
    manager.addAnswer('en', 'john.resume', "You can view John's full CV right here on this site, or contact him directly if you need a PDF copy.");

    manager.addAnswer('en', 'None', "I'm sorry, I don't have information on that specific detail. Try asking me about John's experience, skills, projects, or how to contact him!");

    await manager.train();
    // In serverless, we usually can't save to process.cwd() at runtime, 
    // but this is here for local development.
    try {
      await manager.save(modelPath, false);
    } catch (e) {
      console.warn("Could not save model file (expected in serverless):", e);
    }
  }

  return manager;
}

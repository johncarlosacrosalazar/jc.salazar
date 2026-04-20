import { NlpManager } from 'node-nlp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function test() {
  const manager = new NlpManager({ languages: ['en'], forceNER: true, nlu: { log: false } });
  const modelPath = path.join(__dirname, '../model.nlp');
  
  console.log('Loading model...');
  await manager.load(modelPath);
  
  const response = await manager.process('en', 'what is onepeople');
  console.log('Intent:', response.intent);
  console.log('Answer:', response.answer);
}

test().catch(console.error);

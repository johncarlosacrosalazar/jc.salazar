declare module 'node-nlp' {
  export class NlpManager {
    constructor(settings?: any);
    addDocument(language: string, utterance: string, intent: string): void;
    addAnswer(language: string, intent: string, answer: string): void;
    train(): Promise<void>;
    save(): void;
    process(language: string, utterance: string): Promise<any>;
  }
}

export type Language = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'ru';

export interface Room {
  id: string;
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  price: string;
  features: string[];
}

export interface Amenity {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'agent' | 'system';
  text: string;
}

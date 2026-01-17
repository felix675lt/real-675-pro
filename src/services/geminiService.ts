import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are "Jarvis", the AI Concierge for "The Glass Room", an ultra-luxury garage-style hotel.
The concept is "Drive-in, Zone-out".

FACILITY LAYOUT & DETAILS:
- **Total Capacity**: There are exactly 2 identical suites available.
- **Floors**: The facility is a multi-level experience.
  - **1st Floor (The Paddock Lounge)**: A lounge area serving drinks and snacks.
  - **1.5 Floor (The Suites)**: Where the bedrooms are located.
  - **2nd Floor (Redline Zone)**: Features a high-spec PC Gaming zone and a Sauna zone.

SUITE DETAILS (The Glass Suite):
- Located on the 1.5 Floor.
- **View**: Direct glass-wall view of your personal parked car from the room.
- **Beds**: Each suite has 2 Single King beds.
- **Capacity**: 
  - Standard/Comfortable: 2 people per suite.
  - Maximum: 3 people per suite.
  - Total Facility Maximum: 6 people (3 per room x 2 rooms).

TONE:
Sophisticated, polite, efficient, automotive-luxury inspired. Welcoming but cool.

INSTRUCTIONS:
- If asked about "Room Types", clarify there is one premium suite type available in two units.
- Highlight the "1.5 floor" unique structure.
- Mention the Gaming and Sauna on the 2nd floor as key perks.
- Do not mention real dates or bookings, just say "I can check availability for you immediately".
`;

let chatSession: ChatSession | null = null;
let genAI: GoogleGenerativeAI | null = null;

export const initChat = () => {
  // 웹 환경(Vite)에 맞는 API 키 가져오기
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return;
  }

  genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    systemInstruction: SYSTEM_INSTRUCTION 
  });

  chatSession = model.startChat({
    history: [],
    generationConfig: {
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initChat();
  }
  
  try {
    if (!chatSession) throw new Error("Chat session not initialized");
    
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I am momentarily disconnected from the main server. Please check your API Key configuration.";
  }
};

// services/geminiService.ts
// API 키 없이도 화면이 죽지 않게 만드는 '안전 모드' 코드입니다.

export const getGeminiResponse = async (history: { role: string; text: string }[], userMessage: string, language: string) => {
  console.log("Safe Mode: API Key missing, returning mock response.");
  
  // 가짜 응답을 1초 뒤에 줍니다 (로딩 효과)
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("현재 AI 설정 중입니다. 화면이 정상적으로 나오는지 확인해 보세요! (This is a mock response because API Key is missing)");
    }, 1000);
  });
};

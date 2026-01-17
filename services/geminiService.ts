export const getGeminiResponse = async (history: { role: string; text: string }[], userMessage: string, language: string) => {
  console.log("Safe Mode: Mock response.");
  
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("현재 AI 시스템 점검 중입니다. (API Key가 없어도 화면이 뜨도록 설정된 메시지입니다)");
    }, 1000);
  });
};

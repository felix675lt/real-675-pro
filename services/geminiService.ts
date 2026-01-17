export const getGeminiResponse = async (history: any, userMessage: string, language: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("현재 AI 시스템 점검 중입니다. (화면 테스트 성공!)");
    }, 1000);
  });
};

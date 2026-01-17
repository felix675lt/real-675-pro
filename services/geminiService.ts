export const getGeminiResponse = async (history: any, userMessage: string, language: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("System Check OK");
    }, 1000);
  });
};

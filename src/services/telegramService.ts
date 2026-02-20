export interface TelegramUpdate {
    update_id: number;
    message?: {
        message_id: number;
        text: string;
        date: number;
        reply_to_message?: {
            message_id: number;
        };
    };
}

export const sendTelegramNotification = async (message: string): Promise<number | null> => {
    try {
        const response = await fetch('/api/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            console.error('Failed to send notification');
            return null;
        }

        const data = await response.json();
        return data.result?.message_id || null;
    } catch (error) {
        console.error('Error sending notification:', error);
        return null;
    }
};

export const checkNewMessages = async (): Promise<TelegramUpdate[]> => {
    try {
        const response = await fetch('/api/poll');
        if (!response.ok) return [];

        const data = await response.json();
        return data.result || [];
    } catch (error) {
        console.error('Error polling messages:', error);
        return [];
    }
};

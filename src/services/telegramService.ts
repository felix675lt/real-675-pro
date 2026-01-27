export const sendTelegramNotification = async (message: string): Promise<boolean> => {
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
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error sending notification:', error);
        return false;
    }
};

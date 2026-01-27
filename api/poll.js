export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    if (!BOT_TOKEN) {
        return res.status(500).json({ error: 'Telegram configuration missing' });
    }

    try {
        // Get updates (messages) from Telegram
        // offset parameter helps to not get the same message twice if needed, 
        // but here we just fetch recent ones and let frontend filter.
        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;

        const response = await fetch(telegramUrl);
        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.description || 'Failed to fetch updates');
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Telegram Poll Error:', error);
        return res.status(500).json({ error: 'Failed to poll messages' });
    }
}

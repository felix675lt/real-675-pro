import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'configure-server',
        configureServer(server) {
          server.middlewares.use('/api/telegram', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });

              req.on('end', async () => {
                try {
                  const { message } = JSON.parse(body);
                  const botToken = env.TELEGRAM_BOT_TOKEN;
                  const chatId = env.TELEGRAM_CHAT_ID;

                  if (!botToken || !chatId) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Missing Telegram configuration in .env' }));
                    return;
                  }

                  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
                  const response = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      chat_id: chatId,
                      text: message,
                      parse_mode: 'HTML',
                    }),
                  });

                  const data = await response.json();
                  res.statusCode = response.ok ? 200 : 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                } catch (error) {
                  console.error(error);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Internal Server Error' }));
                }
              });
            } else {
              next();
            }
          });

          // 2. Poll Updates Mock
          server.middlewares.use('/api/poll', async (req, res, next) => {
            if (req.method === 'GET') {
              try {
                const botToken = env.TELEGRAM_BOT_TOKEN;
                if (!botToken) {
                  console.log('TG Poll: No Token');
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Missing Token' }));
                  return;
                }

                const telegramUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
                const response = await fetch(telegramUrl);
                const data = await response.json();

                res.statusCode = response.ok ? 200 : 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              } catch (error) {
                console.error('TG Poll Error:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Poll Error' }));
              }
            } else {
              next();
            }
          });

          // 3. Stripe Payment Intent Mock
          server.middlewares.use('/api/create-payment-intent', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });

              req.on('end', async () => {
                try {
                  const { amount, currency = 'usd' } = JSON.parse(body);
                  const stripeSecretKey = env.STRIPE_SECRET_KEY;

                  if (!stripeSecretKey) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Missing Stripe Secret Key' }));
                    return;
                  }

                  // Dynamically import Stripe to avoid build issues if not present
                  const Stripe = (await import('stripe')).default;
                  const stripe = new Stripe(stripeSecretKey, {
                    apiVersion: '2023-10-16',
                  });

                  const paymentIntent = await stripe.paymentIntents.create({
                    amount,
                    currency,
                    automatic_payment_methods: {
                      enabled: true,
                    },
                  });

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ clientSecret: paymentIntent.client_secret }));
                } catch (error) {
                  console.error('Stripe Mock Error:', error);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: error.message || 'Internal Server Error' }));
                }
              });
            } else {
              next();
            }
          });
        },
      },
    ],
  };
})

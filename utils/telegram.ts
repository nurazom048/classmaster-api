import { Telegraf } from 'telegraf';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = botToken ? new Telegraf(botToken) : null;

/**
 * Sends a message to the configured Telegram chat.
 * @param message The message text (supports HTML formatting).
 */
export const sendTelegramMessage = async (message: string) => {
  if (!bot || !chatId) {
    console.warn("⚠️ Telegram bot token or chat ID is missing. Skipping notification.");
    return;
  }
  try {
    await bot.telegram.sendMessage(chatId, message, { parse_mode: 'HTML' });
    console.log("📨 Telegram notification sent successfully.");
  } catch (error: any) {
    console.error("❌ Failed to send Telegram notification:", error.message);
  }
};

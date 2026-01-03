import { VercelRequest, VercelResponse } from '@vercel/node';
import Groq from 'groq-sdk';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY || process.env.API_KEY,
    });

    const completion = await groq.chat.completions.create({
      messages: prompt, // The service sends [{ role: 'system', ... }, { role: 'user', ... }] which matches Groq format
      model: 'llama-3.3-70b-versatile',
      temperature: 0.5,
    });

    const text = completion.choices[0]?.message?.content || '';
    res.status(200).json({ text });
  } catch (err) {
    console.error('AI error:', err);
    res.status(500).json({ error: (err as Error).message || 'AI error' });
  }
}

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import Groq from "groq-sdk";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    // Parse body
    const body = event.body ? JSON.parse(event.body) : {};
    const { prompt } = body;

    if (!prompt) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing prompt" }),
        };
    }

    try {
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });

        const completion = await groq.chat.completions.create({
            messages: prompt,
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
        });

        const text = completion.choices[0]?.message?.content || "";

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        };
    } catch (err) {
        console.error("AI error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: (err as Error).message || "AI error" }),
        };
    }
};

export { handler };

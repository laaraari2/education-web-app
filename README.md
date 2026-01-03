<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1lZz11MrqcwxXJqq2apyUIlMR-ZaHj-l2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Locally: set the `API_KEY` in `.env.local` to your Gemini API key (used by serverless functions).
   On Vercel: set an environment variable named `API_KEY` in your project settings (do NOT expose it client-side).
   If you use Sanity/GROQ for content, also add `GROQ_API_KEY` to `.env.local` and to Vercel env vars.
   For Sanity/GROQ you will also need to set `SANITY_PROJECT_ID` and `SANITY_DATASET` (default `production`).

Examples `.env.local` (do NOT commit this file):
```
API_KEY=your_gemini_key_here
GROQ_API_KEY=your_sanity_token_here
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

Server-side usage example (in a Vercel function or other server code):
```ts
import fetchFromSanity from './services/groq';

const docs = await fetchFromSanity('*[_type == "post"]{title,slug,body}');
```
3. Run the app:
   `npm run dev`

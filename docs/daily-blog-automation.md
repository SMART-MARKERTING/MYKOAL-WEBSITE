# Daily Blog Automation

This repo supports a scheduled daily SEO blog publishing workflow.

## How it works

- GitHub Actions runs `.github/workflows/daily-seo-blog.yml` once per day at `14:00 UTC`.
- The workflow runs `npm run blog:generate`.
- `scripts/generate-daily-blog.mjs` calls the OpenRouter Chat Completions API with Structured Outputs.
- The script prepends one generated post to `client/src/lib/blog-data.ts`.
- The script also ensures every `/blog/{slug}` URL is present in `client/public/sitemap.xml`.
- The workflow runs `npm run check` and `npm run build`.
- If files changed, the workflow commits directly to `main`. Cloudflare then deploys the new post.
- Blog post URLs are date-stamped so each daily post gets a unique URL.
- The blog template renders related resources on every post, including internal MyKoal links and Smartr8 links.

## Required GitHub setup

Add this repository secret:

- `OPENROUTER_API_KEY`: OpenRouter API key used by the scheduled generator.

Optional repository variable:

- `OPENROUTER_MODEL`: Defaults to `google/gemini-2.5-flash` if unset.

Use a model that supports structured outputs. Good OpenRouter options include
`google/gemini-2.5-flash`, `openai/gpt-5-chat`, or `~openai/gpt-latest`.

## Compliance Notes

Mortgage content needs conservative language. The generator prompt blocks rates, APRs,
payments, fees, guarantees, and approval claims. Periodically review posts for:

- compliance language,
- factual accuracy,
- local-market references,
- tone,
- CTA fit,
- duplicate topic risk,
- link relevance.

Cloudflare Pages deploys after the workflow pushes to `main`.

## Manual test

Dry run without calling OpenRouter:

```bash
npm run blog:generate:dry-run
```

Generate a post locally:

```bash
OPENROUTER_API_KEY=... npm run blog:generate
```

Override the generated date:

```bash
BLOG_DATE=2026-07-09 OPENROUTER_API_KEY=... npm run blog:generate
```

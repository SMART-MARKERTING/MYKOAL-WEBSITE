# Daily Blog Automation

This repo now supports a scheduled daily SEO blog draft workflow.

## How it works

- GitHub Actions runs `.github/workflows/daily-seo-blog.yml` once per day at `14:00 UTC`.
- The workflow runs `npm run blog:generate`.
- `scripts/generate-daily-blog.mjs` calls the OpenRouter Chat Completions API with Structured Outputs.
- The script prepends one generated post to `client/src/lib/blog-data.ts`.
- The script also ensures every `/blog/{slug}` URL is present in `client/public/sitemap.xml`.
- The workflow runs `npm run check` and `npm run build`.
- If files changed, the workflow opens a draft PR. It does not auto-publish.

## Required GitHub setup

Add this repository secret:

- `OPENROUTER_API_KEY`: OpenRouter API key used by the scheduled generator.

The workflow also accepts the old `OPENAI_API_KEY` secret as a temporary fallback if an
OpenRouter key was already pasted there, but `OPENROUTER_API_KEY` is the intended name.

Optional repository variable:

- `OPENROUTER_MODEL`: Defaults to `google/gemini-2.5-flash` if unset.

Use a model that supports structured outputs. Good OpenRouter options include
`google/gemini-2.5-flash`, `openai/gpt-5-chat`, or `~openai/gpt-latest`.

## Why draft PRs

Mortgage content needs review before it goes live. The generator prompt blocks rates, APRs,
payments, fees, guarantees, and approval claims, but a human should still review each post for:

- compliance language,
- factual accuracy,
- local-market references,
- tone,
- CTA fit,
- duplicate topic risk.

Merging the draft PR triggers the normal Cloudflare Pages deployment from `main`.

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

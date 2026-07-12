# PostHog post-wizard report

The wizard has completed a full client-side PostHog integration for the WhatsApp UI project. PostHog is initialized via `instrumentation-client.ts` (the Next.js 15.3+ recommended approach), a reverse proxy is configured in `next.config.ts` to route analytics traffic through `/ingest`, and seven user interactions across five components are now tracked with `posthog.capture()`. Error tracking is enabled globally via `capture_exceptions: true` in the init config.

| Event name | Description | File |
|---|---|---|
| `conversation_opened` | User clicks on a conversation item in the chat list. | `src/components/layout/main/conversation.tsx` |
| `filter_selected` | User selects a filter tab (All, Unread, Favorites, Groups). | `src/components/layout/main/filter.tsx` |
| `navigation_tab_clicked` | User clicks a footer navigation tab (Chats, Calls, Updates, Communities, Settings). | `src/components/layout/footer/item.tsx` |
| `search_focused` | User focuses the search/AI input field to start a search. | `src/components/layout/main/search-input.tsx` |
| `new_chat_clicked` | User clicks the new chat (+) button in the header. | `src/components/layout/header.tsx` |
| `camera_clicked` | User clicks the camera button in the header. | `src/components/layout/header.tsx` |
| `menu_opened` | User clicks the ellipsis menu button in the header. | `src/components/layout/header.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/508648/dashboard/1835487)
- [Conversations Opened (wizard)](https://us.posthog.com/project/508648/insights/x7A7O3Fk)
- [Navigation Tab Clicks by Tab (wizard)](https://us.posthog.com/project/508648/insights/9hJdAq6m)
- [Filter Tab Usage (wizard)](https://us.posthog.com/project/508648/insights/JR4MKp3w)
- [Header Actions (wizard)](https://us.posthog.com/project/508648/insights/TYVmLXhy)
- [Search Usage (wizard)](https://us.posthog.com/project/508648/insights/INQ00cXz)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

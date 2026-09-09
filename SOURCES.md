# Icon Sources

Initial provider keys and display names are aligned with Langflow's sidebar bundle registry.

Every registered non-generic bundle now loads a local provider component. Components added in the full registry pass carry a `Derived from Langflow <path>` source header; `scripts/sync-langflow-icons.mjs` reproduces those local copies from `/Users/kritikaagrawal/projects/langflow/src/frontend/src/icons` without introducing a Langflow runtime dependency.

| Bundle | Source |
| --- | --- |
| AgentQL | Langflow `src/frontend/src/icons/AgentQL/AgentQL.jsx` |
| Anthropic | Langflow `src/frontend/src/icons/Anthropic/Anthropic icon - Slate.svg` |
| Google | Langflow `src/frontend/src/icons/Google/Google.jsx` |
| Apify | Langflow `src/frontend/src/icons/Apify/Apify.jsx` |
| Notion | Langflow `src/frontend/src/icons/Notion/NotionLogo.jsx` |
| Amazon | Langflow `src/frontend/src/icons/AWS/AWS.svg` |
| arXiv | Langflow `src/frontend/src/icons/ArXiv/arxiv.svg` |
| Azure | Langflow `src/frontend/src/icons/Azure/Azure.jsx` |
| Cohere | Langflow `src/frontend/src/icons/Cohere/cohere.svg` |
| DataStax | Langflow `src/frontend/src/icons/AstraDB/Favicon.svg` |
| Docling | Langflow `src/frontend/src/icons/Docling/Docling.svg` |
| DuckDuckGo | Langflow `src/frontend/src/icons/DuckDuckGo/duckduckgo-icon.svg` |
| EmpirioLabs | Langflow `src/frontend/src/icons/EmpirioLabs/empiriolabs.svg` |
| Firecrawl | Langflow `src/frontend/src/icons/Firecrawl/FirecrawlLogo.jsx` |
| IBM | Langflow `src/frontend/src/icons/IBM/watsonx/watsonx-ai.svg` |
| NextPlaid | Langflow `src/frontend/src/icons/NextPlaid/NextPlaidIcon.jsx` |
| Oracle | Langflow `src/frontend/src/icons/Oracle/oracle.svg` |
| Valkey | Langflow `src/frontend/src/icons/Valkey/Valkey.svg` |
| vLLM | Langflow `src/frontend/src/icons/vLLM/vLLM.svg` |
| OpenAI | Langflow `src/frontend/src/icons/OpenAi/openAI.svg` |
| Ollama | Langflow `src/frontend/src/icons/Ollama/Ollama.svg` |
| Exa | Langflow `src/frontend/src/icons/Exa/Exa.jsx` |
| Confluent | Langflow `src/frontend/src/icons/Confluent/Confluent.jsx` |
| PaddleOCR | Langflow `SIDEBAR_BUNDLES` `FileSearch` generic icon |
| ToolGuard | Langflow `SIDEBAR_BUNDLES` `ShieldCheck` generic icon |

## Generic Sidebar Icons

These are the only bundle keys where Langflow's `SIDEBAR_BUNDLES` itself selects a generic icon rather than a provider asset. They intentionally use local shared components, never `package.tsx`.

| Bundle key | Langflow icon | Local component |
| --- | --- | --- |
| `altk` | `Zap` | `src/icons/zap.tsx` |
| `codeagents` | `Bot` | `src/icons/bot.tsx` |
| `cuga` | `Bot` | `src/icons/bot.tsx` |
| `paddle` | `FileSearch` | `src/icons/file-search.tsx` |
| `pgvector` | `cpu` | `src/icons/cpu.tsx` |
| `toolguard` | `ShieldCheck` | `src/icons/shield-check.tsx` |
| `yahoosearch` | `trending-up` | `src/icons/trending-up.tsx` |

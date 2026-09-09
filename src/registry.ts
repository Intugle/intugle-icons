import type { BundleIconDefinition } from "./types";
const agentQLIcon = () => import("./icons/agentql");
const anthropicIcon = () => import("./icons/anthropic");
const googleIcon = () => import("./icons/google");
const apifyIcon = () => import("./icons/apify");
const notionIcon = () => import("./icons/notion");
const amazonIcon = () => import("./icons/amazon");
const arxivIcon = () => import("./icons/arxiv");
const azureIcon = () => import("./icons/azure");
const cohereIcon = () => import("./icons/cohere");
const dataStaxIcon = () => import("./icons/datastax");
const doclingIcon = () => import("./icons/docling");
const duckDuckGoIcon = () => import("./icons/duckduckgo");
const empirioLabsIcon = () => import("./icons/empiriolabs");
const firecrawlIcon = () => import("./icons/firecrawl");
const ibmIcon = () => import("./icons/ibm");
const nextPlaidIcon = () => import("./icons/nextplaid");
const oracleIcon = () => import("./icons/oracle");
const valkeyIcon = () => import("./icons/valkey");
const vllmIcon = () => import("./icons/vllm");
const openAIIcon = () => import("./icons/openai");
const ollamaIcon = () => import("./icons/ollama");
const exaIcon = () => import("./icons/exa");
const confluentIcon = () => import("./icons/confluent");
const fileSearchIcon = () => import("./icons/file-search");
const shieldCheckIcon = () => import("./icons/shield-check");

const bundleNames: Record<string, string> = {
  aiml: "AI/ML API", agentics: "Agentics", agentql: "AgentQL", altk: "ALTK", amazon: "Amazon", anthropic: "Anthropic", apify: "Apify", assemblyai: "AssemblyAI", azure: "Azure", baidu: "Baidu", bing: "Bing", cassandra: "Cassandra", chroma: "Chroma", cleanlab: "Cleanlab", clickhouse: "ClickHouse", cloudflare: "Cloudflare", codeagents: "Code Agents", cohere: "Cohere", cometapi: "CometAPI", composio: "Composio", confluence: "Confluence", couchbase: "Couchbase", crewai: "CrewAI", cuga: "CUGA", datastax: "DataStax", deepseek: "DeepSeek", docling: "Docling", duckduckgo: "DuckDuckGo", elastic: "Elastic", faiss: "FAISS", firecrawl: "Firecrawl", git: "Git", glean: "Glean", google: "Google", groq: "Groq", homeassistant: "Home Assistant", huggingface: "Hugging Face", ibm: "IBM", icosacomputing: "Icosa Computing", jigsawstack: "JigsawStack", langwatch: "LangWatch", litellm: "LiteLLM", lmstudio: "LM Studio", maritalk: "MariTalk", mem0: "Mem0", milvus: "Milvus", mistral: "MistralAI", mongodb: "MongoDB", mrscraper: "MrScraper", needle: "Needle", notdiamond: "Not Diamond", notion: "Notion", novita: "Novita", nvidia: "NVIDIA", olivya: "Olivya", ollama: "Ollama", openai: "OpenAI", openrouter: "OpenRouter", oracle: "Oracle", orcarouter: "OrcaRouter", perplexity: "Perplexity", pgvector: "pgvector", pinecone: "Pinecone", qdrant: "Qdrant", redis: "Redis", sambanova: "SambaNova", scrapegraph: "ScrapeGraph AI", searchapi: "SearchApi", serpapi: "SerpApi", spider: "Spider", supabase: "Supabase", tavily: "Tavily", toolguard: "ToolGuard", twelvelabs: "TwelveLabs", unstructured: "Unstructured", upstash: "Upstash", valkey: "Valkey", vectara: "Vectara", vertexai: "Vertex AI", vlmrun: "VLM Run", weaviate: "Weaviate", wikipedia: "Wikipedia", wolframalpha: "WolframAlpha", xai: "xAI", yahoosearch: "Yahoo! Finance", youtube: "YouTube", zep: "Zep"
};

const loaders: Record<string, BundleIconDefinition["load"]> = {
  aiml: () => import("./icons/aiml"), agentics: () => import("./icons/agentics"), altk: () => import("./icons/zap"),
  agentql: agentQLIcon, anthropic: anthropicIcon, apify: apifyIcon, google: googleIcon, notion: notionIcon, youtube: () => import("./icons/youtube"),
  assemblyai: () => import("./icons/assemblyai"), baidu: () => import("./icons/baidu"), bing: () => import("./icons/bing"),
  amazon: amazonIcon, arxiv: arxivIcon, azure: azureIcon, cohere: cohereIcon, datastax: dataStaxIcon, docling: doclingIcon,
  duckduckgo: duckDuckGoIcon, empiriolabs: empirioLabsIcon, firecrawl: firecrawlIcon, ibm: ibmIcon, nextplaid: nextPlaidIcon,
  cassandra: () => import("./icons/cassandra"), chroma: () => import("./icons/chroma"), cleanlab: () => import("./icons/cleanlab"), clickhouse: () => import("./icons/clickhouse"),
  cloudflare: () => import("./icons/cloudflare"), codeagents: () => import("./icons/bot"), cometapi: () => import("./icons/cometapi"), composio: () => import("./icons/composio"),
  confluence: () => import("./icons/confluence"), couchbase: () => import("./icons/couchbase"), crewai: () => import("./icons/crewai"), cuga: () => import("./icons/bot"),
  deepseek: () => import("./icons/deepseek"), elastic: () => import("./icons/elastic"), faiss: () => import("./icons/faiss"), git: () => import("./icons/git"),
  glean: () => import("./icons/glean"), groq: () => import("./icons/groq"), homeassistant: () => import("./icons/homeassistant"), huggingface: () => import("./icons/huggingface"),
  icosacomputing: () => import("./icons/icosacomputing"), jigsawstack: () => import("./icons/jigsawstack"), langwatch: () => import("./icons/langwatch"), litellm: () => import("./icons/litellm"),
  lmstudio: () => import("./icons/lmstudio"), maritalk: () => import("./icons/maritalk"), mem0: () => import("./icons/mem0"), milvus: () => import("./icons/milvus"),
  mistral: () => import("./icons/mistral"), mongodb: () => import("./icons/mongodb"), mrscraper: () => import("./icons/mrscraper"), needle: () => import("./icons/needle"),
  notdiamond: () => import("./icons/notdiamond"), novita: () => import("./icons/novita"), nvidia: () => import("./icons/nvidia"), olivya: () => import("./icons/olivya"),
  oracle: oracleIcon, valkey: valkeyIcon, vllm: vllmIcon,
  openai: openAIIcon, ollama: ollamaIcon, exa: exaIcon, confluent: confluentIcon, openrouter: () => import("./icons/openrouter"), orcarouter: () => import("./icons/orcarouter"),
  perplexity: () => import("./icons/perplexity"), pgvector: () => import("./icons/cpu"), pinecone: () => import("./icons/pinecone"), qdrant: () => import("./icons/qdrant"),
  redis: () => import("./icons/redis"), sambanova: () => import("./icons/sambanova"), scrapegraph: () => import("./icons/scrapegraph"), searchapi: () => import("./icons/searchapi"),
  serpapi: () => import("./icons/serpapi"), spider: () => import("./icons/spider"), supabase: () => import("./icons/supabase"), tavily: () => import("./icons/tavily"),
  twelvelabs: () => import("./icons/twelvelabs"), unstructured: () => import("./icons/unstructured"), upstash: () => import("./icons/upstash"), vectara: () => import("./icons/vectara"),
  vertexai: () => import("./icons/vertexai"), vlmrun: () => import("./icons/vlmrun"), weaviate: () => import("./icons/weaviate"), wikipedia: () => import("./icons/wikipedia"),
  wolframalpha: () => import("./icons/wolframalpha"), xai: () => import("./icons/xai"), yahoosearch: () => import("./icons/trending-up"), zep: () => import("./icons/zep"),
  paddle: fileSearchIcon, toolguard: shieldCheckIcon,
};

// These keys use the exact generic icon selected by Langflow's sidebar registry.
export const genericBundleIconKeys = ["altk", "codeagents", "cuga", "paddle", "pgvector", "toolguard", "yahoosearch"] as const;

export const bundleIcons: Record<string, BundleIconDefinition> = Object.fromEntries(
  Object.entries(bundleNames).map(([bundle, displayName]) => [bundle, { bundle, displayName, load: loaders[bundle]! }]),
);

export function getBundleIcon(bundle: string) {
  return bundleIcons[bundle];
}

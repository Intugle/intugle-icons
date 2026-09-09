import { lazy, Suspense } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/bundle-icon.tsx

// src/registry.ts
var agentQLIcon = () => import('./agentql-JBMBUQHH.js');
var anthropicIcon = () => import('./anthropic-ZPDTCTGC.js');
var googleIcon = () => import('./google-F2GORDXB.js');
var apifyIcon = () => import('./apify-MW4VKN2E.js');
var notionIcon = () => import('./notion-EKYRCJ2L.js');
var amazonIcon = () => import('./amazon-TDGZYM7Y.js');
var arxivIcon = () => import('./arxiv-4W7QVNHM.js');
var azureIcon = () => import('./azure-Z6ZOPCTK.js');
var cohereIcon = () => import('./cohere-RWOLVQIT.js');
var dataStaxIcon = () => import('./datastax-N56TGJ6B.js');
var doclingIcon = () => import('./docling-BEM4L52K.js');
var duckDuckGoIcon = () => import('./duckduckgo-DB35OJGR.js');
var empirioLabsIcon = () => import('./empiriolabs-IXKSVFTW.js');
var firecrawlIcon = () => import('./firecrawl-4UK5NLAF.js');
var ibmIcon = () => import('./ibm-PA7D6VIW.js');
var nextPlaidIcon = () => import('./nextplaid-UFWB2YFK.js');
var oracleIcon = () => import('./oracle-4SJABMCZ.js');
var valkeyIcon = () => import('./valkey-NRBHZACH.js');
var vllmIcon = () => import('./vllm-PJXO4OEK.js');
var openAIIcon = () => import('./openai-Y2FWQZNW.js');
var ollamaIcon = () => import('./ollama-VOSHHQ5D.js');
var exaIcon = () => import('./exa-RZUQF42G.js');
var confluentIcon = () => import('./confluent-BBZ2E23G.js');
var fileSearchIcon = () => import('./file-search-ZP2J7OEQ.js');
var shieldCheckIcon = () => import('./shield-check-DAE5MVOW.js');
var bundleNames = {
  aiml: "AI/ML API",
  agentics: "Agentics",
  agentql: "AgentQL",
  altk: "ALTK",
  amazon: "Amazon",
  anthropic: "Anthropic",
  apify: "Apify",
  assemblyai: "AssemblyAI",
  azure: "Azure",
  baidu: "Baidu",
  bing: "Bing",
  cassandra: "Cassandra",
  chroma: "Chroma",
  cleanlab: "Cleanlab",
  clickhouse: "ClickHouse",
  cloudflare: "Cloudflare",
  codeagents: "Code Agents",
  cohere: "Cohere",
  cometapi: "CometAPI",
  composio: "Composio",
  confluence: "Confluence",
  couchbase: "Couchbase",
  crewai: "CrewAI",
  cuga: "CUGA",
  datastax: "DataStax",
  deepseek: "DeepSeek",
  docling: "Docling",
  duckduckgo: "DuckDuckGo",
  elastic: "Elastic",
  faiss: "FAISS",
  firecrawl: "Firecrawl",
  git: "Git",
  glean: "Glean",
  google: "Google",
  groq: "Groq",
  homeassistant: "Home Assistant",
  huggingface: "Hugging Face",
  ibm: "IBM",
  icosacomputing: "Icosa Computing",
  jigsawstack: "JigsawStack",
  langwatch: "LangWatch",
  litellm: "LiteLLM",
  lmstudio: "LM Studio",
  maritalk: "MariTalk",
  mem0: "Mem0",
  milvus: "Milvus",
  mistral: "MistralAI",
  mongodb: "MongoDB",
  mrscraper: "MrScraper",
  needle: "Needle",
  notdiamond: "Not Diamond",
  notion: "Notion",
  novita: "Novita",
  nvidia: "NVIDIA",
  olivya: "Olivya",
  ollama: "Ollama",
  openai: "OpenAI",
  openrouter: "OpenRouter",
  oracle: "Oracle",
  orcarouter: "OrcaRouter",
  perplexity: "Perplexity",
  pgvector: "pgvector",
  pinecone: "Pinecone",
  qdrant: "Qdrant",
  redis: "Redis",
  sambanova: "SambaNova",
  scrapegraph: "ScrapeGraph AI",
  searchapi: "SearchApi",
  serpapi: "SerpApi",
  spider: "Spider",
  supabase: "Supabase",
  tavily: "Tavily",
  toolguard: "ToolGuard",
  twelvelabs: "TwelveLabs",
  unstructured: "Unstructured",
  upstash: "Upstash",
  valkey: "Valkey",
  vectara: "Vectara",
  vertexai: "Vertex AI",
  vlmrun: "VLM Run",
  weaviate: "Weaviate",
  wikipedia: "Wikipedia",
  wolframalpha: "WolframAlpha",
  xai: "xAI",
  yahoosearch: "Yahoo! Finance",
  youtube: "YouTube",
  zep: "Zep"
};
var loaders = {
  aiml: () => import('./aiml-HJ32NION.js'),
  agentics: () => import('./agentics-6RBR6Q7R.js'),
  altk: () => import('./zap-ADEQUS3T.js'),
  agentql: agentQLIcon,
  anthropic: anthropicIcon,
  apify: apifyIcon,
  google: googleIcon,
  notion: notionIcon,
  youtube: () => import('./youtube-XYSNQW2V.js'),
  assemblyai: () => import('./assemblyai-H2ODBLT6.js'),
  baidu: () => import('./baidu-RGP3ONKC.js'),
  bing: () => import('./bing-U53TPXVJ.js'),
  amazon: amazonIcon,
  arxiv: arxivIcon,
  azure: azureIcon,
  cohere: cohereIcon,
  datastax: dataStaxIcon,
  docling: doclingIcon,
  duckduckgo: duckDuckGoIcon,
  empiriolabs: empirioLabsIcon,
  firecrawl: firecrawlIcon,
  ibm: ibmIcon,
  nextplaid: nextPlaidIcon,
  cassandra: () => import('./cassandra-GZTVQKME.js'),
  chroma: () => import('./chroma-2GEFBQ75.js'),
  cleanlab: () => import('./cleanlab-PNWZ3AHA.js'),
  clickhouse: () => import('./clickhouse-4XYUWTYN.js'),
  cloudflare: () => import('./cloudflare-XOFZZCCS.js'),
  codeagents: () => import('./bot-NUKJFO6N.js'),
  cometapi: () => import('./cometapi-DPGY6JUS.js'),
  composio: () => import('./composio-3SB5CR5Y.js'),
  confluence: () => import('./confluence-JNQPSHER.js'),
  couchbase: () => import('./couchbase-YWN6VNIN.js'),
  crewai: () => import('./crewai-WXJRAATC.js'),
  cuga: () => import('./bot-NUKJFO6N.js'),
  deepseek: () => import('./deepseek-Q7I2GYUX.js'),
  elastic: () => import('./elastic-IRPACTSZ.js'),
  faiss: () => import('./faiss-2K7FT2XI.js'),
  git: () => import('./git-HJQLDSGO.js'),
  glean: () => import('./glean-EFH6JOOH.js'),
  groq: () => import('./groq-EG3554SU.js'),
  homeassistant: () => import('./homeassistant-CLK7PU3M.js'),
  huggingface: () => import('./huggingface-JTFQV6Y4.js'),
  icosacomputing: () => import('./icosacomputing-MDINSAMT.js'),
  jigsawstack: () => import('./jigsawstack-U5ZWBQBY.js'),
  langwatch: () => import('./langwatch-3DLOJ53S.js'),
  litellm: () => import('./litellm-KBACG6Y5.js'),
  lmstudio: () => import('./lmstudio-EIO5KSWE.js'),
  maritalk: () => import('./maritalk-G3Z2NCCW.js'),
  mem0: () => import('./mem0-LTOC7L6G.js'),
  milvus: () => import('./milvus-3POXHD7V.js'),
  mistral: () => import('./mistral-B4G5NEPG.js'),
  mongodb: () => import('./mongodb-B2SHMXCM.js'),
  mrscraper: () => import('./mrscraper-JKVHPBWE.js'),
  needle: () => import('./needle-AHCODXCP.js'),
  notdiamond: () => import('./notdiamond-GGXAQYQX.js'),
  novita: () => import('./novita-VVPQQDLZ.js'),
  nvidia: () => import('./nvidia-OZSRIC5F.js'),
  olivya: () => import('./olivya-DNZU5YEP.js'),
  oracle: oracleIcon,
  valkey: valkeyIcon,
  vllm: vllmIcon,
  openai: openAIIcon,
  ollama: ollamaIcon,
  exa: exaIcon,
  confluent: confluentIcon,
  openrouter: () => import('./openrouter-KTIW464Y.js'),
  orcarouter: () => import('./orcarouter-R72Y25V7.js'),
  perplexity: () => import('./perplexity-XLAI2RJA.js'),
  pgvector: () => import('./cpu-OCB7OYYS.js'),
  pinecone: () => import('./pinecone-YPPLRJFR.js'),
  qdrant: () => import('./qdrant-GUC3BPQ4.js'),
  redis: () => import('./redis-O6Z5ZK3F.js'),
  sambanova: () => import('./sambanova-YSXY4ASB.js'),
  scrapegraph: () => import('./scrapegraph-UPR26LNK.js'),
  searchapi: () => import('./searchapi-JZBSCALY.js'),
  serpapi: () => import('./serpapi-VF36ANXZ.js'),
  spider: () => import('./spider-63AWRDUP.js'),
  supabase: () => import('./supabase-JQMQNKCT.js'),
  tavily: () => import('./tavily-CGBDVABT.js'),
  twelvelabs: () => import('./twelvelabs-CVTBLO5J.js'),
  unstructured: () => import('./unstructured-ULNLME27.js'),
  upstash: () => import('./upstash-Y7J4SOS2.js'),
  vectara: () => import('./vectara-AC3GEQXE.js'),
  vertexai: () => import('./vertexai-FQQIHBIE.js'),
  vlmrun: () => import('./vlmrun-N2WNOYTA.js'),
  weaviate: () => import('./weaviate-LRKYNABF.js'),
  wikipedia: () => import('./wikipedia-NXZN7T25.js'),
  wolframalpha: () => import('./wolframalpha-GPULMQHJ.js'),
  xai: () => import('./xai-N5THQNMQ.js'),
  yahoosearch: () => import('./trending-up-FTKUNAQ7.js'),
  zep: () => import('./zep-C7D4F37V.js'),
  paddle: fileSearchIcon,
  toolguard: shieldCheckIcon
};
var genericBundleIconKeys = ["altk", "codeagents", "cuga", "paddle", "pgvector", "toolguard", "yahoosearch"];
var bundleIcons = Object.fromEntries(
  Object.entries(bundleNames).map(([bundle, displayName]) => [bundle, { bundle, displayName, load: loaders[bundle] }])
);
function getBundleIcon(bundle) {
  return bundleIcons[bundle];
}
function BundleIcon({ bundle, fallback: Fallback, size = 20 }) {
  const definition = getBundleIcon(bundle);
  if (!definition) return /* @__PURE__ */ jsx(Fallback, { width: size, height: size });
  const Icon = lazy(definition.load);
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Fallback, { width: size, height: size }), children: /* @__PURE__ */ jsx(Icon, { width: size, height: size }) });
}

export { BundleIcon, bundleIcons, genericBundleIconKeys, getBundleIcon };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
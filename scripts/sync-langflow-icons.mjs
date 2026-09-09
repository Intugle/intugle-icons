import { readFileSync, writeFileSync } from "node:fs";

const langflowIcons = "/Users/kritikaagrawal/projects/langflow/src/frontend/src/icons/";
const jsxIcons = {
  aiml: "AIML/AI-ML.jsx", agentics: "Agentics/Agentics.jsx", assemblyai: "AssemblyAI/AssemblyAI.jsx", baidu: "QianFanChat/QianFanChat.jsx", bing: "Bing/Bing.jsx", cassandra: "Cassandra/Cassandra.jsx", chroma: "ChromaIcon/Chroma.jsx", cleanlab: "Cleanlab/Cleanlab.jsx", clickhouse: "Clickhouse/Clickhouse.jsx", cloudflare: "Cloudflare/Cloudflare.jsx", cometapi: "CometAPI/cometapi.jsx", composio: "Composio/composio.jsx", confluence: "Confluence/Confluence.jsx", couchbase: "Couchbase/Couchbase.jsx", crewai: "CrewAI/CrewAiIcon.jsx", deepseek: "DeepSeek/DeepSeekIcon.jsx", elastic: "ElasticsearchStore/ElasticsearchLogo.jsx", faiss: "Meta/MetaIcon.jsx", git: "GitLoader/GitLoader.jsx", glean: "Glean/Glean.jsx", groq: "Groq/GroqLogo.jsx", homeassistant: "HomeAssistant/HomeAssistant.jsx", huggingface: "HuggingFace/HfLogo.jsx", icosacomputing: "Icosa/Icosa.jsx", jigsawstack: "JigsawStack/JigsawStackIcon.jsx", langwatch: "Langwatch/langwatch.jsx", litellm: "LiteLLM/LiteLLMIcon.jsx", lmstudio: "LMStudio/LMStudioIcon.jsx", maritalk: "Maritalk/MaritalkIcon.jsx", mem0: "Mem0/SvgMem.jsx", milvus: "Milvus/Milvus.jsx", mistral: "mistral/mistralIcon.jsx", mongodb: "MongoDB/MongodbIcon.jsx", mrscraper: "Mrscraper/MrscraperIcon.jsx", notdiamond: "NotDiamond/NotDiamondIcon.jsx", novita: "Novita/novita.jsx", nvidia: "Nvidia/nvidia.jsx", olivya: "Olivya/olivya.jsx", openrouter: "OpenRouter/OpenRouterIcon.jsx", orcarouter: "OrcaRouter/OrcaRouterIcon.jsx", perplexity: "Perplexity/Perplexity.jsx", pinecone: "Pinecone/PineconeLogo.jsx", qdrant: "QDrant/QDrant.jsx", redis: "Redis/Redis.jsx", sambanova: "SambaNova/SambaNovaLogo.jsx", scrapegraph: "ScrapeGraphAI/ScrapeGraphAI.jsx", searchapi: "SearchAPI/SearchAPI.jsx", serpapi: "SerpSearch/SerpSearch.jsx", spider: "Spider/SpiderIcon.jsx", supabase: "supabase/SupabaseIcon.jsx", tavily: "Tavily/Tavily.jsx", twelvelabs: "TwelveLabs/TwelveLabsLogo.jsx", unstructured: "Unstructured/Unstructured.jsx", upstash: "Upstash/UpstashIcon.jsx", vectara: "VectaraIcon/Vectara.jsx", vertexai: "VertexAI/VertexAi.jsx", weaviate: "Weaviate/Weaviate.jsx", wikipedia: "Wikipedia/Wikipedia.jsx", wolframalpha: "Wolfram/Wolfram.jsx", xai: "xAI/xAIIcon.jsx", zep: "ZepMemory/ZepMemory.jsx",
};

for (const [name, source] of Object.entries(jsxIcons)) {
  const contents = readFileSync(`${langflowIcons}${source}`, "utf8");
  writeFileSync(`src/icons/${name}.tsx`, `// @ts-nocheck\n// Derived from Langflow ${source}.\n${contents}`);
}

const svgIcons = { needle: "Needle/needle-icon.svg", vlmrun: "VLMRun/vlm-blue.svg" };

for (const [name, source] of Object.entries(svgIcons)) {
  const svg = readFileSync(`${langflowIcons}${source}`, "utf8").replace(/^<\?xml[^>]*>\s*/, "");
  const openingTag = svg.match(/<svg\b([^>]*)>/i)?.[1] ?? "";
  const viewBox = openingTag.match(/\bviewBox=["']([^"']+)["']/i)?.[1] ?? "0 0 24 24";
  const content = svg.replace(/^<svg\b[^>]*>/i, "").replace(/<\/svg>\s*$/i, "");
  const componentName = `${name[0].toUpperCase()}${name.slice(1)}Icon`;
  writeFileSync(`src/icons/${name}.tsx`, `import type { SVGProps } from "react";\n\nconst content = ${JSON.stringify(content)};\n\n// Derived from Langflow ${source}.\nexport default function ${componentName}(props: SVGProps<SVGSVGElement>) {\n  return <svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" {...props} dangerouslySetInnerHTML={{ __html: content }} />;\n}\n`);
}

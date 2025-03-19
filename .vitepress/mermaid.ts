import type { MarkdownRenderer } from "vitepress";

const MermaidExample = (md: MarkdownRenderer) => {
  const defaultRenderer = md.renderer.rules.fence;

  if (!defaultRenderer) {
    throw new Error("defaultRenderer is undefined");
  }

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index]!;
    const language = token.info.trim();
    if (language.startsWith("mermaid")) {
      const key = index;
      return `
      <Suspense>
        <template #default>
          <Mermaid id="mermaid-${key}" graph="${encodeURIComponent(token.content)}" />
        </template>
        <!-- loading state via #fallback slot -->
        <template #fallback>
          Loading...
        </template>
      </Suspense>
`;
    }

    return defaultRenderer(tokens, index, options, env, slf);
  };
};

export default MermaidExample;

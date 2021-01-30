import { useAsync } from "react-use";

export const useMarkdown = (lang: string, hash: string) => {
  console.log(lang, hash);
  return useAsync(async () => {
    const res = await fetch(`/articles/${lang}/${hash}.md`);
    if (!res.ok) throw new Error(res.statusText);
    return await res.text();
  }, [lang, hash]);
};

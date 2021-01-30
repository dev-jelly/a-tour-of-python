import { useAsync } from "react-use";

export const useCode = (lang: string, hash: string) => {
  return useAsync(async () => {
    const res = await fetch(`/articles/${lang}/${hash}.py`);
    if (!res.ok) throw new Error(res.statusText);
    return await res.text();
  }, [lang, hash]);
};

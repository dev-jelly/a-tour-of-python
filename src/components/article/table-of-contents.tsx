import React from "react";
import useSWR from "swr";

const tableOfContentsFetcher = (lang: string) => {
  return async () => {
    const response = await fetch(`/articles/${lang}/table-of-contents.json`);
    return response.json();
  };
};

type TableOfContentsProps = {
  lang: string;
};

type TOCChild = {
  title: string;
  next: string;
  children?: TOC;
};

type TOC = Record<string, TOCChild>;

type TableOfContentChildProps = {
  toc: TOCChild;
  current: string;
  path: string;
};

export const TableOfContentChild: React.FC<TableOfContentChildProps> = ({
  toc,
  current,
  path,
}: TableOfContentChildProps) => {
  console.log(toc);
  if (toc.children) {
    return (
      <div className={"pl-2"}>
        <a href={`#${path ?? ""}${current}/intro`}>{toc.title}</a>
        {Object.keys(toc.children).map((k) => {
          const child = toc.children?.[k]!;
          return (
            <TableOfContentChild
              toc={child}
              current={k}
              path={`${path ? path : ""}${current}/`}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className={"pl-2"}>
      <a href={`#${path}${current}`}>{toc.title}</a>
    </div>
  );
};

export const TableOfContents: React.FC<TableOfContentsProps> = (
  props: TableOfContentsProps
) => {
  const { data: toc } = useSWR<TOC>(
    `/articles/${props.lang}/table-of-contents`,
    tableOfContentsFetcher(props.lang)
  );

  if (!toc) return <></>;

  const rootKeys = Object.keys(toc);

  return (
    <div className={"py-2 pl-2"}>
      {rootKeys.map((key) => {
        return <TableOfContentChild toc={toc[key]} current={key} path={""} />;
      })}
    </div>
  );
};

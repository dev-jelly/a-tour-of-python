import React from "react";
import SyntaxHighlighter, {SyntaxHighlighterProps,} from "react-syntax-highlighter";
import ReactMarkdown, {ReactMarkdownProps} from "react-markdown";

const renderers = {
  code: ({language, value}: SyntaxHighlighterProps) => {
    return <SyntaxHighlighter language={language} children={value}/>;
  },
};

type MarkdownProps = {
  children: string | undefined;
} & ReactMarkdownProps;

export default function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown renderers={renderers} children={props.children} {...props} />
  );
}

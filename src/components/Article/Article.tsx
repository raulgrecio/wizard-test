import React from "react";

import "./Article.scss";

export interface ArticleProps {
  figCaption: string;
}

export const Article: React.FC<ArticleProps> = ({ children, figCaption }) => {
  return (
    <article className={"Article"}>
      <div className={"Article-content"}>{children}</div>
      <figcaption>{figCaption}</figcaption>
    </article>
  );
};

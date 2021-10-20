import React, { FC } from "react";

import "./Title.scss";

export interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h3 className={"Title"}>{text}</h3>;
}

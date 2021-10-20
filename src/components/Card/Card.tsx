import React, { FC } from "react";

import "./Card.scss";

export interface CardProps {}

export const Card: FC<CardProps> = ({ children }) => {
  return <main className={"Card shadow-sm rounded"}>{children}</main>;
};

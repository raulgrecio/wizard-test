import React, { FC } from "react";

import "./InnerContainer.scss";

export interface InnerContainerProps {}

export const InnerContainer: FC<InnerContainerProps> = ({ children }) => {
  return <div className={"InnerContainer"}>{children}</div>;
};

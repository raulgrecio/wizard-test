import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <span>{t("components.footer")}</span>
    </footer>
  );
};

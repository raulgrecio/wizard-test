import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../../../components";
import { routes } from "../../../../core/router";

import "./Header.scss";

export function Header() {
  const { t } = useTranslation();

  return (
    <nav className={"Header"}>
      <div className={"Header-container"}>
        <LogoIcon className={"svg"} />

        <div className={"Header-container-links"}>
          <Link className={"nav-link"} to={routes.root}>
            {t("components.header.nav.home")}
          </Link>
          <Link className={"nav-link"} to={routes.checking}>
            {t("components.header.nav.checking-account")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

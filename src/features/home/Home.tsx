import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import { Button } from "../../components";
import { routes } from "../../core/router";

import "./Home.scss";

const Home = () => {
  const { t } = useTranslation("", { keyPrefix: "screens.home" });
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    history.push(routes.checking);
  };

  return (
    <main className="Home">
      <div className="Home-container">
        <h1 className="Home-container-title">{t("welcome")}</h1>
        <p>{t("paragraph-1")}</p>
        <Button variant={"primary"} onClick={handleClick}>
          {t("button")}
        </Button>
      </div>
    </main>
  );
};

export { Home };

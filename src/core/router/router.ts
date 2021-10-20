interface BaseRoutes {
  root: string;
  checking: string;
}

const baseRoutes: BaseRoutes = {
  root: "/",
  checking: "/checking-account",
};

interface Routes extends BaseRoutes {}

export const routes: Routes = {
  ...baseRoutes,
};

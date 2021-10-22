interface BaseRoutes {
  root: string;
  checking: string;
}

const baseRoutes: BaseRoutes = {
  root: "/",
  checking: "/checking-account",
};

export interface Routes extends BaseRoutes {}

export const routes: Routes = {
  ...baseRoutes,
};

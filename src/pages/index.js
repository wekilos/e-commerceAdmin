import { lazy } from "react";

export const ActiveUsers = lazy(() => import("./activeUsers/activeUsers"));
export const Contact = lazy(() => import("./contact/contact"));
export const ContactResponse = lazy(() => import("./contact/contactResponse"));
export const ActiveProducts = lazy(() => import("./pruducts/activeProduct"));
export const DisActiveProducts = lazy(() =>
  import("./pruducts/DisActiveProducts")
);
export const Baner = lazy(() => import("./restaurant-carusel/Baner"));
export const Carusel = lazy(() => import("./restaurant-carusel/carusel"));

export const MarketBaner = lazy(() => import("./market-carusel/m-baner"));
export const MarketCarousel = lazy(() => import("./market-carusel/m-carusel"));
export const MarketCardCarousel = lazy(() => import("./market-carusel/m-card-carusel"));

export const NonActiveUsers = lazy(() =>
  import("./nonActiveUsers/nonActiveUsers")
);
export const Category = lazy(() => import("./category/category"));
export const Width = lazy(() => import("./mesure/width"));
export const Length = lazy(() => import("./mesure/length"));
export const Material = lazy(() => import("./mesure/material"));
export const Color = lazy(() => import("./mesure/color"));
export const NotFound = lazy(() => import("./404/404"));
export const Login = lazy(() => import("./login/login"));

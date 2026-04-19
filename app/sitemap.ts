import type { MetadataRoute } from "next";

const BASE_URL = "https://foruagency.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/offres/livraison-complete",
    "/offres/accompagnement-continu",
    "/services/creation-site-web",
    "/services/integrations-business",
    "/services/agents-ia",
    "/services/suivi-optimisation",
    "/realisations",
    "/faq",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as any,
    priority: route === "" ? 1.0 : 0.8,
  }));
}

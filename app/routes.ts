import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("services/digital-marketing", "routes/services.digital-marketing.tsx"),
    route("services/seo-performance", "routes/services.seo-performance.tsx"),
    route("services/branding-creative", "routes/services.branding-creative.tsx"),
    route("services/web-development", "routes/services.web-development.tsx"),
    route("services/growth-consulting", "routes/services.growth-consulting.tsx"),
    route("work", "routes/work.tsx"),
    route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;

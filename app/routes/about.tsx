import type { Route } from "./+types/home";
import { About } from "../about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutPage() {
  return <About />;
}

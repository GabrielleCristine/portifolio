import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import { useTranslation } from '../i18n';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="w-full">
      {/* Passando lng e t para os componentes filhos que precisam de tradução */}
      <Hero lng={lng} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  );
}

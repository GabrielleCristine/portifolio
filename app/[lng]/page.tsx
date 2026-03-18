import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import { useTranslation } from '../i18n';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <div className="w-full">
      {/* Passando lng e t para os componentes filhos que precisam de tradução */}
      <Hero lng={lng} />
      <About lng={lng} />
      <Experience lng={lng} />
      <Projects lng={lng} />
      <Blog />
      <Contact />
    </div>
  );
}

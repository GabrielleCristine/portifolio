import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/app/i18n"
import ScrollToTop from "@/components/scroll-to-top"
import TypingText from "@/components/typing-text"

export default async function Hero({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <TypingText text={t('hero_name')} className="gradient-text" />
            </h1>
            <p className="mx-auto text-lg text-muted-foreground md:text-xl">
              {t('hero_role')}
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg">{t('description')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">{t('getInTouch')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://resume.Gabrielle.com.np/Gabrielle_Cristine.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> {t('downloadResume')}
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/GabrielleCristine" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gabriellecristine/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:gabriellecribeiro@hotmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </section>
  )
}

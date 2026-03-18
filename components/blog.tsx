import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/app/i18n"

export default async function Blog({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <section id="blog" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('blog_title')}</h2>
          </div>

          <div className="flex flex-col items-center">
            <Card className="w-full max-w-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{t('blog_card_title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('blog_card_body')}
                </p>
                <Button asChild>
                  <Link href="https://gabdata.hashnode.dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {t('blog_button')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

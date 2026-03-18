import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"
import { useTranslation } from "@/app/i18n"

export default async function About({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: t('card1_title'),
      description: t('card1_desc'),
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: t('card2_title'),
      description: t('card2_desc'),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t('card3_title'),
      description: t('card3_desc'),
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t('card4_title'),
      description: t('card4_desc'),
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('about_title')}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('about_intro')}
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                {t('about_body')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

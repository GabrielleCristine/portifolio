import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "@/app/i18n"

const certificates = [
  {
    title: "PL300: Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2025",
    tags: ["Power BI", "DAX", "Data Modeling"],
    url: "https://learn.microsoft.com/en-us/users/gabriellecristine-7996/credentials/505103ed80510ddf?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "LPI Linux Essentials",
    issuer: "Udemy",
    year: "2024",
    tags: ["Linux", "Command Line", "System Administration"],
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQE4BZwSuq-GLg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727491101019?e=1774400400&v=beta&t=xeDKFsovwHbf6OIDpxTyUycZ_Vz-brQEQ99Ki4MqJJ4",
  },
  {
    title: "dbt Fundamentals",
    issuer: "dbt Labs",
    year: "2025",
    tags: ["dbt", "SQL", "Analytics Engineering"],
    url: "",
  },
]

export default async function SkillsContent({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">{t('skills_title')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certificates.map((cert, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full border-t-4 border-t-primary flex flex-col">
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.issuer} · {cert.year}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {cert.url ? (
                  <Button asChild variant="outline" size="sm" className="w-full mt-auto">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      {t('view_certificate')}
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full mt-auto" disabled>
                    <ExternalLink className="mr-2 h-3 w-3" />
                    {t('view_certificate')}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

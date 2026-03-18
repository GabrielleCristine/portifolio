import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/app/i18n"

export default async function Projects({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)
  const projects = [
    {
      title: "Relatório Financeiro com DRE",
      description:
        "Desenvolvimento de solução analítica para acompanhamento financeiro, com modelagem e aplicação de regras de negócio via dbt. O projeto inclui visualização estruturada de DRE, indicadores de desempenho e construção de visuais personalizados com HTML e CSS.",
      tags: ["Power BI", "dbt", "HTML e CSS"],
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiMTNiN2FjMGItMTcwOC00NWFjLWJjYjAtOTA4NWVlNjE4ZGRkIiwidCI6Ijg2Yjg5ZDdkLWU1OTctNGQxMy1iNTIzLTA4Mjg2MzU0ODVkZiJ9",
    },
    {
      title: "Dashboard Estratégico de Vendas e Devoluções",
      description: "Dashboard desenvolvido para análise estratégica de vendas, com foco em indicadores de desempenho com gráfico de pareto e curva ABC.",
      tags: ["Power BI", "Big Query", "SQL"],
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiODAyOWU3NjUtZjhhZC00OGZmLTk4N2YtMTM5YjM5NWU5YjAwIiwidCI6Ijg2Yjg5ZDdkLWU1OTctNGQxMy1iNTIzLTA4Mjg2MzU0ODVkZiJ9",
    },
    {
      title: "Painel de Performance de Campanhas",
      description: "Dashboard Web de análise de tráfego pago com foco em performance de campanhas, ROI e métricas de conversão.",
      tags: ["TypeScript", "Node.js", "HTML", "CSS", "Google Analytics"],
      liveLink: "https://analise-campanhas-project.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('projects_title')}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('projects_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4 justify-center">
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Visualizar
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

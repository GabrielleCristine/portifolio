import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"
import { useTranslation } from "@/app/i18n"

export default async function Experience({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)
  const experiences = [
    {
      title: "Faculdade de Engenharia de Software",
      company: "UNOPAR - Universidade Norte do Paraná",
      period: "Jan 2021 - Jul 2025",
      achievements: [
        "Base sólida em lógica de programação, estruturas de dados e arquitetura de sistemas",
        "Aplicação de boas práticas de desenvolvimento, versionamento e organização de código",
        "Levantamento e documentação de requisitos funcionais e não funcionais",
        "onhecimento em leis digitais e privacidade de dados, com foco na LGPD",
      ],
    },
    {
      title: "Trainee de Administração de Banco de Dados",
      company: "BySeven",
      period: "Aug 2024 - Oct 2024",
      location: "Joinville, Santa Catarina",
      achievements: [
        "Apoio na administração e monitoramento de bancos de dados, garantindo desempenho e disponibilidade dos ambientes",
        "Execução de consultas SQL para análise e validação de dados",
        "Participação em atividades de otimização de performance (tuning) e organização de estruturas de dados",
        "Apoio em rotinas de backup e recuperação, garantindo integridade e segurança das informações",
      ],
    },
    {
      title: "Analista de Banco de Dados",
      company: "BySeven",
      period: "Oct 2024 - Apr 2025",
      location: "Joinville, Santa Catarina",
      achievements: [
        "Administração e suporte a bancos de dados Oracle, PostgreSQL, MySQL, DB2 e Progress, garantindo disponibilidade e desempenho dos ambientes",
        "Execução e otimização de consultas SQL, contribuindo para melhoria de performance e eficiência das operações",
        "Atuação em ambiente Linux para gerenciamento de servidores e suporte às operações de banco de dados",
        "Monitoramento e análise de performance, identificando gargalos e propondo melhorias contínuas",
        "Apoio em rotinas de backup e recuperação, assegurando integridade e segurança dos dados",
        "Colaboração na resolução de incidentes e suporte a times internos, garantindo estabilidade dos sistemas"
      ],
    },
    {
      title: "Consultora e Desenvolvedora de BI",
      company: "CDB Data Solutions",
      period: "Mai 2025 - Até o Momento",
      location: "Remoto",
      achievements: [
        "Desenvolvimento de dashboards e soluções de BI utilizando Power BI e outras ferramentas de visualização de dados",
        "Modelagem e transformação de dados para construção de indicadores estratégicos e análises de negócio",
        "Integração de múltiplas fontes de dados, garantindo consistência, qualidade e confiabilidade das informações",
        "Automação de processos e fluxos de dados utilizando SQL, Python e ferramentas da Power Platform",
        "Atuação junto às áreas de negócio para levantamento de requisitos e construção de soluções orientadas à tomada de decisão",
        "Otimização de performance em modelos de dados e relatórios, garantindo escalabilidade e eficiência"
      ],
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('experience_title')}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('experience_subtitle')}
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills lng={lng} />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Estagio Desenvolvimento de Software",
    company: "Boutiq Digital",
    period: "Jun 2023 - out 2023",
    description: "Desenvolvimento de softwares com ferramentas low code(n8n e Bitrix24)"
  },
  {
    id: 2,
    title: "Jovem Aprendiz de TI(Infraestrutura)",
    company: "Colegio Bom Jesus",
    period: "Jul 2024 - Jul 2024",
    description: "Manutenção e serviço tecnico na area de TI e infraestrutura"
  },
]

export function WorkExperienceSection() {
  return (
    <section className="mb-12">
      <h2 id="experience" className="text-2xl font-semibold mb-4">Experiência Profissional</h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
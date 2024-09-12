import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const projects = [
  { 
    id: 1, 
    name: "Elden Ring Discord Bot", 
    description: "Um bot de discord que consome uma API com as informacoes do jogo Elden Ring utilizando a biblioteca discord.js", 
    url: "https://github.com/cursebearer/Elden-ring-discord-bot", 
    image: "/images/icon-1.avif"
  },
  { 
    id: 2, 
    name: "To do list", 
    description: "Another awesome project", 
    url: "https://github.com/yourusername/project2", 
    image: "/images/user.jpg"
  },
  { 
    id: 3, 
    name: "Acervo de Filmes/Series", 
    description: "Um site com varias informacoes sobre filmes e series consumindo a API do TMDB onde os usuarios podem deixar suas avaliacoes/opinioes sobre o filme(ainda nao finalizado)", 
    url: "https://github.com/cursebearer/Movies-Website", 
    image: "/images/icon-3.jpg"
  },
]

export function ProjectsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Ver no GitHub
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
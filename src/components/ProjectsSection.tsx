import Image from 'next/image'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const projects = [
  { 
    id: 1, 
    name: "Elden Ring Discord Bot", 
    description: "Um bot de discord que consome uma API com as informacoes do jogo Elden Ring utilizando a biblioteca discord.js", 
    url_git: "https://github.com/cursebearer/Elden-ring-discord-bot", 
    image: "/images/icon-1.avif"
  },
  { 
    id: 2, 
    name: "To do list", 
    description: "Uma To do list basica feita em Typescript, NextJs e Firebase", 
    url_git: "https://github.com/cursebearer/todolist-ts-and-nextjs",
    image: "/images/todo.png"
  },
  { 
    id: 3, 
    name: "Acervo de Filmes/Series", 
    description: "Um site sobre filmes e series consumindo a API do TMDB usando Ts e NextJs (ainda nao finalizado)", 
    url_git: "https://github.com/cursebearer/Movies-Website", 
    url_domain: "",
    image: "/images/icon-3.jpg"
  },
  { 
    id: 4, 
    name: "Site para a ONG Pincel de Luz", 
    description: "Projeto referente a disciplina de aprendizagem colaborativa de nível 3 do Bacharel em Engenharia de Software na Catolica SC, onde foi criado uma aplicacao web para a ONG", 
    url_git: "https://github.com/cursebearer/NGO-Pincel-de-Luz", 
    url_domain: "https://pinceldeluz.com",
    image: "/images/icon_ong.jpg"
  },
  { 
    id: 5, 
    name: "Calculadora em flutter/dart", 
    description: "Calculadora simples feita em Flutter e Dart para um projeto da faculdade", 
    url_git: "https://github.com/cursebearer/flutter-calculator", 
    url_domain: "",
    image: "/images/calc.jpg"
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
            <CardFooter className="flex flex-col items-start">
              <a href={project.url_git} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Ver no GitHub
              </a>
              {project.url_domain && (
                <a
                  href={project.url_domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2"
                >
                  Ver Website
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

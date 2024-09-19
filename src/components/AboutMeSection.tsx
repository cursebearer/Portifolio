import { Card, CardContent } from "./ui/card"

export function AboutMeSection() {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
          Sou uma pessoa aberta ao aprendizado e com vontade de agregar ao ambiente em que eu estiver. <br/>
          <br></br>
          - Técnico em Análise e Desenvolvimento de Sistemas no SENAI/SC<br/>
          <br></br>
          - Intercâmbio na escola EC New York em 2024<br/>
          <br></br>
          - Cursando Bacharel Engenharia de Software na Católica SC<br/>
          <br></br>
          Ferramentas/linguagens que tenho conhecimento:<br/>
          <br></br>
          - JavaScript/Typescript<br/>
          - Node.js<br/>
          - React<br/>
          - Next.js<br/>
          - MySQL<br/>
          - Rest API<br/>
          - Inglês B2 upper intermediate(Certificado EC New York)<br/>
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
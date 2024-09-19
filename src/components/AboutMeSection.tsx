import { Card, CardContent } from "./ui/card"

export function AboutMeSection() {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
          Sou uma pessoa aberta ao aprendizado e com vontade de agregar ao ambiente em que eu estiver. <br/>

          Me formei em 2022 no ensino médio no Colégio Santo Antônio em Joinville e em Técnico em Análise e Desenvolvimento de Sistemas no SENAI/SC.<br/>

          Atualmente estou cursando a graduação em Engenharia de Software na PUC- Pontifícia Universidade Católica SC em Joinville.<br/>

          Ferramentas/linguagens que tenho conhecimento:<br/>

          - JavaScript, HTML, CSS<br/>
          - Node.js, C++<br/>
          - MySQL<br/>
          - Figma, Canva<br/>
          - Microsoft Word, PowerPoint, Excel<br/>
          - Inglês B2 upper intermediate(Certificado EC New York)<br/>
          - Intercâmbio EC New York<br/>
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
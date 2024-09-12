import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="bg-card shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Meu Portfólio</h1>
          <p className="mt-1 text-lg text-muted-foreground">Desenvolvedor Web e estudante de Engenharia de Software</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
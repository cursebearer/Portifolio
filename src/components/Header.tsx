'use client'

import { ThemeToggle } from './ThemeToggle'
import { Button } from "./ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100; // Ajuste este valor conforme necessário
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <header className="bg-card shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-3xl font-bold p-0 hover:bg-transparent"
            onClick={scrollToTop}
          >
            Meu Portfólio
          </Button>
          <nav className="flex space-x-2">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>Sobre Mim</Button>
            <Button variant="ghost" onClick={() => scrollToSection('experience')}>Experiência</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contato</Button>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card shadow mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center space-x-6">
        <a href="https://github.com/cursebearer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <span className="sr-only">GitHub</span>
          <GithubIcon className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-pavesi-dos-passos-488289265/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <span className="sr-only">LinkedIn</span>
          <LinkedinIcon className="h-6 w-6" />
        </a>
      </div>
    </footer>
  )
}
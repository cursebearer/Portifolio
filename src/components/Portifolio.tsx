import { Header } from './Header'
import { ProfileSection } from './ProfileSection'
import { ProjectsSection } from './ProjectsSection'
import { ContactSection } from './ContactSection'
import { Footer } from './Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ProfileSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
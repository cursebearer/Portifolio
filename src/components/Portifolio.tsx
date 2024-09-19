import { Header } from './Header'
import { AboutMeSection } from './AboutMeSection'
import { WorkExperienceSection } from './WorkExperienceSection'
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
        <WorkExperienceSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
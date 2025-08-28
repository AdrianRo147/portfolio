import AboutUI from "./ui/components/about"
import CertificationsUI from "./ui/components/certifications"
import ContactUI from "./ui/components/contact-form"
import EducationUI from "./ui/components/education"
import HeroUI from "./ui/components/hero"
import NavbarUI from "./ui/components/navbar"
import ProjectsUI from "./ui/components/projects"
import SkillsUI from "./ui/components/skills"

function App() {
  return (
    <>
      <NavbarUI />
      
      <HeroUI />
      <AboutUI />
      <SkillsUI />
      <EducationUI />
      <CertificationsUI />
      <ProjectsUI />
      <ContactUI />
    </>
  )
}

export default App

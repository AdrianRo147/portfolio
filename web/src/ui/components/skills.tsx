import DatabasesCard from "./cards/databases";
import ElectronicsCard from "./cards/electronics";
import EmbeddedSystemsCard from "./cards/embedded";
import FrameworksLibrariesCard from "./cards/frameworks-libraries";
import LanguagesCard from "./cards/languages";
import NetworkingProtocolsCard from "./cards/networking-protocols";
import ToolsPracticesCard from "./cards/tools-practices";
import WebTechnologiesCard from "./cards/web-technologies";

const cardClassName = "p-5 mt-5 w-md"

export default function SkillsUI() {
  return (
    <section id="skills">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center lg:text-left">
            Skills
          </h1>

          <div className="flex flex-row flex-wrap gap-5 justify-center lg:justify-start">
            <LanguagesCard className={cardClassName} />
            <FrameworksLibrariesCard className={cardClassName} />
            <DatabasesCard className={cardClassName} />
            <WebTechnologiesCard className={cardClassName} />
            <ToolsPracticesCard className={cardClassName} />
            <NetworkingProtocolsCard className={cardClassName} />
            <EmbeddedSystemsCard className={cardClassName} />
            <ElectronicsCard className={cardClassName} />
          </div>

        </div>
      </div>
    </section>
  )
}

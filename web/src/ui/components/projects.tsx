import CarStoreManagementProject from "./projects/car-store-management-system";
import DSAProject from "./projects/dsa";
import QrCodeGeneratorProject from "./projects/qr-code-generator";

export default function ProjectsUI() {
  return (
    <section id="projects">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center lg:text-left">
            Projects
          </h1>

          <div className="flex flex-row flex-wrap gap-5 justify-center lg:justify-start">
            <QrCodeGeneratorProject />
            <CarStoreManagementProject />
            <DSAProject />
          </div>

        </div>
      </div>
    </section>
  )
}

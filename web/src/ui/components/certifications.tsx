import LinuxCertificate from "./certificates/linux.tsx";
import CcnaCertificate from "./certificates/ccna";
import ReactCertificate from "./certificates/react";
import NextAppRouterCertificate from "./certificates/next-app-router.tsx";
import NextPagesRouterCertificate from "./certificates/nextjs-pages-router.tsx";
import SkillmeaOOPCertificate from "./certificates/skillmea-oop.tsx";

export default function CertificationsUI() {
  return (
    <section id="certifications">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center lg:text-left">
            Certifications
          </h1>

          <div className="flex flex-col gap-10 items-center lg:items-start justify-start">
            <SkillmeaOOPCertificate />
            <LinuxCertificate />
            <CcnaCertificate />
            <ReactCertificate />
            <NextAppRouterCertificate />
            <NextPagesRouterCertificate />
          </div>
      </div>
    </section>
  )
}

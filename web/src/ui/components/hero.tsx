import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function HeroUI() {
  return (
    <section id="home" className="relative text-white h-screen flex items-center mb-30">
      <div className="fixed w-140 h-320 -translate-y-87.5 left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,35%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      <div className="fixed h-320 left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,35%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
      <div className="fixed h-320 -translate-y-87.5 left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,35%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />

      <div className="relative container mx-auto px-6 lg:px-12 py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Adrián <span className="text-primary">Rovňan</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            A computer engineering student from Slovakia with interest in embedded / low-level programming, web development and networking.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button as={ Link } color="primary" variant="shadow" href="/cv.pdf">
              Download CV
            </Button>
            <Button as={ Link } color="primary" variant="bordered" href="#projects">
              Interesting projects I worked on
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
          {/*<img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" 
            alt="Hero Illustration" 
            className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl border border-white/20"
          />*/}
          <p className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl border border-white/20">Photo</p>
        </div>
      </div>
    </section>
  )
}

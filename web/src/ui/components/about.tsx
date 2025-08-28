export default function AboutUI() {
  return (
    <section id="about">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10 flex flex-col lg:flex-row items-center justify between">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            About me
          </h1>
          <p className="mt-5 text-gray-300 text-justify">Hi. I'm Computer Engineering student at Faculty of Management and Informatics at University of Žilina. I'm highly interested in Embedded Software development, low-level programming, web development and networking. During my study I gained hands-on experience with C/C++, assembly, various embedded devices such as ESP32, ATmega328P, etc., along with basics of electronics, digital logic design and measuring tools such as multi-meter and osciloscopes. I hold various certifications from networking and web development with gave me solid foundation in networking and web development. I worked on multiple interesting projects, such as management system written in C and various embedded and web applications.</p>
        </div>
      </div>
    </section>
  )
}

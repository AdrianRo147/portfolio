import BcDegreeUniEducation from "./education/bc-uni";
import SecondarySchoolEducation from "./education/secondary-school";

export default function EducationUI() {
  return (
    <section id="education">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center lg:text-left">
          Education
        </h1>

        <div className="flex flex-col gap-10 items-center lg:items-start justify-start">
          <BcDegreeUniEducation />
          <SecondarySchoolEducation />
        </div>
      </div>
    </section>
  )
}

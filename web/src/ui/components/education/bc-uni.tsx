import { Divider } from "@heroui/divider";

export default function BcDegreeUniEducation() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-5">
      <div className="flex flex-col gap-2 items-center justify-center rounded-xl bg-content1 p-3 text-center w-40">
        <p>September 2023</p>
        <Divider />
        <p>Present (Expected June 2026)</p>
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-content1 p-5 w-[90vw] lg:w-[40vw]">
        <h3 className="text-3xl font-extrabold">Computer Engineering</h3>
        <Divider />
        <h4 className="text-2xl font-bold">Faculty of Management and Informatics</h4>
        <h4 className="text-2xl font-bold">Bachelors Degree</h4>
        <Divider />
        <p className="text-xl font-medium">During study I learned various programming languages, embedded devices programming, basics of networking and electronics. I also worked on multiple interesting projects and gained multiple certificates.</p>
      </div>
    </div>
  )
}

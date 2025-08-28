import { Divider } from "@heroui/divider";

export default function SecondarySchoolEducation() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-5">
      <div className="flex flex-col gap-2 items-center justify-center rounded-xl bg-content1 p-3 text-center w-40">
        <p>September 2019</p>
        <Divider />
        <p>June 2023</p>
      </div>

      <div className="flex flex-col rounded-xl bg-content1 p-5 gap-2 w-[90vw] lg:w-[40vw]">
        <h3 className="text-3xl font-extrabold">Information Systems and Services</h3>
        <Divider />
        <h4 className="text-2xl font-bold">Private secondary vocational school - Pro Scholaris</h4>
        <h4 className="text-2xl font-bold">Secondary school leaving certificate</h4>
        <Divider />
        <p className="text-xl font-medium">During study I learned basics of programming and various web technologies.</p>
      </div>
    </div>
  )
}

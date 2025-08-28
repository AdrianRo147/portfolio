import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function ReactCertificate() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-5">
      <p className="rounded-xl bg-content1 p-3 w-40 text-center">
        August 2025
      </p>

      <div className="rounded-xl bg-content1 p-5 flex flex-col gap-3 w-[90vw] lg:w-[50vw] h-full">
        <h3 className="text-3xl font-extrabold leading-tight">
          React Foundations for Next.js
        </h3>
        <h4 className="text-2xl font-extrabold leading-tight">
          Vercel
        </h4>

        <div className="flex flex-row flex-wrap gap-3 content-start">
          <Chip
            color="primary"
            variant="bordered"
            className={chipClassName}
          >
            React.js
          </Chip>
        </div>

        <Button as={ Link } variant="shadow" color="primary" target="_blank" href="https://nextjs.org/learn/certificate?course=react-foundations&user=89554&certId=react-foundations-89554-1755277288526">
          Open certificate in new tab
        </Button>
      </div>
    </div>
  )
}

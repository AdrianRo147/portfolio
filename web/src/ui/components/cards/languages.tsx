import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Code } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function LanguagesCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Code size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Languages
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          C/C++
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Embedded C/C++
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          SQL
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Java
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          PHP
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          JavaScript / TypeScript
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          MicroPython
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Intel x86 Assembly
        </Chip>
      </CardBody>
    </Card>
  )
}

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Wrench } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function ToolsPracticesCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Wrench size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Tools & Development Practices
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Object-Oriented Programming (OOP)
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          GIT
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Object-Relational Mapping (ORM)
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Postman
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Linux
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Debugging
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Networking
        </Chip>
      </CardBody>
    </Card>
  )
}

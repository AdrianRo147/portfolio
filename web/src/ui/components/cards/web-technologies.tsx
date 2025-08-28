import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Globe } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function WebTechnologiesCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Globe size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Web Technologies
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          HTML
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          CSS
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          HTTP
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          REST API
        </Chip>
      </CardBody>
    </Card>
  )
}

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Database } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function DatabasesCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Database size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Databases
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          MySQL
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Oracle SQL
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          PostgreSQL
        </Chip>
      </CardBody>
    </Card>
  )
}

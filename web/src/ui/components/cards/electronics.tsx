import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { CircuitBoard } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function ElectronicsCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <CircuitBoard size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Electronics
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Basics of Electronic Circuits
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Resistors
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Capacitors
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Diodes
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Transistors
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Operational Amplifiers
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Multi-Meters
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Osciloscopes
        </Chip>
      </CardBody>
    </Card>
  )
}

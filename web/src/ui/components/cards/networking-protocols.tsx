import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Network } from "lucide-react";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function NetworkingProtocolsCard({
  className
}: {
  className?: string | undefined
}) {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Network size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Networking & Protocols
        </h3>
      </CardHeader>

      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Transmission Control Protocol (TCP)
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          User Datagram Protocol (UDP)
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Address Resolution Protocol (ARP)
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Wireshark
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Cisco IOS
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Packet Tracer
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          POSIX Sockets
        </Chip>
      </CardBody>
    </Card>
  )
}

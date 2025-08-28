import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function CcnaCertificate() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-5">
      <p className="rounded-xl bg-content1 p-3 w-40 text-center">
        June 2024
      </p>

      <div className="rounded-xl bg-content1 p-5 flex flex-col gap-3 w-[90vw] lg:w-[40vw]">
        <h3 className="text-3xl font-extrabold leading-tight">
          CCNA: Introduction to Networks
        </h3>
        <h4 className="text-2xl font-extrabold leading-tight">
          Cisco
        </h4>

        <div className="flex flex-row flex-wrap gap-3 content-start">
          <Chip
            color="primary"
            variant="bordered"
            className={chipClassName}
          >
            Networking
          </Chip>

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
            Wireshark
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
            Cisco IOS
          </Chip>

          <Chip
            color="primary"
            variant="bordered"
            className={chipClassName}
          >
            Packet Tracer
          </Chip>
        </div>

        <Button as={ Link } variant="shadow" color="primary" target="_blank" href="/portfolio/ccna.pdf">
          Open certificate in new tab
        </Button>
      </div>
    </div>
  )
}

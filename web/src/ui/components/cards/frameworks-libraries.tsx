import { Card, CardBody, CardHeader } from "@heroui/card"
import { Chip } from "@heroui/chip";
import { Boxes } from "lucide-react"

const chipClassName = "hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors";

export default function FrameworksLibrariesCard({
  className
}: {
  className?: string | undefined
}) {

  return (
    <Card className={className}>
      <CardHeader>
        <div className="p-2 mr-4 border border-none bg-primary rounded-xl">
          <Boxes size={32} />
        </div>

        <h3 className="font-bold text-2xl">
          Frameworks & Libraries
        </h3>
      </CardHeader>
      
      <CardBody className="flex flex-row flex-wrap gap-3 content-start">
        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          React.js
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Next.js
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Node.js
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Express.js
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Vite
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Laravel
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Symfony
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Spring
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Drizzle ORM
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Prisma ORM
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Raspberry Pi Pico SDK
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          GTK
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          ImGui
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Swing
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          JavaFX
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          TailwindCSS
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          Shadcn
        </Chip>

        <Chip
          color="primary"
          variant="bordered"
          className={chipClassName}
        >
          HeroUI
        </Chip>
      </CardBody>
    </Card>
  )
}

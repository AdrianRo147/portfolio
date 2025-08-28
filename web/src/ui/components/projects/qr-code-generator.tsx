import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GitGraph } from "lucide-react";

export default function QrCodeGeneratorProject() {
  return (
    <div className="flex flex-col items-stretch lg:items-start gap-3 mt-5">
      <h4 className="text-xl font-bold leading-tight">
        QR Code Generator
      </h4>
      <span className="text-gray-400">11th Jule 2023 - 23th Jule 2023</span>
      <p className="text-lg text-gray-300 text-justify">
        Simple GUI QR Code Generator / Reader. For this application I used Java
        and <Link isBlock showAnchorIcon href="https://github.com/zxing/zxing">ZXing library</Link> which offers
        an easy way of generating and reading QR codes. For GUI I
        used <Link isBlock showAnchorIcon href="https://openjfx.io/">JavaFX</Link> which offers easy way of make GUIs.
        As a build system I chose <Link isBlock showAnchorIcon href="https://gradle.org/">Gradle</Link> since it gave me easy way of build JAR executable and pulling
        neccessary libraries.
      </p>
      <Button as={ Link } variant="flat" color="primary" href="https://github.com/AdrianRo147/qr-code-generator"><GitGraph />Source Code</Button>
    </div>
  )
}

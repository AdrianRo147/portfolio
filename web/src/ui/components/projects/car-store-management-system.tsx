import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GitGraph } from "lucide-react";

export default function CarStoreManagementProject() {
  return (
    <div className="flex flex-col items-stretch lg:items-start gap-3 mt-5">
      <h4 className="text-xl font-bold leading-tight">
        Car Store Management System
      </h4>
      <span className="text-gray-400">31th October 2024 - 16th January 2025</span>
      <p className="text-lg text-gray-300 text-justify">
        In this project I made a simple command-line based management system made in C with POSIX signal handling and simple file-based database. This project offers
        various features such as CRUD operations of content of management system, simple file-based database format with predefined attributes and syntax which is parsed
        during runtime, make build system and so on. During working on this project I learned about heap allocation, pointer arithmetrics, finding and solving
        memory leaks using valgrind, basic data structure (since C doesn't offer any, unlike C++), algorithm for parsing my database format and POSIX signals
        since I needed to save database into file on application close.
      </p>
      <Button as={ Link } variant="flat" color="primary" href="https://github.com/AdrianRo147/car-store-management-system"><GitGraph />Source Code</Button>
    </div>
  )
}

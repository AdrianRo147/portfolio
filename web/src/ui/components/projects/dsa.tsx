import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GitGraph } from "lucide-react";

export default function DSAProject() {
  return (
    <div className="flex flex-col items-stretch lg:items-start gap-3 mt-5">
      <h4 className="text-xl font-bold leading-tight">
        Data Structure and Algorithms Library
      </h4>
      <span className="text-gray-400">5th June 2025 - Present</span>
      <p className="text-lg text-gray-300 text-justify">
        In this project I made collection of mostly used data structures and algorithms in C as library. Other than data structures and algorithms, library offers
        well-written unit tests made using CUnit to test any changes of data structures, which helps to identify memory corruption bugs and algorithmic bugs. While
        working on this project I learned about data structures and algorithms, making unit tests in CUnit and identifying and fixing memory corruption bugs
        using Valgrind.
      </p>
      <Button as={ Link } variant="flat" color="primary" href="https://github.com/AdrianRo147/dsa-library"><GitGraph />Source Code</Button>
    </div>
  )
}

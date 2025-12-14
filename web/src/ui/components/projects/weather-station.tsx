import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GitGraph } from "lucide-react";

export default function WeatherStationProject() {
  return (
    <div className="flex flex-col items-stretch lg:items-start gap-3 mt-5">
      <h4 className="text-xl font-bold leading-tight">
        Raspberry Pi Pico W Weather Station
      </h4>
      <span className="text-gray-400">10th July 2025 - 17th October 2025</span>
      <p className="text-lg text-gray-300 text-justify">
      	Simple Raspberry Pi Pico W Weather Station microcontroller programmed in MicroPython and dashboard app made in React.js (frontend) and Express.js (backend). While making this project, I learned about making UIs in React, making REST API with ORM and JWT for authentication. Microcontroller connects to Wi-Fi, periodically sends data to API, which can be browsed and managed.
     </p>
      <Button as={ Link } variant="flat" color="primary" href="https://github.com/AdrianRo147/weather-station"><GitGraph />Source Code</Button>
    </div>
  )
}

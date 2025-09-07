import React from "react";
import { Card } from "@repo/ui/card";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <p className="text-2xl font-bold text-orange-400">
        This is a Web app, created using Next.js
      </p>

      <Card title="New Card" href="#">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum ut
        eius maxime doloremque odit sed cupiditate voluptatem nesciunt sunt!
      </Card>
    </div>
  );
}

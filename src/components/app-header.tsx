import React from "react";
import { Button } from "./ui/button";

interface Props {}

export const AppHeader = (props: Props) => {
  return (
    <header>
      app header
      <Button className="w-full">click me</Button>
    </header>
  );
};

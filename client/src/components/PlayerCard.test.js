import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

render(<PlayerCard />);
const playerName = screen.getByRole("player-name");

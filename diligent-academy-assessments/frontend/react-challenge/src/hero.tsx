import React, { useState } from "react";
import { HeroObj } from "./interface";
import "./heroe.css";
interface HeroProps extends HeroObj {}

function Hero({ id, name, available }: HeroProps) {
  const [avail, setAvail] = useState(available);
  const color = avail ? "green" : "red";

  return (
    <div
      className="hero-div"
      style={{ color: color }}
      onClick={() => setAvail(!avail)}
    >
      <p >
        {id}. {name}
      </p>
      {avail ? <p className="available-text">"Available"</p> : <></>}
    </div>
  );
}

export default Hero;

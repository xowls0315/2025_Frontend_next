"use client";
import Container from "@/components/common/layout/Container";
import Selector from "./Selector";
import Link from "next/link";
import Beer from "./Beer";
import { useState } from "react";
import Wine from "./Wine";
import Coffee from "./Coffee";

const Panel = ({ coffees, beers, wines }) => {
  const [selected, setSelected] = useState({ name: "커피", data: coffees });
  const handleChange = (v) =>
    setSelected((prev) => {
      if (v == "커피") return { name: "커피", data: coffees };
      else if (v == "맥주") return { name: "맥주", data: beers };
      else return { name: "와인", data: wines };
    });

  return (
    <>
      <Selector selected={selected} handleChange={handleChange} />
      <Container className="grid grid-cols-4 gap-10 py-10 px-8 md:px-0">
        {selected.data.map((v, i) => {
          if (selected.name == "커피") {
            return (
              <Link key={i} href={`/menu/coffee/${v.id}`}>
                <Coffee {...v} />
              </Link>
            );
          } else if (selected.name == "맥주") {
            return (
              <Link key={i} href={`/menu/beer/${v.id}`}>
                <Beer {...v} />
              </Link>
            );
          } else {
            return (
              <Link key={i} href={`/menu/wine/${v.id}`}>
                <Wine {...v} />
              </Link>
            );
          }
        })}
      </Container>
    </>
  );
};

export default Panel;

"use client";

import { useState } from "react";
import Container from "../common/layout/Container";

const Selector = () => {
  const [selected, setSelected] = useState("커피");
  const handleChange = (v) => setSelected((prev) => v);
  const menus = ["커피", "맥주", "와인"];
  const selectedCss = "border-b-2 border-slate-700";

  return (
    <div className="border-b-2 border-slate-400">
      <Container className="flex">
        {menus.map((v) => (
          <div
            onClick={() => handleChange(v)}
            className={`${
              selected == v && selectedCss
            } flex-1 py-5 h-full text-center font-bold`}
          >
            {v}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Selector;

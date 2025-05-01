"use client";

import Container from "../common/layout/Container";

const Selector = ({ selected, setSelected }) => {
  const menus = ["커피", "맥주", "와인"];
  const selectedCss = "border-b-2 border-slate-700";

  return (
    <div className="border-b-2 border-slate-400">
      <Container className="flex">
        {menus.map((v) => (
          <div
            key={v}
            onClick={() => setSelected(v)}
            className={`${
              selected === v ? selectedCss : ""
            } flex-1 py-5 h-full text-center font-bold cursor-pointer`}
          >
            {v}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Selector;

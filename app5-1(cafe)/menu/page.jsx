"use client";

import { useEffect, useState } from "react";
import Container from "@/components/common/layout/Container";
import Banner from "@/components/menu/Banner";
import Beer from "@/components/menu/Beer";
import Coffee from "@/components/menu/Coffee";
import Selector from "@/components/menu/Selector";
import Wine from "@/components/menu/Wine";
import Link from "next/link";

const Page = () => {
  const [selected, setSelected] = useState("커피");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (selected === "커피") url = "https://api.sampleapis.com/coffee/hot";
      else if (selected === "맥주")
        url = "https://api.sampleapis.com/beers/ale";
      else if (selected === "와인")
        url = "https://api.sampleapis.com/wines/reds";

      const res = await fetch(url);
      const json = await res.json();
      setData(json.slice(0, 8)); // 예시로 8개
    };

    fetchData();
  }, [selected]);

  return (
    <>
      <Banner selected={selected} />
      <Selector selected={selected} setSelected={setSelected} />
      <Container className="grid grid-cols-4 gap-10 py-10 px-8 md:px-0">
        {selected === "커피" &&
          data.map((v, i) => (
            <Link key={i} href={`/menu/coffee/${v.id}`}>
              <Coffee {...v} />
            </Link>
          ))}
        {selected === "맥주" &&
          data.map((v, i) => (
            <Link key={i} href={`/menu/beer/${v.id}`}>
              <Beer {...v} />
            </Link>
          ))}
        {selected === "와인" &&
          data.map((v, i) => (
            <Link key={i} href={`/menu/wine/${v.id}`}>
              <Wine {...v} />
            </Link>
          ))}
      </Container>
    </>
  );
};

export default Page;

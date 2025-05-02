"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animation } from "@/styles/motion";
import Container from "@/components/common/layout/Container";
import Banner from "@/components/menu/Banner";
import Beer from "@/components/menu/Beer";
import Coffee from "@/components/menu/Coffee";
import Selector from "@/components/menu/Selector";
import Wine from "@/components/menu/Wine";
import Link from "next/link";

const componentMap = {
  커피: {
    Component: Coffee,
    urlPrefix: "coffee",
    api: "https://api.sampleapis.com/coffee/hot",
  },
  맥주: {
    Component: Beer,
    urlPrefix: "beer",
    api: "https://api.sampleapis.com/beers/ale",
  },
  와인: {
    Component: Wine,
    urlPrefix: "wine",
    api: "https://api.sampleapis.com/wines/reds",
  },
};

const Page = () => {
  const [selected, setSelected] = useState("커피");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = componentMap[selected].api;
      const res = await fetch(url);
      const json = await res.json();
      setData(json.slice(0, 8));
    };

    fetchData();
  }, [selected]);

  const { Component, urlPrefix } = componentMap[selected];

  return (
    <>
      <Banner selected={selected} />
      <Selector selected={selected} setSelected={setSelected} />
      <Container className="grid grid-cols-4 gap-10 py-10 px-8 md:px-0">
        {data.map((v, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animation.fadeInSlideUp}
          >
            <Link href={`/menu/${urlPrefix}/${v.id}`}>
              <Component {...v} />
            </Link>
          </motion.div>
        ))}
      </Container>
    </>
  );
};

export default Page;

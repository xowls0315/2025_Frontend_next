"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animation } from "@/styles/motion";
import Container from "@/components/common/layout/Container";
import Banner from "@/components/menu/Banner";
import Beer from "@/components/menu/Panel/Beer";
import Coffee from "@/components/menu/Panel/Coffee";
import Selector from "@/components/menu/Panel/Selector";
import Wine from "@/components/menu/Panel/Wine";
import Link from "next/link";
import { API } from "@/constants/apis";

const componentMap = {
  커피: {
    Component: Coffee,
    urlPrefix: "coffee",
    index: 0,
  },
  맥주: {
    Component: Beer,
    urlPrefix: "beer",
    index: 1,
  },
  와인: {
    Component: Wine,
    urlPrefix: "wine",
    index: 2,
  },
};

const Page = () => {
  const [selected, setSelected] = useState("커피");
  const [allData, setAllData] = useState([[], [], []]); // [coffees, beers, wines]

  useEffect(() => {
    const fetchAllData = async () => {
      const response = await Promise.all(API.map((url) => fetch(url)));
      const jsonData = await Promise.all(response.map((res) => res.json()));
      setAllData(jsonData.map((list) => list.slice(0, 10)));
    };

    fetchAllData();
  }, []);

  const { Component, urlPrefix, index } = componentMap[selected];
  const data = allData[index];

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

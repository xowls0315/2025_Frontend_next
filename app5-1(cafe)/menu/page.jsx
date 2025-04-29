import Container from "@/components/common/layout/Container";
import Banner from "@/components/menu/Banner";
import Coffee from "@/components/menu/Coffee";
import Selector from "@/components/menu/Selector";
import Link from "next/link";

const Page = async () => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot");
  const newData = await data.json();

  return (
    <>
      <Banner />
      <Selector />
      <Container className="grid grid-cols-4 gap-10 py-10 px-8 md:px-0">
        {newData.map((v, i) => (
          <Link key={i} href={`/menu/coffee/${v.id}`}>
            <Coffee {...v} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Page;

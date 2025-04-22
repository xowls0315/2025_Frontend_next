import ContentsAside from "./ContentsAside";
import ContentsMain from "./ContentsMain";
import Title from "./Title";

const Contents = () => {
  return (
    <section className="w-full h-full max-w-5xl mx-auto flex flex-col">
      <Title title={"Contents"} />
      <div className="w-full h-lvh flex gap-10">
        <ContentsMain />
        <ContentsAside />
      </div>
    </section>
  );
};

export default Contents;

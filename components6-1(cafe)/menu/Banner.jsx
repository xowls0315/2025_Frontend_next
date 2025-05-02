import Paragraph from "../common/typography/Paragraph";

const bannerMap = {
  커피: {
    image: "/menu-coffee-1.jpg",
    title: "COFFEE",
    subtitle: "우리동네 숨은 스페셜티 블렌드 맛집",
  },
  맥주: {
    image: "/menu-beer-2.jpg",
    title: "BEER",
    subtitle: "우리동네 숨은 맥주 맛집",
  },
  와인: {
    image: "/menu-wine-1.jpg",
    title: "WINE",
    subtitle: "우리동네 숨은 와인 맛집",
  },
};

const Banner = ({ selected }) => {
  const banner = bannerMap[selected];

  return (
    <div
      className="h-[200px] bg-cover bg-center text-center flex justify-center items-center"
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      <Paragraph className="text-white text-3xl">
        {banner.title}
        <br />
        {banner.subtitle}
      </Paragraph>
    </div>
  );
};

export default Banner;

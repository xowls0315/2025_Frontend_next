import Paragraph from "../common/typography/Paragraph";

const Banner = () => {
  return (
    <div className="h-[200px] bg-[url('/menu-coffee-1.jpg')]  bg-cover bg-center text-center flex justify-center items-center">
      <Paragraph className="text-white text-3xl">
        COFFEE
        <br />
        우리동네 숨은 스페셜티 블렌드 맛집
      </Paragraph>
    </div>
  );
};

export default Banner;

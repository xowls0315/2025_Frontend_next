import Card from "./Card";

const ContentsMain = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full h-full flex-7/10 border border-slate-200">
      {Array(6)
        .fill(0)
        .map((v, i) => (
          <Card
            key={i}
            isHigh={[1, 2, 4].some((v) => v == i)}
            imageUrl={
              [
                "/sweetday.jpg",
                "/um.png",
                "/coffee.jpg",
                "/nut.jpg",
                "/uja.png",
                "/fall.png",
              ][i]
            }
            title={["이벤트", "우리동네", "메뉴", "메뉴", "메뉴", "메뉴"][i]}
            subTitle={
              [
                "- SWEET DAY 이벤트",
                "- 어쩐지 눈길이 가고 어쩐지 자꾸만 보고 싶은",
                "문경을 물들인 오미자",
                "공주가 머금은 밤",
                "유자가 적힌 일기장",
                "가을에 만나볼 수 있는 건강한 자연의 맛",
              ][i]
            }
          />
        ))}
    </div>
  );
};

export default ContentsMain;

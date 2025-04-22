import { colors } from "@/styles/color";
import CardSide from "./CardSide";

const ContentsAside = () => {
  return (
    <div
      className={`w-full h-full bg-[${colors.green.secondary}] flex-3/10 border border-slate-200 flex flex-col p-5`}
    >
      <h2 className="text-[#00A5B9] font-bold mb-15">
        조금 더 특별하고
        <br />
        따뜻한, 그린 카페베네
      </h2>
      {Array(2)
        .fill(0)
        .map((v, i) => (
          <CardSide
            key={i}
            imageUrl={["/sidecard-1.jpg", "/sidecard-2.jpg"][i]}
            title={["내가 오픈하고 싶은 카페", "가맹 개설 안내"][i]}
            subTitle={
              [
                <>
                  동네와 공간, 저마다의
                  <br />
                  특별함과 다양함은 모두 다르니까요
                </>,
                <>
                  가맹점 개설을 위한 절차를
                  <br />
                  자세하게 안내드립니다
                </>,
              ][i]
            }
            buttonText={["인테리어 보기", "개설 절차 보기"][i]}
          />
        ))}
    </div>
  );
};

export default ContentsAside;

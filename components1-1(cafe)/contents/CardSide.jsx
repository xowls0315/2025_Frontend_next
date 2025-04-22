import { colors } from "@/styles/color";
import Image from "next/image";

const CardSide = (props) => {
  return (
    <div className="w-full h-[300px] text-center flex flex-col items-center gap-3 my-5">
      <div className="w-full h-[170px] relative">
        <Image alt="" className="object-cover" fill src={props.imageUrl} />
      </div>
      <h2 className="font-bold">{props.title}</h2>
      <span className="text-[13px]">{props.subTitle}</span>
      <button
        className={`text-[13px] text-white bg-[${colors.green.primary}] rounded-2xl px-3 py-1`}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default CardSide;

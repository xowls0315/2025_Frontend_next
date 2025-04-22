import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div
        className={`w-full ${
          props.isHigh ? "h-[400px]" : "h-[300px]"
        } relative`}
      >
        <Image alt="" className="object-cover" fill src={props.imageUrl} />
      </div>
      <h5 className="text-xs text-slate-500 font-medium">{props.title}</h5>
      <span className="text-md text-gray-700">{props.subTitle}</span>
    </div>
  );
};

export default Card;

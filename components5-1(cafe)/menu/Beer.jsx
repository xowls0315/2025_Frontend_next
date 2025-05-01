import Image from "next/image";
import Text from "../common/base/Text";

const Beer = ({ name, price, image }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <div className="relative h-[300px] w-full">
        <Image
          className="object-contain rounded-lg"
          src={image}
          alt={""}
          fill
        />
      </div>
      <Text className="font-bold text-xl">{name}</Text>
      <Text>{price}</Text>
    </div>
  );
};

export default Beer;

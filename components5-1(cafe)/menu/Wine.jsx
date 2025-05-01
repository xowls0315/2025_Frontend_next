import Image from "next/image";
import Text from "../common/base/Text";

const Wine = ({ wine, rating, image }) => {
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
      <Text className="font-bold text-xl">{wine}</Text>
      <Text>🌟{rating.reviews}</Text>
    </div>
  );
};

export default Wine;

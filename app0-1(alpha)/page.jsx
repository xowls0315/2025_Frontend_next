import Button from "@/src/Button";

export default function Home() {
  return (
    <div className="flex-row">
      <Button
        text={"세일"}
        bg={"bg-red-400"}
        color={"text-white"}
        borderRadius={"rounded-2xl"}
        padding={"px-2"}
      />
      <Button
        text={"증정"}
        bg={"bg-sky-200"}
        color={"text-white"}
        borderRadius={"rounded-2xl"}
        padding={"px-2"}
      />
      <Button
        text={"오늘드림"}
        bg={"bg-pink-400"}
        color={"text-white"}
        borderRadius={"rounded-2xl"}
        padding={"px-2"}
      />
    </div>
  );
}

import Contents from "@/components/sections/contents/Contents";
import Slider from "@/components/sections/Slider/Slider";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Slider />
      <Contents />
      <aside className="fixed top-[200px] right-[200px] flex flex-col gap-5 z-20">
        <div className="rounded-full text-white bg-[#3A466A] p-3">
          <FaInstagram />
        </div>
        <div className="rounded-full text-white bg-[#3A466A] p-3">
          <FaYoutube />
        </div>
      </aside>
    </div>
  );
}

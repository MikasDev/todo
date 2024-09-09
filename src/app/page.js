import Image from "next/image";
import { Input } from "postcss";
import { Header } from "@/components/Header";
import { Boxes } from "@/components/Boxes";

export default function Home() {
  return (
    <div className="bg-[#0b0423]">
      <Header/>
      <Boxes/>
    </div>
  );
}

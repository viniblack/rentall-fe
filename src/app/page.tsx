import { Banner } from "@/components/features/banner/banner";
import { NavBar } from "@/components/features/navBar/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
}

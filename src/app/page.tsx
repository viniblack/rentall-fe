import { Banner } from "@/components/features/banner/banner";
import { HowItWorks } from "@/components/features/howItWorks/howItWorks";
import { Navbar } from "@/components/features/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
}

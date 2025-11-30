import Image from "next/image";
import Banner from "../components/section/Banner";
import Menu from "../components/Menu";
import AboutMe from "@/components/section/AboutMe";

export default function Home() {
  return <> 
    <Menu />
    <Banner className="" id="Home" />
    <AboutMe />
  </>;
}

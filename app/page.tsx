import HomeHero from "@/components/homepage/HomeHero";
import Review from "@/components/homepage/Review";
import Sale from "@/components/sale";
import Steps from "@/components/homepage/Steps";

export default function Home() {
  return (
    <main className=" bg-white font-sfpd-regular min-h-screen">
      <Sale bg="blue"/>
      <HomeHero/>
      <Review/>
      <Steps/>
    </main>
  );
}

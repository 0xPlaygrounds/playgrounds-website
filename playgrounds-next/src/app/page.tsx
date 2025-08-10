import { CreateCombine } from "@/components/createCombine";
import { DeepDiveStories } from "@/components/deepDiveStories";
import { DoThingsDifferently } from "@/components/doThingsDifferently";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MeetTeam } from "@/components/meetTeam";
import { Navbar } from "@/components/navbar";
import { ProductAnimation } from "@/components/productAnimation";
import { ThreePlatforms } from "@/components/threePlatforms";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Header />
      <ProductAnimation />
      <CreateCombine />
      <ThreePlatforms />
      <DoThingsDifferently />
      <DeepDiveStories />
      <MeetTeam />
      <Footer />
    </div>
  );
}

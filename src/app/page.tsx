import { CreateCombine } from '@/components/createCombine';
import { DoThingsDifferently } from '@/components/doThingsDifferently';
import { Footer } from '@/components/footer';
import { MeetTeam } from '@/components/meetTeam';
import { Navbar } from '@/components/navbar';
import { ProductAnimation } from '@/components/productAnimation';
import { ThreePlatforms } from '@/components/threePlatforms';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ProductAnimation />
      <CreateCombine />
      <ThreePlatforms />
      <DoThingsDifferently />
      <MeetTeam />
      <Footer />
    </div>
  );
}

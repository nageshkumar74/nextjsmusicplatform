import TestimonailCard from "@/Components/TestimonailCard";
import FeaturedCourses from "@/Components/ui/FeaturedCourses";
import HeroSection from "@/Components/ui/HeroSection";
import WhyChooseUs from "@/Components/ui/WhyChooseUs";
import UpComingWebinars from "@/Components/UpComingWebinars";
import Instructors from "@/Components/Instructor";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">


      <HeroSection></HeroSection>

      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <TestimonailCard></TestimonailCard>
      <UpComingWebinars></UpComingWebinars>
     <Instructors></Instructors>
     <Footer></Footer>

    </main>
  );
}

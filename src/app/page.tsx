import AboutMe from "@/components/Home/AboutME";
import Hero from "@/components/Home/Hero";
import SkillsCarousel from "@/components/Home/SkillsCarousel";
import WorkingExperience from "@/components/Home/WorkingExperience";


export default function Home() {
  return (
    <main className="w-fit mx-auto" style={{backgroundImage : 'url("/marble-bg.png")', backgroundSize : 'cover', backgroundAttachment : 'fixed'}}>
      <Hero/>
      <AboutMe/>
      <WorkingExperience/>
      
    </main>
  );
}


import Projects from "@/components/Projects";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />}
      ]} />
      <Hero/>
      <Grid />
      {/* <RecentProjects /> */}
      {/* <Clients /> */}
      <Projects />
      {/* <Leadership /> */}
      <Approach />
      <Footer />
    </div>
  </main>
  );
}

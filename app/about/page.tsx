import AHero from "@/components/AHero";
import Alead from "@/components/Alead";
import ANavBar from "@/components/ANavBar";
import Aunique from "@/components/Aunique";


export default function Home() {
  return (
  <main className=" relative h-screen w-full bg-slate-950 flex flex-col overflow-auto mx-auto">
        
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] 
    rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
    bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

    {/* Now on add the components to the page */}
    <div className=" max-w-7xl w-full">
        <AHero />
        <Aunique />
        <Alead/>
    </div>
    
    

  </main>
  );
}



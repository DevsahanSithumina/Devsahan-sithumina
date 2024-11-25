import Education from "@/components/main/main/Education";
import Encryption from "@/components/main/main/Encryption";
import Footer from "@/components/main/main/Footer";
import Hero from "@/components/main/main/Hero";
import Projects from "@/components/main/main/projects";
import Skills from "@/components/main/main/Skills";


import Image from "next/image";

export default function Home() {
  return (
   <main className='h-full w-full'>
    <div className='flex flex-col h-[850px] gap-20'>
   <Hero/>

   
   <Skills/>
   
   <Encryption/>
   <Projects/>
   <Footer/>
   
   

    </div>
    
   </main>
  );
}

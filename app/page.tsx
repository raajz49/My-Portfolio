import {
   About,
   Contact,
   Footer,
   Hero,
   Project,
   Skills
 } from "./Sections";
 import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    
    <main className="">
          <Navbar />

      <section id="home" className="xl:padding-1 wide:padding-r padding-b ">
      <Hero />  
      </section>

      <section id="about" className="xl:padding-1 wide:padding-r padding-b ">
        <About />
      </section>    

      <section id="myskills" className="padding">
        <Skills/>
      </section>

      <section id="project" className="padding">
       <Project /> 
      </section>  
      
      <section id="contact-me" className="padding">
      <Contact />  
      </section>    

      <section className="  bg-black">
      <Footer />  
      </section>  
    </main>
  );
}

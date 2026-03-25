
import Header from "@/components/header";
import getRepos from "@/lib/getData";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default async function Home() {
  const apiData = await getRepos();
  console.log("Data from API:", apiData)
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans">
      <Header name={apiData.data.found ? apiData.data.name : ""} />
      <main className="flex flex-1 h-full w-full  flex-col   px-16  " style={{ backgroundColor: ' #23222B '}}>
        <Hero url={apiData.data.found ? apiData.data.avatar : ""} name={apiData.data.found ? apiData.data.name : ""} role={process.env.ROLE || ""} /> {/* if you will not conect github profile put the url to your image. Name and function will not get from the github, you must to config they by coding*/ }
        <About />
        <Projects repos={apiData.data.found ? apiData.data.repos : []}/>
        <Skills/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

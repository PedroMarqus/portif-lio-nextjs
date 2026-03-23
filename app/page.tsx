
import Header from "@/components/header";
import getRepos from "./lib/getData";
import Hero from "@/components/hero";

export default async function Home() {
  const apiData = await getRepos();
  console.log("Data from API:", apiData)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header nome="Pedro Marques" />
      <main className="flex flex-1 w-full  flex-col items-center justify-between  px-8 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Texto da api: {apiData.data?.status === 200 ? apiData.data?.login : apiData.data?.status === 601 ? "User not found" : "Error on github api"}</h1>
        <Hero />
      </main>
    </div>
  );
}

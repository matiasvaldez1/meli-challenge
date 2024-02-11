import Head from "@/components/head";
import HomeView from "@/sections/home/views/homeView";

const HomePage = () => {
  return (
    <>
      <Head
        title="Inicio"
        description="Centro de control para centros de distribución."
      />
      <HomeView />
    </>
  );
};

export default HomePage;

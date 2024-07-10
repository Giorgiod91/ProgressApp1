import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Motivate1 from "~/app/_components/Motivate1";
import Banner2 from "~/app/_components/Banner2";
import Banner1 from "~/app/_components/Banner1";
import Navbar from "~/app/_components/Navbar";
import LandingPage from "./_components/LandingPage";
import Payment from "./_components/Payment";
import Demo from "./_components/Demo";
import Footer from "./_components/Footer";
import Test1 from "./_components/Test1";
import TaskComponent from "./_components/Test1";
import Test2 from "./_components/Test2";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Navbar />
      <section className="flex min-h-screen items-center justify-center ">
        <LandingPage />
      </section>
      <Banner1 />
      <section
        id="banner1"
        className="flex min-h-screen items-center justify-center transition-opacity duration-500"
      >
        {" "}
        <Motivate1 />
      </section>
      <Banner2 />
      <section className=" " id="demo">
        <Demo />
      </section>

      <section
        className=" flex h-screen w-full
          justify-center  bg-gray-100 "
      >
        {session ? <TaskComponent /> : <Test2 />}
      </section>

      <section
        id="payment"
        className="flex min-h-screen items-center justify-center"
      >
        <Payment />
      </section>
      <Footer />
    </main>
  );
}

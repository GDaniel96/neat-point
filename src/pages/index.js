import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neat-point</title>
        <meta
          name="description"
          content="Servicii profesionale de curățenie în regim hotelier, cât și la domiciliu, în Județul Brașov."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <Header />
          <About />
          <Services />
          <Contact />
          <Footer />
        </Layout>
      </main>
    </>
  );
}

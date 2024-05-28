import Footer from "components/navigation/Footer";
import NavBar from "components/navigation/NavBar";
import Layout from "hocs/layouts/Layout";

function About() {
  return (
    <Layout>
      <NavBar />
      <div className="pt-28">
        About
      </div>
      <Footer />
    </Layout>
  )
}

export default About

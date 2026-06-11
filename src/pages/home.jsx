import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome to EventX</h1>

        <p>
          Discover, organize and manage events with a modern platform.
        </p>

        <button>Explore Events</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;
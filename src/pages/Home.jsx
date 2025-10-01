import Thumbnail from "../components/Thumbnail";
import "./Home.scss";
import rentals from "../data/rentals.json";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Kasa";
  }, []);

  return (
    <div className="home">
      <section className="home__header">
        <p>At home, everywhere, and anywhere</p>
      </section>
      <section className="gallery">
        {rentals.map((rental) => (
          <Thumbnail
            key={rental.id}
            title={rental.title}
            cover={rental.cover}
            link={`/rental/${rental.id}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;

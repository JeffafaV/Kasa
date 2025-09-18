import Thumbnail from "../components/Thumbnail";
import "./Home.scss";
import rentals from "../data/rentals.json";

function Home() {
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
            link={`/rentals/${rental.id}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;

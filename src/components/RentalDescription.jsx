import "./Description.scss";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";

function RentalDescription({ title, host, rating, location, tags }) {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <section className="description">
      <div className="description__top">
        <div className="title">
          <h1>{title}</h1>
          <span>{location}</span>
        </div>

        <div className="host">
          <div className="host__name">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>

          {/* Author image */}
          <img src={host.picture} />
        </div>
      </div>

      <div className="description__bottom">
        <div className="tag-list">
          {tags.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}
        </div>

        {/* stars */}
        <div>
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < rating ? activeStar : inactiveStar}
              alt={index < rating ? "Active star" : "Inactive star"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RentalDescription;

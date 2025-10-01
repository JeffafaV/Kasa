import "./Rental.scss";
import ImagePanel from "../components/ImagePanel";
import RentalDescription from "../components/RentalDescription";
import AccordionItem from "../components/AccordionItem";
import rentals from "../data/rentals.json";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";

function Rental() {
  const { id } = useParams();
  console.log(id);

  const rental = rentals.find((r) => r.id === id);

  useEffect(() => {
    document.title = `${rental.title} | Kasa`;
  }, []);

  if (!rental) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="rental">
      {/* image panel */}
      <ImagePanel pictures={rental.pictures} />
      {/* rental description */}
      <RentalDescription
        title={rental.title}
        host={rental.host}
        rating={rental.rating}
        location={rental.location}
        tags={rental.tags}
      />

      {/* accordion */}
      <div className="collapse-list">
        <AccordionItem title="Description" content={rental.description} />
        <AccordionItem title="Ameneties" content={rental.equipments} />
      </div>
    </div>
  );
}

export default Rental;

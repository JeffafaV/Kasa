import { useState } from "react";
import arrowIcon from "../assets/arrow.png";
import "./Accordion.scss";

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    return <p>{content}</p>;
  };

  return (
    <article className={`accordion ${open ? "open" : ""}`}>
      <div className="accordion__header">
        <span>{title}</span>
        {/* <span className="accordion__icon">{open ? "▲" : "▼"}</span> */}
        <button onClick={() => setOpen(!open)}>
          <img
            src={arrowIcon}
            className={`accordion__arrow ${open ? "rotated" : ""}`}
            alt="Arrow toggle"
          />
        </button>
      </div>
      {/* need to make the div appear only when open === true */}
      <div
        className="accordion__content"
        style={{ height: open ? "auto" : "0px" }}
      >
        {renderContent()}
      </div>
    </article>
  );
}

export default AccordionItem;

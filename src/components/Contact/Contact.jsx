import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={css.contact}>
      <div>
        <div className={css.contactText}>
          <RiContactsFill />
          <span>{name}</span>
        </div>
        <div className={css.contactText}>
          <FaSquarePhone />
          <a href={`tel:` + number}>{number}</a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

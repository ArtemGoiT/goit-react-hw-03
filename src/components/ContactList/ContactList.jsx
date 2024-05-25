import Contact from "../Contact/Contact";
import css from "./ContacList.module.css";

const ContacList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.ContacList}>
      {contacts.map(({ id, number, name }) => (
        <Contact
          key={id}
          id={id}
          number={number}
          name={name}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContacList;

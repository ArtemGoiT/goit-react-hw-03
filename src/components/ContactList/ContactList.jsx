import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.ContactList}>
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

export default ContactList;

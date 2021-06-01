import { connect } from "react-redux";
import operations from "../../redux/contacts/contacts-operations";
import { getFilteredItems } from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={styles.item}>
            {" "}
            <p className={styles.contactInfo}>
              <span className={styles.name}>{name}:</span>
              <span> {number}</span>
            </p>
            <button
              className="button"
              onClick={() => onDelete(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredItems(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

PropTypes.ContactList = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDelete: PropTypes.func.isRequired,
};

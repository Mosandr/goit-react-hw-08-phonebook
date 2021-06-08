import { Component } from "react";
import { connect } from "react-redux";

import operations from "../../redux/contacts/contacts-operations";
import { onEdit } from "../../redux/contacts/contacts-actions";
import {
  getFilteredItems,
  getIsEdit,
} from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";
import classNames from "classnames";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.isEdit !== nextProps.isEdit) return true;
  // }

  // componentDidUpdate() {
  //   this.props.fetchContacts();
  // }

  render() {
    const { contacts, onDelete, onEditClick } = this.props;
    return (
      <ul className={styles.ContactList}>
        {contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li key={id} className={styles.item}>
              <p className={styles.contactInfo}>
                <span className={styles.name}>{name}:</span>
                <span> {number}</span>
              </p>
              <div>
                <button
                  className={classNames("button", styles.editButton)}
                  onClick={() => onEditClick(id)}
                  type="button"
                >
                  Edit
                </button>
                <button
                  className="button"
                  onClick={() => onDelete(id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredItems(state),
    isEdit: getIsEdit(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
  onEditClick: (id) => dispatch(onEdit(id)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
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

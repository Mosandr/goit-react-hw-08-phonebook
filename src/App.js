import { Component } from "react";
import { connect } from "react-redux";
import operations from "./redux/contacts/contacts-operations";
import {
  getLoading,
  getErrorMessage,
} from "./redux/contacts/contacts-selectors";

import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading, errorMessage } = this.props;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {isLoading && <h2>Loading...</h2>}
        {errorMessage && <h2>{errorMessage}</h2>}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

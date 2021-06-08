import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import classNames from "classnames";
import styles from "./UserMenu.module.scss";

const UserMenu = ({ userName, onLogOut }) => {
  return (
    <div>
      <span className={styles.email}>{userName}!</span>
      <button
        onClick={onLogOut}
        className={classNames("button", styles.logOutBtn)}
        type="button"
      >
        LogOut
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userName: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

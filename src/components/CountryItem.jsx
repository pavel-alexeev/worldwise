import { flagemojiToPNG } from "../contexts/CitiesContext";
import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

CountryItem.propTypes = {
  country: PropTypes.object,
};

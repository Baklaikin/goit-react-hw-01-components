import propTypes from "prop-types";
import css from "components/Statistic/StatisticMarkup/Statistic.module.css";

function Statistics({ label, percentage, id }) {
  return (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

export default Statistics;

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

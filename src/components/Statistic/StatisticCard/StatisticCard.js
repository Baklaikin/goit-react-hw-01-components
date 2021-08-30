import Statistics from "../StatisticMarkup/Statistic";
import css from "components/Statistic/StatisticCard/StatisticCard.module.css";
import propTypes from "prop-types";

function StatisticCard({ title, items }) {
  const markup = (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {items.map(({ id, label, percentage }) => (
          <Statistics label={label} percentage={percentage} id={id} key={id} />
        ))}
      </ul>
    </section>
  );
  return markup;
}

export default StatisticCard;

StatisticCard.propTypes = {
  title: propTypes.string,
};

import propTypes from "prop-types";
import css from "components/Transactions/Transaction/Transaction.module.css";

function Transaction({ type, amount, currency }) {
  return (
    <tr className={css.row}>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default Transaction;

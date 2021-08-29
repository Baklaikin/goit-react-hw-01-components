import css from "components/Transactions//TransactionHistory/TransactionHistory.module.css";
import Transaction from "components/Transactions/Transaction/Transaction";

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionhistory}>
      <thead className={css.head}>
        <tr className={css.row}>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map((item) => (
          <Transaction
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

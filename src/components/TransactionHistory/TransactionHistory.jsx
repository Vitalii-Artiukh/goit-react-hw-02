// import React from 'react';
// import clsx from 'clsx';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(tract => (
          <tr key={tract.id}>
            <td>{tract.type}</td>
            <td>{tract.amount}</td>
            <td>{tract.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

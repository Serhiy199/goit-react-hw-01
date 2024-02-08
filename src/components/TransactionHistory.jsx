import { table, tbody } from '../styles/TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={tbody}>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td>{type[0].toUpperCase() + type.slice(1)}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

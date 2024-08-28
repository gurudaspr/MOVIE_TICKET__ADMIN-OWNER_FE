import React, { useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { baseUrl } from '../../baseUrl/baseUrl';
import { transactionListState } from '../../store/useTransactionState';

const TransactionsList = () => {
  const [transactions, setTransactions] = useRecoilState(transactionListState);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/admin/transactions`, { withCredentials: true });
        setTransactions(response.data.totalPayments);  // Assuming totalPayments is the array of transactions
    
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
        toast.error('Failed to fetch transactions');
      }
    };

    fetchTransactions();
  }, [setTransactions]);

  return (
    <div className="container mx-auto my-8 animate-fade-in-down">
      <div className="card w-full p-6 bg-base-200 shadow-xl mt-6">
        <div className="card-title flex items-center justify-between">
          <h2 className="text-xl font-semibold">Transactions</h2>
        </div>
        <div className="divider mt-2"></div>
        <div className="h-full min-h-screen overflow-x-auto bg-base-200 rounded-xl">
          <table className="table">
            <thead className="text-lg">
              <tr>
                <th>Transaction Id</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.payment_id} className="border-t border-base-100">
                  <td>
                    <div className='w-auto h-12 flex items-center'>
                      <p className="font-bold">{transaction.payment_id}</p>
                    </div>
                  </td>
                  <td>{transaction.user_id?.name.toUpperCase() || 'N/A'}</td> {/* Display customer name */}
                  <td>{transaction.user_id?.email || 'N/A'}</td> {/* Display email */}
                  <td>{transaction.amount} INR</td>
                  <td>{format(new Date(transaction.createdAt), 'dd MMMM yyyy')}</td> {/* Format transaction date */}
                  <td>
                    <span
                      className={`badge badge-lg text-primary-content ${
                        transaction.status === 'success'
                          ? 'bg-success'
                          : transaction.status === 'failed'
                          ? 'bg-error'
                          : 'bg-base-300'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;

import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useRecoilState } from 'recoil';
import { baseUrl } from '../../../baseUrl/baseUrl';
import { transactionState } from '../../../store/useTransactionState';

export default function TransactionStats() {
  const [transactionData, setTransactionData] = useRecoilState(transactionState);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/total-transaction`, { withCredentials: true });
        setTransactionData({
          totalAmount: res.data.totalAmount,
          loading: false,
        });
      } catch (error) {
        console.log('Error fetching total transactions:', error.message);
        setTransactionData(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    fetchTotalAmount();
  }, [setTransactionData]);

  return (
    <div className="stats bg-base-200  text-center shadow-lg animate-slide-in-top">
      <div className="stat">
        <div className="stat-title text-neutral-content">TOTAL AMOUNT</div>
        <div className="stat-value text-success">
          ₹ {transactionData.loading ? <CountUp end={500} duration={15} /> : <CountUp end={transactionData.totalAmount} duration={1} />}
        </div>
        <div className="stat-desc mt-2">last 100 payments</div>
        <div className="stat-actions">
          <Link to='/transactions' className="btn btn-sm btn-info text-primary-content">View</Link>
        </div>
      </div>
    </div>
  );
}

import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl/baseUrl';
import { FaEdit } from 'react-icons/fa';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { format } from 'date-fns';
import Avatar from 'react-avatar';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/all-users`);
        setUsers(response.data);
        console.log(response.data, 'Users');
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="card w-full p-6 bg-base-200 shadow-xl mt-6">
      <div className="card-title flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        <input className='input input-bordered input-sm  '
        placeholder='Search User'
          value={searchUser}
          onChange={e => setSearchUser(e.target.value)}
        />
      </div>
      <div className="divider mt-2"></div>
      <div className="h-full min-h-screen overflow-x-auto bg-base-200 rounded-xl">
        <table className="table">
          <thead className='text-lg'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Bookings</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} className='border-t border-base-100'>
                <td >
                  <Avatar name={user.name} size={40} round={true} />
                  {user.name.toUpperCase()}
                </td>
                <td>{user.email}</td>
                <td>{format(new Date(user.createdAt), 'dd MMMM yyyy')}</td>
                <td>{user.totalBookings}</td>
                <td>{user.totalReviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

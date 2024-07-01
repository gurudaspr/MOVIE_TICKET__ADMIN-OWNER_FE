import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl/baseUrl';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function ApproveTheaters() {
    const [theaters, setTheaters] = useState([]);
    const [searchTheater, setSearchTheater] = useState('');

    useEffect(() => {
        const fetchTheater = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/admin/not-approved-theaters`,{withCredentials:true});
                setTheaters(response.data);
            } catch (error) {
                console.error('Error fetching theaters:', error);
            }
        };

        fetchTheater();
    }, []);

    const filteredTheaters = theaters.filter(theater =>
        theater.name.toLowerCase().includes(searchTheater.toLowerCase())
    );
    const handleApprove = async (id) => {
        try {
            await axios.put(`${baseUrl}/api/admin/approve-theater/${id}`);
            setTheaters(theaters.filter(theater => theater._id !== id));
            toast.success('Theater approved successfully');
        } catch (error) {
            console.error('Error approving theater:', error);
        }
    }
    

    return (
        <div className="container mx-auto my-8 animate-fade-in-down">
        <div className="card w-full p-6 bg-base-200 shadow-xl mt-6">
            <div className="card-title flex items-center justify-between">
                <h2 className="text-xl font-semibold">Approve Theaters</h2>
                <input
                    className='input input-bordered input-sm'
                    placeholder='Search Theater'
                    value={searchTheater}
                    onChange={e => setSearchTheater(e.target.value)}
                />
            </div>
            <div className="divider mt-2"></div>
            <div className="h-full min-h-screen overflow-x-auto bg-base-200 rounded-xl">
                {filteredTheaters.length > 0 ? (
                    <table className="table w-full">
                        <thead className='text-lg'>
                            <tr>
                                <th>Theater Name</th>
                                <th>Owner Name</th>
                                <th>Location</th>
                                <th>Registered On</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTheaters.map((theater) => (
                                <tr key={theater._id} className='border-t border-base-100'>
                                    <td>
                                        <div className='w-auto h-12 flex items-center'>
                                            <p className="font-bold">{theater.name.toUpperCase()}</p>
                                        </div>
                                    </td>
                                    <td>{theater.owner.name}</td>
                                    <td>{theater.location}</td>
                                    <td>{format(new Date(theater.createdAt), 'dd MMMM yyyy')}</td>
                                    <td>
                                        <button className="btn btn-success text-primary-content" onClick={() => handleApprove(theater._id)}>
                                            Approve
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-xl mt-6">
                        No theaters for approval.
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

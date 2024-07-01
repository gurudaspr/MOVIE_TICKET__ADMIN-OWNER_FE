import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import Selecto from 'react-selecto';
import { generatedSeatsState } from '../../store/useGeneratedSeatAtom';

const SeatingPatternGenerator = ({ rows, setRows, columns, setColumns, seatingPattern, setSeatingPattern }) => {
    const [generatedSeats, setGeneratedSeats] = useRecoilState(generatedSeatsState);

    const handleRowChange = (event) => {
        setRows(parseInt(event.target.value, 10));
    };

    const handleColumnChange = (event) => {
        setColumns(parseInt(event.target.value, 10));
    };

    const generateSeatingPattern = () => {
        const pattern = [];
        for (let i = 0; i < rows; i++) {
            const row = Array.from({ length: columns }, () => null);
            pattern.push(row);
        }
        setSeatingPattern(pattern);
    };

    const toggleSeat = (rowIndex, seatIndex) => {
        setSeatingPattern(prevPattern => {
            const newPattern = [...prevPattern];
            const newRow = [...newPattern[rowIndex]];
            newRow[seatIndex] = newRow[seatIndex] === null ? 'X' : null;
            newPattern[rowIndex] = newRow;
            return newPattern;
        });
    };

    const generateSeat = () => {
        const selectedSeats = [];
        let rowLabel = 0;
        seatingPattern.forEach((row, rowIndex) => {
            if (row.some(seat => seat === 'X')) {
                let seatNumber = 0;
                rowLabel++;
                const selectedRow = row.map((seat) => {
                    if (seat === 'X') {
                        seatNumber++;
                        return { seat: `${String.fromCharCode(65 + rowLabel - 1)}${seatNumber}`, status: 'available' };
                    } else {
                        return null;
                    }
                });
                selectedSeats.push(selectedRow);
            } else {
                selectedSeats.push(row);
            }
        });

        if (selectedSeats.every(row => row.every(seat => seat === null))) {
            toast.error('No seats selected for generating pattern');
            return;
        }
        toast.success('Seating Pattern Generated Successfully');
        setGeneratedSeats(selectedSeats);
        
    };

    const handleSelect = (e) => {
        e.added.forEach((el) => {
            const [rowIndex, seatIndex] = el.dataset.index.split('-').map(Number);
            toggleSeat(rowIndex, seatIndex);
        });
    };

    useEffect(() => {
        generateSeatingPattern();
    }, [rows, columns]);

    return (
        <div className='h-full flex flex-col justify-center items-center w-full'>
            <div className='items-center m-5 flex flex-col sm:flex-row w-full'>
                <div className='flex flex-col mr-0 sm:mr-5 mb-5 sm:mb-0 w-full'>
                    <label className='text-sm mt-2'>Rows</label>
                    <input type="number" min={5} max={20} value={rows} onChange={handleRowChange} className='input input-bordered input-primary' />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='text-sm mt-2'>Columns</label>
                    <input type="number" min={5} max={30} value={columns} onChange={handleColumnChange} className='input input-bordered input-primary' />
                </div>
            </div>
            <div className='overflow-x-auto w-full'>
                <div className='text-center rounded-lg p-10 relative'>
                    <Selecto
                        container='.seating-container'
                        selectableTargets={['.seat']}
                        hitRate={0}
                        selectByClick={true}
                        selectFromInside={false}
                        onSelect={handleSelect}
                    />
                    <h1 className='block md:hidden'>Please use desktop view for generating seats </h1>
                    <div className="seating-container hidden md:block">
                        {seatingPattern.map((row, rowIndex) => (
                            <div key={rowIndex} className="row flex justify-center">
                                {row.map((seat, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        data-index={`${rowIndex}-${seatIndex}`}
                                        className={`seat w-6 h-6 m-1 rounded-md cursor-pointer ${seat === 'X' ? 'bg-info' : 'bg-base-100'}`}
                                    >
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div onClick={generateSeat} className='btn btn-success text-primary-content font-bold py- px-4 rounded mt-2'>Generate</div>
        </div>
    );
};

export default SeatingPatternGenerator;

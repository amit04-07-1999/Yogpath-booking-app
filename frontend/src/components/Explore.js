import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Component() {
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedHealthCondition, setSelectedHealthCondition] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-md w-full px-60 py-40">
            <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="">Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="">Price</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
            </select>

            <select
                value={selectedHealthCondition}
                onChange={(e) => setSelectedHealthCondition(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="">Health Conditions</option>
                <option value="pregnancy">Pregnancy</option>
                <option value="diabetes">Diabetes</option>
                <option value="pcos">PCOS</option>
                <option value="blood-pressure">Blood Pressure</option>
                <option value="back-pain">Back Pain</option>
                <option value="hypertension">Hypertension</option>
                <option value="arthritis">Arthritis</option>
            </select>

            <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="">Style</option>
                <option value="vinyasa">Vinyasa</option>
                <option value="hatha">Hatha</option>
                <option value="ashtanga">Ashtanga</option>
            </select>

            <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value="">Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
            </select>

            <div className="mt-auto">
                <Link to="/" className="text-orange-500 hover:text-orange-700 ">Go back to Home →→</Link>
            </div>

        </div>
    );
}

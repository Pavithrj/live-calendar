import { useEffect, useState } from 'react';
import './calender.css';

function Calender() {
    const [date, setDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState('');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            const hours = time.getHours().toString().padStart(2, '00');
            const minutes = time.getMinutes().toString().padStart(2, '00');
            const seconds = time.getSeconds().toString().padStart(2, '00');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="month" data-testid="months">{months[date.getMonth()]}</div>
            <div className="day" data-testid="days">{days[date.getDay()]}</div>
            <div className="date" data-testid="dates">{date.getDate()}</div>
            <div className="year" data-testid="years">{date.getFullYear()}</div>
            <div className="time" data-testid="current-time">Current Time: {currentTime}</div>
        </div>
    )
}

export default Calender;
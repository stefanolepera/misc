import React from 'react';
import { Link } from 'react-router-dom';

const MainScreen = () => {
    const handleClick = () => console.log('dispatch action!');
    return (
        <div>
            <ul>
                <li>
                    <Link to="/categories/music" onClick={handleClick}>
                        Music
                    </Link>
                </li>
                <li>
                    <Link to="/categories/sport">Sport</Link>
                </li>
                <li>
                    <Link to="/categories/event">Event</Link>
                </li>
                <li>
                    <Link to="/categories/concert">Concert</Link>
                </li>
            </ul>
        </div>
    );
};

export default MainScreen;

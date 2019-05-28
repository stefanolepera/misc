import React from 'react';
import { connect } from 'react-redux';
import { filterByMusic } from '../actions/filterAction';
import { Link } from 'react-router-dom';

const MainScreen = props => {
    const handleClick = () => props.filterByMusic('stocazzo');
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

export default connect(
    null,
    { filterByMusic }
)(MainScreen);

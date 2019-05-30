import React from 'react';
import { connect } from 'react-redux';

const CategoriesScreen = ({ match, filter }) => {
    return (
        <div>
            <h1>Categories</h1>
            <p>{match.params.id}</p>
            <p>{`filter is: ${filter}`}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    filter: state.currentFilter
});

export default connect(mapStateToProps)(CategoriesScreen);

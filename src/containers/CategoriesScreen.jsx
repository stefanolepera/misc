import React from 'react';

const CategoriesScreen = ({ match }) => {
    return (
        <div>
            <h1>Categories</h1>
            <p>{match.params.id}</p>
        </div>
    );
};

export default CategoriesScreen;

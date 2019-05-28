import React from 'react';

const CategoriesScreen = ({ match }) => {
    const filter = useSelector(state => state.currentFilter);
    return (
        <div>
            <h1>Categories</h1>
            <p>{match.params.id}</p>
            <p>{filter}</p>
        </div>
    );
};

export default CategoriesScreen;

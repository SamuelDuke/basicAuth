import React from 'react';

import auth from '../../auth';
const ProtectedPage = props => {
    return (
        <div>{auth.name} Must be logged in to view!</div>
    )
};

export default ProtectedPage;
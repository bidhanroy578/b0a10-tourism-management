import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './providers/Contexts';
import { Navigate, useLocation } from 'react-router-dom';

const RouterPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <div className='flex justify-center min-h-[50vh]'><div className="loading loading-spinner text-info loading-xl"></div></div>
    if (!user) return <Navigate to='/login' state={location.pathname} />
    return children;
};

RouterPrivate.propTypes = {
    children: PropTypes.node,
};

export default RouterPrivate;
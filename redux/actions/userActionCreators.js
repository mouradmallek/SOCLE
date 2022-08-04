import {
    LOGIN,
    LOGOUT
} from '../types/userTypes';

export const login = (user, token) => ({ type: LOGIN, payload: { user, token } });

export const logout = () => ({ type: LOGOUT });

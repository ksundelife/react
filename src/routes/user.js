import {
    getUsersLink
} from './users';
export const getUserLink = (userId = ':userId') => [getUsersLink(), userId].join('/');
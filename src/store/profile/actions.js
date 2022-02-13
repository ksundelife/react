export const TOGGLE_SHOW_NAME = 'PROFILE::TOGGLE_SHOW_NAME';

export const addProfileStatusShowNameAction = (status) => ({
    type: TOGGLE_SHOW_NAME,
    payload: {
        status,
        name: 'Ksusha'
    }
});
import { api } from "../../api";
import { setLoading, setError, setData } from "../../store/users";

export const getUsersWithThunk = (page = 1) => async (dispatch) => {

    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));

    try {
        const result = await api.getUsers(page);

        const [error, result2] = await api.getUsers2(page);

        if (error) {
            dispatch(setError(true));
        } else {
            dispatch(setData(result2));
        }
        dispatch(setData(result));
    } catch (e) {
        console.error(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
}

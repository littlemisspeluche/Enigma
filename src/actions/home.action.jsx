import * as actionsType from "./home.actionType";
import ArticlesApi from "../api/index";

export const getData = () => {
	return dispatch => {
		dispatch({ type: actionsType.GET_DATA });
		ArticlesApi.getData()
			.then(result => {
				dispatch({
					type: actionsType.GET_DATA_SUCCESS,
					result
				});
			})
			.catch(error => {
				dispatch({
					type: actionsType.GET_DATA_ERROR,
					message: error.message
				});
			});
	};
};

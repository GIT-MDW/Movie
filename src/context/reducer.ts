import data from "../data/data.json";
import { SELECTED_COVER_IMAGE, SELECTED_FILM } from "./constants";

export const initialState = data;

const dataReducer = (state = data, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SELECTED_COVER_IMAGE:
      return {
        ...state,
        backgroundImg: payload,
      };
    case SELECTED_FILM:
      return {
        ...state,
        selectedFilm: payload,
      };

    default:
      return state;
  }
};
export default dataReducer;

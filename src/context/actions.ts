import { SELECTED_COVER_IMAGE, SELECTED_FILM } from "./constants";

export const selectBackgroudnImg = (image) => {
  return { type: SELECTED_COVER_IMAGE, payload: image };
};

export const selectFilm = (film) => {
  return { type: SELECTED_FILM, payload: film };
};

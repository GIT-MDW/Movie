interface IFeatured {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
}

export interface ITendingNow {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}
export interface IInitialState {
  Featured: IFeatured;
  TendingNow: ITendingNow[];
  backgroundImg?: string;
  selectedFilm?: ITendingNow;
}

interface IAction {
  type: string;
  payload: any;
}

export interface IContext {
  state: IInitialState;
  dispatch: React.Dispatch<IAction>;
}

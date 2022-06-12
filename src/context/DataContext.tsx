import { createContext, useReducer } from "react";
import data from "../data/data.json";
import { IContext, IInitialState } from "../ts/global";
import reducer, { initialState } from "./reducer";

const DataContext = createContext<IContext>({ state: initialState, dispatch: () => {} });

const DataContextProvider = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, data);

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };

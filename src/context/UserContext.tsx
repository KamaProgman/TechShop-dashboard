import { createContext, Dispatch, SetStateAction } from "react";

interface IUserContext {
  user: object | null;
  setUser: Dispatch<SetStateAction<object>>;
}

const defaultUserContext: IUserContext = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext<IUserContext>(defaultUserContext);

export default UserContext;

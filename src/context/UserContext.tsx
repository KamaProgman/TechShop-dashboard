import { createContext, Dispatch, SetStateAction } from "react";

interface IUserContext {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<string | null>>;
}

const defaultUserContext: IUserContext = {
  userToken: null,
  setUserToken: () => {},
};

const UserContext = createContext<IUserContext>(defaultUserContext);

export default UserContext;

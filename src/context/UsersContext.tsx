import {
  createContext,
  ReactNode,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";
import { UserProps } from "../types/types";

interface UserContextProviderProps {
  children: ReactNode;
}

interface UsersContextProps {
  users: UserProps[];
  searchName: string;
  setSearchName: (name: string) => void;
  setSearch: (value: boolean) => void;
}

export const UsersContext = createContext<UsersContextProps>(
  {} as UsersContextProps
);

export function UsersContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState(false);

  async function getUsers(searchName: string) {
    await fetch(
      "https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json"
    )
      .then((response) => response.json())
      .then((responseParsed) => setUsers(responseParsed));

    if (searchName.length > 0) {
      const data = users.find((user) => user.nome == searchName);
      if (data) {
        setUsers([data]);
      }
    } else {
      return users;
    }
  }

  useEffect(() => {
    getUsers(searchName);
  }, [searchName]);

  return (
    <UsersContext.Provider
      value={{ users, searchName, setSearchName, setSearch }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}

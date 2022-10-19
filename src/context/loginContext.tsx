import React, { createContext, useState } from "react";

type User = {
  username: string;
  password: string;
  token: string;
  isAdmin?: boolean;
} | null;

type LoginContextType = {
  isLoggedIn: boolean;
  logIn: (username: string, password: string, token: string) => void;
  logOut: () => void;
  assertLoggedIn: () => void;
  user: User | null;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  logIn: () => {
    console.log();
  },
  logOut: () => {
    console.log();
  },
  assertLoggedIn: () => console.log(),
  user: null,
});

interface LoginManagerProps {
  children: React.ReactNode;
}

export const LoginManager = ({ children }: LoginManagerProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  function logIn(username: string, password: string, token: string) {
    setLoggedIn(true);
    setUser({ username, password, token });
    console.log({ username, password, token });
  }

  function assertLoggedIn() {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedIn(true);
    }
  }

  function logOut() {
    setUser(null);
    setLoggedIn(false);
    localStorage.clear();
  }

  const context = {
    user: user,
    isLoggedIn: loggedIn,
    logIn: logIn,
    logOut: logOut,
    assertLoggedIn: assertLoggedIn,
  };

  return (
    <LoginContext.Provider value={context}>{children}</LoginContext.Provider>
  );
};

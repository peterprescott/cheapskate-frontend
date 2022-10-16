import React, { createContext, useState } from "react";

type LoginContextType = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  username: string;
  password: string;
  logIn: (username: string, password: string) => void;
  logOut: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  isAdmin: false,
  username: "",
  password: "",
  logIn: () => {
    console.log();
  },
  logOut: () => {
    console.log();
  },
});

interface LoginManagerProps {
  children: React.ReactNode;
}

export const LoginManager = ({ children }: LoginManagerProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [contextusername, setUsername] = useState("");
  const [contextPassword, setPassword] = useState("");
  const [Admin, setAdmin] = useState(false);

  function logIn(username: string, password: string) {
    setUsername(username);
    setPassword(password);
    setLoggedIn(true);
  }

  function logOut() {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setAdmin(false);
  }

  const context = {
    isLoggedIn: loggedIn,
    isAdmin: Admin,
    username: contextusername,
    password: contextPassword,
    logIn: logIn,
    logOut: logOut,
  };

  return (
    <LoginContext.Provider value={context}>{children}</LoginContext.Provider>
  );
};

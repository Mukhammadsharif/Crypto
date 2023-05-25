import React, {createContext, useState} from 'react';

export interface ShowTopProps {
  showTopNav: boolean;
  setShowTopNav: (showTopNav: boolean) => void;
}

export const GlobalContext = createContext<ShowTopProps>({} as ShowTopProps);

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({children}) => {
  const [showTopNav, setShowTopNav] = useState(true);
  return (
    <GlobalContext.Provider value={{showTopNav, setShowTopNav}}>
      {children}
    </GlobalContext.Provider>
  );
};

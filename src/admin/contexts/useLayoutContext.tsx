import { createContext, useContext, useState, type ReactNode } from "react";

interface IContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<IContextProps | undefined>(undefined);

interface IProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);

  const value = { open, setOpen };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

const useLayoutContext = (): IContextProps => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { LayoutProvider, useLayoutContext };

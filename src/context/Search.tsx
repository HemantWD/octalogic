import React, { useState, useContext, createContext, ReactNode } from "react";

interface SearchContextType {
  keyword: string;
  results: any[]; // Replace 'any' with the actual type of your results
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<SearchContextType>({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
};

// custom hook
const useSearch = (): SearchContextType | undefined =>
  useContext(SearchContext);

export { useSearch, SearchProvider };

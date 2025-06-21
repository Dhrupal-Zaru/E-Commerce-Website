import { createContext, useContext, useState } from "react"

const SearchContext = createContext();

export default function SearchProvider({children}) {
    const [query, setQuery] = useState('');
    return (
        <SearchContext.Provider value={{query, setQuery}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch(){
    const context = useContext(SearchContext);
    return context;
}

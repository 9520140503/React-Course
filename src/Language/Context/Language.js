import {createContext,useContext} from "react"

export const LanguageMode = createContext({
    language:"en",
    en: () => {},
    hindi: () => {}
});

export const LanguageModeProvider = LanguageMode.Provider

export const uselanguage = () =>{
    return useContext(LanguageMode);
}
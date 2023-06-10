import { createContext, useContext } from "react";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { simpleUUID } from "../utils/methods/general";
import useLocalStorage from "../hooks/useLocalStorage";

const Context = createContext();
const defaultNoteCategories = Array.from({ length: 6 }, (_v, i) => {
  return {
    id: simpleUUID(7),
    name: `note-category-${i + 1}`,
    lastSaved: Date.now(),
  };
});

export function NotesProvider({ children }) {
  /**
   * @TODO : remove entirely, only store important project info
   * (title, last modified) here.
   * then on each route, store each blog/resource independently
   * in LS
   * This so there isnt 1 huge LS value
   */
  const [notesCategories, setNotesCategories] = useLocalStorage(
    LOCAL_STORAGE_KEYS.NotesCategories,
    defaultNoteCategories
  );

  return (
    <Context.Provider
      value={{
        notesCategories,
        setNotesCategories,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useNotes() {
  return useContext(Context);
}

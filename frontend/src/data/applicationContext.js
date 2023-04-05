import { createContext, useReducer, useState, useContext } from "react";
import { LinkedList } from "../utilities/gameLogic";

const initialAppStates = {
  bg_image: {
    value: "",
    errorMessage: "",
    isValid: undefined,
  },
  gamme_linked_list: new LinkedList(),
  current_screen: null,
};

export const CreateAppContext = createContext({
  ...initialAppStates,
  handleFieldChange: () => {},
});

const createAppContextReducer = (state, action) => {
  switch (action.type) {
    case "handleFieldChange": {
      if (action.payload.name == "bg_image") {
        return {
          ...state,
          bg_image: {
            value: action.payload.value,
            errorMessage: "",
            isValid: undefined,
          },
        };
      } else return { ...state, [action.payload.name]: action.payload.value };
    }
    default:
      return state;
  }
};

const CreateAppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(
    createAppContextReducer,
    initialAppStates
  );
  const [darkTheme, setDarkTheme] = useState(true);
  const [username, setUsername] = useState('');
  const [isUsernameEntered, setIsUsernameEntered] = useState(false);

  const handleFieldChange = (name, value) => {
    dispatch({ type: "handleFieldChange", payload: { name, value } });
  };

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const value = {
    ...appState,
    handleFieldChange,
    darkTheme,
    changeTheme,
    username,
    setUsername,
    isUsernameEntered,
    setIsUsernameEntered
  };

  return (
    <CreateAppContext.Provider value={value}>
      {children}
    </CreateAppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CreateAppContext);
};

export default CreateAppContextProvider;

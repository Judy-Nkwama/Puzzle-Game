import { createContext, useReducer } from "react";
import { LinkedList } from "../utilities/gameLogic";

const initialAppStates = {
    bg_image: {
        value: "",
        errorMessage: "",
        isValid: undefined
    },
    gamme_linked_list: new LinkedList(),
    current_screen: null
};

export const CreateAppContext = createContext({
    ...initialAppStates,
    handleFieldChange: () => { }
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
                        isValid: undefined
                    }
                };
            }else return ({ ...state, [action.payload.name]: action.payload.value});
        }
        default: return state;
    }
};

const CreateAppContextProvider = ({ children }) => {

    const [appState, dispatch] = useReducer(createAppContextReducer, initialAppStates);

    const handleFieldChange = (name, value) => {
        dispatch({ type: "handleFieldChange", payload: { name, value } });
    };

    const value = {
        ...appState, handleFieldChange
    };

    return <CreateAppContext.Provider value={value} >
        {children}
    </CreateAppContext.Provider>;
};

export default CreateAppContextProvider;
import { createContext, useReducer } from "react";

const initialAppStates = {
    bg_image: {
        value: "",
        errorMessage: "",
        isValid: undefined
    },
    puzzel_bloks_bgs: {
        value: null,
        errorMessage: "",
        isValid: undefined
    },
    current_screen: {
        value: null
    }
};

export const CreateAppContext = createContext({
    ...initialAppStates,
    handleFieldChange: () => { }
});

const createAppContextReducer = (state, action) => {
    switch (action.type) {
        case "handleFieldChange": {
            return {
                ...state,
                [action.payload.name]: {
                    value: action.payload.value,
                    errorMessage: "",
                    isValid: undefined
                }
            };
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
import React, { useReducer, createContext } from "react";

export default (reducer, actions, defaultValue) => {
  const Contex = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Contex.Provider value={{ state, ...boundActions }}>
        {children}
      </Contex.Provider>
    );
  };

  return { Contex, Provider };
};

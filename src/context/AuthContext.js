import React from 'react';

import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
    return  ({ email,password }) => {
        // make api request to sign in email and password

        // if we sign upi modify our state, and say that we are auth
    };
    
};

const signin = (dispatch) => {
    return ({ email,password }) =>{

    }
}

const signout = () => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin,signout,signup},
  { isSignedIn: false }
);

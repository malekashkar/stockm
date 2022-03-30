import React from "react";
import { UserResponse } from "../types";

interface AuthState {
  authenticatedUser?: UserResponse;
}

const AuthContext = React.createContext<AuthState | undefined>(undefined);

export default AuthContext;
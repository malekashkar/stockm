import React from "react";
import AuthContext from "../../contexts/Auth";
import AppRouter from "..";
import Button from "../../components/Button";
import { ButtonWrapper } from "./styles";

const Login = () => {
    return (
      <AuthContext.Consumer>
      {(authState) =>
        authState?.authenticatedUser ? (
          <AppRouter />
        ) : (
          <ButtonWrapper href="/api/auth">
            <Button>Login with Discord</Button>
          </ButtonWrapper>
        )
      }
    </AuthContext.Consumer>
    );
}

export default Login;
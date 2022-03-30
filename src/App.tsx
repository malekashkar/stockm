import { Component } from 'react'
import AuthContext from './contexts/Auth';
import AppRouter from './routes';
import { UserResponse } from './types';
import GlobalStyles from "./routes/GlobalStyles";
import { Error, ErrorContainer } from "./routes/GlobalStyles";

import './App.css';
import Spinner from './components/Spinner';

interface AppState {
  authenticatedUser?: UserResponse;
  error?: string;
  loading: boolean;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    loading: true,
  };

  async componentDidMount() {
    try {
      const userResponse = await fetch("/api/auth/@me");
      if (userResponse.ok) {
        const userResponseJson: UserResponse = await userResponse.json();
        this.setState({ authenticatedUser: userResponseJson, loading: false });
      } else {
        if (userResponse.status === 403) {
          this.setState({
            error:
              "Access denied. Please make sure you have proper permission to view this page.",
            loading: false,
          });
        } else if ([401, 504].includes(userResponse.status)) {
          this.setState({ loading: false });
        } else {
          window.location.href = "/api/auth/logout";
        }
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Failed to check login status. Please try again.",
        loading: false,
      });
    }
  }

  render() {
    const { authenticatedUser, error, loading } = this.state;

    return (
      <>
        <GlobalStyles />
        {error ? (
          <ErrorContainer>
            <Error>{error}</Error>
          </ErrorContainer>
        ) : loading ? (
          <Spinner text="Checking login status..." title="Please wait" />
        ) : (
          <AuthContext.Provider value={{ authenticatedUser }}>
            <AppRouter />
          </AuthContext.Provider>
        )}
      </>
    );
  }
}

export default App;

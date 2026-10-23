import "./App.css";

import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import theme from "./lib/theme";

/**
 * The application shell: a top bar, the user list down the left side and the
 * routed content on the right (the master-detail pattern).
 *
 * Which view is showing lives entirely in the URL, so every view can be deep
 * linked and survives a browser refresh.
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />

        <Container maxWidth={false} className="app-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Paper elevation={2} className="app-panel">
                <UserList />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Paper elevation={2} className="app-panel">
                <Routes>
                  <Route path="/" element={<Navigate to="/users" replace />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/users/:userId" element={<UserDetail />} />
                  <Route path="/photos/:userId" element={<UserPhotos />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
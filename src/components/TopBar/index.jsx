import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import models from "../../modelData/models";
import "./styles.css";

/**
 * Put your own name here - the assignment asks for it on the left of the top
 * bar.
 */
const STUDENT_NAME = "Đặng Văn Quân";

/**
 * useCurrentView - Describe the route currently shown in the content region.
 *
 * The description is worked out from the URL rather than passed down as props,
 * so the top bar stays correct after a browser refresh and when a deep link is
 * opened directly.
 */
function useCurrentView() {
  const { pathname } = useLocation();
  const match = pathname.match(/^\/(users|photos)\/([^/]+)/);

  if (!match) {
    return "Photo Share";
  }

  const [view, userId] = [match[1], match[2]];
  const user = models.userModel(userId);

  if (!user) {
    return view === "photos" ? "Photos" : "User detail";
  }

  const fullName = `${user.first_name} ${user.last_name}`;

  return view === "photos" ? `Photos of ${fullName}` : fullName;
}

/**
 * Define TopBar, a React component of Project 4.
 *
 * The left side holds the author's name, the right side says what the content
 * region is showing.
 */
function TopBar() {
  const context = useCurrentView();

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6" color="inherit" className="topbar-name">
          {STUDENT_NAME}
        </Typography>

        <Box className="topbar-context">
          <Typography
            variant="body1"
            color="inherit"
            className="topbar-contextText"
          >
            {context}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
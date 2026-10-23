import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";

import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserList, a React component of Project 4.
 *
 * The side bar of the master-detail layout: every user in the system, each row
 * linking to that user's detail view. The user currently being shown is
 * highlighted.
 */
function UserList() {
  const { userId } = useParams();
  const users = models.userListModel();

  return (
    <div className="userlist-container">
      <Typography variant="h6" className="userlist-title">
        Người dùng
      </Typography>

      <List component="nav" className="userlist-list">
        {users.map((user) => (
          <div key={user._id}>
            <ListItemButton
              component={RouterLink}
              to={`/users/${user._id}`}
              selected={user._id === userId}
              className="userlist-item"
            >
              <ListItemText
                primary={`${user.first_name} ${user.last_name}`}
                secondary={user.occupation}
              />
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default UserList;
import React from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";

import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserDetail, a React component of Project 4.
 *
 * Shows everything the model knows about one user, plus a link that switches
 * the content area over to that user's photos.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return (
      <Alert severity="warning" className="userdetail-alert">
        Không tìm thấy người dùng này.
      </Alert>
    );
  }

  return (
    <Paper elevation={0} className="userdetail-paper">
      <Box className="userdetail-header">
        <Avatar className="userdetail-avatar">
          {user.first_name.charAt(0)}
        </Avatar>
        <div>
          <Typography variant="h5" className="userdetail-name">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {user.occupation}
          </Typography>
        </div>
      </Box>

      <Divider className="userdetail-divider" />

      <Stack spacing={1.5}>
        <div>
          <Typography variant="overline" color="text.secondary">
            Nơi ở
          </Typography>
          <Typography variant="body1">{user.location}</Typography>
        </div>

        <div>
          <Typography variant="overline" color="text.secondary">
            Giới thiệu
          </Typography>
          <Typography variant="body1">{user.description}</Typography>
        </div>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to={`/photos/${user._id}`}
        className="userdetail-photosButton"
      >
        Xem ảnh của {user.first_name}
      </Button>
    </Paper>
  );
}

export default UserDetail;
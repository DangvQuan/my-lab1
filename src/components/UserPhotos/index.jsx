import React from "react";
import { Alert, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import PhotoCard from "../PhotoCard";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 *
 * Every photo of the user, each with its creation date and all of its
 * comments.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return (
      <Alert severity="info" className="userphotos-alert">
        Người dùng này chưa đăng ảnh nào.
      </Alert>
    );
  }

  return (
    <div className="userphotos-container">
      <Typography variant="h6" className="userphotos-title">
        {photos.length} ảnh
      </Typography>

      {photos.map((photo) => (
        <PhotoCard key={photo._id} photo={photo} />
      ))}
    </div>
  );
}

export default UserPhotos;
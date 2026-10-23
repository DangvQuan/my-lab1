import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import CommentList from "../CommentList";
import formatDateTime from "../../lib/formatDateTime";
import { getPhotoImage } from "../../lib/photoImages";
import "./styles.css";

/**
 * PhotoCard - One photo with its creation date and all of its comments.
 */
function PhotoCard({ photo }) {
  const imageUrl = getPhotoImage(photo.file_name);

  return (
    <Paper elevation={0} className="photocard-paper">
      {imageUrl ? (
        <img src={imageUrl} alt={photo.file_name} className="photocard-image" />
      ) : (
        <Box className="photocard-missing">
          <Typography variant="body2">
            Không tìm thấy ảnh {photo.file_name}
          </Typography>
        </Box>
      )}

      <Typography variant="subtitle2" className="photocard-date">
        Chụp lúc {formatDateTime(photo.date_time)}
      </Typography>

      <Box className="photocard-comments">
        <Typography variant="subtitle1" className="photocard-commentsTitle">
          Bình luận
        </Typography>
        <CommentList comments={photo.comments} />
      </Box>
    </Paper>
  );
}

export default PhotoCard;
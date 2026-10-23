import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import formatDateTime from "../../lib/formatDateTime";
import "./styles.css";

/**
 * CommentList - The comments made on one photo.
 *
 * Each comment shows when it was written, who wrote it and the text. The name
 * is a link, so clicking it switches the content area to that user's detail
 * page. Comment text is rendered as a plain string, which means any HTML in it
 * (there is some in the model data) is escaped by React instead of executed.
 */
function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" className="comments-empty">
        Chưa có bình luận nào.
      </Typography>
    );
  }

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment._id}>
          <Box className="comments-item">
            <Link
              component={RouterLink}
              to={`/users/${comment.user._id}`}
              className="comments-author"
              underline="hover"
            >
              {comment.user.first_name} {comment.user.last_name}
            </Link>

            <Typography variant="caption" color="text.secondary">
              {formatDateTime(comment.date_time)}
            </Typography>

            <Typography variant="body2" className="comments-text">
              {comment.comment}
            </Typography>
          </Box>
          <Divider className="comments-divider" />
        </div>
      ))}
    </div>
  );
}

export default CommentList;
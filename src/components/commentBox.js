import React, { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  Stack,
  Avatar,
  Paper,
} from '@mui/material';



const CommentBox = () => {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handeleAddComment = () => {
    if (newComment.trim() !== '') {
      setComment([...comment, newComment]);
      setNewComment('');
    }
  };

  const handelRemoveComment = (index) => {
    const updateComment = [...comment];
    updateComment.splice(index, 1);
    setComment(updateComment);
  }


  return (
    <>
      <Stack spacing={2} sx={{ marginTop: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="add a comment ... "
        />

        <Stack spacing={2} direction="row">
          <Button variant="outlined" size="small" onClick={handeleAddComment}>
            Add comment
          </Button>
          <Button variant="outlined" size="small" color="error" onClick={handelRemoveComment}>
            Remove comment
          </Button>
        </Stack>
        {/* 
        <div>
          {comment.map((comment, index) =>

            <div key={index}>{comment}</div>
          )}
        </div> */}


        <div>
          {comment.map((comment, index) =>
            <Paper
              sx={{ borderRadius: 8, padding: 3, marginBottom: 2 }} elevation={2}
              key={index}>
              {comment}
            </Paper>
          )}
        </div >

      </Stack>

    </>

  );
}

export default CommentBox;
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import BlogDetailsPosts from "src/components/BlogDetails/BlogDetailsPosts";
import BlogDetailsPaper from "src/components/BlogDetails/BlogDetailsPaper";
import BlogPageStatus from 'src/components/BlogPageStatus/index';
import CommentBox from "src/components/commentBox"
import InsertCommentIcon from '@mui/icons-material/InsertComment';


function BlogDetails() {
  return (

    <div className="BlogDetails">
      <Box sx={{ flexGrow: 1, marginTop: 15, marginBottom: 15 }}>
        <Grid container spacing={5}>

          <Grid item xs={8}>

            <BlogDetailsPosts />
            <BlogDetailsPaper />

            <Stack
              sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 2 }}>
              <Typography variant="button" sx={{ fontWeight: 600, fontSize: 20 }}>
                Comments
              </Typography>

              <Typography variant="button" sx={{ fontWeight: 600, fontSize: 20 }}>
                Disqus
              </Typography>
              <Stack
                sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <InsertCommentIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="button" sx={{ fontWeight: 600, fontSize: 20 }}>
                  Gwen
                </Typography>
              </Stack>
            </Stack>

            <div style={{
              marginTop: -10,
              backgroundColor: '#6C6C72',
              Color: '#6C6C72',
              height: 0.5
            }}>
            </div>

            <CommentBox />

          </Grid>


          <Grid item xs={4}>
            <BlogPageStatus />
          </Grid>

        </Grid>
      </Box>
    </div>

  );
}

export default BlogDetails;
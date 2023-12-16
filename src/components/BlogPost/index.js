import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Stack,
  Pagination,
} from '@mui/material';
import blogPic from 'src/assets/pictures/blogPic.png'
import BlogPageStatus from 'src/components/BlogPageStatus/index'



function BlogPost() {
  return (

    <div className="BlogPost">
      <Box sx={{ flexGrow: 1, marginTop: 15, marginBottom: 15 }}>
        <Grid container spacing={3}>

          <Grid item xs={8}>

            {Array(5).fill('').map(() => {
              return (
                <>
                  <Stack spacing={5}>
                    <img src={blogPic} alt="blogPic" />

                    <Typography
                      sx={{ fontSize: 30, fontWeight: 550 }}
                      variant="button"
                    >
                      The Snap Pixel: How It Works and How to Install
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#6C6C72", fontSize: 16, marginTop: 2, marginBottom: 2 }}
                    variant="body2" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.
                  </Typography>

                  <Stack sx={{ marginBottom: 5 }}>
                    <NavLink style={{ color: '#5956E9' }} to="/read-more">
                      <Typography
                        sx={{ fontSize: 17, fontWeight: 550, }}
                        variant="button"
                      >
                        Read MOre
                      </Typography>
                    </NavLink>
                  </Stack>

                </>
              )
            })}

            <div style={{
              marginBottom: 50,
              marginTop: 60,
              backgroundColor: '#6C6C72',
              Color: '#6C6C72',
              height: 1
            }}>
            </div>

            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              count={5}
              color="primary"
            />
          </Grid>


          <Grid item xs={4}>
            <BlogPageStatus />
          </Grid>

        </Grid>
      </Box>
    </div>

  );
}

export default BlogPost;
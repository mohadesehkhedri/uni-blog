import React from 'react';
import { Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BlogPost from 'src/components/BlogPost';

function Blog() {
  return (
    <>
      <div className="container-imag">
        <div style={{
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 80
        }}>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: 48, fontWeight: 700 }} variant="button">
              blog
            </Typography>

            <Breadcrumbs
              sx={{ display: 'flex', justifyContent: 'center' }}
              aria-label="breadcrumb"
              separator=
              {(
                <span style={{ color: "white" }} >/</span>
              )}>
              <Link
                sx={{ display: 'flex', alignItems: 'center' }}
                underline="hover"
                color="white"
                href="/">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>

              <Typography color="white">
                Blog
              </Typography>
            </Breadcrumbs>
          </Stack>
        </div>
      </div>


      <div className='container'>
        <BlogPost />
      </div>
    </>

  );
}

export default Blog;

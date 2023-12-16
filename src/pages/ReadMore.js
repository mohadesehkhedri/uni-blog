import React from 'react';
import { Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BlogDetails from 'src/components/BlogDetails';

function ReadMore() {
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
            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 48, fontWeight: 700 }} variant="button">
                The Snap Pixel: How It
              </Typography>
              <Typography sx={{ fontSize: 48, fontWeight: 700 }} variant="button">
                Works and How to Install
              </Typography>
            </Stack>

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

              <Link
                sx={{ display: 'flex', alignItems: 'center' }}
                underline="hover"
                color="white"
                href="/blog">
                Blog
              </Link>

              <Typography color="white">
                Blog details
              </Typography>
            </Breadcrumbs>
          </Stack>
        </div>
      </div>


      <div className='container'>
        <BlogDetails/>
      </div>
    </>

  );
}

export default ReadMore;
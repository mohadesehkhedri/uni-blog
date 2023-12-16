import React from 'react';
import {
  Typography,
  Stack,
  Avatar,
  Paper,
} from '@mui/material';
import Avatarr from "src/assets/pictures/Avatar.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function BlogDetailsPaper() {
  return (

    <Paper sx={{ borderRadius: 0, padding: 2.5, marginTop: -18, marginBottom: 15 }} elevation={3} >
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Stack spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={Avatarr}
            sx={{ width: 100, height: 100 }}
          />
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <FacebookIcon fontSize="small" sx={{ marginRight: 1 }} />
            <InstagramIcon fontSize="small" sx={{ marginRight: 1 }} />
            <TwitterIcon fontSize="small" sx={{ marginRight: 1 }} />
            <YouTubeIcon fontSize="small" />
          </Stack>
        </Stack>

        <Stack spacing={1} sx={{ marginLeft: 2.5, marginTop: 2 }}>
          <Typography variant="button" display="block" sx={{ fontWeight: 600, fontSize: 20 }}>
            Charlie Herwitz
          </Typography>

          <Typography variant="subtitle2" display="block" color="#5956E9" >
            UI Designer
          </Typography>

          <Typography variant="body2" sx={{ color: "#6C6C72" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor porttitor est amet, volutpat augue a sodales nec, vitae. Pulvinar vitae eu sed elit vitae.
          </Typography>
        </Stack>
      </Stack>
    </Paper>

  );
}

export default BlogDetailsPaper;
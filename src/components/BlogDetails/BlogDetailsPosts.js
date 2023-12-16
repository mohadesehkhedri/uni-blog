import React from 'react';
import './styles.css';
import {
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import blogPic from 'src/assets/pictures/blogPic.png'
import blue from 'src/assets/pictures/blue.png'
import pencil from 'src/assets/pictures/pencil.png'
import diamond from 'src/assets/pictures/diamond.png'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

function BlogDetailsPosts() {
  return (

    <Stack spacing={7}>
      <img src={blogPic} alt="blogPic" />

      <Stack
        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 4 }}>
          <AccessAlarmIcon sx={{ color: "#6C6C72", marginRight: 2 }} />
          <Typography variant="button" sx={{ color: "#6C6C72", fontSize: 20 }}>
            January 25, 2021
          </Typography>
        </Stack>

        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <PersonOutlineIcon sx={{ color: "#6C6C72", marginRight: 2 }} />
          <Typography variant="button" sx={{ color: "#6C6C72", fontSize: 20 }}>
            Charlie Herwitz
          </Typography>
        </Stack>

        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 4 }}>
          <InsertCommentIcon sx={{ color: "#6C6C72", marginRight: 2 }} />
          <Typography variant="button" sx={{ color: "#6C6C72", fontSize: 20 }}>
            50 Comment
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2.5}>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Typography className='big-letter' variant="body2" style={{ color: "#6C6C72" }}>
            The Memphis Design movement is one of unlikeliest success stories in the history of             design. Like so many artistic reactions, it began as an outlet for its creators, a way to rail against and confound elite sensibilities. The result was a style that was revolutionary in its time and whose spirit is a continual source of inspiration to this day.
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: "#6C6C72" }}>
          As popular and influential as Memphis Design has been over the years, it can sometimes get a bad rap. It is a loud, colorful style that is hard to separate from its era. And when implemented without care, it can make some design projects feel antiquated. On the other hand, a good designer can turn these sins into virtues: obnoxious retro becoming lively nostalgia.
        </Typography>

        <Typography variant="body2" sx={{ color: "#6C6C72" }}>
          Memphis Design is a 1980s design aesthetic characterized by scattered, brightly colored shapes and lines. It typically combines circles and triangles with black-and-white graphic patterns such as polka dots and squiggly lines.
        </Typography>
      </Stack>

      <img src={blue} alt="blue" />

      <Paper
        sx={{ backgroundColor: "#5956E9", paddingLeft: 2.5, paddingRight: 2.5, paddingTop: 4, paddingBottom: 4, borderRadius: 2 }} >
        <Typography variant="body2" sx={{ color: "white", textAlign: "center" }}>
          Imagine you’re at a party, and you’re bored. You’ve been bored for a while—years, it feels like. You wonder how a party, something that is supposed to be fun, can feel like it’s draining the life out of your very soul. As you look around the yawning faces of the guests, you realize it’s going to take drastic measures to salvage any excitement out of this long night. So you sneak a desperate gulp of your drink, slip on your tinted sunglasses and leap atop of the sofa. You’ve sacrificed yourself to karaoke.
        </Typography>
      </Paper>

      <Stack
        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
        spacing={0}
      >
        <Stack spacing={4}>
          <img style={{ width: 360, height: 400 }} src={pencil} alt="pencil" />
          <Typography variant="body2" sx={{ color: "#6C6C72", width: 360, height: 400 }}>
            The birth of Memphis Design was a lot like this, starting with a gathering of architects and industrial designers in Milan, Italy in 1981. But it wasn’t the party that bored the guests. It was the general state of design—how creativity had stagnated to become corporate and uniform.
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <img style={{ width: 360, height: 400 }} src={diamond} alt="diamond" />
          <Typography variant="body2" sx={{ color: "#6C6C72", width: 360, height: 400 }}>
            Long before all this, there had been a number of fine art and design movements that precipitated Memphis Design, and these were likely on the guests’ minds as they traced where it all had gone wrong.
            Kadinsky composition On White
            Kadinsky’s work also likely inspired the Memphis design movement.
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );
}

export default BlogDetailsPosts;
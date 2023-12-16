import React from 'react';
import {
  Typography,
  Stack,
  TextField,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import recentPostpic from 'src/assets/pictures/recentPostpic.png'
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function BlogPageStatus() {
  return (

    <>
      <Stack sx={{ marginTop: 1 }} spacing={5}>
        <TextField
          fullWidth
          placeholder="Search for...."
          id="search"
          InputProps={{
            startAdornment: <SearchIcon position="start" sx={{ color: '#6C6C72', marginRight: 2 }} />
          }}
        />

        <div style={{
          backgroundColor: '#6C6C72',
          Color: '#6C6C72',
          height: 0.5
        }}>
        </div>
      </Stack>

      <Stack sx={{ marginTop: 5 }}>
        <Typography
          sx={{ fontSize: 28, fontWeight: 600 }}
          variant="button"
        >
          Recent Post
        </Typography>
      </Stack>

      {Array(5).fill('').map(() => {
        return (
          <Stack spacing={1} sx={{ marginTop: 2, marginBottom: 5 }}>
            <img src={recentPostpic} alt="recentPostpic" />
            <Typography
              sx={{ fontSize: 16 }}
              variant="button"
            >
              A new online show is tracing leading artists’ early commer-
              cial practice
            </Typography>
          </Stack>
        )
      })}

      <div style={{
        backgroundColor: '#6C6C72',
        Color: '#6C6C72',
        height: 0.5
      }}>
      </div>

      <Stack sx={{ marginTop: 5 }}>
        <Typography
          sx={{ fontSize: 28, fontWeight: 600 }}
          variant="button"
        >
          Category
        </Typography>
      </Stack>

      <List sx={{ marginBottom: 5 }}>
        <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="E-commars app" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Banking app" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Business app" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="video app" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="E-commars app" />
        </ListItemButton>
      </List>

      <div style={{
        backgroundColor: '#6C6C72',
        Color: '#6C6C72',
        height: 0.5
      }}>
      </div>

      <Stack sx={{ marginTop: 5 }}>
        <Typography
          sx={{ fontSize: 28, fontWeight: 600 }}
          variant="button"
        >
          Tags
        </Typography>
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "row", marginTop: 3 }}>
        <Link href="#" color="inherit">
          <Typography sx={{ fontSize: 16, marginRight: 4 }} variant="button">
            ecommers app
          </Typography>
        </Link>

        <Link href="#" color="inherit">
          <Typography sx={{ fontSize: 16 }} variant="button">
            Music app
          </Typography>
        </Link>
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Link href="#" color="inherit">
          <Typography sx={{ fontSize: 16, marginRight: 4 }} variant="button">
            bank app
          </Typography>
        </Link>

        <Link href="#" color="inherit">
          <Typography sx={{ fontSize: 16 }} variant="button">
            social app
          </Typography>
        </Link>
      </Stack>
    </>

  );
}

export default BlogPageStatus;
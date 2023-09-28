import {
  Button,
  Autocomplete,
  ButtonGroup,
  Stack,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Typography,
  CardContent,
  AspectRatio,
  Card,
} from "@mui/joy";
import React from "react";

export default function Demo() {
  return (
    <Stack spacing={2} style={{ margin: 10 }}>
      <Button variant="solid">Hello world</Button>
      <ButtonGroup>
        <Button color="primary">One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Autocomplete options={["Option 1", "Option 2"]} />
      <Sheet variant="outlined">
        <List>
          <ListItem>
            <ListItemButton>Home</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Projects</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Settings</ListItemButton>
          </ListItem>
        </List>
      </Sheet>
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">Yosemite National Park</Typography>
          <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
}

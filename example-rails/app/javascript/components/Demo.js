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
import { html } from "htm/react";

export default function Demo() {
  return html`
    <${Stack} spacing=${2} style=${{ margin: 10 }}>
      <${Button} variant="solid">Hello world<//>
      <${ButtonGroup}>
        <${Button} color="primary">One<//>
        <${Button}>Two<//>
        <${Button}>Three<//>
      <//>
      <${Autocomplete} options=${["Option 1", "Option 2"]} />
      <${Sheet} variant="outlined">
        <${List}>
          <${ListItem}>
            <${ListItemButton}>Home<//>
          <//>
          <${ListItem}>
            <${ListItemButton}>Projects<//>
          <//>
          <${ListItem}>
            <${ListItemButton}>Settings<//>
          <//>
        <//>
      <//>
      <${Card} sx=${{ width: 320 }}>
        <div>
          <${Typography} level="title-lg">Yosemite National Park<//>
          <${Typography} level="body-sm">April 24 to May 02, 2021<//>
        </div>
        <${AspectRatio} minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcset="
              https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x
            "
            loading="lazy"
            alt=""
          />
        <//>
        <${CardContent} orientation="horizontal">
          <div>
            <${Typography} level="body-xs">Total price:<//>
            <${Typography} fontSize="lg" fontWeight="lg"> $2,900 <//>
          </div>
          <${Button}
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx=${{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          <//>
        <//>
      <//>
    <//>
  `;
}

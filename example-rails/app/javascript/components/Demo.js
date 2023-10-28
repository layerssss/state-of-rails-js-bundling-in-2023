import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";

import { html } from "htm/react";

export default function Demo() {
  return html`
    <${Stack} spacing=${2} style=${{ margin: 10 }}>
      <${Button} variant="contained">Hello world<//>
      <${ButtonGroup}>
        <${Button} color="secondary">One<//>
        <${Button}>Two<//>
        <${Button}>Three<//>
      <//>
      <${Autocomplete}
        options=${["Option 1", "Option 2"]}
        renderInput=${(params) =>
          html`<${TextField} ...${params} label="Combo box" />`}
      />
      <${Paper}>
        <${List}>
          <${ListItem} disablePadding>
            <${ListItemButton}>
              <${ListItemText} primary="Home" />
            <//>
          <//>
          <${ListItem} disablePadding>
            <${ListItemButton}>
              <${ListItemText} primary="About" />
            <//>
          <//>
          <${ListItem} disablePadding>
            <${ListItemButton}>
              <${ListItemText} primary="Contact" />
            <//>
          <//>
        <//>
      <//>
      <${Card} sx=${{ width: 320 }}>
        <${CardHeader}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcset="
            https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x
          "
          loading="lazy"
          alt=""
          minHeight="120px"
          maxHeight="200px"
        />
        <${CardContent}>
          <div>
            <${Typography} level="body-xs">Total price:<//>
            <${Typography} fontSize="lg" fontWeight="lg"> $2,900 <//>
          </div>
        <//>
        <${CardActions}>
          <${Button} variant="contained"> Explore <//>
        <//>
      <//>
    <//>
  `;
}

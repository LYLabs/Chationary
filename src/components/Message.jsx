import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  messageArea: {
    overflowY: "auto",
    paddingBottom: "0px",
  },
  userText: {
    backgroundColor: "#40637E",
    color: "white",
    padding: "5px 10px",
    borderRadius: "10px",
  },
  nonUserText: {
    backgroundColor: "#ebebeb",
    padding: "5px 10px",
    borderRadius: "10px",
  },
});

var date = new Date();
var time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const Message = ({ message, name, toUpperFirst}) => {
  const classes = useStyles();

  return message.name === name.toLowerCase() ? (
    <List className={classes.messageArea}>
      <ListItem key="1">
        <Grid container>
          <Grid item xs={12}>
            {/* <ListItemText align="right" primary={message.text} style={{color: "#40637E"}}></ListItemText> */}
            <Typography align="right">
              <span className={classes.userText}>{message.text}</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              align="right"
              secondary={`${name}- ${time}`}
            ></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  ) : (
    <List className={classes.messageArea}>
      <ListItem key="2">
        <Grid container>
          <Grid item xs={12}>
            {/* <ListItemText align="left" primary={message.text} ></ListItemText> */}
            <Typography align="left">
              <span className={classes.nonUserText}>{message.text}</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              align="left"
              secondary={`${toUpperFirst(message.name)}- ${time}`}
            ></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

export default Message;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinkButton from "./../shareComponent/LinkButton";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function DrawerAppBar(props) {
  const { classes } = props;

  const logout = () => {
    localStorage.removeItem("accessToken");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Website trao đổi đồ cũ
          </Typography>
          {localStorage.getItem("accessToken") !== null ? (
            <div>
              Hello
              <Button onClick={logout}>Logout</Button>
            </div>
          ) : (
            <LinkButton to="/login">Login</LinkButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

DrawerAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerAppBar);

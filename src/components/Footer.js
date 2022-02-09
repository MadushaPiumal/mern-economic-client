import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters container="true" justify="center">
          <Box
            sx={{ flexGrow: 1, display: { md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            Copyright &copy; Sonasu
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;

import React from "react";
import Graph from "../components/Graph";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });

const ProductgraphScreen = () => {
  return (
    <>
      <br />

      <Grid container justifyContent="center">
        {[lightTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <>
                <Graph/>
              </>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
      <br />
    </>
  );
};

export default ProductgraphScreen;

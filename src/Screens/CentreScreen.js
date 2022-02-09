import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPriceByCertreAndDate } from "../redux/actions/centreActions";
import { useParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import Item from "../components/Item";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });

const CentreScreen = () => {
  const { centreId } = useParams();
  const dispatch = useDispatch();
  const [date] = useState(new Date());

  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  const dateTime = year + "-" + (month + 1) + "-" + day;

  const Items = useSelector((state) => state.centreDetails);
  const { loading, centreDetails, error } = Items;

  useEffect(() => {
    dispatch(listPriceByCertreAndDate(centreId, dateTime));
  }, [dispatch, centreId, dateTime]);

  return (
    <>
      <br />
      <SearchBar />
      <br />

      {loading && <Loader />}
      {error && <h1>{error}</h1>}

      <Grid justifyContent="center">
        {[lightTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {centreDetails.map((item) => (
                  <Item key={item._id} item={item} />
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CentreScreen;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../redux/actions/itemActions";

import { listPriceByproduct } from "../redux/actions/centreActions";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

import Item from "../components/Item";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });

const SingleProductScreen = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");

  const Details = useSelector((state) => state.itemDetails);
  const { loading, error, itemDetails } = Details;

  const Items = useSelector((state) => state.centreDetails);
  const { loading: loadingCentre, error: errorCentre, centreDetails } = Items;

  useEffect(() => {
    dispatch(getItemDetails(productId));
    setItemName(itemDetails.name);
    dispatch(listPriceByproduct(productId));
  }, [dispatch, productId, itemDetails.name]);

  return (
    <>
      <br />
      {loading && <Loader />}
      {error && <h1>{error}</h1>}
      <h1>{itemName}</h1>
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
                {loadingCentre ? (
                  <Loader />
                ) : errorCentre ? (
                  <h1>{error}</h1>
                ) : (
                  centreDetails.map((item) => (
                    <Item key={item._id} item={item} />
                  ))
                )}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SingleProductScreen;

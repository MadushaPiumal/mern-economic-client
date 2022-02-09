import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { listItems } from "../redux/actions/itemActions";
import Grid from "@mui/material/Grid";
import Product from "../components/Product";

const ProductScreen = () => {
  const dispatch = useDispatch();

  const itemList = useSelector((state) => state.itemList);
  const { loading, error, items } = itemList;

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);
  return (
    <>
      <br />
      <Grid container spacing={1} justifyContent="center">
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {items.map((item) => (
              <Product key ={item._id} item={item} />
            ))}
          </>
        )}

        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </Grid>
    </>
  );
};

export default ProductScreen;

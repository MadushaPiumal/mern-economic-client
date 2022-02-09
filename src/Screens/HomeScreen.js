import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCentres } from "../redux/actions/centreActions";
import { Link } from "react-router-dom";

import Centre from "../components/Centre";
import Loader from "../components/Loader";
import Grid from "@material-ui/core/Grid";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const centreList = useSelector((state) => state.centreList);
  const { loading, error, centres } = centreList;

  useEffect(() => {
    dispatch(listCentres());
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
            {centres.map((centre) => (
              <Link
                to={`/centre/${centre._id}`}
                style={{ textDecoration: "none" }}
                key={centre._id}
              >
                <Centre  centre={centre} />
              </Link>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default HomeScreen;

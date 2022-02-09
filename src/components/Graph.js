import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { listPublicData } from "../redux/actions/publicAction";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
const Graph = () => {
  const { itemId, centreId } = useParams();
  const dispatch = useDispatch();

  const publicList = useSelector((state) => state.publicDataList);
  const { loading, publicData, error } = publicList;

  useEffect(() => {
    dispatch(listPublicData(itemId, centreId));
  }, [dispatch,itemId, centreId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
          <Paper>
            <Chart data={publicData}>
              <ArgumentAxis />
              <ValueAxis />

              <LineSeries valueField="price" argumentField="date" />
              <Title text="Price Changed Graph" />
            </Chart>
          </Paper>
      )}
    </>
  );
};
export default Graph;

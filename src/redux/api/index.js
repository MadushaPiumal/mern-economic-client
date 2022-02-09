import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:5000" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("userInfo")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("userInfo")).token
//     }`;
//   }

//   return req;
// });

export const listItemsAPI = () => API.get("/api/admin/items");
export const ItemsDetailsAPI = (id) => API.get(`/api/admin/items/${id}`);

export const listCentreAPI = () => API.get("/api/admin/centres");

export const CertreDetailsAPI = (id) => API.get(`/api/admin/centres/${id}`);

export const CertreDetailsToDateAPI = (id,date) =>
  API.post(`/api/admin/price/centre/${id}`,{ date });

  export const getPriceByProductID = (id) =>
  API.get(`/api/admin/price/product/${id}`);

export const FilterDetailsAPI = (id, date, search) =>
  API.post(`/api/admin/price/centre/`, { id, date, search });

export const PublicDataAPI = (itemId, centreId) =>
  API.post("/api/admin/price/graph/", { itemId, centreId });
  // API.post("/api/admin/price/graph/", {
  //   itemId: "61b10d2e2766924bccaaadf6",
  //   centreId: "617a70a4580be4ee994a74ce",
  // });

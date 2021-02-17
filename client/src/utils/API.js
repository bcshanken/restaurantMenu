import axios from "axios";

// eslint-disable-next-line
export default {
  getMenu: function() {
    return axios.get("/api/menu");
  },
  getItem: function(id) {
    return axios.get("/api/menu/" + id);
  },
  deleteResponse: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  createResponse: function(responseData) {
    return axios.post("/api/menu", responseData);
  },
  updateResponse: function(responseData, id) {
    return axios.put("/api/menu/" + id, responseData);
  },
  getUsers: function(email) {
    return axios.post("/api/user/" + email)
  },
  createOrder: function(order) {
    return axios.post("/api/order", order)
  }
};

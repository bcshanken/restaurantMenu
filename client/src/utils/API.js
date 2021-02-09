import axios from "axios";

// eslint-disable-next-line
export default {
  // Gets all Menu Items
  getMenu: function() {
    return axios.get("/api/menu");
  },
  // Gets the menu item with the given id
  getItem: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the book with the given id
  deleteResponse: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a book to the database
  createResponse: function(responseData) {
    return axios.post("/api/menu", responseData);
  },
  // Updates a book in the database
  updateResponse: function(responseData, id) {
    return axios.put("/api/menu/" + id, responseData);
  },
  getUsers: function(email) {
    return axios.post("/api/user/" + email)
  }
};

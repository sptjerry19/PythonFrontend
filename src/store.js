import axios from "axios";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    UrlServe: "https://apicmsvietapp.vietapp.vn/api/cms",
    // UrlServe: "http://127.0.0.1:8000/api/cms",
    urlStorage: "http://127.0.0.1:8000/storage/",
    token: localStorage.getItem("token"),
    isAuthenticated: false,
  },
  getters: {
    doneLogin(state) {
      return state.tokenUser.length > 20
        ? (state.isLogin = true)
        : (state.isLogin = false);
    },
    getToken: (state) => state.token,
  },
  actions: {
    saveToken({ commit }, token) {
      commit("setToken", token);
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
});

export default store;

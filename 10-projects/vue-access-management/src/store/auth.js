// src/store/auth.js
import { defineStore } from "pinia";
import api from "../api/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    initialize() {
      // Set Authorization header if token exists on load
      if (this.token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        // Optionally fetch user data on initialization
        this.fetchUserProfile().catch((err) => {
          console.error("Failed to fetch user on init:", err);
          this.logout(); // Clear invalid token if fetch fails
        });
      }
    },

    async login(credentials) {
      try {
        const { data } = await api.post("/auth/login", credentials);

        this.token = data.token;
        this.user = data.user;

        localStorage.setItem("token", this.token);
        api.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;

        return true;
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Login failed. Please try again.";
        console.error("Login failed:", errorMessage);
        throw new Error(errorMessage); // Throw to be caught in component
      }
    },

    async register(payload) {
      try {
        return await api.post("/auth/register", payload);
      } catch (err) {
        console.error("Registration failed:", err);
        throw err;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
    },

    async fetchUserProfile() {
      try {
        const { data } = await api.get("auth/me");
        this.user = data;
        return data;
      } catch (err) {
        console.error("Fetch user profile failed:", err);
        throw err;
      }
    },
  },
});

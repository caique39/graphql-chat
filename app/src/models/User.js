const STORAGE_KEY = "USER";

export default {
  get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  },

  save(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
};

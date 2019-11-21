const STORAGE_KEY = "USER";

function save(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function get() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export default { save, get };

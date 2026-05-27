const APP_VERSION = "v1.0";
const THEME_STORAGE_KEY = "ibi-manager-theme";
const INDIA_TIME_ZONE = "Asia/Kolkata";

const versionElement = document.querySelector("#app-version");
const timeElement = document.querySelector("#current-time");
const dateElement = document.querySelector("#current-date");
const yearElement = document.querySelector("#copyright-year");
const themeSwitch = document.querySelector("#theme-switch");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: INDIA_TIME_ZONE
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: INDIA_TIME_ZONE
});

function updateClock() {
  const now = new Date();
  timeElement.textContent = `${timeFormatter.format(now)} IST`;
  dateElement.textContent = dateFormatter.format(now);
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeSwitch.checked = isDark;
  themeSwitch.setAttribute("aria-label", isDark ? "Use light theme" : "Use dark theme");
  themeMeta.setAttribute("content", isDark ? "#000000" : "#f1f6f9");
  window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
}

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

versionElement.textContent = APP_VERSION;
yearElement.textContent = new Date().getFullYear().toString();
setTheme(getInitialTheme());
updateClock();
window.setInterval(updateClock, 1000);

themeSwitch.addEventListener("change", (event) => {
  setTheme(event.target.checked ? "dark" : "light");
});

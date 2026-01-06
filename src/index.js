
import { searchWeather } from "./modules/apiData.js";
import "./styles/main.css";

const searchInput = document.getElementById("search-input");


searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchWeather(); // ✅ function call
  }
});



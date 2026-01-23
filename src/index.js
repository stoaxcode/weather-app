
import { searchWeather } from "./modules/apiData.js";
import "./styles/main.css";

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById("search-input");
  const icons = iconManager();
  
  icons.hideInvalid();
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  });
});

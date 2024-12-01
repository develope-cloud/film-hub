const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");
// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});
// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});
// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}
// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});
// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}




var items = document.getElementById('items');
var  search = document.getElementById('srch');

search.addEventListener('keyup', searchNotes);

function searchNotes(e){
  var searchTxt = e.target.value.toLowerCase();
  console.log(searchTxt);

  var list = items.getElementsByClassName('item');
  console.log(list);
  var listArr = Array.from(list);
  console.log(listArr);
  listArr.forEach(function(item){
    
      var noteTitle = item.firstChild.textContent;

      if(noteTitle.toLowerCase().indexOf(searchTxt) != -1){
          item.style.display = '';
      }
      else{
          item.style.display = 'none';
      }
  })
      
}
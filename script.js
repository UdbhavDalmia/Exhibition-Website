function navigateToLink() {
  const dropdown = document.getElementById("dropdown");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirects to the selected link
  }
}
//this function is called when the dropdown is clicked
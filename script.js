function navigateToLink() {
  const dropdown = document.getElementById("dropdown");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirects to the selected link
  }
}

function navigateLink() {
  const dropdown = document.getElementById("dropdown-mobile");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirects to the selected link
  }
}
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registrationModal");
    const registerBtn = document.getElementById("registerBtn");
    const closeModal = document.getElementById("closeModal");
    const registrationForm = document.getElementById("registrationForm");
  
    registerBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(registrationForm);
      const data = Object.fromEntries(formData.entries());
  
      fetch("https://script.google.com/macros/s/your-script-url/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          alert("Registration successful!");
          registrationForm.reset();
          modal.style.display = "none";
        })
        .catch(error => {
          alert("An error occurred. Please try again.");
          console.error(error);
        });
    });
  });
  
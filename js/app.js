/* js/app.js */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Staff Panel Loaded");

  // Highlight active sidebar link based on current page
  const links = document.querySelectorAll(".sidebar a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Example: live clock (optional dashboard feature)
  const userStatus = document.querySelector(".status");
  if (userStatus) {
    setInterval(() => {
      userStatus.style.opacity = userStatus.style.opacity === "0.3" ? "1" : "0.3";
    }, 800);
  }

  // Placeholder for future API loading
  async function loadDashboardData() {
    // You can replace this later with real backend calls
    return {
      reports: 12,
      appeals: 5,
      punishments: 8,
      staffOnline: 3
    };
  }

  loadDashboardData().then(data => {
    const cards = document.querySelectorAll(".card p");
    if (cards.length >= 4) {
      cards[0].textContent = data.reports;
      cards[1].textContent = data.appeals;
      cards[2].textContent = data.punishments;
      cards[3].textContent = data.staffOnline;
    }
  });
});

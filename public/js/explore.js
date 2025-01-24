// Smooth scroll functionality for internal links
// Toggles the visibility of the notification list

function toggleNotifications() {
    const notificationList = document.getElementById("notification-list");
    notificationList.style.display = 
      notificationList.style.display === "block" ? "none" : "block";
  }
  
  // Marks a notification as read
  function markAsRead(notificationItem) {
    // Add the 'read' class to change the styling
    notificationItem.classList.add("read");
  
    // Update the notification count
    const unreadCountElement = document.getElementById("notification-count");
    const unreadItems = document.querySelectorAll(
      ".notification-item:not(.read)"
    );
    unreadCountElement.textContent = unreadItems.length;
  
    // Hide the count if all notifications are read
    if (unreadItems.length === 0) {
      unreadCountElement.style.display = "none";
    }
  }
  

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

console.log("Boilerplate JS loaded with animations.");


function searchEvents() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const cards = document.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert("No matching events found.");
    }
}

function filterEvents(type) {
    const cards = document.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        // If type is 'all' or matches the data-type, show the card
        if (type === 'all' || card.getAttribute('data-type') === type) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found && type !== 'all') {
        alert(`No events found for ${type.replace('-', ' ')}.`);
    }
}


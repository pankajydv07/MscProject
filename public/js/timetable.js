// Event data with more comprehensive information
const EVENTS_DATA = [
    {
        name: "AI/ML Hackathon",
        dayTime: "monday-9",
        description: "Innovative AI and Machine Learning challenge",
        type: "Hackathon",
        registrationFee: "$50",
        skills: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
        name: "Startup Pitch Workshop",
        dayTime: "tuesday-10",
        description: "Learn startup pitching and networking",
        type: "Workshop",
        registrationFee: "Free",
        skills: ["Entrepreneurship", "Communication", "Business Strategy"]
    },
    {
        name: "Cyber Security Seminar",
        dayTime: "wednesday-11",
        description: "Latest trends in digital security",
        type: "Conference",
        registrationFee: "$75",
        skills: ["Network Security", "Ethical Hacking", "Risk Management"]
    },
    {
        name: "Data Science Bootcamp",
        dayTime: "thursday-2-30",
        description: "Intensive data science training program",
        type: "Bootcamp",
        registrationFee: "$200",
        skills: ["R", "Python", "Statistical Analysis", "Data Visualization"]
    },
    {
        name: "Blockchain Technology Summit",
        dayTime: "friday-1-30",
        description: "Exploring blockchain innovations",
        type: "Summit",
        registrationFee: "$100",
        skills: ["Blockchain", "Cryptocurrency", "Smart Contracts"]
    },
    {
        name: "Design Thinking Workshop",
        dayTime: "saturday-10",
        description: "Creative problem-solving techniques",
        type: "Workshop",
        registrationFee: "$50",
        skills: ["Innovation", "User Experience", "Creative Thinking"]
    },
    {
        name: "Tech Career Fair",
        dayTime: "sunday-11",
        description: "Direct networking with tech companies",
        type: "Career Event",
        registrationFee: "Free",
        skills: ["Networking", "Job Search", "Interview Skills"]
    }
];

// Save availability of timetable
function saveAvailability() {
    const timetableData = {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
        timetableData[checkbox.name] = checkbox.checked ? "Busy" : "Free";
    });
    
    localStorage.setItem("timetable", JSON.stringify(timetableData));
    localStorage.setItem("lastUpdated", new Date().toISOString());
    
    displayAvailableEvents(timetableData);
    alert("Timetable saved successfully!");
}

// Check and display available events
function displayAvailableEvents(timetableData = null) {
    if (!timetableData) {
        const storedData = localStorage.getItem("timetable");
        timetableData = storedData ? JSON.parse(storedData) : {};
    }
    
    const availableEvents = EVENTS_DATA.filter(event => 
        timetableData[event.dayTime] === "Free"
    );
    
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    
    availableEvents.forEach(event => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>${event.description}</p>
            <details>
                <summary>Event Details</summary>
                <p>Type: ${event.type}</p>
                <p>Registration Fee: ${event.registrationFee}</p>
                <p>Skills: ${event.skills.join(", ")}</p>
            </details>
        `;
        suggestionsList.appendChild(listItem);
    });
}

// Initialize events display on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem("timetable");
    if (storedData) {
        displayAvailableEvents(JSON.parse(storedData));
    }
});
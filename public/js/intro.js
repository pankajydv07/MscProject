const features = [
    
    {
        title: "Repository",
        description: "Manage all your course materials, assignments, and project files in a centralized, cloud-based repository for easy access and collaboration.",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_a_Git_Repository.jpg"
    },
    {
        title: "Skill Enhancement",
        description: "Receive personalized recommendations for skill-building courses, workshops, and resources based on your academic and career goals.",
        image: "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/b/5/b52239af532eca9822628f0cc6a1820a8d5be7e22cc7a5501c6f7bc43420a887/skill-enhancement-slide1.png"
    },
    {
        title: "Chatbot Assistant",
        description: "Get instant answers to your questions and guidance on academic matters through our 24/7 conversational AI assistant.",
        image: "https://5.imimg.com/data5/PM/IN/RI/SELLER-100932779/oracle-digital-assistant-or-chatbot-software-500x500.png"
    },
    { title: "Personalized Event Notification System",
        description: " Stay ahead with our smart timetable tool! It analyzes your free slots and sends personalized notifications about events perfectly aligned with your schedule, ensuring you never miss out on opportunities that matter to you.",
        image: "https://i.pinimg.com/736x/5c/fa/77/5cfa778c4ecc475576d96c912e87adf5.jpg"
    },
    {
        title: "Customized Event List",
        description: "Discover and add relevant events, lectures, and extracurricular activities to your personal calendar based on your interests and academic program.",
        image: "https://mp-cdn.elgato.com/media/47292cf4-dff0-48e7-984f-647477412786/6fc96241-95a3-4e11-a4a4-3a40c0e8fda1/Hyper_Event_List__Alerts-preview-optimized-3974ad43-1a1f-45f8-8e11-ce1bf5972d84.png"
    },
    {
        title: "Event Filtering by Time",
        description: "Quickly find and select events that fit your schedule using our advanced filtering options for date, time, and location.",
        image: "https://onlinehelp.ncr.com/Retail/Workstations/Retail%20Terminal%20Software/RPSW/HTML/Resources/Images/Ch4/FilteringEvents_DateTime_528x297.jpg"
    }
];



function createFeatureElement(feature) {
    const featureDiv = document.createElement('div');
    featureDiv.className = 'feature';
    featureDiv.innerHTML = `
        <img src="${feature.image}" alt="${feature.title}">
        <div class="feature-content">
            <h2>${feature.title}</h2>
            <p>${feature.description}</p>
        </div>
    `;
    return featureDiv;
}

function loadFeatures() {
    const container = document.querySelector('.features-container');
    features.forEach(feature => {
        container.appendChild(createFeatureElement(feature));
    });
}

function observeFeatures() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.feature').forEach(feature => {
        observer.observe(feature);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadFeatures();
    observeFeatures();
});
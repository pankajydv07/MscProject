// Smooth scroll functionality for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

console.log("Boilerplate JS loaded with animations.");

const features = [
    {
        title: "AI-Powered Personalization",
        description: "Experience tailored learning recommendations and content suggestions based on your unique academic journey and interests.",
        image: "rashi.jpg"
    },
    {
        title: "Interactive Progress Tracking",
        description: "Monitor your academic achievements with real-time progress indicators and detailed performance analytics.",
        image: "progress-tracking.jpg"
    },
    {
        title: "Achievement System",
        description: "Stay motivated with our comprehensive badge system and rewards program that celebrates your academic milestones.",
        image: "gamification.jpg"
    },
    {
        title: "Smart Team Matchmaking",
        description: "Connect with like-minded peers through our intelligent matchmaking algorithm for group projects and study sessions.",
        image: "team-matching.jpg"
    },
    {
        title: "Customizable Interface",
        description: "Personalize your dashboard layout with drag-and-drop widgets and custom color themes to match your preferences.",
        image: "customization.jpg"
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

// Intersection Observer for scroll animations
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
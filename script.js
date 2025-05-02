// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dark/Light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(savedTheme);
    
    function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        
        if (isDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Skills data
   // Updated skills data in script.js
const skills = [
    { name: 'Django', icon: 'fab fa-python', color: 'text-green-800' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-600' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-600' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-red-600' },
    { name: 'C++', icon: 'fas fa-code', color: 'text-blue-400' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' }
];

// Add this to your existing script.js
const tools = [
    { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-800 dark:text-gray-300' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400' },
    { name: 'Postman', icon: 'fas fa-server', color: 'text-orange-500' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
    { name: 'NPM', icon: 'fab fa-npm', color: 'text-red-500' },
    { name: 'Terminal', icon: 'fas fa-terminal', color: 'text-gray-600' }
];

// Add this to your DOMContentLoaded function
const toolsContainer = document.getElementById('tools-container');
if (toolsContainer) {
    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-3 transition-transform hover:scale-105';
        toolElement.innerHTML = `
            <i class="${tool.icon} ${tool.color} text-4xl"></i>
            <span class="font-medium text-center">${tool.name}</span>
        `;
        toolsContainer.appendChild(toolElement);
    });
}

// The rest of your script.js remains exactly the same...
    
    // Populate skills section
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4 transition-transform hover:scale-105';
            skillElement.innerHTML = `
                <i class="${skill.icon} ${skill.color} text-3xl"></i>
                <span class="font-medium">${skill.name}</span>
            `;
            skillsContainer.appendChild(skillElement);
        });
    }
    
    // Projects data
    const projects = [
        { 
            title: 'WeatherApp', 
            description: 'A full-featured web application that allow users to check real-time weather conditions for any city or location across the world.',
            tags: ['React', 'Python Django', 'SQLite'],
            image: 'images/project-1.jpg'
        },
        { 
            title: 'Event Management App', 
            description: 'A platform that helps organize, manage, and track events such as conferences, workshops, parties or fundraisers.',
            tags: ['HTML', 'CSS', 'Python Django'],
            image: 'images/project-2.jpg'
        },
        { 
            title: 'Attendance Management System', 
            description: 'This is a software solution designed to track and record the presence or absence of individuals typically students or employees.',
            tags: ['JavaScript', 'Django RESTframwork', 'Python'],
            image: 'images/project-3.jpg'
        }
    ];
    
    // Populate projects section
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]';
            projectElement.innerHTML = `
                <div class="h-48 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">${tag}</span>`).join('')}
                    </div>
                    <a href="https://github.com/georgegyan" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">View Project →</a>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Scroll animation for sections
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
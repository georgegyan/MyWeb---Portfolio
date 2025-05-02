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
    const skills = [
        { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
        { name: 'Tailwind CSS', icon: 'fas fa-paint-brush', color: 'text-cyan-400' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
        { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-300' },
        { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-400' }
    ];
    
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
            title: 'E-commerce Platform', 
            description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        { 
            title: 'Task Management App', 
            description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
            tags: ['React', 'Firebase', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
        },
        { 
            title: 'Weather Dashboard', 
            description: 'Real-time weather information with 5-day forecast using data from a weather API.',
            tags: ['JavaScript', 'API', 'CSS'],
            image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80'
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
                    <a href="#" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">View Project →</a>
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
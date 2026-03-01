/**
 * Modern Script - Unified Modern UI with Dark Mode Support
 * Handles both landing page and roadmap functionality
 */

class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.htmlElement = document.documentElement;
        this.initTheme();
        this.setupEventListeners();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        if (theme === 'dark') {
            this.htmlElement.setAttribute('data-theme', 'dark');
        } else {
            this.htmlElement.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
        this.updateToggleButton(theme);
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateToggleButton(theme) {
        if (this.toggleBtn) {
            this.toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    setupEventListeners() {
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }
}

/**
 * Roadmap Manager - Handles all roadmap functionality
 */
class RoadmapManager {
    constructor(data) {
        this.roadmapData = data;
        this.currentCategory = null;
        this.currentTopic = null;
        this.completedTopics = this.loadProgress();
        this.filteredData = [...data];
        
        this.initializeDOM();
        this.setupEventListeners();
        this.renderSidebar();
        this.updateProgressCount();
    }

    initializeDOM() {
        this.sidebar = document.getElementById('roadmapSidebar');
        this.sidebarContent = document.getElementById('roadmapSidebarContent');
        this.contentBody = document.getElementById('contentBody');
        this.contentTitle = document.getElementById('contentTitle');
        this.sidebarSearch = document.getElementById('sidebarSearch');
        this.completedCountEl = document.getElementById('completedCount');
        this.totalCountEl = document.getElementById('totalCount');
        this.menuToggle = document.getElementById('menuToggle');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.markCompletedBtn = document.getElementById('markCompletedBtn');
        this.resetProgressBtn = document.getElementById('resetProgressBtn');
        this.toast = document.getElementById('toast');

        // Show menu toggle on mobile
        if (window.innerWidth <= 768) {
            if (this.mobileMenuToggle) this.mobileMenuToggle.style.display = 'block';
        }
    }

    setupEventListeners() {
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        if (this.sidebarSearch) {
            this.sidebarSearch.addEventListener('input', (e) => this.searchTopics(e.target.value));
        }

        if (this.markCompletedBtn) {
            this.markCompletedBtn.addEventListener('click', () => this.markCurrentTopicCompleted());
        }

        if (this.resetProgressBtn) {
            this.resetProgressBtn.addEventListener('click', () => this.resetProgress());
        }

        // Close sidebar on mobile when content is clicked
        if (window.innerWidth <= 768 && this.contentBody) {
            this.contentBody.addEventListener('click', () => this.closeMobileMenu());
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.sidebar) {
                this.sidebar.classList.remove('open');
                if (this.mobileMenuToggle) this.mobileMenuToggle.style.display = 'none';
            } else if (window.innerWidth <= 768 && this.mobileMenuToggle) {
                this.mobileMenuToggle.style.display = 'block';
            }
        });
    }

    renderSidebar() {
        if (!this.sidebarContent) return;
        
        const html = this.filteredData.map(category => this.renderCategory(category)).join('');
        this.sidebarContent.innerHTML = html;
        this.attachCategoryClickHandlers();
    }

    renderCategory(category) {
        const isActive = this.currentCategory?.id === category.id ? 'active' : '';
        const icon = category.icon || '📱';
        
        const topicsHtml = category.topics
            .map(topic => this.renderTopic(topic, category.id))
            .join('');

        return `
            <div class="sidebar-section">
                <div class="sidebar-category ${isActive}" data-category-id="${category.id}">
                    <span>${icon} ${category.category}</span>
                </div>
                <div class="category-topics" style="display: ${isActive ? 'block' : 'none'};">
                    ${topicsHtml}
                </div>
            </div>
        `;
    }

    renderTopic(topic, categoryId) {
        const isCompleted = this.completedTopics.includes(topic.id);
        const isActive = this.currentTopic?.id === topic.id ? 'active' : '';
        const completedIndicator = isCompleted ? '✓ ' : '';

        return `
            <div class="sidebar-topic ${isActive}" data-topic-id="${topic.id}" data-category-id="${categoryId}">
                ${completedIndicator}${topic.title}
            </div>
        `;
    }

    attachCategoryClickHandlers() {
        document.querySelectorAll('.sidebar-category').forEach(el => {
            el.addEventListener('click', () => {
                const categoryId = el.getAttribute('data-category-id');
                const topicsDiv = el.nextElementSibling;
                
                // Toggle topics visibility
                const isOpen = topicsDiv.style.display === 'block';
                document.querySelectorAll('.category-topics').forEach(div => div.style.display = 'none');
                topicsDiv.style.display = isOpen ? 'none' : 'block';

                // Update active state
                document.querySelectorAll('.sidebar-category').forEach(c => c.classList.remove('active'));
                el.classList.add('active');

                this.currentCategory = this.roadmapData.find(c => c.id === categoryId);
            });
        });

        document.querySelectorAll('.sidebar-topic').forEach(el => {
            el.addEventListener('click', () => {
                const topicId = el.getAttribute('data-topic-id');
                const categoryId = el.getAttribute('data-category-id');
                this.loadTopic(topicId, categoryId);
            });
        });
    }

    loadTopic(topicId, categoryId) {
        const category = this.roadmapData.find(c => c.id === categoryId);
        if (!category) return;

        const topic = category.topics.find(t => t.id === topicId);
        if (!topic) return;

        this.currentTopic = topic;
        this.currentCategory = category;
        this.renderContent(topic);
        this.updateActiveSidebar();

        // Update button text
        const isCompleted = this.completedTopics.includes(topic.id);
        if (this.markCompletedBtn) {
            this.markCompletedBtn.textContent = isCompleted ? 'Mark as Incomplete' : 'Mark Completed';
        }

        // Close mobile menu
        this.closeMobileMenu();
    }

    renderContent(topic) {
        const difficultyClass = `difficulty-${topic.difficulty.toLowerCase()}`;
        const contentSections = topic.contentSections
            .map(section => `
                <div class="topic-section">
                    <h3>${section.title}</h3>
                    <p>${section.description}</p>
                    <div>${section.details}</div>
                </div>
            `)
            .join('');

        const subtopicsHtml = topic.subtopics && topic.subtopics.length > 0
            ? `<div class="topic-section">
                <h3>Topics Covered</h3>
                <ul>${topic.subtopics.map(st => `<li>${st}</li>`).join('')}</ul>
              </div>`
            : '';

        const html = `
            <div class="topic-header">
                <div>
                    <h1 style="margin: 0 0 8px 0;">${topic.title}</h1>
                    <div class="topic-meta">
                        <span class="topic-badge ${difficultyClass}">
                            ${topic.difficulty}
                        </span>
                        <span class="topic-badge">⏱️ ${topic.duration}</span>
                        ${topic.videoTimestamp ? `<span class="topic-badge"><a href="${topic.videoTimestamp}" target="_blank" style="color: inherit; text-decoration: none;">📹 Watch Video</a></span>` : ''}
                        ${topic.officialRef ? `<span class="topic-badge"><a href="${topic.officialRef}" target="_blank" style="color: inherit; text-decoration: none;">📖 Official Docs</a></span>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="topic-content">
                ${subtopicsHtml}
                ${contentSections}
            </div>
        `;

        if (this.contentTitle && this.currentCategory) {
            this.contentTitle.textContent = `${this.currentCategory.category} / ${topic.title}`;
        }
        
        if (this.contentBody) {
            this.contentBody.innerHTML = html;
        }
    }

    updateActiveSidebar() {
        // Update category active state
        document.querySelectorAll('.sidebar-category').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-category-id') === this.currentCategory.id) {
                el.classList.add('active');
            }
        });

        // Update topic active state
        document.querySelectorAll('.sidebar-topic').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-topic-id') === this.currentTopic.id) {
                el.classList.add('active');
            }
        });

        // Ensure topics are visible
        const activeCategory = document.querySelector(`[data-category-id="${this.currentCategory.id}"]`);
        if (activeCategory) {
            const topicsDiv = activeCategory.nextElementSibling;
            if (topicsDiv) topicsDiv.style.display = 'block';
        }
    }

    searchTopics(query) {
        const lowerQuery = query.toLowerCase();
        
        if (!query.trim()) {
            this.filteredData = [...this.roadmapData];
        } else {
            this.filteredData = this.roadmapData.map(category => ({
                ...category,
                topics: category.topics.filter(topic =>
                    topic.title.toLowerCase().includes(lowerQuery) ||
                    topic.keywords?.some(k => k.toLowerCase().includes(lowerQuery))
                )
            })).filter(category => category.topics.length > 0);
        }

        this.renderSidebar();
    }

    toggleMobileMenu() {
        if (this.sidebar) {
            this.sidebar.classList.toggle('open');
        }
    }

    closeMobileMenu() {
        if (this.sidebar && window.innerWidth <= 768) {
            this.sidebar.classList.remove('open');
        }
    }

    markCurrentTopicCompleted() {
        if (!this.currentTopic) return;

        const topicIndex = this.completedTopics.indexOf(this.currentTopic.id);
        if (topicIndex === -1) {
            this.completedTopics.push(this.currentTopic.id);
            this.showToast('Topic marked as completed!');
        } else {
            this.completedTopics.splice(topicIndex, 1);
            this.showToast('Topic marked as incomplete');
        }

        this.saveProgress();
        this.updateProgressCount();
        this.updateActiveSidebar();

        // Update button
        const isCompleted = this.completedTopics.includes(this.currentTopic.id);
        if (this.markCompletedBtn) {
            this.markCompletedBtn.textContent = isCompleted ? 'Mark as Incomplete' : 'Mark Completed';
        }
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.completedTopics = [];
            this.saveProgress();
            this.updateProgressCount();
            this.renderSidebar();
            this.showToast('Progress reset successfully');
        }
    }

    updateProgressCount() {
        if (this.totalCountEl && this.completedCountEl) {
            const totalTopics = this.roadmapData.reduce((sum, cat) => sum + cat.topics.length, 0);
            this.totalCountEl.textContent = totalTopics;
            this.completedCountEl.textContent = this.completedTopics.length;
        }
    }

    saveProgress() {
        localStorage.setItem('roadmapProgress', JSON.stringify(this.completedTopics));
    }

    loadProgress() {
        const saved = localStorage.getItem('roadmapProgress');
        return saved ? JSON.parse(saved) : [];
    }

    showToast(message) {
        if (this.toast) {
            this.toast.textContent = message;
            this.toast.style.display = 'block';
            setTimeout(() => {
                this.toast.style.display = 'none';
            }, 3000);
        }
    }
}

/**
 * Page Detection and Initialization
 */
function initializePage() {
    // Initialize theme manager (works on all pages)
    new ThemeManager();

    // Initialize roadmap manager if roadmap page
    if (document.getElementById('roadmapSidebar')) {
        if (typeof roadmapData !== 'undefined') {
            new RoadmapManager(roadmapData);
        } else {
            console.error('roadmapData not found. Make sure roadmap-data.js is loaded.');
        }
    }
    
    // Initialize index page features if applicable
    if (document.querySelector('[data-section]')) {
        setupSmoothScroll();
        setupScrollAnimations();
    }
}

/**
 * Smooth Scroll for Navigation Links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Scroll Animation - Fade In Effect
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);

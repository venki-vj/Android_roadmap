// REPLACE ALL CONTENT OF: js/script.js

// ==========================================
// ANDROID ROADMAP — ENGINE (SEO + LOGIC)
// ==========================================

// Global DOM Elements
var tocContainer, contentBody, searchInput, copyToast, markCompleteCheckbox, breadcrumb;
var activeTopicId = null;
var currentDifficultyFilter = null;

// LocalStorage Keys
const STORAGE_KEY = 'android_roadmap_progress';
const FILTER_KEY = 'android_roadmap_difficulty_filter';

document.addEventListener('DOMContentLoaded', () => {
    init();
    setupMobileMenu();
    setupThemeToggle();
    setupSidebarToggle();
    setupDifficultyFilter();
});

function init() {
    tocContainer = document.getElementById('tocContainer');
    contentBody  = document.getElementById('contentBody');
    searchInput  = document.getElementById('searchInput');
    copyToast    = document.getElementById('copyToast');
    markCompleteCheckbox = document.getElementById('markComplete');
    breadcrumb   = document.getElementById('breadcrumb');

    if (tocContainer && contentBody && typeof roadmapData !== 'undefined') {
        renderSidebar('');
        setupSearch();
        setupProgressTracker();

        // 1. Check URL Hash for deep linking (e.g. #kotlin-basics)
        const hash = window.location.hash.substring(1); // remove #
        if (hash) {
            loadTopic(hash);
        } else if (roadmapData.length > 0 && roadmapData[0].topics.length > 0) {
            loadTopic(roadmapData[0].topics[0].id);
        }
    }
}

// ==========================================
// 1. Navigation & Content Loading
// ==========================================
function renderSidebar(filter) {
    if (!tocContainer) return;
    tocContainer.innerHTML = '';
    const term = (filter || '').toLowerCase().trim();
    const progress = getProgress();

    roadmapData.forEach(section => {
        let visibleTopics = section.topics.filter(t => 
            !term || t.title.toLowerCase().includes(term)
        );
        
        // Apply difficulty filter
        if (currentDifficultyFilter) {
            visibleTopics = visibleTopics.filter(t => t.difficulty === currentDifficultyFilter);
        }

        if (visibleTopics.length === 0) return;

        // Category Header
        const catDiv = document.createElement('div');
        catDiv.className = 'toc-category';
        
        const header = document.createElement('div');
        header.className = 'toc-category-header';
        
        // Use different property names if available
        const categoryName = section.category || section.name || '';
        const categoryIcon = section.icon || '';
        
        header.innerHTML = `
            <span class="toc-cat-icon">${categoryIcon}</span>
            <span class="toc-cat-title">${categoryName}</span>
        `;

        const ul = document.createElement('ul');
        ul.className = 'toc-topic-list';

        visibleTopics.forEach(topic => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            if (progress.includes(topic.id)) li.classList.add('completed');
            li.dataset.id = topic.id;
            
            // Add difficulty indicator if available
            const diffClass = topic.difficulty ? ` diff-${topic.difficulty.toLowerCase().replace(/\s+/g, '-')}` : '';
            li.className += diffClass;
            
            li.innerHTML = `<span>${topic.title}</span>`;
            if (topic.difficulty) {
                const badge = document.createElement('span');
                badge.className = 'difficulty-mini-badge';
                badge.textContent = topic.difficulty.substring(0, 1);
                badge.title = topic.difficulty;
                li.appendChild(badge);
            }
            
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                loadTopic(topic.id);
                // Mobile UX: Close sidebar
                if (window.innerWidth <= 900) closeMobileSidebar();
            });

            ul.appendChild(li);
        });

        header.addEventListener('click', () => ul.classList.toggle('collapsed'));
        
        catDiv.appendChild(header);
        catDiv.appendChild(ul);
        tocContainer.appendChild(catDiv);
    });
}

function loadTopic(topicId) {
    let found = null;
    let sectionInfo = null;

    // Search for topic
    for (let s of roadmapData) {
        const t = s.topics.find(x => x.id === topicId);
        if (t) {
            found = t;
            sectionInfo = s;
            break;
        }
    }
    if (!found) return;

    activeTopicId = topicId;

    // A. Update UI
    highlightSidebar(topicId);
    updateBreadcrumb(sectionInfo.category, found.title);
    renderContent(found);
    updateCheckboxState(topicId);

    // B. SEO & URL Updates
    updatePageMetadata(found, sectionInfo);
    window.location.hash = topicId; // Updates URL to .../roadmap.html#topic-id

    // C. Scroll to top
    contentBody.scrollTop = 0;
    if(window.innerWidth <= 900) window.scrollTo(0,0);
}

function renderContent(topic) {
    // Build enhanced content with metadata and links
    let metadata = '';
    let keywordHtml = '';
    let subtopicsHtml = '';
    
    // ========== METADATA WITH INLINE LINKS ==========
    if (topic.difficulty) {
        const diffClass = topic.difficulty.toLowerCase().replace(/\s+/g, '-');
        metadata += `<span class="difficulty-badge difficulty-${diffClass}">${topic.difficulty}</span>`;
    }
    
    if (topic.duration) {
        metadata += `<span class="meta-item">⏱️ ${topic.duration}</span>`;
    }
    
    // Add links inline with metadata
    if (topic.videoTimestamp) {
        metadata += `<a href="${topic.videoTimestamp}" target="_blank" class="inline-link" title="Watch Video Tutorial" rel="noopener noreferrer">▶️ Watch</a>`;
    }
    
    if (topic.officialRef) {
        metadata += `<a href="${topic.officialRef}" target="_blank" class="inline-link" title="Official Documentation" rel="noopener noreferrer">📖 Docs</a>`;
    }
    
    // ========== KEYWORDS ==========
    if (topic.keywords && Array.isArray(topic.keywords) && topic.keywords.length > 0) {
        keywordHtml = `
            <div class="keywords-section">
                <strong>🏷️ Keywords:</strong>
                <div class="keywords-list">${topic.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}</div>
            </div>
        `;
    }
    
    // ========== SUBTOPICS ==========
    if (topic.subtopics && Array.isArray(topic.subtopics) && topic.subtopics.length > 0) {
        subtopicsHtml = `
            <div class="subtopics-section">
                <h3>📚 Subtopics Covered</h3>
                <ul class="subtopics-list">
                    ${topic.subtopics.map(s => `<li>✓ ${s}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // ========== MAIN CONTENT ==========
    let contentHtml = `<div class="topic-detail fade-in">`;
    
    // Title
    contentHtml += `<h1 class="topic-title">${topic.title}</h1>`;
    
    // Metadata (with inline links)
    if (metadata) {
        contentHtml += `<div class="topic-metadata">${metadata}</div>`;
    }
    
    // Keywords and Subtopics
    contentHtml += keywordHtml + subtopicsHtml;
    
    // ========== CONTENT SECTIONS HANDLER ==========
    if (topic.contentSections && Array.isArray(topic.contentSections) && topic.contentSections.length > 0) {
        contentHtml += renderContentSections(topic.contentSections, topic.id);
    } else if (topic.content) {
        // Fallback to old format
        contentHtml += `<div class="topic-content">${topic.content}</div>`;
    }
    
    contentHtml += `</div>`;
    
    contentBody.innerHTML = contentHtml;
    attachCopyLogic();
    attachSectionNavigation();
}

// ========== NEW: Render Content Sections (All Visible) ==========
function renderContentSections(sections, topicId) {
    if (!sections || sections.length === 0) return '';
    
    let html = `<div class="content-sections-container" data-topic="${topicId}">`;
    
    // Render each section - ALL VISIBLE AT ONCE (no pagination)
    sections.forEach((section, idx) => {
        html += `<div class="content-section" data-index="${idx}">
            <h2 class="section-title">${section.title}</h2>
            <p class="section-description">${section.description}</p>
            <div class="section-details">${section.details}</div>
            ${section.codeFlow ? `<div class="section-code-flow"><strong>Code Flow:</strong><pre>${section.codeFlow}</pre></div>` : ''}
        </div>`;
    });
    
    html += `</div>`;
    
    return html;
}

function attachSectionNavigation() {
    // All sections are now visible at once - no navigation needed
    // This function is kept for compatibility but does nothing
    return;
}

function highlightSidebar(id) {
    document.querySelectorAll('.toc-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === id);
    });
}

function updateBreadcrumb(category, title) {
    if (breadcrumb) breadcrumb.innerHTML = `${category} › <strong>${title}</strong>`;
}

// ==========================================
// 2. SEO ENGINE (Metadata + Schema)
// ==========================================
function updatePageMetadata(topic, section) {
    // 1. Update Title
    document.title = `${topic.title} | Android Roadmap`;

    // 2. Update Description (Find existing or create new)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    // Strip HTML from content snippet for description
    const rawDesc = topic.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + "...";
    metaDesc.content = rawDesc;

    // 3. Inject JSON-LD Schema (Article/TechArticle)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": topic.title,
        "description": rawDesc,
        "articleSection": section.category,
        "author": {
            "@type": "Organization",
            "name": "Android Mastery"
        }
    };

    let script = document.getElementById('dynamic-schema');
    if (script) script.remove();
    
    script = document.createElement('script');
    script.id = 'dynamic-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
}

// ==========================================
// 3. Progress Tracker (LocalStorage)
// ==========================================
function getProgress() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function setupProgressTracker() {
    if(!markCompleteCheckbox) return;

    markCompleteCheckbox.addEventListener('change', (e) => {
        if(!activeTopicId) return;
        
        let progress = getProgress();
        if (e.target.checked) {
            if (!progress.includes(activeTopicId)) progress.push(activeTopicId);
        } else {
            progress = progress.filter(id => id !== activeTopicId);
        }
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        
        // Refresh sidebar to show checkmarks
        const sidebarItem = document.querySelector(`.toc-item[data-id="${activeTopicId}"]`);
        if(sidebarItem) {
            if(e.target.checked) sidebarItem.classList.add('completed');
            else sidebarItem.classList.remove('completed');
        }
    });
}

function updateCheckboxState(id) {
    if(!markCompleteCheckbox) return;
    const progress = getProgress();
    markCompleteCheckbox.checked = progress.includes(id);
}

// ==========================================
// 4. Utility / UI Logic
// ==========================================
function attachCopyLogic() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const wrapper = e.target.closest('.code-wrapper');
            const code = wrapper.querySelector('pre').innerText;
            navigator.clipboard.writeText(code).then(() => {
                if(copyToast) {
                    copyToast.classList.add('show');
                    setTimeout(() => copyToast.classList.remove('show'), 2000);
                }
            });
        });
    });
}

function setupSearch() {
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSidebar(e.target.value);
        });
    }
}

function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if(btn && nav) {
        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');

    if (toggleBtn) toggleBtn.addEventListener('click', () => openMobileSidebar());
    if (closeBtn) closeBtn.addEventListener('click', closeMobileSidebar);
    if (overlay) overlay.addEventListener('click', closeMobileSidebar);
}

function openMobileSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('active');
}

function closeMobileSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}

function setupThemeToggle() {
    console.log('%c[THEME] Starting setupThemeToggle', 'color: #3ddc84; font-weight: bold;');
    
    // Find all theme buttons
    const themeBtns = document.querySelectorAll('#theme-toggle, .theme-btn');
    console.log('[THEME] Buttons found:', themeBtns.length);
    
    if (themeBtns.length === 0) {
        console.warn('[THEME] WARNING: No theme toggle buttons found!');
        return;
    }

    // Get stored theme or use system preference
    const stored = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    console.log('[THEME] Stored/Detected theme:', stored);
    
    // Apply initial theme
    setTheme(stored);

    // Attach click listeners to all theme toggle buttons
    themeBtns.forEach((btn, idx) => {
        if (!btn) {
            console.warn(`[THEME] Button at index ${idx} is null`);
            return;
        }
        
        console.log(`[THEME] Attaching handler to button ${idx}`);
        
        const clickHandler = function(e) {
            console.log('%c[THEME] Button clicked!', 'color: #3ddc84; font-weight: bold;');
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            console.log('[THEME] Current theme:', current);
            const newTheme = current === 'dark' ? 'light' : 'dark';
            console.log('[THEME] New theme:', newTheme);
            setTheme(newTheme);
        };
        
        btn.addEventListener('click', clickHandler);
    });
    
    console.log('[THEME] setupThemeToggle complete');
    
    // System theme preference listener (optional)
    try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const systemTheme = e.matches ? 'dark' : 'light';
            const storedTheme = localStorage.getItem('theme');
            if (!storedTheme) {
                console.log('[THEME] System theme changed to:', systemTheme);
                setTheme(systemTheme);
            }
        });
    } catch (err) {
        console.warn('[THEME] matchMedia listener error:', err);
    }
}

function setTheme(theme) {
    console.log('%c[THEME] setTheme() called with:', `color: #3ddc84; font-weight: bold;`, theme);
    
    // Validate theme value
    if (theme !== 'dark' && theme !== 'light') {
        console.warn('[THEME] Invalid theme value, defaulting to light');
        theme = 'light';
    }
    
    try {
        // Set data attribute on html element
        document.documentElement.setAttribute('data-theme', theme);
        console.log('[THEME] Set data-theme to:', document.documentElement.getAttribute('data-theme'));
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        console.log('[THEME] Saved theme to localStorage');
        
        // Update button icons/text for all theme toggle buttons
        const icon = theme === 'dark' ? '☀️' : '🌙';
        const themeBtns = document.querySelectorAll('#theme-toggle, .theme-btn');
        console.log('[THEME] Updating', themeBtns.length, 'buttons');
        
        themeBtns.forEach((btn, idx) => {
            if (btn) {
                btn.textContent = icon;
                btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
                console.log(`[THEME] Updated button ${idx}: ${btn.textContent}`);
            }
        });
        
        console.log('%c[THEME] ✓ Theme successfully changed to:', `color: #35c475; font-weight: bold;`, theme);
    } catch (error) {
        console.error('[THEME] Error in setTheme():', error);
    }
}

// ==========================================
// 5. Difficulty Filtering
// ==========================================
function setupDifficultyFilter() {
    // Collect all unique difficulty levels from topics
    const difficulties = new Set();
    if (typeof roadmapData !== 'undefined' && Array.isArray(roadmapData)) {
        roadmapData.forEach(section => {
            if (section.topics) {
                section.topics.forEach(topic => {
                    if (topic.difficulty) difficulties.add(topic.difficulty);
                });
            }
        });
    }
    
    // Only show filter if we have difficulty data
    if (difficulties.size === 0) {
        console.log('No difficulty levels found in roadmap data');
        return;
    }
    
    // Build filter UI
    const filterHtml = `
        <div class="difficulty-filter">
            <button class="filter-btn filter-all" data-filter="">All Levels</button>
            ${Array.from(difficulties).sort().map(diff => 
                `<button class="filter-btn filter-${diff.toLowerCase()}" data-filter="${diff}">${diff}</button>`
            ).join('')}
        </div>
    `;
    
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    // Insert after search (before toc-container)
    const searchWrapper = sidebar.querySelector('.search-wrapper');
    const tocContainer = sidebar.querySelector('.toc-container');
    
    if (searchWrapper && tocContainer) {
        const filterDiv = document.createElement('div');
        filterDiv.innerHTML = filterHtml;
        searchWrapper.parentNode.insertBefore(filterDiv, tocContainer);
        
        // Attach event listeners
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentDifficultyFilter = e.target.dataset.filter;
                localStorage.setItem(FILTER_KEY, currentDifficultyFilter);
                renderSidebar(searchInput?.value || '');
            });
        });
        
        // Restore saved filter
        const savedFilter = localStorage.getItem(FILTER_KEY);
        if (savedFilter !== null) {
            currentDifficultyFilter = savedFilter;
            const btn = document.querySelector(`.filter-btn[data-filter="${savedFilter}"]`);
            if (btn) btn.classList.add('active');
            else document.querySelector('.filter-all')?.classList.add('active');
        } else {
            document.querySelector('.filter-all')?.classList.add('active');
        }
    }
}
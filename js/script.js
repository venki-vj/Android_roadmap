// ==========================================
// ANDROID ROADMAP — SCRIPT (functionality only)
// Content / data lives in: js/roadmap-data.js
// ==========================================

// ─── State ───────────────────────────────
var activeTopicId = null;

// ─── DOM refs (resolved in init) ─────────
var tocContainer, contentBody, searchInput, copyToast;

// =============================================
// INIT — runs once the page is ready
// =============================================
function init() {
  tocContainer = document.getElementById('tocContainer');
  contentBody  = document.getElementById('contentBody');
  searchInput  = document.getElementById('searchInput');
  copyToast    = document.getElementById('copyToast');

  if (!tocContainer || !contentBody) return;

  renderSidebar('');
  setupSearch();

  // Auto-load Introduction (first topic in the data)
  var firstTopic = roadmapData && roadmapData[0] && roadmapData[0].topics && roadmapData[0].topics[0];
  if (firstTopic) {
    loadTopic(firstTopic.id);
    markActive(firstTopic.id);   // highlight in sidebar
    // Expand the first category so the active item is visible
    var firstHeader = tocContainer.querySelector('.toc-category-header');
    var firstList   = tocContainer.querySelector('.toc-topic-list');
    if (firstHeader && firstList) {
      firstHeader.classList.remove('collapsed');
      firstList.classList.remove('collapsed');
    }
  }
}

// =============================================
// RENDER SIDEBAR
// Builds: category header + topic list
// All categories start EXPANDED
// =============================================
function renderSidebar(filter) {
  if (!tocContainer) return;
  tocContainer.innerHTML = '';
  var term = (filter || '').toLowerCase().trim();

  for (var s = 0; s < roadmapData.length; s++) {
    var section = roadmapData[s];

    // Filter topics when searching
    var topicsToShow = [];
    for (var t = 0; t < section.topics.length; t++) {
      if (!term || section.topics[t].title.toLowerCase().indexOf(term) !== -1) {
        topicsToShow.push(section.topics[t]);
      }
    }
    if (topicsToShow.length === 0) continue;

    // ── Category wrapper ──
    let catEl = document.createElement('div');
    catEl.className = 'toc-category';

    // ── Category header (click to toggle) — starts collapsed ──
    let header = document.createElement('div');   // let = own binding per iteration
    header.className = 'toc-category-header collapsed';
    header.setAttribute('data-section', section.id || s);
    header.innerHTML =
      '<span class="toc-cat-icon">' + (section.icon || '') + '</span>' +
      '<span class="toc-cat-title">' + section.category + '</span>' +
      '<span class="toc-chevron">&#9662;</span>';

    // ── Topic list (starts collapsed) ──
    let topicList = document.createElement('ul'); // let = own binding per iteration
    topicList.className = 'toc-topic-list collapsed';

    for (var i = 0; i < topicsToShow.length; i++) {
      (function(topic) {
        var li = document.createElement('li');
        li.className = 'toc-item' + (topic.id === activeTopicId ? ' active' : '');
        li.dataset.id = topic.id;
        li.textContent = topic.title;

        li.addEventListener('click', function(e) {
          e.stopPropagation();           // don't bubble to category header
          loadTopic(topic.id);
          markActive(topic.id);
        });

        topicList.appendChild(li);
      })(topicsToShow[i]);
    }

    // Toggle collapse on header click
    header.addEventListener('click', function() {
      var isCollapsed = topicList.classList.toggle('collapsed');
      header.classList.toggle('collapsed', isCollapsed);
    });

    catEl.appendChild(header);
    catEl.appendChild(topicList);
    tocContainer.appendChild(catEl);
  }
}

// =============================================
// MARK ACTIVE SIDEBAR ITEM
// =============================================
function markActive(topicId) {
  activeTopicId = topicId;
  var items = tocContainer.querySelectorAll('.toc-item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].dataset.id === topicId) {
      items[i].classList.add('active');
      // Scroll into view so user can see it
      items[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else {
      items[i].classList.remove('active');
    }
  }
}

// =============================================
// LOAD TOPIC → render in center content area
// =============================================
function loadTopic(topicId) {
  // Find the topic
  var found = null;
  var sectionTitle = '';
  for (var s = 0; s < roadmapData.length; s++) {
    var section = roadmapData[s];
    for (var t = 0; t < section.topics.length; t++) {
      if (section.topics[t].id === topicId) {
        found = section.topics[t];
        sectionTitle = section.category;
        break;
      }
    }
    if (found) break;
  }
  if (!found) return;

  activeTopicId = topicId;

  // Update breadcrumb
  var bc = document.getElementById('breadcrumb');
  if (bc) {
    bc.innerHTML =
      '<a href="roadmap.html">Roadmap</a> &rsaquo; ' +
      '<span>' + sectionTitle + '</span> &rsaquo; ' +
      '<strong>' + found.title + '</strong>';
  }

  // Build & inject content into center panel
  var officialLink = found.officialRef
    ? '<div class="official-ref-footer">' +
        '<a href="' + found.officialRef + '" target="_blank" rel="noopener">' +
        '&#128218;&nbsp;View Official Documentation&nbsp;&#8599;</a>' +
      '</div>'
    : '';

  contentBody.innerHTML =
    '<div class="topic-detail fade-in">' +

      '<div class="topic-hero-image">' +
        '<img src="' + found.image + '"' +
             ' alt="' + (found.imageAlt || found.title) + '"' +
             ' onerror="this.onerror=null;this.src=\'https://developer.android.com/static/images/home/android-15-hero.webp\';">' +
        '<p class="image-caption">' + (found.caption || '') + '</p>' +
      '</div>' +

      '<div class="topic-text-content">' +
        found.content +
      '</div>' +

      officialLink +

    '</div>';

  // Attach copy buttons
  attachCopyListeners();

  // Scroll center panel to top
  contentBody.scrollTop = 0;
  var main = document.querySelector('.main-content');
  if (main) main.scrollTop = 0;
}

// =============================================
// CODE COPY BUTTONS
// =============================================
function attachCopyListeners() {
  var buttons = contentBody.querySelectorAll('.copy-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      var wrapper = e.target.closest('.code-wrapper');
      if (!wrapper) return;
      var pre = wrapper.querySelector('pre');
      if (!pre) return;
      var code = pre.textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(showToast, function() {
          fallbackCopy(code);
        });
      } else {
        fallbackCopy(code);
      }
    });
  }
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(); } catch(e) {}
  document.body.removeChild(ta);
}

function showToast() {
  if (!copyToast) return;
  copyToast.classList.add('show');
  setTimeout(function() { copyToast.classList.remove('show'); }, 2000);
}

// =============================================
// SEARCH — live filter sidebar topics
// =============================================
function setupSearch() {
  if (!searchInput) return;
  searchInput.addEventListener('input', function() {
    renderSidebar(searchInput.value);
    if (activeTopicId) markActive(activeTopicId);
  });
}

// =============================================
// BOOT — run immediately (scripts at <body> end)
// =============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

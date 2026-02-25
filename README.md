# 🚀 Android Mastery Roadmap

An interactive, single-page web application covering the full Android development learning path — from beginner Kotlin to advanced AOSP system engineering.

---

## 📁 Project Structure

```
roadmap/
├── index.html                        # Landing page
├── roadmap.html                      # Main roadmap SPA
├── css/
│   └── style.css                     # All styles (shared by both pages)
├── js/
│   ├── roadmap-data.js               # All topic content (data layer)
│   └── script.js                     # Sidebar, search, navigation logic
└── assets/
    └── Images/
        ├── platform_architecture.png  # Android platform stack diagram
        └── Android_Boot_Squence.png   # Android boot sequence diagram
```

---

## 🗺️ Pages

### `index.html` — Landing Page
Marketing/intro page with:
- Hero section with CTA to launch the roadmap
- Features section (Comprehensive, Modern Stack, Interactive UI)
- Curriculum overview grid
- Pro Tip CTA box

### `roadmap.html` — Roadmap SPA
Sticky sidebar + main content panel layout:
- **Sidebar**: Collapsible category list, live search filtering
- **Content panel**: Full topic detail with code blocks, tables, diagrams, and reference links

---

## 📚 Content Coverage

19 categories · 25+ topics spanning:

| Track | Topics |
|---|---|
| **App Development** | Why Android, Android Versions, Kotlin Basics, Coroutines, Android Studio, Jetpack Compose, App Architecture, Platform Architecture |
| **AOSP / System** | Boot Sequence, Android Runtime (ART), HAL, Binder IPC, Custom System Services, Kernel Drivers, SELinux, AOSP Build System |
| **Subsystems** | Graphics Stack, Audio Stack, Power Management, Wi-Fi & Bluetooth, Android Security Model |
| **Advanced App** | WorkManager, App Performance & Profiling, Unit Testing, App Publishing |

---

## ⚙️ How It Works

1. **`roadmap-data.js`** exports a `roadmapData` array — each entry is a category with one or more topic objects. Each topic has:
   - `id`, `title`, `image`, `imageAlt`, `caption`, `officialRef`
   - `content` — raw HTML string (h1, h2, p, ul, table, code-wrapper blocks)

2. **`script.js`** reads `roadmapData` to:
   - Build the sidebar TOC dynamically
   - Handle category expand/collapse
   - Filter topics via the search input
   - Inject topic `content` HTML into the content panel on click
   - Manage copy-to-clipboard on code blocks

3. **`style.css`** styles both pages using CSS custom properties (design tokens) defined in `:root`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styles | Vanilla CSS (custom properties, flexbox, grid) |
| Logic | Vanilla JavaScript (ES5 compatible, no build step) |
| Fonts | Inter (UI) + Fira Code (code blocks) via Google Fonts |
| Icons | Emoji (no icon library dependency) |
| Images | Local PNGs + `placehold.co` placeholder banners |

No frameworks. No build tools. Open `index.html` or `roadmap.html` directly in a browser.

---

## 🚀 Running Locally

```bash
# Option 1 — open directly
start index.html

# Option 2 — serve with any static server (avoids CORS on local file:// for some browsers)
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## ✏️ Adding or Editing Content

All topic content lives in **`js/roadmap-data.js`**.

### Add a new topic to an existing category
```js
// Find the category by its `id`, then push a new object into its `topics` array:
{
  id: "my-new-topic",
  title: "My New Topic",
  image: "https://placehold.co/1200x400/073042/3ddc84?text=My+Topic",
  imageAlt: "Description of image",
  caption: "Short caption shown under the image.",
  officialRef: "https://developer.android.com/...",
  content: `
    <h1>My New Topic</h1>
    <p class="subtitle">Brief description.</p>

    <h2>Section Title</h2>
    <p>Explanation text here.</p>

    <div class="code-wrapper">
      <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
      <pre>// your code here</pre>
    </div>

    <div class="ref-box">
      <strong>📚 Official References:</strong>
      <a href="https://..." target="_blank">Link Text</a>
    </div>
  `
}
```

### Add a new category
```js
// Append a new object to the top-level roadmapData array:
{
  id: "my-category",
  category: "20. My Category",
  icon: "🔧",
  description: "Short description shown on hover",
  topics: [ /* topic objects */ ]
}
```

### Important escaping rules inside template literals
- Kotlin backtick function names: `` fun \`test name\`() `` (escape the backticks)
- String interpolation inside code examples: `\${variable}` (escape the `$`)

---

## 📸 Images

| File | Used In | Source |
|---|---|---|
| `assets/Images/platform_architecture.png` | Platform Architecture topic | [developer.android.com/guide/platform](https://developer.android.com/guide/platform) |
| `assets/Images/Android_Boot_Squence.png` | Boot Sequence topic | Custom diagram |

All other topic header images use `https://placehold.co` placeholder banners.

---

## 🔗 Official References

- [Android Developers](https://developer.android.com)
- [AOSP Source](https://source.android.com)
- [Kotlin Docs](https://kotlinlang.org/docs)

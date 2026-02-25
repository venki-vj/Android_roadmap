// ==========================================
// ANDROID & AOSP ROADMAP DATA
// All content separated from functionality
// Official sources: developer.android.com, source.android.com
// ==========================================

const roadmapData = [

  // ============================================================
  // 01. INTRODUCTION
  // ============================================================
  {
    id: "introduction",
    category: "01. Introduction",
    icon: "🌟",
    description: "Why Android, ecosystem overview, career paths",
    topics: [
      {
        id: "why-android",
        title: "Why Learn Android?",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Why+Android+Development",
        imageAlt: "Android 15 hero banner showing modern Android devices",
        caption: "Android powers over 3 billion active devices worldwide — the largest mobile ecosystem on earth.",
        officialRef: "https://developer.android.com/about",
        content: `
          <h1>Why Choose Android Development?</h1>
          <p class="subtitle">Join the world's largest mobile ecosystem and build apps that impact billions.</p>

          <p>Android development is not just about writing code — it's about creating experiences for a diverse global audience. Whether you want to build a startup app, work at a top-tier tech company, or dive deep into AOSP system programming, Android offers unmatched depth.</p>

          <h2>1. Market Dominance</h2>
          <p>Android holds approximately <strong>72% of the global mobile OS market share</strong> (StatCounter 2025). Your potential reach as an Android developer is enormous — from flagship Pixels to budget devices in emerging markets.</p>
          <ul>
            <li><strong>3+ billion active devices</strong> globally</li>
            <li>Available on phones, tablets, TVs, watches, cars, XR headsets</li>
            <li>Deployed in IoT, industrial, and embedded systems via AOSP</li>
          </ul>

          <h2>2. Open Source at its Core (AOSP)</h2>
          <p>Android is built on the <strong>Android Open Source Project (AOSP)</strong> — hosted at <a href="https://source.android.com" target="_blank">source.android.com</a>. This means you can read, build, and modify the entire OS stack: from the Linux kernel through the HAL, framework, and apps.</p>

          <h2>3. Two Career Tracks</h2>
          <p>Android opens two major career paths:</p>
          <ul>
            <li><strong>App Developer:</strong> Build user-facing apps using Kotlin, Jetpack, Compose</li>
            <li><strong>System/Platform Engineer:</strong> Work inside AOSP — build custom ROMs, write HAL drivers, create system services, customize the framework for OEM devices</li>
          </ul>

          <h2>4. Modern Tooling (2025+)</h2>
          <ul>
            <li><strong>Kotlin-first</strong> with Coroutines & Flow for async</li>
            <li><strong>Jetpack Compose</strong> for declarative UI</li>
            <li><strong>Android Studio Meerkat</strong> with Gemini AI integration</li>
            <li><strong>Jetpack libraries</strong> covering navigation, DI, data, lifecycle</li>
          </ul>

          <h2>5. Salary & Job Market (2025)</h2>
          <table class="topic-table">
            <thead><tr><th>Role</th><th>Focus</th><th>Avg. Salary (US)</th></tr></thead>
            <tbody>
              <tr><td>Android App Developer (Mid)</td><td>Apps, Jetpack, Compose</td><td>$130K–$160K</td></tr>
              <tr><td>Android App Developer (Senior)</td><td>Architecture, perf, mentoring</td><td>$160K–$200K</td></tr>
              <tr><td>Platform/Framework Engineer</td><td>AOSP, HAL, system services</td><td>$180K–$240K+</td></tr>
              <tr><td>Embedded/Android BSP Engineer</td><td>Kernel, drivers, OEM</td><td>$150K–$200K</td></tr>
            </tbody>
          </table>

          <h2>6. Career Roadmap</h2>
          <p>A practical path from beginner to senior Android engineer:</p>
          <ol>
            <li><strong>Month 1–2:</strong> Kotlin basics, Android Studio, first simple app</li>
            <li><strong>Month 3–4:</strong> Jetpack Compose, ViewModel, Navigation</li>
            <li><strong>Month 5–6:</strong> Room, Retrofit, Coroutines, Flow, Hilt DI</li>
            <li><strong>Month 7–9:</strong> App architecture patterns, testing, performance</li>
            <li><strong>Month 10–12:</strong> Publish to Play Store, open-source contributions</li>
            <li><strong>Year 2+:</strong> AOSP deep-dive — boot sequence, HAL, Binder, kernel (this roadmap!)</li>
          </ol>

          <h2>7. Top Companies Hiring Android Engineers</h2>
          <ul>
            <li><strong>Google:</strong> AOSP itself, Pixel, Android platform, Play Store</li>
            <li><strong>Samsung, Qualcomm, MediaTek:</strong> Android BSP / platform engineers for OEM devices</li>
            <li><strong>Meta, Netflix, Spotify:</strong> Senior app engineers for flagship consumer apps</li>
            <li><strong>Startups:</strong> Full-stack mobile engineers building greenfield apps</li>
            <li><strong>Automotive (GM, Rivian, NIO):</strong> Android Automotive OS developers</li>
          </ul>

          <h2>8. Android Ecosystem Breadth</h2>
          <table class="topic-table">
            <thead><tr><th>Platform</th><th>Android Variant</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Smartphones &amp; Tablets</td><td>Standard Android</td><td>Core developer target</td></tr>
              <tr><td>Wear OS</td><td>Android-based</td><td>Smartwatch apps (Tiles, Complications)</td></tr>
              <tr><td>Android TV / Google TV</td><td>Lean-back UI</td><td>D-pad navigation, Leanback library</td></tr>
              <tr><td>Android Auto / Automotive</td><td>AAOS</td><td>In-car infotainment</td></tr>
              <tr><td>Chrome OS</td><td>Android app support</td><td>Large-screen adaptations</td></tr>
              <tr><td>XR (Android XR)</td><td>Spatial computing</td><td>VR/AR headsets (2024+)</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/about" target="_blank">Android Platform Overview</a> ·
            <a href="https://source.android.com/docs/setup/about" target="_blank">AOSP Overview</a>
          </div>
        `
      },
      {
        id: "android-versions",
        title: "Android Versions & API Levels",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Android+Versions+%26+API+Levels",
        imageAlt: "Android API level distribution chart",
        caption: "Each Android version introduces new APIs. Target the latest while supporting a reasonable minimum.",
        officialRef: "https://developer.android.com/tools/releases/platforms",
        content: `
          <h1>Android Versions & API Levels</h1>
          <p class="subtitle">Understanding the Android release cadence and API targeting strategy.</p>

          <p>Every Android release corresponds to an <strong>API Level</strong>. Knowing the differences helps you choose the right APIs, understand deprecated features, and set correct <code>minSdk</code> / <code>targetSdk</code> in your build files.</p>

          <h2>Recent Android Versions (2022–2025)</h2>
          <table class="topic-table">
            <thead><tr><th>Version</th><th>Name</th><th>API Level</th><th>Key Feature</th></tr></thead>
            <tbody>
              <tr><td>Android 16</td><td>Baklava</td><td>36</td><td>Predictive back, large screen improvements</td></tr>
              <tr><td>Android 15</td><td>Vanilla Ice Cream</td><td>35</td><td>Edge-to-edge by default, Health Connect</td></tr>
              <tr><td>Android 14</td><td>Upside Down Cake</td><td>34</td><td>User-selected photos, credential manager</td></tr>
              <tr><td>Android 13</td><td>Tiramisu</td><td>33</td><td>Per-app language, predictive back gesture</td></tr>
              <tr><td>Android 12</td><td>Snow Cone</td><td>31–32</td><td>Material You, splashscreen API</td></tr>
              <tr><td>Android 11</td><td>Red Velvet Cake</td><td>30</td><td>Scoped storage enforced, bubble notifications</td></tr>
            </tbody>
          </table>

          <h2>SDK Targeting in build.gradle.kts</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin DSL</span><button class="copy-btn">Copy Code</button></div>
            <pre>android {
    compileSdk = 36          // Latest stable API for compilation
    defaultConfig {
        minSdk = 26          // Drop devices below Android 8.0 (Oreo)
        targetSdk = 36       // Opt-in to latest behavior changes
    }
}</pre>
          </div>

          <h2>Critical Behavior Changes by Version</h2>
          <table class="topic-table">
            <thead><tr><th>Version</th><th>Breaking Change</th><th>Action Required</th></tr></thead>
            <tbody>
              <tr><td>Android 15 (API 35)</td><td>Edge-to-edge enforced for apps targeting API 35</td><td>Handle window insets explicitly</td></tr>
              <tr><td>Android 14 (API 34)</td><td>Minimum targetSdk for new apps must be 34</td><td>Update targetSdk, handle partial photo access</td></tr>
              <tr><td>Android 13 (API 33)</td><td>POST_NOTIFICATIONS permission required for all notifications</td><td>Request runtime permission before posting notifications</td></tr>
              <tr><td>Android 12 (API 31)</td><td>Exact alarms restricted; PendingIntent mutability required</td><td>Use FLAG_IMMUTABLE or FLAG_MUTABLE explicitly</td></tr>
              <tr><td>Android 11 (API 30)</td><td>Scoped Storage enforced; package visibility restrictions</td><td>Use MediaStore APIs; declare <queries> in manifest</td></tr>
              <tr><td>Android 8 (API 26)</td><td>Background service limits; notification channels mandatory</td><td>Use JobScheduler/WorkManager; create NotificationChannel</td></tr>
            </tbody>
          </table>

          <h2>Runtime Permission Handling</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Compose-friendly permission request using Accompanist
val permissionState = rememberPermissionState(Manifest.permission.CAMERA)

LaunchedEffect(Unit) {
    if (!permissionState.status.isGranted) {
        permissionState.launchPermissionRequest()
    }
}

when {
    permissionState.status.isGranted -> CameraScreen()
    permissionState.status.shouldShowRationale -> PermissionRationaleDialog()
    else -> PermissionDeniedScreen()
}</pre>
          </div>

          <h2>Handling Edge-to-Edge (Android 15+)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// In Activity.onCreate (required for targetSdk 35+)
enableEdgeToEdge()

// In Compose — apply window insets
Scaffold(
    modifier = Modifier.fillMaxSize()
) { innerPadding ->
    Content(
        modifier = Modifier.padding(innerPadding)  // handles nav bar + status bar
    )
}</pre>
          </div>

          <h2>Testing Across API Levels</h2>
          <ul>
            <li><strong>Emulators:</strong> Create AVDs for each major API level (26, 30, 33, 34, 35) in Device Manager</li>
            <li><strong>Firebase Test Lab:</strong> Run instrumented tests on real devices across API levels</li>
            <li><strong>Lint checks:</strong> Android Studio warns about APIs not available in your <code>minSdk</code></li>
            <li><strong>@RequiresApi annotation:</strong> Mark code that requires a higher API level and guard with <code>if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)</code></li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Safe API level gating
fun getExactAlarmPermission(context: Context): Boolean {
    return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        val alarmManager = context.getSystemService(AlarmManager::class.java)
        alarmManager.canScheduleExactAlarms()
    } else {
        true  // Always allowed before Android 12
    }
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/tools/releases/platforms" target="_blank">Android API Levels</a> ·
            <a href="https://developer.android.com/about/versions/15" target="_blank">Android 15 Features</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 02. KOTLIN FUNDAMENTALS
  // ============================================================
  {
    id: "kotlin-fundamentals",
    category: "02. Kotlin Fundamentals",
    icon: "🔤",
    description: "Kotlin syntax, null safety, coroutines, flows",
    topics: [
      {
        id: "kotlin-basics",
        title: "Kotlin Basics",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Kotlin+Fundamentals",
        imageAlt: "Kotlin programming language logo",
        caption: "Kotlin is the recommended, Kotlin-first language for Android development since Google I/O 2019.",
        officialRef: "https://kotlinlang.org/docs/getting-started.html",
        content: `
          <h1>Kotlin Fundamentals</h1>
          <p class="subtitle">Modern, expressive, and type-safe — the language of modern Android.</p>

          <h2>Variables & Types</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val appName: String = "My App"   // read-only (prefer this)
var userCount: Int = 42          // mutable

// Type inference — no need to write the type explicitly
val version = "5.0"
var score = 0

// String templates
println("App: $appName, Users: $userCount")
println("Score doubled: \${score * 2}")</pre>
          </div>

          <h2>Null Safety</h2>
          <p>Kotlin eliminates NullPointerExceptions at the compiler level by distinguishing nullable (<code>String?</code>) vs non-nullable (<code>String</code>) types.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>var name: String = "Alice"
// name = null  ← compile error!

var nullableName: String? = null  // OK

// Safe call operator
val len = nullableName?.length    // null if nullableName is null

// Elvis operator — default value
val length = nullableName?.length ?: 0

// Non-null assertion (throws NPE if null)
val forced = nullableName!!.length</pre>
          </div>

          <h2>Data Classes & Sealed Classes</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Data class — equals, hashCode, toString, copy auto-generated
data class User(val id: Int, val name: String, val email: String)

// Sealed class — exhaustive when expressions
sealed class Result&lt;out T&gt; {
    data class Success&lt;T&gt;(val data: T) : Result&lt;T&gt;()
    data class Error(val message: String) : Result&lt;Nothing&gt;()
    object Loading : Result&lt;Nothing&gt;()
}

fun handleResult(result: Result&lt;User&gt;) = when (result) {
    is Result.Success -> println("Got user: \${result.data.name}")
    is Result.Error   -> println("Error: \${result.message}")
    Result.Loading    -> println("Loading...")
}</pre>
          </div>

          <h2>Extension Functions</h2>
          <p>Add functions to existing classes without inheriting from them — one of Kotlin's most powerful features.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Extend String with a validation helper
fun String.isValidEmail(): Boolean {
    return android.util.Patterns.EMAIL_ADDRESS.matcher(this).matches()
}

// Extend View with a show/hide helper
fun View.show() { visibility = View.VISIBLE }
fun View.hide() { visibility = View.GONE }

// Usage
val email = "user@example.com"
if (!email.isValidEmail()) {
    Toast.makeText(context, "Invalid email", Toast.LENGTH_SHORT).show()
}</pre>
          </div>

          <h2>Lambdas & Higher-Order Functions</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Higher-order function: takes a function as parameter
fun &lt;T&gt; List&lt;T&gt;.filterAndMap(
    predicate: (T) -> Boolean,
    transform: (T) -> String
): List&lt;String&gt; = filter(predicate).map(transform)

val activeUserNames = users
    .filterAndMap(
        predicate = { it.isActive },
        transform = { it.name.uppercase() }
    )

// Trailing lambda syntax (idiomatic Kotlin)
val doubled = listOf(1, 2, 3).map { it * 2 }  // [2, 4, 6]</pre>
          </div>

          <h2>Object & Companion Object</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Singleton using object
object AppConfig {
    const val BASE_URL = "https://api.example.com/v1/"
    const val TIMEOUT_SECONDS = 30L
    var isDebugMode = false
}

// Companion object — Java static equivalent
class UserRepository private constructor(private val db: Database) {
    companion object {
        @Volatile private var INSTANCE: UserRepository? = null

        fun getInstance(db: Database): UserRepository {
            return INSTANCE ?: synchronized(this) {
                UserRepository(db).also { INSTANCE = it }
            }
        }

        const val TAG = "UserRepository"
    }
}

// Usage
val repo = UserRepository.getInstance(database)
Log.d(UserRepository.TAG, "Fetching users")</pre>
          </div>

          <h2>Kotlin Collections API</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val users = listOf(
    User(1, "Alice", active = true),
    User(2, "Bob", active = false),
    User(3, "Charlie", active = true)
)

// Chain operations — highly readable
val result = users
    .filter { it.active }           // only active users
    .sortedBy { it.name }           // alphabetical order
    .map { it.name.uppercase() }    // transform to uppercase names
    .joinToString(", ")             // "ALICE, CHARLIE"

// groupBy
val groupedByActive = users.groupBy { it.active }
// { true: [Alice, Charlie], false: [Bob] }

// fold — reduce to a single value
val totalId = users.fold(0) { acc, user -> acc + user.id }  // 6

// find vs first
val alice = users.find { it.name == "Alice" }      // null if not found
val first = users.first { it.active }              // throws if not found</pre>
          </div>

          <h2>Inline Functions & Reified Types</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// inline avoids lambda overhead (no object creation)
inline fun measureTime(block: () -> Unit): Long {
    val start = System.currentTimeMillis()
    block()
    return System.currentTimeMillis() - start
}

// reified: access T's type at runtime (normally erased)
inline fun &lt;reified T : Activity&gt; Context.startActivity() {
    startActivity(Intent(this, T::class.java))
}

// Usage (no Class&lt;T&gt; parameter needed!)
startActivity&lt;SettingsActivity&gt;()</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://kotlinlang.org/docs/basic-syntax.html" target="_blank">Kotlin Basic Syntax</a> ·
            <a href="https://developer.android.com/kotlin/learn" target="_blank">Kotlin for Android</a>
          </div>
        `
      },
      {
        id: "kotlin-coroutines",
        title: "Coroutines & Flow",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Kotlin+Coroutines+%26+Flow",
        imageAlt: "Kotlin coroutines conceptual diagram",
        caption: "Coroutines replace callbacks and RxJava for async operations in modern Android.",
        officialRef: "https://developer.android.com/kotlin/coroutines",
        content: `
          <h1>Kotlin Coroutines & Flow</h1>
          <p class="subtitle">Structured concurrency and reactive streams for modern Android.</p>

          <h2>Coroutine Basics</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Suspend function — can be paused without blocking a thread
suspend fun fetchUser(id: Int): User {
    return withContext(Dispatchers.IO) {
        apiService.getUser(id)  // runs on IO thread pool
    }
}

// In a ViewModel
class UserViewModel : ViewModel() {
    fun loadUser(id: Int) {
        viewModelScope.launch {               // auto-cancelled on clear
            val user = fetchUser(id)          // suspend here
            _uiState.value = UiState.Success(user)  // back on Main
        }
    }
}</pre>
          </div>

          <h2>Dispatchers</h2>
          <table class="topic-table">
            <thead><tr><th>Dispatcher</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td><code>Dispatchers.Main</code></td><td>UI updates, observe LiveData/Flow</td></tr>
              <tr><td><code>Dispatchers.IO</code></td><td>Network, database, file I/O</td></tr>
              <tr><td><code>Dispatchers.Default</code></td><td>CPU-intensive computation, sorting</td></tr>
            </tbody>
          </table>

          <h2>Kotlin Flow</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Cold stream — emits values lazily
fun userUpdates(id: Int): Flow&lt;User&gt; = flow {
    while (true) {
        emit(fetchUser(id))
        delay(5_000)  // poll every 5 seconds
    }
}

// StateFlow — hot stream, holds latest value
private val _uiState = MutableStateFlow&lt;UiState&gt;(UiState.Loading)
val uiState: StateFlow&lt;UiState&gt; = _uiState.asStateFlow()

// Collect in Compose
val state by viewModel.uiState.collectAsStateWithLifecycle()</pre>
          </div>

          <h2>Exception Handling in Coroutines</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Option 1: try/catch inside the coroutine
viewModelScope.launch {
    try {
        val user = apiService.fetchUser(id)
        _uiState.value = UiState.Success(user)
    } catch (e: IOException) {
        _uiState.value = UiState.Error("Network error: \${e.message}")
    } catch (e: HttpException) {
        _uiState.value = UiState.Error("Server error: \${e.code()}")
    }
}

// Option 2: CoroutineExceptionHandler (for uncaught exceptions)
val handler = CoroutineExceptionHandler { _, exception ->
    Log.e("VM", "Coroutine failed: \${exception.message}")
    _uiState.value = UiState.Error(exception.message ?: "Unknown error")
}
viewModelScope.launch(handler) {
    val users = apiService.fetchUsers()  // exception caught by handler
    _uiState.value = UiState.Success(users)
}

// Option 3: runCatching (functional style)
viewModelScope.launch {
    runCatching { apiService.fetchUser(id) }
        .onSuccess { _uiState.value = UiState.Success(it) }
        .onFailure { _uiState.value = UiState.Error(it.message) }
}</pre>
          </div>

          <h2>SharedFlow vs StateFlow</h2>
          <table class="topic-table">
            <thead><tr><th>Property</th><th>StateFlow</th><th>SharedFlow</th></tr></thead>
            <tbody>
              <tr><td>Has initial value</td><td>✅ Required</td><td>❌ No</td></tr>
              <tr><td>Replays to new collectors</td><td>✅ Latest 1 value</td><td>✅ Configurable (0..N)</td></tr>
              <tr><td>Use case</td><td>UI state (loading, data, error)</td><td>One-shot events (navigation, snackbar)</td></tr>
              <tr><td>Equality check</td><td>✅ Skips equal values</td><td>❌ Always emits</td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// SharedFlow for one-shot UI events (show snackbar, navigate)
private val _events = MutableSharedFlow&lt;UiEvent&gt;()
val events: SharedFlow&lt;UiEvent&gt; = _events.asSharedFlow()

fun onLoginSuccess() {
    viewModelScope.launch {
        _events.emit(UiEvent.NavigateToHome)  // one-shot
    }
}

// In Compose
LaunchedEffect(Unit) {
    viewModel.events.collect { event ->
        when (event) {
            is UiEvent.NavigateToHome -> navController.navigate("home")
            is UiEvent.ShowSnackbar -> snackbarHostState.showSnackbar(event.message)
        }
    }
}</pre>
          </div>

          <h2>Channels — Point-to-Point Communication</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Channel: like a pipe — producer sends, consumer receives
val channel = Channel&lt;Int&gt;(capacity = Channel.BUFFERED)

// Producer coroutine
val producer = viewModelScope.launch {
    for (i in 1..5) {
        channel.send(i)
        delay(100)
    }
    channel.close()
}

// Consumer coroutine
val consumer = viewModelScope.launch {
    for (value in channel) {
        Log.d("Channel", "Received: \$value")
    }
}</pre>
          </div>

          <h2>Testing Coroutines</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// build.gradle.kts
// testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3")

@OptIn(ExperimentalCoroutinesApi::class)
class ViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()  // replaces Main dispatcher

    @Test
    fun \`fetch users - success\`() = runTest {
        val viewModel = UsersViewModel(fakeRepository)

        // Advance time without actually waiting
        advanceUntilIdle()

        // Assert final state
        val state = viewModel.uiState.value
        assertThat(state).isInstanceOf(UiState.Success::class.java)
    }
}

// MainDispatcherRule.kt
class MainDispatcherRule(
    val dispatcher: TestCoroutineDispatcher = TestCoroutineDispatcher()
) : TestWatcher() {
    override fun starting(description: Description) {
        Dispatchers.setMain(dispatcher)
    }
    override fun finished(description: Description) {
        Dispatchers.resetMain()
    }
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/kotlin/coroutines" target="_blank">Coroutines Guide</a> ·
            <a href="https://developer.android.com/kotlin/flow" target="_blank">Kotlin Flow</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 03. ANDROID STUDIO & TOOLING
  // ============================================================
  {
    id: "android-studio",
    category: "03. Android Studio & Tooling",
    icon: "🛠️",
    description: "IDE setup, project structure, Gradle, ADB",
    topics: [
      {
        id: "studio-setup",
        title: "Android Studio Setup & Project Structure",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Android+Studio+%26+Tooling",
        imageAlt: "Android Studio IDE screenshot",
        caption: "Android Studio is the official IDE — based on IntelliJ IDEA, with Gemini AI integration.",
        officialRef: "https://developer.android.com/studio",
        content: `
          <h1>Android Studio & Project Structure</h1>
          <p class="subtitle">Your command center for building Android apps.</p>

          <h2>Key IDE Panels</h2>
          <ul>
            <li><strong>Project Window (Android view):</strong> Simplified hierarchy showing manifests, kotlin files, res folders</li>
            <li><strong>Editor:</strong> Smart code completion, refactoring, Compose preview</li>
            <li><strong>Logcat:</strong> System log with filtering, crash stack traces</li>
            <li><strong>Profiler:</strong> CPU, memory, network, energy profiling in real-time</li>
            <li><strong>Device Manager:</strong> Create and manage AVDs (emulators)</li>
          </ul>

          <h2>Project Folder Structure</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Directory</span><button class="copy-btn">Copy Code</button></div>
            <pre>MyApp/
├── app/
│   ├── src/main/
│   │   ├── AndroidManifest.xml     ← App ID, permissions, components
│   │   ├── java/com.example.myapp/
│   │   │   ├── MainActivity.kt
│   │   │   ├── ui/
│   │   │   ├── data/
│   │   │   └── viewmodel/
│   │   └── res/
│   │       ├── layout/             ← XML layouts (Views)
│   │       ├── drawable/           ← Images, vectors
│   │       ├── values/
│   │       │   ├── strings.xml     ← All text (for localization)
│   │       │   ├── colors.xml
│   │       │   └── themes.xml
│   │       └── mipmap/             ← App icons
│   └── build.gradle.kts            ← App dependencies
└── build.gradle.kts                ← Project-level config</pre>
          </div>

          <h2>Useful ADB Commands</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># List connected devices
adb devices

# Install APK
adb install app-debug.apk

# Launch activity
adb shell am start -n com.example/.MainActivity

# Pull a file from device
adb pull /sdcard/Download/file.txt .

# View real-time logs
adb logcat -v time *:E

# Capture screenshot
adb exec-out screencap -p > screen.png

# Get device info
adb shell getprop ro.build.version.release  # Android version
adb shell getprop ro.product.model          # Device model</pre>
          </div>

          <h2>Gradle Build System</h2>
          <p>Android uses Gradle as its build system. Every Android project has two <code>build.gradle.kts</code> files: project-level (classpath plugins) and app-level (dependencies).</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin DSL — app/build.gradle.kts</span><button class="copy-btn">Copy Code</button></div>
            <pre>plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.hilt.android)
    alias(libs.plugins.ksp)
}

android {
    namespace = "com.example.myapp"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.example.myapp"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "1.0.0"
    }

    buildFeatures {
        compose = true
        buildConfig = true  // enables BuildConfig.DEBUG etc.
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.11"
    }
}

dependencies {
    implementation(libs.bundles.compose)    // uses version catalog (libs.versions.toml)
    implementation(libs.hilt.android)
    ksp(libs.hilt.compiler)
    implementation(libs.room.runtime)
    ksp(libs.room.compiler)
    implementation(libs.retrofit.core)
}</pre>
          </div>

          <h2>Build Variants & Flavors</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin DSL</span><button class="copy-btn">Copy Code</button></div>
            <pre>android {
    buildTypes {
        debug {
            isDebuggable = true
            applicationIdSuffix = ".debug"
            buildConfigField("String", "API_URL", '"https://api.staging.example.com/"')
        }
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            buildConfigField("String", "API_URL", '"https://api.example.com/"')
        }
    }

    // Product flavors (e.g. free vs paid)
    flavorDimensions += "tier"
    productFlavors {
        create("free") {
            dimension = "tier"
            applicationIdSuffix = ".free"
        }
        create("paid") {
            dimension = "tier"
        }
    }
    // Generates variants: freeDebug, freeRelease, paidDebug, paidRelease
}</pre>
          </div>

          <h2>R8 / ProGuard (Code Shrinking)</h2>
          <p>R8 shrinks, obfuscates, and optimizes release builds. Essential for reducing APK size.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">ProGuard Rules</span><button class="copy-btn">Copy Code</button></div>
            <pre># Keep all data classes used by Gson/Moshi (reflection-based serialization)
-keep class com.example.myapp.data.model.** { *; }

# Keep custom exceptions
-keep public class * extends java.lang.Exception

# Keep Parcelable implementations
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Retrofit: keep interface methods
-keepattributes Signature
-keepattributes Exceptions
-keepclasseswithmembers interface * {
    @retrofit2.http.* &lt;methods&gt;;
}</pre>
          </div>

          <h2>Essential Keyboard Shortcuts</h2>
          <table class="topic-table">
            <thead><tr><th>Action</th><th>Windows/Linux</th><th>macOS</th></tr></thead>
            <tbody>
              <tr><td>Search everywhere</td><td>Shift+Shift</td><td>Shift+Shift</td></tr>
              <tr><td>Go to class</td><td>Ctrl+N</td><td>Cmd+O</td></tr>
              <tr><td>Refactor / Rename</td><td>Shift+F6</td><td>Shift+F6</td></tr>
              <tr><td>Extract function</td><td>Ctrl+Alt+M</td><td>Cmd+Option+M</td></tr>
              <tr><td>Find usages</td><td>Alt+F7</td><td>Option+F7</td></tr>
              <tr><td>Auto-format file</td><td>Ctrl+Alt+L</td><td>Cmd+Option+L</td></tr>
              <tr><td>Build project</td><td>Ctrl+F9</td><td>Cmd+F9</td></tr>
              <tr><td>Run app</td><td>Shift+F10</td><td>Ctrl+R</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/studio/intro" target="_blank">Android Studio Guide</a> ·
            <a href="https://developer.android.com/tools/adb" target="_blank">ADB Reference</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 04. MODERN UI — JETPACK COMPOSE
  // ============================================================
  {
    id: "jetpack-compose",
    category: "04. Modern UI — Jetpack Compose",
    icon: "🎨",
    description: "Composable functions, state, theming, navigation",
    topics: [
      {
        id: "compose-basics",
        title: "Jetpack Compose Basics",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Jetpack+Compose+UI",
        imageAlt: "Jetpack Compose declarative UI toolkit illustration",
        caption: "Compose replaces XML layouts with Kotlin functions — less code, faster iteration.",
        officialRef: "https://developer.android.com/compose",
        content: `
          <h1>Jetpack Compose</h1>
          <p class="subtitle">Android's modern declarative UI toolkit — build UIs by describing what, not how.</p>

          <h2>Composable Functions</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@Composable
fun UserCard(user: User) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        elevation = CardDefaults.cardElevation(4.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            AsyncImage(
                model = user.avatarUrl,
                contentDescription = "Avatar of \${user.name}",
                modifier = Modifier
                    .size(56.dp)
                    .clip(CircleShape)
            )
            Spacer(Modifier.width(16.dp))
            Column {
                Text(user.name, style = MaterialTheme.typography.titleMedium)
                Text(user.email, style = MaterialTheme.typography.bodySmall,
                     color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}</pre>
          </div>

          <h2>State & Recomposition</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@Composable
fun Counter() {
    var count by remember { mutableIntStateOf(0) }

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text("Count: $count", style = MaterialTheme.typography.headlineMedium)
        Spacer(Modifier.height(8.dp))
        Button(onClick = { count++ }) { Text("Increment") }
    }
}</pre>
          </div>

          <h2>LazyColumn (RecyclerView equivalent)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@Composable
fun UserList(users: List&lt;User&gt;) {
    LazyColumn(
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        items(users, key = { it.id }) { user ->
            UserCard(user)
        }
    }
}</pre>
          </div>

          <h2>Navigation Compose</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// implementation("androidx.navigation:navigation-compose:2.7.7")

@Composable
fun AppNavigation() {
    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = "user_list"
    ) {
        composable("user_list") {
            UserListScreen(
                onUserClick = { userId ->
                    navController.navigate("user_detail/\$userId")
                }
            )
        }
        composable(
            route = "user_detail/{userId}",
            arguments = listOf(navArgument("userId") { type = NavType.IntType })
        ) { backStackEntry ->
            val userId = backStackEntry.arguments?.getInt("userId") ?: return@composable
            UserDetailScreen(userId = userId, onBack = { navController.popBackStack() })
        }
    }
}</pre>
          </div>

          <h2>Material3 Theming</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Define your color scheme
val LightColorScheme = lightColorScheme(
    primary = Color(0xFF3DDC84),          // Android green
    onPrimary = Color(0xFF000000),
    secondary = Color(0xFF073042),         // Android dark blue
    surface = Color(0xFFFFFBFE),
    background = Color(0xFFFFFBFE)
)

val DarkColorScheme = darkColorScheme(
    primary = Color(0xFF3DDC84),
    secondary = Color(0xFF4A90D9),
    surface = Color(0xFF1C1B1F),
    background = Color(0xFF1C1B1F)
)

@Composable
fun MyAppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,    // define custom type scale
        content = content
    )
}</pre>
          </div>

          <h2>Side Effects</h2>
          <p>Side effects in Compose run controlled actions outside the Composition.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@Composable
fun SearchScreen(query: String) {
    // LaunchedEffect: runs suspend code when key changes
    LaunchedEffect(query) {
        delay(300)  // debounce
        viewModel.search(query)
    }

    // DisposableEffect: cleanup when composition leaves
    val lifecycleOwner = LocalLifecycleOwner.current
    DisposableEffect(lifecycleOwner) {
        val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_RESUME) viewModel.refresh()
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose { lifecycleOwner.lifecycle.removeObserver(observer) }
    }

    // SideEffect: runs after every successful recomposition
    SideEffect {
        // update non-Compose system UI (e.g. analytics)
        analytics.logScreenView("search")
    }
}</pre>
          </div>

          <h2>Animations</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@Composable
fun ExpandableCard(title: String, body: String) {
    var expanded by remember { mutableStateOf(false) }

    // Animate height change
    val cardHeight by animateDpAsState(
        targetValue = if (expanded) 200.dp else 60.dp,
        animationSpec = spring(dampingRatio = Spring.DampingRatioMediumBouncy),
        label = "cardHeight"
    )

    // Animate color change
    val backgroundColor by animateColorAsState(
        targetValue = if (expanded)
            MaterialTheme.colorScheme.primaryContainer
        else
            MaterialTheme.colorScheme.surface,
        label = "bgColor"
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .height(cardHeight)
            .clickable { expanded = !expanded },
        colors = CardDefaults.cardColors(containerColor = backgroundColor)
    ) {
        Text(title, modifier = Modifier.padding(16.dp))
        AnimatedVisibility(visible = expanded) {
            Text(body, modifier = Modifier.padding(horizontal = 16.dp))
        }
    }
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/compose/tutorial" target="_blank">Compose Tutorial</a> ·
            <a href="https://developer.android.com/jetpack/compose/documentation" target="_blank">Compose Docs</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 05. APP ARCHITECTURE
  // ============================================================
  {
    id: "app-architecture",
    category: "05. App Architecture",
    icon: "🏛️",
    description: "MVVM, Clean Architecture, Repository pattern, Hilt",
    topics: [
      {
        id: "mvvm-arch",
        title: "MVVM + Clean Architecture",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=MVVM+Architecture",
        imageAlt: "Modern Android Architecture diagram with UI, Domain, and Data layers",
        caption: "Modern Android Architecture separates concerns into UI, Domain, and Data layers.",
        officialRef: "https://developer.android.com/topic/architecture",
        content: `
          <h1>Modern Android Architecture — MVVM + Clean</h1>
          <p class="subtitle">The officially recommended architecture for scalable, testable Android apps.</p>

          <h2>Three Layers</h2>
          <ul>
            <li><strong>UI Layer:</strong> Activities, Fragments, Composables + ViewModels. Observes state.</li>
            <li><strong>Domain Layer (optional):</strong> Use-cases / interactors. Pure Kotlin, no Android deps.</li>
            <li><strong>Data Layer:</strong> Repositories, data sources (Room, Retrofit, DataStore).</li>
          </ul>

          <h2>ViewModel with StateFlow</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// UI State model
data class UsersUiState(
    val users: List&lt;User&gt; = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null
)

@HiltViewModel
class UsersViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(UsersUiState(isLoading = true))
    val uiState: StateFlow&lt;UsersUiState&gt; = _uiState.asStateFlow()

    init { loadUsers() }

    private fun loadUsers() {
        viewModelScope.launch {
            userRepository.getUsers()
                .catch { e -> _uiState.update { it.copy(error = e.message, isLoading = false) } }
                .collect { users -> _uiState.update { it.copy(users = users, isLoading = false) } }
        }
    }
}</pre>
          </div>

          <h2>Repository Pattern</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>class UserRepository @Inject constructor(
    private val userDao: UserDao,          // local (Room)
    private val apiService: ApiService     // remote (Retrofit)
) {
    fun getUsers(): Flow&lt;List&lt;User&gt;&gt; = flow {
        emit(userDao.getAllUsers())          // emit cached data first
        val remote = apiService.fetchUsers()
        userDao.insertAll(remote)           // update cache
        emit(userDao.getAllUsers())          // emit fresh data
    }.flowOn(Dispatchers.IO)
}</pre>
          </div>

          <h2>Room Database</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Entity — maps to a database table
@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey val id: Int,
    val name: String,
    val email: String,
    val createdAt: Long = System.currentTimeMillis()
)

// DAO — Data Access Object
@Dao
interface UserDao {
    @Query("SELECT * FROM users ORDER BY name ASC")
    fun getAllUsers(): Flow&lt;List&lt;UserEntity&gt;&gt;  // reactive!

    @Query("SELECT * FROM users WHERE id = :id")
    suspend fun getUserById(id: Int): UserEntity?

    @Upsert
    suspend fun upsertUser(user: UserEntity)

    @Delete
    suspend fun deleteUser(user: UserEntity)
}

// Database
@Database(entities = [UserEntity::class], version = 1, exportSchema = true)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao

    companion object {
        fun create(context: Context) = Room.databaseBuilder(
            context, AppDatabase::class.java, "app.db"
        ).build()
    }
}</pre>
          </div>

          <h2>Retrofit + OkHttp (Network Layer)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// API interface
interface UserApiService {
    @GET("users")
    suspend fun getUsers(): List&lt;UserDto&gt;

    @GET("users/{id}")
    suspend fun getUserById(@Path("id") id: Int): UserDto

    @POST("users")
    suspend fun createUser(@Body user: CreateUserRequest): UserDto
}

// Retrofit setup (in a Hilt module)
@Module @InstallIn(SingletonComponent::class)
object NetworkModule {
    @Provides @Singleton
    fun provideOkHttp(): OkHttpClient = OkHttpClient.Builder()
        .addInterceptor(HttpLoggingInterceptor().apply {
            level = if (BuildConfig.DEBUG) BODY else NONE
        })
        .connectTimeout(30, TimeUnit.SECONDS)
        .build()

    @Provides @Singleton
    fun provideRetrofit(client: OkHttpClient): Retrofit = Retrofit.Builder()
        .baseUrl(BuildConfig.API_URL)
        .client(client)
        .addConverterFactory(MoshiConverterFactory.create())
        .build()

    @Provides @Singleton
    fun provideUserApi(retrofit: Retrofit): UserApiService =
        retrofit.create(UserApiService::class.java)
}</pre>
          </div>

          <h2>Hilt Dependency Injection</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// 1. Annotate the Application class
@HiltAndroidApp
class MyApp : Application()

// 2. Inject in Activity/Fragment
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    // ViewModel injected by Hilt automatically
}

// 3. Inject Repository into ViewModel
@HiltViewModel
class UsersViewModel @Inject constructor(
    private val userRepository: UserRepository
) : ViewModel()

// 4. Bind interfaces to implementations
@Module @InstallIn(SingletonComponent::class)
abstract class RepositoryModule {
    @Binds @Singleton
    abstract fun bindUserRepository(
        impl: UserRepositoryImpl
    ): UserRepository
}</pre>
          </div>

          <h2>Clean Architecture: Use Cases</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Domain layer use case (pure Kotlin, no Android deps)
class GetActiveUsersUseCase @Inject constructor(
    private val userRepository: UserRepository
) {
    operator fun invoke(): Flow&lt;List&lt;User&gt;&gt; =
        userRepository.getUsers()
            .map { users -> users.filter { it.isActive } }
            .map { users -> users.sortedBy { it.name } }
}

// ViewModel uses the use case
@HiltViewModel
class UsersViewModel @Inject constructor(
    private val getActiveUsers: GetActiveUsersUseCase
) : ViewModel() {
    val uiState = getActiveUsers()
        .map { UiState.Success(it) }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), UiState.Loading)
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/topic/architecture" target="_blank">Architecture Guide</a> ·
            <a href="https://developer.android.com/training/dependency-injection/hilt-android" target="_blank">Hilt DI</a>
          </div>
        `
      },
      {
        id: "platform-architecture",
        title: "Android Platform Architecture",
        image: "assets/Images/platform_architecture.png",
        imageAlt: "Android software stack showing Linux Kernel, HAL, Android Runtime, Native C/C++ Libraries, Java API Framework, and System Apps layers",
        caption: "The Android software stack — six layers from bare Linux kernel to System Apps.",
        officialRef: "https://developer.android.com/guide/platform",
        content: `
          <h1>Android Platform Architecture</h1>
          <p class="subtitle">Android is an open-source, Linux-based software stack designed for a wide array of devices and form factors. Understanding its layered architecture is essential for both app developers and AOSP engineers.</p>

          <h2>The Six-Layer Stack</h2>
          <p>The Android platform is built as a vertical stack of six well-defined layers. Each layer depends only on the layer below it, providing a clean separation of concerns:</p>
          <table class="topic-table">
            <thead><tr><th>#</th><th>Layer</th><th>Key Components</th><th>Who Interacts</th></tr></thead>
            <tbody>
              <tr><td>6 (top)</td><td>System Apps</td><td>Dialer, SMS, Browser, Contacts, Settings</td><td>End users</td></tr>
              <tr><td>5</td><td>Java API Framework</td><td>Activity Manager, Content Providers, View System, Notification Manager</td><td>App developers</td></tr>
              <tr><td>4</td><td>Native C/C++ Libraries + Android Runtime (ART)</td><td>libc, OpenGL ES, WebKit, Media, ART/Dalvik</td><td>NDK developers, framework internals</td></tr>
              <tr><td>3</td><td>Hardware Abstraction Layer (HAL)</td><td>Camera HAL, Audio HAL, Bluetooth HAL, Sensors HAL</td><td>OEM/device makers</td></tr>
              <tr><td>2</td><td>Linux Kernel</td><td>Drivers, Binder IPC, Memory mgmt, Power mgmt, Networking</td><td>Kernel/BSP engineers</td></tr>
              <tr><td>1 (base)</td><td>Hardware</td><td>SoC, GPU, Camera, Sensors, Radio</td><td>Hardware manufacturers</td></tr>
            </tbody>
          </table>

          <h2>Layer 1 — Linux Kernel</h2>
          <p>The Linux kernel is the foundation of the entire Android platform. It provides:</p>
          <ul>
            <li><strong>Threading &amp; process isolation:</strong> Each app runs in its own Linux process with a unique UID</li>
            <li><strong>Memory management:</strong> Virtual memory, OOM killer, Low Memory Killer (LMK)</li>
            <li><strong>Security:</strong> DAC (discretionary access control) + Android-enhanced MAC via SELinux</li>
            <li><strong>Device drivers:</strong> Display, camera, audio, USB, Wi-Fi, Bluetooth — all implemented as kernel modules</li>
            <li><strong>Binder IPC driver:</strong> Android's primary inter-process communication mechanism lives in the kernel (<code>/dev/binder</code>)</li>
            <li><strong>Power management:</strong> wakelocks, suspend/resume, cpufreq governors</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Inspect running kernel version on a device
adb shell uname -r
# e.g. 5.15.104-android14-4-g...

# Check Binder driver is loaded
adb shell ls -la /dev/binder /dev/hwbinder /dev/vndbinder

# View kernel config options (only on eng/userdebug builds)
adb shell zcat /proc/config.gz | grep CONFIG_ANDROID_BINDER</pre>
          </div>

          <h2>Layer 2 — Hardware Abstraction Layer (HAL)</h2>
          <p>The HAL provides standard interfaces that expose hardware capabilities to the higher-level Java API framework, insulating Google and app developers from hardware-specific implementations made by OEMs.</p>
          <ul>
            <li>Each hardware subsystem has its own HAL module: <code>camera.default.so</code>, <code>audio.primary.default.so</code>, etc.</li>
            <li>HAL interfaces are defined in <strong>HIDL</strong> (HAL Interface Definition Language) or the newer <strong>AIDL for HAL</strong> (Android 11+)</li>
            <li>HAL modules run in dedicated HAL server processes (e.g., <code>android.hardware.camera.provider@2.7-service</code>)</li>
            <li>The framework communicates with HALs through Binder IPC over <code>/dev/hwbinder</code></li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># List all running HAL services
adb shell lshal

# Check a specific HAL interface
adb shell lshal | grep camera

# Example AIDL HAL interface (Android 12+)
# hardware/interfaces/camera/provider/aidl/android/hardware/camera/provider/ICameraProvider.aidl</pre>
          </div>

          <h2>Layer 3 — Android Runtime (ART)</h2>
          <p>Since Android 5.0 (API 21), every app runs in its own ART instance. ART replaced the older Dalvik VM and brought major performance improvements:</p>
          <table class="topic-table">
            <thead><tr><th>Feature</th><th>Dalvik (pre-5.0)</th><th>ART (5.0+)</th></tr></thead>
            <tbody>
              <tr><td>Compilation</td><td>JIT only (compile at runtime)</td><td>AOT + JIT + Profile-Guided (PGO)</td></tr>
              <tr><td>Startup speed</td><td>Faster first install</td><td>Faster execution after profile warm-up</td></tr>
              <tr><td>GC pauses</td><td>Frequent stop-the-world</td><td>Concurrent GC, shorter pauses</td></tr>
              <tr><td>Bytecode format</td><td>.dex (Dalvik Executable)</td><td>.dex → compiled to native via dex2oat</td></tr>
              <tr><td>Debugging</td><td>Limited</td><td>Sampling profiler, watchpoints, detailed crash reports</td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check ART compilation filter for an installed app
adb shell cmd package compile -m speed-profile -f com.example.myapp

# View ART profile data
adb shell profman --dump-classes-and-methods \\
    --profile-file=/data/misc/profiles/cur/0/com.example.myapp/primary.prof \\
    --apk=/data/app/com.example.myapp/base.apk

# ART GC log tags (enable verbose GC logging)
adb shell setprop dalvik.vm.gctype SS</pre>
          </div>

          <h2>Layer 3 — Native C/C++ Libraries</h2>
          <p>Many core Android system components are built from native code. These libraries underpin both the framework and ART itself:</p>
          <table class="topic-table">
            <thead><tr><th>Library</th><th>Purpose</th><th>Exposed via</th></tr></thead>
            <tbody>
              <tr><td><code>libc</code> (Bionic)</td><td>Android's custom C library — lighter than glibc</td><td>NDK</td></tr>
              <tr><td><code>libOpenSLES</code></td><td>Low-latency audio (OpenSL ES standard)</td><td>NDK / AudioTrack</td></tr>
              <tr><td><code>libOpenMAXAL</code></td><td>Media playback/recording (OpenMAX AL)</td><td>NDK</td></tr>
              <tr><td><code>libart.so</code></td><td>ART runtime engine</td><td>Internal framework</td></tr>
              <tr><td><code>libwebkit</code> / Chromium</td><td>WebView rendering engine</td><td><code>android.webkit.WebView</code></td></tr>
              <tr><td><code>libsqlite.so</code></td><td>SQLite embedded database</td><td>Room / <code>android.database.sqlite</code></td></tr>
              <tr><td>OpenGL ES / Vulkan</td><td>2D/3D graphics rendering</td><td>NDK <code>EGL</code> / Java <code>android.opengl</code></td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C++</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Access native libraries via the Android NDK
// CMakeLists.txt
cmake_minimum_required(VERSION 3.22.1)
project("myapp")

add_library(myapp SHARED native-lib.cpp)

# Link Android-provided native libraries
target_link_libraries(myapp
    android       # Android-specific APIs (asset manager, native window, etc.)
    log           # __android_log_print → Logcat
    EGL           # EGL graphics surface interface
    GLESv3        # OpenGL ES 3.x
    OpenSLES      # Low-latency audio
)</pre>
          </div>

          <h2>Layer 4 — Java API Framework</h2>
          <p>The entire Android OS feature set is available to developers through Java/Kotlin APIs. These APIs are built on top of ART and the native libraries, and form the building blocks of every Android app:</p>
          <ul>
            <li><strong>Activity Manager</strong> — manages the app lifecycle, the back stack, and task switching (<code>ActivityManagerService</code> in the system server)</li>
            <li><strong>Window Manager</strong> — controls window positioning, layers, and surface allocation (<code>WindowManagerService</code>)</li>
            <li><strong>Content Providers</strong> — structured data sharing across app sandboxes (Contacts, MediaStore, etc.)</li>
            <li><strong>View System</strong> — the full UI toolkit: layouts, widgets, RecyclerView, custom views</li>
            <li><strong>Notification Manager</strong> — system-level notification display and management</li>
            <li><strong>Package Manager</strong> — app install/uninstall, permission granting, intent resolution</li>
            <li><strong>Telephony Manager</strong> — access to cellular network state and call management</li>
            <li><strong>Location Manager</strong> — GPS, network, and fused location providers</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Every system service is retrieved the same way:
// Context.getSystemService(Class<T>) → returns the manager

val activityManager = getSystemService(ActivityManager::class.java)
val windowManager   = getSystemService(WindowManager::class.java)
val notifManager    = getSystemService(NotificationManager::class.java)
val locationManager = getSystemService(LocationManager::class.java)
val packageManager  = packageManager  // built into Context

// The framework APIs are identical to what system apps use —
// developers have full access to the same APIs.

// Inspect all system services available on a device:
// adb shell service list</pre>
          </div>

          <h2>Layer 4 — How Framework Talks to the Kernel (end-to-end call)</h2>
          <p>Every framework API call that touches hardware traverses the full stack. Here's the path for a camera open:</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Text</span><button class="copy-btn">Copy Code</button></div>
            <pre>App (Kotlin/Java)
    └─ android.hardware.camera2.CameraManager.openCamera()       ← Java API Framework
         └─ CameraService (system_server, /dev/binder)           ← Binder IPC
              └─ CameraProviderManager
                   └─ android.hardware.camera.provider AIDL HAL  ← HAL layer (hwbinder)
                        └─ OEM camera HAL implementation (.so)   ← Native C/C++ library
                             └─ V4L2 kernel driver               ← Linux kernel
                                  └─ Physical camera sensor      ← Hardware</pre>
          </div>

          <h2>Layer 5 — System Apps</h2>
          <p>Android ships with a set of pre-installed core apps: Phone/Dialer, SMS/Messages, Browser, Contacts, Calendar, Camera, and Settings. Key characteristics:</p>
          <ul>
            <li><strong>No special API privilege</strong> — system apps use the same Java API framework as third-party apps</li>
            <li><strong>Platform-signed</strong> — signed with the platform key grants access to <code>signatureOrSystem</code> permissions</li>
            <li><strong>Replaceable</strong> — users can set a third-party app as the default browser, SMS app, or keyboard (via intent resolution)</li>
            <li><strong>Inter-app communication</strong> — your app can fire an implicit Intent to re-use system app functionality (e.g., share sheet, dial, send SMS) without reimplementing it</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Re-use system apps via Intents — don't reinvent the wheel

// Send SMS via system SMS app
val smsIntent = Intent(Intent.ACTION_SENDTO, Uri.parse("smsto:+1234567890"))
smsIntent.putExtra("sms_body", "Hello from my app!")
startActivity(smsIntent)

// Open URL in system browser
val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://developer.android.com"))
startActivity(browserIntent)

// Dial a number (opens dialer, user still presses call)
val dialIntent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:+1234567890"))
startActivity(dialIntent)

// Share text via system share sheet
val shareIntent = Intent.createChooser(
    Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_TEXT, "Check out this cool app!")
    }, "Share via"
)
startActivity(shareIntent)</pre>
          </div>

          <h2>Why This Architecture Matters</h2>
          <table class="topic-table">
            <thead><tr><th>Design Choice</th><th>Benefit</th></tr></thead>
            <tbody>
              <tr><td>Linux kernel base</td><td>Mature driver ecosystem, proven security model, hardware portability across hundreds of SoCs</td></tr>
              <tr><td>HAL abstraction</td><td>OEMs can swap hardware without touching framework code; Google can update the OS without requiring OEM changes (Project Treble)</td></tr>
              <tr><td>App sandboxing (UID-per-app)</td><td>Apps cannot read each other's data by default; compromised app cannot escape its sandbox</td></tr>
              <tr><td>Binder IPC</td><td>Safe, efficient cross-process calls with automatic thread management and identity tracking</td></tr>
              <tr><td>Java/Kotlin API layer</td><td>Memory-safe, productivity-friendly language with full access to hardware capabilities</td></tr>
              <tr><td>Project Treble (HAL versioning)</td><td>System image and vendor image can be updated independently — faster OTA updates</td></tr>
            </tbody>
          </table>

          <h2>Project Treble — Modular Architecture</h2>
          <p>Introduced in Android 8.0 (Oreo), Project Treble separates the vendor implementation (HAL + kernel drivers) from the Android OS framework using a Vendor Interface (VINTF):</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Text</span><button class="copy-btn">Copy Code</button></div>
            <pre>BEFORE Treble (Android 7 and earlier):
┌─────────────────────────────────────────┐
│  Android OS Framework + Vendor code     │  ← tightly coupled
└─────────────────────────────────────────┘

AFTER Treble (Android 8+):
┌─────────────────────────────────────────┐
│  Android OS Framework (system partition)│  ← Google updates independently
├─────────────────────────────────────────┤
│  Vendor Interface (VINTF) — stable API  │  ← ABI-stable boundary
├─────────────────────────────────────────┤
│  Vendor HAL implementations             │  ← OEM maintains separately
│  (vendor partition)                     │
└─────────────────────────────────────────┘

Result: OEMs only need to update vendor partition once;
        Google can ship new Android OS versions faster.</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/guide/platform" target="_blank">Platform Architecture</a> ·
            <a href="https://source.android.com/docs/core/architecture" target="_blank">AOSP Architecture</a> ·
            <a href="https://source.android.com/docs/core/architecture/treble" target="_blank">Project Treble</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 06. ANDROID INTERNALS — BOOT SEQUENCE
  // ============================================================
  {
    id: "android-boot-sequence",
    category: "06. Android Boot Sequence",
    icon: "🔌",
    description: "From power-on to home screen — complete Linux/Android boot chain",
    topics: [
      {
        id: "boot-overview",
        title: "Boot Sequence Overview",
        image: "assets\\Images\\Android_Boot_Squence.png",
        imageAlt: "AOSP software stack diagram showing Linux kernel, HAL, Android Runtime, and Framework layers",
        caption: "Android's boot process traverses the full software stack from firmware to the Launcher.",
        officialRef: "https://source.android.com/docs/core/architecture",
        content: `
          <h1>Android Boot Sequence — End to End</h1>
          <p class="subtitle">From power button press to a usable Home Screen — a deep dive into every stage.</p>

          <h2>Stage 1: Power On → Bootloader</h2>
          <ul>
            <li><strong>ROM/BootROM:</strong> First code executed from chip's read-only memory; validates and loads the bootloader from internal storage.</li>
            <li><strong>Primary Bootloader (PBL):</strong> Minimal firmware to initialize hardware (DRAM, clocks).</li>
            <li><strong>Secondary Bootloader (SBL) / LK (Little Kernel):</strong> Platform-specific (Qualcomm XBL, MediaTek Preloader, etc.). Selects boot mode: Normal, Recovery, Fastboot.</li>
            <li><strong>Fastboot Mode:</strong> USB flashing protocol. Allows <code>fastboot flash boot boot.img</code> etc.</li>
          </ul>

          <h2>Stage 2: Linux Kernel Initialization</h2>
          <ul>
            <li>Bootloader loads <code>boot.img</code> (contains <code>kernel</code> + <code>ramdisk</code>) into RAM.</li>
            <li>Kernel decompresses (zImage / Image.lz4), initializes memory management, CPU scheduler, interrupt controllers.</li>
            <li>Mounts the <strong>rootfs</strong> from the ramdisk (initramfs).</li>
            <li>Starts the very first user-space process: <strong><code>init</code></strong> (PID 1).</li>
          </ul>

          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — dmesg excerpt</span><button class="copy-btn">Copy Code</button></div>
            <pre># View kernel boot messages on device
adb shell dmesg | head -100

# Key lines to look for:
# [    0.000000] Booting Linux on physical CPU 0x0...
# [    0.000000] Memory: 3801MB (usable)
# [    1.234567] init: Starting version 2.86.9</pre>
          </div>

          <h2>Stage 3: init (PID 1) & init.rc</h2>
          <p><code>init</code> is the Android init system — not systemd. It reads <strong><code>init.rc</code></strong> and device-specific <code>init.&lt;device&gt;.rc</code> scripts to mount filesystems and start services.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">init.rc (Android Init Language)</span><button class="copy-btn">Copy Code</button></div>
            <pre># From AOSP system/core/rootdir/init.rc
on early-init
    mount tmpfs tmpfs /mnt nodev noexec nosuid

on init
    # Set up keystone environment variables
    export ANDROID_DATA /data
    export ANDROID_ROOT /system

on post-fs-data
    mkdir /data/misc 0770 system misc
    start logd          # Start log daemon

service zygote /system/bin/app_process64 -Xzygote /system/bin --zygote --start-system-server
    class main
    socket zygote stream 660 root system
    onrestart write /sys/android_power/request_state wake</pre>
          </div>

          <h2>Stage 4: Zygote — The App Incubator</h2>
          <p>Zygote is the parent of ALL Android app processes. It pre-loads the Android Runtime (ART), core Java classes, and shared resources — then <strong>forks</strong> to spawn each app rapidly.</p>
          <ul>
            <li>Starts as <code>app_process64</code>, transitions to Zygote.</li>
            <li>Opens a Unix domain socket (<code>/dev/socket/zygote</code>) for fork requests.</li>
            <li><strong>Zygote64</strong> for 64-bit apps, <strong>Zygote32</strong> for 32-bit legacy apps.</li>
          </ul>

          <h2>Stage 5: System Server</h2>
          <p>Zygote forks and starts <strong>system_server</strong> — the most critical Java process on Android. It hosts all core system services:</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Java (AOSP)</span><button class="copy-btn">Copy Code</button></div>
            <pre>// frameworks/base/services/java/com/android/server/SystemServer.java
public static void main(String[] args) {
    new SystemServer().run();
}

private void run() {
    startBootstrapServices();  // ActivityManagerService, PackageManagerService
    startCoreServices();       // BatteryService, UsageStatsService
    startOtherServices();      // WindowManagerService, InputManagerService, etc.
}</pre>
          </div>

          <h2>Stage 6: Package Manager & Activity Manager</h2>
          <ul>
            <li><strong>PackageManagerService (PMS):</strong> Scans <code>/system/app</code>, <code>/data/app</code>, parses every APK's <code>AndroidManifest.xml</code>, builds the package registry.</li>
            <li><strong>ActivityManagerService (AMS):</strong> Manages Activity lifecycle, app processes, back stack, task management.</li>
          </ul>

          <h2>Stage 7: Launcher (Home Screen)</h2>
          <ol>
            <li>AMS sends <code>ACTION_BOOT_COMPLETED</code> broadcast.</li>
            <li>The default launcher app responds to <code>CATEGORY_HOME</code> intent.</li>
            <li>Home screen renders. Boot animation stops. Device is ready.</li>
          </ol>

          <h2>Boot Timeline Summary</h2>
          <table class="topic-table">
            <thead><tr><th>Stage</th><th>Component</th><th>Location</th><th>Time</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>BootROM → SBL</td><td>Hardware ROM</td><td>~1s</td></tr>
              <tr><td>2</td><td>Linux Kernel</td><td>boot.img</td><td>~2s</td></tr>
              <tr><td>3</td><td>init + init.rc</td><td>/init</td><td>~1s</td></tr>
              <tr><td>4</td><td>Zygote (ART)</td><td>/system/bin/app_process</td><td>~2s</td></tr>
              <tr><td>5</td><td>SystemServer</td><td>/system/framework/</td><td>~3s</td></tr>
              <tr><td>6</td><td>PMS + AMS</td><td>SystemServer</td><td>~5s</td></tr>
              <tr><td>7</td><td>Launcher</td><td>/data/app or /system/app</td><td>~2s</td></tr>
            </tbody>
          </table>

          <h2>Verified Boot (AVB)</h2>
          <p>Android Verified Boot 2.0 ensures every component in the boot chain is cryptographically verified before execution.</p>
          <ul>
            <li><strong>Bootloader</strong> verifies the kernel's signature using a public key stored in hardware</li>
            <li><strong>Kernel</strong> enables <code>dm-verity</code> — a device mapper target that verifies each block of <code>/system</code> and <code>/vendor</code> on read</li>
            <li>Any modification shows a warning on boot: <strong>green</strong> (stock), <strong>yellow</strong> (custom key), <strong>orange</strong> (unlocked)</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check verified boot state
adb shell getprop ro.boot.verifiedbootstate
# Output: green | yellow | orange | red

# Check dm-verity status
adb shell dumpsys package | grep -i verity

# Disable verity (userdebug only) for development
adb disable-verity && adb reboot</pre>
          </div>

          <h2>A/B Seamless Updates (OTA)</h2>
          <p>Modern Android devices use A/B partitioning to allow OTA updates without rebooting into recovery:</p>
          <ul>
            <li><strong>Slot A / Slot B:</strong> Two full copies of <code>boot</code>, <code>system</code>, <code>vendor</code> partitions</li>
            <li>OTA downloads and writes to the <em>inactive</em> slot while the device is running</li>
            <li>Reboot switches to the new slot — if boot fails 3 times, automatically reverts to previous slot</li>
            <li><code>update_engine</code> daemon manages the download and write operations</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check current and next boot slot
adb shell getprop ro.boot.slot_suffix   # _a or _b
adb shell bootctl get-current-slot      # 0 (A) or 1 (B)
adb shell bootctl get-number-slots      # typically 2</pre>
          </div>

          <h2>Debugging Boot Issues</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Get full boot log
adb logcat -b all -v threadtime > boot.log

# Check init log for service failures
adb shell cat /proc/last_kmsg

# Find slow services at startup
adb shell dumpsys activity | grep -A2 "starting"

# System server startup trace
adb shell atrace -t 10 --async_start -a system_server
adb shell atrace --async_stop -o /sdcard/boot_trace.html</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/architecture/kernel/init" target="_blank">Android Init</a> ·
            <a href="https://source.android.com/docs/core/architecture" target="_blank">AOSP Architecture</a>
          </div>
        `
      },
      {
        id: "android-runtime-art",
        title: "Android Runtime (ART) & Zygote",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=ART+Runtime+%26+Dex",
        imageAlt: "ART DEX compilation pipeline diagram",
        caption: "ART compiles DEX bytecode to native machine code using AOT, JIT, and Profile-Guided Optimization.",
        officialRef: "https://source.android.com/docs/core/runtime",
        content: `
          <h1>Android Runtime (ART)</h1>
          <p class="subtitle">The execution engine that runs all Android apps — replaced Dalvik in Android 5.0.</p>

          <h2>DEX Compilation Pipeline</h2>
          <p>Your Kotlin/Java code → <code>.class</code> (JVM bytecode) → <code>.dex</code> (Dalvik Executable) → native machine code by ART.</p>

          <h2>Compilation Strategies</h2>
          <table class="topic-table">
            <thead><tr><th>Strategy</th><th>When</th><th>Trade-off</th></tr></thead>
            <tbody>
              <tr><td><strong>AOT (Ahead-of-Time)</strong></td><td>App install / device idle</td><td>Fast runtime, slow install</td></tr>
              <tr><td><strong>JIT (Just-in-Time)</strong></td><td>First runs, hot code paths</td><td>Faster install, profile collected</td></tr>
              <tr><td><strong>PGO (Profile-Guided)</strong></td><td>After JIT collects profiles</td><td>Best of both — hot paths AOT compiled</td></tr>
            </tbody>
          </table>

          <h2>Zygote Fork Model</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Pseudo-code (AOSP)</span><button class="copy-btn">Copy Code</button></div>
            <pre>// When user launches "com.example.myapp"
// ActivityManagerService → ZygoteProcess → Zygote socket
1. AMS calls: Process.start("com.example.myapp", ...)
2. ZygoteProcess writes to /dev/socket/zygote
3. Zygote forks:
   - Child inherits: pre-loaded ART, android.jar classes, shared libs
   - Child sets UID/GID for the new app
   - Child calls ActivityThread.main() to start the app
   
# Fork is ~10x faster than a fresh JVM start
# because all class loading already happened in Zygote</pre>
          </div>

          <h2>ART Garbage Collector</h2>
          <table class="topic-table">
            <thead><tr><th>GC Type</th><th>When Triggered</th><th>Characteristic</th></tr></thead>
            <tbody>
              <tr><td>Concurrent Copying (CC)</td><td>Background, low-pause</td><td>Default on Android 8+. Moves objects to defragment heap.</td></tr>
              <tr><td>CMS (Concurrent Mark-Sweep)</td><td>Legacy (pre-CC)</td><td>Marks and sweeps without moving objects</td></tr>
              <tr><td>Explicit GC (System.gc())</td><td>App calls directly</td><td>Avoid! Causes jank. Hint only.</td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — GC Stats</span><button class="copy-btn">Copy Code</button></div>
            <pre># View GC events in logcat
adb logcat | grep "GC "
# Example output:
# I/art: Background partial concurrent mark sweep GC freed 10245(351KB)
#        AllocSpace objects, 4(72KB) LOS objects, 33% free, pause 2.167ms

# Heap stats per process
adb shell dumpsys meminfo com.example.myapp

# Check for heap fragmentation
adb shell dumpsys heapinfo</pre>
          </div>

          <h2>dex2oat — DEX to Native Compilation</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Manually trigger dex2oat compilation (userdebug builds)
cmd package compile -m speed com.example.myapp       # Full AOT
cmd package compile -m speed-profile com.example.myapp  # Profile-guided (recommended)
cmd package compile -m quicken com.example.myapp     # Fast JIT interpretation

# Dump OAT file info
oatdump --oat-file=/data/dalvik-cache/arm64/system@framework@boot.oat | head -50

# Check compilation filter of an installed app
pm dump com.example.myapp | grep -A1 "code path"</pre>
          </div>

          <h2>Profile-Guided Optimization (PGO) in Practice</h2>
          <ol>
            <li>First install: App runs via JIT, ART records hot methods to <code>/data/misc/profiles/</code></li>
            <li>Device idle + charging: <code>BackgroundDexOptService</code> compiles hot methods with dex2oat in <code>speed-profile</code> mode</li>
            <li>Result: Only frequently-used code is AOT compiled — saving storage while maximizing launch performance</li>
            <li>Baseline Profiles: You can ship pre-computed profiles with your APK (via <code>baseline-prof.txt</code>) to optimize even on first launch</li>
          </ol>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — View Profile Data</span><button class="copy-btn">Copy Code</button></div>
            <pre># List profile files
adb shell ls -la /data/misc/profiles/cur/0/com.example.myapp/

# Dump a profile (human-readable)
profman --dump-classes-and-methods --profile-file=primary.prof \
        --apk=/data/app/com.example.myapp.apk</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/runtime" target="_blank">ART and Dalvik</a> ·
            <a href="https://source.android.com/docs/core/runtime/configure" target="_blank">ART Configuration</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 07. AOSP — HARDWARE ABSTRACTION LAYER (HAL)
  // ============================================================
  {
    id: "aosp-hal",
    category: "07. Hardware Abstraction Layer (HAL)",
    icon: "⚙️",
    description: "HIDL, AIDL HAL, vendor interface, VINTF — bridging hardware and Android framework",
    topics: [
      {
        id: "hal-overview",
        title: "HAL Architecture & AIDL HAL",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Hardware+Abstraction+Layer",
        imageAlt: "AIDL HAL architecture diagram showing vendor process, HAL service, and framework client",
        caption: "AIDL HAL (Android 11+) uses stable AIDL interfaces for hardware vendor services.",
        officialRef: "https://source.android.com/docs/core/architecture/hal",
        content: `
          <h1>Hardware Abstraction Layer (HAL)</h1>
          <p class="subtitle">The interface between Android's framework and device-specific hardware drivers.</p>

          <h2>Why HAL Exists</h2>
          <p>Different hardware vendors implement the same sensors, cameras, audio, and graphics chips differently. The HAL provides a <strong>stable, versioned interface</strong> so the Android framework doesn't change when hardware changes — enabling OEM customization without modifying AOSP.</p>

          <h2>HAL Evolution</h2>
          <table class="topic-table">
            <thead><tr><th>HAL Type</th><th>Android Version</th><th>Interface Definition</th></tr></thead>
            <tbody>
              <tr><td>Legacy HAL</td><td>&lt; Android 8</td><td>C structs in hw_module_t</td></tr>
              <tr><td>HIDL HAL</td><td>Android 8–10</td><td>Hardware Interface Definition Language</td></tr>
              <tr><td>AIDL HAL</td><td>Android 11+</td><td>Stable AIDL (preferred going forward)</td></tr>
            </tbody>
          </table>

          <h2>Creating an AIDL HAL (Android 11+)</h2>
          <p><strong>Step 1: Define the AIDL interface</strong></p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">AIDL — hardware/interfaces/myhal/aidl/android/hardware/myhal/IMyHal.aidl</span><button class="copy-btn">Copy Code</button></div>
            <pre>// hardware/interfaces/myhal/aidl/android/hardware/myhal/IMyHal.aidl
package android.hardware.myhal;

@VintfStability
interface IMyHal {
    // Returns sensor reading in milli-units
    int getSensorValue(int sensorId);
    
    // Register for async callbacks
    void registerCallback(IMyHalCallback callback);
    
    // Reset hardware
    void reset();
}</pre>
          </div>

          <p><strong>Step 2: Implement the HAL service in C++</strong></p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C++ — HAL Implementation</span><button class="copy-btn">Copy Code</button></div>
            <pre>// hardware/interfaces/myhal/aidl/default/MyHal.h
#include &lt;aidl/android/hardware/myhal/BnMyHal.h&gt;

class MyHal : public aidl::android::hardware::myhal::BnMyHal {
public:
    ndk::ScopedAStatus getSensorValue(int32_t sensorId, int32_t* _aidl_return) override {
        // Talk to kernel driver via sysfs or ioctl
        *_aidl_return = readFromKernelDriver(sensorId);
        return ndk::ScopedAStatus::ok();
    }
    ndk::ScopedAStatus reset() override {
        // Reset hardware
        return ndk::ScopedAStatus::ok();
    }
};

// service.cpp — Register with hwservicemanager
int main() {
    ABinderProcess_setThreadPoolMaxThreadCount(0);
    std::shared_ptr&lt;MyHal&gt; hal = ndk::SharedRefBase::make&lt;MyHal&gt;();
    const std::string name = IMyHal::descriptor + std::string("/default");
    AServiceManager_addService(hal->asBinder().get(), name.c_str());
    ABinderProcess_joinThreadPool();
    return EXIT_FAILURE;
}</pre>
          </div>

          <p><strong>Step 3: VINTF manifest & sepolicy</strong></p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">XML — manifest_myhal.xml</span><button class="copy-btn">Copy Code</button></div>
            <pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;manifest version="1.0" type="device"&gt;
    &lt;hal format="aidl"&gt;
        &lt;name&gt;android.hardware.myhal&lt;/name&gt;
        &lt;version&gt;1&lt;/version&gt;
        &lt;interface&gt;
            &lt;name&gt;IMyHal&lt;/name&gt;
            &lt;instance&gt;default&lt;/instance&gt;
        &lt;/interface&gt;
    &lt;/hal&gt;
&lt;/manifest&gt;</pre>
          </div>

          <h2>Passthrough vs Binderized HAL</h2>
          <table class="topic-table">
            <thead><tr><th>Mode</th><th>How It Works</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td><strong>Passthrough</strong></td><td>HAL loaded as .so into caller's process (dlopen)</td><td>Legacy HALs, same-process performance</td></tr>
              <tr><td><strong>Binderized</strong></td><td>HAL runs as separate vendor process, Binder IPC</td><td>Modern AIDL/HIDL HALs — isolation + stability</td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — List HAL services</span><button class="copy-btn">Copy Code</button></div>
            <pre># List all running HAL services
adb shell lshal

# Check a specific HAL's transport mode
adb shell lshal | grep audio
# Output:
# android.hardware.audio@6.0::IDevicesFactory/default  V N  binderized  ... </pre>
          </div>

          <h2>VNDK — Vendor NDK</h2>
          <p>The <strong>Vendor Native Development Kit (VNDK)</strong> is a set of libraries that vendors can link against. It solves the problem of vendor code using unstable AOSP internal libraries.</p>
          <ul>
            <li><strong>VNDK-core:</strong> Libraries from <code>/system/lib</code> accessible to vendor code (e.g., <code>libbase</code>, <code>libcutils</code>)</li>
            <li><strong>VNDK-SP:</strong> VNDK libraries that can be dlopen'd from same-process HALs</li>
            <li><strong>LL-NDK:</strong> Always-stable ABI libs (<code>libc</code>, <code>libm</code>, <code>libdl</code>)</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Blueprint — Android.bp</span><button class="copy-btn">Copy Code</button></div>
            <pre>cc_library {
    name: "libmyhal_impl",
    vendor: true,           // placed in /vendor
    shared_libs: [
        "libbase",          // VNDK library
        "libhidlbase",      // VNDK (for HIDL HALs)
        "libbinder_ndk",    // For AIDL HALs
    ],
    // Never link against non-VNDK /system libraries!
}</pre>
          </div>

          <h2>HIDL → AIDL HAL Migration</h2>
          <p>Google migrated HALs from HIDL to stable AIDL starting in Android 11. Key differences:</p>
          <table class="topic-table">
            <thead><tr><th>Aspect</th><th>HIDL (Legacy)</th><th>AIDL HAL (Modern)</th></tr></thead>
            <tbody>
              <tr><td>Interface language</td><td>.hal files</td><td>.aidl files with @VintfStability</td></tr>
              <tr><td>IPC transport</td><td>hwbinder</td><td>binder (unified)</td></tr>
              <tr><td>Callbacks</td><td>IHwCallback</td><td>Standard AIDL callback interfaces</td></tr>
              <tr><td>Deprecation</td><td>Removed in Android 16+</td><td>Preferred going forward</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/architecture/hal" target="_blank">HAL Overview</a> ·
            <a href="https://source.android.com/docs/core/architecture/aidl/aidl-hals" target="_blank">AIDL HALs</a> ·
            <a href="https://source.android.com/docs/core/architecture/vintf" target="_blank">VINTF</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 08. AOSP — BINDER IPC
  // ============================================================
  {
    id: "aosp-binder",
    category: "08. Binder IPC",
    icon: "🔗",
    description: "Android's primary IPC mechanism — how services communicate across processes",
    topics: [
      {
        id: "binder-deep-dive",
        title: "Binder IPC — Deep Dive",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Binder+IPC+Architecture",
        imageAlt: "Binder IPC architecture showing client process, binder kernel driver, and server process",
        caption: "Binder is Android's high-performance IPC mechanism built into the Linux kernel as a character device.",
        officialRef: "https://source.android.com/docs/core/architecture/hidl/binder-ipc",
        content: `
          <h1>Binder IPC</h1>
          <p class="subtitle">Android's inter-process communication backbone — every app → framework call goes through Binder.</p>

          <h2>Why Binder?</h2>
          <p>Traditional Linux IPC (pipes, sockets, shared memory) has security and performance limitations. Binder provides:</p>
          <ul>
            <li><strong>One-copy semantics:</strong> Data crosses process boundary in a single copy (vs. 2 for traditional IPC)</li>
            <li><strong>Identity-based security:</strong> Each call carries the caller's UID/PID — Android checks permissions based on this</li>
            <li><strong>Object references:</strong> Remote objects can be passed as handles across processes</li>
            <li><strong>Synchronous RPC:</strong> Caller blocks until the remote method returns</li>
          </ul>

          <h2>Binder Architecture</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Architecture</span><button class="copy-btn">Copy Code</button></div>
            <pre>Client Process                  Kernel (/dev/binder)          Server Process
─────────────────               ─────────────────────         ────────────────────
App calls Service API           Binder driver maps             System service
    ↓                           shared memory                  implements IBinder
IBinder.transact()    ────────► ioctl(BINDER_WRITE_READ) ───► onTransact()
                      ◄──────── return parceled data    ◄──── returns result</pre>
          </div>

          <h2>Using AIDL (App-Level Binder)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">AIDL — ICalculator.aidl</span><button class="copy-btn">Copy Code</button></div>
            <pre>// src/main/aidl/com/example/ICalculator.aidl
package com.example;

interface ICalculator {
    int add(int a, int b);
    int multiply(int a, int b);
}</pre>
          </div>

          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin — Service Implementation</span><button class="copy-btn">Copy Code</button></div>
            <pre>class CalculatorService : Service() {
    private val binder = object : ICalculator.Stub() {
        override fun add(a: Int, b: Int): Int = a + b
        override fun multiply(a: Int, b: Int): Int = a * b
    }
    override fun onBind(intent: Intent): IBinder = binder
}

// Client binding
class MainActivity : AppCompatActivity() {
    private var calculator: ICalculator? = null
    private val connection = object : ServiceConnection {
        override fun onServiceConnected(name: ComponentName, service: IBinder) {
            calculator = ICalculator.Stub.asInterface(service)
        }
        override fun onServiceDisconnected(name: ComponentName) { calculator = null }
    }
    override fun onStart() {
        super.onStart()
        bindService(Intent(this, CalculatorService::class.java),
                    connection, Context.BIND_AUTO_CREATE)
    }
}</pre>
          </div>

          <h2>ServiceManager — The Binder Registry</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — List Binder Services</span><button class="copy-btn">Copy Code</button></div>
            <pre># List all registered binder services
adb shell service list

# Call a service directly (for testing)
adb shell service call activity 1  # IBinder.PING_TRANSACTION

# Check if a service exists
adb shell service check audio</pre>
          </div>

          <h2>Parcelable — Efficient Object Serialization</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Kotlin Parcelable (using @Parcelize annotation)
@Parcelize
data class UserParcel(
    val id: Int,
    val name: String,
    val email: String,
    val roles: List&lt;String&gt;  // Collections supported too
) : Parcelable

// Pass between processes via Intent or Binder
val user = UserParcel(1, "Alice", "alice@example.com", listOf("admin"))
val intent = Intent(this, DetailsActivity::class.java)
intent.putExtra("user", user)

// Retrieve
val user = intent.getParcelableExtra&lt;UserParcel&gt;("user")  // pre-33
val user = intent.getParcelableExtra("user", UserParcel::class.java)  // API 33+

// In AIDL — use parcelable types
parcelable UserParcel;  // IMyService.aidl can now use UserParcel as a parameter</pre>
          </div>

          <h2>IBinder Death Recipients</h2>
          <p>When a remote service process dies, clients get notified via <code>DeathRecipient</code> so they can clean up or reconnect.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>class MyServiceConnection : ServiceConnection {
    private var serviceBinder: IBinder? = null
    private var calculator: ICalculator? = null

    private val deathRecipient = IBinder.DeathRecipient {
        // Called on a binder thread when server process dies
        Log.w("Binder", "Service died! Attempting reconnect...")
        serviceBinder?.unlinkToDeath(deathRecipient = this, flags = 0)
        // Re-bind to the service
        handler.postDelayed({ reconnect() }, 1000)
    }

    override fun onServiceConnected(name: ComponentName, binder: IBinder) {
        serviceBinder = binder
        binder.linkToDeath(deathRecipient, 0)  // Register death notification
        calculator = ICalculator.Stub.asInterface(binder)
    }

    override fun onServiceDisconnected(name: ComponentName) {
        calculator = null  // Also called on death
    }
}</pre>
          </div>

          <h2>Binder Thread Pool</h2>
          <p>Each process has a Binder thread pool (default max: 15 threads). Incoming Binder calls are handled on pool threads, NOT the main thread. This means:</p>
          <ul>
            <li>Service <code>onTransact()</code> may be called from any pool thread — implement thread safety</li>
            <li>Apps calling services block on their calling thread until the server returns</li>
            <li>Never call a remote Binder service on the main thread without wrapping in a coroutine with <code>Dispatchers.IO</code></li>
          </ul>

          <h2>Binder Security</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Java — System Service Security</span><button class="copy-btn">Copy Code</button></div>
            <pre>// In your system service's implementation
@Override
public void setThrottleThreshold(int milliCelsius) {
    // Check 1: Caller must hold a specific permission
    mContext.enforceCallingOrSelfPermission(
        android.Manifest.permission.MANAGE_THERMAL,
        "Caller lacks MANAGE_THERMAL permission"
    );
    
    // Check 2: Get caller's UID for audit logging
    int callingUid = Binder.getCallingUid();
    int callingPid = Binder.getCallingPid();
    Slog.i(TAG, "setThrottle called by uid=" + callingUid + " pid=" + callingPid);
    
    // Check 3: Clear calling identity for permission-sensitive internal calls
    final long token = Binder.clearCallingIdentity();
    try {
        writeThrottleToKernel(milliCelsius);
    } finally {
        Binder.restoreCallingIdentity(token);
    }
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/architecture/hidl/binder-ipc" target="_blank">Binder IPC</a> ·
            <a href="https://developer.android.com/guide/components/aidl" target="_blank">AIDL Guide</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 09. AOSP — SYSTEM SERVICES
  // ============================================================
  {
    id: "aosp-system-services",
    category: "09. System Services",
    icon: "🔧",
    description: "Creating custom system services in AOSP — from Java to native",
    topics: [
      {
        id: "custom-system-service",
        title: "Creating a Custom System Service",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Custom+System+Services",
        imageAlt: "AOSP system service architecture within the Android stack",
        caption: "Custom system services run inside system_server and are accessible to any app via Binder.",
        officialRef: "https://source.android.com/docs/core/architecture/kernel",
        content: `
          <h1>Creating a Custom System Service in AOSP</h1>
          <p class="subtitle">Add a new always-on service to AOSP's system_server that any app can call via Binder.</p>

          <h2>Architecture of a System Service</h2>
          <p>A custom system service has 3 key parts:</p>
          <ol>
            <li><strong>AIDL Interface</strong> — defines the API exposed to clients</li>
            <li><strong>Service Implementation</strong> — runs in <code>system_server</code></li>
            <li><strong>Manager Class</strong> — convenience wrapper for apps (like <code>LocationManager</code>)</li>
          </ol>

          <h2>Step 1: Define the AIDL Interface</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">AIDL — frameworks/base/core/java/android/app/IMyService.aidl</span><button class="copy-btn">Copy Code</button></div>
            <pre>package android.app;

/** @hide */
interface IMyService {
    // Returns device temperature in milliCelsius
    int getTemperature();
    
    // Set thermal throttle threshold
    void setThrottleThreshold(int milliCelsius);
    
    // Register for thermal change events
    void registerListener(IMyServiceListener listener);
    void unregisterListener(IMyServiceListener listener);
}</pre>
          </div>

          <h2>Step 2: Implement the Service</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Java — frameworks/base/services/core/java/com/android/server/MyService.java</span><button class="copy-btn">Copy Code</button></div>
            <pre>public class MyService extends IMyService.Stub {
    private static final String TAG = "MyService";
    private final Context mContext;
    private final RemoteCallbackList&lt;IMyServiceListener&gt; mListeners =
            new RemoteCallbackList&lt;&gt;();
    
    public MyService(Context context) {
        mContext = context;
    }
    
    @Override
    public int getTemperature() {
        // Check permission
        mContext.enforceCallingOrSelfPermission(
            android.Manifest.permission.DEVICE_POWER, "Need DEVICE_POWER");
        
        // Read from thermal HAL or sysfs
        return readThermalSysfs("/sys/class/thermal/thermal_zone0/temp");
    }
    
    @Override
    public void registerListener(IMyServiceListener listener) {
        mListeners.register(listener);
    }
    
    private int readThermalSysfs(String path) {
        // Read from kernel sysfs node
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            return Integer.parseInt(reader.readLine().trim());
        } catch (Exception e) {
            Slog.e(TAG, "Failed to read thermal: " + e);
            return -1;
        }
    }
}</pre>
          </div>

          <h2>Step 3: Register in SystemServer</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Java — SystemServer.java</span><button class="copy-btn">Copy Code</button></div>
            <pre>// In startOtherServices() method of SystemServer.java
private void startOtherServices(@NonNull TimingsTraceAndSlog t) {
    // ... existing services ...
    
    t.traceBegin("StartMyService");
    try {
        ServiceManager.addService(Context.MY_SERVICE,
            new MyService(context));
    } catch (Throwable e) {
        reportWtf("starting MyService", e);
    }
    t.traceEnd();
}</pre>
          </div>

          <h2>Step 4: Create Manager Class for Apps</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Java — MyManager.java</span><button class="copy-btn">Copy Code</button></div>
            <pre>public class MyManager {
    private final IMyService mService;
    
    /** @hide */
    public MyManager(IMyService service) {
        mService = service;
    }
    
    public int getTemperature() {
        try {
            return mService.getTemperature();
        } catch (RemoteException e) {
            throw e.rethrowFromSystemServer();
        }
    }
}

// In Context.java, add:
public static final String MY_SERVICE = "my_service";

// App usage:
MyManager mgr = (MyManager) context.getSystemService(Context.MY_SERVICE);
int temp = mgr.getTemperature();</pre>
          </div>

          <h2>Build & Integration (Android.bp)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Blueprint — Android.bp</span><button class="copy-btn">Copy Code</button></div>
            <pre>java_library {
    name: "services.myservice",
    srcs: ["java/**/*.java", "java/**/*.aidl"],
    libs: ["services.core"],
    apex_available: ["//apex_available:platform"],
}</pre>
          </div>

          <h2>Debugging a System Service</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Dump service state (call dump() on your service)
adb shell dumpsys my_service

# List all system services
adb shell service list | grep my

# Call service directly from shell (test transaction)
adb shell service call my_service 1     # calls getTemperature() - transaction code 1

# Check if service is registered
adb shell service check my_service

# Log from inside service (visible in logcat)
# Slog.i(TAG, "message") → adb logcat | grep MyService</pre>
          </div>

          <h2>AIDL Interface Versioning</h2>
          <p>System services must maintain backward compatibility. AIDL supports versioned interfaces so old clients still work with newer service implementations.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">AIDL</span><button class="copy-btn">Copy Code</button></div>
            <pre>// IMyService.aidl version 2 — add methods without breaking clients
interface IMyService {
    // Version 1 methods (existing clients use these)
    int getTemperature();
    void setThrottleThreshold(int milliCelsius);
    
    // Version 2 method (new clients can use this, old ones don't call it)
    // Default implementation returns false for backward compat:
    default boolean isThermalThrottling() { return false; }
}

// Server checks client version before using new API:
public boolean isThermalThrottling() {
    // Safe to implement new behavior here
    return mCurrentTemp > mThrottleThreshold;
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/architecture/kernel" target="_blank">Kernel & System Services</a> ·
            <a href="https://source.android.com/docs/setup/build" target="_blank">AOSP Build System</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 10. AOSP — LINUX KERNEL & DEVICE DRIVERS
  // ============================================================
  {
    id: "aosp-kernel-drivers",
    category: "10. Linux Kernel & Custom Drivers",
    icon: "🖥️",
    description: "Kernel modules, character devices, platform drivers for Android",
    topics: [
      {
        id: "kernel-driver-basics",
        title: "Writing a Custom Linux Kernel Driver for Android",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Linux+Kernel+%26+Drivers",
        imageAlt: "Android Linux kernel architecture diagram showing driver interfaces",
        caption: "Android's kernel drivers expose hardware to user-space via /dev device files and sysfs.",
        officialRef: "https://source.android.com/docs/core/architecture/kernel",
        content: `
          <h1>Custom Linux Kernel Driver for Android</h1>
          <p class="subtitle">Write, build, and integrate a character device driver into the Android kernel.</p>

          <h2>Linux Kernel Driver Types</h2>
          <table class="topic-table">
            <thead><tr><th>Type</th><th>Use Case</th><th>Interface</th></tr></thead>
            <tbody>
              <tr><td>Character device</td><td>Custom sensors, simple I/O</td><td>/dev/mydevice</td></tr>
              <tr><td>Platform driver</td><td>SoC-integrated hardware</td><td>Device Tree binding</td></tr>
              <tr><td>I2C / SPI client</td><td>External sensors, displays</td><td>i2c_driver / spi_driver</td></tr>
              <tr><td>Misc device</td><td>Simple helper devices</td><td>/dev/misc/</td></tr>
            </tbody>
          </table>

          <h2>Minimal Character Driver</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C — mydriver.c</span><button class="copy-btn">Copy Code</button></div>
            <pre>#include &lt;linux/module.h&gt;
#include &lt;linux/fs.h&gt;
#include &lt;linux/cdev.h&gt;
#include &lt;linux/uaccess.h&gt;

#define DRIVER_NAME "mydriver"
#define BUF_SIZE 256

static dev_t dev_num;
static struct cdev my_cdev;
static char kernel_buf[BUF_SIZE];
static int buf_size = 0;

/* Called when user opens /dev/mydriver */
static int mydriver_open(struct inode *inode, struct file *file) {
    pr_info("mydriver: opened\n");
    return 0;
}

/* Called when user reads from /dev/mydriver */
static ssize_t mydriver_read(struct file *file, char __user *buf,
                              size_t count, loff_t *offset) {
    int bytes = min((int)count, buf_size - (int)*offset);
    if (bytes <= 0) return 0;
    
    if (copy_to_user(buf, kernel_buf + *offset, bytes))
        return -EFAULT;
    
    *offset += bytes;
    return bytes;
}

/* Called when user writes to /dev/mydriver */
static ssize_t mydriver_write(struct file *file, const char __user *buf,
                               size_t count, loff_t *offset) {
    int bytes = min((int)count, BUF_SIZE - 1);
    
    if (copy_from_user(kernel_buf, buf, bytes))
        return -EFAULT;
    
    kernel_buf[bytes] = '\0';
    buf_size = bytes;
    pr_info("mydriver: received '%s'\n", kernel_buf);
    return bytes;
}

static const struct file_operations mydriver_fops = {
    .owner   = THIS_MODULE,
    .open    = mydriver_open,
    .read    = mydriver_read,
    .write   = mydriver_write,
};

static int __init mydriver_init(void) {
    alloc_chrdev_region(&dev_num, 0, 1, DRIVER_NAME);
    cdev_init(&my_cdev, &mydriver_fops);
    cdev_add(&my_cdev, dev_num, 1);
    pr_info("mydriver: initialized, major=%d\n", MAJOR(dev_num));
    return 0;
}

static void __exit mydriver_exit(void) {
    cdev_del(&my_cdev);
    unregister_chrdev_region(dev_num, 1);
    pr_info("mydriver: removed\n");
}

module_init(mydriver_init);
module_exit(mydriver_exit);
MODULE_LICENSE("GPL");
MODULE_AUTHOR("Your Name");
MODULE_DESCRIPTION("Android custom character driver");</pre>
          </div>

          <h2>Platform Driver (for SoC hardware)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C — myplatform_driver.c</span><button class="copy-btn">Copy Code</button></div>
            <pre>#include &lt;linux/platform_device.h&gt;
#include &lt;linux/of.h&gt;

static int myplatform_probe(struct platform_device *pdev) {
    struct resource *res;
    void __iomem *base;
    
    // Get hardware register base address from Device Tree
    res = platform_get_resource(pdev, IORESOURCE_MEM, 0);
    base = devm_ioremap_resource(&pdev->dev, res);
    if (IS_ERR(base)) return PTR_ERR(base);
    
    dev_info(&pdev->dev, "probed at 0x%llx\n", res->start);
    platform_set_drvdata(pdev, base);
    return 0;
}

static int myplatform_remove(struct platform_device *pdev) {
    dev_info(&pdev->dev, "removed\n");
    return 0;
}

// Match against Device Tree "compatible" string
static const struct of_device_id myplatform_of_match[] = {
    { .compatible = "vendor,my-hardware" },
    {}
};
MODULE_DEVICE_TABLE(of, myplatform_of_match);

static struct platform_driver myplatform_driver = {
    .probe  = myplatform_probe,
    .remove = myplatform_remove,
    .driver = {
        .name           = "myplatform",
        .of_match_table = myplatform_of_match,
    },
};
module_platform_driver(myplatform_driver);</pre>
          </div>

          <h2>Device Tree Entry</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">DTS — device-specific.dts</span><button class="copy-btn">Copy Code</button></div>
            <pre>// arch/arm64/boot/dts/vendor/my_device.dts
my_hardware: my-hw@ff200000 {
    compatible = "vendor,my-hardware";
    reg = &lt;0 0xff200000 0 0x1000&gt;;  /* base addr, size */
    interrupts = &lt;GIC_SPI 42 IRQ_TYPE_LEVEL_HIGH&gt;;
    clocks = &lt;&amp;periph_clk&gt;;
    status = "okay";
};</pre>
          </div>

          <h2>Building with AOSP Kernel</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Add to Kconfig
config MY_DRIVER
    tristate "My custom Android driver"
    depends on OF
    help
      Say Y here to enable mydriver.

# Add to Makefile (same directory as driver .c file)
obj-$(CONFIG_MY_DRIVER) += mydriver.o

# Build the kernel
cd $ANDROID_KERNEL_HOME
export ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu-
make defconfig
make menuconfig    # Enable CONFIG_MY_DRIVER
make -j$(nproc)

# Or using AOSP's Bazel kernel build
tools/bazel build //common:kernel_aarch64</pre>
          </div>

          <h2>SELinux Policy for the Driver</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">SEPolicy</span><button class="copy-btn">Copy Code</button></div>
            <pre># file_contexts — label the device node
/dev/mydriver    u:object_r:mydriver_device:s0

# mydriver.te — allow HAL to access the device
type mydriver_device, dev_type;
allow myhal_service mydriver_device:chr_file { open read write ioctl };</pre>
          </div>

          <h2>Interrupt Handling (IRQ)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C — IRQ Handler</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Request IRQ in probe function
static irqreturn_t mydriver_irq_handler(int irq, void *dev_id) {
    struct mydriver_data *data = (struct mydriver_data *)dev_id;
    
    // Read hardware status register to confirm IRQ
    u32 status = readl(data->base + STATUS_REG);
    if (!(status & IRQ_FLAG)) return IRQ_NONE;
    
    // Clear interrupt
    writel(IRQ_FLAG, data->base + STATUS_CLR_REG);
    
    // Wake up waiting userspace (e.g. via wait_queue)
    data->event_ready = true;
    wake_up_interruptible(&amp;data->wait_queue);
    
    return IRQ_HANDLED;
}

// In probe():
irq = platform_get_irq(pdev, 0);
if (devm_request_irq(&amp;pdev->dev, irq, mydriver_irq_handler,
                     IRQF_SHARED, "mydriver", data)) {
    dev_err(&amp;pdev->dev, "Failed to request IRQ %d\n", irq);
    return -ENODEV;
}</pre>
          </div>

          <h2>sysfs Interface</h2>
          <p>Expose driver parameters to user-space via sysfs — readable/writable as files in <code>/sys/</code>.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">C — sysfs attributes</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Define a sysfs attribute
static ssize_t temperature_show(struct device *dev,
                                 struct device_attribute *attr, char *buf) {
    struct mydriver_data *data = dev_get_drvdata(dev);
    return sprintf(buf, "%d\n", readl(data->base + TEMP_REG));
}

static ssize_t threshold_store(struct device *dev,
                                struct device_attribute *attr,
                                const char *buf, size_t count) {
    int threshold;
    if (kstrtoint(buf, 10, &amp;threshold)) return -EINVAL;
    writel(threshold, ((struct mydriver_data*)dev_get_drvdata(dev))->base + THRESHOLD_REG);
    return count;
}

static DEVICE_ATTR_RO(temperature);   // /sys/bus/platform/devices/mydriver/temperature
static DEVICE_ATTR_WO(threshold);

static struct attribute *mydriver_attrs[] = {
    &amp;dev_attr_temperature.attr,
    &amp;dev_attr_threshold.attr,
    NULL,
};
ATTRIBUTE_GROUPS(mydriver);</pre>
          </div>

          <h2>Kernel Debugging Techniques</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># View kernel messages in real-time
adb shell dmesg -w
adb shell dmesg -w | grep mydriver

# Check driver loaded
adb shell cat /proc/modules | grep mydriver

# Read sysfs attribute
adb shell cat /sys/bus/platform/devices/mydriver/temperature

# Check /proc/interrupts for IRQ registration
adb shell cat /proc/interrupts | grep mydriver

# Dynamic debug prints (enable verbose logging at runtime)
adb shell echo "module mydriver +p" > /sys/kernel/debug/dynamic_debug/control</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/architecture/kernel/modules" target="_blank">Kernel Modules</a> ·
            <a href="https://source.android.com/docs/core/architecture/kernel/loadable-kernel-modules" target="_blank">Loadable Kernel Modules</a> ·
            <a href="https://source.android.com/docs/security/features/selinux" target="_blank">SELinux in Android</a>
          </div>
        `
      },
      {
        id: "selinux-android",
        title: "SELinux in Android",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=SELinux+Android+Security",
        imageAlt: "SELinux Android architecture showing MAC enforcement between processes and resources",
        caption: "SELinux enforces Mandatory Access Control — every process and file has a security context.",
        officialRef: "https://source.android.com/docs/security/features/selinux",
        content: `
          <h1>SELinux in Android</h1>
          <p class="subtitle">Mandatory Access Control that enforces the principle of least privilege across the Android system.</p>

          <h2>Key Concepts</h2>
          <ul>
            <li><strong>Security Context (Label):</strong> Every process, file, socket has a label: <code>user:role:type:level</code></li>
            <li><strong>Type Enforcement (TE):</strong> Rules like <code>allow source_type target_type:class permissions</code></li>
            <li><strong>Domain:</strong> The type assigned to a process (e.g., <code>untrusted_app</code>, <code>system_server</code>)</li>
            <li><strong>Enforcing vs Permissive:</strong> Enforcing blocks and logs violations; Permissive only logs</li>
          </ul>

          <h2>Checking SELinux Status</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check current mode
adb shell getenforce
# → Enforcing

# Check process context
adb shell ps -Z | grep system_server
# → u:r:system_server:s0  ...

# Check file context
adb shell ls -Z /dev/mydriver
# → u:object_r:mydriver_device:s0

# View SELinux denials in logcat
adb logcat | grep "avc: denied"</pre>
          </div>

          <h2>Writing SEPolicy Rules</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">SEPolicy</span><button class="copy-btn">Copy Code</button></div>
            <pre># Define a new type for your service
type my_service, service_manager_type;

# Define a new domain for your HAL process
type myhal_service, domain;
type myhal_service_exec, exec_type, file_type, vendor_file_type;

# Init transition: init spawns myhal_service process
init_daemon_domain(myhal_service)

# Allow myhal to access its device node
allow myhal_service mydriver_device:chr_file { open read write ioctl };

# Allow app to bind to my service via Binder
allow untrusted_app my_service:service_manager { find };

# Allow myhal to talk to system_server via Binder
binder_call(myhal_service, system_server)</pre>
          </div>

          <h2>audit2allow — Policy From Denials</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Capture denials and auto-generate policy
adb logcat -d | grep "avc: denied" | audit2allow -p out/target/product/generic/root/sepolicy

# Output example:
# allow myhal_service mydriver_device:chr_file { read write };
# ^ Add this to your .te policy file</pre>
          </div>

          <h2>Domain Transitions</h2>
          <p>A domain transition changes a process's security context when it execs a new program. This is how init spawns services with the correct domain.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">SEPolicy</span><button class="copy-btn">Copy Code</button></div>
            <pre># 1. Label the executable binary
/vendor/bin/myhal_service    u:object_r:myhal_service_exec:s0

# 2. Allow the transition (in myhal_service.te)
type_transition init myhal_service_exec:process myhal_service;

# Or use the macro:
init_daemon_domain(myhal_service)
# This expands to:
# type_transition init myhal_service_exec:process myhal_service;
# allow init myhal_service_exec:file { read getattr execute open };
# allow init myhal_service:process transition;
# allow myhal_service myhal_service_exec:file entrypoint;</pre>
          </div>

          <h2>neverallow Rules</h2>
          <p><code>neverallow</code> rules are compile-time assertions that ensure critical security boundaries are never violated, even if someone adds incorrect <code>allow</code> rules.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">SEPolicy</span><button class="copy-btn">Copy Code</button></div>
            <pre># These are AOSP's built-in neverallow rules (you cannot override them)

# Apps must never access kernel keyring
neverallow untrusted_app *:keyring *;

# Vendor code must not access /data directly
neverallow vendor_default_prop system_data_file:file { read write };

# Only system_server can use the Binder to reach sensitive services
neverallow { appdomain -system_server } servicemanager:binder call;

# Your custom neverallow to harden your HAL:
neverallow { domain -myhal_service -init } mydriver_device:chr_file write;</pre>
          </div>

          <h2>File Context Labeling</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">SEPolicy — file_contexts</span><button class="copy-btn">Copy Code</button></div>
            <pre># System partition files
/system/bin/myservice         u:object_r:myservice_exec:s0
/system/lib64/libmylib\.so    u:object_r:system_lib_file:s0

# Vendor files
/vendor/bin/myhal             u:object_r:myhal_service_exec:s0
/vendor/lib/.*\.so            u:object_r:same_process_hal_file:s0

# Data files
/data/misc/myservice(/.*)?    u:object_r:myservice_data_file:s0

# Apply labels after adding file_contexts:
# make selinux_policy && adb push out/target/product/&lt;device&gt;/vendor/etc/selinux/ /vendor/etc/selinux/
# adb shell restorecon -r /data/misc/myservice</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/security/features/selinux" target="_blank">SELinux for Android</a> ·
            <a href="https://source.android.com/docs/security/features/selinux/customize" target="_blank">Customizing SEPolicy</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 11. AOSP BUILD SYSTEM
  // ============================================================
  {
    id: "aosp-build-system",
    category: "11. AOSP Build System",
    icon: "🏗️",
    description: "Repo, Lunch targets, Soong (Android.bp), building AOSP from source",
    topics: [
      {
        id: "aosp-build-guide",
        title: "Building AOSP from Source",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=AOSP+Build+System",
        imageAlt: "AOSP repo tool and git structure diagram",
        caption: "AOSP uses the 'repo' tool to manage hundreds of git repositories in a single workspace.",
        officialRef: "https://source.android.com/docs/setup/build/building",
        content: `
          <h1>Building AOSP from Source</h1>
          <p class="subtitle">Set up, download, and build the entire Android OS from source code.</p>

          <h2>System Requirements (2025)</h2>
          <ul>
            <li>Ubuntu 20.04 LTS or 22.04 LTS (recommended)</li>
            <li>16+ GB RAM (32 GB recommended for fast builds)</li>
            <li>500 GB free disk (SSD preferred)</li>
            <li>Java 11 or 17 (OpenJDK)</li>
          </ul>

          <h2>Step 1: Install Dependencies</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre>sudo apt-get install -y git-core gnupg flex bison build-essential zip curl \\
    zlib1g-dev libc6-dev-i386 x11proto-core-dev libx11-dev lib32z1-dev \\
    libgl1-mesa-dev libxml2-utils xsltproc unzip python3 python3-pip \\
    openjdk-17-jdk

# Install repo tool
mkdir -p ~/bin
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
export PATH=~/bin:$PATH</pre>
          </div>

          <h2>Step 2: Download AOSP Source</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre>mkdir ~/aosp && cd ~/aosp

# Initialize repo for Android 15 (latest stable)
repo init -u https://android.googlesource.com/platform/manifest \\
          -b android-15.0.0_r1

# Download (~100GB, takes hours)
repo sync -c -j$(nproc) --no-tags --no-clone-bundle</pre>
          </div>

          <h2>Step 3: Set Up Build Environment</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre>cd ~/aosp
source build/envsetup.sh    # Load build functions

# List available targets
lunch                       # interactive
# or specify directly:
lunch aosp_arm64-userdebug  # Generic ARM64 emulator
lunch aosp_x86_64-userdebug # x86_64 emulator

# Lunch format: lunch <product>-<variant>
# Variants: user | userdebug | eng
#   user: production, no root
#   userdebug: like user + adb root + debug symbols
#   eng: full debug, fastest iteration</pre>
          </div>

          <h2>Step 4: Build</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Full build (first time, takes 1-3 hours)
m -j$(nproc)

# Build a specific module
m MyModule -j$(nproc)
m services -j$(nproc)         # system services
m framework -j$(nproc)        # Android framework

# Build a specific APK
m SystemUI -j$(nproc)

# Build kernel
m kernel -j$(nproc)

# Flash to device
fastboot flashall -w           # Flash all partitions

# Run on emulator
emulator &                     # Uses out/target/product/generic_arm64/</pre>
          </div>

          <h2>Soong Build System (Android.bp)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Blueprint</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Android.bp — Soong build rules (replaces Android.mk)

android_app {
    name: "MySystemApp",
    srcs: ["src/**/*.java", "src/**/*.kt"],
    platform_apis: true,         // access hidden APIs
    certificate: "platform",     // sign with platform key
    privileged: true,
    static_libs: [
        "androidx.core_core",
        "services.core",
    ],
}

java_library {
    name: "libmyservice",
    srcs: ["java/**/*.java", "aidl/**/*.aidl"],
    sdk_version: "current",
}

cc_binary {
    name: "myhal_service",
    srcs: ["*.cpp"],
    shared_libs: [
        "libbase",
        "libbinder_ndk",
        "android.hardware.myhal-V1-ndk",
    ],
    vendor: true,
}</pre>
          </div>

          <h2>APEX Modules — Updatable OS Components</h2>
          <p>Android APEX (Android Pony EXpress) allows shipping and updating OS modules independently via the Play Store — like APKs but for system components.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Blueprint</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Android.bp for an APEX module
apex {
    name: "com.android.mymodule",
    manifest: "apex_manifest.json",
    key: "com.android.mymodule.key",
    certificate: ":com.android.mymodule.certificate",
    
    java_libs: ["mymodule_java_lib"],
    native_shared_libs: ["libmymodule"],
    
    // Controls which platform versions can use this APEX
    min_sdk_version: "31",
}

// apex_manifest.json
{
    "name": "com.android.mymodule",
    "version": 340900000
}</pre>
          </div>

          <h2>Incremental Builds &amp; Build Analysis</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Incremental build after a change (much faster than full)
m services -j$(nproc)   # Only rebuilds services module

# Install changed module to running device (no full flash)
adb root && adb remount
adb sync system          # pushes all changed files
adb reboot

# Or push a specific file
adb push out/target/product/generic_arm64/system/framework/services.jar \
    /system/framework/services.jar
adb shell stop && adb shell start  # restart system_server

# Build and install a single APK
m MySystemApp -j$(nproc)
adb install -r out/target/product/generic_arm64/system/app/MySystemApp/MySystemApp.apk

# Check what a module will build
m --dry-run MyModule 2>&amp;1 | head -30

# Analyze build times (find slow modules)
cat out/build_metrics.pb | python3 tools/buildstats/buildstats.py</pre>
          </div>

          <h2>Useful Build Targets</h2>
          <table class="topic-table">
            <thead><tr><th>Target</th><th>Builds</th></tr></thead>
            <tbody>
              <tr><td><code>m</code></td><td>Everything (full build)</td></tr>
              <tr><td><code>mm</code></td><td>Current directory module only</td></tr>
              <tr><td><code>mma</code></td><td>Current module + dependencies</td></tr>
              <tr><td><code>m framework</code></td><td>Android framework JAR</td></tr>
              <tr><td><code>m services</code></td><td>system_server services</td></tr>
              <tr><td><code>m selinux_policy</code></td><td>SEPolicy only (fast iteration)</td></tr>
              <tr><td><code>m kernel</code></td><td>Linux kernel image</td></tr>
              <tr><td><code>m vendorimage</code></td><td>Vendor partition image</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/setup/build/building" target="_blank">Building Android</a> ·
            <a href="https://source.android.com/docs/setup/build/soong-build-system" target="_blank">Soong Build System</a> ·
            <a href="https://source.android.com/docs/setup/download" target="_blank">Downloading Source</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 12. AOSP — GRAPHICS & DISPLAY
  // ============================================================
  {
    id: "aosp-graphics",
    category: "12. Graphics & Display Stack",
    icon: "🖼️",
    description: "SurfaceFlinger, BufferQueue, HWUI, Vulkan, OpenGL ES",
    topics: [
      {
        id: "graphics-stack",
        title: "Android Graphics Stack — SurfaceFlinger",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Graphics+%26+Display+Stack",
        imageAlt: "Android graphics architecture showing app buffers, SurfaceFlinger compositor and display",
        caption: "SurfaceFlinger composes all app and system UI surfaces into a final frame for the display.",
        officialRef: "https://source.android.com/docs/core/graphics",
        content: `
          <h1>Android Graphics Stack</h1>
          <p class="subtitle">How pixels travel from your app code to the physical display.</p>

          <h2>Graphics Stack Layers</h2>
          <ol>
            <li><strong>App / Compose:</strong> Draws into a Surface using Canvas (HWUI) or Vulkan/GLES</li>
            <li><strong>BufferQueue:</strong> Ring buffer of GraphicBuffers between producer (app) and consumer (SurfaceFlinger)</li>
            <li><strong>SurfaceFlinger:</strong> System compositor — composites all layers using HWC or GLES</li>
            <li><strong>Hardware Composer (HWC2):</strong> GPU-offload compositor HAL — hardware overlays</li>
            <li><strong>Display Driver:</strong> Sends final framebuffer to display panel via DSI/DP/HDMI</li>
          </ol>

          <h2>Key Components</h2>
          <table class="topic-table">
            <thead><tr><th>Component</th><th>Purpose</th><th>Source Location</th></tr></thead>
            <tbody>
              <tr><td>SurfaceFlinger</td><td>System compositor service</td><td>frameworks/native/services/surfaceflinger</td></tr>
              <tr><td>BufferQueue</td><td>Producer-consumer buffer sharing</td><td>frameworks/native/libs/gui</td></tr>
              <tr><td>HWUI</td><td>Hardware-accelerated 2D canvas</td><td>frameworks/base/libs/hwui</td></tr>
              <tr><td>Gralloc HAL</td><td>Graphics buffer allocator</td><td>hardware/interfaces/graphics/allocator</td></tr>
              <tr><td>HWC2 HAL</td><td>Hardware compositor</td><td>hardware/interfaces/graphics/composer</td></tr>
            </tbody>
          </table>

          <h2>Debugging Graphics</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Dump SurfaceFlinger state
adb shell dumpsys SurfaceFlinger

# Check frame timing (jank detection)
adb shell dumpsys gfxinfo com.example.myapp framestats

# Enable GPU profiling
adb shell setprop debug.hwui.profile true

# Capture systrace for graphics
python $ANDROID_HOME/platform-tools/systrace/systrace.py gfx view sched \\
    -a com.example.myapp -t 5 -o trace.html

# Profile overdraw
adb shell setprop debug.hwui.overdraw show</pre>
          </div>

          <h2>VSync & Choreographer</h2>
          <p>Android synchronizes all rendering to the display's refresh rate using <strong>VSync</strong>. The <code>Choreographer</code> class is the bridge between the display driver and app rendering.</p>
          <ul>
            <li><strong>VSync</strong> (Vertical Sync): Hardware signal from the display at 60/90/120 Hz</li>
            <li><strong>Choreographer:</strong> Schedules <code>doFrame()</code> callbacks aligned with VSync — Compose uses this internally</li>
            <li><strong>Triple buffering:</strong> Three frame buffers (render, ready, displaying) to prevent producer-consumer races</li>
            <li><strong>Jank:</strong> When a frame misses its VSync slot, the previous frame is re-displayed — visible as a stutter</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin — Frame Timing</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Check frame rendering performance
val window = activity.window
window.addFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED)

// Custom animation synced to display refresh rate
class MyView(context: Context) : View(context) {
    private val choreographer = Choreographer.getInstance()

    private val frameCallback = Choreographer.FrameCallback { frameTimeNanos ->
        // frameTimeNanos: nanoseconds since boot when VSync occurred
        updateAnimation(frameTimeNanos)
        invalidate()
        choreographer.postFrameCallback(this.frameCallback)  // continue animation
    }

    fun startAnimation() {
        choreographer.postFrameCallback(frameCallback)
    }

    override fun onDraw(canvas: Canvas) {
        // Draw frame
    }
}</pre>
          </div>

          <h2>Vulkan on Android</h2>
          <p>Android supports Vulkan (low-level GPU API) for demanding games and graphics apps. It gives direct GPU control: render passes, command buffers, pipeline state objects.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — Check Vulkan Support</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check if device supports Vulkan
adb shell getprop ro.hardware.vulkan
adb shell dumpsys | grep -i vulkan

# In Kotlin — check Vulkan availability at runtime
val activityManager = context.getSystemService(ActivityManager::class.java)
val vulkanLevel = activityManager.deviceConfigurationInfo.reqGlEsVersion
// Vulkan supported if reqGlEsVersion >= 0x30000

// Better check:
if (context.packageManager.hasSystemFeature(PackageManager.FEATURE_VULKAN_HARDWARE_LEVEL)) {
    Log.d("GPU", "Vulkan supported!")
}</pre>
          </div>

          <h2>Rendering Performance Profiling</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># GPU rendering profile (bar chart on screen)
adb shell setprop debug.hwui.profile visual_bars

# Count dropped frames in last 120 frames
adb shell dumpsys gfxinfo com.example.myapp | grep "Janky"

# Systrace for graphics rendering
adb shell atrace -t 5 gfx view sched -o /sdcard/trace.html
adb pull /sdcard/trace.html
# Open in chrome://tracing or ui.perfetto.dev

# Per-frame timing breakdown
adb shell dumpsys gfxinfo com.example.myapp framestats
# Shows: Intended vsync, draw start, issue draw commands, swap buffers time</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/graphics" target="_blank">Graphics Overview</a> ·
            <a href="https://source.android.com/docs/core/graphics/architecture" target="_blank">Graphics Architecture</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 13. AOSP — AUDIO & MEDIA
  // ============================================================
  {
    id: "aosp-audio",
    category: "13. Audio & Media Stack",
    icon: "🔊",
    description: "AudioFlinger, AudioPolicyService, MediaCodec, Camera2",
    topics: [
      {
        id: "audio-stack",
        title: "Android Audio Stack — AudioFlinger",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Audio+Architecture",
        imageAlt: "Android audio architecture showing AudioFlinger, Audio HAL, and ALSA kernel driver",
        caption: "AudioFlinger is the audio server — it mixes all streams and routes them to the Audio HAL.",
        officialRef: "https://source.android.com/docs/core/audio/implement",
        content: `
          <h1>Android Audio Stack</h1>
          <p class="subtitle">From AudioTrack API calls to physical speaker output.</p>

          <h2>Audio Architecture</h2>
          <ol>
            <li><strong>App → AudioTrack / MediaPlayer API</strong></li>
            <li><strong>AudioFlinger (system server):</strong> Mixes streams, applies effects, routes to outputs</li>
            <li><strong>AudioPolicyService:</strong> Decides which output device to use (speaker vs. BT headset)</li>
            <li><strong>Audio HAL:</strong> Vendor implementation (AIDL HAL, wraps ALSA/TinyALSA)</li>
            <li><strong>ALSA / ASoC kernel driver:</strong> Writes PCM samples to hardware codec</li>
          </ol>

          <h2>Audio HAL Interface</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">AIDL — Android 12+ Audio HAL</span><button class="copy-btn">Copy Code</button></div>
            <pre>// hardware/interfaces/audio/aidl/android/hardware/audio/core/IModule.aidl
interface IModule {
    IStreamOut openOutputStream(OpenOutputStreamArguments args,
                                 out OpenOutputStreamReturn ret);
    IStreamIn  openInputStream(OpenInputStreamArguments args,
                                out OpenInputStreamReturn ret);
    void setAudioPatch(AudioPatch requested, out AudioPatch suggested);
}</pre>
          </div>

          <h2>AudioTrack — Low Latency Audio</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val sampleRate = 44100
val channelConfig = AudioFormat.CHANNEL_OUT_STEREO
val encoding = AudioFormat.ENCODING_PCM_16BIT
val bufferSize = AudioTrack.getMinBufferSize(sampleRate, channelConfig, encoding)

val audioTrack = AudioTrack.Builder()
    .setAudioAttributes(AudioAttributes.Builder()
        .setUsage(AudioAttributes.USAGE_MEDIA)
        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
        .build())
    .setAudioFormat(AudioFormat.Builder()
        .setEncoding(encoding)
        .setSampleRate(sampleRate)
        .setChannelMask(channelConfig)
        .build())
    .setBufferSizeInBytes(bufferSize)
    .setTransferMode(AudioTrack.MODE_STREAM)  // Low latency streaming
    .build()

audioTrack.play()
// Write PCM data in a loop
audioTrack.write(pcmBuffer, 0, pcmBuffer.size)</pre>
          </div>

          <h2>MediaCodec — Hardware Video/Audio Codec</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin — H.264 Decode</span><button class="copy-btn">Copy Code</button></div>
            <pre>val codec = MediaCodec.createDecoderByType(MediaFormat.MIMETYPE_VIDEO_AVC)
val format = MediaFormat.createVideoFormat(MediaFormat.MIMETYPE_VIDEO_AVC, 1920, 1080)
format.setInteger(MediaFormat.KEY_FRAME_RATE, 30)
format.setInteger(MediaFormat.KEY_I_FRAME_INTERVAL, 1)

codec.configure(format, surface, null, 0)  // decode to Surface
codec.start()

// Feed encoded data in a loop
val inputIndex = codec.dequeueInputBuffer(10_000)
if (inputIndex >= 0) {
    val buf = codec.getInputBuffer(inputIndex)!!
    val sampleSize = extractor.readSampleData(buf, 0)
    codec.queueInputBuffer(inputIndex, 0, sampleSize, extractor.sampleTime, 0)
}

// Retrieve decoded frames
val info = MediaCodec.BufferInfo()
val outputIndex = codec.dequeueOutputBuffer(info, 10_000)
if (outputIndex >= 0) {
    codec.releaseOutputBuffer(outputIndex, true)  // render to Surface
}

codec.stop()
codec.release()</pre>
          </div>

          <h2>Audio Focus</h2>
          <p>Audio focus prevents multiple apps from playing audio simultaneously. Always request focus before playing and abandon it when done.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val audioManager = getSystemService(Context.AUDIO_SERVICE) as AudioManager

val focusRequest = AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
    .setAudioAttributes(AudioAttributes.Builder()
        .setUsage(AudioAttributes.USAGE_MEDIA)
        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
        .build())
    .setOnAudioFocusChangeListener { focusChange ->
        when (focusChange) {
            AudioManager.AUDIOFOCUS_GAIN         -> mediaPlayer.start()    // resume
            AudioManager.AUDIOFOCUS_LOSS         -> mediaPlayer.stop()     // stop permanently
            AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> mediaPlayer.pause()  // pause briefly
            AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> mediaPlayer.setVolume(0.2f, 0.2f)
        }
    }.build()

val result = audioManager.requestAudioFocus(focusRequest)
if (result == AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
    mediaPlayer.start()
}

// Always abandon focus when done
audioManager.abandonAudioFocusRequest(focusRequest)</pre>
          </div>

          <h2>Audio Debugging</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Dump AudioFlinger state (all active streams)
adb shell dumpsys media.audio_flinger

# Dump AudioPolicy routing decisions
adb shell dumpsys media.audio_policy

# List all active audio sessions
adb shell dumpsys media.player

# Check audio latency
adb shell dumpsys media.audio_flinger | grep -i latency</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/audio" target="_blank">Audio Overview</a> ·
            <a href="https://developer.android.com/guide/topics/media/platform/audio" target="_blank">Audio Developer Guide</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 14. AOSP — POWER MANAGEMENT
  // ============================================================
  {
    id: "aosp-power",
    category: "14. Power Management",
    icon: "🔋",
    description: "WakeLocks, Doze, App Standby, PowerManagerService",
    topics: [
      {
        id: "power-management",
        title: "Android Power Management",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Power+Management+%26+Doze",
        imageAlt: "Doze mode state machine diagram showing active, idle, idle-maintenance states",
        caption: "Doze and App Standby dramatically reduce background battery consumption.",
        officialRef: "https://developer.android.com/training/monitoring-device-state/doze-standby",
        content: `
          <h1>Android Power Management</h1>
          <p class="subtitle">Battery life optimization from app code to kernel power states.</p>

          <h2>WakeLocks</h2>
          <p>WakeLocks prevent the CPU or screen from sleeping. <strong>Always release them</strong> — unreleased wakelocks drain the battery.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val powerManager = getSystemService(Context.POWER_SERVICE) as PowerManager
val wakeLock = powerManager.newWakeLock(
    PowerManager.PARTIAL_WAKE_LOCK, "MyApp::MyWakeLock")

// Acquire — keeps CPU awake even with screen off
wakeLock.acquire(10 * 60 * 1000L /* 10 minutes max */)

try {
    // Do your background work here
    doLongRunningTask()
} finally {
    wakeLock.release()  // ALWAYS release!
}</pre>
          </div>

          <h2>Doze Mode</h2>
          <p>Android 6.0+ enters Doze when device is stationary, unplugged, screen off. It defers all background work, syncs, and alarms.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell — Test Doze</span><button class="copy-btn">Copy Code</button></div>
            <pre># Force device into Doze
adb shell dumpsys battery unplug
adb shell dumpsys deviceidle force-idle

# Check device idle state
adb shell dumpsys deviceidle

# Exit Doze
adb shell dumpsys deviceidle unforce
adb shell dumpsys battery reset</pre>
          </div>

          <h2>Battery Historian & Diagnostics</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Reset battery stats
adb shell dumpsys batterystats --reset

# Use app for a while, then collect stats
adb shell dumpsys batterystats > stats.txt
adb bugreport > bugreport.zip

# Upload to Battery Historian web tool:
# https://bathist.ef.lc/</pre>
          </div>

          <h2>Doze Mode Stages</h2>
          <table class="topic-table">
            <thead><tr><th>Stage</th><th>Trigger</th><th>What's Deferred</th></tr></thead>
            <tbody>
              <tr><td>Active</td><td>Screen on or moving</td><td>Nothing — full access</td></tr>
              <tr><td>Light Doze</td><td>Screen off, plugged in</td><td>Jobs, alarms, network (maintenance windows allowed)</td></tr>
              <tr><td>Deep Doze</td><td>Screen off, still, on battery 30+ min</td><td>All above + FCM. Only high-priority FCM allowed</td></tr>
            </tbody>
          </table>

          <h2>App Standby Buckets</h2>
          <p>Android assigns each app to a standby bucket based on usage. Apps in lower buckets get fewer background execution opportunities.</p>
          <table class="topic-table">
            <thead><tr><th>Bucket</th><th>Description</th><th>Background Jobs</th></tr></thead>
            <tbody>
              <tr><td>ACTIVE</td><td>Currently in use</td><td>Unrestricted</td></tr>
              <tr><td>WORKING_SET</td><td>Used daily</td><td>Few hours deferred</td></tr>
              <tr><td>FREQUENT</td><td>Used weekly</td><td>Up to 24h deferred</td></tr>
              <tr><td>RARE</td><td>Used monthly</td><td>Up to 72h deferred</td></tr>
              <tr><td>RESTRICTED</td><td>Flagged by system</td><td>1 job/day max</td></tr>
            </tbody>
          </table>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val usageStatsManager = getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
val bucket = usageStatsManager.appStandbyBucket

when (bucket) {
    UsageStatsManager.STANDBY_BUCKET_ACTIVE   -> Log.d("Power", "Active bucket")
    UsageStatsManager.STANDBY_BUCKET_FREQUENT -> Log.d("Power", "Frequent bucket")
    UsageStatsManager.STANDBY_BUCKET_RARE     -> Log.d("Power", "Rare — background limited")
    UsageStatsManager.STANDBY_BUCKET_RESTRICTED -> Log.d("Power", "Restricted!")
}</pre>
          </div>

          <h2>Battery Optimization Exemption</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val pm = getSystemService(Context.POWER_SERVICE) as PowerManager

// Check if exempt (use sparingly — only VoIP/health apps qualify)
if (!pm.isIgnoringBatteryOptimizations(packageName)) {
    val intent = Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS)
    intent.data = Uri.parse("package:$packageName")
    startActivity(intent)
}

// Preferred alternative: use WorkManager with constraints
val request = OneTimeWorkRequestBuilder&lt;SyncWorker&gt;()
    .setConstraints(Constraints.Builder()
        .setRequiredNetworkType(NetworkType.CONNECTED)
        .setRequiresBatteryNotLow(true)
        .build())
    .build()
WorkManager.getInstance(this).enqueue(request)</pre>
          </div>

          <h2>PowerManagerService Internals</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check power state
adb shell dumpsys power | grep -E "mWakefulness|mHoldingWake"

# List active wakelocks
adb shell dumpsys power | grep -A2 "Wake Locks:"

# Check device idle state machine
adb shell dumpsys deviceidle

# Force idle for testing
adb shell dumpsys battery unplug
adb shell dumpsys deviceidle force-idle
adb shell dumpsys deviceidle step   # advance through Doze stages manually</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/training/monitoring-device-state/doze-standby" target="_blank">Doze & App Standby</a> ·
            <a href="https://developer.android.com/topic/performance/power" target="_blank">Power Overview</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 15. AOSP — CONNECTIVITY
  // ============================================================
  {
    id: "aosp-connectivity",
    category: "15. Connectivity Stack",
    icon: "📡",
    description: "Wi-Fi, Bluetooth, NFC, Telephony, ConnectivityService",
    topics: [
      {
        id: "wifi-bluetooth",
        title: "Wi-Fi, Bluetooth & NFC Architecture",
        image: "https://source.android.com/static/docs/core/connect/images/wifi-arch.png",
        imageAlt: "Android Wi-Fi architecture showing framework, Wi-Fi HAL and kernel driver layers",
        caption: "Android's connectivity stack manages Wi-Fi, Bluetooth, and NFC through layered HAL interfaces.",
        officialRef: "https://source.android.com/docs/core/connect",
        content: `
          <h1>Android Connectivity Stack</h1>
          <p class="subtitle">Wi-Fi, Bluetooth, NFC — from the app API to the radio firmware.</p>

          <h2>Wi-Fi Architecture</h2>
          <ul>
            <li><strong>WifiManager:</strong> App-facing API for Wi-Fi control</li>
            <li><strong>WifiService:</strong> System service managing Wi-Fi state</li>
            <li><strong>Wi-Fi HAL (AIDL):</strong> Vendor implementation via wificond</li>
            <li><strong>nl80211 / cfg80211:</strong> Linux kernel wireless subsystem</li>
            <li><strong>Firmware:</strong> Runs on the Wi-Fi chip</li>
          </ul>

          <h2>Bluetooth Architecture</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin — BLE Scan</span><button class="copy-btn">Copy Code</button></div>
            <pre>val bluetoothManager = getSystemService(BluetoothManager::class.java)
val adapter = bluetoothManager.adapter
val scanner = adapter.bluetoothLeScanner

val scanSettings = ScanSettings.Builder()
    .setScanMode(ScanSettings.SCAN_MODE_LOW_LATENCY)
    .build()

val scanFilter = ScanFilter.Builder()
    .setServiceUuid(ParcelUuid.fromString("0000180D-0000-1000-8000-00805f9b34fb")) // Heart Rate
    .build()

val callback = object : ScanCallback() {
    override fun onScanResult(callbackType: Int, result: ScanResult) {
        Log.d("BLE", "Found: \${result.device.name} RSSI=\${result.rssi}")
    }
}
scanner.startScan(listOf(scanFilter), scanSettings, callback)</pre>
          </div>

          <h2>NFC</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin — NFC Tag Read</span><button class="copy-btn">Copy Code</button></div>
            <pre>class NfcActivity : AppCompatActivity() {
    private lateinit var nfcAdapter: NfcAdapter

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        if (NfcAdapter.ACTION_NDEF_DISCOVERED == intent.action) {
            val tag = intent.getParcelableExtra&lt;Tag&gt;(NfcAdapter.EXTRA_TAG)
            val ndef = Ndef.get(tag)
            ndef?.connect()
            val message = ndef?.ndefMessage
            message?.records?.forEach { record ->
                Log.d("NFC", "Record: \${String(record.payload)}")
            }
            ndef?.close()
        }
    }
}</pre>
          </div>

          <h2>ConnectivityManager & NetworkCallback</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val connectivityManager = getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager

val request = NetworkRequest.Builder()
    .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
    .addCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)
    .build()

val callback = object : ConnectivityManager.NetworkCallback() {
    override fun onAvailable(network: Network) {
        Log.d("Net", "Network available")
    }
    override fun onLost(network: Network) {
        Log.d("Net", "Network lost")
    }
    override fun onCapabilitiesChanged(network: Network, capabilities: NetworkCapabilities) {
        val isWifi = capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)
        val bandwidth = capabilities.linkDownstreamBandwidthKbps
        Log.d("Net", "WiFi=$isWifi bandwidth=\${bandwidth}kbps")
    }
}
connectivityManager.registerNetworkCallback(request, callback)

// Unregister in onStop()
override fun onStop() {
    connectivityManager.unregisterNetworkCallback(callback)
    super.onStop()
}</pre>
          </div>

          <h2>BLE GATT Profile — Heart Rate Sensor</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val HEART_RATE_MEASUREMENT = UUID.fromString("00002A37-0000-1000-8000-00805f9b34fb")
val HEART_RATE_SERVICE     = UUID.fromString("0000180D-0000-1000-8000-00805f9b34fb")
val CCCD                   = UUID.fromString("00002902-0000-1000-8000-00805f9b34fb")

val gattCallback = object : BluetoothGattCallback() {
    override fun onConnectionStateChange(gatt: BluetoothGatt, status: Int, newState: Int) {
        if (newState == BluetoothProfile.STATE_CONNECTED) gatt.discoverServices()
    }

    override fun onServicesDiscovered(gatt: BluetoothGatt, status: Int) {
        val hrChar = gatt.getService(HEART_RATE_SERVICE)
                        ?.getCharacteristic(HEART_RATE_MEASUREMENT) ?: return
        gatt.setCharacteristicNotification(hrChar, true)
        hrChar.getDescriptor(CCCD)?.let { desc ->
            desc.value = BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE
            gatt.writeDescriptor(desc)
        }
    }

    override fun onCharacteristicChanged(gatt: BluetoothGatt, characteristic: BluetoothGattCharacteristic) {
        if (characteristic.uuid == HEART_RATE_MEASUREMENT) {
            val bpm = characteristic.value[1].toInt() and 0xFF
            Log.d("BLE", "Heart rate: $bpm bpm")
        }
    }
}
device.connectGatt(context, false, gattCallback)</pre>
          </div>

          <h2>Wi-Fi Direct (P2P)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Wi-Fi Direct lets two devices connect without an AP (hotspot)
val wifiP2pManager = getSystemService(Context.WIFI_P2P_SERVICE) as WifiP2pManager
val channel = wifiP2pManager.initialize(this, mainLooper, null)

// Discover peers
wifiP2pManager.discoverPeers(channel, object : WifiP2pManager.ActionListener {
    override fun onSuccess() = Unit
    override fun onFailure(reason: Int) { Log.e("P2P", "Discover failed: $reason") }
})

// Register broadcast receiver to receive PEERS_CHANGED action
// Then call wifiP2pManager.requestPeers() to get the list</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/core/connect" target="_blank">Connectivity Overview</a> ·
            <a href="https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview" target="_blank">BLE Guide</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 16. AOSP — SECURITY
  // ============================================================
  {
    id: "aosp-security",
    category: "16. Android Security",
    icon: "🔒",
    description: "Sandboxing, SELinux, Keystore, Verified Boot, Permissions",
    topics: [
      {
        id: "android-security-model",
        title: "Android Security Model",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Android+Security+Model",
        imageAlt: "Android security architecture layers from hardware to applications",
        caption: "Android's defense-in-depth uses hardware security, kernel MAC, and application sandboxing.",
        officialRef: "https://source.android.com/docs/security",
        content: `
          <h1>Android Security Model</h1>
          <p class="subtitle">Multiple security layers working together to protect users and system integrity.</p>

          <h2>Security Layers</h2>
          <ol>
            <li><strong>Hardware Security:</strong> Secure Enclave, TrustZone, StrongBox Keymaster</li>
            <li><strong>Verified Boot:</strong> Cryptographic chain-of-trust from bootloader to system partition</li>
            <li><strong>Kernel Security:</strong> SELinux MAC, seccomp filters, KASLR, PAN/UAO</li>
            <li><strong>Process Sandbox:</strong> Each app gets unique UID, isolated in /data/data/&lt;package&gt;</li>
            <li><strong>Permissions:</strong> User grants sensitive permissions at runtime (Camera, Location, etc.)</li>
          </ol>

          <h2>Android Keystore</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Generate a key stored in Android Keystore (backed by hardware if available)
val keyGenerator = KeyGenerator.getInstance(
    KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore")

keyGenerator.init(KeyGenParameterSpec.Builder(
    "my_encryption_key",
    KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
).apply {
    setBlockModes(KeyProperties.BLOCK_MODE_GCM)
    setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
    setKeySize(256)
    // Require user authentication (biometric)
    setUserAuthenticationRequired(true)
    setUserAuthenticationParameters(30, KeyProperties.AUTH_BIOMETRIC_STRONG)
}.build())

val secretKey = keyGenerator.generateKey()

// Encrypt data
val cipher = Cipher.getInstance("AES/GCM/NoPadding")
cipher.init(Cipher.ENCRYPT_MODE, secretKey)
val encrypted = cipher.doFinal(plaintext.toByteArray())</pre>
          </div>

          <h2>Verified Boot</h2>
          <p>Android Verified Boot (AVB) ensures every piece of code executed is trusted:</p>
          <ul>
            <li>Bootloader verifies kernel signature</li>
            <li>Kernel verifies <code>system</code>, <code>vendor</code>, <code>product</code> partitions via dm-verity</li>
            <li>Any modification → device shows orange/red warning on boot</li>
          </ul>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Check verified boot state
adb shell getprop ro.boot.verifiedbootstate
# → green (unmodified) | yellow (custom key) | orange (unlocked)

# Check dm-verity
adb shell cat /proc/mounts | grep verity</pre>
          </div>

          <h2>Runtime Permissions — Best Practices</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Use ActivityResultContracts for modern permission handling
val requestPermissions = registerForActivityResult(
    ActivityResultContracts.RequestMultiplePermissions()
) { permissions ->
    val cameraGranted = permissions[Manifest.permission.CAMERA] ?: false
    val micGranted    = permissions[Manifest.permission.RECORD_AUDIO] ?: false
    if (cameraGranted && micGranted) startVideoRecording()
    else showPermissionExplanation()
}

// ✅ Request only when needed (on button click), not on app launch
btnRecord.setOnClickListener {
    requestPermissions.launch(arrayOf(
        Manifest.permission.CAMERA,
        Manifest.permission.RECORD_AUDIO
    ))
}</pre>
          </div>

          <h2>Biometric Authentication</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val biometricManager = BiometricManager.from(this)
if (biometricManager.canAuthenticate(BIOMETRIC_STRONG or DEVICE_CREDENTIAL) ==
    BiometricManager.BIOMETRIC_SUCCESS) {

    val promptInfo = BiometricPrompt.PromptInfo.Builder()
        .setTitle("Unlock App")
        .setSubtitle("Use fingerprint or face ID")
        .setAllowedAuthenticators(BIOMETRIC_STRONG or DEVICE_CREDENTIAL)
        .build()

    BiometricPrompt(this, mainExecutor, object : BiometricPrompt.AuthenticationCallback() {
        override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
            // result.cryptoObject?.cipher for hardware-backed cryptographic operations
            unlockApp()
        }
        override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
            showError(errString.toString())
        }
    }).authenticate(promptInfo)
}</pre>
          </div>

          <h2>Play Integrity API</h2>
          <p>Verify your app is running on a genuine Android device and hasn't been tampered with.</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// implementation("com.google.android.play:integrity:1.3.0")

val integrityManager = IntegrityManagerFactory.create(applicationContext)

integrityManager.requestIntegrityToken(
    IntegrityTokenRequest.builder()
        .setNonce(serverNonce)  // server-generated nonce prevents replay attacks
        .build()
).addOnSuccessListener { response ->
    // Send token to your backend server
    // Server decodes JWT token → checks:
    //   requestDetails.requestPackageName (correct app?)
    //   appIntegrity.appRecognitionVerdict (PLAY_RECOGNIZED / UNEVALUATED)
    //   deviceIntegrity.deviceRecognitionVerdict (MEETS_DEVICE_INTEGRITY)
    //   accountDetails.appLicensingVerdict (LICENSED / UNLICENSED)
    sendToServer(response.token())
}.addOnFailureListener { e ->
    Log.e("Integrity", "Check failed: \${e.message}")
}</pre>
          </div>

          <h2>App Sandbox & Security Checklist</h2>
          <ul>
            <li>✅ Use <code>EncryptedSharedPreferences</code> for sensitive local data</li>
            <li>✅ Use Android Keystore for all cryptographic keys (never store raw keys)</li>
            <li>✅ Pin SSL certificates or use Network Security Config for network calls</li>
            <li>✅ Disable WebView JavaScript when not needed; use <code>setAllowFileAccess(false)</code></li>
            <li>✅ Avoid logging sensitive data — use <code>BuildConfig.DEBUG</code> guards</li>
            <li>✅ Export only necessary Activities/Services/Receivers in Manifest</li>
            <li>✅ Use <code>FLAG_SECURE</code> on sensitive screens to prevent screenshotting</li>
          </ul>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://source.android.com/docs/security" target="_blank">Android Security</a> ·
            <a href="https://source.android.com/docs/security/features/verified-boot" target="_blank">Verified Boot</a> ·
            <a href="https://developer.android.com/training/articles/keystore" target="_blank">Keystore Guide</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 17. ADVANCED APP DEVELOPMENT
  // ============================================================
  {
    id: "advanced-app-dev",
    category: "17. Advanced App Development",
    icon: "🚀",
    description: "WorkManager, background processing, advanced Compose, performance",
    topics: [
      {
        id: "workmanager",
        title: "WorkManager & Background Processing",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=WorkManager+%26+Background+Tasks",
        imageAlt: "WorkManager execution flow showing chaining, constraints and retries",
        caption: "WorkManager is the recommended API for deferrable, guaranteed background work.",
        officialRef: "https://developer.android.com/topic/libraries/architecture/workmanager",
        content: `
          <h1>WorkManager</h1>
          <p class="subtitle">Deferrable, guaranteed background execution — survives process death and reboots.</p>

          <h2>WorkManager vs Alternatives</h2>
          <table class="topic-table">
            <thead><tr><th>API</th><th>Use When</th><th>Guaranteed?</th></tr></thead>
            <tbody>
              <tr><td>WorkManager</td><td>Deferrable, must run eventually (backup, sync)</td><td>✅ Yes</td></tr>
              <tr><td>Foreground Service</td><td>Immediate, user-visible work (music, download)</td><td>✅ Yes (user aware)</td></tr>
              <tr><td>AlarmManager</td><td>Exact time triggers (calendar alarm)</td><td>✅ Exact</td></tr>
              <tr><td>Coroutine / Thread</td><td>In-process work while app is running</td><td>❌ Process death</td></tr>
            </tbody>
          </table>

          <h2>Creating a Worker</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>class SyncWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {

    override suspend fun doWork(): Result {
        return try {
            val userId = inputData.getString("user_id") ?: return Result.failure()
            syncRepository.syncUser(userId)
            Result.success()
        } catch (e: Exception) {
            if (runAttemptCount < 3) Result.retry()
            else Result.failure()
        }
    }
}

// Enqueue periodic sync
val syncRequest = PeriodicWorkRequestBuilder&lt;SyncWorker&gt;(
    repeatInterval = 1, repeatIntervalTimeUnit = TimeUnit.HOURS
)
.setConstraints(Constraints.Builder()
    .setRequiredNetworkType(NetworkType.CONNECTED)
    .setRequiresBatteryNotLow(true)
    .build())
.setInputData(workDataOf("user_id" to "123"))
.build()

WorkManager.getInstance(context)
    .enqueueUniquePeriodicWork("sync", ExistingPeriodicWorkPolicy.KEEP, syncRequest)</pre>
          </div>

          <h2>Chaining Workers</h2>
          <p>Execute workers in sequence or parallel using <code>beginWith</code> / <code>then</code>:</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>val compressRequest = OneTimeWorkRequestBuilder&lt;CompressWorker&gt;().build()
val uploadRequest   = OneTimeWorkRequestBuilder&lt;UploadWorker&gt;().build()
val notifyRequest   = OneTimeWorkRequestBuilder&lt;NotifyWorker&gt;().build()

// Sequential chain: compress → upload → notify
WorkManager.getInstance(context)
    .beginWith(compressRequest)
    .then(uploadRequest)
    .then(notifyRequest)
    .enqueue()

// Parallel fan-in: run two workers, then merge
val syncA = OneTimeWorkRequestBuilder&lt;SyncAWorker&gt;().build()
val syncB = OneTimeWorkRequestBuilder&lt;SyncBWorker&gt;().build()
val merge = OneTimeWorkRequestBuilder&lt;MergeWorker&gt;().build()

WorkManager.getInstance(context)
    .beginWith(listOf(syncA, syncB))  // run in parallel
    .then(merge)                       // waits for both
    .enqueue()

// Pass output from one worker to the next
class UploadWorker(ctx: Context, params: WorkerParameters) : CoroutineWorker(ctx, params) {
    override suspend fun doWork(): Result {
        val filePath = inputData.getString("file_path") ?: return Result.failure()
        val url = uploadFile(filePath)
        val output = workDataOf("uploaded_url" to url)
        return Result.success(output)
    }
}</pre>
          </div>

          <h2>Expedited Work (Android 12+)</h2>
          <p>For user-facing tasks that must run immediately — WorkManager requests a foreground service slot:</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Request expedited execution
val expeditedRequest = OneTimeWorkRequestBuilder&lt;SyncWorker&gt;()
    .setExpedited(OutOfQuotaPolicy.RUN_AS_NON_EXPEDITED_WORK_REQUEST)
    .build()

// Worker must override getForegroundInfo() for pre-Android 12 compat
class SyncWorker(ctx: Context, params: WorkerParameters) : CoroutineWorker(ctx, params) {
    override suspend fun doWork(): Result { /* ... */ return Result.success() }

    override suspend fun getForegroundInfo(): ForegroundInfo {
        val notification = NotificationCompat.Builder(applicationContext, "sync_channel")
            .setContentTitle("Syncing…")
            .setSmallIcon(R.drawable.ic_sync)
            .build()
        return ForegroundInfo(1001, notification)
    }
}</pre>
          </div>

          <h2>Observing Work State</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Observe with LiveData (Activity/Fragment)
WorkManager.getInstance(context)
    .getWorkInfoByIdLiveData(syncRequest.id)
    .observe(viewLifecycleOwner) { workInfo ->
        workInfo ?: return@observe
        when (workInfo.state) {
            WorkInfo.State.RUNNING   -> showProgress()
            WorkInfo.State.SUCCEEDED -> showSuccess(workInfo.outputData.getString("uploaded_url"))
            WorkInfo.State.FAILED    -> showError()
            WorkInfo.State.CANCELLED -> Unit
            else -> Unit
        }
    }

// Observe with Flow (ViewModel)
WorkManager.getInstance(context)
    .getWorkInfoByIdFlow(syncRequest.id)
    .collect { workInfo -> /* update StateFlow */ }</pre>
          </div>

          <h2>WorkManager Platform Dispatch</h2>
          <table class="topic-table">
            <thead><tr><th>Android API</th><th>Underlying Mechanism</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>API 31+</td><td>JobScheduler + expedited jobs</td><td>Battery-aware, respects Doze</td></tr>
              <tr><td>API 23–30</td><td>JobScheduler</td><td>Batches work efficiently</td></tr>
              <tr><td>API 14–22</td><td>AlarmManager + BroadcastReceiver</td><td>Legacy fallback</td></tr>
            </tbody>
          </table>

          <h2>Testing WorkManager</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Use WorkManagerTestInitHelper in tests
@RunWith(AndroidJUnit4::class)
class SyncWorkerTest {
    private lateinit var workManager: WorkManager

    @Before
    fun setup() {
        val context = ApplicationProvider.getApplicationContext&lt;Context&gt;()
        WorkManagerTestInitHelper.initializeTestWorkManager(context)
        workManager = WorkManager.getInstance(context)
    }

    @Test
    fun syncWorker_succeeds() {
        val request = OneTimeWorkRequestBuilder&lt;SyncWorker&gt;().build()
        workManager.enqueue(request).result.get()
        val workInfo = workManager.getWorkInfoById(request.id).get()
        assertThat(workInfo.state).isEqualTo(WorkInfo.State.SUCCEEDED)
    }
}</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/topic/libraries/architecture/workmanager" target="_blank">WorkManager Guide</a> ·
            <a href="https://developer.android.com/guide/background" target="_blank">Background Work Overview</a>
          </div>
        `
      },
      {
        id: "app-performance",
        title: "App Performance & Profiling",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=App+Performance+Profiling",
        imageAlt: "Android Studio profilers showing CPU, Memory, and Network tabs",
        caption: "Android Studio profilers identify CPU hotspots, memory leaks, and frame drops.",
        officialRef: "https://developer.android.com/studio/profile",
        content: `
          <h1>App Performance & Profiling</h1>
          <p class="subtitle">Find and fix CPU, memory, and rendering bottlenecks.</p>

          <h2>Android Studio Profilers</h2>
          <ul>
            <li><strong>CPU Profiler:</strong> Method traces, system traces, detect main-thread blocking</li>
            <li><strong>Memory Profiler:</strong> Heap dumps, allocation tracking, find leaks</li>
            <li><strong>Network Profiler:</strong> Request timing, payload sizes</li>
            <li><strong>Energy Profiler:</strong> Battery drain by component</li>
          </ul>

          <h2>Baseline Profiles</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Generate Baseline Profile
# 1. Add dependency
# implementation("androidx.profileinstaller:profileinstaller:1.3.0")
# testImplementation("androidx.benchmark:benchmark-macro-junit4:1.2.0")

# 2. Run profile generator
./gradlew :app:generateBaselineProfile

# 3. Profile is stored in src/main/baseline-prof.txt
# ART pre-compiles these methods on install → faster startup</pre>
          </div>

          <h2>Memory Leak Detection (LeakCanary)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// build.gradle.kts
debugImplementation("com.squareup.leakcanary:leakcanary-android:2.12")
// That's it! LeakCanary auto-detects leaks in debug builds

// Common leaks to avoid:
// ❌ Storing Activity context in a singleton
// ❌ Non-static inner class (anonymous Runnable) holding outer class ref
// ❌ Handler posted after Activity destroyed
// ✅ Use applicationContext for long-lived objects
// ✅ Use WeakReference when caching Views</pre>
          </div>

          <h2>Compose Recomposition Debugging</h2>
          <p>Unnecessary recompositions are the #1 Compose performance issue. Use these techniques to identify and fix them:</p>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// ❌ Unstable lambda causes recomposition every time parent recomposes
@Composable
fun UserList(users: List&lt;User&gt;) {
    users.forEach { user ->
        UserCard(user = user, onClick = { /* creates new lambda each time */ })
    }
}

// ✅ Stable lambda via remember or moving state up
@Composable
fun UserList(users: List&lt;User&gt;, onUserClick: (User) -> Unit) {
    users.forEach { user ->
        UserCard(user = user, onClick = onUserClick) // stable reference
    }
}

// ✅ @Stable / @Immutable — tell the compiler your class won't change unexpectedly
@Immutable
data class UserUiState(val users: List&lt;User&gt;, val isLoading: Boolean)

// ✅ derivedStateOf — compute derived state only when inputs change
val sortedUsers by remember {
    derivedStateOf { users.sortedBy { it.name } }
}

// Layout Inspector → "Show Recomposition Counts" in Android Studio Hedgehog+
// Recomposition count in blue = skipped (good), orange = recomposed (investigate)</pre>
          </div>

          <h2>Tracing with Perfetto & Systrace</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Capture a Perfetto trace (5-second window)
adb shell perfetto \\
    -c - --txt \\
    -o /data/misc/perfetto-traces/trace.pftrace &lt;&lt;EOF
buffers: { size_kb: 63488 fill_policy: DISCARD }
data_sources: { config { name: "linux.process_stats" } }
data_sources: { config { name: "track_event" } }
duration_ms: 5000
EOF

# Pull the trace
adb pull /data/misc/perfetto-traces/trace.pftrace ~/Desktop/
# Open at: https://ui.perfetto.dev

# Quick systrace via adb (older, still useful)
adb shell atrace --async_start -a com.example.myapp gfx view
adb shell atrace --async_stop -o /sdcard/trace.ctrace
adb pull /sdcard/trace.ctrace</pre>
          </div>

          <h2>Custom Trace Sections in Code</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>import androidx.tracing.trace

// Wrap expensive operations in named trace sections — visible in Perfetto
suspend fun loadUsers(): List&lt;User&gt; = trace("loadUsers") {
    trace("fetch-network") { api.getUsers() }
}

// Compose tracing (shows composable names in Perfetto)
// dependencies: implementation("androidx.compose.runtime:runtime-tracing:1.0.0-beta01")</pre>
          </div>

          <h2>Startup Time Optimization</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// App Startup library — replace ContentProvider chains
// build.gradle.kts
implementation("androidx.startup:startup-runtime:1.1.1")

// Define an initializer (replaces old ContentProvider trick)
class TimberInitializer : Initializer&lt;Unit&gt; {
    override fun create(context: Context) {
        if (BuildConfig.DEBUG) Timber.plant(Timber.DebugTree())
    }
    override fun dependencies(): List&lt;Class&lt;out Initializer&lt;*&gt;&gt;&gt; = emptyList()
}

// AndroidManifest.xml — declare in provider metadata
// &lt;meta-data android:name="com.example.TimberInitializer"
//            android:value="androidx.startup" /&gt;

// Measure cold start on device
adb shell am start-activity -W -n com.example.app/.MainActivity
// Look for "TotalTime:" — target &lt; 500ms for perceived instant launch</pre>
          </div>

          <h2>StrictMode — Catch Main-Thread Violations Early</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// In Application.onCreate() — debug builds only
if (BuildConfig.DEBUG) {
    StrictMode.setThreadPolicy(
        StrictMode.ThreadPolicy.Builder()
            .detectDiskReads()
            .detectDiskWrites()
            .detectNetwork()        // any network on main thread
            .penaltyLog()           // logcat warning
            .penaltyFlashScreen()   // visual flash
            .build()
    )
    StrictMode.setVmPolicy(
        StrictMode.VmPolicy.Builder()
            .detectLeakedSqlLiteObjects()
            .detectLeakedClosableObjects()
            .penaltyLog()
            .build()
    )
}</pre>
          </div>

          <h2>Key Performance Metrics</h2>
          <table class="topic-table">
            <thead><tr><th>Metric</th><th>Tool</th><th>Target</th></tr></thead>
            <tbody>
              <tr><td>Cold start time</td><td>adb am start -W / Perfetto</td><td>&lt; 500 ms</td></tr>
              <tr><td>Frame render time</td><td>gfxinfo / Layout Inspector</td><td>&lt; 16 ms (60 fps)</td></tr>
              <tr><td>ANR-free main thread</td><td>StrictMode / Profiler</td><td>No blocking I/O</td></tr>
              <tr><td>Memory / heap</td><td>Memory Profiler / LeakCanary</td><td>No retained leaks</td></tr>
              <tr><td>APK / AAB size</td><td>Build Analyzer / bundletool</td><td>Minimize with R8 + resources shrink</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/studio/profile" target="_blank">Android Profilers</a> ·
            <a href="https://developer.android.com/topic/performance/baselineprofiles" target="_blank">Baseline Profiles</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 18. TESTING
  // ============================================================
  {
    id: "testing",
    category: "18. Testing",
    icon: "🧪",
    description: "Unit tests, instrumented tests, Espresso, Compose UI testing",
    topics: [
      {
        id: "unit-testing",
        title: "Unit Testing with JUnit & Mockk",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Android+Testing+Strategy",
        imageAlt: "Android testing pyramid showing unit tests at base, integration in middle, E2E at top",
        caption: "The testing pyramid: write the most unit tests, fewer integration tests, fewest E2E tests.",
        officialRef: "https://developer.android.com/training/testing",
        content: `
          <h1>Android Testing</h1>
          <p class="subtitle">Build confidence with a layered testing strategy.</p>

          <h2>Unit Tests (JVM — fast, no device needed)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// src/test/java/com/example/UsersViewModelTest.kt
@ExtendWith(CoroutinesTestExtension::class)
class UsersViewModelTest {
    private lateinit var viewModel: UsersViewModel
    private val repository = mockk&lt;UserRepository&gt;()

    @BeforeEach
    fun setup() {
        viewModel = UsersViewModel(repository)
    }

    @Test
    fun \`loadUsers - success - emits users list\`() = runTest {
        val fakeUsers = listOf(User(1, "Alice"), User(2, "Bob"))
        coEvery { repository.getUsers() } returns flowOf(fakeUsers)

        viewModel.uiState.test {
            awaitItem() // Loading state
            val successState = awaitItem() as UiState.Success
            assertThat(successState.users).isEqualTo(fakeUsers)
        }
    }

    @Test
    fun \`loadUsers - error - emits error state\`() = runTest {
        coEvery { repository.getUsers() } throws IOException("No network")
        viewModel.uiState.test {
            awaitItem()
            val errorState = awaitItem() as UiState.Error
            assertThat(errorState.message).contains("No network")
        }
    }
}</pre>
          </div>

          <h2>Compose UI Tests</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@RunWith(AndroidJUnit4::class)
class UserListScreenTest {
    @get:Rule
    val composeTestRule = createComposeRule()

    @Test
    fun userList_displaysUsers() {
        val users = listOf(User(1, "Alice", "alice@example.com"))
        composeTestRule.setContent {
            MaterialTheme {
                UserListScreen(users = users, onUserClick = {})
            }
        }
        composeTestRule.onNodeWithText("Alice").assertIsDisplayed()
        composeTestRule.onNodeWithText("alice@example.com").assertIsDisplayed()
    }

    @Test
    fun userCard_click_invokesCallback() {
        var clicked = false
        composeTestRule.setContent {
            UserCard(user = User(1, "Bob", "bob@example.com"), onClick = { clicked = true })
        }
        composeTestRule.onNodeWithText("Bob").performClick()
        assertThat(clicked).isTrue()
    }
}</pre>
          </div>

          <h2>Room In-Memory Database Tests</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@RunWith(AndroidJUnit4::class)
class UserDaoTest {
    private lateinit var db: AppDatabase
    private lateinit var userDao: UserDao

    @Before
    fun createDb() {
        val context = ApplicationProvider.getApplicationContext&lt;Context&gt;()
        // In-memory DB: no disk I/O, destroyed after test
        db = Room.inMemoryDatabaseBuilder(context, AppDatabase::class.java)
            .allowMainThreadQueries() // OK in tests
            .build()
        userDao = db.userDao()
    }

    @After
    fun closeDb() = db.close()

    @Test
    fun insertUser_and_retrieveById() = runTest {
        val user = User(id = 1, name = "Alice", email = "alice@example.com")
        userDao.insert(user)
        val loaded = userDao.getById(1)
        assertThat(loaded).isEqualTo(user)
    }

    @Test
    fun deleteUser_notFoundAfterDeletion() = runTest {
        val user = User(id = 2, name = "Bob", email = "bob@example.com")
        userDao.insert(user)
        userDao.delete(user)
        assertThat(userDao.getById(2)).isNull()
    }
}</pre>
          </div>

          <h2>Flow Testing with Turbine</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// build.gradle.kts
testImplementation("app.cash.turbine:turbine:1.0.0")

@Test
fun viewModel_emitsLoadingThenSuccess() = runTest {
    val fakeUsers = listOf(User(1, "Alice", "a@b.com"))
    coEvery { repository.getUsers() } returns flowOf(fakeUsers)

    viewModel.uiState.test {
        // First emission should be Loading
        assertThat(awaitItem()).isInstanceOf(UiState.Loading::class.java)
        // Second emission should be Success with our users
        val success = awaitItem() as UiState.Success
        assertThat(success.users).containsExactlyElementsIn(fakeUsers)
        cancelAndIgnoreRemainingEvents()
    }
}

// Testing SharedFlow emissions
@Test
fun viewModel_sendsErrorEvent_onFailure() = runTest {
    coEvery { repository.getUsers() } throws IOException("timeout")

    viewModel.events.test {
        viewModel.loadUsers()
        val event = awaitItem()
        assertThat(event).isInstanceOf(UiEvent.ShowError::class.java)
    }
}</pre>
          </div>

          <h2>Espresso UI Tests (View-based)</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>@RunWith(AndroidJUnit4::class)
class LoginActivityTest {
    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)

    @Test
    fun validLogin_navigatesToHome() {
        onView(withId(R.id.etEmail)).perform(typeText("user@example.com"), closeSoftKeyboard())
        onView(withId(R.id.etPassword)).perform(typeText("password123"), closeSoftKeyboard())
        onView(withId(R.id.btnLogin)).perform(click())

        // Verify home screen is shown
        onView(withId(R.id.homeTitle)).check(matches(isDisplayed()))
        onView(withText("Welcome")).check(matches(isDisplayed()))
    }

    @Test
    fun emptyEmail_showsValidationError() {
        onView(withId(R.id.btnLogin)).perform(click())
        onView(withText("Email is required")).check(matches(isDisplayed()))
    }
}</pre>
          </div>

          <h2>Hilt Test Setup</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Replace real dependencies with fakes in instrumented tests
@HiltAndroidTest
@RunWith(AndroidJUnit4::class)
class UserScreenTest {
    @get:Rule(order = 0) val hiltRule = HiltAndroidRule(this)
    @get:Rule(order = 1) val composeRule = createAndroidComposeRule&lt;MainActivity&gt;()

    @BindValue @JvmField
    val userRepository: UserRepository = FakeUserRepository()

    @Test
    fun screen_showsUsers_fromFakeRepo() {
        composeRule.onNodeWithText("Alice").assertIsDisplayed()
    }
}

// build.gradle.kts test dependencies
androidTestImplementation("com.google.dagger:hilt-android-testing:2.48")
kaptAndroidTest("com.google.dagger:hilt-android-compiler:2.48")
testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3")
testImplementation("io.mockk:mockk:1.13.8")
testImplementation("app.cash.turbine:turbine:1.0.0")</pre>
          </div>

          <h2>Testing Pyramid Summary</h2>
          <table class="topic-table">
            <thead><tr><th>Layer</th><th>Framework</th><th>Speed</th><th>What to Test</th></tr></thead>
            <tbody>
              <tr><td>Unit (JVM)</td><td>JUnit 5 + Mockk + Turbine</td><td>Fast (&lt;1s)</td><td>ViewModels, Use Cases, Repositories</td></tr>
              <tr><td>Integration</td><td>JUnit + Room in-memory</td><td>Medium</td><td>DAOs, database migrations</td></tr>
              <tr><td>UI (Compose)</td><td>Compose Test Rule</td><td>Medium</td><td>Composable rendering, interactions</td></tr>
              <tr><td>E2E (Instrumented)</td><td>Espresso / UI Automator</td><td>Slow</td><td>Full user flows on real device</td></tr>
            </tbody>
          </table>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/training/testing" target="_blank">Testing Overview</a> ·
            <a href="https://developer.android.com/jetpack/compose/testing" target="_blank">Compose Testing</a>
          </div>
        `
      }
    ]
  },

  // ============================================================
  // 19. APP PUBLISHING
  // ============================================================
  {
    id: "publishing",
    category: "19. App Publishing",
    icon: "📦",
    description: "Signing, AAB, Play Store, CI/CD",
    topics: [
      {
        id: "publish-guide",
        title: "Signing, AAB & Play Store Publishing",
        image: "https://placehold.co/1200x400/073042/3ddc84?text=Google+Play+Publishing",
        imageAlt: "Google Play Store developer console dashboard",
        caption: "Android App Bundles (AAB) let Play Store deliver optimized, smaller APKs per device.",
        officialRef: "https://developer.android.com/distribute/play-console",
        content: `
          <h1>App Signing & Publishing</h1>
          <p class="subtitle">Prepare your app for the Google Play Store.</p>

          <h2>Generate a Release Signing Key</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre>keytool -genkey -v \\
    -keystore my-release-key.jks \\
    -keyalg RSA -keysize 2048 -validity 10000 \\
    -alias my-key-alias</pre>
          </div>

          <h2>Configure Signing in build.gradle.kts</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin DSL</span><button class="copy-btn">Copy Code</button></div>
            <pre>android {
    signingConfigs {
        create("release") {
            storeFile = file(System.getenv("KEYSTORE_PATH") ?: "my-release-key.jks")
            storePassword = System.getenv("KEYSTORE_PASSWORD")
            keyAlias = System.getenv("KEY_ALIAS")
            keyPassword = System.getenv("KEY_PASSWORD")
        }
    }
    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            signingConfig = signingConfigs.getByName("release")
        }
    }
}</pre>
          </div>

          <h2>Build & Upload AAB</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Build release AAB (Android App Bundle)
./gradlew :app:bundleRelease

# Output: app/build/outputs/bundle/release/app-release.aab
# Upload this .aab file to Play Console

# Alternatively, build APK
./gradlew :app:assembleRelease</pre>
          </div>

          <h2>CI/CD with GitHub Actions</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">YAML</span><button class="copy-btn">Copy Code</button></div>
            <pre># .github/workflows/release.yml
name: Release Build

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Cache Gradle packages
        uses: actions/cache@v3
        with:
          path: ~/.gradle/caches
          key: gradle-\${{ hashFiles('**/*.gradle.kts') }}

      - name: Run unit tests
        run: ./gradlew testReleaseUnitTest

      - name: Build release AAB
        env:
          KEYSTORE_PASSWORD: \${{ secrets.KEYSTORE_PASSWORD }}
          KEY_ALIAS: \${{ secrets.KEY_ALIAS }}
          KEY_PASSWORD: \${{ secrets.KEY_PASSWORD }}
        run: ./gradlew :app:bundleRelease

      - name: Upload AAB artifact
        uses: actions/upload-artifact@v4
        with:
          name: app-release.aab
          path: app/build/outputs/bundle/release/app-release.aab

      - name: Upload to Play Store (Internal Track)
        uses: r0adkll/upload-google-play@v1
        with:
          serviceAccountJsonPlainText: \${{ secrets.SERVICE_ACCOUNT_JSON }}
          packageName: com.example.myapp
          releaseFiles: app/build/outputs/bundle/release/app-release.aab
          track: internal</pre>
          </div>

          <h2>Play Store Release Tracks</h2>
          <table class="topic-table">
            <thead><tr><th>Track</th><th>Audience</th><th>Rollout</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td>Internal testing</td><td>Up to 100 testers</td><td>Instant (&lt;1 hr review)</td><td>Dev team smoke tests</td></tr>
              <tr><td>Closed testing (Alpha)</td><td>Invited groups</td><td>Fast review</td><td>QA / beta partners</td></tr>
              <tr><td>Open testing (Beta)</td><td>Anyone who opts in</td><td>Standard review</td><td>Public beta feedback</td></tr>
              <tr><td>Production</td><td>All users</td><td>Staged rollout (1%→100%)</td><td>Full release with halt option</td></tr>
            </tbody>
          </table>

          <h2>Staged Rollout & Halt</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Shell</span><button class="copy-btn">Copy Code</button></div>
            <pre># Via bundletool — inspect your AAB before upload
bundletool build-apks \\
    --bundle=app-release.aab \\
    --output=app.apks \\
    --ks=my-release-key.jks \\
    --ks-key-alias=my-key-alias

# Estimate download size per device config
bundletool get-size total --apks=app.apks

# Play Console staged rollout example
# Start at 10% → monitor crash rate & ANR → expand to 50% → 100%
# If crash rate spikes → click "Halt rollout" in Play Console immediately</pre>
          </div>

          <h2>Pre-Launch Report (Firebase Test Lab)</h2>
          <p>When you upload an AAB/APK to any track, Play Console automatically runs your app on a set of real devices via Firebase Test Lab and reports:</p>
          <ul>
            <li>Crashes and ANRs on specific device/OS combinations</li>
            <li>Accessibility issues (touch target size, contrast ratio)</li>
            <li>Screenshots from each device for visual review</li>
            <li>Security vulnerabilities detected by Play Protect</li>
          </ul>

          <h2>App Release Checklist</h2>
          <table class="topic-table">
            <thead><tr><th>Area</th><th>Check</th></tr></thead>
            <tbody>
              <tr><td>Build</td><td>isMinifyEnabled = true, isShrinkResources = true, R8 full mode</td></tr>
              <tr><td>Signing</td><td>Play App Signing enrolled, upload key backed up securely</td></tr>
              <tr><td>Permissions</td><td>Only request permissions actually used; remove DEBUG permissions</td></tr>
              <tr><td>Network Security</td><td>network_security_config.xml — no cleartext in production</td></tr>
              <tr><td>Logging</td><td>No Log.d/v in release; ProGuard removes Timber debug tree</td></tr>
              <tr><td>Target SDK</td><td>targetSdk = latest stable; Play requires updates within 1 year</td></tr>
              <tr><td>Privacy Policy</td><td>Required if app collects any personal data</td></tr>
              <tr><td>64-bit support</td><td>All native libraries include arm64-v8a slice</td></tr>
            </tbody>
          </table>

          <h2>Version Code Strategy</h2>
          <div class="code-wrapper">
            <div class="code-header"><span class="lang-tag">Kotlin DSL</span><button class="copy-btn">Copy Code</button></div>
            <pre>// Auto-increment versionCode from CI build number
android {
    defaultConfig {
        versionCode = (System.getenv("BUILD_NUMBER") ?: "1").toInt()
        versionName = "2.4.0"  // semantic version shown to users
    }
}
// Tip: versionCode must always increase; Play Store rejects lower codes
// Use format: YYMMDDHHMM or simple integer counter in CI</pre>
          </div>

          <div class="ref-box">
            <strong>📚 Official References:</strong>
            <a href="https://developer.android.com/studio/publish/app-signing" target="_blank">App Signing</a> ·
            <a href="https://developer.android.com/guide/app-bundle" target="_blank">Android App Bundle</a> ·
            <a href="https://developer.android.com/distribute/play-console" target="_blank">Play Console</a>
          </div>
        `
      }
    ]
  }

];

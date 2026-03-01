// ==========================================
// COMPREHENSIVE ANDROID FRAMEWORK ROADMAP
// 162+ Topics - COMPLETE VERSION
// Android Internals Deep Dive - ENHANCED
// ==========================================

const roadmapData = [
  // ========== CATEGORY 00 ==========
  {
    id: "android-intro",
    category: "00. Android Framework Introduction",
    icon: "📱",
    difficulty: "Beginner",
    description: "Complete overview of Android Framework and architecture",
    topics: [
      {
        id: "framework-overview",
        title: "Android Framework - Complete Overview",
        difficulty: "Beginner",
        duration: "45 min",
        keywords: ["architecture", "framework", "system", "components"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=0s",
        officialRef: "https://source.android.com/docs/core/architecture",
        subtopics: ["System Architecture Layers", "Core System Services", "Framework Components", "Service Management", "IPC Mechanism"],
        contentSections: [
          {
            title: "What is Android Framework?",
            description: `The Android Framework is the foundation layer that sits between the Android Runtime and core system services, providing essential APIs and management services for applications. It abstracts complex system operations into manageable, developer-friendly interfaces.`,
            details: `<h3>Core Purpose</h3>
<p>The framework provides:</p>
<ul>
  <li><strong>Activity Management:</strong> Controls app lifecycle and UI rendering</li>
  <li><strong>Resource Management:</strong> Handles memory, CPU, battery resources</li>
  <li><strong>Service Management:</strong> Manages background processes and system services</li>
  <li><strong>Permission System:</strong> Enforces security policies and user permissions</li>
  <li><strong>Event Distribution:</strong> Routes system events to appropriate handlers</li>
</ul>`
          },
          {
            title: "Framework Architecture Layers",
            description: "Understanding the layered structure that makes Android flexible and powerful",
            details: `<h3>Five Fundamental Layers</h3>
<pre><code class="language-
">┌─────────────────────────────────────┐
│   Applications Layer                │  (User Apps)
├─────────────────────────────────────┤
│   Android Framework Layer           │  (APIs, Services)
├─────────────────────────────────────┤
│   Android Runtime (ART)             │  (Java Execution)
├─────────────────────────────────────┤
│   Hardware Abstraction Layer (HAL)  │  (Device Drivers)
├─────────────────────────────────────┤
│   Linux Kernel                      │  (Core OS)
└─────────────────────────────────────┘</code></pre>
<p><strong>Each layer is independent and communicates through well-defined interfaces.</strong></p>`,
            codeFlow: `Layer Communication Flow:
1. App calls Activity.startActivity()
2. Framework passes to ActivityManager service
3. ActivityManager uses Binder IPC
4. System Server in kernel space processes request
5. HAL interacts with actual hardware if needed`
          },
          {
            title: "Key System Components",
            description: "Main components that make the framework tick",
            details: `<h3>Critical Framework Components</h3>
<ul>
  <li><strong>Application Context:</strong> Base class for all Android components</li>
  <li><strong>Activity:</strong> Single screen UI component with lifecycle</li>
  <li><strong>Service:</strong> Background process without UI</li>
  <li><strong>Content Provider:</strong> Data sharing mechanism between apps</li>
  <li><strong>Broadcast Receiver:</strong> Asynchronous event listener</li>
</ul>
<h3>How They Interact:</h3>
<pre><code class="language-kotlin">// Example: App lifecycle flow
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Framework calls this when activity is created
        setContentView(R.layout.activity_main)
    }
    
    override fun onStart() {
        super.onStart()
        // Framework calls when activity becomes visible
    }
    
    override fun onResume() {
        super.onResume()
        // Framework calls when activity gets focus
    }
}</code></pre>`
          },
          {
            title: "Framework vs Runtime vs Kernel",
            description: "Understanding where the framework sits in the hierarchy",
            details: `<h3>Clear Distinctions</h3>
<table>
  <tr>
    <th>Component</th>
    <th>Responsibility</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>Framework</strong></td>
    <td>High-level APIs and services</td>
    <td>Activity management, Content providers</td>
  </tr>
  <tr>
    <td><strong>Runtime (ART)</strong></td>
    <td>Execute Java/Kotlin code</td>
    <td>JIT compilation, GC</td>
  </tr>
  <tr>
    <td><strong>Kernel</strong></td>
    <td>Low-level OS operations</td>
    <td>Process scheduling, Memory paging</td>
  </tr>
</table>
<p><strong>Communication Path:</strong> App code → Framework → Runtime → Kernel → Hardware</p>`
          }
        ]
      },
      {
        id: "android-stack",
        title: "Android System Stack - Layers & Components",
        difficulty: "Beginner",
        duration: "30 min",
        keywords: ["stack", "layers", "architecture", "hal"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=45s",
        officialRef: "https://source.android.com/docs/core",
        subtopics: ["Applications Layer", "Framework Layer", "Runtime Layer", "HAL Layer", "Kernel Layer"],
        contentSections: [
          {
            title: "Stack Overview - The Pyramid",
            description: "Android is organized as a stack of layers, each independent and modular",
            details: `<h3>The Android Stack</h3>
<pre><code>╔════════════════════════════════════════════╗
║         USER APPLICATIONS LAYER            ║  Apps you write
╠════════════════════════════════════════════╣
║       ANDROID FRAMEWORK LAYER              ║  APIs, Services
╠════════════════════════════════════════════╣
║      ANDROID RUNTIME LAYER (ART)           ║  VM, Compilation
╠════════════════════════════════════════════╣
║   HARDWARE ABSTRACTION LAYER (HAL)         ║  Device Drivers
╠════════════════════════════════════════════╣
║         LINUX KERNEL (CORE OS)             ║  Process, Memory
╠════════════════════════════════════════════╣
║            HARDWARE                        ║  CPU, GPU, RAM
└════════════════════════════════════════════┘</code></pre>`
          },
          {
            title: "Applications Layer",
            description: "The topmost layer where user-facing apps run",
            details: `<h3>What Runs Here</h3>
<ul>
  <li>Your Android apps (built with Java/Kotlin)</li>
  <li>Pre-installed system apps (Settings, Phone, etc.)</li>
  <li>Each app runs in its own process</li>
</ul>
<h3>Key Characteristics</h3>
<ul>
  <li><strong>Sandbox:</strong> Apps cannot directly access other apps' data</li>
  <li><strong>Permission-Based:</strong> Requires explicit permissions</li>
  <li><strong>Managed:</strong> Framework manages app lifecycle</li>
</ul>
<pre><code class="language-kotlin">// App code that runs in this layer
class MyApp : Application() {
    override fun onCreate() {
        // Runs when app process is created
        super.onCreate()
    }
}</code></pre>`
          },
          {
            title: "Framework Layer",
            description: "The API layer providing high-level abstractions",
            details: `<h3>Framework Provides</h3>
<ul>
  <li><strong>Activities & Fragments:</strong> UI management</li>
  <li><strong>Services:</strong> Background execution</li>
  <li><strong>Content Providers:</strong> Data sharing</li>
  <li><strong>Broadcast System:</strong> Event distribution</li>
  <li><strong>Resource Management:</strong> Images, strings, layouts</li>
</ul>
<h3>Built-in Services</h3>
<pre><code class="language-kotlin">// Framework provides these system services
val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
val windowManager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
val locationManager = context.getSystemService(Context.LOCATION_SERVICE) as LocationManager</code></pre>`
          },
          {
            title: "Runtime Layer - ART",
            description: "The execution engine that runs your Java/Kotlin code",
            details: `<h3>Android Runtime (ART)</h3>
<p>ART is the managed runtime that executes your app code:</p>
<ul>
  <li><strong>JIT Compilation:</strong> Just-In-Time compilation for performance</li>
  <li><strong>Garbage Collection:</strong> Automatic memory management</li>
  <li><strong>Security:</strong> Bytecode verification</li>
</ul>
<h3>Code Flow: DEX to Native</h3>
<pre><code>Your Kotlin Code
    ↓
Compiled to Java Bytecode
    ↓
Converted to DEX (Dalvik Executable)
    ↓
ART JIT/AOT Compiler
    ↓
Native Machine Code (ARM/ARM64)
    ↓
CPU Executes</code></pre>`
          },
          {
            title: "HAL and Kernel Layers",
            description: "Low-level system components for hardware interaction",
            details: `<h3>Hardware Abstraction Layer (HAL)</h3>
<p>Interface between framework and device-specific drivers</p>
<ul>
  <li>Standardizes hardware access</li>
  <li>Vendors implement device-specific code</li>
  <li>Framework remains device-agnostic</li>
</ul>
<h3>Linux Kernel</h3>
<p>Core operating system functionality:</p>
<ul>
  <li>Process and memory management</li>
  <li>File system</li>
  <li>Device driver management</li>
  <li>Security and permissions</li>
</ul>
<h3>Request Flow Example</h3>
<pre><code>App: takePicture()
  ↓
Framework Camera Service
  ↓
HAL Camera Driver
  ↓
Kernel Camera Device Driver
  ↓
Camera Hardware (takes photo)</code></pre>`
          }
        ]
      },
      {
        id: "system-services-intro",
        title: "System Services - Role & Responsibilities",
        difficulty: "Beginner",
        duration: "40 min",
        keywords: ["services", "systemserver", "binder"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=120s",
        officialRef: "https://source.android.com/docs",
        subtopics: ["SystemServer", "Service Registration", "Binder Services", "Service Discovery"],
        contentSections: [
          {
            title: "What are System Services?",
            description: "Global singleton services that manage system resources",
            details: `<h3>Definition</h3>
<p>System Services are long-running background processes that provide core functionality available to all apps. They run in the SystemServer process and are managed by the Framework.</p>
<h3>Key Characteristics</h3>
<ul>
  <li><strong>Singleton:</strong> One instance for entire system</li>
  <li><strong>IPC:</strong> Accessed via Binder IPC</li>
  <li><strong>Persistent:</strong> Run for entire device lifetime</li>
  <li><strong>Privileged:</strong> Have system-level permissions</li>
</ul>`
          },
          {
            title: "Common System Services",
            description: "Overview of important system services",
            details: `<h3>Core System Services</h3>
<table>
  <tr>
    <th>Service</th>
    <th>Purpose</th>
    <th>Access Method</th>
  </tr>
  <tr>
    <td>ActivityManager</td>
    <td>App lifecycle management</td>
    <td>getSystemService(ACTIVITY_SERVICE)</td>
  </tr>
  <tr>
    <td>WindowManager</td>
    <td>UI rendering and composition</td>
    <td>getSystemService(WINDOW_SERVICE)</td>
  </tr>
  <tr>
    <td>PackageManager</td>
    <td>App installation and info</td>
    <td>getSystemService(PACKAGE_SERVICE)</td>
  </tr>
  <tr>
    <td>PowerManager</td>
    <td>Battery and power state</td>
    <td>getSystemService(POWER_SERVICE)</td>
  </tr>
  <tr>
    <td>LocationManager</td>
    <td>GPS and positioning</td>
    <td>getSystemService(LOCATION_SERVICE)</td>
  </tr>
</table>`
          },
          {
            title: "SystemServer Process",
            description: "The central hub running all system services",
            details: `<h3>SystemServer Responsibilities</h3>
<p>SystemServer is the process that starts during boot and runs all system services:</p>
<ul>
  <li>Started by init process after kernel boots</li>
  <li>Runs in system_server process</li>
  <li>Starts all core system services</li>
  <li>Manages inter-service communication</li>
</ul>
<h3>Startup Sequence</h3>
<pre><code>Kernel Boots
  ↓
Init Process Starts
  ↓
SystemServer Process Created
  ↓
ActivityManager Service Starts
  ↓
WindowManager Service Starts
  ↓
PackageManager Service Starts
  ↓
Other Services Start...
  ↓
System Ready - Apps can launch</code></pre>`
          },
          {
            title: "Binder Service Architecture",
            description: "How apps communicate with system services via IPC",
            details: `<h3>The Binder IPC Mechanism</h3>
<p>System services are accessed through Binder IPC, Android's inter-process communication system:</p>
<pre><code class="language-kotlin">
// App process
val am = context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager

// This actually calls:
// 1. Binder stub method
// 2. IPC call serializes request
// 3. Kernel routes to SystemServer process
// 4. SystemServer deserializes and executes
// 5. Response travels back

am.getRunningServices(Int.MAX_VALUE) // Binder IPC call
</code></pre>
<h3>Communication Flow</h3>
<pre><code>App Process          Kernel        SystemServer Process
├─ Binder Client  ──→ Binder ────→  Binder Server
│  (stub)            (driver)        (service impl)
│                                    │
│                                    → Executes service logic
│                                    │
└──────────────────── Result ←────────┘</code></pre>`
          },
          {
            title: "Service Discovery & Registration",
            description: "How apps find and access system services",
            details: `<h3>Service Registration</h3>
<p>System services register themselves during boot:</p>
<pre><code class="language-java">
// In SystemServer.java
public class SystemServer {
    private void startBootstrapServices() {
        // Register ActivityManager
        ServiceManager.addService(Context.ACTIVITY_SERVICE, 
                                 new ActivityManager(...));
        
        // Register WindowManager
        ServiceManager.addService(Context.WINDOW_SERVICE,
                                 new WindowManager(...));
    }
}
</code></pre>
<h3>Service Discovery</h3>
<pre><code class="language-kotlin">
// App discovers service
val manager = context.getSystemService(Context.ACTIVITY_SERVICE)

// Internally:
// 1. ServiceManager.getService("activity") called
// 2. Service manager queries registration database
// 3. Returns Binder proxy to service
// 4. App can now call service methods
</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 01 ==========
  {
    id: "binder-ipc",
    category: "01. Binder IPC - Deep Dive",
    icon: "🔗",
    difficulty: "Advanced",
    description: "Inter-process communication, transactions, memory mapping",
    topics: [
      {
        id: "binder-kernel-driver",
        title: "Binder Kernel Driver & Memory Mapping",
        difficulty: "Advanced",
        duration: "90 min",
        keywords: ["binder", "ipc", "kernel", "memory", "mmap"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=150s",
        officialRef: "https://source.android.com/docs/core/architecture/hidl/binder-ipc",
        subtopics: ["One-Copy Architecture", "Memory Mapping", "Transaction Flow", "Binder Structures"],
        contentSections: [
          {
            title: "Binder IPC - The Foundation",
            description: "Android's unique inter-process communication mechanism",
            details: `<h3>What Makes Binder Special</h3>
<p>Binder is Android's proprietary IPC mechanism, more efficient than traditional Linux IPC:</p>
<ul>
  <li><strong>One-Copy Architecture:</strong> Data copied once instead of twice</li>
  <li><strong>Memory Mapping:</strong> Shared memory between processes</li>
  <li><strong>Reference Counting:</strong> Automatic lifecycle management</li>
  <li><strong>Built-in Security:</strong> Caller UID/GID enforcement</li>
</ul>`
          },
          {
            title: "Memory Mapping & Buffer",
            description: "Understanding shared memory and how data flows",
            details: `<h3>Binder Buffer Pool</h3>
<p>Each process using Binder gets a buffer pool for shared memory:</p>
<pre><code>Process A              Kernel             Process B
┌──────────┐          ┌────────┐         ┌──────────┐
│Binder    │          │Binder  │Buffer   │Binder    │
│Buffer    │─mmap────→│Driver  │◄───────│Buffer    │
│(1MB)     │          │        │         │(1MB)     │
└──────────┘          └────────┘         └──────────┘
     ↑                    ↑                    ↑
     └────── Mapped to kernel memory ────────┘</code></pre>
<h3>One-Copy Advantage</h3>
<pre><code>Traditional IPC:
App Space → Kernel Space → Target App Space (2 copies)

Binder IPC:
App Space ──→ Shared Kernel Buffer ◄── Target App Space
           (1 copy only!)</code></pre>`
          },
          {
            title: "Transaction Flow",
            description: "How a Binder call travels between processes",
            details: `<h3>Complete Transaction Flow</h3>
<pre><code>Step 1: Client prepares request
   ↓ (Client Process)
Client calls: service.doSomething(params)
   ↓
Binder client stub serializes data
   ↓
Data placed in Binder buffer pool
   ↓ (Kernel Space)
Binder driver processes request
   ↓
Looks up target service (Server Process)
   ↓
Wakes up server's binder thread pool
   ↓ (Server Process)
Server receives data from buffer
   ↓
Binder server stub deserializes
   ↓
Server's actual method called
   ↓
Server prepares response
   ↓
Response serialized and placed in buffer
   ↓ (Kernel Space)
Binder driver sends response to client
   ↓ (Client Process)
Client receives and deserializes response
   ↓
Client method returns result</code></pre>`
          },
          {
            title: "Binder Data Structures",
            description: "Key kernel structures managing communication",
            details: `<h3>Key Binder Structures</h3>
<table>
  <tr>
    <th>Structure</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><strong>binder_proc</strong></td>
    <td>Per-process Binder state and resources</td>
  </tr>
  <tr>
    <td><strong>binder_thread</strong></td>
    <td>Thread pool member for handling requests</td>
  </tr>
  <tr>
    <td><strong>binder_node</strong></td>
    <td>Represents a service object in kernel</td>
  </tr>
  <tr>
    <td><strong>binder_ref</strong></td>
    <td>Reference from one process to another's object</td>
  </tr>
  <tr>
    <td><strong>binder_transaction</strong></td>
    <td>A single IPC request/response</td>
  </tr>
</table>`
          }
        ]
      },
      {
        id: "binder-transactions",
        title: "Binder Transactions & Thread Pool",
        difficulty: "Advanced",
        duration: "75 min",
        keywords: ["transactions", "threading", "pool", "synchronization"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=240s",
        officialRef: "https://source.android.com/docs/core",
        subtopics: ["Transaction Processing", "Thread Pool Management", "Deadlock Prevention"],
        contentSections: [
          {
            title: "Binder Thread Pool",
            description: "Processing concurrent IPC requests efficiently",
            details: `<h3>Thread Pool Architecture</h3>
<p>Each process maintains a pool of threads waiting for Binder requests:</p>
<pre><code>Binder Thread Pool
┌─────────────────────────────────┐
│ Thread 1 [Idle]                 │
│ Thread 2 [Processing Request]   │
│ Thread 3 [Idle]                 │
│ Thread 4 [Idle]                 │
│ ...                             │
└─────────────────────────────────┘
     ↑
Queue of Incoming IPC Requests</code></pre>`
          },
          {
            title: "Thread Management",
            description: "How Binder manages thread lifecycle",
            details: `<h3>Thread Lifecycle</h3>
<pre><code>1. Process registers with Binder driver
2. Process creates initial thread pool (e.g., 4 threads)
3. Threads wait in kernel: BC_ENTER_LOOPER
4. Binder driver routes incoming requests
5. Thread wakes up, processes request
6. Results sent back
7. Thread returns to waiting state
8. If all threads busy, driver creates new ones (up to limit)
9. Idle threads exit after timeout

Max threads: Usually 15-16 per process</code></pre>
<h3>Code: Thread Pool Registration</h3>
<pre><code class="language-cpp">
// In IPCThreadState
void IPCThreadState::talkWithDriver(bool doReceive) {
    do {
        // Register thread with binder (BC_ENTER_LOOPER)
        // Wait for requests
        // Process them
        // BC_REPLY or BC_EXIT_LOOPER
    } while (mIn.dataSize() > 0);
}
</code></pre>`
          },
          {
            title: "Synchronous vs Asynchronous",
            description: "Different transaction modes",
            details: `<h3>Transaction Types</h3>
<table>
  <tr>
    <th>Type</th>
    <th>Behavior</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td><strong>Synchronous</strong></td>
    <td>Caller waits for response</td>
    <td>Getting data, status checks</td>
  </tr>
  <tr>
    <td><strong>Asynchronous (oneway)</strong></td>
    <td>Caller returns immediately</td>
    <td>Notifications, fire-and-forget</td>
  </tr>
</table>
<h3>Code Example</h3>
<pre><code class="language-aidl">
// AIDL Interface
interface IMyService {
    // Synchronous - returns value
    String getName();
    
    // Asynchronous - no return value
    oneway void notify(String message);
}
</code></pre>`
          }
        ]
      },
      {
        id: "binder-parcelable",
        title: "Parcelable & Data Marshalling",
        difficulty: "Intermediate",
        duration: "60 min",
        keywords: ["parcelable", "serialization", "marshal", "data"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=315s",
        officialRef: "https://developer.android.com",
        subtopics: ["Parcelable Protocol", "Data Serialization", "Custom Marshalling"],
        contentSections: [
          {
            title: "Parcelable - Android Serialization",
            description: "Efficient data marshalling for IPC",
            details: `<h3>Parcelable vs Serializable</h3>
<table>
  <tr>
    <th>Feature</th>
    <th>Parcelable</th>
    <th>Serializable</th>
  </tr>
  <tr>
    <td>Speed</td>
    <td>Fast (optimized for Android)</td>
    <td>Slow (reflection-based)</td>
  </tr>
  <tr>
    <td>Memory</td>
    <td>Efficient</td>
    <td>High overhead</td>
  </tr>
  <tr>
    <td>Use Case</td>
    <td>IPC, Bundles</td>
    <td>File storage</td>
  </tr>
</table>`
          },
          {
            title: "Creating Parcelable",
            description: "Implementing custom Parcelable classes",
            details: `<h3>Parcelable Implementation</h3>
<pre><code class="language-kotlin">
class User(
    val id: Int,
    val name: String,
    val email: String
) : Parcelable {
    
    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeInt(id)
        parcel.writeString(name)
        parcel.writeString(email)
    }
    
    override fun describeContents(): Int = 0
    
    companion object CREATOR : Parcelable.Creator<User> {
        override fun createFromParcel(parcel: Parcel): User {
            return User(
                parcel.readInt(),
                parcel.readString() ?: "",
                parcel.readString() ?: ""
            )
        }
        
        override fun newArray(size: Int): Array<User?> {
            return arrayOfNulls(size)
        }
    }
}
</code></pre>`
          }
        ]
      },
      {
        id: "binder-aidl",
        title: "AIDL - Android Interface Definition Language",
        difficulty: "Intermediate",
        duration: "45 min",
        keywords: ["aidl", "interface", "rpc", "service"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=360s",
        officialRef: "https://developer.android.com/guide/components/aidl",
        subtopics: ["AIDL Syntax", "Interface Definition", "Stub & Proxy"],
        contentSections: [
          {
            title: "AIDL - Interface Definition Language",
            description: "Defining IPC interfaces automatically",
            details: `<h3>What is AIDL?</h3>
<p>AIDL is a code generation tool that creates Binder stubs and proxies for you:</p>
<ul>
  <li>Write .aidl interface files</li>
  <li>Build system generates Java classes</li>
  <li>Implement service with generated interface</li>
  <li>Clients get auto-generated proxy stubs</li>
</ul>`
          },
          {
            title: "AIDL Syntax & Examples",
            description: "Writing AIDL interface files",
            details: `<h3>AIDL Interface File</h3>
<pre><code class="language-aidl">
// IMyService.aidl
package com.example.myapp;

import android.os.IInterface;

interface IMyService {
    // Method returning String
    String getName();
    
    // Method with parameters
    int add(int a, int b);
    
    // Callback interface
    oneway void registerCallback(IMyCallback callback);
}

// Callback interface
interface IMyCallback {
    oneway void onResult(String result);
}
</code></pre>`
          },
          {
            title: "Server Implementation",
            description: "Implementing AIDL service",
            details: `<h3>Service Implementation</h3>
<pre><code class="language-kotlin">
class MyService : Service() {
    
    private val binder = MyBinder()
    
    inner class MyBinder : IMyService.Stub() {
        override fun getName(): String {
            return "My Service"
        }
        
        override fun add(a: Int, b: Int): Int {
            return a + b
        }
        
        override fun registerCallback(callback: IMyCallback?) {
            // Store callback for future notifications
        }
    }
    
    override fun onBind(intent: Intent): IBinder = binder
}
</code></pre>`
          },
          {
            title: "Client Usage",
            description: "Calling AIDL service from client",
            details: `<h3>Client Code</h3>
<pre><code class="language-kotlin">
class MainActivity : AppCompatActivity() {
    private lateinit var myService: IMyService
    
    private val serviceConnection = object : ServiceConnection {
        override fun onServiceConnected(name: ComponentName, service: IBinder) {
            myService = IMyService.Stub.asInterface(service)
            
            // Now can call service methods
            val result = myService.add(5, 3)
            Log.d("TAG", "Result: $result")
        }
        
        override fun onServiceDisconnected(name: ComponentName) {}
    }
    
    fun startService() {
        val intent = Intent(this, MyService::class.java)
        bindService(intent, serviceConnection, Context.BIND_AUTO_CREATE)
    }
}
</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 02 ==========
  {
    id: "system-managers",
    category: "02. System Managers & Services",
    icon: "⚙️",
    difficulty: "Intermediate",
    description: "Activity, Window, Package, Audio, Location managers",
    topics: [
      {
        id: "activity-manager",
        title: "Activity Manager Service - App Lifecycle",
        difficulty: "Intermediate",
        duration: "60 min",
        keywords: ["activity", "lifecycle", "tasks", "processes"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=420s",
        officialRef: "https://developer.android.com/guide/components/activities",
        subtopics: ["Activity Lifecycle", "Task Management", "Process Priorities"],
        contentSections: [
          {
            title: "Activity Manager Overview",
            description: "Core service managing app lifecycle and process management",
            details: `<h3>Key Responsibilities</h3><ul><li>Create and manage activities</li><li>Manage task stacks</li><li>Control app processes</li><li>Handle app crashes</li><li>Track foreground/background apps</li></ul>`
          },
          {
            title: "Activity Lifecycle States",
            description: "Understanding the complete lifecycle flow",
            details: `<h3>Lifecycle Flow</h3><pre><code>onCreate() → onStart() → onResume() [Running]
                                     ↓
                              [Pause event]
                                     ↓
                              onPause() [Paused]
                                     ↓
                           [Visibility lost]
                                     ↓
                              onStop() [Stopped]
                                     ↓
                          [Process killed]
                                     ↓
                           onDestroy()</code></pre>`
          },
          {
            title: "Task and Back Stack",
            description: "How activities are organized in task stacks",
            details: `<h3>Back Stack Structure</h3><pre><code>Task Backstack
[Top]     ├─ Activity C (current)
          ├─ Activity B
[Bottom]  └─ Activity A (root)</code></pre><p>Back press pops from stack (LIFO)</p>`
          },
          {
            title: "Process Priority Levels",
            description: "System determines which processes to keep alive",
            details: `<h3>Priority Levels (highest to lowest)</h3><table><tr><th>Level</th><th>Type</th><th>Kill Risk</th></tr><tr><td>1</td><td>Foreground (visible on screen)</td><td>Never</td></tr><tr><td>2</td><td>Visible (partially visible)</td><td>Very Low</td></tr><tr><td>3</td><td>Service (running service)</td><td>Low</td></tr><tr><td>4</td><td>Background (not visible)</td><td>Medium</td></tr><tr><td>5</td><td>Empty (no components)</td><td>High</td></tr></table>`
          }
        ]
      },
      {
        id: "window-manager",
        title: "Window Manager Service - UI Layout",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["window", "ui", "layout", "z-order"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=480s",
        officialRef: "https://source.android.com/docs/core",
        subtopics: ["Window Hierarchy", "Layer Composition", "Input Routing"],
        contentSections: [
          {
            title: "Window Manager Fundamentals",
            description: "Managing UI windows and layout on device screen",
            details: `<h3>Core Functions</h3><ul><li>Create and layout windows</li><li>Manage z-order (layering)</li><li>Handle input events</li><li>Animate window transitions</li><li>Control display settings</li></ul>`
          },
          {
            title: "Window Hierarchy",
            description: "How windows are organized in layers",
            details: `<h3>Layer Types</h3><pre><code>│ Status Bar
├─ Background
├─ App Windows (Activities)
├─ Sub-windows (Dialogs, PopupWindows)
├─ System Windows (Toast, Notifications)
└─ Overlay Windows (Input Method, Alerts)</code></pre>`
          },
          {
            title: "Z-Order and Layering",
            description: "Controlling which window appears on top",
            details: `<h3>Z-Order Stack</h3><p>Windows are stacked in z-order (depth). Higher z-order = appears on top</p><pre><code>setWindowManager(manager, token, appName, display)
layoutParams.flags = WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE
layoutParams.type = WindowManager.LayoutParams.TYPE_APPLICATION</code></pre>`
          },
          {
            title: "Input Routing",
            description: "How touch and key events are delivered to windows",
            details: `<h3>Event Delivery Flow</h3><pre><code>Touch Event
    ↓
Window Manager identifies target window
    ↓
Event serialized via Binder
    ↓
delivered to window's input channel
    ↓
Activity/View receives onTouch()</code></pre>`
          }
        ]
      },
      {
        id: "package-manager",
        title: "Package Manager Service - App Management",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["package", "installation", "permissions", "components"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=540s",
        officialRef: "https://developer.android.com/guide/topics/package-manager",
        subtopics: ["Package Installation", "Permission System", "APK Parsing"],
        contentSections: [
          {
            title: "Package Manager Service",
            description: "Managing all installed packages and their information",
            details: `<h3>Primary Duties</h3><ul><li>Track all installed packages</li><li>Parse APK manifests</li><li>Manage permissions</li><li>Handle package installation/uninstall</li><li>Provide package info to apps</li></ul>`
          },
          {
            title: "APK Installation Process",
            description: "Step-by-step package installation",
            details: `<h3>Installation Flow</h3><pre><code>1. Verify APK signature
2. Parse AndroidManifest.xml
3. Extract components (Activities, Services, BroadcastReceivers)
4. Check required permissions
5. Verify device compatibility
6. Copy files to app directory
7. Update package database
8. Generate optimized OAT file</code></pre>`
          },
          {
            title: "Permission Model",
            description: "Android permission system and enforcement",
            details: `<h3>Permission Types</h3><table><tr><th>Type</th><th>Behavior</th></tr><tr><td>Normal</td><td>Granted automatically on install</td></tr><tr><td>Signature</td><td>Only if signed with same cert</td></tr><tr><td>Dangerous</td><td>Request runtime (Android 6+)</td></tr><tr><td>Signature/System</td><td>System-level only</td></tr></table>`
          }
        ]
      },
      {
        id: "audio-manager",
        title: "Audio Manager Service - Audio Routing",
        difficulty: "Intermediate",
        duration: "40 min",
        keywords: ["audio", "sound", "routing", "device"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=595s",
        officialRef: "https://source.android.com/docs/core/audio",
        subtopics: ["Audio Routing", "Volume Control", "Audio Focus"],
        contentSections: [
          {
            title: "Audio System Overview",
            description: "Managing audio playback and recording",
            details: `<h3>Audio Routing</h3><ul><li>Speaker, Earpiece, Bluetooth</li><li>MIC, Headset MIC</li><li>Automatic switching based on device state</li><li>Multiple streams (music, voice, alerts)</li></ul>`
          },
          {
            title: "Audio Focus",
            description: "Managing audio between multiple apps",
            details: `<h3>Audio Focus States</h3><pre><code>AUDIOFOCUS_GAIN - Full audio focus
AUDIOFOCUS_GAIN_TRANSIENT - Temporary (phone call)
AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK - Lower volume ok
AUDIOFOCUS_LOSS - Permanent loss
AUDIOFOCUS_LOSS_TRANSIENT - Temporary loss</code></pre>`
          },
          {
            title: "Volume Control",
            description: "Managing volume levels for different streams",
            details: `<h3>Audio Streams</h3><pre><code>STREAM_VOICE_CALL
STREAM_SYSTEM  
STREAM_RING
STREAM_MUSIC
STREAM_ALARM
STREAM_NOTIFICATION</code></pre>`
          }
        ]
      },
      {
        id: "location-manager",
        title: "Location Manager - GPS & Positioning",
        difficulty: "Intermediate",
        duration: "45 min",
        keywords: ["location", "gps", "positioning", "providers"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=650s",
        officialRef: "https://developer.android.com/guide/topics/location",
        subtopics: ["GPS Positioning", "Network Location", "Mock Locations"],
        contentSections: [
          {
            title: "Location Services",
            description: "Providing GPS and network-based positioning",
            details: `<h3>Location Providers</h3><ul><li><strong>GPS:</strong> ~10m accuracy, slow, battery-intensive</li><li><strong>Network:</strong> ~100m accuracy, fast, low power</li><li><strong>Passive:</strong> Uses data from other apps</li></ul>`
          },
          {
            title: "Location Request Flow",
            description: "Getting location updates",
            details: `<h3>Code Example</h3><pre><code class="language-kotlin">val locationManager = context.getSystemService(Context.LOCATION_SERVICE) as LocationManager
locationManager.requestLocationUpdates(
    LocationManager.GPS_PROVIDER,
    minTime = 1000,  // min time between updates
    minDistance = 10f, // min distance change
    listener = myLocationListener
)</code></pre>`
          }
        ]
      },
      {
        id: "power-manager",
        title: "Power Manager Service - Power States",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["power", "wake-lock", "screen", "battery"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=710s",
        officialRef: "https://developer.android.com/training/monitoring-device-state",
        subtopics: ["Wake Locks", "Power States", "Screen Management"],
        contentSections: [
          {
            title: "Power States",
            description: "Device power management states",
            details: `<h3>Power States</h3><ul><li><strong>Awake:</strong> Full power, screen on</li><li><strong>Screen off:</strong> Display off, CPU can sleep</li><li><strong>Suspend:</strong> CPU off, only interrupts wake device</li></ul>`
          },
          {
            title: "Wake Locks",
            description: "Preventing system from sleeping",
            details: `<h3>Wake Lock Types</h3><pre><code>PARTIAL_WAKE_LOCK - CPU on, screen off
FULL_WAKE_LOCK - CPU + screen on
SCREEN_BRIGHT_WAKE_LOCK - Screen bright + CPU
SCREEN_DIM_WAKE_LOCK - Screen dim + CPU</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 03 ==========
  {
    id: "content-providers",
    category: "03. Content Providers & Data Sharing",
    icon: "💾",
    difficulty: "Intermediate",
    description: "Content Providers, SQLite, URI schemes, data access",
    topics: [
      {
        id: "content-provider-framework",
        title: "Content Provider Framework - Data Access",
        difficulty: "Intermediate",
        duration: "60 min",
        keywords: ["content-provider", "data", "sharing", "uri"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=780s",
        officialRef: "https://developer.android.com/guide/topics/providers",
        subtopics: ["Provider Architecture", "URI Scheme", "ContentResolver"],
        contentSections: [
          {
            title: "What are Content Providers?",
            description: "The Android mechanism for secure data sharing between applications",
            details: `<h3>Core Purpose</h3><p>Content Providers provide a standardized way for apps to share data securely:</p><ul><li>Apps cannot access each other's private files directly</li><li>Content Providers act as a controlled gateway</li><li>Each provider has its own URI scheme</li><li>Permissions control who can read/write data</li></ul>`
          },
          {
            title: "Content Provider Architecture",
            description: "How Content Providers are structured and function",
            details: `<h3>The Four Core Methods</h3><pre><code class="language-kotlin">class MyContentProvider : ContentProvider() {
    override fun onCreate(): Boolean { /* Initialize */ return true }
    override fun query(uri: Uri, projection: Array<String>?, ...): Cursor? { /* Read */ }
    override fun insert(uri: Uri, values: ContentValues?): Uri? { /* Write */ }
    override fun update(uri: Uri, values: ContentValues?, ...): Int { /* Modify */ }
    override fun delete(uri: Uri, selection: String?, ...): Int { /* Delete */ }
    override fun getType(uri: Uri): String? { /* MIME type */ }
}</code></pre>`
          },
          {
            title: "URI Scheme",
            description: "How data locations are identified",
            details: `<h3>URI Structure</h3><pre><code>content://auth/path/id
├─ content:// (scheme - identifies as content provider)
├─ auth (authority - unique identifier like com.example.app.provider)
├─ path (collection type like contacts, messages)
└─ id (specific record)</code></pre><h3>Example URIs:</h3><pre><code>content://com.android.contacts/contacts
content://com.android.contacts/contacts/1
content://com.example.app.provider/notes</code></pre>`
          },
          {
            title: "Using ContentResolver",
            description: "Querying data from Content Providers",
            details: `<h3>Query Data</h3><pre><code class="language-kotlin">val resolver = context.contentResolver
val cursor = resolver.query(
    uri = ContactsContract.Contacts.CONTENT_URI,
    projection = arrayOf(ContactsContract.Contacts._ID, ContactsContract.Contacts.DISPLAY_NAME),
    selection = null,
    selectionArgs = null,
    sortOrder = ContactsContract.Contacts.DISPLAY_NAME
)
cursor?.use {
    while(it.moveToNext()) {
        val name = it.getString(it.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME))
        Log.d("TAG", "Contact: $name")
    }
}</code></pre>`
          }
        ]
      },
      {
        id: "sqlite-database",
        title: "SQLite Database - Local Storage",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["sqlite", "database", "sql", "storage"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=840s",
        officialRef: "https://developer.android.com/training/data-storage",
        subtopics: ["SQL Queries", "Cursor Management", "Transaction Handling"],
        contentSections: [
          {
            title: "SQLite in Android",
            description: "Lightweight embedded database for local app storage",
            details: `<h3>Why SQLite?</h3><ul><li>Zero-configuration SQL database</li><li>No server needed</li><li>File-based storage on device</li><li>Best for structured data with relationships</li><li>ACID transactions</li></ul>`
          },
          {
            title: "Creating & Managing Database",
            description: "Using SQLiteOpenHelper for database operations",
            details: `<h3>Database Helper Class</h3><pre><code class="language-kotlin">class UserDatabaseHelper(context: Context) : SQLiteOpenHelper(context, "users.db", null, 1) {
    override fun onCreate(db: SQLiteDatabase) {
        val createTable = """
            CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """.trimIndent()
        db.execSQL(createTable)
    }
    
    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        db.execSQL("DROP TABLE IF EXISTS users")
        onCreate(db)
    }
}</code></pre>`
          },
          {
            title: "CRUD Operations",
            description: "Create, Read, Update, Delete operations",
            details: `<h3>Insert Data</h3><pre><code class="language-kotlin">val db = dbHelper.writableDatabase
val values = ContentValues().apply {
    put("name", "John Doe")
    put("email", "john@example.com")
}
val id = db.insert("users", null, values)
</code></pre><h3>Query Data</h3><pre><code class="language-kotlin">val cursor = db.query(
    "users",
    arrayOf("id", "name", "email"),
    "email LIKE ?",
    arrayOf("%@gmail.com"),
    null, null, null
)
</code></pre><h3>Update Data</h3><pre><code class="language-kotlin">val values = ContentValues().apply { put("name", "Jane Doe") }
db.update("users", values, "id = ?", arrayOf("1"))
</code></pre><h3>Delete Data</h3><pre><code class="language-kotlin">db.delete("users", "id = ?", arrayOf("1"))
</code></pre>`
          }
        ]
      },
      {
        id: "broadcast-system",
        title: "Broadcast System - Event Distribution",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["broadcast", "receiver", "intent", "events"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=910s",
        officialRef: "https://developer.android.com/guide/components/broadcasts",
        subtopics: ["System Broadcasts", "Custom Broadcasts", "Ordered Broadcasts"],
        contentSections: [
          {
            title: "Broadcast System Overview",
            description: "Pub-Sub mechanism for system-wide event distribution",
            details: `<h3>How Broadcasts Work</h3><ul><li><strong>Sender:</strong> Broadcasts an intent</li><li><strong>System:</strong> Routes to matching receivers</li><li><strong>Receivers:</strong> Handle the event</li><li>Async by default (no waiting)</li></ul>`
          },
          {
            title: "System Broadcasts",
            description: "Important system events all apps can listen to",
            details: `<h3>Common System Broadcasts</h3><table><tr><th>Action</th><th>When Fired</th></tr><tr><td>ACTION_BOOT_COMPLETED</td><td>Device boots up</td></tr><tr><td>ACTION_BATTERY_LOW</td><td>Battery below 15%</td></tr><tr><td>ACTION_BATTERY_OKAY</td><td>Battery charging/above 15%</td></tr><tr><td>ACTION_PACKAGE_ADDED</td><td>App installed</td></tr><tr><td>ACTION_PACKAGE_REMOVED</td><td>App uninstalled</td></tr><tr><td>ACTION_CONNECTIVITY_CHANGE</td><td>Network changes</td></tr></table>`
          },
          {
            title: "Creating Broadcast Receivers",
            description: "Implementing custom receivers",
            details: `<h3>Broadcast Receiver Class</h3><pre><code class="language-kotlin">class BatteryReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
        when(intent?.action) {
            Intent.ACTION_BATTERY_LOW -> {
                Log.d("TAG", "Battery low!")
                // Handle low battery
            }
            Intent.ACTION_BATTERY_OKAY -> {
                Log.d("TAG", "Battery okay")
            }
        }
    }
}</code></pre><h3>Register in Manifest</h3><pre><code class="language-xml">&lt;receiver android:name=".BatteryReceiver"&gt;
    &lt;intent-filter&gt;
        &lt;action android:name="android.intent.action.BATTERY_LOW" /&gt;
        &lt;action android:name="android.intent.action.BATTERY_OKAY" /&gt;
    &lt;/intent-filter&gt;
&lt;/receiver&gt;</code></pre>`
          },
          {
            title: "Broadcasting Custom Events",
            description: "Sending broadcasts from your app",
            details: `<h3>Send Broadcast</h3><pre><code class="language-kotlin">val intent = Intent("com.example.CUSTOM_EVENT").apply {
    putExtra("message", "Hello receivers!")
}
context.sendBroadcast(intent)</code></pre><h3>Send Ordered Broadcast</h3><pre><code class="language-kotlin">context.sendOrderedBroadcast(
    intent,
    null, // permissions
    BroadcastReceiver(), // final receiver
    null, // handler
    Activity.RESULT_OK,
    null,
    null
)</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 04 ==========
  {
    id: "memory-management",
    category: "04. Memory Management & GC",
    icon: "💾",
    difficulty: "Advanced",
    description: "Memory profiling, GC, LMK, memory optimization",
    topics: [
      {
        id: "memory-profiler",
        title: "Memory Profiler & Heap Dumps",
        difficulty: "Intermediate",
        duration: "45 min",
        keywords: ["memory", "profiler", "heap", "analysis"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=980s",
        officialRef: "https://developer.android.com/studio/profile/memory-profiler",
        subtopics: ["Heap Analysis", "Memory Leaks", "GC Tuning"],
        contentSections: [
          {
            title: "Memory Profiler Overview & Setup",
            description: "Understanding how Memory Profiler works and setting it up in Android Studio",
            details: `<h3>What is Memory Profiler?</h3>
<p>The Memory Profiler is part of Android Studio's profiling tools that helps developers identify memory leaks, memory usage spikes, and inefficient memory allocation patterns. It provides real-time memory consumption data and heap snapshots.</p>
<h3>Key Metrics</h3>
<ul>
  <li><strong>Java Heap:</strong> Memory allocated by Java/Kotlin code</li>
  <li><strong>Native Heap:</strong> Memory from NDK/C++ code</li>
  <li><strong>Graphics:</strong> GPU and graphics buffer memory</li>
  <li><strong>Stack:</strong> Thread stack memory</li>
  <li><strong>Code:</strong> App executable code and resources</li>
</ul>
<h3>Setting Up</h3>
<pre><code class="language-kotlin">// Enable memory profiler in Android Studio:
// 1. Build & Run app on device/emulator
// 2. Profilers tab → Click Memory
// 3. Observe real-time allocation and deallocation</code></pre>
<h3>Memory Profiling Flow</h3>
<table>
  <tr>
    <th>Phase</th>
    <th>Action</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>Baseline</td>
    <td>Record initial state</td>
    <td>Establish memory baseline</td>
  </tr>
  <tr>
    <td>Interaction</td>
    <td>Perform app operations</td>
    <td>Monitor allocation patterns</td>
  </tr>
  <tr>
    <td>Forced GC</td>
    <td>Trigger garbage collection</td>
    <td>Identify retained memory</td>
  </tr>
  <tr>
    <td>Analysis</td>
    <td>Compare before/after</td>
    <td>Find memory leaks</td>
  </tr>
</table>`
          },
          {
            title: "Heap Dumps & Memory Leak Detection",
            description: "Analyzing heap dumps to find and fix memory leaks",
            details: `<h3>What is a Heap Dump?</h3>
<p>A heap dump is a snapshot of all objects in Java heap memory at a specific point in time. It shows object references, memory addresses, and allocation sizes. This is crucial for finding memory leaks where objects are retained unexpectedly.</p>
<h3>Memory Leak Patterns</h3>
<pre><code class="language-kotlin">// Common memory leak: Static reference to Context
class MyUtils {
    companion object {
        var context: Context? = null  // BAD! Leaks Context
    }
}

// Common leak: Inner class holding outer class reference
class MyActivity : AppCompatActivity() {
    val myCallback = object : Callback {  // Holds implicit reference to Activity
        override fun onData(data: String) {
            textView.text = data  // 'textView' keeps Activity alive
        }
    }
}</code></pre>
<h3>Detecting with Heap Dump</h3>
<ol>
  <li>Open Memory Profiler</li>
  <li>Perform suspected leak operation</li>
  <li>Click "Dump Java heap" button</li>
  <li>Analyze retained objects in class list</li>
  <li>Trace references to find leak source</li>
</ol>
<h3>Reading Heap Dump Output</h3>
<pre><code>com.example.app.MyActivity: 523 KB (15 instances)
├─ mContext: Android.app.Context
├─ mListener: MyCallback  
└─ mData: byte[] (1.2 MB)</code></pre>`
          },
          {
            title: "GC Tuning & Optimization Strategies",
            description: "Optimizing memory allocation to reduce GC pauses",
            details: `<h3>GC Impact on Performance</h3>
<p>Garbage collection pauses freeze the entire app. Reducing GC frequency and duration improves responsiveness, especially critical for gaming and smooth scrolling.</p>
<h3>Object Allocation Patterns</h3>
<pre><code class="language-kotlin">// BAD: Creates objects in tight loop (GC pressure)
fun drawFrame() {
    for (i in 0..1000) {
        val point = Point(i, i)  // 1000 allocations per frame!
        canvas.drawPoint(point)
    }
}

// GOOD: Reuse objects
class FrameRenderer {
    private val point = Point()
    
    fun drawFrame() {
        for (i in 0..1000) {
            point.set(i, i)  // Reuse same object
            canvas.drawPoint(point)
        }
    }
}</code></pre>
<h3>Memory Optimization Techniques</h3>
<ul>
  <li><strong>Object Pooling:</strong> Reuse frequently allocated objects</li>
  <li><strong>Avoid Boxing:</strong> Use primitives instead of Integer/Long wrappers</li>
  <li><strong>String Concatenation:</strong> Use StringBuilder for loops</li>
  <li><strong>Lambda Allocation:</strong> Avoid creating lambdas in hot paths</li>
  <li><strong>Bitmap Reuse:</strong> Use BitmapFactory.Options.inBitmap</li>
</ul>
<h3>Monitoring GC Events</h3>
<pre><code class="language-bash">adb logcat | grep "Explicit concurrent mark"  # GC event indicator</code></pre>`
          },
          {
            title: "Memory Profiling Best Practices",
            description: "Professional approaches to memory analysis and optimization",
            details: `<h3>Profiling Workflow</h3>
<pre><code class="language-kotlin">// 1. Baseline measurement
// Record memory state without any operations

// 2. Repeating operation
// Execute action 5-10 times rapidly
// Example: Open and close a Fragment multiple times

// 3. Force GC
// Click "Dump Java Heap" to trigger garbage collection

// 4. Compare deltas
// If memory didn't return to baseline, there's a leak</code></pre>
<h3>Native Memory Leaks</h3>
<p>Some leaks occur in native code (JNI/NDK). Look for "Native Heap" growth in Memory Profiler that doesn't correspond to Java allocations.</p>
<h3>Profiling Checklist</h3>
<ul>
  <li>Profile on actual devices (not just emulator)</li>
  <li>Use release builds for realistic behavior</li>
  <li>Test long sessions (memory degrades over time)</li>
  <li>Monitor during lifecycle transitions</li>
  <li>Check memory while playing videos/loading images</li>
  <li>Verify memory release after onDestroy()</li>
</ul>
<h3>Tools Integration</h3>
<pre><code>Android Profiler
├─ Memory: Real-time heap monitoring
├─ CPU: Thread and method profiling
├─ Network: HTTP traffic analysis  
└─ Energy: Battery usage breakdown</code></pre>`
          }
        ]
      },
      {
        id: "garbage-collection",
        title: "Garbage Collection & Performance",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["gc", "garbage-collection", "performance", "pause"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1040s",
        officialRef: "https://source.android.com/docs/core/runtime",
        subtopics: ["GC Algorithms", "Stop-The-World", "Concurrent GC"],
        contentSections: [
          {
            title: "Garbage Collection Fundamentals",
            description: "Understanding how Java garbage collection works in Android",
            details: `<h3>What is Garbage Collection?</h3>
<p>Garbage Collection automatically frees memory occupied by objects that are no longer referenced. It's invisible but has a major impact on performance through "stop-the-world" pauses where the entire app freezes.</p>
<h3>GC Trigger Points</h3>
<ul>
  <li><strong>Memory Threshold:</strong> When heap reaches certain level</li>
  <li><strong>Explicit Call:</strong> System.gc() (strongly discouraged)</li>
  <li><strong>Jank Threshold:</strong> When frame skips occur</li>
  <li><strong>Idle Time:</strong> When app is in background</li>
  <li><strong>Memory Pressure:</strong> When system is low on memory</li>
</ul>
<h3>GC Pause Impact</h3>
<table>
  <tr>
    <th>Pause Duration</th>
    <th>User Impact</th>
  </tr>
  <tr>
    <td>&lt;5 ms</td>
    <td>Unnoticeable</td>
  </tr>
  <tr>
    <td>5-16 ms</td>
    <td>Frame drop (feels janky)</td>
  </tr>
  <tr>
    <td>&gt;16 ms</td>
    <td>Visible stutter/pause</td>
  </tr>
</table>
<h3>Memory Heap Growth Diagram</h3>
<pre><code>Heap Size Over Time
   │
   │  /\  /\  /\  /\     (allocation peaks)
   │ /  \/  \/  \/  \
   │/     GC→   GC→
   └──────────────────→ Time</code></pre>`
          },
          {
            title: "GC Algorithms in ART",
            description: "The different garbage collection algorithms and their characteristics",
            details: `<h3>Concurrent GC (Default)</h3>
<p>Modern ART uses concurrent mark-sweep (CMS) algorithm. Mark phase runs concurrently with app threads, only sweep phase causes brief pause.</p>
<pre><code class="language-">Concurrent GC Timeline:
│ App Running
├─ Concurrent Mark Phase (parallel with app)
├─ Brief Pause: Sweep Phase (stop-the-world)
├─ App Running
└─ Memory freed</code></pre>
<h3>Generational GC</h3>
<p>ART divides heap into young and old generation. Young generation is collected frequently (short pauses), old generation rarely.</p>
<pre><code class="language-kotlin">// Young objects (collected often)
val tempBuffer = ByteArray(1024)  // Created and destroyed frequently
val listener = object : Callback { }  // Event listeners

// Old objects (collected rarely)  
val database = Database()  // Lives entire app lifetime
val configuration = AppConfig()  // Static configuration</code></pre>
<h3>GC Event Logs</h3>
<pre><code class="language-bash"># View GC events in logcat
adb logcat | grep "Explicit concurrent mark"
# Output: I/System: Explicit concurrent mark: 45.123ms</code></pre>`
          },
          {
            title: "Stop-The-World Pauses & Benchmarking",
            description: "Measuring and reducing garbage collection pause times",
            details: `<h3>What is Stop-The-World?</h3>
<p>During certain GC phases (especially sweeping), all application threads are paused. Nothing executes until GC completes. This causes jank if pause exceeds 16ms (at 60 FPS).</p>
<h3>Measuring GC Pause Duration</h3>
<pre><code class="language-kotlin">val startTime = System.nanoTime()

// ... operation that triggers GC ...

val endTime = System.nanoTime()
val durationMs = (endTime - startTime) / 1_000_000
Log.d("GC", "Pause duration: \${durationMs}ms")

// GC pause is noticeable if > 16ms</code></pre>
<h3>Techniques to Minimize Pauses</h3>
<ul>
  <li><strong>Reduce Allocation Rate:</strong> Create fewer objects per frame</li>
  <li><strong>Object Pooling:</strong> Reuse objects instead of creating new ones</li>
  <li><strong>Explicit Nullification:</strong> Clear references in onDestroy()</li>
  <li><strong>Batch Operations:</strong> Group allocations to reduce GC frequency</li>
  <li><strong>Use Primitives:</strong> Avoid Integer/Long wrapper objects</li>
</ul>
<h3>GC Profiler Output Analysis</h3>
<table>
  <tr>
    <th>Metric</th>
    <th>Healthy Value</th>
  </tr>
  <tr>
    <td>GC frequency</td>
    <td>&lt;2 per second</td>
  </tr>
  <tr>
    <td>Pause duration</td>
    <td>&lt;10 ms</td>
  </tr>
  <tr>
    <td>Max pause</td>
    <td>&lt;20 ms</td>
  </tr>
  <tr>
    <td>Freed memory per GC</td>
    <td>&gt;50% of heap</td>
  </tr>
</table>`
          }
        ]
      },
      {
        id: "low-memory-killer",
        title: "Low Memory Killer (LMK)",
        difficulty: "Advanced",
        duration: "50 min",
        keywords: ["lmk", "memory", "killer", "oom", "process"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1100s",
        officialRef: "https://source.android.com/docs/core/runtime/low-ram",
        subtopics: ["Process Priority", "OOM Scoring", "Memory Thresholds"],
        contentSections: [
          {
            title: "Low Memory Killer (LMK) System",
            description: "How Android terminates processes when memory runs low",
            details: `<h3>What is Low Memory Killer?</h3>
<p>LMK is a kernel mechanism that terminates less important processes when system RAM is critically low. It prevents system-wide memory exhaustion by running out of memory (OOM) condition.</p>
<h3>Memory Pressure Levels</h3>
<table>
  <tr>
    <th>Level</th>
    <th>Free Memory</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Critical</td>
    <td>&lt;25 MB</td>
    <td>Kill background apps</td>
  </tr>
  <tr>
    <td>High</td>
    <td>25-50 MB</td>
    <td>Kill cached processes</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>50-100 MB</td>
    <td>Monitor closely</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>&gt;100 MB</td>
    <td>Normal operation</td>
  </tr>
</table>
<h3>Process Priority Order (highest to lowest)</h3>
<pre><code>1. Foreground App (interactive, user visible)
2. Visible App (visible but not foreground)
3. Started Service (background service running)
4. Cached App (resumed but backgrounded)
5. Empty Process (killed but kept for relaunch speed)</code></pre>
<h3>Checking LMK Status</h3>
<pre><code class="language-bash">adb shell cat /sys/module/lowmemorykiller/parameters/minfree_0
# Output: 18432 (in pages, ~72 MB on 4KB page size)</code></pre>`
          },
          {
            title: "OOM Scoring & Process Termination Priority",
            description: "Understanding how Android decides which process to kill",
            details: `<h3>OOM Score Calculation</h3>
<p>Each process has an OOM score (0-1000) determining kill priority. Higher score = higher kill probability. Score based on memory usage and process state.</p>
<pre><code class="language-kotlin">// OOM Score Factors
val oomScore = baseScore + memoryPenalty + statePenalty

// Process states affect score:
// - Foreground: lowest score (protected)
// - Home screen: medium score
// - Cached: high score (killed easily)
// - Empty: highest score (killed first)</code></pre>
<h3>Checking Process OOM Scores</h3>
<pre><code class="language-bash"># View OOM scores
adb shell cat /proc/[pid]/oom_score

# See all processes with scores
adb shell ps -o PID,%MEM,OOM_SCORE_ADJ,CMD | sort -k3 -rn</code></pre>
<h3>Preventing App Termination</h3>
<ul>
  <li><strong>Foreground Service:</strong> Higher priority (visible notification required)</li>
  <li><strong>Keep Memory Low:</strong> Don't use excessive RAM</li>
  <li><strong>Idle Cleanup:</strong> Release resources when backgrounded</li>
  <li><strong>Watchdog Service:</strong> Monitor and restart if killed</li>
</ul>
<h3>Recovery from Termination</h3>
<pre><code class="language-kotlin">// Detect if app was killed and restarted
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    
    if (savedInstanceState == null) {
        // First launch
    } else {
        // Restored from previous state
        restorePreviousState(savedInstanceState)
    }
}</code></pre>`
          },
          {
            title: "Memory Thresholds & Foreground Services",
            description: "Configuring and monitoring memory thresholds for app survival",
            details: `<h3>Memory Threshold Configuration</h3>
<p>System defines multiple memory thresholds at different levels. Different processes have different thresholds based on their priority.</p>
<pre><code class="language-bash"># View current memory thresholds
adb shell cat /sys/module/lowmemorykiller/parameters/

# Example thresholds (in pages):
# minfree_0 (first level): 18432 pages
# minfree_1 (second level): 23040 pages  
# minfree_2, minfree_3: progressively higher</code></pre>
<h3>Protecting Apps with Foreground Services</h3>
<pre><code class="language-kotlin">// Keep app alive by using foreground service
class MusicService : Service() {
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        
        val notification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setContentTitle("Playing Music")
            .setSmallIcon(R.drawable.ic_music)
            .build()
        
        // Start as foreground service (prevents LMK kill)
        startForeground(NOTIFICATION_ID, notification)
        
        return START_STICKY  // Restart if killed
    }
}</code></pre>
<h3>Memory Monitoring Checklist</h3>
<ul>
  <li>Monitor free memory regularly: <code>adb shell free -h</code></li>
  <li>Track app memory usage: <code>adb shell dumpsys meminfo</code></li>
  <li>Test on low-memory devices (2GB RAM)</li>
  <li>Simulate memory pressure: <code>adb shell getprop ro.lowmem true</code></li>
  <li>Monitor app lifecycle state transitions</li>
  <li>Implement savedInstanceState handling</li>
</ul>
<h3>LMK Process Kill Flow</h3>
<pre><code>Memory Pressure Detected
    ↓
Calculate OOM Scores for All Processes
    ↓
Find Process with Highest Score Above Threshold
    ↓
Send SIGKILL Signal
    ↓
Process Terminates + onDestroy() Called</code></pre>`
          }
        ]
      },
      {
        id: "art-runtime",
        title: "ART Runtime - Ahead-Of-Time Compilation",
        difficulty: "Advanced",
        duration: "55 min",
        keywords: ["art", "runtime", "aot", "compilation", "dex"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1160s",
        officialRef: "https://source.android.com/docs/core/runtime",
        subtopics: ["DEX Format", "Compiler Optimization", "Verification"],
        contentSections: [
          {
            title: "ART Runtime Architecture & DEX Format",
            description: "Understanding Android Runtime and bytecode execution",
            details: `<h3>What is ART?</h3>
<p>ART (Android Runtime) replaced Dalvik in Android 5.0. It executes DEX bytecode, manages memory, and handles garbage collection. Uses Ahead-Of-Time (AOT) compilation for improved performance.</p>
<h3>DEX Format Structure</h3>
<pre><code class="language-">DEX File Format (Dalvik Executable):
┌──────────────────────────────┐
│ Header (0x3500 magic)        │
├──────────────────────────────┤
│ String ID Section            │  ("Hello", "onCreate", etc)
├──────────────────────────────┤
│ Type ID Section              │  (class references)
├──────────────────────────────┤
│ Proto ID Section             │  (method signatures)
├──────────────────────────────┤
│ Field ID Section             │  (field definitions)
├──────────────────────────────┤
│ Method ID Section            │  (method definitions)
├──────────────────────────────┤
│ Class Def Section            │  (class implementations)
├──────────────────────────────┤
│ Encoded Arrays & Bytecode    │  (actual executable code)
└──────────────────────────────┘</code></pre>
<h3>APK Compilation Process</h3>
<pre><code>Java Source Code 
    ↓ (javac)
Java Bytecode (.class)
    ↓ (dx/d8 tool)
DEX Bytecode (.dex files)  
    ↓ (packaged in APK)
APK File
    ↓ (installed on device)
ART Compilation (if AOT)
    ↓
OAT File (optimized native code)</code></pre>
<h3>Examining DEX Files</h3>
<pre><code class="language-bash"># Extract and analyze APK structure
adb pull /data/app/com.example.app/base.apk ./
unzip base.apk "classes*.dex"

# Use aapt to examine
aapt dump badging base.apk</code></pre>`
          },
          {
            title: "Ahead-Of-Time (AOT) vs Just-In-Time (JIT) Compilation",
            description: "Comparing compilation strategies and their performance implications",
            details: `<h3>AOT Compilation (Ahead-Of-Time)</h3>
<p>AOT compiles DEX to native ARM/ARM64 code at install time or boot time. Produces fast execution but slow installation and larger storage footprint.</p>
<pre><code class="language-">AOT Compilation Timeline:
┌─────────────────────────────────────────┐
│ Install Time (5-10 seconds extra)       │
├─────────────────────────────────────────┤
│ DexOpt/DexSC process runs               │
│ ├─ Parse DEX bytecode                   │
│ ├─ Verify method signatures             │
│ ├─ Compile to native code (ARM64)      │
│ └─ Generate .oat file                   │
└─────────────────────────────────────────┘

At Runtime: Native code executes directly
Performance: Very Fast (pre-compiled)</code></pre>
<h3>JIT Compilation (Just-In-Time)</h3>
<p>JIT compiles hot methods during runtime. Faster installation but slower initial execution. Modern ART uses hybrid approach.</p>
<pre><code class="language-kotlin">// Methods are profiled at runtime
// Hot methods (called frequently) are JIT compiled
// Profile data stored between sessions

// Example: RecyclerView onBindViewHolder
// Called frequently during scrolling
// Deep profile → automatic JIT compilation</code></pre>
<h3>Hybrid Approach (Modern ART)</h3>
<table>
  <tr>
    <th>Phase</th>
    <th>Compiler</th>
    <th>Timing</th>
    <th>Performance</th>
  </tr>
  <tr>
    <td>Install</td>
    <td>Verify-Only</td>
    <td>&lt;5 min</td>
    <td>JIT used initially</td>
  </tr>
  <tr>
    <td>Idle Maintenance</td>
    <td>AOT</td>
    <td>When plugged in</td>
    <td>Native code generated</td>
  </tr>
  <tr>
    <td>Runtime</td>
    <td>JIT</td>
    <td>During execution</td>
    <td>Hot methods compiled</td>
  </tr>
</table>`
          },
          {
            title: "Method Verification & Runtime Optimization",
            description: "DEX verification and runtime performance optimization",
            details: `<h3>DEX Verification Process</h3>
<p>Before any method executes, ART verifies bytecode correctness. This ensures type safety, valid register usage, and method references.</p>
<pre><code class="language-bash"># View verification status
adb logcat | grep "dex2oat"

# Examine generated OAT file
adb pull /data/dalvik-cache/*/base.odex</code></pre>
<h3>Verification Checks</h3>
<ul>
  <li><strong>Type Checking:</strong> Verify method argument types match usage</li>
  <li><strong>Register Validation:</strong> Check register count and usage</li>
  <li><strong>Exception Handler Verification:</strong> Valid try-catch blocks</li>
  <li><strong>Reference Validation:</strong> Called methods/fields exist</li>
  <li><strong>Access Control Checks:</strong> Respect visibility modifiers</li>
</ul>
<h3>Runtime Method Optimization</h3>
<pre><code class="language-kotlin">// Inline methods
@Inline
fun getX(): Int = x  // Simple getters inlined

// Loop unrolling
for (i in 0..99) {
    process(array[i])  // May be unrolled at runtime
}

// Escape analysis
val list = ArrayList<Int>()
for (i in 0..9) {
    list.add(i)  // May allocate on stack, not heap
}
// list scope ends here - stack freed automatically</code></pre>
<h3>Performance Metrics to Monitor</h3>
<pre><code class="language-bash"># Check app startup time
adb shell am start -W com.example.app

# Output:
# TotalTime: 2500  (milliseconds)
#   thisTime: 2500
#   waitTime: 500</code></pre>
<h3>OAT File Structure</h3>
<table>
  <tr>
    <th>Section</th>
    <th>Content</th>
  </tr>
  <tr>
    <td>Headers</td>
    <td>Version, architecture info</td>
  </tr>
  <tr>
    <td>Native Code</td>
    <td>Compiled ARM64/x86 machine code</td>
  </tr>
  <tr>
    <td>Metadata</td>
    <td>Stack maps, debug info</td>
  </tr>
  <tr>
    <td>DEX Reference</td>
    <td>Link back to original DEX</td>
  </tr>
</table>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 05 ==========
  {
    id: "graphics-display",
    category: "05. Graphics Pipeline & Display",
    icon: "🎨",
    difficulty: "Advanced",
    description: "SurfaceFlinger, BufferQueue, Gralloc, rendering",
    topics: [
      {
        id: "surfaceflinger",
        title: "SurfaceFlinger - Composition Engine",
        difficulty: "Advanced",
        duration: "75 min",
        keywords: ["surfaceflinger", "composition", "display", "rendering"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1240s",
        officialRef: "https://source.android.com/docs/core/graphics",
        subtopics: ["Layer Composition", "Vsync", "Display Controller"],
        contentSections: [
          {
            title: "SurfaceFlinger Architecture",
            description: "The display compositor managing all UI layers",
            details: `<h3>What is SurfaceFlinger?</h3><p>SurfaceFlinger is the system service responsible for compositing all visible surfaces (layers) into the final display buffer. It runs at 60 FPS (or higher) to ensure smooth visuals.</p><h3>Key Responsibilities</h3><ul><li>Collect buffers from all apps and system services</li><li>Composite layers in Z-order</li><li>Apply transformations and effects</li><li>Output final frame to display</li></ul><pre><code>App 1 Surface → BufferQueue
App 2 Surface → BufferQueue
System UI Surface → BufferQueue
             ↓
       SurfaceFlinger (Composites)
             ↓
      Hardware Composer (HWC)
             ↓
         Display Panel</code></pre>`
          },
          {
            title: "Vsync & Frame Timing",
            description: "Synchronization with display refresh rate",
            details: `<h3>Vsync Signal</h3><p>Vsync (vertical sync) is a signal from the display hardware indicating the start of a new refresh cycle (typically every 16.67ms for 60Hz displays).</p><h3>Frame Rendering Pipeline</h3><pre><code>Vsync Signal (16.67ms)
    ↓
App Draws Frame
    ↓
SurfaceFlinger Composites
    ↓
Send to Display
    ↓
Next Vsync</code></pre><h3>Optimizing Frame Rate</h3><pre><code class="language-kotlin">// Use choreographer for sync with vsync
Choreographer.getInstance().postFrameCallback {
    // Code runs at vsync rate
    // Good for animations and game loops
}</code></pre>`
          }
        ]
      },
      {
        id: "bufferqueue",
        title: "BufferQueue - Producer-Consumer Pattern",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["bufferqueue", "producer", "consumer", "graphics"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1310s",
        officialRef: "https://source.android.com/docs/core/graphics",
        subtopics: ["Buffer Management", "Queuing", "Synchronization"],
        contentSections: [
          {
            title: "BufferQueue Overview",
            description: "Producer-Consumer pattern for graphics buffers",
            details: `<h3>BufferQueue Concept</h3><p>BufferQueue decouples producers (apps rendering) from consumers (SurfaceFlinger compositing). Apps can render into buffers without waiting for composition.</p><h3>Queue Flow</h3><pre><code>Dequeue Buffer
    ↓
App Renders into Buffer
    ↓
Queue Buffer
    ↓
Consumer Processes
    ↓
Release Buffer</code></pre>`
          },
          {
            title: "Buffer Synchronization",
            description: "Coordinating producer and consumer operations",
            details: `<h3>Synchronization Mechanisms</h3><ul><li>Fences: Prevent consuming incomplete buffers</li><li>Semaphores: Limit queue depth</li><li>Callbacks: Notify on buffer events</li></ul><h3>Triple Buffering</h3><pre><code>Buffer 1 (Being rendered)
Buffer 2 (Ready for composition)
Buffer 3 (Already composed)</code></pre>`
          }
        ]
      },
      {
        id: "hwcomposer",
        title: "Hardware Composer (HWC)",
        difficulty: "Advanced",
        duration: "55 min",
        keywords: ["hwc", "hardware", "composer", "hal"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1380s",
        officialRef: "https://source.android.com/docs/core/graphics",
        subtopics: ["HWC Interface", "Layer Composition", "GPU Offloading"],
        contentSections: [
          {
            title: "Hardware Composer Architecture",
            description: "GPU-accelerated layer composition",
            details: `<h3>HWC Purpose</h3><p>HWC is a hardware abstraction layer that offloads composition work to GPU/display hardware, reducing CPU load and power consumption.</p><h3>HWC vs Software Composition</h3><table><tr><th>Factor</th><th>Software</th><th>HWC</th></tr><tr><td>CPU Usage</td><td>High</td><td>Low</td></tr><tr><td>Power</td><td>High Drain</td><td>Efficient</td></tr><tr><td>Latency</td><td>Higher</td><td>Lower</td></tr></table>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 06 ==========
  {
    id: "multimedia",
    category: "06. Multimedia - Camera & Media",
    icon: "🎬",
    difficulty: "Intermediate",
    description: "Camera framework, Media player, codecs, audio",
    topics: [
      {
        id: "camera-framework",
        title: "Camera Framework - Camera2 API",
        difficulty: "Intermediate",
        duration: "70 min",
        keywords: ["camera", "camera2", "photography", "capture"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1450s",
        officialRef: "https://source.android.com/docs/core/camera",
        subtopics: ["Camera2 API", "Capture Requests", "Image Formats"],
        contentSections: [
          {
            title: "Camera2 API Architecture",
            description: "Modern camera framework with request-response model",
            details: `<h3>Camera2 vs Legacy Camera API</h3><p>Camera2 provides low-level access to camera hardware with a request-based model where each frame capture is a request with specific parameters.</p><h3>Key Concepts</h3><ul><li><strong>CameraManager:</strong> Access available cameras</li><li><strong>CaptureRequest:</strong> Describes what to capture (resolution, focus, exposure)</li><li><strong>CaptureSession:</strong> Manages stream of requests</li><li><strong>CameraCaptureCallback:</strong> Receives results</li></ul>`
          },
          {
            title: "Capture Pipeline",
            description: "From request to final image",
            details: `<h3>Capture Flow</h3><pre><code>Open Camera
    ↓
Create CaptureSession
    ↓
Build CaptureRequest
    ↓
Send to Session
    ↓
Receive CameraCaptureCallback
    ↓
Process Result/Image</code></pre><h3>Image Formats</h3><p>Camera2 supports multiple formats: RAW (unprocessed), JPEG (compressed), NV21 (YUV).</p>`
          }
        ]
      },
      {
        id: "media-framework",
        title: "Media Framework - Audio & Video",
        difficulty: "Intermediate",
        duration: "65 min",
        keywords: ["media", "audio", "video", "playback", "codec"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1530s",
        officialRef: "https://source.android.com/docs/core/media",
        subtopics: ["Codec Management", "Format Support", "Playback Control"],
        contentSections: [
          {
            title: "MediaPlayer Architecture",
            description: "High-level media playback API",
            details: `<h3>MediaPlayer State Machine</h3><pre><code>Idle
  ↓
setDataSource()
  ↓
prepare() / prepareAsync()
  ↓
start()
  ↓
pause() / stop()
  ↓
release()</code></pre>`
          }
        ]
      },
      {
        id: "codec-framework",
        title: "Codec Framework - Hardware Accelerated",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["codec", "encoder", "decoder", "hw-accelerated"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1600s",
        officialRef: "https://source.android.com/docs/core/media",
        subtopics: ["Video Codecs", "Audio Codecs", "Hardware Acceleration"],
        contentSections: [
          {
            title: "MediaCodec API",
            description: "Hardware-accelerated encoding and decoding",
            details: `<h3>Codec Types</h3><ul><li>Video: H.264, H.265, VP8, VP9</li><li>Audio: AAC, Opus, FLAC</li></ul><p>MediaCodec uses hardware encoders/decoders when available, falling back to software.</p>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 07 ==========
  {
    id: "connectivity",
    category: "07. Connectivity - Bluetooth, WiFi, NFC",
    icon: "📡",
    difficulty: "Advanced",
    description: "Bluetooth Classic, BLE, WiFi, NFC protocols",
    topics: [
      {
        id: "bluetooth-classic",
        title: "Bluetooth Classic - Traditional BT",
        difficulty: "Advanced",
        duration: "70 min",
        keywords: ["bluetooth", "classic", "pairing", "acl"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1670s",
        officialRef: "https://source.android.com/docs/connectivity/bluetooth",
        subtopics: ["Pairing Process", "ACL Connections", "Audio Streaming"],
        contentSections: [
          {
            title: "Bluetooth Classic Architecture",
            description: "Traditional Bluetooth connectivity model",
            details: `<h3>Bluetooth Pairing</h3><pre><code>1. Device Discovery (30 seconds)
2. Pairing Request
3. PIN / Passkey Exchange  
4. Link Key Generation
5. Trust Storage in Database</code></pre><h3>ACL Connections</h3><p>Asynchronous Connectionless (ACL) is the primary connection type for data transfer in Bluetooth Classic.</p>`
          }
        ]
      },
      {
        id: "ble-protocol",
        title: "Bluetooth Low Energy (BLE)",
        difficulty: "Advanced",
        duration: "65 min",
        keywords: ["ble", "bluetooth", "low-energy", "gatt", "gap"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1750s",
        officialRef: "https://source.android.com/docs/connectivity/bluetooth/ble_overview",
        subtopics: ["GATT Protocol", "GAP Advertising", "Energy Efficiency"],
        contentSections: [
          {
            title: "BLE Fundamentals",
            description: "Low-power Bluetooth for IoT devices",
            details: `<h3>BLE vs Classic</h3><table><tr><th>Feature</th><th>Classic BT</th><th>BLE</th></tr><tr><td>Power</td><td>High</td><td>10x Lower</td></tr><tr><td>Range</td><td>100m</td><td>50-200m</td></tr><tr><td>Speed</td><td>Fast</td><td>Slower</td></tr><tr><td>Use Case</td><td>Audio</td><td>Sensors/IoT</td></tr></table>`
          }
        ]
      },
      {
        id: "wifi-framework",
        title: "WiFi Framework - Connectivity",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["wifi", "wireless", "scan", "connection"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1830s",
        officialRef: "https://source.android.com/docs/connectivity/wifi",
        subtopics: ["WiFi Scan", "Connection Management", "Power Saving"],
        contentSections: [
          {
            title: "WiFi Framework Architecture",
            description: "WiFi connectivity and management",
            details: `<h3>WiFi Manager</h3><p>WifiManager provides APIs to connect to WiFi networks, scan for available networks, and manage connectivity state.</p><h3>Connection Flow</h3><pre><code>Scan Networks
    ↓
Get Results
    ↓
Select Network
    ↓
Connect
    ↓
Obtain DHCP
    ↓
Ready</code></pre>`
          }
        ]
      },
      {
        id: "nfc-framework",
        title: "NFC - Near Field Communication",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["nfc", "near-field", "rfid", "tag"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1900s",
        officialRef: "https://source.android.com/docs/connectivity/nfc",
        subtopics: ["Tag Reading", "P2P Communication", "NDEF Format"],
        contentSections: [
          {
            title: "NFC Basics",
            description: "Short-range wireless communication",
            details: `<h3>NFC Modes</h3><ul><li>Read/Write: Read data from NFC tags</li><li>P2P: Device-to-device communication</li><li>CardEmulation: Act as NFC card</li></ul><h3>NDEF Format</h3><p>NFC Data Exchange Format (NDEF) is the standard for storing data on NFC tags.</p>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 08 ==========
  {
    id: "security",
    category: "08. Security - SELinux, Permissions, Encryption",
    icon: "🔐",
    difficulty: "Advanced",
    description: "SELinux, DM-VERITY, permissions, encryption",
    topics: [
      {
        id: "selinux-framework",
        title: "SELinux - Security-Enhanced Linux",
        difficulty: "Advanced",
        duration: "80 min",
        keywords: ["selinux", "MAC", "policy", "enforcement"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=1980s",
        officialRef: "https://source.android.com/docs/security/selinux",
        subtopics: ["SELinux Contexts", "Policy Writing", "AVC Denials"],
        contentSections: [
          {
            title: "SELinux Fundamentals",
            description: "Mandatory Access Control system",
            details: `<h3>DAC vs MAC</h3><table><tr><th></th><th>DAC</th><th>MAC</th></tr><tr><td>Decision</td><td>Owner decides</td><td>Admin policy</td></tr><tr><td>Bypass</td><td>root can bypass</td><td>No bypass</td></tr><tr><td>Security</td><td>Weaker</td><td>Stronger</td></tr></table><h3>SELinux Contexts</h3><pre><code>user:role:type:level
  ↓    ↓    ↓     ↓
system_u:object_r:init_exec_t:s0</code></pre>`
          }
        ]
      },
      {
        id: "verified-boot",
        title: "Verified Boot & DM-VERITY",
        difficulty: "Advanced",
        duration: "70 min",
        keywords: ["verified-boot", "dmverity", "integrity", "bootloader"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2070s",
        officialRef: "https://source.android.com/docs/security/verification/verified-boot",
        subtopics: ["Boot Chain", "Hash Trees", "FEC"],
        contentSections: [
          {
            title: "Verified Boot Chain",
            description: "Ensuring system integrity from boot",
            details: `<h3>Boot Chain</h3><pre><code>ROM Code (immutable)
    ↓ (verify signature)
Bootloader
    ↓ (verify hash)
Kernel
    ↓ (verify hash tree)
Root Filesystem</code></pre><h3>DM-VERITY</h3><p>Device Mapper VERITY creates a hash tree for the filesystem, detecting any tampering at runtime.</p>`
          }
        ]
      },
      {
        id: "permissions-system",
        title: "Permission System - Runtime Permissions",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["permissions", "runtime", "dangerous", "manifest"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2150s",
        officialRef: "https://developer.android.com/training/permissions",
        subtopics: ["Permission Groups", "Runtime Checks", "Scoped Storage"],
        contentSections: [
          {
            title: "Runtime Permissions",
            description: "Modern Android permission model",
            details: `<h3>Permission Categories</h3><ul><li>Normal: Auto-granted (internet, etc.)</li><li>Dangerous: Requires user consent (camera, location)</li><li>Special: Special handling (system alert window)</li></ul>`
          }
        ]
      },
      {
        id: "encryption-storage",
        title: "Encryption & Secure Storage",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["encryption", "storage", "keystore", "secure"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2220s",
        officialRef: "https://source.android.com/docs/security/encryption",
        subtopics: ["File Encryption", "Keystore", "FBE/FDE"],
        contentSections: [
          {
            title: "Storage Encryption",
            description: "Protecting user data with encryption",
            details: `<h3>Encryption Types</h3><ul><li>Full Disk Encryption (FDE): Entire device encrypted</li><li>File-Based Encryption (FBE): Per-file encryption</li></ul><h3>Android Keystore</h3><p>Secure key storage that keeps keys isolated from app memory, protected by hardware if available.</p>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 09 ==========
  {
    id: "build-system",
    category: "09. Build System - Android.bp, AIDL, HIDL",
    icon: "🔨",
    difficulty: "Advanced",
    description: "Build configuration, compilation, APK generation",
    topics: [
      {
        id: "android-bp",
        title: "Android.bp - Soong Build System",
        difficulty: "Advanced",
        duration: "65 min",
        keywords: ["android.bp", "soong", "build", "module"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2310s",
        officialRef: "https://source.android.com/docs/setup/build",
        subtopics: ["Module Definition", "Dependencies", "Compilation Flags"],
        contentSections: [
          {
            title: "Soong Build System",
            description: "Modern Android build configuration",
            details: `<h3>Android.bp Structure</h3><pre><code>cc_binary {
  name: "myapp",
  srcs: ["*.cc"],
  header_libs: ["libinclude"],
  shared_libs: ["libfoo"],
  cflags: ["-Wall"],
}</code></pre><h3>Module Types</h3><ul><li>cc_binary: C++ executable</li><li>cc_library: Shared library</li><li>android_app: Android app</li></ul>`
          }
        ]
      },
      {
        id: "aidl-compiler",
        title: "AIDL Compiler - Interface Generation",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["aidl", "compiler", "interface", "stub"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2390s",
        officialRef: "https://source.android.com/docs",
        subtopics: ["AIDL Syntax", "Stub Generation", "IPC Stubs"],
        contentSections: [
          {
            title: "AIDL Code Generation",
            description: "Automatically generating IPC interfaces",
            details: `<h3>AIDL Definition</h3><pre><code class="language-">// IMyService.aidl
package com.example;

interface IMyService {
  String getName();
  void doSomething(in String data);
}</code></pre>`
          }
        ]
      },
      {
        id: "hidl-framework",
        title: "HIDL - HAL Interface Definition Language",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["hidl", "hal", "interface", "hardware"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2460s",
        officialRef: "https://source.android.com/docs/core/architecture/hidl",
        subtopics: ["HIDL Definition", "Versioning", "Transport Layer"],
        contentSections: [
          {
            title: "HIDL Architecture",
            description: "Hardware abstraction interface language",
            details: `<h3>HIDL vs AIDL</h3><table><tr><th>Aspect</th><th>AIDL</th><th>HIDL</th></tr><tr><td>Purpose</td><td>App IPC</td><td>HAL Communication</td></tr><tr><td>Stability</td><td>Fluid</td><td>Versioned</td></tr><tr><td>Access</td><td>Apps</td><td>System services</td></tr></table>`
          }
        ]
      },
      {
        id: "apk-generation",
        title: "APK Generation & Signing",
        difficulty: "Intermediate",
        duration: "45 min",
        keywords: ["apk", "signing", "packaging", "manifest"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2540s",
        officialRef: "https://developer.android.com",
        subtopics: ["APK Format", "Code Signing", "Resource Compilation"],
        contentSections: [
          {
            title: "APK Format & Signing",
            description: "Building and securing application packages",
            details: `<h3>APK Structure</h3><pre><code>app.apk
├─ classes.dex (compiled code)
├─ resources.arsc (compiled resources)
├─ lib/ (native libraries)
└─ META-INF/ (signatures)</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 10 ==========
  {
    id: "testing-debugging",
    category: "10. Testing & Debugging",
    icon: "✅",
    difficulty: "Intermediate",
    description: "CTS/GTS/VTS, dumpsys, logcat, debugging",
    topics: [
      {
        id: "cts-testing",
        title: "CTS - Compatibility Test Suite",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["cts", "testing", "compatibility", "certification"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2620s",
        officialRef: "https://source.android.com/docs/compatibility/cts",
        subtopics: ["CTS Modules", "Test Execution", "Result Analysis"],
        contentSections: [
          {
            title: "CTS Framework",
            description: "Ensuring device compatibility with Android",
            details: `<h3>CTS Purpose</h3><p>CTS (Compatibility Test Suite) is a comprehensive test framework that verifies Android devices comply with Android specifications.</p><h3>CTS Components</h3><ul><li>CTS: Core platform compatibility</li><li>GTS: Google services compatibility</li><li>VTS: Vendor HAL compatibility</li></ul>`
          }
        ]
      },
      {
        id: "debugging-tools",
        title: "Debugging Tools - logcat, dumpsys, adb",
        difficulty: "Intermediate",
        duration: "60 min",
        keywords: ["debug", "logcat", "dumpsys", "adb", "trace"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2700s",
        officialRef: "https://developer.android.com/studio/debug",
        subtopics: ["ADB Commands", "System Logs", "Service Dumps"],
        contentSections: [
          {
            title: "System Debugging",
            description: "Essential tools for system-level debugging",
            details: `<h3>Key Tools</h3><ul><li>logcat: View system and app logs</li><li>dumpsys: Dump service state</li><li>strace: Trace system calls</li></ul><h3>Common Commands</h3><pre><code class="language-bash">adb logcat | grep TAG
adb dumpsys activity
adb shell strace -p PID</code></pre>`
          }
        ]
      },
      {
        id: "performance-profiling",
        title: "Performance Profiling & Analysis",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["performance", "profiling", "trace", "systrace"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2780s",
        officialRef: "https://developer.android.com/studio/profile",
        subtopics: ["CPU Profiling", "Memory Profiling", "Frame Rate"],
        contentSections: [
          {
            title: "Performance Analysis",
            description: "Identifying and fixing performance issues",
            details: `<h3>Profiling Methods</h3><ul><li>CPU: Method tracing, stack sampling</li><li>Memory: Heap dumps, native allocation tracking</li><li>Frame Rate: Vsync drops, jank detection</li></ul><p>Use systrace to correlate events across processes.</p>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 11 ==========
  {
    id: "power-management",
    category: "11. Power Management & Battery",
    icon: "🔋",
    difficulty: "Intermediate",
    description: "Doze mode, standby, battery optimization",
    topics: [
      {
        id: "doze-mode",
        title: "Doze Mode - Battery Optimization",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["doze", "battery", "idle", "optimization"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2860s",
        officialRef: "https://developer.android.com/training/monitoring-device-state/doze-standby",
        subtopics: ["Doze Stages", "Whitelisting", "App Restrictions"],
        contentSections: [
          {
            title: "Doze Mode Overview",
            description: "Ultra-power-saving mode for idle devices",
            details: `<h3>Doze Stages</h3><ol><li><strong>Light Doze:</strong> Limited background activity</li><li><strong>Full Doze:</strong> Minimal activity, alarms delayed</li><li><strong>Deep Doze:</strong> Almost everything disabled</li></ol><h3>Developer Actions</h3><pre><code>adb shell dumpsys deviceidle step
adb shell dumpsys battery reset</code></pre>`
          }
        ]
      },
      {
        id: "app-standby",
        title: "App Standby Buckets - Usage Classification",
        difficulty: "Intermediate",
        duration: "45 min",
        keywords: ["standby", "buckets", "classification", "inactive"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=2930s",
        officialRef: "https://developer.android.com",
        subtopics: ["Bucket Assignment", "Activity Classification", "Restrictions"],
        contentSections: [
          {
            title: "App Standby Buckets",
            description: "Categorizing app usage patterns",
            details: `<h3>Bucket Types</h3><ul><li>Active: Currently used</li><li>Working Set: Actively used recently</li><li>Frequent: Often used</li><li>Rare: Rarely used</li><li>Never: Never used</li></ul>`
          }
        ]
      },
      {
        id: "thermal-management",
        title: "Thermal Management & Throttling",
        difficulty: "Advanced",
        duration: "50 min",
        keywords: ["thermal", "temperature", "throttling", "heat"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3010s",
        officialRef: "https://source.android.com/docs",
        subtopics: ["Temperature Monitoring", "Frequency Scaling", "Core Throttling"],
        contentSections: [
          {
            title: "Thermal Control",
            description: "Managing device temperature",
            details: `<h3>Thermal Throttling</h3><p>When device temperature exceeds thresholds, CPU frequency is reduced to cool the device down. This prevents damage but impacts performance.</p><h3>Monitoring</h3><pre><code>adb shell cat /sys/class/thermal/thermal_zone0/temp
adb shell dumpsys health</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 12 ==========
  {
    id: "modern-architecture",
    category: "12. Modern App Architecture",
    icon: "🏛️",
    difficulty: "Intermediate",
    description: "MVVM, multi-module, dependency injection",
    topics: [
      {
        id: "mvvm-pattern",
        title: "MVVM Architecture Pattern",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["mvvm", "architecture", "viewmodel", "livedata"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3090s",
        officialRef: "https://developer.android.com/jetpack/guide",
        subtopics: ["ViewModel", "LiveData", "Data Binding"],
        contentSections: [
          {
            title: "MVVM Architecture",
            description: "Model-View-ViewModel pattern for Android",
            details: `<h3>Components</h3><ul><li><strong>Model:</strong> Data and business logic</li><li><strong>View:</strong> UI elements (Activity/Fragment)</li><li><strong>ViewModel:</strong> Exposes Model to View</li></ul><h3>Benefits</h3><ul><li>Separation of concerns</li><li>Testable code</li><li>UI survives configuration changes</li></ul>`
          }
        ]
      },
      {
        id: "dependency-injection",
        title: "Dependency Injection - Hilt Framework",
        difficulty: "Intermediate",
        duration: "50 min",
        keywords: ["di", "hilt", "injection", "dependencies"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3160s",
        officialRef: "https://developer.android.com/training/dependency-injection",
        subtopics: ["Hilt Setup", "Module Definition", "Scoping"],
        contentSections: [
          {
            title: "Dependency Injection with Hilt",
            description: "Managing dependencies elegantly",
            details: `<h3>Why DI?</h3><ul><li>Loose coupling between classes</li><li>Easy testing with mocks</li><li>Centralized configuration</li></ul><h3>Hilt Components</h3><pre><code class="language-">@HiltAndroidApp (in Application class)
@AndroidEntryPoint (in Activity/Fragment)
@Inject (inject dependency)
@Module (provide dependencies)</code></pre>`
          }
        ]
      },
      {
        id: "multi-module",
        title: "Multi-Module App Architecture",
        difficulty: "Intermediate",
        duration: "55 min",
        keywords: ["multi-module", "modular", "feature", "core"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3240s",
        officialRef: "https://developer.android.com/topic/architecture",
        subtopics: ["Module Organization", "Feature Modules", "Core Modules"],
        contentSections: [
          {
            title: "Modular Architecture",
            description: "Organizing large apps into independent modules",
            details: `<h3>Module Types</h3><ul><li>App: Main application module</li><li>Core: Shared utilities, networking, database</li><li>Feature: Feature-specific UI and logic</li></ul><h3>Benefits</h3><ul><li>Parallel development</li><li>Reduced build time</li><li>Better testing isolation</li></ul>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 13 ==========
  {
    id: "boot-lifecycle",
    category: "13. Boot Process & System Lifecycle",
    icon: "⚡",
    difficulty: "Advanced",
    description: "Boot sequence, Init, Zygote, SystemServer",
    topics: [
      {
        id: "boot-sequence",
        title: "Android Boot Sequence - Complete Flow",
        difficulty: "Advanced",
        duration: "80 min",
        keywords: ["boot", "sequence", "bootloader", "kernel"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3320s",
        officialRef: "https://source.android.com/docs/core/architecture",
        subtopics: ["Bootloader", "Kernel Boot", "Init System"],
        contentSections: [
          {
            title: "Complete Boot Flow",
            description: "From power-on to SystemServer ready",
            details: `<h3>Boot Stages</h3><pre><code>1. ROM Code (Immutable bootloader)
2. Primary Bootloader (verify & load)
3. Secondary Bootloader (load kernel)
4. Linux Kernel (initialize hardware)
5. Init Process (start services)
6. Zygote (prepare runtime)
7. SystemServer (start system services)</code></pre>`
          }
        ]
      },
      {
        id: "init-process",
        title: "Init Process - System Initialization",
        difficulty: "Advanced",
        duration: "65 min",
        keywords: ["init", "process", "startup", "services"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3410s",
        officialRef: "https://source.android.com/docs",
        subtopics: ["Init Script", "Property System", "Service Management"],
        contentSections: [
          {
            title: "Init Process System",
            description: "Starting system services and properties",
            details: `<h3>init.rc Syntax</h3><pre><code>on boot
    start zygote
    start system_server

service zygote /system/bin/app_process
    class main
    onrestart restart media</code></pre><h3>Property System</h3><p>Android Properties provide system-wide configuration. Set via init.rc or setprop command.</p>`
          }
        ]
      },
      {
        id: "zygote-process",
        title: "Zygote Process - Application Forking",
        difficulty: "Advanced",
        duration: "60 min",
        keywords: ["zygote", "fork", "process", "app-launch"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3490s",
        officialRef: "https://source.android.com/docs",
        subtopics: ["Process Forking", "Runtime Initialization", "App Launch"],
        contentSections: [
          {
            title: "Zygote - Process Factory",
            description: "Efficient app process creation through COW forking",
            details: `<h3>App Launching</h3><ol><li>Zygote receives fork request from ActivityManager</li><li>Zygote forks existing process (Copy-on-Write)</li><li>Child runs app-specific code</li><li>App process is ready</li></ol><h3>Why Zygote?</h3><ul><li>Shared preloaded classes/resources</li><li>Faster app startup</li><li>Reduced memory overhead</li></ul>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 14 ==========
  {
    id: "adb-debugging",
    category: "14. ADB - Android Debug Bridge",
    icon: "🔧",
    difficulty: "Intermediate",
    description: "ADB commands, device debugging, app installation, shell access",
    topics: [
      {
        id: "adb-fundamentals",
        title: "ADB Fundamentals - What & Why",
        difficulty: "Beginner",
        duration: "45 min",
        keywords: ["adb", "debug", "bridge", "shell", "device"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3600s",
        officialRef: "https://developer.android.com/tools/adb",
        subtopics: ["ADB Architecture", "Client-Daemon Model", "Connection Methods"],
        contentSections: [
          {
            title: "What is ADB?",
            description: "The bridge between your development machine and Android devices",
            details: `<h3>Purpose of ADB</h3><ul><li>Execute commands on Android device from computer</li><li>Push/pull files between device and computer</li><li>Install APKs</li><li>Access device shell</li><li>Debug apps</li><li>Capture logs</li><li>Monitor performance</li></ul><h3>Architecture</h3><pre><code>Your PC (Client)
       ↓
  ADB Daemon (on device)
       ↓
  Android System (shell)</code></pre>`
          },
          {
            title: "ADB Architecture & Connection",
            description: "How ADB communicates with devices",
            details: `<h3>Connection Methods</h3><ul><li><strong>USB:</strong> Direct USB cable connection (most reliable)</li><li><strong>TCP/IP:</strong> Over network (wireless debugging)</li><li><strong>Emulator:</strong> Built-in emulator communication</li></ul><h3>Device States</h3><table><tr><th>State</th><th>Meaning</th></tr><tr><td>offline</td><td>Device not responding to ADB</td></tr><tr><td>device</td><td>Device properly connected and authenticated</td></tr><tr><td>recovery</td><td>Device in recovery mode</td></tr><tr><td>sideload</td><td>Device in sideload mode (recovery)</td></tr></table>`
          },
          {
            title: "Setting Up ADB",
            description: "Getting ADB ready to use",
            details: `<h3>Installation</h3><pre><code># Windows - Using Android SDK
set PATH=%PATH%;C:\\Users\\YourName\\AppData\\Local\\Android\\Sdk\\platform-tools

# macOS
export PATH=$PATH:~/Library/Android/sdk/platform-tools

# Linux
export PATH=$PATH:~/Android/Sdk/platform-tools</code></pre><h3>Enable USB Debugging on Device</h3><ol><li>Go to Settings → About Phone</li><li>Tap Build Number 7 times</li><li>Go to Settings → Developer Options</li><li>Enable USB Debugging</li></ol>`
          }
        ]
      },
      {
        id: "adb-essential-commands",
        title: "Essential ADB Commands",
        difficulty: "Intermediate",
        duration: "60 min",
        keywords: ["adb", "commands", "shell", "devices", "logcat"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3720s",
        officialRef: "https://developer.android.com/tools/adb",
        subtopics: ["Device Management", "App Installation", "Shell Commands"],
        contentSections: [
          {
            title: "Device Management Commands",
            description: "Connect and manage devices",
            details: `<h3>List Connected Devices</h3><pre><code class="language-bash">adb devices
# Output:
# List of attached devices
# emulator-5554          device
# FA87K1A00135           device
# 192.168.1.100:5555     offline</code></pre><h3>Connect via TCP/IP</h3><pre><code class="language-bash">adb connect 192.168.1.100:5555
adb disconnect 192.168.1.100:5555</code></pre><h3>Check Device Model & Version</h3><pre><code class="language-bash">adb shell getprop ro.build.version.release    # Android version
adb shell getprop ro.product.model              # Device model
adb shell getprop ro.serialnumber               # Serial number</code></pre>`
          },
          {
            title: "Application Install & Uninstall",
            description: "Managing APKs on devices",
            details: `<h3>Install APK</h3><pre><code class="language-bash"># Install single APK
adb install app.apk

# Reinstall (replace)
adb install -r app.apk

# Install on specific device
adb -s serialnumber install app.apk

# Install multiple APKs
adb install-multiple app1.apk app2.apk app3.apk</code></pre><h3>Uninstall App</h3><pre><code class="language-bash"># Uninstall by package name
adb uninstall com.example.app

# Uninstall but keep data
adb uninstall -k com.example.app</code></pre><h3>Get Installed Packages</h3><pre><code class="language-bash">adb shell pm list packages              # All packages
adb shell pm list packages -3          # Third-party apps only
adb shell pm list packages -s          # System apps
adb shell pm list packages | grep example</code></pre>`
          },
          {
            title: "Logcat - View System & App Logs",
            description: "Capturing and filtering device logs",
            details: `<h3>Basic Logcat</h3><pre><code class="language-bash"># Show all logs (floods output)
adb logcat

# Clear logs
adb logcat -c

# Show logs with timestamp
adb logcat -v time

# Show logs from specific app (requires package name)
adb logcat | grep "PackageName"</code></pre><h3>Log Levels: V (Verbose), D (Debug), I (Info), W (Warn), E (Error)</h3><pre><code class="language-bash"># Show only error and warning
adb logcat *:W

# Show only specific tag with debug level
adb logcat MyTag:D *:S

# Filter and save to file
adb logcat > logfile.txt
adb logcat -d > logfile.txt  # -d: dump and exit</code></pre>`
          },
          {
            title: "File Transfer & Shell",
            description: "Moving files and executing shell commands",
            details: `<h3>Push & Pull Files</h3><pre><code class="language-bash"># Push file from PC to device
adb push myfile.txt /sdcard/
adb push myfile.txt /data/local/tmp/

# Pull file from device to PC
adb pull /sdcard/screenshot.png ~/Desktop/
adb pull /data/app/com.example.app/app.apk ~/</code></pre><h3>Shell Access</h3><pre><code class="language-bash"># Access device shell
adb shell

# Execute single command
adb shell ls /sdcard
adb shell cat /system/build.prop
adb shell ps -A          # List all processes
adb shell top -n 1       # Show top processes

# Check available disk space
adb shell df

# View system properties
adb shell getprop
adb shell getprop ro.build.version.sdk</code></pre>`
          }
        ]
      },
      {
        id: "adb-advanced-debugging",
        title: "Advanced Debugging with ADB",
        difficulty: "Advanced",
        duration: "55 min",
        keywords: ["adb", "debugging", "memory", "profiling", "crash"],
        videoTimestamp: "https://www.youtube.com/watch?v=14OffK9SR9c&t=3900s",
        officialRef: "https://developer.android.com/tools/adb",
        subtopics: ["Bug Reports", "Memory Dumps", "Performance Analysis"],
        contentSections: [
          {
            title: "Debugging APPs",
            description: "Getting detailed app information and crash logs",
            details: `<h3>Start App with Verbose Logging</h3><pre><code class="language-bash"># Clear logcat and start monitoring
adb logcat -c
adb logcat

# Start specific app and monitor its logs
adb shell am start -n com.example.app/.MainActivity
# Now monitor logcat for that app's output</code></pre><h3>Kill & Restart App</h3><pre><code class="language-bash"># Kill app process
adb shell am force-stop com.example.app

# Start app
adb shell am start -n com.example.app/.MainActivity

# Get package info
adb shell dumpsys package com.example.app</code></pre><h3>View App Database & Files</h3><pre><code class="language-bash"># Access app data directory
adb shell
run-as com.example.app
cd /data/data/com.example.app/
ls -la

# Pull entire app data to PC
adb backup -f myapp_backup.ab com.example.app</code></pre>`
          },
          {
            title: "Generate Bug Reports",
            description: "Capturing comprehensive system information",
            details: `<h3>Generate Bug Report</h3><pre><code class="language-bash"># Generate bug report (large file, takes time)
adb bugreport bugreport.zip

# View dumpsys output
adb shell dumpsys              # Everything
adb shell dumpsys meminfo     # Memory usage
adb shell dumpsys battery     # Battery status
adb shell dumpsys wifi        # WiFi status
adb shell dumpsys activity    # Activity manager info</code></pre><h3>Take Screenshot & Screen Recording</h3><pre><code class="language-bash"># Screenshot
adb shell screencap -p /sdcard/screenshot.png
adb pull /sdcard/screenshot.png ~/

# Record screen (up to 3 minutes)
adb shell screenrecord --time-limit 30 /sdcard/recording.mp4
adb pull /sdcard/recording.mp4 ~/</code></pre>`
          },
          {
            title: "Performance & Resource Monitoring",
            description: "Analyzing app performance and resource usage",
            details: `<h3>Memory Profiling</h3><pre><code class="language-bash"># Get memory info for app
adb shell dumpsys meminfo com.example.app

# Memory usage breakdown
adb shell ps -o VSZ -o RSS -o ETIME -o ARGS

# Show memory class limits
adb shell getprop dalvik.vm.heapsize</code></pre><h3>CPU Usage</h3><pre><code class="language-bash"># Real-time process stats
adb shell top -n 1 -o %CPU

# Record all thread info
adb shell dumpsys meminfo --local com.example.app</code></pre><h3>Network Monitor</h3><pre><code class="language-bash"># Check network interfaces
adb shell netstat -an

# View current connections
adb shell ss -tupan</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 15 ==========
  {
    id: "kotlin-programming",
    category: "15. Kotlin Programming Language",
    icon: "🎯",
    difficulty: "Beginner",
    description: "Master Kotlin: the modern language for Android development",
    topics: [
      {
        id: "kotlin-fundamentals",
        title: "Kotlin Fundamentals - Basics & Setup",
        difficulty: "Beginner",
        duration: "3 hours",
        keywords: ["kotlin", "language", "setup", "basics"],
        videoTimestamp: "https://www.youtube.com/watch?v=F9UC0DQvzV0",
        officialRef: "https://kotlinlang.org/docs/getting-started.html",
        subtopics: ["Variables & Types", "Functions", "String Templates", "Null Safety"],
        contentSections: [
          {
            title: "What is Kotlin?",
            description: "Kotlin is a modern, concise, and safer language for Android",
            details: `<h3>Why Kotlin?</h3><ul><li>Concise syntax (40% less code)</li><li>Null safety (NullPointerException prevention)</li><li>Extension functions</li><li>Official Android language</li><li>100% Java interoperable</li></ul><h3>Installation</h3><pre><code class="language-bash"># Using IntelliJ IDEA - Kotlin is built-in

# Or install standalone
# Download from https://kotlinlang.org/</code></pre>`
          },
          {
            title: "Variables, Types & Null Safety",
            description: "Kotlin's type system and how it prevents common errors",
            details: `<h3>Variable Declaration</h3><pre><code class="language-kotlin">// Immutable variable (preferred)
val name = "Android"  // Type inferred as String

// Mutable variable
var count = 0
count = 5  // OK

// Explicit type
val age: Int = 25

// Constants
const val API_KEY = "abc123"</code></pre><h3>Null Safety</h3><pre><code class="language-kotlin">// Nullable type
val nullableName: String? = null

// Non-nullable type
val name: String = "Android"
// name = null  // Compile error!

// Safe call operator
val length = nullableName?.length ?: 0

// Elvis operator
val userName = possibleName ?: "Guest"

// Not-null assertion (use carefully!)
val forceValue = nullableName!!</code></pre><h3>Smart Casts</h3><pre><code class="language-kotlin">val obj: Any = "Hello"

if (obj is String) {
    // obj is automatically cast to String
    println(obj.length)  // Works!
}</code></pre>`
          },
          {
            title: "Functions & Lambda Expressions",
            description: "Defining and using functions in Kotlin",
            details: `<h3>Function Syntax</h3><pre><code class="language-kotlin">// Simple function with return
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single expression function
fun multiply(a: Int, b: Int) = a * b

// Function with default parameters
fun greet(name: String = "Android") {
    println("Hello,  $name!")
}

// Function with varargs
fun printNumbers(vararg numbers: Int) {
    for (num in numbers) println(num)
}

// Extension function
fun String.addExclamation() = "$this!"
val result = "Hello".addExclamation()  // "Hello!"</code></pre><h3>Lambda Expressions</h3><pre><code class="language-kotlin">// Lambda with explicit parameters
val add = { a: Int, b: Int -> a + b }
val result = add(3, 5)  // 8

// Lambda with receiver (trailing lambda)
val greetings = "Android".apply { 
    println("Hello from $this")
}.also { 
    println("Value is $it")
}

// Lambdas in collections
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }  // [2, 4, 6, 8, 10]
val evens = numbers.filter { it % 2 == 0 }  // [2, 4]</code></pre>`
          }
        ]
      },
      {
        id: "kotlin-oop",
        title: "Object-Oriented Programming in Kotlin",
        difficulty: "Intermediate",
        duration: "4 hours",
        keywords: ["oop", "class", "inheritance", "interface"],
        videoTimestamp: "https://www.youtube.com/watch?v=0xKg9lFehYE",
        officialRef: "https://kotlinlang.org/docs/object-oriented-programming.html",
        subtopics: ["Classes & Objects", "Inheritance", "Interfaces & Sealed", "Data Classes"],
        contentSections: [
          {
            title: "Classes & Constructors",
            description: "Defining and instantiating classes in Kotlin",
            details: `<h3>Class Definition</h3><pre><code class="language-kotlin">// Simple class
class Person {
    var name: String = ""
    var age: Int = 0
}

// Primary constructor
class Person(val name: String, var age: Int) {
    fun introduce() = "Hi, I'm $name and $age years old"
}

// Init block
class Person(val name: String) {
    init {
        println("Created person: $name")
    }
}

// Secondary constructor
class Person(val name: String) {
    var age: Int = 0
    
    constructor(name: String, age: Int): this(name) {
        this.age = age
    }
}</code></pre><h3>Data Classes</h3><pre><code class="language-kotlin">// Data class automatically generates:
// equals(), hashCode(), toString(), copy()
data class User(
    val id: Int,
    val name: String,
    val email: String
)

val user1 = User(1, "John", "john@email.com")
val user2 = user1.copy(name = "Jane")  // Copy with some changes
println(user1 == user2)  // Checks equality by value</code></pre>`
          },
          {
            title: "Inheritance & Polymorphism",
            description: "Creating class hierarchies and using polymorphism",
            details: `<h3>Inheritance</h3><pre><code class="language-kotlin">// Custom Exception inherits from Exception
class CustomException(message: String): Exception(message)

// Open classes for inheritance
open class Animal(val name: String) {
    open fun sound() = "Some sound"
}

// Inherit from Animal
class Dog(name: String): Animal(name) {
    override fun sound() = "Woof!"
}

// Usage
val animal: Animal = Dog("Buddy")
println(animal.sound())  // Output: Woof!</code></pre><h3>Interfaces</h3><pre><code class="language-kotlin">interface Drawable {
    fun draw()
    fun getArea() = 0.0  // Default implementation
}

class Circle(val radius: Double): Drawable {
    override fun draw() {
        println("Drawing circle")
    }
    
    override fun getArea() = Math.PI * radius * radius
}

// Multiple interfaces
class Rectangle: Drawable, Comparable<Rectangle> {
    override fun draw() { /* ... */ }
    override fun compareTo(other: Rectangle) = 0
}</code></pre>`
          }
        ]
      },
      {
        id: "kotlin-collections",
        title: "Collections & Sequences",
        difficulty: "Intermediate",
        duration: "3 hours",
        keywords: ["collections", "list", "map", "set", "sequence"],
        videoTimestamp: "https://www.youtube.com/watch?v=XeNvWcJ5Oo0",
        officialRef: "https://kotlinlang.org/docs/collections-overview.html",
        subtopics: ["Lists & Arrays", "Maps & Sets", "Functional Operations"],
        contentSections: [
          {
            title: "Working with Collections",
            description: "Lists, Maps, and Sets in Kotlin",
            details: `<h3>Lists</h3><pre><code class="language-kotlin">// Immutable list
val fruits = listOf("apple", "banana", "orange")
println(fruits[0])  // apple

// Mutable list
val numbers = mutableListOf(1, 2, 3)
numbers.add(4)
numbers.remove(1)

// List operations
val doubled = numbers.map { it * 2 }
val filtered = numbers.filter { it > 2 }
val sum = numbers.fold(0) { acc, value -> acc + value }</code></pre><h3>Maps</h3><pre><code class="language-kotlin">// Immutable map
val settings = mapOf("theme" to "dark", "language" to "en")

// Mutable map
val cache = mutableMapOf<String, Any>()
cache["user"] = User(1, "John")
cache["count"] = 5

// Map iteration
for ((key, value) in cache) {
    println("$key -> $value")
}

// Map operations
val keys = settings.keys
val values = settings.values
val hasTheme = settings.containsKey("theme")</code></pre><h3>Sequences</h3><pre><code class="language-kotlin">// Sequences are lazy (evaluated on-demand)
val numbers = (1..1000).asSequence()
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(5)
    .toList()  // [4, 8, 12, 16, 20]

// More efficient than chaining on lists!</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 16 ==========
  {
    id: "android-ui-fundamentals",
    category: "16. Android UI Development",
    icon: "🎨",
    difficulty: "Beginner",
    description: "Master Android layouts, components, and UI design patterns",
    topics: [
      {
        id: "activity-fragment-basics",
        title: "Activities & Fragments - App Navigation",
        difficulty: "Beginner",
        duration: "5 hours",
        keywords: ["activity", "fragment", "lifecycle", "navigation"],
        videoTimestamp: "https://www.youtube.com/watch?v=p9VY9H5vcb8",
        officialRef: "https://developer.android.com/guide/components/activities",
        subtopics: ["Activity Lifecycle", "Fragment Lifecycle", "Navigation"],
        contentSections: [
          {
            title: "Activity Lifecycle & State Management",
            description: "Understanding Activity lifecycle and handling configuration changes",
            details: `<h3>Activity Lifecycle States</h3><pre><code>onCreate() → onStart() → onResume() → (Running)
                                    ↓
                              onPause() → onStop() → onDestroy()
                             (partially visible)   (not visible)
</code></pre><h3>Lifecycle Implementation</h3><pre><code class="language-kotlin">class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // Initialize UI and data
        Log.d("MainActivity", "onCreate called")
    }
    
    override fun onStart() {
        super.onStart()
        // App becomes visible
        Log.d("MainActivity", "onStart called")
    }
    
    override fun onResume() {
        super.onResume()
        // App gets user focus
        Log.d("MainActivity", "onResume called")
        startUpdatingUI()
    }
    
    override fun onPause() {
        super.onPause()
        // App losing focus (another app coming)
        Log.d("MainActivity", "onPause called")
        stopUpdatingUI()
    }
    
    override fun onStop() {
        super.onStop()
        // App no longer visible
        Log.d("MainActivity", "onStop called")
    }
    
    override fun onDestroy() {
        super.onDestroy()
        // Activity being destroyed
        Log.d("MainActivity", "onDestroy called")
        cleanup()
    }
}</code></pre><h3>Saving State</h3><pre><code class="language-kotlin">// Save state when activity might be destroyed
override fun onSaveInstanceState(outState: Bundle) {
    super.onSaveInstanceState(outState)
    outState.putString("user_name", "John")
    outState.putInt("counter", 42)
}

// Restore state
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    if (savedInstanceState != null) {
        val userName = savedInstanceState.getString("user_name")
        val counter = savedInstanceState.getInt("counter")
    }
}</code></pre>`
          },
          {
            title: "Fragments - Reusable UI Components",
            description: "Creating flexible, reusable UI with Fragments",
            details: `<h3>Fragment Creation</h3><pre><code class="language-kotlin">class HomeFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_home, container, false)
    }
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // Initialize views here
        val button = view.findViewById<Button>(R.id.btn_action)
        button.setOnClickListener {
            // Handle click
        }
    }
}

// Add fragment to Activity
val fragment = HomeFragment()
supportFragmentManager.beginTransaction()
    .add(R.id.fragment_container, fragment)
    .commit()</code></pre><h3>Fragment Communication</h3><pre><code class="language-kotlin">// Using shared ViewModel
class SharedViewModel : ViewModel() {
    val selectedItem = MutableLiveData<String>()
}

// In Fragment A
val viewModel: SharedViewModel = ViewModelProvider(requireActivity())
    .get(SharedViewModel::class.java)
viewModel.selectedItem.value = "Item 1"

// In Fragment B (listening)
viewModel.selectedItem.observe(viewLifecycleOwner) { item ->
    println("Selected: $item")
}</code></pre>`
          }
        ]
      },
      {
        id: "recyclerview-lists",
        title: "RecyclerView - Displaying Lists",
        difficulty: "Intermediate",
        duration: "4 hours",
        keywords: ["recyclerview", "adapter", "list", "performance"],
        videoTimestamp: "https://www.youtube.com/watch?v=8rtIK2hR0FM",
        officialRef: "https://developer.android.com/develop/ui/views/recyclerview",
        subtopics: ["RecyclerView Adapter", "ViewHolder Pattern", "Performance"],
        contentSections: [
          {
            title: "Building RecyclerView Adapters",
            description: "Creating efficient list adapters with RecyclerView",
            details: `<h3>Simple RecyclerView Adapter</h3><pre><code class="language-kotlin">// Data class for items
data class User(val id: Int, val name: String, val email: String)

// ViewHolder - holds views for one item
class UserViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    private val nameView: TextView = itemView.findViewById(R.id.text_name)
    private val emailView: TextView = itemView.findViewById(R.id.text_email)
    
    fun bind(user: User) {
        nameView.text = user.name
        emailView.text = user.email
    }
}

// Adapter - manages list of items
class UserAdapter(private val users: List<User>) : 
    RecyclerView.Adapter<UserViewHolder>() {
    
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_user, parent, false)
        return UserViewHolder(view)
    }
    
    override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
        holder.bind(users[position])
    }
    
    override fun getItemCount() = users.size
}</code></pre><h3>Setup RecyclerView in Activity</h3><pre><code class="language-kotlin">class UserListActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user_list)
        
        val recyclerView = findViewById<RecyclerView>(R.id.recycler_users)
        val users = listOf(
            User(1, "John", "john@email.com"),
            User(2, "Jane", "jane@email.com"),
            User(3, "Bob", "bob@email.com")
        )
        
        recyclerView.apply {
            layoutManager = LinearLayoutManager(this@UserListActivity)
            adapter = UserAdapter(users)
        }
    }
}</code></pre><h3>ListAdapter - Automatic Diff Updates</h3><pre><code class="language-kotlin">// Automatically detects item changes
class UserListAdapter : ListAdapter<User, UserViewHolder>(UserDiffCallback()) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_user, parent, false)
        return UserViewHolder(view)
    }
    
    override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
        holder.bind(getItem(position))
    }
}

class UserDiffCallback : DiffUtil.ItemCallback<User>() {
    override fun areItemsTheSame(old: User, new: User) = old.id == new.id
    override fun areContentsTheSame(old: User, new: User) = old == new
}</code></pre>`
          }
        ]
      },
      {
        id: "shared-preferences",
        title: "SharedPreferences - Storing Data",
        difficulty: "Beginner",
        duration: "2 hours",
        keywords: ["sharedpreferences", "storage", "preferences", "data"],
        videoTimestamp: "https://www.youtube.com/watch?v=CcV-VS4E9bo",
        officialRef: "https://developer.android.com/training/data-storage/shared-preferences",
        subtopics: ["Reading/Writing", "Data Types", "Best Practices"],
        contentSections: [
          {
            title: "Working with SharedPreferences",
            description: "Simple key-value storage for app preferences",
            details: `<h3>Reading & Writing Data</h3><pre><code class="language-kotlin">// Get SharedPreferences instance
val sharedPref = context.getSharedPreferences(
    "app_preferences", 
    Context.MODE_PRIVATE
)

// Write data
sharedPref.edit().apply {
    putString("username", "John")
    putInt("user_id", 123)
    putBoolean("is_logged_in", true)
    apply()  // Async commit
}

// Read data
val username = sharedPref.getString("username", "Guest")
val userId = sharedPref.getInt("user_id", -1)
val isLoggedIn = sharedPref.getBoolean("is_logged_in", false)</code></pre><h3>Using DefaultSharedPreferences</h3><pre><code class="language-kotlin">// System-wide preferences
val settings = PreferenceManager.getDefaultSharedPreferences(context)

settings.edit().apply {
    putString("theme", "dark")
    commit()  // Sync commit (wait for completion)
}

val theme = settings.getString("theme", "light")</code></pre><h3>Helper Extension</h3><pre><code class="language-kotlin">// Extension function for cleaner API
fun SharedPreferences.setUser(user: User) {
    edit().apply {
        putString("user_name", user.name)
        putInt("user_id", user.id)
        apply()
    }
}

fun SharedPreferences.getUser(): User? {
    val name = getString("user_name", null)
    val id = getInt("user_id", -1)
    return if (name != null && id != -1) User(id, name) else null
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 17 ==========
  {
    id: "mvvm-architecture",
    category: "17. MVVM & Modern Architecture Patterns",
    icon: "🏗️",
    difficulty: "Intermediate",
    description: "Build scalable, testable Android apps with MVVM and Jetpack",
    topics: [
      {
        id: "mvvm-pattern",
        title: "MVVM Architecture Pattern",
        difficulty: "Intermediate",
        duration: "5 hours",
        keywords: ["mvvm", "viewmodel", "livedata", "architecture"],
        videoTimestamp: "https://www.youtube.com/watch?v=5rHuHkH5NQY",
        officialRef: "https://developer.android.com/jetpack/guide",
        subtopics: ["ViewModel", "LiveData", "Data Binding"],
        contentSections: [
          {
            title: "MVVM Components - Model, View, ViewModel",
            description: "Understanding the MVVM architecture pattern",
            details: `<h3>MVVM Architecture Layers</h3><pre><code>┌─────────────────────────────────────────┐
│           VIEW (UI)                     │  Activity/Fragment
│      (Display + User Input)             │  └─ Observes ViewModel
├─────────────────────────────────────────┤
│         VIEWMODEL                       │  ViewModel
│    (UI Logic + State Management)        │  └─ Holds UI state
├─────────────────────────────────────────┤
│           MODEL                         │  Repository
│   (Business Logic + Data Access)        │  └─ Manages data
└─────────────────────────────────────────┘
</code></pre><h3>Creating a ViewModel</h3><pre><code class="language-kotlin">class UserViewModel : ViewModel() {
    // UI state exposed via LiveData
    private val _userName = MutableLiveData<String>()
    val userName: LiveData<String> = _userName
    
    private val _isLoading = MutableLiveData<Boolean>(false)
    val isLoading: LiveData<Boolean> = _isLoading
    
    // Business logic/use cases
    private val userRepository = UserRepository()
    
    fun loadUser(userId: Int) {
        _isLoading.value = true
        
        // Fetch from repository
        userRepository.getUser(userId) { user ->
            _userName.value = user.name
            _isLoading.value = false
        }
    }
    
    // ViewModel survives configuration changes!
    override fun onCleared() {
        super.onCleared()
        // Cleanup resources
        userRepository.cancel()
    }
}</code></pre><h3>Observing from Activity/Fragment</h3><pre><code class="language-kotlin">class UserActivity : AppCompatActivity() {
    private val viewModel: UserViewModel by viewModels()
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user)
        
        val nameView: TextView = findViewById(R.id.text_name)
        val loadingView: ProgressBar = findViewById(R.id.loading)
        
        // Observe ViewModel changes
        viewModel.userName.observe(this) { name ->
            nameView.text = name
        }
        
        viewModel.isLoading.observe(this) { loading ->
            loadingView.visibility = if (loading) View.VISIBLE else View.GONE
        }
        
        // Trigger data loading
        viewModel.loadUser(userId = 1)
    }
}</code></pre>`
          }
        ]
      },
      {
        id: "jetpack-compose",
        title: "Jetpack Compose - Modern UI Toolkit",
        difficulty: "Intermediate",
        duration: "6 hours",
        keywords: ["jetpack", "compose", "declarative", "ui"],
        videoTimestamp: "https://www.youtube.com/watch?v=ssEYhvzjKYs",
        officialRef: "https://developer.android.com/jetpack/compose",
        subtopics: ["Composables", "State", "Layouts", "Themes"],
        contentSections: [
          {
            title: "Introduction to Jetpack Compose",
            description: "Declarative UI toolkit for Android",
            details: `<h3>Hello World in Compose</h3><pre><code class="language-kotlin">@Composable
fun HelloScreen() {
    Text(text = "Hello, Compose!")
}

// In Activity
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HelloScreen()
        }
    }
}</code></pre><h3>Composable Functions</h3><pre><code class="language-kotlin">@Composable
fun GreetingCard(name: String) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        shape = RoundedCornerShape(8.dp),
        elevation = CardDefaults.cardElevation(4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = "Hello, $name!",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Welcome to Compose",
                fontSize = 14.sp,
                color = Color.Gray
            )
        }
    }
}

// Preview in Android Studio
@Preview
@Composable
fun GreetingCardPreview() {
    GreetingCard(name = "Android")
}</code></pre><h3>State Management in Compose</h3><pre><code class="language-kotlin">@Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }
    
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(text = "Count: $count", fontSize = 32.sp)
        
        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}

// Connected to ViewModel
@Composable
fun UserScreen(viewModel: UserViewModel = viewModel()) {
    val userName by viewModel.userName.observeAsState("")
    
    Column {
        Text(userName)
        Button(onClick = { viewModel.loadUser(1) }) {
            Text("Load User")
        }
    }
}</code></pre>`
          }
        ]
      },
      {
        id: "hilt-dependency-injection",
        title: "Hilt - Dependency Injection Framework",
        difficulty: "Intermediate",
        duration: "3 hours",
        keywords: ["hilt", "di", "injection", "dependencies"],
        videoTimestamp: "https://www.youtube.com/watch?v=sgH8xfk_p_U",
        officialRef: "https://developer.android.com/training/dependency-injection/hilt-android",
        subtopics: ["Setup", "Modules", "Injection Points"],
        contentSections: [
          {
            title: "Getting Started with Hilt",
            description: "Dependency injection simplified with Hilt",
            details: `<h3>Setup Hilt in Your Project</h3><pre><code class="language-bash"># In build.gradle (Project)
plugins {
    id 'com.google.dagger.hilt.android' version '2.46' apply false
}

# In build.gradle (App)
plugins {
    id 'kotlin-kapt'
    id 'com.google.dagger.hilt.android'
}

dependencies {
    implementation 'com.google.dagger:hilt-android:2.46'
    kapt 'com.google.dagger:hilt-compiler:2.46'
}</code></pre><h3>Creating Hilt Application</h3><pre><code class="language-kotlin">@HiltAndroidApp
class MyApplication : Application()

// Add to AndroidManifest.xml
<application
    android:name=".MyApplication"
    ...>
</application></code></pre><h3>Dependency Injection in Activity</h3><pre><code class="language-kotlin">@AndroidEntryPoint
class MainActivity : AppCompatActivity() {
    @Inject
    lateinit var userRepository: UserRepository
    
    @Inject
    lateinit var analyticsService: AnalyticsService
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // userRepository and analyticsService are ready to use!
        userRepository.loadUsers()
    }
}

// Also works with Fragment
@AndroidEntryPoint
class HomeFragment : Fragment() {
    @Inject
    lateinit var userRepository: UserRepository
}</code></pre><h3>Hilt Modules</h3><pre><code class="language-kotlin">@Module
@InstallIn(SingletonComponent::class)
object RepositoryModule {
    @Provides
    @Singleton
    fun provideUserRepository(): UserRepository {
        return UserRepository()
    }
    
    @Provides
    @Singleton
    fun provideDatabase(context: Context): AppDatabase {
        return Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            "app_database"
        ).build()
    }
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 18 ==========
  {
    id: "async-programming",
    category: "18. Async Programming - Coroutines & Flow",
    icon: "⚡",
    difficulty: "Intermediate",
    description: "Master asynchronous programming with Coroutines and Flow",
    topics: [
      {
        id: "coroutines-basics",
        title: "Kotlin Coroutines - Async Made Simple",
        difficulty: "Intermediate",
        duration: "5 hours",
        keywords: ["coroutines", "async", "suspend", "launch"],
        videoTimestamp: "https://www.youtube.com/watch?v=6manrgTPzyA",
        officialRef: "https://kotlinlang.org/docs/coroutines-overview.html",
        subtopics: ["Launch", "Async/Await", "Cancellation"],
        contentSections: [
          {
            title: "Introduction to Coroutines",
            description: "Lightweight threads for asynchronous programming",
            details: `<h3>Basic Coroutine - Launch</h3><pre><code class="language-kotlin">// Start a coroutine
lifecycleScope.launch {
    // This runs in a coroutine
    val user = fetchUser()  // Non-blocking!
    updateUI(user)
}

// fetch stays on main thread, no ANR!

@Composable
fun UserScreen(viewModel: UserViewModel) {
    LaunchedEffect(Unit) {
        viewModel.loadUser()
    }
}</code></pre><h3>Async/Await Pattern</h3><pre><code class="language-kotlin">// Multiple parallel operations
lifecycleScope.launch {
    val users = async { fetchUsers() }
    val posts = async { fetchPosts() }
    
    // Wait for both to complete
    val combinedData = users.await() + posts.await()
    updateUI(combinedData)
}

// Without async/await, would be sequential (slow)</code></pre><h3>Coroutine Scopes</h3><pre><code class="language-kotlin">// Activity scope (cancelled on destroy)
lifecycleScope.launch {
    // Automatic cleanup
}

// ViewModel scope (survives activity recreation)
viewModelScope.launch {
    // Safe for ViewModel
}

// Custom scope
val scope = CoroutineScope(Dispatchers.Main)
scope.launch {
    // Custom scope
}</code></pre><h3>Dispatchers - Threading</h3><pre><code class="language-kotlin">// Main thread (UI updates)
lifecycleScope.launch(Dispatchers.Main) {
    textView.text = "Hello"  // Safe!
}

// IO thread (network/database)
lifecycleScope.launch(Dispatchers.IO) {
    val data = api.fetchData()  // Non-blocking
}

// Default (CPU-intensive work)
lifecycleScope.launch(Dispatchers.Default) {
    val result = heavyComputation()
}</code></pre>`
          }
        ]
      },
      {
        id: "flow-stateflow",
        title: "Flow & StateFlow - Reactive Streams",
        difficulty: "Intermediate",
        duration: "4 hours",
        keywords: ["flow", "stateflow", "reactive", "stream"],
        videoTimestamp: "https://www.youtube.com/watch?v=-Srf3QHPYqE",
        officialRef: "https://kotlinlang.org/docs/flow.html",
        subtopics: ["Flow Collection", "StateFlow", "Operators"],
        contentSections: [
          {
            title: "Working with Flow",
            description: "Asynchronous data streams in Kotlin",
            details: `<h3>Creating and Collecting Flow</h3><pre><code class="language-kotlin">// Create a flow
fun getNumbers(): Flow<Int> = flow {
    for (i in 1..10) {
        delay(1000)  // Suspend, not block
        emit(i)
    }
}

// Collect flow
lifecycleScope.launch {
    getNumbers().collect { number ->
        println("Received: $number")
    }
}

// Safe cancel when scope is closed</code></pre><h3>StateFlow - Reactive State</h3><pre><code class="language-kotlin">class UserViewModel : ViewModel() {
    // StateFlow holds latest state
    private val _userState = MutableStateFlow<UiState>(UiState.Loading)
    val userState: StateFlow<UiState> = _userState
    
    fun loadUser() {
        viewModelScope.launch {
            try {
                _userState.value = UiState.Loading
                val user = userRepository.getUser()
                _userState.value = UiState.Success(user)
            } catch (e: Exception) {
                _userState.value = UiState.Error(e.message)
            }
        }
    }
}

sealed class UiState {
    object Loading : UiState()
    data class Success(val user: User) : UiState()
    data class Error(val message: String?) : UiState()
}</code></pre><h3>Flow Operators</h3><pre><code class="language-kotlin">// Transform values
flow {
    emit(1)
    emit(2)
    emit(3)
}.map { it * 2 }  // [2, 4, 6]
 .filter { it > 3 }  // [4, 6]
 .collect { println(it) }

// Combine multiple flows
combine(flow1, flow2) { a, b ->
    a + b
}.collect { sum ->
    textView.text = sum.toString()
}

// Delay between emissions
flow {
    emit("a")
    emit("b")
}.debounce(500.ms)
 .collect { println(it) }</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 19 ==========
  {
    id: "data-persistence-networking",
    category: "19. Data Persistence & Networking",
    icon: "💾",
    difficulty: "Intermediate",
    description: "Store data locally and communicate with servers",
    topics: [
      {
        id: "room-database",
        title: "Room Database - Local Storage",
        difficulty: "Intermediate",
        duration: "4 hours",
        keywords: ["room", "database", "sqlite", "dao"],
        videoTimestamp: "https://www.youtube.com/watch?v=BBWyXo-3JGQ",
        officialRef: "https://developer.android.com/training/data-storage/room",
        subtopics: ["Entities", "DAOs", "Migrations"],
        contentSections: [
          {
            title: "Setting Up Room Database",
            description: "Type-safe local database access",
            details: `<h3>Setup Dependencies</h3><pre><code class="language-bash">dependencies {
    implementation 'androidx.room:room-runtime:2.5.1'
    implementation 'androidx.room:room-ktx:2.5.1'
    kapt 'androidx.room:room-compiler:2.5.1'
}</code></pre><h3>Create Entity (Table)</h3><pre><code class="language-kotlin">@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey
    val id: Int,
    
    @ColumnInfo(name = "user_name")
    val name: String,
    
    val email: String,
    
    @Ignore  // Don't store in database
    val profilePicture: Bitmap?
)

@Entity(primaryKeys = ["user_id", "book_id"])
data class UserBookCrossRef(
    val user_id: Int,
    val book_id: Int
)</code></pre><h3>Create DAO (Data Access Object)</h3><pre><code class="language-kotlin">@Dao
interface UserDao {
    @Insert
    suspend fun insertUser(user: UserEntity)
    
    @Update
    suspend fun updateUser(user: UserEntity)
    
    @Delete
    suspend fun deleteUser(user: UserEntity)
    
    @Query("SELECT * FROM users WHERE id = :userId")
    suspend fun getUserById(userId: Int): UserEntity
    
    @Query("SELECT * FROM users ORDER BY user_name")
    fun getAllUsers(): Flow<List<UserEntity>>
    
    @Query("SELECT * FROM users WHERE email LIKE :searchQuery")
    fun searchUsers(searchQuery: String): Flow<List<UserEntity>>
    
    @Transaction
    @Query("SELECT * FROM users WHERE id = :userId")
    suspend fun getUserWithBooks(userId: Int): UserWithBooks
}</code></pre><h3>Create Database</h3><pre><code class="language-kotlin">@Database(
    entities = [UserEntity::class, BookEntity::class],
    version = 1,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
    abstract fun bookDao(): BookDao
    
    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null
        
        fun getInstance(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_database"
                ).build().also { INSTANCE = it }
            }
        }
    }
}</code></pre>`
          }
        ]
      },
      {
        id: "retrofit-networking",
        title: "Retrofit - REST API Client",
        difficulty: "Intermediate",
        duration: "4 hours",
        keywords: ["retrofit", "api", "rest", "networking"],
        videoTimestamp: "https://www.youtube.com/watch?v=O7uIUqVqAQo",
        officialRef: "https://square.github.io/retrofit",
        subtopics: ["API Calls", "Interceptors", "Error Handling"],
        contentSections: [
          {
            title: "Making API Calls with Retrofit",
            description: "Type-safe REST client for Android",
            details: `<h3>Setup Retrofit</h3><pre><code class="language-bash">dependencies {
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.10.0'
}</code></pre><h3>Define API Service</h3><pre><code class="language-kotlin">// Data models
data class User(
    val id: Int,
    val name: String,
    val email: String
)

data class ApiResponse<T>(
    val success: Boolean,
    val data: T,
    val message: String?
)

// API Service interface
interface UserApiService {
    @GET("users")
    suspend fun getUsers(): List<User>
    
    @GET("users/{id}")
    suspend fun getUser(@Path("id") userId: Int): User
    
    @POST("users")
    suspend fun createUser(@Body user: User): User
    
    @PUT("users/{id}")
    suspend fun updateUser(
        @Path("id") userId: Int,
        @Body user: User
    ): User
    
    @DELETE("users/{id}")
    suspend fun deleteUser(@Path("id") userId: Int)
    
    @GET("users")
    suspend fun searchUsers(@Query("search") query: String): List<User>
}</code></pre><h3>Create Retrofit Instance</h3><pre><code class="language-kotlin">object RetrofitClient {
    private const val BASE_URL = "https://api.example.com/"
    
    val apiService: UserApiService by lazy {
        val logging = HttpLoggingInterceptor()
        logging.level = HttpLoggingInterceptor.Level.BODY
        
        val okHttpClient = OkHttpClient.Builder()
            .addInterceptor(logging)
            .connectTimeout(15, TimeUnit.SECONDS)
            .readTimeout(15, TimeUnit.SECONDS)
            .build()
        
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .client(okHttpClient)
            .build()
            .create(UserApiService::class.java)
    }
}</code></pre><h3>Using Retrofit in ViewModel</h3><pre><code class="language-kotlin">class UserViewModel : ViewModel() {
    private val _users = MutableStateFlow<List<User>>(emptyList())
    val users: StateFlow<List<User>> = _users
    
    private val apiService = RetrofitClient.apiService
    
    fun loadUsers() {
        viewModelScope.launch {
            try {
                val userList = apiService.getUsers()
                _users.value = userList
            } catch (e: Exception) {
                Log.e("API", "Error loading users", e)
            }
        }
    }
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 20 ==========
  {
    id: "testing-quality",
    category: "20. Testing & Quality Assurance",
    icon: "🧪",
    difficulty: "Intermediate",
    description: "Ensure app quality with automated testing strategies",
    topics: [
      {
        id: "unit-testing",
        title: "Unit Testing - Testing Individual Components",
        difficulty: "Intermediate",
        duration: "3 hours",
        keywords: ["unit", "test", "junit", "mockito"],
        videoTimestamp: "https://www.youtube.com/watch?v=1j70DzqMltY",
        officialRef: "https://developer.android.com/training/testing/unit-testing",
        subtopics: ["JUnit", "Mocking", "Test Fixtures"],
        contentSections: [
          {
            title: "Writing Unit Tests with JUnit",
            description: "Testing business logic in isolation",
            details: `<h3>Setup Testing Dependencies</h3><pre><code class="language-bash">testImplementation 'junit:junit:4.13.2'
testImplementation 'org.mockito:mockito-core:5.2.0'
testImplementation 'org.mockito.kotlin:mockito-kotlin:5.1.0'
testImplementation 'androidx.arch.core:core-testing:2.2.0'</code></pre><h3>Basic Unit Test</h3><pre><code class="language-kotlin">// Calculator class to test
class Calculator {
    fun add(a: Int, b: Int) = a + b
    fun subtract(a: Int, b: Int) = a - b
}

// Unit test class
class CalculatorTest {
    @Before
    fun setup() { }
    
    @Test
    fun testAdd() {
        val calculator = Calculator()
        val result = calculator.add(2, 3)
        assertEquals(5, result)
    }
}</code></pre>`
          }
        ]
      },
      {
        id: "ui-testing",
        title: "UI Testing with Espresso",
        difficulty: "Intermediate",
        duration: "3 hours",
        keywords: ["espresso", "ui", "test", "instrumentation"],
        videoTimestamp: "https://www.youtube.com/watch?v=KKTY0VyCj0A",
        officialRef: "https://developer.android.com/training/testing/espresso",
        subtopics: ["View Matchers", "Actions", "Assertions"],
        contentSections: [
          {
            title: "Automating UI Tests",
            description: "Testing user interactions with Espresso",
            details: `<h3>Basic Espresso Test</h3><pre><code class="language-kotlin">@RunWith(AndroidJUnit4::class)
class LoginActivityTest {
    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)
    
    @Test
    fun login_successful() {
        onView(withId(R.id.email_input))
            .perform(typeText("user@email.com"))
        
        onView(withId(R.id.login_button))
            .perform(click())
        
        onView(withText("Welcome"))
            .check(matches(isDisplayed()))
    }
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 21 ==========
  {
    id: "cicd-deployment",
    category: "21. CI/CD & App Distribution",
    icon: "🚀",
    difficulty: "Advanced",
    description: "Automate build, test, and deploy workflows",
    topics: [
      {
        id: "github-actions",
        title: "GitHub Actions - Build Automation",
        difficulty: "Advanced",
        duration: "4 hours",
        keywords: ["github", "actions", "ci", "workflows"],
        videoTimestamp: "https://www.youtube.com/watch?v=JVEkqqRZaWc",
        officialRef: "https://github.com/features/actions",
        subtopics: ["Workflows", "Jobs", "Deployment"],
        contentSections: [
          {
            title: "Automated Android Builds",
            description: "CI/CD pipeline for Android projects",
            details: `<h3>GitHub Actions Workflow</h3><pre><code class="language-yaml">name: Android Build
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Java
        uses: actions/setup-java@v3
      - name: Build
        run: ./gradlew build
      - name: Test
        run: ./gradlew test</code></pre>`
          }
        ]
      },
      {
        id: "play-store-deployment",
        title: "App Signing & Google Play Distribution",
        difficulty: "Advanced",
        duration: "3 hours",
        keywords: ["signing", "playstore", "release"],
        videoTimestamp: "https://www.youtube.com/watch?v=PuBZhfLQfHw",
        officialRef: "https://developer.android.com/studio/publish/app-signing",
        subtopics: ["Keystore", "Signing Config", "Play Store"],
        contentSections: [
          {
            title: "Signing Your App for Release",
            description: "Creating and managing app signing keys",
            details: `<h3>Generate Keystore</h3><pre><code class="language-bash">keytool -genkey -v -keystore my-app.jks -keyalg RSA -keysize 2048 -validity 10000</code></pre><h3>Configure Signing</h3><pre><code class="language-gradle">signingConfigs {
    release {
        storeFile file("my-app.jks")
        storePassword System.getenv("KEYSTORE_PASSWORD")
        keyAlias System.getenv("KEY_ALIAS")
        keyPassword System.getenv("KEY_PASSWORD")
    }
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 22 ==========
  {
    id: "advanced-patterns",
    category: "22. Advanced Patterns & Performance",
    icon: "⚙️",
    difficulty: "Advanced",
    description: "Master advanced architecture and optimization techniques",
    topics: [
      {
        id: "performance-optimization",
        title: "Performance Profiling & Optimization",
        difficulty: "Advanced",
        duration: "5 hours",
        keywords: ["performance", "profiling", "optimization"],
        videoTimestamp: "https://www.youtube.com/watch?v=LLB4aw_p-TQ",
        officialRef: "https://developer.android.com/studio/profile/performance-tools",
        subtopics: ["Memory Leaks", "Frame Rate", "Battery"],
        contentSections: [
          {
            title: "Detecting Memory Leaks",
            description: "Finding and fixing memory issues",
            details: `<h3>Common Memory Leak Patterns</h3><pre><code class="language-kotlin">// ❌ BAD: Static reference
object Singleton {
    var activity: Activity? = null
}

// ✅ GOOD: Use WeakReference
var weakRef: WeakReference<Activity>? = null</code></pre>`
          }
        ]
      },
      {
        id: "security-best-practices",
        title: "Security & Data Protection",
        difficulty: "Advanced",
        duration: "4 hours",
        keywords: ["security", "encryption", "ssl"],
        videoTimestamp: "https://www.youtube.com/watch?v=2SJtKxDGhWM",
        officialRef: "https://developer.android.com/training/security",
        subtopics: ["Encryption", "SSL Pinning", "Secure Storage"],
        contentSections: [
          {
            title: "Implementing App Security",
            description: "Protecting user data",
            details: `<h3>Encrypted Shared Preferences</h3><pre><code class="language-kotlin">val masterKey = MasterKey.Builder(context).build()
val encryptedSharedPreferences = EncryptedSharedPreferences.create(
    context,
    "secret_pref",
    masterKey,
    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
)</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 23 ==========
  {
    id: "kotlin-multiplatform",
    category: "23. Kotlin Multiplatform (KMP)",
    icon: "🌐",
    difficulty: "Advanced",
    description: "Share code between Android, iOS, and web platforms",
    topics: [
      {
        id: "kmp-basics",
        title: "KMP Fundamentals - Code Sharing",
        difficulty: "Advanced",
        duration: "5 hours",
        keywords: ["kmp", "multiplatform", "share"],
        videoTimestamp: "https://www.youtube.com/watch?v=0xKg9lFehYE",
        officialRef: "https://kotlinlang.org/docs/multiplatform.html",
        subtopics: ["Project Setup", "Expect/Actual", "Dependencies"],
        contentSections: [
          {
            title: "Setting Up KMP Project",
            description: "Creating a multiplatform Kotlin project",
            details: `<h3>Shared Code Structure</h3><pre><code>shared/
  ├── src/commonMain/    # Shared code
  ├── src/androidMain/   # Android-specific
  └── src/iosMain/       # iOS-specific</code></pre><h3>Shared Repository</h3><pre><code class="language-kotlin">class UserRepository {
    suspend fun getUsers(): List<User> {
        return httpClient.get("users")
    }
}</code></pre>`
          }
        ]
      }
    ]
  },

  // ========== CATEGORY 24 ==========
  {
    id: "interview-preparation",
    category: "24. Interview Preparation & System Design",
    icon: "🎤",
    difficulty: "Advanced",
    description: "Prepare for Android interviews and system design discussions",
    topics: [
      {
        id: "system-design-interview",
        title: "System Design for Android Apps",
        difficulty: "Advanced",
        duration: "6 hours",
        keywords: ["system", "design", "architecture"],
        videoTimestamp: "https://www.youtube.com/watch?v=5ZRi4mHU18Y",
        officialRef: "https://developer.android.com/jetpack/guide",
        subtopics: ["Scalability", "Reliability", "Security"],
        contentSections: [
          {
            title: "Designing Large-Scale Apps",
            description: "Architectural decisions for production apps",
            details: `<h3>App Architecture Layers</h3><pre><code>┌─────────────────────────────┐
│   UI Layer (Activities)     │
├─────────────────────────────┤
│   ViewModel + Use Cases     │
├─────────────────────────────┤
│   Domain Layer (Entities)   │
├─────────────────────────────┤
│   Repository (Abstraction)  │
├─────────────────────────────┤
│   Data Layer (Network/DB)   │
└─────────────────────────────┘</code></pre><h3>Sample Implementation</h3><pre><code class="language-kotlin">// Domain Layer
data class User(val id: Int, val name: String)

interface UserRepository {
    suspend fun getUsers(): Result<List<User>>
}

// Use Case
class GetUsersUseCase(private val repo: UserRepository) {
    suspend operator fun invoke() = repo.getUsers()
}

// ViewModel
class UserListViewModel(
    private val useCase: GetUsersUseCase
) : ViewModel() {
    private val _users = MutableStateFlow<UiState>(UiState.Loading)
    val users = _users.asStateFlow()
}</code></pre>`
          }
        ]
      },
      {
        id: "common-interview-questions",
        title: "Common Interview Questions & Answers",
        difficulty: "Advanced",
        duration: "4 hours",
        keywords: ["interview", "questions", "answers"],
        videoTimestamp: "https://www.youtube.com/watch?v=0xKg9lFehYE",
        officialRef: "https://developer.android.com/guide",
        subtopics: ["Fundamentals", "Performance", "Architecture"],
        contentSections: [
          {
            title: "Top Android Interview Questions",
            description: "Common questions and answers",
            details: `<h3>Q1: What is the Activity Lifecycle?</h3><pre><code>A: Seven main states:
   - onCreate(): Activity created
   - onStart(): Becomes visible
   - onResume(): Gains focus
   - onPause(): Loses focus
   - onStop(): Not visible
   - onRestart(): Coming back from stopped
   - onDestroy(): Destroyed

Save data in onSaveInstanceState() or databases.
ViewModel survives config changes automatically.</code></pre><h3>Q2: MVVM Pattern</h3><pre><code>A: Three layers:
   - Model: Data & business logic
   - View: UI components (Activities)
   - ViewModel: State & UI logic

Benefits:
✓ Separation of concerns
✓ Testable code
✓ Survives config changes
✓ Scalable structure</code></pre><h3>Q3: Coroutines Benefits</h3><pre><code>A: 
✓ Simple async/await syntax
✓ Better than callbacks
✓ Low memory overhead
✓ Structured concurrency
✓ Exception handling with try/catch

Simple usage:
viewModelScope.launch {
    val user = fetchUser()  // Async
    updateUI(user)          // Non-blocking
}</code></pre>`
          }
        ]
      }
    ]
  }
];

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = roadmapData;
}

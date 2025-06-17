// Video Link: https://youtu.be/KM64t3pA4fs?si=Z8-WYPEPeK3dXuew

// Day 1: 2025/Jun/15 (0:00–10:25)
// Day 2: 2025/Jun/17 (10:25–1:04:40)

// ----------------------
// What is Three.js?
// ----------------------
// Definition:
// A high-level JavaScript library for creating and displaying 3D graphics in the web browser.

// Purpose:
// Simplifies 3D graphics creation and animation (models, particle systems, lights, cameras)
// without needing low-level WebGL code knowledge.

// ----------------------
// Graphics Processing
// ----------------------
// Rendering 3D graphics in real-time requires millions of calculations per second.

// Why is it complex?
// - The computer must track each vertex's position, color, and location in 3D space.
// - It also needs to calculate instructions for each pixel (called fragment shading).

// ----------------------
// What is a GPU?
// ----------------------
// GPU = Graphics Processing Unit
// - Specialized hardware designed to perform many simple calculations in parallel.
// - Optimized for the heavy demands of rendering 3D graphics efficiently.

// ----------------------
// What is WebGL?
// ----------------------
// WebGL = JavaScript API for rendering 3D graphics in the browser using the GPU.
// - WebGL provides a way to talk to the GPU and instruct it how to draw things on the screen.

// ----------------------
// Three.js and WebGL
// ----------------------
// - Three.js is built on top of WebGL.
// - It hides WebGL's complexity and gives developers an easy-to-use JavaScript API.
// - This allows you to focus on creative design rather than low-level rendering code.

// ----------------------
// Prerequisites
// ----------------------
// Knowledge:
// 1. Basic JavaScript or programming concepts
// 2. Basic Math (for positioning, rotation, scaling, etc.)

// Tools:
// 1. Chrome (or another modern browser)
// 2. Visual Studio Code (code editor)
// 3. Blender (optional) – a free, open-source 3D modeling software for custom assets

// Three.js Documentation:
// https://threejs.org/docs/

// ----------------------
// Three.js Fundamentals – Scene and Its Children
// ----------------------

// 1. Scene
// Acts like a stage that holds everything (objects, lights, camera). It organizes what gets displayed,
// but it does not render anything by itself.

// 2. Camera
// Defines what part of the scene is visible. Think of it as the user’s eye.
// Most commonly used camera: PerspectiveCamera (gives a sense of depth like real life).

// 3. Renderer
// Converts the scene + camera view into pixels and draws them on the canvas in the browser.
// WebGLRenderer is the default renderer in Three.js.

// 4. Meshes (Objects)
// Every visible 3D object is a Mesh. It consists of:
// - Geometry (the shape: cube, sphere, etc.)
// - Material (the look: color, texture, etc.)

// 5. Lights
// Make objects visible with depth and shadows. Types of lights include:
// - DirectionalLight
// - PointLight
// - AmbientLight
// - SpotLight
// Without light, objects will not be properly visible or may appear flat/dark.

// 6. Helpers (Optional)
// Visual guides to help while developing:
// - AxesHelper: shows the X (red), Y (green), Z (blue) directions.
// - GridHelper: shows a ground grid.
// Helpers don’t affect the final rendering but are useful for development and orientation.

// 7. Controls (Optional)
// Add interactivity to the scene:
// - OrbitControls: allows rotating, panning, and zooming the camera with the mouse.

// 8. Animation Loop
// A function that runs repeatedly (usually 60 times per second).
// It keeps the scene updating — moves objects, runs animations, and re-renders each frame.

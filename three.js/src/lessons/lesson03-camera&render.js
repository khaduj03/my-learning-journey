//2-Camera and Render
//Day 2:2025/Jun/17(10:15-1:04:40 ) 
//Day 3 :2025/Jun/22(1:04:40 - 1:20:00)

import * as THREE from "three";

console.log(THREE);
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

console.log(cubeMesh);
console.log(scene);

// Initialize the camera
// PerspectiveCamera is the type of camera
const camera = new THREE.PerspectiveCamera(
  75, // field of view (how wide the camera sees)
  window.innerWidth / window.innerHeight, // aspect ratio of the screen
  0.1, // near clipping plane (anything closer than this won't be visible)
  30 // far clipping plane (anything farther than this won't be visible)
);

// Right now the cube and the camera are in the same position (0, 0, 0)
// That means the camera is inside the cube — we can't see it
// So we move the camera back a little on the z-axis
camera.position.z = 5;

// Adding camera and cube to the scene
scene.add(camera);
scene.add(cubeMesh);

// Select the canvas element from HTML
const canvas = document.querySelector("canvas.threejs");
console.log(canvas); // check if canvas is found

// Create renderer and use the selected canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// Set renderer size to match screen size
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene from the camera's point of view
renderer.render(scene, camera);

// -------------------------------------------------------------
// Starter Pack
// Why use a starter pack?
// 1. To make sure everyone starts from the same setup (same dependencies)
// 2. To skip writing boring setup code and jump into 3D faster

// -------------------------------------------------------------
// PerspectiveCamera:
// PerspectiveCamera is the most common camera used in games and 3D scenes.

// Properties:
// - fov: Field of View - how wide the camera can see
// - aspect: Width / Height of the screen
// - near: The closest distance that the camera can see
// - far: The farthest distance that the camera can see

// Field of View (FOV):
// - Like a real camera lens
// - Big FOV → you see more, but objects look smaller
// - Small FOV → you see less, but objects look bigger

// -------------------------------------------------------------
// Near and Far:
// - near: If something is closer than this value, it is invisible
// - far: If something is farther than this value, it is invisible
// If the near-far range is too big, it can cause "z-fighting" (rendering glitch)

// Important: You must set near and far values based on the position of your object and camera.
// For example, if the camera is at z = 5, and the object is at z = 0,
// then your near should be less than 5 (like 0.1), and far should be more than 5 (like 30).

// If near is too big (like 5.1), you won't see objects that are closer.
// Always keep near small (like 0.1) and far big enough (like 30).

// -------------------------------------------------------------
// Example:
// Camera is at z = 5
// Cube is at z = 0
// near = 0.1 → everything after 0.1 is visible
// far = 30 → everything before 30 is visible
// So the cube is visible between 0.1 and 30

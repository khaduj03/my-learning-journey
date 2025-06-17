//2-Camera and Render
//Day 2:2025/Jun/17(10:15-1:04:40 )

import * as THREE from "three";

console.log(THREE);
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

console.log(cubeMesh);
console.log(scene);
//initalize the camera
//and PerspectiveCamera is the type of camera
const camera = new THREE.PerspectiveCamera(
    75, // field of view (how wide the camera sees)
    window.innerWidth / window.innerHeight, // aspect ratio of the screen
    0.1, // near clipping plane (anything closer than this won't be visible)
    30 // far clipping plane (anything farther than this won't be visible)
  );
  
  // what we did:
  // we created a camera, but right now the cube and the camera are both at position (0, 0, 0)
  // this means the camera is inside the cube, so we can't see it
  
  // to fix that, we move the camera backwards along the z-axis
  // this way, the camera will look at the cube from a distance
  // every 3D object in Three.js has a position property (x, y, z), including the camera
  camera.position.z = 5;
  
  // this adds the camera to the scene
  // this is optional in Three.js, but helps in debugging and inspecting the scene
  scene.add(camera);
  scene.add(cubeMesh);
  
  // render:
  // in the HTML file, the <script> that links to main.js is responsible for showing everything on the screen
  
  // in order to actually see anything, we need a place to draw — that’s what the <canvas> element is for
  // canvas is an HTML5 element that works like a drawing surface for 2D/3D graphics
  
  // we reference that canvas from the HTML using a class name
  const canvas = document.querySelector("canvas.threejs");
  
  // log to check if the canvas was found
  console.log(canvas); // should not be null
  
  // create a renderer and tell it to use the canvas we selected
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  
  // set the size of the renderer to match the screen size
  // if you use a small fixed value like (200, 200), the object will appear tiny or cut off
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // render the scene from the point of view of the camera
  // this means: take all objects in the scene and show them through the camera’s view
  renderer.render(scene, camera);
  
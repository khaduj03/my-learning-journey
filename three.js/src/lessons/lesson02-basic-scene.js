//  LESSON 1: Creating a Scene and a Basic Cube in Three.js

// Importing everything from the 'three' package
// 'THREE' now holds all the classes we need like Scene, Mesh, Geometry, etc.
import * as THREE from "three";

// Log the entire THREE object to see what classes and features it has
console.log(THREE);


//  STEP 1: Create a Scene

// A Scene is like a container or stage where all 3D objects, lights, and cameras will be placed
const scene = new THREE.Scene();

//  STEP 2: Create a Mesh (Cube object)

// A mesh needs two things: Geometry (shape) and Material (appearance)

// Geometry defines the shape of the object
// BoxGeometry creates a cube shape. Arguments are width, height, depth
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// Material defines how the surface looks (color, texture, etc.)
// MeshBasicMaterial is a basic material that shows color without lighting
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // red color

// Mesh combines geometry + material into one visible object
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Right now, we created the cube, but we have NOT added it to the scene yet
// (We will add it to the scene in a later step)


//  STEP 3: Debug logs (for testing)
// Log the mesh object to see its details
console.log(cubeMesh);

// Log the scene to see the current contents (empty or with objects)
console.log(scene);

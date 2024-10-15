// components/ThreeDRoom.js

"use client"; // Ensure this is a client component

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDRoom = () => {
  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create Room
    const createRoom = () => {
      const roomGeometry = new THREE.BoxGeometry(10, 10, 10);
      const roomMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
      const room = new THREE.Mesh(roomGeometry, roomMaterial);
      scene.add(room);
    };

    // Create Floor
    const createFloor = () => {
      const floorGeometry = new THREE.PlaneGeometry(10, 10);
      const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
      scene.add(floor);
    };

    // Create Table
    const createTable = () => {
      const tableGeometry = new THREE.BoxGeometry(2, 0.1, 1);
      const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color
      const table = new THREE.Mesh(tableGeometry, tableMaterial);
      table.position.set(0, 0.05, 0); // Position the table slightly above the floor
      scene.add(table);
    };

    // Create Chairs
    const createChair = (x, z) => {
      const chairGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
      const chairMaterial = new THREE.MeshBasicMaterial({ color: 0xD2691E }); // Chocolate color
      const chair = new THREE.Mesh(chairGeometry, chairMaterial);
      chair.position.set(x, 0.05, z);
      scene.add(chair);
    };

    // Create Lamp
    const createLamp = () => {
      const lampBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.1);
      const lampBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
      lampBase.position.set(2, 0.15, 2); // Position the lamp base

      const lampShadeGeometry = new THREE.ConeGeometry(0.2, 0.4);
      const lampShadeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
      lampShade.position.set(2, 0.5, 2); // Position the lamp shade
      lampShade.rotation.x = Math.PI; // Rotate the shade to face down

      scene.add(lampBase);
      scene.add(lampShade);
    };

    // Add Lighting
    const addLighting = () => {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
    };

    // Initialize
    const init = () => {
      createRoom();
      createFloor();
      createTable();
      createChair(-1, -1); // Left Chair
      createChair(1, -1); // Right Chair
      createChair(-1, 1); // Back Left Chair
      createChair(1, 1); // Back Right Chair
      createLamp();
      addLighting();

      camera.position.set(0, 2, 5); // Position the camera
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;

      animate(controls);
    };

    // Animation Loop
    const animate = (controls) => {
      requestAnimationFrame(() => animate(controls));
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    // Resize Listener
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    init();

    // Clean up on unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component does not render anything directly
};

export default ThreeDRoom;

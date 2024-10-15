// components/ThreeDRoom.js

"use client"; // Ensure this is a client component

import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeDRoom = () => {
  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
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
      addLighting();

      camera.position.set(0, 5, 15); // Position the camera
      animate();
    };

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
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

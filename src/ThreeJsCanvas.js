import React, { Component } from 'react';
import THREE from 'three';
import './ThreeJsCanvas.css';



class ThreeJsCanvas extends Component {
  componentDidMount(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("myCanvas"), antialias: true });
    renderer.setClearColor('grey')
    renderer.setSize( 300, 300 );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;

    function animate() {
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.01;
      
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    animate();
  }

  componentWillUnmount() {
    debugger;
  }
  
  render() {
    return (
      <canvas id="myCanvas">
      </canvas>
    );
  }
}

export default ThreeJsCanvas;

import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
import { SceneComponent } from "app/components/scene/scene.component";

import * as THREE from 'three';

@Component({
  selector: 'object3D',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  scene;
  constructor(private inj:Injector) { }
  
  ngOnInit() {
    let parentComponent = this.inj.get(SceneComponent);
    this.scene = parentComponent.scene;

    let geometry = new THREE.BoxGeometry( 1, 1, 1 );

    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    cube.position.set(
      this.randInt(-3,3), 
      this.randInt(-3,3), 
      this.randInt(-3,3)
    );
    
    this.scene.scene.add( cube );


    console.log(parentComponent);
  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

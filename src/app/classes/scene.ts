import * as THREE from 'three';

export class Scene {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer;
    canvas:HTMLCanvasElement;

    constructor(container:HTMLElement,color){

        this.canvas = document.createElement('canvas');
        this.canvas.id     = "CursorLayer";
        this.canvas.width  = container.clientWidth;
        console.log('heit',container.clientHeight)
        this.canvas.height = container.clientHeight;
        this.canvas.style.backgroundColor = color;
        this.renderer = new THREE.WebGLRenderer({
            canvas: <HTMLCanvasElement>this.canvas,
            alpha: true,     // transparent background
            antialias: true // smooth edges
        });

        container.appendChild(this.renderer.domElement);
        this.renderer.setSize( this.canvas.width, this.canvas.height );

    }
}

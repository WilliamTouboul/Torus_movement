gsap.registerPlugin(ScrollTrigger);



/* ----------------------------- Creation Scene ----------------------------- */
const scene = new THREE.Scene();

/* ----------------------------- Creation Camera ---------------------------- */
const fov = 45;
// Variable pour changer le ratio plus facilement
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
//TOUJOURS ajouter ce qu'on créé a la scene.
camera.position.x = -9.5;
camera.position.y = 4.5;
camera.position.z = 44;


scene.add(camera)

var gltfLoader = new THREE.GLTFLoader();
var global_ibex;

gltfLoader.load('assets/3d_models/laocoon/scene.gltf', function (gltf) {
    ibex = gltf.scene;
    global_ibex = ibex;
    ibex.rotation.y = -0.2;
    scene.add(ibex)
});

/* ---------------------------- Création Renderer --------------------------- */
const renderer = new THREE.WebGLRenderer({
    alpha: 'true'
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const color = 0xf8fcb2;
const intensity = 4;
const light = new THREE.DirectionalLight(color, intensity);
light.target.position.set(-7.2, 8.7, -10);
scene.add(light);
scene.add(light.target);

const color2 = 0xdc6d0b;
const intensity2 = 1.21;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.target.position.set(4, 0.52, 2.7);
scene.add(light2);
scene.add(light2.target);


const color3 = 0xffe600;
const intensity3 = 0.6;
const light3 = new THREE.DirectionalLight(color2, intensity2);
light2.target.position.set(4, 0.52, 2.7);
scene.add(light3);
scene.add(light3.target);


// gsap.to("#p_dev1", {
//     scrollTrigger: "#dev1",
//     start: '20px 80%',
//     markers: true,
//     x: 500
// });

var b1 = document.querySelector('.button_1');
var b2 = document.querySelector('.button_2');
var b3 = document.querySelector('.button_3');
var b4 = document.querySelector('.button_4');

window.addEventListener('load', (e) => {
    b1.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
});

document.querySelector('.button_1').addEventListener("click", function () {
    var tl = gsap.timeline();
    b1.disabled = true;
    b3.disabled = false;
    tl.to('#p2', {
        opacity: 0,
        y: -50
    }, 1)
    tl.to(camera.position, {
        x: -1,
        y: 12,
        z: 19,
        duration: 1.5,
        ease: 'none'
    }, 1);
    tl.to(camera.rotation, {
        y: 0.5,
        duration: 0.5,
    }, 2);

    tl.to('.button_row', {
        top: 0,
        left: '74%'
    }, 2)


    tl.to('#p3', {
        opacity: 1,
    }, 3)
    tl.from('#p3', {
        y: -50
    }, 3)
});

document.querySelector('.button_2').addEventListener("click", function () {
    var tl = gsap.timeline();
    b2.disabled = true;
    b1.disabled = false;
    tl.to(camera.position, {
        x: -11.5,
        y: 8,
        z: 23,
        duration: 1.5,
        ease: 'none'
    }, 1);

    tl.to('#p1', {
        opacity: 0,
        y: -50
    }, 1)

    tl.to(camera.rotation, {
        y: -0.3,
        x: -0.3,
        duration: 0.5,
    }, 2);

    tl.to('.button_row', {
        top: '91%',
        left: 0
    }, 2)

    tl.to('#p2', {
        opacity: 1,
    }, 3)
    tl.from('#p2', {
        y: -50
    }, 3)
});

document.querySelector('.button_3').addEventListener("click", function () {

    var tl = gsap.timeline();

    b3.disabled = true;
    b4.disabled = false;
    tl.to('#p3', {
        opacity: 0,
        y: -50
    }, 1);

    tl.to(camera.position, {
        x: -3,
        y: 3.5,
        z: 21,
        duration: 1.5,
        ease: 'none'
    }, 1);

    tl.to(camera.rotation, {
        y: -1,
        x: -0.1,
        duration: 0.5,
    }, 2);

    tl.to('#p4', {
        opacity: 1,
    }, 3);

    tl.from('#p4', {
        y: -50
    }, 3);
});

document.querySelector('.button_4').addEventListener('click', function () {
    var tl = gsap.timeline();
    b1.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b2.disabled = false;
    
    tl.to('#p4', {
        opacity: 0,
        y: -50
    }, 1);

    tl.to(camera.position, {
        x: -9.5,
        y: 4.5,
        z: 44,
        duration: 0.5
    });

    tl.to(camera.rotation, {
        y: 0,
        x: 0,
        duration: 0.5,
    });

    tl.to('#p1', {
        opacity: 1,
    }, 3)
    tl.from('#p1', {
        y: -50
    }, 3)
})




renderer.gammaOutput = true


const tick = () => {
    requestAnimationFrame(tick);
    // ibex.rotation.y += -0.01;
    renderer.render(scene, camera)
}

tick();
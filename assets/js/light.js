renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);
class ColorGUIHelper {
    constructor(object, prop) {
        this.object = object;
        this.prop = prop;
    }
    get value() {
        return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
        this.object[this.prop].set(hexString);
    }
}



const gui = new dat.GUI();
gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
gui.add(light, 'intensity', 0, 2, 0.01);
gui.add(light.target.position, 'x', -10, 10);
gui.add(light.target.position, 'z', -10, 10);
gui.add(light.target.position, 'y', 0, 10);













var gui = new dat.GUI();
gui.add(camera.position, 'x', -100, 100).step(0.5)
gui.add(camera.position, 'y', -100, 100).step(0.5)
gui.add(camera.position, 'z', -100, 100).step(0.5)
gui.add(camera.rotation, 'y', -2, 2).step(0.1)
gui.add(camera.rotation, 'x', -2, 2).step(0.1)
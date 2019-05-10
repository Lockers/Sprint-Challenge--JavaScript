// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(object) {
//     this.length = object.length;
//     this.width = object.width;
//     this.height = object.height;
// }

// CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function () {
//     return (this.length * this.width) + (this.length * this.height) + (this.width * this.height)
// }

class CuboidMaker {
    constructor(object) {
        this.length = object.length;
        this.width = object.width;
        this.height = object.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)) * 2
    }

}
class CubeMaker extends CuboidMaker {
    constructor(object) {
        super(object)
    }
    volumeCube() {
        return this.width * this.width * this.width;
    }
    surfaceAreaCube() {
        return (this.width * this.length) * 6;
    }
}
const cuboid = new CuboidMaker({
    length: 4,
    height: 5,
    width: 5
})
const cube = new CubeMaker({
    length: 2,
    width: 2,
    height: 2
})

// // Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volumeCube())
console.log(cube.surfaceAreaCube())

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class Parent {
    constructor() {
        console.log("Parent Class Constructor")
    }
}

class Child extends Parent {
    constructor() {
        super()
        console.log("Child Class Constrctor")
    }
}

new Child()
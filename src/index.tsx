import Phaser from "phaser";
import logoImg from "./assets/sprites/drink.png";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Scene, GameObjects} from 'phaser';

export class MyScene extends Scene {
    private drink!: GameObjects.Image;
    private prevFrame!: number;

    constructor() {
        super('loading-scene');
    }

    preload() {
        this.load.image("logo", logoImg);
    }

    create() {
        this.drink = this.add.image(window.innerWidth / 2, window.innerHeight / 2, "logo")
    }

    update(ts: number, delta:number) {
        if (this.prevFrame != undefined) {
            this.drink.x += 1;
        }
        this.prevFrame = ts;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: window.innerWidth,
    height: window.innerHeight,
    scene: new MyScene()
};
const game = new Phaser.Game(config);


ReactDOM.render(<App/>, document.getElementById("root"));
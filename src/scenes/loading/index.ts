import {Scene, GameObjects} from 'phaser';

import logoImg from "../../assets/sprites/drink.png";
export class LoadingScene extends Scene {
    private drink!: GameObjects.Sprite;

    constructor() {
        super('loading-scene');
    }

    create(): void {
        const logo =   this.add.image(400, 150, "logo");
        // this.drink = this.add.sprite(100, 100, 'drink');
        // console.log(this.drink);
        // console.log('Loading scene was created');
    }

    preload(): void {
        this.load.image("logo", logoImg);
        // this.load.baseURL = 'assets/';
        //
        // // key: 'king'
        // // path from baseURL to file: 'sprites/king.png'
        // this.load.image('drink', 'sprites/drink.png');
    }
}
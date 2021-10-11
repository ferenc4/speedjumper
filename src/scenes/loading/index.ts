import {Scene, GameObjects} from 'phaser';

export class LoadingScene extends Scene {
    private drink!: GameObjects.Sprite;

    constructor() {
        super('loading-scene');
    }

    create(): void {
        this.drink = this.add.sprite(100, 100, 'drink');
        console.log(this.drink);
        console.log('Loading scene was created');
    }

    preload(): void {
        this.load.baseURL = 'assets/';

        // key: 'king'
        // path from baseURL to file: 'sprites/king.png'
        this.load.image('drink', 'sprites/drink.png');
    }
}
import logoImg from "./assets/sprites/drink.png";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Phaser from 'phaser';

export class MyScene extends Phaser.Scene {
    private drink!: Phaser.GameObjects.Image;
    private prevFrame!: number;
    private map!: Phaser.Tilemaps.Tilemap;
    private groundLayer!: Phaser.Tilemaps.TilemapLayer;
    private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

    constructor() {
        super('loading-scene');
    }

    preload() {
        this.load.image("logo", logoImg);
        this.load.tilemapTiledJSON('map', 'map.json');
        // tiles in spritesheet
        this.load.spritesheet('tiles', 'ground.png', {frameWidth: 70, frameHeight: 70});
        // simple coin image
        this.load.image('coin', 'coin.png');
        // player animations
        this.load.atlas('player', 'player.png', 'player.json');
    }

    create() {
        // this.drink = this.add.image(window.innerWidth / 2, window.innerHeight / 2, "logo");
        // load the map
        this.map = this.make.tilemap({key: 'map'});

        // tiles for the ground layer
        let groundTiles = this.map.addTilesetImage('tiles');
        // create the ground layer
        this.groundLayer = this.map.createLayer('World', groundTiles, 0, 0);
        // the player will collide with this layer
        this.groundLayer.setCollisionByExclusion([-1]);
        // set the boundaries of our game world
        this.physics.world.bounds.width = this.groundLayer.width;
        this.physics.world.bounds.height = this.groundLayer.height;
        this.player = this.physics.add.sprite(200, 200, 'player');
        this.player.setBounce(0.2); // our player will bounce from items
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.groundLayer, this.player);

    }

    update(ts: number, delta: number) {
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) // if the left arrow key is down
        {
            this.player.body.setVelocityX(-200); // move left
        }
        else if (cursors.right.isDown) // if the right arrow key is down
        {
            this.player.body.setVelocityX(200); // move right
        }
        if ((cursors.space.isDown || cursors.up.isDown) && this.player.body.onFloor())
        {
            this.player.body.setVelocityY(-500); // jump up
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: window.innerWidth,
    height: window.innerHeight,
    scene: new MyScene(),
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
};
const game = new Phaser.Game(config);


ReactDOM.render(<App/>, document.getElementById("root"));
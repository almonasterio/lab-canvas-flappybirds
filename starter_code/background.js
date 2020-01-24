class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image()
        this.image.src = "./images/bg.png"

        this.posX = 0
        this.poxY = 0
        this.velX = 1

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.poxY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX + this.width, this.poxY, this.width, this.height)

    }

    move() {
        this.posX -= this.velX;
        this.posX <= -this.width ? this.posX =0 : null

    }




}
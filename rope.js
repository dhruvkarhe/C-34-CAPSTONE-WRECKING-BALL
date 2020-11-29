class Rope {
  constructor(bodyA, pointB) {
    var Options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 200,
    };
    this.pointB = pointB;
    this.rope = Constraint.create(Options);
    World.add(world, this.rope);
  }
  display() {
    //if (this.rope.bodyA) {
    strokeWeight(3);
    stroke("black");
    line(
      this.rope.bodyA.position.x,
      this.rope.bodyA.position.y,
      this.pointB.x,
      this.pointB.y
    );
    //  }
  }
}

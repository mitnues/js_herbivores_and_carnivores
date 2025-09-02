'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.healthy = 100;

    Animal.alive.push(this);
  }

  die() {
    const idx = Animal.alive.indexOf(this);
    if (idx !== -1) {
      Animal.alive.splice(idx, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
  }
    if (target.hidden) {
      return;
   }

   target.healthy -= 50;

   if (target.healthy <= 0) {
     target.die();
      }
    }
  }

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

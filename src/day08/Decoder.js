class Decoder {
  #top = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #topLeft = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #topRight = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #middle = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #bottomLeft = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #bottomRight = new Set(["a", "b", "c", "d", "e", "f", "g"]);
  #bottom = new Set(["a", "b", "c", "d", "e", "f", "g"]);

  #key = {
    top: this.#top,
    topLeft: this.#topLeft,
    topRight: this.#topRight,
    middle: this.#middle,
    bottom: this.#bottom,
    bottomLeft: this.#bottomLeft,
    bottomRight: this.#bottomRight,
  };

  isComplete() {
    return Object.entries(this.#key).every(([_, set]) => set.size === 1);
  }

  prune() {
    const completedSets = Object.entries(this.#key).filter(
      ([_, set]) => set.size === 1
    );
    const incompletedSets = Object.entries(this.#key).filter(
      ([_, set]) => set.size > 1
    );
    for (const completed of completedSets) {
      const char = Array.from(completed[1].values())[0];
      for (const incompleted of incompletedSets) {
        incompleted[1].delete(char);
      }
    }
  }

  addNumber(number) {
    const notNumber = Array.from("abcdefg")
      .filter((char) => !number.includes(char))
      .join("");

    if (number.length === 2) {
      // 1
      for (const char of number) {
        this.#key.top.delete(char);
        this.#key.topLeft.delete(char);
        this.#key.middle.delete(char);
        this.#key.bottomLeft.delete(char);
        this.#key.bottom.delete(char);
      }
      for (const char of notNumber) {
        this.#key.topRight.delete(char);
        this.#key.bottomRight.delete(char);
      }
    } else if (number.length === 3) {
      // 7
      for (const char of number) {
        this.#key.topLeft.delete(char);
        this.#key.middle.delete(char);
        this.#key.bottomLeft.delete(char);
        this.#key.bottom.delete(char);
      }
      for (const char of notNumber) {
        this.#key.top.delete(char);
        this.#key.topRight.delete(char);
        this.#key.bottomRight.delete(char);
      }
    } else if (number.length === 4) {
      // 4
      for (const char of number) {
        this.#key.bottomLeft.delete(char);
        this.#key.bottom.delete(char);
        this.#key.top.delete(char);
      }
      for (const char of notNumber) {
        this.#key.topRight.delete(char);
        this.#key.bottomRight.delete(char);
        this.#key.topLeft.delete(char);
        this.#key.middle.delete(char);
      }
    } else if (number.length === 5) {
      // 2 3 5
      for (const char of notNumber) {
        this.#key.top.delete(char);
        this.#key.bottom.delete(char);
        this.#key.middle.delete(char);
      }
    } else if (number.length === 6) {
      // 0 6 9
      for (const char of notNumber) {
        this.#key.bottomRight.delete(char);
        this.#key.topLeft.delete(char);
        this.#key.top.delete(char);
        this.#key.bottom.delete(char);
      }
    }
    this.prune();
  }
}

module.exports = Decoder;

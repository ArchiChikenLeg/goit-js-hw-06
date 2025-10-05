class Storage {
  #items = [];
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    let temp = [];
    for (let item of this.#items) {
      if (item != itemToRemove) {
        temp.push(item);
      }
    }
    this.#items = temp;
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"] 
storage.addItem("Droid"); 
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"] 
storage.removeItem("Prolonger"); 
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

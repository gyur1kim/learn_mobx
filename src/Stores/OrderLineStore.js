import { makeAutoObservable, computed, autorun } from "mobx";

class OrderLineStore {
  #price = 0;
  #amount = 1;

  constructor(price) {
    makeAutoObservable(this, {
      total: computed,
    })
    this.price = price;
  }

  get price() {
    return this.#price
  }
  set price(value) {
    this.#price = value
  }

  get amount() {
    return this.#amount
  }
  set amount(value) {
    this.#amount = value;
  }

  get total() {
    console.log("computing......");
    return this.price * this.amount
  }
}

const orderStore = new OrderLineStore(0);
export default orderStore;

export const stop = autorun(() => {
  console.log("running autorun");
  console.log(orderStore.total);
  console.log("stop running autorun");
})
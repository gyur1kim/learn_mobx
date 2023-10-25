import { observer } from "mobx-react-lite";
import orderStore, { stop } from "../Stores/OrderLineStore";

const OrderLine = () => {
  return (
    <>
      <div>amount : { orderStore.amount }</div>
      <div>price : { orderStore.price }</div>
      <div>total : { orderStore.total }</div>
      <button onClick={() => orderStore.amount = 5}>amount to 5</button>
      <button onClick={() => orderStore.amount = 3}>amount to 3</button>
      <button onClick={() => orderStore.price = 2}>price to 2</button>
      <button onClick={() => orderStore.price = 3}>price to 3</button>
      <button onClick={stop}>stop</button>
    </>
  )
}

export default observer(OrderLine);
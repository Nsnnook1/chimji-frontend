import { useState } from "react";
import deleteIcon from "../../assets/icons/delete.png";
import useUser from "../../hooks/use-user";
// import useUser from "../../hooks/use-user";

export default function CartTable() {
  const [checkOrderUpdate, setCheckOrderUpdate] = useState(false);
  const { cartItem, incQuantity, descQuantity, deleteCart } = useUser();

  const handleDelete = async (e) => {
    try {
      await deleteCart(e.target.id);
      setCheckOrderUpdate(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>REMOVE</th>
            <th>QUANTITY</th>
            <th>ADD</th>
            <th>TOTAL PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItem ? (
            cartItem.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
                <td>{cart.price}</td>
                <td>
                  <button
                    id={cart.id}
                    onClick={(e) => descQuantity(e.target.id)}
                  >
                    -
                  </button>
                </td>
                <td>{cart.quantity}</td>
                <td>
                  <button
                    id={cart.id}
                    onClick={(e) => incQuantity(e.target.id)}
                  >
                    +
                  </button>
                </td>
                <td className="action-icon">
                  <button onClick={handleDelete}>
                    <img id={cart.id} src={deleteIcon} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Orders</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

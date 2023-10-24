import { useEffect, useState } from "react";
import deleteIcon from "../../assets/icons/delete.png";
// import useUser from "../../hooks/use-user";

export default function CartTable() {
  // const [getOrder, setGetOrder] = useState([]);
  // const [checkOrderUpdate, setCheckOrderUpdate] = useState(false);
  // const { getCart } = useUser();
  

  const orderList = [
  ];

  const handleDelete = async (e) => {
    try {
      await deleteMenu(e.target.id);
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
            <th>DETAIL</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orderList ? (
            orderList.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.detail}</td>
                <td>{cart.price}</td>
                <td>{cart.quantity}</td>
                <td>{cart.time}</td>
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

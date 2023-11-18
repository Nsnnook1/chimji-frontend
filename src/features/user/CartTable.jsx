import deleteIcon from "../../assets/icons/delete.png";
import useUser from "../../hooks/use-user";
// import useUser from "../../hooks/use-user";

export default function CartTable() {
  // const [getOrder, setGetOrder] = useState([]);
  // const [checkOrderUpdate, setCheckOrderUpdate] = useState(false);
  // const { getCart } = useUser();
  const { cartItem, incQuantity, descQuantity } = useUser();

  // const handleDelete = async (e) => {
  //   try {
  //     await deleteMenu(e.target.id);
  //     setCheckOrderUpdate(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log(cartItem);
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
                <td className='action-icon'>
                  <button>
                    <img id={cart.id} src={deleteIcon} alt='Delete' />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>No Orders</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

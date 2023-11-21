import { useEffect, useState } from "react";
import useAdmin from "../../hooks/use-admin";
import "../../styles/admin/management.scss";

export default function AccountManagementTable() {
  const [getOrders, setGetOrders] = useState([]);
  const { getOrdersDetail } = useAdmin();

  useEffect(() => {
    getOrdersDetail().then((res) => {
      setGetOrders(res.data.orderDetails);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ORDER-DETAIL</th>
            <th>PAYMENT</th>
          </tr>
        </thead>
        <tbody>
          {getOrders ? (
            getOrders.map((acc) => (
              <tr key={acc.id}>
                <td>{acc.id}</td>
                <td>{acc.quantity}</td>
                <td>{acc.menu.name}</td>
                <td>
                  <img src={acc.orders.payment} className="payment-styles" />
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

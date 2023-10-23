import { useEffect, useState } from "react";
// import InputForm from "../../components/InputForm";
import useAdmin from "../../hooks/use-admin";

export default function AccountManagementTable() {
  const [getOrders, setGetOrders] = useState([]);

  const { checkOrders } = useAdmin();

  useEffect(() => {
    checkOrders()
      .then((orderData) => {
        setGetOrders(orderData.data.checkUserOrders); // อัพเดต state ด้วยข้อมูลที่ได้จาก API
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          {/* <tr>
            <InputForm placeholder="Search" classname="input-search" />
          </tr> */}
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ORDER-DETAIL</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {getOrders ? (
            getOrders.map((acc) => (
              <tr key={acc.id}>
                <td>{acc.id}</td>
                <td>{acc.quantity}</td>
                <td>{acc.orders}</td>
                <td>{acc.menus}</td>
                <td>...</td>
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

import { useEffect, useState } from "react";
import useAdmin from "../../hooks/use-admin";
// import Button from "../../components/Button";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";

export default function ManagementPageItem() {
  const [getMenu, setGetMenu] = useState([]);
  console.log(getMenu);
  const { getAllMenu } = useAdmin();
  // ลืมรีเทินของออกจากฟังชั่นgetAllMenu
  // access Data ต้องถูกต้อง ดอทโนเทชั่นเข้าไปให้ถูก
  //ถ้าไม่รู้อะไรไปต่อไม่ถูกหลงทางอะัไรใดๆก็ตามการแก้ปัญหาเบื้องต้นคือคอนโซลล็อคเหมือนหมอตำแย แพทย์พื้นบ้านพร้อมจะช่วยเหลือคุณโอเค๊ จากพี่บอย

  useEffect(() => {
    // const res = getAllMenu()
    getAllMenu()
      .then((menuData) => {
        console.log(menuData);
        setGetMenu(menuData.data.foundMenu); // อัพเดต state ด้วยข้อมูลที่ได้จาก API
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DETAIL</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {getMenu ? (
            getMenu.map((menu) => (
              <tr key={menu.id}>
                <td>{menu.id}</td>
                <td>{menu.name}</td>
                <td>{menu.detail}</td>
                <td>{menu.price}</td>
                <td className="action-icon">
                <img src={editIcon} alt="Edit"/>
                <img src={deleteIcon} alt="Delete"/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td >No menu data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

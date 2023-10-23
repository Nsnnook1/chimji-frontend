import { useEffect, useState } from "react";
import useAdmin from "../../hooks/use-admin";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";
import UploadImg from "../../components/UploadImg";

export default function ManagementPageItem() {
  const [getMenu, setGetMenu] = useState([]);
  const [checkItemUpdate, setCheckItemUpdate] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const { getAllMenu, editMenu, deleteMenu } = useAdmin();
  // ลืมรีเทินของออกจากฟังชั่นgetAllMenu
  // access Data ต้องถูกต้อง ดอทโนเทชั่นเข้าไปให้ถูก
  //ถ้าไม่รู้อะไรไปต่อไม่ถูกหลงทางอะัไรใดๆก็ตามการแก้ปัญหาเบื้องต้นคือคอนโซลล็อคเหมือนหมอตำแย แพทย์พื้นบ้านพร้อมจะช่วยเหลือคุณโอเค๊ จากพี่บอย

  useEffect(() => {
    getAllMenu()
      .then((menuData) => {
        setGetMenu(menuData.data.foundMenu); // อัพเดต state ด้วยข้อมูลที่ได้จาก API
      })
      .catch((error) => console.log(error))
      .finally(setCheckItemUpdate(false));
  }, [checkItemUpdate, setCheckItemUpdate, setEditItem]);

  const handleEdit = async (e) => {
    try {
      await editMenu({
        id: e.target.id,
        name: e.target.name,
        detail: e.targetdetail,
        price: e.target.price,
        picture: e.target.picture,
      });

      const updateMenu = getMenu.map((item) => {
        return;
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    try {
      console.log(e.target);
      await deleteMenu(e.target.id);
      setCheckItemUpdate(true);
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
            <th>PICTURE</th>
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
                <td>
                  {menu.picture}
                  <UploadImg />
                </td>
                <td className="action-icon">
                  <button onClick={handleEdit}>
                    <img id={menu.id} src={editIcon} alt="Edit" />
                  </button>

                  <button onClick={handleDelete}>
                    <img id={menu.id} src={deleteIcon} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No menu data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

import { useEffect, useState } from "react";
import useAdmin from "../../hooks/use-admin";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";
import Modal from "../../components/Modals";
import ModalFrom from "../../components/ModalFrom";
import "../../styles/admin/adminMenu.scss";

export default function ManagementPageItem() {
  const [getMenu, setGetMenu] = useState([]);
  const [checkItemUpdate, setCheckItemUpdate] = useState(false);
  const [editItemId, setEditItemId] = useState(null); // Separate state for the edited item

  const { getAllMenu, editMenu, deleteMenu } = useAdmin();

  useEffect(() => {
    getAllMenu()
      .then((menuData) => {
        setGetMenu(menuData.data.foundMenu);
      })
      .catch((error) => console.log(error))
      .finally(() => setCheckItemUpdate(false)); // Move setCheckItemUpdate inside the finally block
  }, [checkItemUpdate]);

  const handleEdit = (itemId) => {
    setEditItemId(itemId); // Set the ID of the item to be edited
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteMenu(itemId);
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
                  <img className="menu-picture" src={menu.picture} />
                </td>
                <td className="action-icon">
                  <button onClick={() => handleEdit(menu.id)}>
                    <img id={menu.id} src={editIcon} alt="Edit" />
                  </button>

                  <button onClick={() => handleDelete(menu.id)}>
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

      {editItemId !== null && (
        <Modal open={editItemId !== null} onClose={() => setEditItemId(null)}>
          <ModalFrom
            type="edit"
            id={editItemId}
            setGetMenu={setGetMenu}
            getMenu={getMenu}
          />
        </Modal>
      )}
    </div>
  );
}

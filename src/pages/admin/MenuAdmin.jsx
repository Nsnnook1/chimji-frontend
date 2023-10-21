import React, { useState } from "react";
import Button from "../../components/Button";
import ManagementPageItem from "../../features/admin/ManagementPageItem";
import Modal from "../../components/Modals";

import "../../styles/admin/admin-menu.scss";
import ModalFrom from "../../components/ModalFrom";

export default function MenuAdmin() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="admin-menu-header-wrapper">
        <div className="admin-menu-header">
          <h1 className="admin-menu-name">Menu Management</h1>

          <Button
            name="Add"
            onClick={() => {
              setOpen(true);
            }}
          />

          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalFrom />
          </Modal>
        </div>
      </div>

      <div className="admin-menu-body">
        <ManagementPageItem />
      </div>
    </div>
  );
}

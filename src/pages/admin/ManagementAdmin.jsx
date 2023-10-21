import React from "react";
import AccountManagementTable from "../../features/admin/AccountManagementTable"

import "../../styles/admin/management.scss";

export default function ManagementPage() {
  return (
    <div>
      <div className="admin-acc-wrapper">
        <div className="admin-acc-header">
          <h1 className="admin-acc-name">Account Management</h1>
        </div>
      </div>
      <div className="admin-acc-body">
        <AccountManagementTable />
      </div>
    </div>
  );
}

// import React from 'react'

// export default function User() {
//   return (
//     <div>User</div>
//   )
// }
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const User = () => {
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUserList((prev) => [...prev, { id: prev.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "" });
      handleClose();
    }
  };

  return (
    <Box p={3}>
      <Paper
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        Manage User
      </Paper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={newUser.email}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Box mt={3}>
        <DataGrid
          rows={userList}
          columns={[
            { field: "id", headerName: "ID", width: 100 },
            { field: "name", headerName: "Name", width: 200 },
            { field: "Use Name", headerName: "Use Name", width: 300 },

            { field: "email", headerName: "Email", width: 300 },

          ]}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          hideFooter
        />
      </Box>
    </Box>
  );
};

export default User;

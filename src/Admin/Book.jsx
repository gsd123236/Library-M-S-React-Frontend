import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


const Book = () => {
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
    if (newUser.name && newUser.email ) {
      setUserList((prev) => [...prev, { id: prev.length + 1, ...newUser }]);
      setNewUser({ name: "", email: ""  , Publish:""});
      handleClose();
      alert("Data Save Succefully")
    }
  };

  return (
    <Box >
      <Paper
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        Manage Book
      </Paper>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Book
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            margin="dense"
            name="name"
            label="Enter Book Name"
            type="text"
            fullWidth
            value={newUser.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>   
          <TextField
            margin="dense"
            name="email"
            label="Enter Author Name"
            type="email"
            fullWidth
            value={newUser.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            margin="dense"
            name="Publish"
            label="Publish"
            type="text"
            fullWidth
            value={newUser.phone}
            onChange={handleInputChange}
          />
        </Grid>
 
        <Grid item xs={12}>
          <TextField
            margin="dense"
            name="Upolad"
            label="Upload"
            type="file"
            fullWidth
            value={newUser.address}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </DialogContent>
        <DialogActions>
        <Button variant="contained" onClick={handleAddUser} color="primary">
            Add
          </Button>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>

      <Box mt={3}>
        <DataGrid
          rows={userList}
          columns={[
            { field: "id", headerName: "ID", width: 100 },
            { field: "name", headerName: "Book Name", width: 200 },
            { field: "email", headerName: "Author", width: 300 },
            { field: "Publish", headerName: "Publication", width: 300 },

          ]}
          pageSize={5}
          rowsPerPageOptions={[5]}
           
          hideFooter
        />
      </Box>
    </Box>
  );
};

export default Book;

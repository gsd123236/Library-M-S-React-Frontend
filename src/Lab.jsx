import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Componant/Footer";
import Dashboard from "./Dashboard";
import bgimg from "./Img/formB.jpg";
import java from "./Img/java.png";
import Python from "./Img/python.png";

const Lab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Dashboard />
      <Outlet />
      <div>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              width: "90%",
              maxWidth: "500px",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Book Details
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="text-field-1"
                  label="ID"
                  variant="outlined"
                  fullWidth
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="text-field-2"
                  label=" Book Title"
                  variant="outlined"
                  fullWidth
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="text-field-3"
                  label="Author"
                  variant="outlined"
                  fullWidth
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="text-field-3"
                  label="Publish Year"
                  variant="outlined"
                  fullWidth
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  // onClick={handleSave}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button onClick={handleCloseModal} fullWidth>
                  Close
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>

        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "652px",
              width: "100%",
            }}
          ></Grid>
        </Grid>

        <Grid container item>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345, m: 3 }}>
              <CardMedia
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={java}
                  alt="Logo"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "130px",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JAVA Programming
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" >
                  Buy
                </Button>
                <Button size="small">Learn More</Button>

              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345,   m: 3 }}>
              <CardMedia
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={java}
                  alt="Logo"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "130px",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JAVA Programming
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleOpenModal}
                >
                  Buy{" "}
                </Button>

                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345,   m: 3 }}>
              <CardMedia
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Python}
                  alt="Python"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python Programming
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleOpenModal}
                >
                  Buy
                </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345,   m: 3 }}>
              <CardMedia
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Python}
                  alt="Python"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python Programming
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleOpenModal}
                >
                  Buy
                </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card sx={{ maxWidth: 345,   m: 3 }}>
              <CardMedia
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Python}
                  alt="Python"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python Programming
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleOpenModal}
                >
                  Buy
                </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Lab;

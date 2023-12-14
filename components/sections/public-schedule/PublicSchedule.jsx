import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Container,
  Button,
} from "@mui/material";
import styles from "./PublicSchedule.module.css";

const PublicSchedule = () => {
  const rows = [
    {
      gymName: "Gym Moala",
      saturday: false,
      sunday: true,
      monday: false,
      tuesday: true,
      wednesday: false,
      thursday: true,
    },
  ];

  return (
    <section className={styles.publicContainer}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Public Sessions
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Find me, and take your first step to victory!
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Table
          sx={{ width: "80%", margin: "0 auto" }}
          style={{
            borderCollapse: "collapse",
            border: 0,
          }}
        >
          <TableHead>
            <TableRow
              sx={{ "& td, & th": { border: 0 }, background: "#e13435" }}
            >
              <TableCell align="center">Gym \ Days</TableCell>
              <TableCell align="center">Sat</TableCell>
              <TableCell align="center">Sun</TableCell>
              <TableCell align="center">Mon</TableCell>
              <TableCell align="center">Tue</TableCell>
              <TableCell align="center">Wed</TableCell>
              <TableCell align="center">Thur</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.gymName} sx={{ "& td, & th": { border: 0 } }}>
                <TableCell align="center" style={{ color: "#e13435" }}>
                  {row.gymName}
                </TableCell>
                <TableCell align="center">
                  {row.saturday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.sunday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.monday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.tuesday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.wednesday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {row.thursday === true && (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#e13435" }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </section>
  );
};

export default PublicSchedule;

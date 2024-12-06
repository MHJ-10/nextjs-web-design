"use client";

import { Button, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { Travel } from "../lib/data";

const TravelsTableLayout = ({ travels }: { travels: Travel[] }) => {
  const columns: GridColDef[] = [
    {
      field: "origin",
      headerName: "مبدا",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "destination",
      headerName: "مقصد",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "تاریخ",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
        new Date(params.row.date).toLocaleDateString("fa-IR"),
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "id",
      headerName: "عملیات",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" color="primary">
          <Link
            href={`/travels/${params.id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            مشاهده
          </Link>
        </Button>
      ),
    },
  ];

  return (
    <Paper sx={{ height: 400, mt: 5 }}>
      <DataGrid
        columns={columns}
        rows={travels}
        disableColumnMenu
        hideFooter={true}
      />
    </Paper>
  );
};

export default TravelsTableLayout;

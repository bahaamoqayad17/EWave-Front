import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { resources } from "@/lib/resources";
import DynamicMenu from "./DynamicMenu";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { deleteAll } from "@/store/RecommendationSlice";
import { useDispatch } from "react-redux";

export default function DataTable({
  items,
  getPagination,
  count,
  model,
  loading,
}) {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getPagination(page, limit);
  }, [page, limit]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const getFieldValue = (object, field) => {
    const fieldPath = field.split(".");
    let value = object;
    for (let path of fieldPath) {
      value = value[path];
      if (value === undefined) break;
    }

    if (field === "image") {
      return <img src={value} alt="Image" width={"60"} height={"60"} />;
    }

    if (field === "opening_time") {
      return new Date(value).toLocaleString();
    }

    return value;
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = items.map((item) => item._id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
    setSelectAll(event.target.checked);
  };

  const handleRowSelect = (event, id) => {
    if (event.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete all?")) {
      dispatch(deleteAll(selectedIds));
    } else {
      return;
    }
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          {model === "recommendations" ? (
            <>
              <Button sx={{ p: 4, fontSize: 20 }} onClick={handleDelete}>
                Delete All
              </Button>
            </>
          ) : (
            ""
          )}
          <Table>
            <TableHead>
              <TableRow>
                {model === "recommendations" ? (
                  <>
                    <Checkbox checked={selectAll} onChange={handleSelectAll} />
                  </>
                ) : (
                  ""
                )}

                {resources[model]?.headers?.map((header) => (
                  <TableCell key={header} color="textPrimary" variant="body1">
                    {header}
                  </TableCell>
                ))}
                <TableCell color="textPrimary" variant="body1">
                  {t("Actions")}
                </TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={20} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {items?.map((item) => (
                  <TableRow hover key={item._id}>
                    {model === "recommendations" ? (
                      <>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedIds.includes(item._id)}
                            onChange={(event) =>
                              handleRowSelect(event, item._id)
                            }
                          />
                        </TableCell>
                      </>
                    ) : (
                      ""
                    )}

                    {resources[model]?.fields?.map((field) => (
                      <TableCell
                        key={field}
                        color="textPrimary"
                        variant="body1"
                      >
                        {getFieldValue(item, field)}
                      </TableCell>
                    ))}
                    <TableCell>
                      <DynamicMenu model={model} item={item} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

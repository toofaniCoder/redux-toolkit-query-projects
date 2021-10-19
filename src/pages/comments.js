import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Paper, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useGetCommentsQuery } from "../services/commentsApi";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Comments = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching, isSuccess } = useGetCommentsQuery(page);
  return (
    <Box sx={{ width: "100%" }}>
      {isFetching && <LinearProgress />}
      {isSuccess && (
        <Container sx={{ py: 3 }}>
          <Grid container spacing={2}>
            {data.comments.map(({ id, name, email, body }) => (
              <Grid item sm={3} key={id}>
                <Paper sx={{ py: 3, px: 2 }}>
                  <Stack spacing={2} direction="row">
                    <Avatar {...stringAvatar(name)} />
                    <div>
                      <Typography variant="h6">{email}</Typography>
                      <Typography>{body.slice(0, 100)}</Typography>
                    </div>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
            <Pagination
              page={page}
              count={Number(data.count) / Number(data.comments.length)}
              color="primary"
              onChange={(e, pageNumber) => setPage(pageNumber)}
            />
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default Comments;

import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box color="text.secondary" fontSize="h1.fontSize" gutterBottom fontWeight="fontWeightBold">
        2048</Box>
    </div>
  );
}

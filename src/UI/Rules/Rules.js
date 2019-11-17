import React from 'react';
import Typography from '@material-ui/core/Typography';
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
      <Typography variant="h6" gutterBottom>
        How to Play:
      </Typography>
      <Typography variant="body1" gutterBottom>
      Join the numbers and get to the 2048 tile!
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
      W: Up
      <br />
      A: Left
      <br />
      S: Down
      <br />
      D: Right
      </Typography>
      <Typography variant="body1" gutterBottom>
      Use your keyboard keys to move the tiles. When two tiles with the same number touch, they merge into one!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Note:
      </Typography>
      <Typography variant="body1" gutterBottom>
      The game on this site is based on the original version of 2048.
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Have Fun!
      </Typography>
    </div>
  );
}

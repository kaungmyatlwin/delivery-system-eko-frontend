import { useState } from 'react';
import {
  Button,
  Select,
  MenuItem,
  Grid,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { getTowns } from '../helpers/utils';
import { getTotalCostOfRoute } from '../helpers/routesLogic';

const styles = {
  addTownButton: {
    float: 'right',
  },
  selectTownsStyle: {
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
  calculateButtonGrid: {
    marginTop: 10,
    textAlign: 'center',
  },
  totalCost: {
    marginTop: 10,
    textAlign: 'center',
  }
};

const towns = getTowns();

export default function CaseOne() {
  const [routedTowns, setRoutedTowns] = useState([]);
  const [totalCost, setTotalCost] = useState(null);

  const disableCalculateButton = routedTowns.length === 0 || routedTowns.includes(null);

  function onClickAddTown() {
    const clone = [...routedTowns];
    clone.push(null);
    setRoutedTowns(clone);
  }

  function onChangeSelectTown(event, index) {
    const clone = [...routedTowns];
    clone[index] = (event.target.value);
    setRoutedTowns(clone);
  }

  function onClickCalculateCost() {
    setTotalCost(getTotalCostOfRoute(routedTowns));
  }

  return (
    <>
      <Grid
        container
        justify="flex-end"
      >
        <Button
          disableElevation
          color="primary"
          onClick={onClickAddTown}>
            Add Town
        </Button>
      </Grid>
      <div style={{ textAlign: 'left' }}>
        {routedTowns.map((routedTown, index) => (
          <div>
            <InputLabel id={`town${index}`} shrink>Town {index + 1}</InputLabel>
            <Select
              id={`town${index}`}
              placeholder="Town 1"
              style={styles.selectTownsStyle}
              key={index}
              onChange={(e) => onChangeSelectTown(e, index)}
            >
            {
              towns.map((town) => (
                  <MenuItem key={town} value={town}>{town}</MenuItem>
                ))
              }
            </Select>
          </div>
        ))}
      </div>
      <div style={styles.calculateButtonGrid}>
        <Button
          disabled={disableCalculateButton}
          variant="contained"
          color="primary"
          disableElevation
          onClick={onClickCalculateCost}>Calculate Cost</Button>
      </div>
      <div style={styles.totalCost}>
        <Typography variant="h6">
          {totalCost}
        </Typography>
      </div>
    </>
  );
}

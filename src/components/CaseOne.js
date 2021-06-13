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

const towns = getTowns();

export default function CaseOne() {
  const [routedTowns, setRoutedTowns] = useState([null, null]);
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
          <div key={index} className="mt-1">
            <InputLabel id={`town${index}`}>Town {index + 1}</InputLabel>
            <Select
              id={`town${index}`}
              placeholder="Town 1"
              className="w-100 town-select-style"
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
      <div className="mt-1 text-center">
        <Button
          disabled={disableCalculateButton}
          variant="contained"
          color="primary"
          disableElevation
          onClick={onClickCalculateCost}>Calculate Cost</Button>
      </div>
      <div className="mt-1 text-center">
        <Typography variant="h6">
        {
          typeof totalCost === 'number'
            ?
            <>Total cost for {routedTowns.length} towns is {totalCost}.</>
            :
            <>{totalCost}</>
        }
        </Typography>
      </div>
    </>
  );
}

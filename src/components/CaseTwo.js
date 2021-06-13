import { useState } from 'react';
import {
  Select,
  Button,
  MenuItem,
  InputLabel,
  Typography,
  TextField,
} from '@material-ui/core';
import { getTowns } from '../helpers/utils';
import { getPossibleDeliveryRoutes } from '../helpers/routesLogic';

const towns = getTowns();

export default function CaseTwo() {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [maxStops, setMaximumStops] = useState();
  const [totalRoutes, setTotalRoutes] = useState(null);

  const disableFindRouteButton = startPoint === '' || endPoint === '';

  function onClickFindTotalRoutes() {
    setTotalRoutes(
      getPossibleDeliveryRoutes(startPoint, endPoint, maxStops),
    );
  }

  function onChangeMaximumStops(e) {
    setMaximumStops(parseInt(e.target.value));
  }

  return(
    <>
      <div className="mt-1">
          <InputLabel id="startPoint">Start from</InputLabel>
          <Select
            id="startPoint"
            value={startPoint}
            className="w-100"
            onChange={(e) => setStartPoint(e.target.value)}>
            {
              towns.map((town) => (
                <MenuItem key={town} value={town}>{town}</MenuItem>
              ))
            }
          </Select>
       </div>
       <div className="mt-1">
        <InputLabel id="endPoint">End at</InputLabel>
        <Select
          value={endPoint}
          id="endPoint"
          className="w-100"
          onChange={(e) => setEndPoint(e.target.value)}
        >
          {
            towns.map((town) => (
              <MenuItem key={town} value={town}>{town}</MenuItem>
            ))
          }
        </Select>
       </div>
      <TextField
        label="Maximum stops"
        type="number"
        placeholder="eg: 2"
        className="w-100"
        onChange={onChangeMaximumStops}
      />
      <div className="text-center mt-1">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          disabled={disableFindRouteButton}
          onClick={onClickFindTotalRoutes}
        >Find Total Routes</Button>
      </div>
      <div className="text-center mt-1">
        <Typography variant="h6">{totalRoutes}</Typography>
      </div>
    </>
  );
}

import { useState } from 'react';
import {
  Select,
  Button,
  MenuItem,
  InputLabel,
  Typography
} from '@material-ui/core';
import { getTowns } from '../helpers/utils';
import { getPossibleDeliveryRoutes } from '../helpers/routesLogic';

const towns = getTowns();

const styles = {
  townSelector: {
    width: '100%',
  },
};

export default function CaseTwo() {
  const [startPoint, setStartPoint] = useState('E');
  const [endPoint, setEndPoint] = useState('D');
  const [totalRoutes, setTotalRoutes] = useState(null);

  function onClickFindTotalRoutes() {
    setTotalRoutes(
      getPossibleDeliveryRoutes(startPoint, endPoint)
    );
  }

  return(
    <>
      <div>
        <InputLabel id="startPoint">Start from</InputLabel>
        <Select
          id="startPoint"
          style={styles.townSelector}
          onChange={(e) => setStartPoint(e.target.value)}>
          {
            towns.map((town) => (
              <MenuItem key={town} value={town}>{town}</MenuItem>
            ))
          }
        </Select>
        <InputLabel id="endPoint">End at</InputLabel>
        <Select
          id="endPoint"
          style={styles.townSelector}
          onChange={(e) => setEndPoint(e.target.value)}
        >
          {
            towns.map((town) => (
              <MenuItem key={town} value={town}>{town}</MenuItem>
            ))
          }
        </Select>
        {/* <TextField
          label="Maximum stops"
          type="number"
          placeholder="eg: 2"
          className="w-100"
        /> */}
      </div>
      <div className="text-center mt-1">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={onClickFindTotalRoutes}
        >Find Total Routes</Button>
      </div>
      <div className="text-center mt-1">
        <Typography variant="h6">{totalRoutes}</Typography>
      </div>
    </>
  );
}

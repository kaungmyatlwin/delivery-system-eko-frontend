import { useState } from 'react';
import {
  Button,
  Select,
  MenuItem
} from '@material-ui/core';
import { getTowns } from '../helpers/utils';

const styles = {
  selectTownsStyle: {
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
};

const towns = getTowns();

export default function CaseOne() {
  const [routedTowns, setRoutedTowns] = useState([]);
  const [totalCost, setTotalCost] = useState(null);

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

  return (
    <>
      <div>
        {routedTowns.map((routedTown, index) => (
          <Select
            style={styles.selectTownsStyle}
            key={index}
            label={`Town ${index + 1}`}
            onChange={(e) => onChangeSelectTown(e, index)}
          >
          {
            towns.map((town) => (
                <MenuItem key={town} value={town}>{town}</MenuItem>
              ))
            }
          </Select>
        ))}
      </div>
      <Button color="primary" onClick={onClickAddTown}>Add Town</Button>
    </>
  );
}

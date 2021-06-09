// Code taken from https://material-ui.com/components/tabs/#tabs
import {
  Box,
} from '@material-ui/core';

const boxStyles = {
  padding: '12px',
};

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={boxStyles}>{children}</Box>
      )}
    </div>
  );
}

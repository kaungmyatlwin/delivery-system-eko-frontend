import './App.css';
import { useState } from 'react';
import {
  Container,
  Grid,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import TabPanel from './components/TabPanel';
import CaseOne from './components/CaseOne';

function App() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid>
          <AppBar position="static">
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              centered>
              <Tab label="Case 1"></Tab>
              <Tab label="Case 2"></Tab>
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0}>
            <CaseOne />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>

          </TabPanel>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

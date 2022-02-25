import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Board1() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const info = [
    {
      id: 1,
      title: "Later Articles",
      content: "test"
    },
    {
      id: 2,
      title: "Currnet Issue",
      content: "test"
    },
    {
      id: 3,
      title: "List of Issue",
      content: "test"
    }
  ];


  return (
    <Box class="board" sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {info.map(name => <Tab label={name.title} value={name.id}></Tab>)}
          </TabList>
        </Box>
        {info.map(name => <TabPanel value={name.id}> {name.content} </TabPanel>)}
      </TabContext>
    </Box>
  );
}

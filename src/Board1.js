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
      title: "About Us",
      content: "About Us..."
    },
    {
      id: 2,
      title: "Aims & Scope",
      content: "Aims & Scope..."
    },
    {
      id: 3,
      title: "Editorial Board",
      content: "Editorial Board..."
    },
    {
      id: 4,
      title: "For Authors",
      content: "For Authors..."
    },
    {
      id: 5,
      title: "Indexing",
      content: "Indexing..."
    },
    {
      id: 6,
      title: "Contact Us",
      content: "Contact Us"
    }
  ];

  const TabTitle = info.map(name => <Tab label={name.title} value={name.id}></Tab>)
  const TabContent = info.map(name => <TabPanel value={name.id}> {name.content} </TabPanel>)


  return (
    <Box className="board"  sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TabTitle}
          </TabList>
        </Box>
        {TabContent}
      </TabContext>
    </Box>
  );
}

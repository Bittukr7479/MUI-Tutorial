// import React from "react";
// import Delete from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";
// import { useState } from "react";


// function App() {
//   const [color, setColor] = useState("primary");
//   const [disableBtn, setDisableBtn] = useState(false);
//   const [variant, setVariant] = useState("outlined");

//   function customMe() {
//     alert("Material-ui");
//     setColor("secondary");
//     // setDisableBtn("true");
//     setVariant("contained");

//   }
//   return (
//     <div className="App">
//       <h1>
//         <button>click me</button>
//         <h1>Material-UI</h1>
//         <Button color={color} disabled={disableBtn} variant={variant} startIcon={<Delete/>} onClick={()=>{customMe()}}>click me</Button>

//         {/* <h1>react Material UI | CheckBox</h1>
//         <Checkbox/> */}
//       </h1>
//     </div>
//   );
// }

// export default App;




// import './App.css'
// import React from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";

// function App() {
//   return (
//     <div className="App">
//       <h1>react Material UI| ButtonGroup</h1>
//       <ButtonGroup variant='outlined'
//         orientation='vertical'
//         color='secondary'>
//         <Button>Click me</Button>
//         <Button>Click me</Button>
//         <Button>Click me</Button>

//       </ButtonGroup>
//     </div>
//   );
// }

// export default App;


// import './App.css'
// import React from "react";
// import Checkbox from "@mui/material/Checkbox"
// import { useState } from "react";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// function App() {
//   const [name, setName] = useState([])
//   function getvalue(e) {
//     console.log(e.target.value);
//   }
//   return (
//     <div className="App">
//       <h1>react Material UI| Checkbox</h1>
//       <Checkbox color='secondary' value="sid" onChange={(e) => { getvalue(e) }} />
//       <Checkbox color='secondary' value="vis" onChange={(e) => { getvalue(e) }} />
//       <Checkbox color='secondary' value="jwala" indeterminate onChange={(e) => { getvalue(e) }} />
//       <Checkbox value="xyz"
//         color='primary'
//         onChange={(e) => { getvalue(e) }}
//         icon={<FavoriteBorderIcon />}
//         checkedIcon={<FavoriteIcon />}
//       />
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React from "react";
// import { useState } from "react";
// import Radio from '@mui/material/Radio';

// function App() {
//   const [gender, setGender] = useState("male")
//   const testFunction=(e)=> {
//     setGender(e.target.value)
//     console.log(e.target.value);
//   }
//   return (
//     <div className="App">
//       <h1>react Material UI| Radio</h1>
//       <div>
//         <Radio
//         color='secondary'
//         value="female"
//         checked={gender==="female"}
//         onChange={testFunction}
//         />
//         <span>Male</span>
//       </div>
//       <div>
//         <Radio
//         color='primary'
//         value="male"
//         checked={gender==="male"}
//         onChange={testFunction}
//         />
//         <span>Female</span>
//       </div>
//       <div>
//         <Radio
//         color='secondary'
//         value="neuter"
//         checked={gender==="neuter"}
//         onChange={testFunction}
//         />
//         <span>Neuter</span>
//       </div>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import React from "react";
// import Slider from '@mui/material/Slider';

// function App() {
//   const mark = [
//     {
//       value: 0,
//       label: "Start"
//     },
//     {
//       value: 200,
//       label:"end"
//     },
//     {
//       value: 100,
//       label:"mid"
//     }
//   ]

//   const getvalue=(e)=>{
//     console.log(e.target.value);
//   }
//   return (
//     <div className="App">
//       <h1>react Material UI| Slider</h1>
//       <div style={{ height: 300, margin: 40 }}>
//         <Slider
//           color='primary'
//           defaultValue={50}
//           valueLabelDisplay='auto'
//           max={200}
//           step={10}
//           marks={mark}
//           onChange={getvalue}
//           orientation='vertical'
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React, { useState } from "react";
// import Slider from '@mui/material/Slider';


// function App() {
//   const [val, setVal] = useState([40, 60])
//   const updateVal=(e, item)=>{
//     setVal(item)
//     console.log(item);
//   }
//   return (
//     <div className="App">
//       <h1>react Material UI| Range Slider</h1>
//       <div style={{ width: 300, margin: 40 }}>
//         <Slider
//           max={200}
//           value={val}
//           onChange={updateVal}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import { useState } from 'react'
// import { Select, MenuItem } from "@mui/material"
// import './App.css'

// function App() {
//   const [course, setCourse] = useState(3)
//   const UpdateValue=(e)=>{
//     console.warn(e.target.value);
//     setCourse(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Material UI using reactjs| Select Box or Select</h1>
//       <Select 
//       value={course}
//       displayEmpty
//       onChange={UpdateValue}
//       >
//         <MenuItem value="">Select Course</MenuItem>
//         <MenuItem value={1}>C</MenuItem>
//         <MenuItem value={2}>Java</MenuItem>
//         <MenuItem value={3}>JavaScript</MenuItem>
//         <MenuItem value={4}>Python</MenuItem>
//       </Select>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'
// import TextField from "@mui/material/TextField"
// import './App.css'

// function App() {
//   const getData=(e)=>{
//     console.warn(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Material UI using reactjs| Select Box or Select</h1>
//       <TextField
//       label="enter name"
//       color='secondary'
//       variant='outlined'
//       onChange={getData}
//       />
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import TextField from "@mui/material/TextField"
// import './App.css'

// function App() {
//   const getData=(e)=>{
//     console.warn(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Material UI using reactjs| TextArea or TextField</h1>
//       <TextField
//       label="enter name"
//       color='secondary'
//       variant='outlined'
//       onChange={getData}
//       />
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Switch from "@mui/material/Switch"
// import './App.css'

// function App() {
//   const getValue=(e, val)=>{
//     console.warn(val);
//   }
//   return (
//     <div>
//       <h1>Material UI using reactjs | Swicth</h1>
//       <Switch
//       color='secondary'
//       size='small'
//       onChange={getValue}/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Box, Button } from "@mui/material"
// import './App.css'

// function App() {

//   return (
//     <div>
//       <h1>Material UI using reactjs | Box</h1>
//       <Box component="span" style={{ color: 'red' }} clone="true" m={20} p={10}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit ipsa suscipit.</p>
//         <Button>Click me</Button>
//       </Box>
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Container from "@mui/material/Container"
// import './App.css'

// function App() {

//   return (
//     <div>
//       <h1>Material UI using reactjs | Container</h1>
//       <Container maxWidth="xs" style={{ backgroundColor: 'blue' }}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto itaque sapiente.</p>
//       </Container>
//       <Container maxWidth="sm" style={{ backgroundColor: 'blue' }}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto itaque sapiente.</p>
//       </Container>
//       <Container maxWidth="md" style={{ backgroundColor: 'blue' }}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto itaque sapiente.</p>
//       </Container>
//       <Container maxWidth="lg" style={{ backgroundColor: 'blue' }}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto itaque sapiente.</p>
//       </Container>
//       <Container maxWidth="fixed" style={{ backgroundColor: 'blue' }}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto itaque sapiente.</p>
//       </Container>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Grid } from "@mui/material"

// function App() {

//   return (
//     <div>
//       <h1>Material UI using reactjs | Grid</h1>
//       <Grid item xs={12} container spacing={2}>
//         <Grid item lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }} >block-1</h1>
//         </Grid>
//         <Grid item lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }} >block-2</h1>
//         </Grid>
//         <Grid item  lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }}>block-3</h1>
//         </Grid>
//         <Grid item lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }} >block-4</h1>
//         </Grid>
//       </Grid>

//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { Grid, Hidden } from "@mui/material"

// function App() {

//   return (
//     <div>
//       <h1>Material UI using reactjs | Hidden</h1>
//       <Grid item xs={12} container spacing={2}>
//         <Grid item lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }} >block-1</h1>
//         </Grid>
//         <Grid item lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }} >block-2</h1>
//         </Grid>
//         <Grid item  lg={3} sm={6} xs={12}>
//           <h1 style={{ backgroundColor: "blue" }}>block-3</h1>
//         </Grid>
//         {/* <Hidden only={"sm"}>
//           <h1 style={{ backgroundColor: "blue", flex:1}} >block-4</h1>
//         </Hidden> */}
//         <Hidden only={["sm", "lg"]}>
//           <h1 style={{ backgroundColor: "blue", flex:1}} >block-4</h1>
//         </Hidden>
//       </Grid>

//     </div>
//   )
// }

// export default App



// import React from 'react';
// import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import { Menu, MenuItem, Button } from "@mui/material"
// import { useState } from 'react';

// function App() {
//   const [anchor, setAnchor] = React.useState(null)
//   const openMenu = (event) => {
//     setAnchor(event.currentTarget)
//   }
//   const closeMenu = () => {
//     setAnchor(null)
//   }
//   return (
//     <Router>
//       <div>
//         <h1>Material UI using reactjs | Grid</h1>
//         <Button onClick={openMenu}>Menu</Button>
//         <Menu
//         anchorEl={anchor}
//           open={Boolean(anchor)}
//           onClick={closeMenu}
//         >
//           <MenuItem><Link to="/">Home</Link></MenuItem>
//           <MenuItem><Link to="/about">About</Link></MenuItem>
//         </Menu>
//       </div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// function Home() {
//   return <h1>Home page</h1>;
// }

// function About() {
//   return <h1>About page</h1>;
// }

// export default App;



import './App.css';
import React from "react";
import { useState } from "react";
import { AppBar, Tab, Tabs } from '@mui/material';
import { red } from '@mui/material/colors';
function App() {
  const [value, setValue] = useState(0);
  const handleTables = (e, val) => {
    console.log(val);
    setValue(val);
  }
  return (
    <div>
      <h1>Material UI using reactjs| Tabs</h1>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTables}>
          <Tab label="item 1"/>
          <Tab label="item 2"/>
          <Tab label="item 3"/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One Details
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Details
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Details
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div>
      {value == index &&
      <h1>{children}</h1>}
    </div>
  )
}

export default App
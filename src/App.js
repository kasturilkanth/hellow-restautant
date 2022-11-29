import file from './file.jpeg'
import './App.css';
import logo from "./logo.png";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
  
  const sideBarArray=["Live Users","Reports","Orders","Transactions",
  "Customers","Restaurants","Coupons",
"Banners","Settlements","Create Offers","Sub Admin"];
const initiateUpload = () => {
  document.getElementById("fileSelect").click();
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    
    <div className="App">
      <div className='sidebar'>
        <div className='rect-card-logo'><img className='rect-card-logo' src={logo} alt="chitra"></img></div>
        <div className='rect-card-dashboard'>
          <div className='small-box'>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
          <div className='four'></div>
          </div><p  className='dashboard-word'>Dashboard</p></div>
        {sideBarArray.map((word)=>(
        <div  className='rect-card-all'>
<p className='words'>{word}</p>
        </div>
        

        ))
       }
      </div>
      <header className="App-header">
      <h1 className="add-restaurent">Add Restaurant</h1>
        <div className="chip">
        <Avatar alt="Natacha" src="/static/images/avatar/1.jpg"className='avatar' />
        <p className='vendor-word'>Vendor Name</p>
        </div>


      </header>
<div className='rest-details-box'>
  <form>
  <p className='rest-heading'>Restaurant Details</p>
  
  <h1 className='name'>Admin Name</h1>
  <input className='input' placeholder='Enter Admin Name'/>
  <h1 className='name'>Restaurant Name</h1>
  <input className='input' placeholder='Enter Restaurant Name'/>
  <h1 className='name'>Restaurant Address</h1>
  <textarea placeholder='Enter Addresss'/>
  <h1 className='name'>Restaurant Google Location</h1>
  <input className='input' placeholder='Select Location'/>
  </form>
</div>
<div className='other-det-box'>
<form>
  <p className='rest-heading'>Other Details</p>
  
  <h1 className='name'>Restaurant Email</h1>
  <input className='input' placeholder='Enter Email ID'/>

  <h1 className='name'>Restaurant Phone Number</h1>
  <input className='input' placeholder='Enter Restaurant Phone Number'/>

  <h1 className='name'>Bank Account Number</h1>
  <input className='input' placeholder='Enter Bank Account Number'/>

  <div className='acc-box'>
    <div>
  <h1 className='name'>Account Holder Name</h1>
  <input className='input-acc' placeholder='Enter Account Holder Name '/>
</div>
<div>
  <h1 className='name'>Bank IFSC Code</h1>
  <input className='input-acc' placeholder='Enter Bank IFSC Code'/>
  </div>
  </div>
  </form>
</div>
<button className='create-btns'>Create Restaurant</button>

<div className='details-box'>
<h1 className='name'>Restaurant Logo</h1>
  
<div class="hidden-class">
            <input
              placeholder="Excel Only"
              type="file"
              id="fileSelect"
              multiple
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx, .xls, .csv"
            />

          </div>
<div style={{ margin: '15px' }}>

<button className='upload-btn' style={{ width:"300px",height:"40px",marginLeft:"auto" }}
 onClick={initiateUpload} id="fileSelect">
  Select a file to upload

  <span><img src={file} style={{ width:"20px",height:"20px" }} alt="chitra"/></span>
  </button>
 
</div>

<h1 className='name'>Restaurant Timings(Morning) </h1>
<input type='time' className='time-inp'/>--<input className='time-inp' style={{marginLeft:"0px"}} type='time'/>

<h1 className='name'>Restaurant Timings(Morning)  </h1>
<input type='time' className='time-inp'/>--<input type='time' style={{marginLeft:"0px"}} className='time-inp'/>

<h1 className='name'>Restaurant Type</h1>
<div>
<FormControl sx={{ m: 1, width: 300, height:20, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select veg/non-veg</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select veg/non-veg</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      
    </div>

</div>
<div className='doc-details-box'>
<h1 className='name'>Document Details</h1>
<h1 className='name'>GST number</h1>

<div class="hidden-class">
            <input
              placeholder="Excel Only"
              type="file"
              id="fileSelect"
              multiple
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx, .xls, .csv"
            />

          </div>
<div style={{ margin: '15px' }}>

<button className='upload-btn' style={{ width:"300px",height:"40px",marginLeft:"auto" }}
 onClick={initiateUpload} id="fileSelect">
  Enter GST number

  <span><img src={file} style={{ width:"20px",height:"20px" }} alt="chitra"/></span>
  </button>
<h1 className='name'>FSSAI number</h1>

  <button className='upload-btn' style={{ width:"300px",height:"40px"}}
 onClick={initiateUpload} id="fileSelect">
  Enter FSSAI number

  <span><img src={file} style={{ width:"20px",height:"20px" }} alt="chitra" /></span>
  </button>
 
</div>
</div>
<div className='manager-box'>
<p >Relationship Manager</p>

<h1 className='name'>Manager number</h1>
<input type='number' className='number-inp' placeholder='Enter phone number'/>
</div>




    </div>
  );
}

export default App;

import "date-fns";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';





const nepalDistricts=[
    "achham",
    "arghakhanchi",
    "baglung",
    "baitadi",
    "bajhang",
    "bajura",
    "banke",
    "bara",
    "bardiya",
    "bhaktapur",
    "bhojpur",
    "chitwan",
    "dadeldhura",
    "dailekh",
    "dang deukhuri",
    "darchula",
    "dhading",
    "dhankuta",
    "dhanusa",
    "dholkha",
    "dolpa",
    "doti",
    "gorkha",
    "gulmi",
    "humla",
    "ilam",
    "jajarkot",
    "jhapa",
    "jumla",
    "kailali",
    "kalikot",
    "kanchanpur",
    "kapilvastu",
    "kaski",
    "kathmandu",
    "kavrepalanchok",
    "khotang",
    "lalitpur",
    "lamjung",
    "mahottari",
    "makwanpur",
    "manang",
    "morang",
    "mugu",
    "mustang",
    "myagdi",
    "nawalparasi",
    "nuwakot",
    "okhaldhunga",
    "palpa",
    "panchthar",
    "parbat",
    "parsa",
    "pokhara",
    "pyuthan",
    "ramechhap",
    "rasuwa",
    "rautahat",
    "rolpa",
    "rukum",
    "rupandehi",
    "salyan",
    "sankhuwasabha",
    "saptari",
    "sarlahi",
    "sindhuli",
    "sindhupalchok",
    "siraha",
    "solukhumbu",
    "sunsari",
    "surkhet",
    "syangja",
    "tanahu",
    "taplejung",
    "terhathum",
    "udayapur"
]


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export function SimpleSelect() {
    const classes = useStyles();
    const [district, setdistrict] =useState('Pokhara');
  
    const handleChange = (event) => {
      setdistrict(event.target.value);
    };
  
    return (
      <div>
        <FormControl className={classes.formControl}  style={{marginLeft:'-1px',marginRight:'50px',marginTop:'7.5px'}}>
          <InputLabel id="demo-simple-select-label">Travelling to</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={district}
            onChange={handleChange}
           style={{width:'200px'}}
          >
            {nepalDistricts.map((item,i)=><MenuItem key={i} value={item[0].toUpperCase()+item.split('').splice(1,item.length-1).join('')}>{item[0].toUpperCase()+item.split('').splice(1,item.length-1).join('')}</MenuItem>)}
          </Select>
        </FormControl>
        </div>
    )}



export default function MaterialUIPickers() {
    const [width, setwidth] = useState(0);

    useEffect(() => {
        if (process.browser) {
            setwidth(window.innerWidth);
        }
    }, []);
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate2, setSelectedDate2] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    return (
        <>
        {/* <p>Search Hotels</p> */}
        <div  style={{ marginLeft: width > 542 ? '10%' : '6%', marginTop: '10px', background: 'white', maxWidth: '70%', display: 'flex', flexWrap: 'wrap',padding:'20px',borderRadius:'10px',alignItems:'center', boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.09)',
WebkitBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.09)',
MozBoxShadow: '0px 0px 8px 2px rgba(0,0,0,0.09)',minWidth:'230px'}}>
            <SimpleSelect />
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Departure"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                        style={{ marginRight: '50px', width:'200px', maxWidth:'80%'}}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Return"
                        value={selectedDate2}
                        onChange={handleDateChange2}
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                        style={{ marginRight: '50px !important', width:'200px', maxWidth:'80%'}}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <Button variant="outlined" color="primary" style={{border:'none',color:'white',fontWeight:'bold',backgroundColor:'#008bfc',position:'relative', top:width<1250?'10px':'0'}}>
  Search Hotels
</Button>
        </div>
        </>
    );
}




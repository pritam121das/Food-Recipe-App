// import React,{useState} from "react";
// import DateTimePicker from '@react-native-community/datetimepicker'
// import {View} from 'react-native';
// const DateTime=()=>{
//     const[dt,setDt]=useState(new Date());
//     return(
//         <View>
//             <DateTimePicker value={dt}
//             modes='date'
//             display='calender'
//             onChange={dt =>setDt(dt)}/>
//         </View>
//     )
// }
// export default DateTime;
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

const DateTime = () => {
  const [dt, setDt] = useState(new Date());

  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      setDt(selectedDate);
    }
  };

  return (
    <View>
      <DateTimePicker
        value={dt}
        mode="date" // Corrected prop
        display="calendar" // Corrected spelling
        onChange={handleChange} // Proper handling
      />
    </View>
  );
};

export default DateTime;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
  import 'react-calendar/dist/Calendar.css';


function Date() {
  const [value, onChange] = useState();

  return (
    <div>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          defaultView={"decade"}
          maxDetail={"decade"}

        />
      </div>

    </div>
  );
}
export default Date;

//DatePicker
import DatePickerRangeController from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar(props) {
  const { start, end, change } = props;
  return (
    <DatePickerRangeController
      selected={start}
      onChange={change}
      startDate={start}
      endDate={end}
      dateFormat="yyyy/MM/dd"
      monthsShown={2}
      selectsRange
      inline
    />
  );
}

export default Calendar;

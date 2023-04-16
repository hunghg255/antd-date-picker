import './styles/date-picker.css';
import DatePicker from '@/components/DatePicker/DatePicker';
import RangePicker from '@/components/RangePicker/RangePicker';

function App() {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  return (
    <>
      <h1>Ant Design Date Picker</h1>
      <br />
      <h2>Date Picker</h2>
      <DatePicker onChange={onChange} />
      <br />
      <DatePicker onChange={onChange} picker='week' />
      <br />
      <DatePicker onChange={onChange} picker='month' />
      <br />
      <DatePicker onChange={onChange} picker='quarter' />
      <br />
      <DatePicker onChange={onChange} picker='year' />

      <hr />
      <h2>Range Picker</h2>
      <RangePicker />
      <br />
      <RangePicker showTime />
      <br />
      <RangePicker picker='week' />
      <br />
      <RangePicker picker='month' />
      <br />
      <RangePicker picker='quarter' />
      <br />
      <RangePicker picker='year' />
    </>
  );
}

export default App;

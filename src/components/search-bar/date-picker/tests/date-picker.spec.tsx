import { DatePicker } from '../date-picker';
import moment from 'moment';

describe('date picker', () => {
  it('getCurrentDate in expected format', () =>{
    const datePicker = new DatePicker();
    expect(datePicker.getCurrentDate(datePicker.dateFormat)).toBe(moment(1561698539000).format(datePicker.dateFormat))
  })

  it('getMaxDate in expected format', () =>{
    const datePicker = new DatePicker();
    expect(datePicker.getMaxDate(datePicker.dateFormat)).toBe(moment(1561698539000).add(1, 'y').format(datePicker.dateFormat))
  })
})
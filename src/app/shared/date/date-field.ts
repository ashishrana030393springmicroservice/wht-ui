import { MONTH } from 'src/app/core/models/month.model';

export interface DateField {
  day?: number | undefined | null;
  month?: MONTH | undefined | null;
  year?: number | undefined | null;
}

export class DateUtils{
  static date(dob:DateField):string|undefined{
    const month  = dob.month?.value;
    const day = dob.day+'';
    const year = dob.year;
    return (month && year && day)? (year+'-'+month+'-'+(day.length==1? ('0'+day):day)) : undefined;
  }
}

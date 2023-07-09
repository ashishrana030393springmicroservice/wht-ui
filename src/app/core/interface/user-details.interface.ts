import { GENDER } from '../enum/gender.enum';

export interface UserDetails {
  username?: string;
  dob?: string;
  gender?: GENDER;
  firstName?: string;
  lastName?: string;
  password?: string;
}

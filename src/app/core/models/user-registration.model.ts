import { GENDER } from '../enum/gender.enum';
import { UserDetails } from '../interface/user-details.interface';

export class UserRegistration implements UserDetails {
  username?: string;
  dob?: string;
  gender?: GENDER;
  firstName?: string;
  lastName?: string;
  password?: string;
}

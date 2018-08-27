import {CustomerGroup} from './customer-group';

export class CustomerGroupEnrolmentDetails {
  customerGroup: CustomerGroup;
  relationshipManagers: Array<RelationshipMangerDetails>;
  internalEnrolmentDetails: InternalEnrolmentDetails;
  externalEnrolmentDetails: ExternalEnrolmentDetails;
}

export class RelationshipMangerDetails {
  name: string;
  employeeNumber: number;
  email: string;
}

export abstract class EnrolmentDetails {
  enrolmentType: string;
  release: number;
  enrolledOn: Date;
  enrolledBy: string;
}

export class InternalEnrolmentDetails extends EnrolmentDetails {

}

export class ExternalUser {
  userName: string;
  userNumber: string;
}

export class ExternalEnrolmentDetails extends EnrolmentDetails {
  externalUsers: Array<ExternalUser>;
}



import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-enrolment-details',
  templateUrl: './enrolment-details.component.html',
  styleUrls: ['./enrolment-details.component.css']
})
export class EnrolmentDetailsComponent implements OnInit {
  selectedOrganizationNumber: string;

  constructor( private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.selectedOrganizationNumber = params.get('organizationNumber')
    ));
  }

}

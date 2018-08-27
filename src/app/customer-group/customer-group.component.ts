import {Component, OnInit} from '@angular/core';
import {CustomerGroupList} from '../domain/customer-group-list';
import {CustomerGroupServiceService} from '../services/customer-group-service.service';

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.css']
})
export class CustomerGroupComponent implements OnInit {
  customerGroupList: CustomerGroupList;
  selectedOrganizationNumber: number;

  constructor(private customerGroupService: CustomerGroupServiceService) {
    this.getCustomerGroupList();
  }

  ngOnInit() {
  }

  getCustomerGroupList(): void {
    this.customerGroupService.getCustomerGroupList().subscribe(
      customerGroupListRespone => {
        this.customerGroupList = customerGroupListRespone;
      }
    );
  }

}

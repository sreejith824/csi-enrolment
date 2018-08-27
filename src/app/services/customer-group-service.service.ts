import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerGroupList} from '../domain/customer-group-list';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupServiceService {

  constructor(private httpClient: HttpClient ) {
  }

  getCustomerGroupList(): Observable<CustomerGroupList> {
    return this.httpClient.get<CustomerGroupList>('http://localhost:8080/api/v1/customerGroup');
  }
}

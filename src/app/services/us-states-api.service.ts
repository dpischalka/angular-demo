import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {StateModel} from '@store/models';
import {BASE_URL} from '@common';

@Injectable()
export class UsStatesApiService {
  constructor(private httpClient: HttpClient) {
  }

  getStatesInfo(): Observable<StateModel[]> {
    return this.httpClient.get<StateModel[]>(`${BASE_URL}/states/info.json`);
  }
}

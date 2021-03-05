import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {USStatesActions} from '@store/actions/us-states';
import {AppState} from '@store/state';
import {selectUSStates} from '@store/selectors';
import {Observable} from 'rxjs';
import {StateModel} from '@store/models';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {filter, take} from 'rxjs/operators';

interface ColumnData {
  name: string;
  dataKey: string;
}

interface USStatesCovidStructure {
  state: string;
  name: string;
  covid19Site: string;
  twitter: string;
}

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.scss']
})
export class StatesListComponent implements OnInit {
  public USStates$: Observable<StateModel[]> = this.store$
    .select(
      selectUSStates
    )
    .pipe(
      filter((USStateTablesData: StateModel[]): boolean => Boolean(USStateTablesData.length)),
      take(1)
    );

  public columnData: ColumnData[] = [
    {name: 'Code', dataKey: 'state'},
    {name: 'Name', dataKey: 'name'},
    {name: 'Covid Site', dataKey: 'covid19Site'},
    {name: 'Twitter', dataKey: 'twitter'},
  ];
  public columnKeys: string[] = this.columnData.map(({dataKey}: ColumnData) => dataKey);
  public columnNames: string[] = this.columnData.map(({name}: ColumnData) => name);

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(USStatesActions.getStates());
  }

  trackByFn(index: number): number {
    return index;
  }
}

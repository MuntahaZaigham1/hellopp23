import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IT1 } from '../it-1';
import { T1Service } from '../t-1.service';
import { Router, ActivatedRoute } from '@angular/router';
import { T1NewComponent } from '../new/t-1-new.component';
import { BaseListComponent, ListColumnType, PickerDialogService } from 'src/app/common/shared';
import { ErrorService } from 'src/app/core/services/error.service';
import { Globals } from 'src/app/core/services/globals';


@Component({
  selector: 'app-t-1-list',
  templateUrl: './t-1-list.component.html',
  styleUrls: ['./t-1-list.component.scss']
})
export class T1ListComponent extends BaseListComponent<IT1> implements OnInit {

	title = 'T1';
	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public global: Globals,
		public dialog: MatDialog,
		public changeDetectorRefs: ChangeDetectorRef,
		public pickerDialogService: PickerDialogService,
		public t1Service: T1Service,
		public errorService: ErrorService,
	) { 
		super(router, route, dialog, global, changeDetectorRefs, pickerDialogService, t1Service, errorService)
  }

	ngOnInit() {
		this.entityName = 'T1';
		this.setAssociation();
		this.setColumns();
		this.primaryKeys = ['id', ]
		super.ngOnInit();
	}
  
  
	setAssociation(){
  	
		this.associations = [
		];
	}
  
  	setColumns(){
  		this.columns = [
    		{
				column: 'str',
				searchColumn: 'str',
				label: 'str',
				sort: true,
				filter: true,
				type: ListColumnType.String
			},
    		{
				column: 'jbf',
				searchColumn: 'jbf',
				label: 'jbf',
				sort: true,
				filter: true,
				type: ListColumnType.String
			},
    		{
				column: 'jb',
				searchColumn: 'jb',
				label: 'jb',
				sort: true,
				filter: true,
				type: ListColumnType.String
			},
    		{
				column: 'inet',
				searchColumn: 'inet',
				label: 'inet',
				sort: true,
				filter: true,
				type: ListColumnType.String
			},
    		{
				column: 'id',
				searchColumn: 'id',
				label: 'id',
				sort: true,
				filter: true,
				type: ListColumnType.Number
			},
    		{
				column: 'fpa',
				searchColumn: 'fpa',
				label: 'fpa',
				sort: true,
				filter: true,
                  type: ListColumnType.NumericArray,
			},
    		{
				column: 'flpa',
				searchColumn: 'flpa',
				label: 'flpa',
				sort: true,
				filter: true,
                  type: ListColumnType.NumericArray,
			},
    		{
				column: 'file',
				searchColumn: 'file',
				label: 'file',
				sort: true,
				filter: true,
                  type: ListColumnType.File,
			},
    		{
				column: 'ca',
				searchColumn: 'ca',
				label: 'ca',
				sort: true,
				filter: true,
                  type: ListColumnType.Array,
			},
		  	{
				column: 'actions',
				label: 'Actions',
				sort: false,
				filter: false,
				type: ListColumnType.String
			}
		];
		this.selectedColumns = this.columns;
		this.displayedColumns = this.columns.map((obj) => { return obj.column });
  	}
  addNew(comp) {
	if(!comp){
		comp = T1NewComponent;
	}
	super.addNew(comp);
  }
  
}

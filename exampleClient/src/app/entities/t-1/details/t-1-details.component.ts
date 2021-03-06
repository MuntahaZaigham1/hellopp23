import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { T1Service } from '../t-1.service';
import { IT1 } from '../it-1';

import { BaseDetailsComponent, FieldType, PickerDialogService } from 'src/app/common/shared';
import { ErrorService } from 'src/app/core/services/error.service';


@Component({
  selector: 'app-t-1-details',
  templateUrl: './t-1-details.component.html',
  styleUrls: ['./t-1-details.component.scss']
})
export class T1DetailsComponent extends BaseDetailsComponent<IT1> implements OnInit {
	title = 'T1';
	parentUrl = 't1';
	constructor(
		public formBuilder: FormBuilder,
		public router: Router,
		public route: ActivatedRoute,
		public dialog: MatDialog,
		public t1Service: T1Service,
		public pickerDialogService: PickerDialogService,
		public errorService: ErrorService,
	) {
		super(formBuilder, router, route, dialog, pickerDialogService, t1Service, errorService);
  }

	ngOnInit() {
		this.entityName = 'T1';
		this.setAssociations();
		super.ngOnInit();
		this.setForm();
    	this.getItem();
	}
  
  setForm(){
    this.itemForm = this.formBuilder.group({
	  ca: new FormArray([]),
	  file:[],
	  fileFileSource:[],
	  flpa: new FormArray([]),
	  fpa: new FormArray([]),
      id: ['', Validators.required],
      inet: [''],
      jb: [''],
      jbf: [''],
      str: [''],
      
    });
    
    this.fields = [
        {
		  name: 'str',
		  label: 'str',
		  isRequired: false,
		  isAutoGenerated: false,
	      type: FieldType.String,
	    },
        {
		  name: 'jbf',
		  label: 'jbf',
		  isRequired: false,
		  isAutoGenerated: false,
	      type: FieldType.String,
	    },
        {
		  name: 'jb',
		  label: 'jb',
		  isRequired: false,
		  isAutoGenerated: false,
	      type: FieldType.String,
	    },
        {
		  name: 'inet',
		  label: 'inet',
		  isRequired: false,
		  isAutoGenerated: false,
	      type: FieldType.String,
	    },
        {
		  name: 'id',
		  label: 'id',
		  isRequired: true,
		  isAutoGenerated: false,
	      type: FieldType.Number,
	    },
        {
		  name: 'fpa',
		  label: 'fpa',
		  isRequired: false,
		  isAutoGenerated: false,
          type: FieldType.NumericArray,
	    },
        {
		  name: 'flpa',
		  label: 'flpa',
		  isRequired: false,
		  isAutoGenerated: false,
          type: FieldType.NumericArray,
	    },
        {
		  name: 'file',
		  label: 'file',
		  isRequired: false,
		  isAutoGenerated: false,
          type: FieldType.File,

	    },
        {
		  name: 'ca',
		  label: 'ca',
		  isRequired: false,
		  isAutoGenerated: false,
          type: FieldType.Array,
	    },
      ];
      
  }
  
  onItemFetched(item: IT1) {
    this.item = item;
	 this.item.ca.forEach(elem => {
          (<FormArray>this.itemForm.get('ca')).push(new FormControl(elem));
      });
        delete item.ca;
	    delete item.file;
	 this.item.flpa.forEach(elem => {
          (<FormArray>this.itemForm.get('flpa')).push(new FormControl(elem));
      });
        delete item.flpa;
	 this.item.fpa.forEach(elem => {
          (<FormArray>this.itemForm.get('fpa')).push(new FormControl(elem));
      });
        delete item.fpa;
     this.itemForm.patchValue(item);

  }
  
  setAssociations(){
    this.associations = [
		];
		
		this.childAssociations = this.associations.filter(association => {
			return (association.isParent);
		});

		this.parentAssociations = this.associations.filter(association => {
			return (!association.isParent);
		});
	}
	
	onSubmit() {
		let t1 = this.itemForm.getRawValue();
	     t1.file=t1.fileFileSource;
	     delete t1.fileFileSource;
		super.onSubmit(t1);
		
	}
}

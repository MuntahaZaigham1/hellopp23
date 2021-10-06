import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { T4Service } from '../t-4.service';
import { IT4 } from '../it-4';

import { BaseDetailsComponent, FieldType, PickerDialogService } from 'src/app/common/shared';
import { ErrorService } from 'src/app/core/services/error.service';


@Component({
  selector: 'app-t-4-details',
  templateUrl: './t-4-details.component.html',
  styleUrls: ['./t-4-details.component.scss']
})
export class T4DetailsComponent extends BaseDetailsComponent<IT4> implements OnInit {
	title = 'T4';
	parentUrl = 't4';
	constructor(
		public formBuilder: FormBuilder,
		public router: Router,
		public route: ActivatedRoute,
		public dialog: MatDialog,
		public t4Service: T4Service,
		public pickerDialogService: PickerDialogService,
		public errorService: ErrorService,
	) {
		super(formBuilder, router, route, dialog, pickerDialogService, t4Service, errorService);
  }

	ngOnInit() {
		this.entityName = 'T4';
		this.setAssociations();
		super.ngOnInit();
		this.setForm();
    	this.getItem();
	}
  
  setForm(){
    this.itemForm = this.formBuilder.group({
      id: [{value: '', disabled: true}, Validators.required],
	  score: new FormArray([]),
      
    });
    
    this.fields = [
        {
		  name: 'score',
		  label: 'score',
		  isRequired: false,
		  isAutoGenerated: false,
                 type : FieldType.Array,
                 subtype : FieldType.Number,
	    },
      ];
      
  }
  
  onItemFetched(item: IT4) {
    this.item = item;
	 this.item.score.forEach(elem => {
          (<FormArray>this.itemForm.get('score')).push(new FormControl(elem));
      });
        delete item.score;
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
		let t4 = this.itemForm.getRawValue();
		super.onSubmit(t4);
		
	}
}
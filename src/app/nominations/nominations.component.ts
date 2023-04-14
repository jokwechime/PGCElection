import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {

  nominationForm: FormGroup;
  _residentSubscribers: any;
  allSubscribers: any;
  _subscriber: any;

  constructor(private alert: ToastrService, private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<NominationsComponent>) {
     
    this.nominationForm = this._fb.group({
      subscriberName: '',
      emailAddress: '',
      electionYear: new Date().getFullYear(),
      phoneNumber: '',
      president: '',
      vicePresident: '',
      secretary: '',
      socialSecretary:'',
      treasurer: '',
      subscriberID: 0
      
    })
  }

  ngOnInit(): void {
    this.getAllSubscribers()
    this.getResidentSubscribers()
  }


  onFormSubmit() {
    if (this.nominationForm.valid) {
      this._empService.addNomination(this.nominationForm.value).subscribe({
        next: (val: any) => {
          this.alert.success('Subscriber successfully made nominations', 'Nomination successful')
          this._dialogRef.close()

        },
        error: (err: any) => {
          console.error(err);
        }


      })
      console.log(this.nominationForm.value)
    }
  }

  closeForm() {
    this._dialogRef.close()

  }

  getAllSubscribers() {
    this._empService.getSubscribers().subscribe({
      next: (res) => {
        this.allSubscribers = (res);
                
      }, 
      error: console.log,
    })
  }

  getResidentSubscribers() {
    this._empService.getAllSubscriberResidents().subscribe({
      next: (res) => {
        this._residentSubscribers = (res);
                
      }, 
      error: console.log,
    })
  }


  checkNomination(value:any) {
  
    //let subscode = this.nominationForm.get("subscriberID")?.value;
    // Check if Subscriber has made previous nomination
    //
    let has_nominated = false;

    this._empService.getHasNominated(value).subscribe(res => {
      let custdata: any;
      custdata = res;
      if (custdata != null) {
        has_nominated = true;
        this.alert.warning('Subscriber already made nomination', 'No multiple nomination')
        this._dialogRef.close();

        }
      }) 

    this._empService.getSingleSubscriber(value).subscribe(res => {
    let subscribedata: any;
    subscribedata = res;
    console.log(subscribedata);
    if (subscribedata != null) {
        this.nominationForm.get("subscriberName")?.setValue(subscribedata.subscriberName);
        
      }
    }) 

  }
    
 
}
  



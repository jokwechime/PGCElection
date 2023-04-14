import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-votings',
  templateUrl: './votings.component.html',
  styleUrls: ['./votings.component.scss']
})
export class VotingsComponent implements OnInit {

  votingForm: FormGroup;
  _presidentNominees: any;
  _vpresidentNominees: any;
  _secNominees: any;
  _treasurerNominees: any;
  _socsectNominees: any;
  allSubscribers: any;
  _subscriber: any;

  constructor(private alert: ToastrService, private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<VotingsComponent>) {
     
    this.votingForm = this._fb.group({
      subscriberName: '',
      emailAddress: '',
      electionYear: new Date().getFullYear(),
      phoneNumber: '',
      president: '',
      vicePresident: '',
      secretary: '',
      SocialSecretary:'',
      treasurer: '',
      subscriberID: 0
      
    })
  }

  ngOnInit(): void {
    this.getAllSubscribers()
    this.getPresidentNominees()
    this.getVPresidentNominees()
    this.getSecretaryNominees()
    this.getTreasurerNominees()
    this.getSocSecretaryNominees()


  }


  onFormSubmit() {
    if (this.votingForm.valid) {
      this._empService.addVoting(this.votingForm.value).subscribe({
        next: (val: any) => {
          this.alert.success('Subscriber successfully voted', 'Voting successful')
          this._dialogRef.close()

        },
        error: (err: any) => {
          console.error(err);
        }


      })
      console.log(this.votingForm.value)
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

  getPresidentNominees() {
    this._empService.getAllNomineesbyPosition('President').subscribe({
      next: (res) => {
        this._presidentNominees = (res);
                
      }, 
      error: console.log,
    })
  }
  
  getVPresidentNominees() {
    this._empService.getAllNomineesbyPosition('Vice President').subscribe({
      next: (res) => {
        this._vpresidentNominees = (res);
                
      }, 
      error: console.log,
    })
  }

  getSecretaryNominees() {
    this._empService.getAllNomineesbyPosition('Secretary').subscribe({
      next: (res) => {
        this._secNominees = (res);
                
      }, 
      error: console.log,
    })
  }

  getTreasurerNominees() {
    this._empService.getAllNomineesbyPosition('Treasurer').subscribe({
      next: (res) => {
        this._treasurerNominees = (res);
                
      }, 
      error: console.log,
    })
  }

  getSocSecretaryNominees() {
    this._empService.getAllNomineesbyPosition('Social Secretary').subscribe({
      next: (res) => {
        this._socsectNominees = (res);
                
      }, 
      error: console.log,
    })
  }


  checkVoting(value:any) {
  
    //let subscode = this.votingForm.get("subscriberID")?.value;
    // Check if Subscriber has made previous voting
    //
    let has_nominated = false;

    this._empService.getHasVoted(value).subscribe(res => {
      let custdata: any;
      custdata = res;
      if (custdata != null) {
        has_nominated = true;
        this.alert.warning('Subscriber already voted', 'No multiple voting')
        this._dialogRef.close();

        }
      }) 

    this._empService.getSingleSubscriber(value).subscribe(res => {
    let subscribedata: any;
    subscribedata = res;
    console.log(subscribedata);
    if (subscribedata != null) {
        this.votingForm.get("subscriberName")?.setValue(subscribedata.subscriberName);
        
      }
    }) 

  }
    
 
}


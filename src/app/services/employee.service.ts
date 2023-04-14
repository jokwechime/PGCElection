import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { IntegerDataType } from 'sequelize';
//import { Nomination } from '../model/nomination';
//import { map, filter} from'rxjs.operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private _http: HttpClient) { }
  url = 'http://localhost:3000/nominations'

  

    addEmployee(data: any): Observable<any> {
      return this._http.post('http://localhost:3000/employees', data);
    }

    getEmployees(): Observable<any> {
      return this._http.get('http://localhost:3000/employees');
    }
    getSubscribers(): Observable<any> {
      //return this._http.get('http://localhost:3000/Subscribers?_sort=subscriberName&_order=desc');
      return this._http.get('http://localhost:8080/api/subscribers/getSubscribers');
    }

    getAllSubscriberResidents(): Observable<any> {
      //return this._http.get('http://localhost:3000/Subscribers?_sort=subscriberName&_order=desc');
      return this._http.get('http://localhost:8080/api/subscribers/getAllSubscriberResidents');
    }

    getSingleSubscriber(index:IntegerDataType): Observable<any> {
      return this._http.get('http://localhost:8080/api/subscribers/' + index);
      
    }

   
    addNomination(data: any): Observable<any> {
      //return this._http.post('http://localhost:3000/nominations', data);
      return this._http.post('http://localhost:8080/api/nominations/addNomination', data);
    }

    listNomination(): Observable<any> {
      //return this._http.get('http://localhost:3000/nominations');
      return this._http.get('http://localhost:8080/api/nominations/getNominations');

    }

    getNomination01(vsubscriber: string): Observable<any> {
      return this._http.get(`http://localhost:3000/nominations?subscriberName={vsubscriber}`);
    }

    getSingleNomination(index:IntegerDataType): Observable<any> {
      return this._http.get('http://localhost:8080/api/nominations/' + index);
      
    }

    getHasNominated(index:IntegerDataType): Observable<any> {
      return this._http.get('http://localhost:8080/api/nominations/getHasNominated/' + index);
      
    }
    
    getAllNomineesbyPosition(vposition:string): Observable<any> {
      return this._http.get('http://localhost:8080/api/votersLists/getAllNomineesbyPosition/' + vposition);
      
    }

    addVoting(data: any): Observable<any> {
      //return this._http.post('http://localhost:3000/nominations', data);
      return this._http.post('http://localhost:8080/api/votings/addVoting', data);
    }

    getHasVoted(index:IntegerDataType): Observable<any> {
      return this._http.get('http://localhost:8080/api/votings/getHasVoted/' + index);
      
    }
    



    
}

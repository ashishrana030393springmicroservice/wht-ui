import { Injectable } from '@angular/core';
import { UserEvent } from '../models/user-event';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
  datastore:{events: UserEvent[]} = { events: [
    {
      id:0,
      createAt: new Date(),
      when: new Date("2023-01-01"),
      description:"Eye checkup",
      title: "Dr. Karma wangchuk"
    },
    {
      id:0,
      createAt: new Date(),
      when: new Date("2023-03-01"),
      description:"Ear checkup",
      title: "Dr. Kamaldeep kaur"
    },
    {
      id:0,
      createAt: new Date(),
      when: new Date("2023-04-01"),
      description:"Mechanic",
      title: "Maintenance"
    },
    {
      id:0,
      createAt: new Date(),
      when: new Date("2023-05-01"),
      description:"Rent",
      title: "Landlord"
    },
    {
      id:0,
      createAt: new Date(),
      when: new Date("2023-06-01"),
      description:"visit bakery shop",
      title: "Visit Bakery"
    }
  ]}

  private selectDateBehaviour:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  readonly selectDateObs:Observable<any> = this.selectDateBehaviour.asObservable();

  private _events:BehaviorSubject<UserEvent[]> =  new BehaviorSubject<UserEvent[]> ([]);
  constructor(private http:HttpClient) {
    this._events.next(Object.assign({},this.datastore).events)
  }

  public get events():Observable<UserEvent[]>{
    return this._events.asObservable();
  }

  addEvent(event:UserEvent ){
    return new Promise((resolver, reject)=>{
      event.id = Math.random();
      this.datastore.events.push(event);
      this._events.next(Object.assign({},this.datastore).events)
      resolver(event);
    })
    
  }

  removeEvent(event:UserEvent){
    return new Promise((resolver,reject)=> {
      const index:number = this.datastore.events.findIndex((e)=>e.id == event.id);
    this.datastore.events.splice(index,1);
    this._events.next(Object.assign({},this.datastore).events);
    resolver(event)
    })
    
  }


  selectDate(date:any){
   
    this.selectDateBehaviour.next(date);
  }



}

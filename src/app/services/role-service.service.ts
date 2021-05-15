import { Injectable } from '@angular/core';
import {Role} from '../../data/Role';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  rols: Role[]=[];

  //פונקציה שמחזירה את רשימת התפקידים
  //על ידי קריאת שרת
  getRols(){
     // ספרייה לקריאות שרת
    // מכילה את כל הפונקציות של הקריאות הסטנדרטיות
    // מקבלת כפרמטר ראשון את כתובת הקריאה
    // מחזירה אובסרבל
    //חשובבבבב
    // יש להירשם אליו ע"י פונקציה subscribe
    // אחרת הקריאה לא תישלח בכלל
    return this.httpService.get<Role[]>('/assets/roles.json');
    //.subscribe(rols=> this.rols= rols);
    //return this.rols;
  }

  constructor(private httpService: HttpClient) { }
}

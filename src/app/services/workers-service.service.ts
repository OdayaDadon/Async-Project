import { Injectable } from '@angular/core';
import {Worker} from '../../data/Worker';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class WorkersServiceService {

  workers: Worker[]=[];

  //פונקציה שמחזירה את רשימת העובדים
  //על ידי קריאת שרת
  getWorkers(){
     // ספרייה לקריאות שרת
    // מכילה את כל הפונקציות של הקריאות הסטנדרטיות
    // מקבלת כפרמטר ראשון את כתובת הקריאה
    // מחזירה אובסרבל
    //חשובבבבב
    // יש להירשם אליו ע"י פונקציה subscribe
    // אחרת הקריאה לא תישלח בכלל
    return this.httpService.get<Worker[]>('/assets/workers.json');
    //.subscribe(workers=> this.workers= workers);
    //return this.workers;
  }

  constructor(private httpService: HttpClient) { }
}


/*
קריאת שרת - טוענת את רשימת העובדים מקובץ הגיסון
    שומרת את מה שחזר בתוך המערך של העובדים
    זה פשוט לא ישמור את מה שחזר מקריאת השרת, או לא יחזיר בכלל -subscribe תזכורת  - אנגולר לא פראייר, אם לא נכתוב 
*/

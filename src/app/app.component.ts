import { Component } from '@angular/core';
import { from } from 'rxjs';
//טעינת הסרביסים
import {WorkersServiceService} from './services/workers-service.service';
import {RoleServiceService} from './services/role-service.service';

//טעינת האינטרפייסים
import {Worker} from '../data/Worker';
import {Role} from '../data/Role';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  //מערכים לעובדים ותפקידים
  workers: Array<Worker>= [];
  rols: Array<Role>= [];

  showWorkers= false;
  showRols= false;

  constructor(private httpService: HttpClient, private WorkersServiceService: WorkersServiceService, private RoleServiceService: RoleServiceService){
     

    this.WorkersServiceService.getWorkers()
    // רישום לאובסרבל
    // ניתן לשלוח לו כפרמטר רק פונקציה אחת שתשמש בתור פונקציית next
    // תופעל כאשר יגיעו ערכים, ותקבל כפרמטר את הערכים שהגיעו
    .subscribe((workers) => this.workers = workers);
    
    console.log(this.workers);


    this.RoleServiceService.getRols()
    // רישום לאובסרבל
    // ניתן לשלוח לו כפרמטר רק פונקציה אחת שתשמש בתור פונקציית next
    // תופעל כאשר יגיעו ערכים, ותקבל כפרמטר את הערכים שהגיעו
    .subscribe((rols) => this.rols = rols);
    
    console.log(this.rols);
  }
 

  //מערך שישמור לי את כל המשכורות הממוצעות לכל תפקיד 
  arrayAvg: Array<number>=[];
  //פונקציה שמחשבת את ממוצע השכר לתפקיד ודוחפת למערך שלעיל
  avgForRols(){
    //מעבר על כל התפקידים הקיימים
    this.rols.forEach((role1)=>{
      //חישוב מספר העובדים למשרה זו
      let countOfWorkersInThisRole=0;
      //סכום המשכורות של כל העובדים בתפקיד זה
      let sum=0;
      //מעבר על כל העובדים שעובדים בתפקיד זה
      this.workers.forEach(w=>{
        if(w.roleId===role1.roleId){
          countOfWorkersInThisRole++;
          sum+= w.wage;
        }
      })
      //הוספה למערך של השכר הממוצע לכל תפקיד את ממוצע השכר הנוכחי שחושב
      this.arrayAvg.push(sum/countOfWorkersInThisRole);
    })
    
  }



  
  //משתנים ששומרים את ערכי הטקסט שעל כפתורי ההצגה או ההסתרה של העובדים/התפקידים
  textOfB1="הצג עובדים";
  textOfB2="הצג תפקידים";

  //פונקציה שמשנה את ערך המשתנה ששומר האם להציג את העובדים כרגע או לא
  setShowWorkers(){
    if(this.showWorkers==true)
    {  
        this.showWorkers=false;
        this.textOfB1="הצג עובדים";
    }
    else
    {
      this.showWorkers=true;
      this.textOfB1="הסתר עובדים";
    }
  }

  //פונקציה שמשנה את ערך המשתנה ששומר האם להציג את התפקידים כרגע או לא
  setShowRols(){
    if(this.showRols==true)
    {
      this.showRols=false;
      this.textOfB2="הצג תפקידים";
    }
    else
    {
      this.showRols=true;
      this.textOfB2="הסתר תפקידים";
    }
  }

}

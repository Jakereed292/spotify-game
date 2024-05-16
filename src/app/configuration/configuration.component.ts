import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  name = '';
  genre = '';
  questions!:number

  userarray: Config[] = [];
  istextblank = false;
  user: Config={
    name: '',
    genre: 'Hip Hop',
    questions: 5,
    score: 0
  }
  constructor() { }

  ngOnInit(): void {
    let a:Config = JSON.parse(localStorage.getItem('user') as string);
    if(a!==null)
      this.displayprevious()
    else
      this.firstinstance()
  }

  onKey()
  {
    //this.user.name = value;
    if(this.user.name.length<1)
      {
        //console.log("Checking: "+value.length)
        this.istextblank=true;
      }
      if(this.user.name.length>=1)
        {
          //console.log("Checking: "+value.length)
          this.istextblank=false;
        }
  }
  firstinstance()
  {
    console.log("In firstinstance()")
    this.user.name = '';
    this.user.genre = "Hip Hop";
    this.user.questions = 5;
  }
  displayprevious()
  {
    console.log("In displayprevious()")
    let a:Config = JSON.parse(localStorage.getItem('user') as string);
    this.user.genre=a.genre;
    this.user.questions=a.questions;
    this.user.name=a.name;
  }

  saveFunc()
  {
    console.log("In saveFUnc()")
    let a:Config[] = JSON.parse(localStorage.getItem('userarray') as string);
    if(a===null)
      {
        console.log("Here in savefunc(), enter nulled if statement")
        this.userarray.push(this.user);
        localStorage.setItem("userarray",JSON.stringify(this.userarray));
        localStorage.setItem("user",JSON.stringify(this.user));
        console.log("After updating: Items in userarray: "+ JSON.stringify(this.userarray))
        console.log("Curent User "+ JSON.stringify(this.userarray))
      }

      else
      {
        console.log("Here in savefunc(), enter else statement")
        let a:Config[] = JSON.parse(localStorage.getItem('userarray') as string);
        this.userarray=a;
        console.log("Items in userarray before update: "+ JSON.stringify(this.userarray))
        if(this.userarray.some((user)=>{return user.name===this.user.name}))
          {
            let temparray:Config[] = this.userarray.filter((user)=>{return user.name===this.user.name})
            let index = this.userarray.indexOf(temparray[0]);
            // if(index > -1) 
            //   { 
            //     this.userarray.splice(index, 1); 
            //   }
            this.userarray[index].genre=this.user.genre;
            this.userarray[index].questions=this.user.questions;
            localStorage.setItem("userarray",JSON.stringify(this.userarray));
            localStorage.setItem("user",JSON.stringify(this.user));
            console.log("After updating: Items in userarray: "+ JSON.stringify(this.userarray))
            console.log("Curent User "+ JSON.stringify(this.user))
          }
        else
        {
          this.userarray.push(this.user);
          localStorage.setItem("userarray",JSON.stringify(this.userarray));
          localStorage.setItem("user",JSON.stringify(this.user));
          console.log("After updating: Items in userarray: "+ JSON.stringify(this.userarray))
          console.log("Curent User "+ JSON.stringify(this.user))
        }
      }

    


  }
  


  
}

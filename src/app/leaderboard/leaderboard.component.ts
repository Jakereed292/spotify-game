import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  userarray:Config[] = [];
  resultarray:Config[]=[]
  selectedgenre: string='Hip Hop'
  selectedquestion: number=5

  fortesting:Config[] = [{name:"Bob",genre:"Country",questions:10,score:15},{name:"Bobby",genre:"Hip Hop",questions:10,score:20},{name:"Ricky",genre:"Hip Hop",questions:10,score:5}, {name:"Jimmy",genre:"Hip Hop",questions:5,score:50}]
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("resultarray",JSON.stringify(this.fortesting));
    // let a:Config[] = JSON.parse(localStorage.getItem('resultarray') as string);
    // if(a!==null)
    //  {
    //   this.userarray = a;
    //  }
     this.displayResults();
  }


  
 displayResults()
 {
  console.log("In displayResults()")
  //Migt be redundant
  let a:Config[] = JSON.parse(localStorage.getItem('resultarray') as string);
  console.log("In displayResults() array: "+JSON.stringify(a));
  if(a!==null)
   {
    console.log("In displayResults(): In null block")
    this.userarray = a;
   }
   else
    this.userarray=[];
  //
  console.log("In displayResults(): CHecking selgenre: ", this.selectedgenre ==="Hip Hop")
  console.log("In displayResults(): CHecking selques: ", this.selectedquestion===10)
  console.log("In displayResults(): CHecking Both Statements: ", this.selectedgenre==="Hip Hop" && this.selectedquestion===10)
  
  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Hip Hop"});
    }
  
  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===10)
    {
      console.log("In displayResults(): in Hip Hop && selectedquestion=10 block")
      console.log("In displayResults(): in Hip Hop && selectedquestion=10 block array: "+JSON.stringify(this.resultarray))
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Hip Hop"});
    }

  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Hip Hop"});
    }


  if(this.selectedgenre==="Country" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Country"});
    }
  
  if(this.selectedgenre==="Country" && this.selectedquestion===10)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Country"});
    }

  if(this.selectedgenre==="Country" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Country"});
    }

  if(this.selectedgenre==="EDM" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="EDM"});
    }
  
  if(this.selectedgenre==="EDM" && this.selectedquestion===10)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="EDM"});
    }

  if(this.selectedgenre==="EDM" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="EDM"});
    }

  

    
  
 }
  

}

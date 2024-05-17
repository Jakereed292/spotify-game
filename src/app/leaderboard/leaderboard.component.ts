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


  constructor() { }

  ngOnInit(): void {
     this.displayResults();
  }


  
 displayResults()
 {
  console.log("In displayResults()")
  
  let a:Config[] = JSON.parse(localStorage.getItem('resultarray') as string);
  console.log("In displayResults() array: "+JSON.stringify(a));
  if(a!==null)
   {
    console.log("In displayResults(): In null block")
    this.userarray = a;
   }
   else
    this.userarray=[];
  
  console.log("In displayResults(): CHecking selgenre: ", this.selectedgenre ==="Hip Hop")
  console.log("In displayResults(): CHecking selques: ", this.selectedquestion===10)
  console.log("In displayResults(): CHecking Both Statements: ", this.selectedgenre==="Hip Hop" && this.selectedquestion===10)
  
  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Hip Hop"});
       this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }
  
  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===10)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Hip Hop"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }

  if(this.selectedgenre==="Hip Hop" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Hip Hop"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }


  if(this.selectedgenre==="Country" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Country"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }
  
  if(this.selectedgenre==="Country" && this.selectedquestion===10)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Country"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }

  if(this.selectedgenre==="Country" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Country"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }

  if(this.selectedgenre==="EDM" && this.selectedquestion===5)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="EDM"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }
  
  if(this.selectedgenre==="EDM" && this.selectedquestion===10)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="EDM"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }

  if(this.selectedgenre==="EDM" && this.selectedquestion===15)
    {
      this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="EDM"});
      this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
    }


    if(this.selectedgenre==="R&B" && this.selectedquestion===5)
      {
        this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="R&B"});
        this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
      }
    
    if(this.selectedgenre==="R&B" && this.selectedquestion===10)
      {
        this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="R&B"});
        this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
      }
  
    if(this.selectedgenre==="R&B" && this.selectedquestion===15)
      {
        this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="R&B"});
        this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
      }

  
      

      if(this.selectedgenre==="Pop" && this.selectedquestion===5)
        {
          this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Pop"});
          this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
        }
      
      if(this.selectedgenre==="Pop" && this.selectedquestion===10)
        {
          this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Pop"});
          this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
        }
    
      if(this.selectedgenre==="Pop" && this.selectedquestion===15)
        {
          this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Pop"});
          this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
        }




        if(this.selectedgenre==="Rock" && this.selectedquestion===5)
          {
            this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Rock"});
            this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
          }
        
        if(this.selectedgenre==="Rock" && this.selectedquestion===10)
          {
            this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Rock"});
            this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
          }
      
        if(this.selectedgenre==="Rock" && this.selectedquestion===15)
          {
            this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Rock"});
            this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
          }




          if(this.selectedgenre==="Latin" && this.selectedquestion===5)
            {
              this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Latin"});
              this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
            }
          
          if(this.selectedgenre==="Latin" && this.selectedquestion===10)
            {
              this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Latin"});
              this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
            }
        
          if(this.selectedgenre==="Latin" && this.selectedquestion===15)
            {
              this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Latin"});
              this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
            }


            if(this.selectedgenre==="K-Pop" && this.selectedquestion===5)
              {
                this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="K-Pop"});
                this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
              }
            
            if(this.selectedgenre==="K-Pop" && this.selectedquestion===10)
              {
                this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="K-Pop"});
                this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
              }
          
            if(this.selectedgenre==="K-Pop" && this.selectedquestion===15)
              {
                this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="K-Pop"});
                this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
              }
    
          
              if(this.selectedgenre==="Jazz" && this.selectedquestion===5)
                {
                  this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Jazz"});
                  this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                }
              
              if(this.selectedgenre==="Jazz" && this.selectedquestion===10)
                {
                  this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Jazz"});
                  this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                }
            
              if(this.selectedgenre==="Jazz" && this.selectedquestion===15)
                {
                  this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Jazz"});
                  this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                }



                if(this.selectedgenre==="Indie/Alternative" && this.selectedquestion===5)
                  {
                    this.resultarray=this.userarray.filter((user)=>{return user.questions===5 && user.genre==="Indie/Alternative"});
                    this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                  }
                
                if(this.selectedgenre==="Indie/Alternative" && this.selectedquestion===10)
                  {
                    this.resultarray=this.userarray.filter((user)=>{return user.questions===10 && user.genre==="Indie/Alternative"});
                    this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                  }
              
                if(this.selectedgenre==="Indie/Alternative" && this.selectedquestion===15)
                  {
                    this.resultarray=this.userarray.filter((user)=>{return user.questions===15 && user.genre==="Indie/Alternative"});
                    this.resultarray.sort((user1,user2)=>(user2.score-user1.score))
                  }
          
 }
  

}

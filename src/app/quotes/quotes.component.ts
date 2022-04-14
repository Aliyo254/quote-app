import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  title='Helo There ,Plese Rate This Quotes';
  quotes:Quotes[]= [
    new Quotes (1,'Ali','Greatness','Greatness comes from within .','Alinu Ali', new Date(2022,4,13),0,0),
    new Quotes (2,'Gina','Possibility','It always seems imposible until it is done.','Nelsom Mandela',new Date(2022,3,29),0,0),
    new Quotes (3,'Stephen','Well-Done','Well-done is better than well-said .','Fraklin Roosevelt',new Date(2022,4,10),0,0),
    new Quotes (4,'Yvonne','Courage','Have courage to follow your heart and intuition .','Steve Jobs',new Date(2022,4,10),0,0),
    new Quotes (5,'Mureithi','Great person ','Great person attracts great peole','Johan Wolfgang',new Date(2022,4,11),0,0),
    new Quotes (6,'J.J MAULIN','INNOCENCE','Every Man is innocent Until Proven gulity.','PROF GEORGE ',new Date(2022,4,12),0,0)
  
];

get sortQuotes() {
  return this.quotes.sort((a, b) => {
    return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
  });
}

  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnChanges,Input,Output,EventEmitter} from '@angular/core';
@Component({
selector : 'akash-star',
templateUrl:'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']
}) 
export class StarComponent implements OnChanges {
   
  starWidth:number;
  @Input() rating : number;
   @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges():void{
           console.log('inside ngchange-' + this.rating);
        this.starWidth = this.rating * 86/5;
   }

   onClick():void{
       this.ratingClicked.emit('akashClcik');
   }
}
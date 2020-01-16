import { Component, OnInit, Input,OnChanges, SimpleChanges, ContentChild, ElementRef, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy } from '@angular/core';
//import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {
  @Input('srvElement') element:{type:string, name:string, content:string }
  @Input() name;
  @ContentChild('paraContent',{static:true}) paraContentValue :ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit has been called'); 
    console.log('P Content :'+ this.paraContentValue.nativeElement.textContent) 
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges has been called');
  }
  ngDoCheck(){
    console.log('ngDoCheck has been called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit has been called');
    console.log('P Content :'+ this.paraContentValue.nativeElement.textContent)
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked has been called');
  }
  
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked has been called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit has been called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy has been called');
  }
}

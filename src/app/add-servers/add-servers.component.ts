import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-servers',
  templateUrl: './add-servers.component.html',
  styleUrls: ['./add-servers.component.css']
})
export class AddServersComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('newServerContentLocalRef',{static:true}) newServerContent: ElementRef;

  onAddServer(newServerName:HTMLInputElement) {
    this.serverCreated.emit({serverName:newServerName.value,serverContent:this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(newServerName:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:newServerName.value,serverContent:this.newServerContent.nativeElement.value});
  }
  constructor() { }

  ngOnInit() {
  }

}

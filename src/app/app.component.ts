import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'Test Type',name:'Test Name',content:'Test Content'}];
 
  onServerAdded(serverData:{serverName: string,serverContent:string} ) {
     this.serverElements.push({
       type: 'Test Type',
       name: serverData.serverName,
       content: serverData.serverContent
     });
  }

  onBlueprintAdded(serverData:{serverName: string,serverContent:string}) {
    this.serverElements.push({
      type: 'Test Type',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}

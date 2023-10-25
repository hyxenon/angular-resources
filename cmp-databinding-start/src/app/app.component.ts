import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = []

  onServerClick(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      serverName: serverData.serverName,
      serverContent: serverData.serverContent,
      type: 'server'
    })
    
    console.log(this.serverElements);
    
    
  }

  onBlueprintClick(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      serverName: blueprintData.serverName,
      serverContent: blueprintData.serverContent,
      type: 'blueprint'
    })
  }
 
}

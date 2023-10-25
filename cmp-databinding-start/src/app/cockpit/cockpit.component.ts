import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() onServerCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() onBlueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    this.onServerCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onBlueprint(nameInput: HTMLInputElement){
    this.onBlueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

}

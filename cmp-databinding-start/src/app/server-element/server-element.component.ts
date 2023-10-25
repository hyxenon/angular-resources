import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input() element: { serverName: string, serverContent: string, type: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef
  constructor() { }
  @ViewChild('heading', {static: true}) header: ElementRef;
  ngOnInit(): void {
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    
  }

  ngAfterViewInit(): void {
    console.log('paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

}

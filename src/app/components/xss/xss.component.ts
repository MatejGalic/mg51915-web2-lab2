import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss'],
})
export class XssComponent implements OnInit {
  @ViewChild('textareaInjection') divElement: ElementRef;
  isVulnerable: boolean = false;

  textarea: string = '';
  htmltext: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  injectHtml() {
    let value = this.isVulnerable
      ? this.sanitizer.bypassSecurityTrustHtml(this.textarea)
      : this.textarea;
    this.htmltext = value;
  }
}

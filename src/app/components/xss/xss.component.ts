import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VulnerabilityService } from 'src/app/services/vulnerability.service';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss'],
})
export class XssComponent implements OnInit {
  textarea: string = '';
  htmltext: any;
  constructor(
    private sanitizer: DomSanitizer,
    private vulnService: VulnerabilityService
  ) {}

  ngOnInit(): void {}
  injectHtml() {
    let value = this.vulnService.vulnerable
      ? this.sanitizer.bypassSecurityTrustHtml(this.textarea)
      : this.textarea;
    this.htmltext = value;
  }
}

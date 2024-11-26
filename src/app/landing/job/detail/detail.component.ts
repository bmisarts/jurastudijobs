import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class JobDetailComponent {
  linkCopied: boolean = false;

  copyJobLink() {
    if(!this.linkCopied) {
      this.linkCopied = true;
      const link = ''+window.location;
      navigator.clipboard.writeText(link);
    }
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Logout', url: '/home', icon: 'lock-closed-outline' },
    { title: 'Lost Livestock', url: '/guest', icon: 'glasses-outline' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private cd: ChangeDetectorRef) {
    
  }

  refresh() {
    this.cd.detectChanges();
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('fadeText', { static: true }) fadeText:ElementRef;
  
  constructor(private animationCtrl: AnimationController) {
   
   }

  async ngOnInit() {
    
    const text = this.animationCtrl
    .create()
    .addElement(this.fadeText.nativeElement)
    .duration(2000)
    .easing('ease-out')
    .fromTo('opacity', 0, 1)
   .iterations(3)
   .direction('alternate')
   .fromTo('color', '#649173', '#45644f');

    await text.play();

  }

}

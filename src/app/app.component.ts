import { Component, ChangeDetectionStrategy, OnInit  } from '@angular/core'; 
declare var navigator;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
           alert('Using Cordova plugins with Angular 2. Cordova platform : '+navigator.platform);
        }
  }
}

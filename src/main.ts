import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


//to disable right click for whole application
/* document.oncontextmenu = function (event) {
  event.preventDefault();
}; */


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

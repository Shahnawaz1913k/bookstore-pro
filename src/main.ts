import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app';
//import { AppComponent } from './app/app;
//import { AuthInterceptor } from './app/auth-interceptor';
import { authInterceptor } from './app/auth-interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    // ✅ Provide HttpClient globally
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
}).catch(err => console.error(err));

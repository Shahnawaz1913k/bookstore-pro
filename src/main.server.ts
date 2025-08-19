import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import { authInterceptor } from './app/auth-interceptor';

const bootstrap = () => bootstrapApplication(AppComponent, {
  ...config,
  providers: [
    ...(config.providers ?? []),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
});

export default bootstrap;

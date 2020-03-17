import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private cookieValue: string;  

  private title = "DIY Event App"

  constructor(private cookieService: CookieService) {
    // this.oauthService.redirectUri = window.location.origin;
    // this.oauthService.clientId = '{client-id}';
    // this.oauthService.scope = 'openid profile email';
    // this.oauthService.issuer = 'https://dev-{dev-id}.oktapreview.com';
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // // Load Discovery Document and then try to login the user
    // this.oauthService.loadDiscoveryDocument().then(() => {
    //   this.oauthService.tryLogin();
    // });
  }

  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');
    console.log(this.cookieService.get('cookie-name'));
  }

}

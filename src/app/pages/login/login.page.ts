import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  public registerLogin: User = {};
  private loading: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this
  }

  async register() {
    await this
  }
}

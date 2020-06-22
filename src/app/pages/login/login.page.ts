import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router'
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


  constructor(private auth: AuthService, private loandingControler: LoadingController, private toastControll: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loandingControler.create({ message: 'Carregando... ' })
    return this.loading.present();
  }

  async login() {
    await this.presentLoading();
    try {
      await this.auth.login(this.userLogin);
      this.router.navigateByUrl('/sintomas')
    } catch (error) {
      this.presentToast(error.message)
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();
    try {
      await this.auth.register(this.registerLogin)
      // let login1 = prompt("Digite o seu e-mail")
      //let senha1 = prompt ("Digite sua senha: ")
    } catch (error) {
      this.presentToast(error.message)
    } finally {
      this.loading.dismiss();
    }
  }

  cardRegister() {
    let value = document.getElementById('register');
    value.classList.remove('hide');
    let value2 = document.getElementById('login');
    value2.classList.add('hide');

    let register = prompt("Digite seu e-mail: ");
    let senha = prompt("Digite sua senha: ")

  }

  async presentToast(message: string) {
    const toast = await this.toastControll.create({ message, duration: 5000 });
    toast.present();
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  constructor(private animationCtrl: AnimationController, public menuCtrl: MenuController) { }

  ionViewWillEnter(){ //DESACTIVA EL MENU LATERAL
    this.menuCtrl.enable(false);

  }
  ngOnInit() {
    //console.log('Nombre de usuario: ', this.nombreUsuario);

    this.avanzarDerecha();
  }
  public avanzarDerecha() { //ANIMACIÓN PARA EFECTO DE LETRAS HACIA LA DERECHA
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
      .fromTo('color', "blue", "red")
      .fromTo('opacity', '1', '0');

    animation.play();
  }
  public crecer() { //ANIMACIÓN PARA HACER CRECER LAS COSAS
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(2,2,2)')
      .fromTo("color", "green", "blue")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

}

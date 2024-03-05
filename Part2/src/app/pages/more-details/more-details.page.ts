import { Component, Input } from '@angular/core';
import {
  IonHeader,
  IonModal,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';
import { Video } from '../../data-contracts/video';
import { addIcons } from 'ionicons';
import { closeOutline, pauseCircleOutline, playOutline } from 'ionicons/icons';

@Component({
  selector: 'app-more-details',
  templateUrl: 'more-details.page.html',
  styleUrls: ['more-details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonModal, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons],
})
export class MoreDetailsPage {
  @Input() modal: IonModal = null!;

  @Input() video: Video = null!;

  constructor(){
    addIcons({
      closeOutline,
      playOutline,
      pauseCircleOutline
    })
  }

  public async closeModal() {
    await this.modal.dismiss();
  }
}
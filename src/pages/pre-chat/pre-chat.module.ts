import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreChatPage } from './pre-chat';

@NgModule({
  declarations: [
    PreChatPage,
  ],
  imports: [
    IonicPageModule.forChild(PreChatPage),
  ],
})
export class PreChatPageModule {}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { RippleModule } from 'primeng/ripple';
import { T1BasicosComponent } from './t1-basicos/t1-basicos.component';
import { T2FornecedorComponent } from './t2-fornecedor/t2-fornecedor.component';
import { T3DepositoComponent } from './t3-deposito/t3-deposito.component';
import { T4ObsAneComponent } from './t4-obs-ane/t4-obs-ane.component';
import { T5CadastroComponent } from './t5-cadastro/t5-cadastro.component';
import { T6FisConComponent } from './t6-fis-con/t6-fis-con.component';
import { T1C1Component } from './t1-basicos/t1-c1/t1-c1.component';
import { T1C2Component } from './t1-basicos/t1-c2/t1-c2.component';
import { T1C3Component } from './t1-basicos/t1-c3/t1-c3.component';
import { T1C4Component } from './t1-basicos/t1-c4/t1-c4.component';
import { T5C1Component } from './t5-cadastro/t5-c1/t5-c1.component';
import { T5C2Component } from './t5-cadastro/t5-c2/t5-c2.component';
import { T5C3Component } from './t5-cadastro/t5-c3/t5-c3.component';
import { T6C1Component } from './t6-fis-con/t6-c1/t6-c1.component';
import { T6C2Component } from './t6-fis-con/t6-c2/t6-c2.component';
import { T6C3Component } from './t6-fis-con/t6-c3/t6-c3.component';
import { T6C4Component } from './t6-fis-con/t6-c4/t6-c4.component';

export const HttpLoaderFactory = (httpClient: HttpClient) =>
  new TranslateHttpLoader(httpClient, 'assets/i18n/');

@NgModule({
  declarations: [
    AppComponent,
    T1BasicosComponent,
    T2FornecedorComponent,
    T3DepositoComponent,
    T4ObsAneComponent,
    T5CadastroComponent,
    T6FisConComponent,
    T1C1Component,
    T1C2Component,
    T1C3Component,
    T1C4Component,
    T5C1Component,
    T5C2Component,
    T5C3Component,
    T6C1Component,
    T6C2Component,
    T6C3Component,
    T6C4Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
    ProgressSpinnerModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    InputNumberModule,
    InputMaskModule,
    InputTextareaModule,
    CardModule,
    PanelModule,
    MenuModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    InputSwitchModule,
    EditorModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

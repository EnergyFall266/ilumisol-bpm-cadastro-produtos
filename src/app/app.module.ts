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
import { ToastModule } from 'primeng/toast';
import { T1BasicosComponent } from './t1-basicos/t1-basicos.component';
import { T2FornecedorComponent } from './t2-fornecedor/t2-fornecedor.component';
import { T3DepositoComponent } from './t3-deposito/t3-deposito.component';
import { T3C1Component } from './t3-deposito/t3-c1/t3-c1.component';
import { T3C2Component } from './t3-deposito/t3-c2/t3-c2.component';
import { T3C3Component } from './t3-deposito/t3-c3/t3-c3.component';
import { T3C4Component } from './t3-deposito/t3-c4/t3-c4.component';
import { T5CadastroComponent } from './t5-cadastro/t5-cadastro.component';
import { T5C1Component } from './t5-cadastro/t5-c1/t5-c1.component';
import { T5C1C1MascaraComponent } from './t5-cadastro/t5-c1/t5-c1-c1-mascara/t5-c1-c1-mascara.component';
import { T5C2Component } from './t5-cadastro/t5-c2/t5-c2.component';
import { T5C2C1GerencialComponent } from './t5-cadastro/t5-c2/t5-c2-c1-gerencial/t5-c2-c1-gerencial.component';
import { T5C2C2Medida2Component } from './t5-cadastro/t5-c2/t5-c2-c2-medida2/t5-c2-c2-medida2.component';
import { T5C2C3Medida3Component } from './t5-cadastro/t5-c2/t5-c2-c3-medida3/t5-c2-c3-medida3.component';
import { T5C3Component } from './t5-cadastro/t5-c3/t5-c3.component';
import { T5C3C1PesosComponent } from './t5-cadastro/t5-c3/t5-c3-c1-pesos/t5-c3-c1-pesos.component';
import { T5C3C2AnexoComponent } from './t5-cadastro/t5-c3/t5-c3-c2-anexo/t5-c3-c2-anexo.component';
import { T6FisConComponent } from './t6-fis-con/t6-fis-con.component';
import { T6C1Component } from './t6-fis-con/t6-c1/t6-c1.component';
import { T6C1C1TipoComponent } from './t6-fis-con/t6-c1/t6-c1-c1-tipo/t6-c1-c1-tipo.component';
import { T6C1C2IcmsComponent } from './t6-fis-con/t6-c1/t6-c1-c2-icms/t6-c1-c2-icms.component';
import { T6C1C3SubstituicaoComponent } from './t6-fis-con/t6-c1/t6-c1-c3-substituicao/t6-c1-c3-substituicao.component';
import { T6C2Component } from './t6-fis-con/t6-c2/t6-c2.component';
import { T6C2C1PisvnComponent } from './t6-fis-con/t6-c2/t6-c2-c1-pisvn/t6-c2-c1-pisvn.component';
import { T6C2C2CofvnComponent } from './t6-fis-con/t6-c2/t6-c2-c2-cofvn/t6-c2-c2-cofvn.component';
import { T6C2C3EnquaComponent } from './t6-fis-con/t6-c2/t6-c2-c3-enqua/t6-c2-c3-enqua.component';
import { T6C2C4ComprasComponent } from './t6-fis-con/t6-c2/t6-c2-c4-compras/t6-c2-c4-compras.component';
import { T6C3Component } from './t6-fis-con/t6-c3/t6-c3.component';
import { T6C3C1EnquaComponent } from './t6-fis-con/t6-c3/t6-c3-c1-enqua/t6-c3-c1-enqua.component';
import { T6C3C2MotivComponent } from './t6-fis-con/t6-c3/t6-c3-c2-motiv/t6-c3-c2-motiv.component';
import { T6C3C3AnpComponent } from './t6-fis-con/t6-c3/t6-c3-c3-anp/t6-c3-c3-anp.component';
import { T6C4Component } from './t6-fis-con/t6-c4/t6-c4.component';
import { T6C4C1ObsComponent } from './t6-fis-con/t6-c4/t6-c4-c1-obs/t6-c4-c1-obs.component';
import { T6C4C2AneComponent } from './t6-fis-con/t6-c4/t6-c4-c2-ane/t6-c4-c2-ane.component';
import { T1C1MarcaComponent } from './t1-basicos/t1-c1-marca/t1-c1-marca.component';
import { T1C2SubstitutoComponent } from './t1-basicos/t1-c2-substituto/t1-c2-substituto.component';
import { T1C3ClassificacaoComponent } from './t1-basicos/t1-c3-classificacao/t1-c3-classificacao.component';
import { T1C4OrigemComponent } from './t1-basicos/t1-c4-origem/t1-c4-origem.component';
import { T1C5FamiliaComponent } from './t1-basicos/t1-c5-familia/t1-c5-familia.component';
import { T1C6UnidadeComponent } from './t1-basicos/t1-c6-unidade/t1-c6-unidade.component';
import { T1C7MercadoriaComponent } from './t1-basicos/t1-c7-mercadoria/t1-c7-mercadoria.component';
import { T1C8AgrComercialComponent } from './t1-basicos/t1-c8-agr-comercial/t1-c8-agr-comercial.component';
import { T1C9AgrEstoqueComponent } from './t1-basicos/t1-c9-agr-estoque/t1-c9-agr-estoque.component';
import { T1C10AgrCustoComponent } from './t1-basicos/t1-c10-agr-custo/t1-c10-agr-custo.component';
import { T1C11MultinivelComponent } from './t1-basicos/t1-c11-multinivel/t1-c11-multinivel.component';

export const HttpLoaderFactory = (httpClient: HttpClient) =>
  new TranslateHttpLoader(httpClient, 'assets/i18n/');

@NgModule({
  declarations: [
    AppComponent,
    T1BasicosComponent,
    T2FornecedorComponent,
    T3DepositoComponent,
    T3C1Component,
    T3C2Component,
    T3C3Component,
    T3C4Component,
    T5CadastroComponent,
    T5C1Component,
    T5C1C1MascaraComponent,
    T5C2Component,
    T5C2C1GerencialComponent,
    T5C2C2Medida2Component,
    T5C2C3Medida3Component,
    T5C3Component,
    T5C3C1PesosComponent,
    T5C3C2AnexoComponent,
    T6FisConComponent,
    T6C1Component,
    T6C1C1TipoComponent,
    T6C1C2IcmsComponent,
    T6C1C3SubstituicaoComponent,
    T6C2Component,
    T6C2C1PisvnComponent,
    T6C2C2CofvnComponent,
    T6C2C3EnquaComponent,
    T6C2C4ComprasComponent,
    T6C3Component,
    T6C3C1EnquaComponent,
    T6C3C2MotivComponent,
    T6C3C3AnpComponent,
    T6C4Component,
    T6C4C1ObsComponent,
    T6C4C2AneComponent,
    T1C1MarcaComponent,
    T1C2SubstitutoComponent,
    T1C3ClassificacaoComponent,
    T1C4OrigemComponent,
    T1C5FamiliaComponent,
    T1C6UnidadeComponent,
    T1C7MercadoriaComponent,
    T1C8AgrComercialComponent,
    T1C9AgrEstoqueComponent,
    T1C10AgrCustoComponent,
    T1C11MultinivelComponent,
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
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

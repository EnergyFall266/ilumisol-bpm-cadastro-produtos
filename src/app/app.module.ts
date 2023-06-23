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
import { T6FisConComponent } from './t6-fis-con/t6-fis-con.component';
import { T6C4Component } from './t6-fis-con/t6-c4/t6-c4.component';
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
import { T5C1MascaraComponent } from './t5-cadastro/t5-c1-mascara/t5-c1-mascara.component';
import { T5C2Medida2Component } from './t5-cadastro/t5-c2-medida2/t5-c2-medida2.component';
import { T5C3Medida3Component } from './t5-cadastro/t5-c3-medida3/t5-c3-medida3.component';
import { T5C4Conversao2Component } from './t5-cadastro/t5-c4-conversao2/t5-c4-conversao2.component';
import { T5C5Conversao3Component } from './t5-cadastro/t5-c5-conversao3/t5-c5-conversao3.component';
import { T5C6AnexoComponent } from './t5-cadastro/t5-c6-anexo/t5-c6-anexo.component';
import { T6C1ImpostosComponent } from './t6-fis-con/t6-c1-impostos/t6-c1-impostos.component';
import { T6C2IcmsEspecialComponent } from './t6-fis-con/t6-c2-icms-especial/t6-c2-icms-especial.component';
import { T6C3ReducaoIcmsComponent } from './t6-fis-con/t6-c3-reducao-icms/t6-c3-reducao-icms.component';
import { T6C4IcmsSubstituidoComponent } from './t6-fis-con/t6-c4-icms-substituido/t6-c4-icms-substituido.component';
import { T6C5SubstituicaoCofComponent } from './t6-fis-con/t6-c5-substituicao-cof/t6-c5-substituicao-cof.component';
import { T6C6SubstituicaoPisComponent } from './t6-fis-con/t6-c6-substituicao-pis/t6-c6-substituicao-pis.component';
import { T6C9EnquadramentoComponent } from './t6-fis-con/t6-c9-enquadramento/t6-c9-enquadramento.component';
import { T6C10SituPisComprasComponent } from './t6-fis-con/t6-c10-situ-pis-compras/t6-c10-situ-pis-compras.component';
import { T6C11SituCofComprasComponent } from './t6-fis-con/t6-c11-situ-cof-compras/t6-c11-situ-cof-compras.component';
import { T6C7SituPisVendasComponent } from './t6-fis-con/t6-c7-situ-pis-vendas/t6-c7-situ-pis-vendas.component';
import { T6C8SituCofVendasComponent } from './t6-fis-con/t6-c8-situ-cof-vendas/t6-c8-situ-cof-vendas.component';
import { T6C12EnquadramentoEspeComponent } from './t6-fis-con/t6-c12-enquadramento-espe/t6-c12-enquadramento-espe.component';
import { T6C13MotivoComponent } from './t6-fis-con/t6-c13-motivo/t6-c13-motivo.component';

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
    T6FisConComponent,
    T6C4Component,
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
    T5C1MascaraComponent,
    T5C2Medida2Component,
    T5C3Medida3Component,
    T5C4Conversao2Component,
    T5C5Conversao3Component,
    T5C6AnexoComponent,
    T6C1ImpostosComponent,
    T6C2IcmsEspecialComponent,
    T6C3ReducaoIcmsComponent,
    T6C4IcmsSubstituidoComponent,
    T6C5SubstituicaoCofComponent,
    T6C6SubstituicaoPisComponent,
    T6C9EnquadramentoComponent,
    T6C10SituPisComprasComponent,
    T6C11SituCofComprasComponent,
    T6C7SituPisVendasComponent,
    T6C8SituCofVendasComponent,
    T6C12EnquadramentoEspeComponent,
    T6C13MotivoComponent,
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

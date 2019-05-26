import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterKeyCloakApplicationSharedLibsModule, JhipsterKeyCloakApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterKeyCloakApplicationSharedLibsModule, JhipsterKeyCloakApplicationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterKeyCloakApplicationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterKeyCloakApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterKeyCloakApplicationSharedModule
    };
  }
}

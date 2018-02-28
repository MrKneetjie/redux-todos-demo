import { NgModule } from "@angular/core";
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";

import { rootReducer, STORE_INITIAL_STATE } from "./store.conf";
import { AppState } from "./store.types";

@NgModule({
  imports: [
    NgReduxModule,
  ],
})
export class StoreModule {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private devToolsExtension: DevToolsExtension
  ) {
    ngRedux.configureStore(rootReducer, STORE_INITIAL_STATE, [], [devToolsExtension.enhancer()]);
  }
}

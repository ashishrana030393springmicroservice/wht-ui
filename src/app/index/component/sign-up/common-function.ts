import { SignupWidgetService } from "../../service/signup-widget.service";

export class CommonFunction {
  constructor(){}
  isRefreshing: boolean = false;
  load() {
    console.log('loading data...');
  }

  refresh() {
    this.isRefreshing = true;
    console.log("refreshing")
  }
}

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRouters } from "./layout-router";

@NgModule({
    imports:[RouterModule.forChild(LayoutRouters)],
    exports:[RouterModule]
})
export class LayoutModule{}
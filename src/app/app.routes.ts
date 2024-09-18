import { Routes } from '@angular/router';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { DirectiveStructuralComponent } from './component/directive-structural/directive-structural.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './control-statemnt/if-else/if-else.component';

export const routes: Routes = [
    {
        path:'Add-Employee',
        component:AddemployeeComponent
    },

    {
        path:'emp-list',
        component:EmployeelistComponent

    },
    {
        path:'direc-struc',
        component:DirectiveStructuralComponent
    },
    {
        path:'data-bind',
        component:DatabindingComponent
    },
    {
        path:'attri-direc',
        component:AttributeDirectiveComponent
    },
    {
        path:'if',
        component:IfElseComponent
    }

];

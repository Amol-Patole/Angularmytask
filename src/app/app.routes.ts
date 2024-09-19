import { Routes } from '@angular/router';
import { AddemployeeComponent } from './component/addemployee/addemployee.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { DirectiveStructuralComponent } from './component/directive-structural/directive-structural.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './control-statemnt/if-else/if-else.component';
import { PipeComponent } from './control-statemnt/pipe/pipe.component';
import { TemplateComponent } from './component/from/template/template.component';
import { ReacticeFormComponent } from './component/from/reactice-form/reactice-form.component';
import { GetApiComponent } from './component/get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },

    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'',
        component:LayoutComponent,
        children:[

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
            },
            {
                path:'pipe',
                component:PipeComponent
            },
        
            {
                path:'form',
                component:TemplateComponent
            },
            {
                path:'r-form',
                component:ReacticeFormComponent
            },
            {
                path:'get-api',
                component:GetApiComponent
            },
            {
                path:'post-api',
                component:PostApiComponent
            }
        

        ]
    },

    

];

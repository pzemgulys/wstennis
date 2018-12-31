"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var full_component_1 = require("./layouts/full/full.component");
exports.AppRoutes = [
    {
        path: '',
        component: full_component_1.FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/starter',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './material-component/material.module#MaterialComponentsModule'
            },
            {
                path: 'starter',
                loadChildren: './starter/starter.module#StarterModule'
            }
        ]
    }
];
//# sourceMappingURL=app.routing.js.map
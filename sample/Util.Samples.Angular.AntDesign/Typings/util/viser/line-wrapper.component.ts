﻿//============== Viser折线图包装器 =====================
//Copyright 2019 何镇汐
//Licensed under the MIT license
//=====================================================
import { Component } from '@angular/core';
import { ComponentBase } from "./base/component-base";

/**
 * Viser折线图包装器
 */
@Component( {
    selector: 'x-line',
    template: `
        <v-view [data]="data">
            <v-line position="name*value" color="key"></v-line>
            <v-point position="name*value" color="key" shape="circle"></v-point>
        </v-view>
    `
} )
export class LineWrapperComponent extends ComponentBase {
    /**
     * 初始化折线图包装器
     */
    constructor() {
        super();
    }
}
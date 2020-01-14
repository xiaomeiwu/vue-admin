import Vue from 'vue'
import { Ls, Http } from './plugins'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue
    .use(Ls)
    .use(Http)
    .use(Router)
    .use(Vuex)
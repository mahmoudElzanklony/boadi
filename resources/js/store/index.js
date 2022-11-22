import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

import register from "./modules/auth/register";
import login from "./modules/auth/login";
import areas from "./modules/areas";
import contactus from "./modules/contactus";
//------------------- start of  dashboard---------------------------

import upload_files from "./modules/dashboard/upload_files";
import definitions from "./modules/dashboard/definitions";
import ads from "./modules/dashboard/ads";

import settings_dash from "./modules/dashboard/settings";
import favourite from "./modules/users/favourite";

//------------------- end of  dashboard---------------------------
// Create a new store instance.
const store = new Vuex.Store({
    modules:{
        register,
        login,
        areas,
        favourite,
        contactus,

        // dashboard modules

        upload_files,
        settings_dash,
        definitions,
        ads,
        // end dashboard modules
    }
})

export {store};

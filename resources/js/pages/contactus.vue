<template>
    <section class="contact-us">
        <navbar-component></navbar-component>
        <div class="container">
            <h2 class="main-title">
                <span>{{ switchWord('contact_us') }}</span>
            </h2>
            <form method="post" @submit.prevent="save_message">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label>{{ keywords.name }}</label>
                            <input class="form-control" name="name" required>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label>{{ keywords.email }}</label>
                            <input class="form-control" name="email" type="email" required>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label>{{ keywords.phone }}</label>
                            <input class="form-control" name="phone" type="number">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label>{{ keywords.reason }}</label>
                            <select class="form-control" name="reason" required>
                                <option value="">{{ switchWord('select_best_for_you') }}</option>
                                <option v-for="(i,index) in ['thanks','development','problem']" :key="index" :value="switchWord(i)">{{ switchWord(i) }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>{{ keywords.message }}</label>
                            <textarea class="form-control" name="message" required></textarea>
                        </div>
                    </div>

                    <VueRecaptcha @verify="onCaptchaVerified" sitekey="6LcXhy0jAAAAAG-s5D9y7tzlNVtq0i1hrCFBpccg"></VueRecaptcha>
                    <div class="col-12 mt-3">
                        <div class="form-group">
                            <input class="form-control btn btn-primary d-block w-100 text-center" :value="switchWord('send')" type="submit" disabled>
                        </div>
                    </div>
                </div>




            </form>
        </div>
        <footer-component></footer-component>
    </section>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
import FooterComponent from "../components/FooterComponent";
import {mapActions} from "vuex";
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    name: "contactus",
    props:['keywords'],
    mixins:[SwitchLangWord],
    methods:{
        ...mapActions({
            'save_message':'contactus/save_message'
        }),
        onCaptchaVerified: function (recaptchaToken) {
            document.querySelector('input[type="submit"]').removeAttribute('disabled')
            document.querySelector('input[type="submit"]').style.opacity = 1

        },

    },
    mounted() {

    },
    components: {FooterComponent, NavbarComponent,VueRecaptcha}
}
</script>

<style lang="scss" scoped>
form{
    input[type="submit"]{
        opacity: 0.1;
    }
}
</style>

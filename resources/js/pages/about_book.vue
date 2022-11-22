<template>
    <div class="info_pages">
        <navbar-component></navbar-component>
        <div class="container">
            <h1 class="main-title text-center">{{ switchWord('about_book') }}</h1>
            <div class="content-info">
               <p class="mb-3">يعد قاموس بودي المحاسبي مرجعاً أساسياً لمزاولي مهنة المحاسبة في الشركات، ومكاتب المراجعة، وطلاب الجامعات.</p>
               <p class="mb-3">يحتوي القاموس على ما يقرب من (15.000) خمسة عشر ألف مصطلح باللغـة الإنجليزية وما يقابلها باللغة العربية، وتعريف مهني واضح لكل مصطلح باللغة العربية.
               </p>

                <p class="mb-3">يشمل القاموس جميع فروع المحاسبة المالية، والإدارية، والحكومية، والبنكية، والتأمينية، والقانونيـة، والتكاليف، والمراجعـة، والزكاة، والضريبة، ونظم المعلومات، والمعاملات الشـرعية، والمنشآت غير الهادفة للربح.
                </p>
                <p class="mb-3">يفرد القاموس ملحقـاً خاصاً بالاختصارات المحاسبية الشائعة الاستخدام باللغة الإنجليزية، وما يقابلها باللغة العربية.
                </p>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "about_us",
    props:['keywords'],
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
ul{
    margin-bottom: 30px;
    list-style: decimal;
    li{
        font-size: $paragraph;
        margin-bottom: 10px;
    }
}
h1{
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: bold;
}
.content-info{
    p{
        margin-bottom: 30px;
        line-height: 30px;
    }
}
</style>

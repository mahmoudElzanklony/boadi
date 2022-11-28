<template>
    <div class="info_pages">
        <navbar-component></navbar-component>
        <div class="container">
            <h1 class="main-title text-center">{{ switchWord('about_us') }}</h1>
            <h1 class="main-title text-center">د/عادل عبد العزيز بودي</h1>
            <div class="content-info">
                <img class="d-block mb-4" src="/images/IMG_6305.jpg">
                <div>
                    <ul>
                    <li>محاســب قانونــــي .</li>
                    <li>أمين وخبير إفلاس .</li>
                    <li>محكم وخبير تحكيم .</li>
                    <li>مستشار مالي وإداري .</li>
                    <li>مشرف محاسبي لمشاريع البيع على الخارطة .</li>
                    <li>خبير المحتوى المحلي .</li>
                    <li>الأمين العام المساعد للمنظمة العربية لخــبراء المحاسبة القانونيين AOCPA </li>
                    </ul>
                    <p>
                        <strong>الزمالات المهنية :</strong>
                    </p>
                    <ul>
                        <li>زمالة معهد المحاسبين الماليين البريطاني IFA</li>
                        <li>زمالة معهد المحاسبين القانونيين الأسترالي IPA</li>
                        <li>زمالة هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية CIPA</li>
                    </ul>
                    <p>
                        <strong>المناصب العملية الحالية :</strong>
                    </p>
                    <ul>
                        <li>رئيس مجلس إدارة الشركة السعودية لتنمية الأوقاف .</li>
                        <li>رئيس مجلس إدارة شركة علوم المعرفة للتعليم والتدريب .</li>
                        <li>رئيس مجلس إدارة شركة بودي والعمر محاسبون قانونيون .</li>
                        <li>رئيس لجنة المراجعة في شركة الجبر للتمويل .</li>
                        <li>عضو لجنة المراجعة في شركة الجبر للتمويل .</li>
                        <li>عضو مجلس إدارة شركة الجبر للتمويل .</li>
                        <li>عضو لجنة المراجعة في الشركة الخليجية للتعمير .</li>
                        <li>عضو جمعية دعم الأوقاف .</li>
                        <li>نائب رئيس مجلس إدارة جمعية أواصر .</li>
                    </ul>
                    <p>
                        <strong>العضويات المهنيـة 	:</strong>
                    </p>
                    <ul>
                        <li>عضو أساسي بالهيئة السعودية للمحاسبين القانونيين SOCPA</li>
                        <li>عضو الجمعية العمومية لهيئة المحاسبة والمراجعة لدول مجلس التعاون لدول الخليج العربية GCCAAO</li>
                        <li>عضو مجلس إدارة جمعية الضرائب العربية .</li>
                        <li>عضو مجلس إدارة جمعية الضرائب الدولية .</li>
                        <li>عضو لجنة معايير المحاسبة السعودية سابقاً .</li>
                        <li>عضو لجنة المهن الحرة في الغرفة التجارية بالمنطقة الشرقية سابقاً .</li>
                        <li>عضو المعهد الأمريكي للمحاسبين القانونيين AICPA</li>
                        <li>عضو جمعية المحاسبة الأمريكيــــة AAA</li>
                        <li>عضو جمعية المحاسبة الســـــعودية SAA</li>
                        <li>عضو معهد المحاسبة العامة IPA</li>
                        <li>عضو الجمعية العربية لإدارة الموارد البشرية ASHRM</li>
                        <li>عضو الإتحاد العام للمحاسبين والمراجعين العرب AFAA</li>
                        <li>عضو الجمعية العربية للتكاليف والمحاسبة الإدارية AACAA</li>
                        <li>عضو معهد المحاسبين الإداريين IMA	</li>
                        <li>عضو الجمعية السعودية للإدارة SMA</li>
                    </ul>
                </div>
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
img{
    height: 250px;
    margin: auto;
    border-radius: 5px;
}
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

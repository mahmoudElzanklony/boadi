<template>

    <div class="home">
        <navbar-component data-aos="fade-left"></navbar-component>
<!--
        <header data-aos="fade-up" class="main-section" v-if="false">
            <div class="layer" style="background-color: unset">
                <div class="container w-50">
                    <h2 class="text-center" data-aos="fade-down" data-aos-delay="500">{{ keywords.website_name }}</h2>
                    <p class="text-center"  data-aos="fade-down" data-aos-delay="1000">{{ keywords.website_word }}</p>
                    <div class="text-center"  data-aos="fade-down" data-aos-delay="1500">
                        <form>
                            <div class="form-group position-relative">
                                <input class="form-control" name="feedback"
                                       :placeholder="keywords.your_feedback"
                                       required>
                                <input class="btn btn-primary position-absolute"
                                       type="submit" :value="switchWord('send')">
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </header>
        -->


        <section class="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="image-content d-flex align-items-center">
                            <inertia-link href="/aboutauthor">
                                <img src="/images/IMG_6305.jpg">
                            </inertia-link>
                            <div>
                                <p><strong>
                                    <inertia-link href="/aboutauthor">د.عادل عبد العزيز بودي</inertia-link>
                                </strong></p>
                                <p>مؤلف قاموس بودي المحاسبي</p>
                                <a href="mailto:adel@bo-cpa.com">adel@bo-cpa.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="ads">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators" v-if="ads_data.length > 1">
                                    <li data-target="#carouselExampleIndicators" v-for="(i,index) in ads_data.length"
                                        :key="index"
                                        :data-slide-to="index" :class="index == 0 ? 'active':''"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div :class="'carousel-item '+(index == 0 ? 'active':'')"
                                         v-for="(ad,index) in ads_data"
                                         :key="index">
                                        <a :href="ad['link']" target="_blank">
                                            <img class="d-block w-100" :src="'/images/ads/'+ad['image']" alt="First slide">
                                        </a>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" v-if="ads_data.length > 1" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" v-if="ads_data.length > 1" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<!--
        <section class="services main-section" v-if="false">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.dictionary_services }}</span>
                </h2>
                <div class="row">
                    <div class="col-md-4 col-12" data-aos="fade-right" data-aos-delay="500">
                        <div class="service text-center">
                            <img src="/images/icons/content.png">
                            <h3>{{ keywords.content_service_word }}</h3>
                            <p>{{ keywords.content_service }}</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12" data-aos="fade-right" data-aos-delay="1000">
                        <div class="service text-center">
                            <img src="/images/icons/support_customer.png">
                            <h3>{{ keywords.support_service_word }}</h3>
                            <p>{{ keywords.support_service }}</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12" data-aos="fade-right" data-aos-delay="1500">
                        <div class="service text-center">
                            <img src="/images/icons/email_message.png">
                            <h3>{{ keywords.email_message_word }}</h3>
                            <p>{{ keywords.email_message_service }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        -->
        <!------------------start of brands section------------------------ -->
        <section class="expressions mt-4 overflow-hidden main-section"  data-aos="fade-up" data-aos-delay="500">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.search_about_any_thing_you_want }}</span>
                </h2>
                <div class="overflow-auto">
                    <div class="letters">
                        <p class="arabic">
                            <span class="cursor-pointer mb-2" v-for="(i,index) in  letters['arabic']" :key="index">
                                {{ i }}
                            </span>
                        </p>
                        <p class="english">
                            <span class="cursor-pointer mb-2" v-for="(i,index) in  letters['english']" :key="index">
                                {{ i }}
                            </span>
                        </p>

                    </div>
                    <button class="btn btn-outline-success position-absolute mt-4">تصفية البحث</button>

                    <table  class="myTable table table-bordered table-striped table-striped table-hover">
                        <thead>
                            <tr>
                                <td v-for="(td,index) in data['table_head']" :key="index">{{ td }}</td>
                            </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header pb-2">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <strong class="mb-2 d-block">المصطلح بالأنجليزي</strong>
                        <p style="border-bottom: 1px solid #ddd;" class="d-flex mb-3 pb-3 justify-content-between align-items-center">
                            <span></span>
                            <span class="table-icon"><i class="ri-volume-down-line" ></i></span>
                        </p>
                        <strong class="mb-2 d-block">التعريف</strong>
                        <p></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">أغلاق</button>
                    </div>
                </div>
            </div>
        </div>

        <!------------------end of brands section------------------------ -->
        <!------------------start of mobile section------------------------ -->

<!--
        <section class="mobile main-section" v-if="false">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-12"data-aos="fade-left" >
                        <div class="content">
                            <h2 class="small_line_heading">{{ keywords.mobile_experience }}</h2>
                            <p>{{ keywords.mobile_experience_info }}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="image" data-aos="fade-right">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        -->
        <!------------------end of mobile section------------------------ -->
        <!------------------start of transfer section------------------------ -->
<!--

        <section class="features main-section" v-if="false">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.dictionary_features }}</span>
                </h2>
                <div class="row align-items-center">
                    <div class="col-md-6 col-12" data-aos="fade-left">
                        <div class="content mb-2">
                            <h2 class="mb-3 small_line_heading">{{ keywords.fast_search }}</h2>
                            <p>{{keywords.fast_search_word}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image mb-2">
                            <img  src="images/home/search.jpg">
                            <svg class="bk-svg left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#43aa8c1a" d="M52.2,-16.1C60.5,8.6,55.2,38.6,36.7,52.5C18.2,66.4,-13.4,64.2,-35.6,48.2C-57.8,32.3,-70.5,2.6,-63,-20.9C-55.5,-44.5,-27.8,-62,-2.9,-61C21.9,-60.1,43.9,-40.7,52.2,-16.1Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image mb-2">
                            <img  src="/images/home/learn.jpeg">
                            <svg style="width: 146%;transform: scaleX(1.5); top:-60%;"
                                 class="bk-svg right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#43aa8c1a" d="M52.2,-16.1C60.5,8.6,55.2,38.6,36.7,52.5C18.2,66.4,-13.4,64.2,-35.6,48.2C-57.8,32.3,-70.5,2.6,-63,-20.9C-55.5,-44.5,-27.8,-62,-2.9,-61C21.9,-60.1,43.9,-40.7,52.2,-16.1Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="content mb-2" data-aos="fade-left">
                            <h2 class="mb-3 small_line_heading">{{ keywords.ads_search }}</h2>
                            <p>{{keywords.ads_search_word}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-left">
                        <div class="content mb-2" >
                            <h2 class="mb-3 small_line_heading">{{ keywords.download_terms_that_are_important_to_you }}</h2>
                            <p>{{keywords.download_terms_that_are_important_to_you_word}}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12" data-aos="fade-right">
                        <div class="image position-relative mb-2">
                            <svg class="bk-svg left"
                                 style=" top: -10%; width: 114%;transform: scaleX(2.5);"
                                 viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#43aa8c1a" d="M52.2,-16.1C60.5,8.6,55.2,38.6,36.7,52.5C18.2,66.4,-13.4,64.2,-35.6,48.2C-57.8,32.3,-70.5,2.6,-63,-20.9C-55.5,-44.5,-27.8,-62,-2.9,-61C21.9,-60.1,43.9,-40.7,52.2,-16.1Z" transform="translate(100 100)" />
                            </svg>
                            <img  src="images/home/download.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </section>

-->

        <!------------------end of transfer section------------------------ -->


        <!----------------------------start of support----------------------------------- -->
<!--

        <section class="support_customer main-section" data-aos="fade-down" v-if="false">
            <div class="layer">
                <div class="container text-center">
                    <p>{{ keywords.customer_support }}</p>
                    <inertia-link href="#" class="btn btn-primary">{{ keywords.send_message }}</inertia-link>
                    <a tel="+201152296646" class="btn btn-outline-primary">{{ keywords.call_us_by_phone }}</a>
                </div>
            </div>
        </section>

        -->

        <!----------------------------end of support----------------------------------- -->

        <footer-component></footer-component>

    </div>

</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import tableData from "../mixin/tableData";
import switchLang from "../mixin/SwitchLangWord";
import FooterComponent from "../components/FooterComponent";
import {mapActions , mapGetters , mapMutations} from "vuex";
export default {
    name: "home",
    props:['keywords','data','letters'],
    mixins:[switchLang,tableData],
    components: {FooterComponent, NavbarComponent},
    data:function (){
        return {
            table_url:'/paginate-data',
            table_requested_table:'definisions',
            table_columns:[
                { "data": "term_in_arabic" },
                { "data": "term_in_english",
                    "render":function(data,type,row){
                        return '<p class="d-flex align-items-center justify-content-between"><span>'+data+'</span><span class="table-icon"><i class="ri-volume-down-line" ></i></span></p>';
                    }
                },
             //   { "data": "tags" },
                { "data": "expression" },
            ]
        }
    },
    mounted() {
        // change arrow direction at english page
        if(this.$inertia.page.props.lang == 'en'){
            $('i.ri-arrow-drop-left-line').removeClass('ri-arrow-drop-left-line').addClass('ri-arrow-drop-right-line');
        }
        let all_thead_tds = document.querySelectorAll('table thead tr td');
        for( let input in all_thead_tds){
            if(!(isNaN(input))) {
                all_thead_tds[input].innerHTML = '<input class="form-control" name="' + Object.keys(this.data['table_head'])[input] + '" placeholder="' + all_thead_tds[input].textContent + '">';
            }
        }

        if(window.innerWidth < 700){
            $('.content').on('click','table tbody tr',function (){
                $('.modal-title').html($(this).find('td:first-of-type').html());
                $('.modal-body p:first-of-type span:first-of-type').html($(this).find('td:nth-of-type(2) p span:first-of-type').html());
                $('.modal-body p:last-of-type').html($(this).find('td:last-of-type').html());
                $('.modal').modal('show');
            })
        }

        this.load_ads();
    },
    computed:{
        ...mapGetters({
            'ads_data':'home/get_data',
        })
    },
    methods:{
        ...mapActions({
            'load_ads':'home/load_ads',
        })

    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.layer{
    background-color: rgb(255 255 255 / 35%);
    width: 100%;
    height: 100%;
}
.ar{
    header{
        form{
            input[type="submit"]{
                left: 15px;
            }
        }
    }
    .bk-svg.left{
        left: -106%;
    }
    .bk-svg.right{
        right: -106%;
    }
    .about{
        .image-content{
            img{
                margin-left: 8px;
            }
        }
    }
    .letters{
        span{
            margin-left: 8px;
        }
    }
    @media (max-width: 767px) {
         .arabic{
             margin-bottom: 20px;
         }
    }

}
.en{
    header{
        form{
            input[type="submit"]{
                right: 15px;
            }
        }
    }

    .bk-svg.left{
        right: -106%;
    }
    .bk-svg.right{
        left: -106%;
    }
    .about{
        .image-content{
            img{
                margin-right: 8px;
            }
        }
    }
    .letters{
        span{
            margin-right: 8px;
        }
    }

}

header{
    background-image: url("/images/home/header.jpg");
    background-size: cover;
    height: 650px;
    background-position: center;
    margin-top: 55px;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        height: 100%;
        h2{
            font-size: 65px;
            margin-bottom: 25px;
            text-shadow: 1px 1px 1px;
        }
        p{
            font-size:$big;
        }
        >div,h2,p{
            width: 100%;
        }
        .row{
            width:100%;
        }
    }
    p{
        font-size: $big;
        margin-top: 0px;
    }
    p:last-of-type{
        margin-bottom: 25px;
    }
    form{
        input[type="submit"]{
            top: 8px;
            padding-right: 30px;
            padding-left: 30px;
            border-radius: 30px;
        }
        input:first-of-type{
            padding: 25px;
            border-radius: 30px;
        }
    }
}
.about{
    .image-content{
        img{
            height: 100px;
        }
        div{

        }
    }
    .ads{
        img{
            height: 100px;
        }
    }
    @media (max-width: 767px) {
         .row{
             >div:first-of-type{
                 margin-bottom: 15px;
             }
         }
    }
}
.letters{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    >p{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .english{
        direction: ltr;
    }
    span{
        min-width: 30px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid $main_color;
        transition: 0.5s all;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        padding-bottom: 3px;
        &:hover{
            background-color: $main_color;
            color:white;
        }
    }
    span.active{
        color:white;
        background-color: $main_color;
    }
}
.expressions{
    table{
        td{

        }
    }
}
.mobile{
    background-color: $main_color_white;
    position: relative;
    height: 200px;
    margin-top: 80px !important;
    margin-bottom: 120px;
    .container , .row{
        height: 100%;
    }
    .content{
        p{
            font-size: $paragraph;
        }
    }
    .image{
        background-image: url('/images/home/dictionary.png');
        height: 347px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -175px;
        width: 100%;
        z-index: -1;
    }
}
.features{
    overflow: hidden;
    .bk-svg{
        position: absolute;
        width: 228%;
        top: -109%;
        transform: rotate(67deg);
    }
    .image{
        img{
            width: 100%;
            border-radius: 8px;
        }
    }
    .content{
        h2{
            color:$sub_main_color;
            text-shadow: 1px 1px 1px #dddddd;
        }
        p{
            line-height: 35px;
        }
    }
}
.services{
    .service{
        padding: 10px;
        text-align: center;
        box-shadow: 0px 0px 6px 1px #ddd;
        border-radius: 10px;
        margin-bottom: 20px;
        img{
            height: 90px;
            margin-bottom: 10px;
        }
        h3{
            font-size: $semi_big;
            text-align: center;
            font-weight: bold;
            color: $sub_main_color;
            text-shadow: 1px 1px 1px #ddd;
        }
        p{
            font-size: $paragraph;
            text-align: center;
        }
    }
}
.support_customer{
    background-image: url('/images/home/customer_support.webp');
    height: 350px;
    background-size: cover;
    background-position: top;
    .layer{
        height: 100%;
    }
    .container{
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    p{
        color:white;
        width:100%;
        font-size: $semi_big;
        margin-bottom: 20px;
        text-align:center;
    }
    a:first-of-type{
        margin-left: 5px;
        margin-right: 5px;
    }
}


.sub{
    a{
        display: flex;
        align-items: center;
        position: relative;
        transition: 0.5s all;
        padding: 15px;
        border-radius: 10px;
        &:hover{
            box-shadow: 0px 0px 10px 1px #eeeaea;
        }
        &:hover >span:last-of-type{
            display: block;
        }
        >span:first-of-type{
            color:$main_color;
        }
        div{
            p:first-of-type{
                font-weight: bold;
                margin-bottom: 5px;
                span:nth-of-type(2){
                    background-color: $sub_main_color;
                    padding: 2px 6px;
                    border-radius: 3px;
                }
            }
            p:last-of-type{
                color:$gray;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                min-height: 50%;
                line-height: 30px;
            }
        }
        >span:last-of-type{
            position: absolute;
            top:8px;
            display: none;
        }
    }
}
.know.sub-data{
    a{
        >span:first-of-type{
            color:$sub_main_color;
        }
    }
}
.ad.sub-data{
    a{
        >span:first-of-type{
            color:$black;
        }
    }
}


@media (max-width: 767px) {
    header{
        background-repeat: no-repeat;
        background-position: left;
        .container{
            width:100% !important;
            h2{
                font-size: 50px;
            }
            p{
                font-size: unset;
            }
            h2,p{
                text-shadow: 1px 1px 1px #ddd;
            }
            form{
                input[name="feedback"]{
                    font-size: 10px;
                }
            }
        }
    }
    .mobile{
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        height: unset;
        h2,p{
            text-align: center;
        }
        .image{
            display: none;
        }
    }
}


</style>

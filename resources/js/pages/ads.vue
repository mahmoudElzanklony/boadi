<template>
    <div class="ads">
        <navbar-component></navbar-component>
        <header data-aos="fade-up" class="main-section">
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
        <section class="services main-section">
            <div class="container">
                <h2 class="main-title">
                    <span>{{ keywords.current_ads }}</span>
                </h2>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 mb-4" v-for="i in 8" :key="i">
                        <div class="ad">
                            <div class="image">
                                <img src="/images/home/support.jpg">
                            </div>
                            <div class="p-3">
                                <h3>عنوان الاعلان</h3>
                                <p class="mb-3">بعض التفاصيل عن الاعلان يتم كتابتها هنا في تلك المساحه ما بين سطرين الي ثلاث اسطر</p>
                                <a href="https:www.google.com" class="btn btn-outline-primary">
                                    <span>{{ switchWord('see_more') }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "ads",
    props:['keywords'],
    mixins:[SwitchLangWord],
    components: {FooterComponent, NavbarComponent}
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
}
.en{
    header{
        form{
            input[type="submit"]{
                right: 15px;
            }
        }
    }
}
.ads{
    .ad{
        box-shadow: 0px 0px 5px 1px #ddd;
        border-radius: 10px;
        .image{
            img{
                width: 100%;
            }
        }
        h3{
            color:$main_color;
            text-shadow: 0px 0px 3px #dddddd;
        }
        a{
            border-radius: 30px;
            padding-right: 20px;
            padding-left: 20px;
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

}


</style>


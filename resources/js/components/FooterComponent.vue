<template>
    <footer class="p-4 mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>{{ switchWord('website') }}</h1>
                    <p>{{switchWord('footer_info')}}</p>
                </div>
                <div class="col-md-6">
                    <div class="info">
                        <ul>
                            <li>
                                <inertia-link href="/">
                                    {{ switchWord('Home') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="/aboutus">
                                    {{ switchWord('about_us') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="/aboutbook">
                                    {{ switchWord('about_book') }}
                                </inertia-link>
                            </li>
                            <li>
                                <inertia-link href="/contactus">
                                    {{ switchWord('contact_us') }}
                                </inertia-link>
                            </li>
                        </ul>
                        <div class="downloads" v-if="false">
                            <inertia-link href="#">
                                <img src="/images/icons/google.svg">
                            </inertia-link>
                            <inertia-link href="#">
                                <img src="/images/icons/IOS.svg">
                            </inertia-link>
                            <inertia-link href="#" style="display: none">
                                <img src="/images/icons/huawei.svg">
                            </inertia-link>
                        </div>
                        <div class="social" v-if="false">
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-facebook-line"></i>
                                </span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-twitter-line"></i>
                                </span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-instagram-line"></i>
                                </span>
                            </inertia-link>
                            <inertia-link href="#">
                                <span>
                                    <i class="ri-youtube-line"></i>
                                </span>
                            </inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "FooterComponent",
    mixins:[SwitchLangWord],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
footer{
    background-color: $main_color;
    .row{
        >div:first-of-type{
            h1{
                margin-bottom: 15px;
                font-size: $big;
            }
            h1,p{
                color:white;
            }
        }
        >div:last-of-type{
            .info{
                ul{
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li{
                        a{
                            color:white;
                        }
                    }
                }
                .downloads{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    img{
                        height: 60px;
                        max-width: 170px;
                    }
                }
                .social{
                    display: flex;
                    align-items: center;
                    a{
                        span{
                            color:white;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 900px) {
    footer{
        h1,p{
            text-align: center;
        }
        ul{
            margin-top: 12px;
        }
        .downloads{
            img{
                max-width: 95px !important;
            }
        }
        .downloads,.social{
            justify-content: center;
        }
    }
}

.ar{
    footer{
        .downloads{
            a:first-of-type{
                margin-left: 10px;
            }
        }
        .social{
            a{
                margin-left: 15px;
            }
        }
    }
}
.en{
    footer{
        .downloads{
            a:first-of-type{
                margin-right: 10px;
            }
        }
        .social{
            a{
                margin-right: 15px;
            }
        }
    }
}

</style>

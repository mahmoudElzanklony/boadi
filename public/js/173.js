(self.webpackChunkphpsocket=self.webpackChunkphpsocket||[]).push([[173],{4435:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".swal2-container{z-index:1e+26}",""]);const i=r},3965:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,'.ar .orange_class[data-v-67eff37d]:hover,.ar .side-bar-nav ul li[data-v-67eff37d]:hover,.side-bar-nav ul .ar li[data-v-67eff37d]:hover{padding-right:10px}.ar .orange_class[data-v-67eff37d]:before,.ar .side-bar-nav ul li[data-v-67eff37d]:before,.side-bar-nav ul .ar li[data-v-67eff37d]:before{left:0}.ar .side-bar-nav[data-v-67eff37d]{right:0}.ar .side-bar-nav>span[data-v-67eff37d]{right:5px}.ar .side-bar-nav ul li a span[data-v-67eff37d]:first-of-type{margin-left:10px}.ar .side-bar-nav ul li.active[data-v-67eff37d]:before{left:0}.en .orange_class[data-v-67eff37d]:hover,.en .side-bar-nav ul li[data-v-67eff37d]:hover,.side-bar-nav ul .en li[data-v-67eff37d]:hover{padding-left:10px}.en .orange_class[data-v-67eff37d]:before,.en .side-bar-nav ul li[data-v-67eff37d]:before,.side-bar-nav ul .en li[data-v-67eff37d]:before{right:0}.en .side-bar-nav[data-v-67eff37d]{left:0}.en .side-bar-nav>span[data-v-67eff37d]{left:5px}.en .side-bar-nav ul li a span[data-v-67eff37d]:first-of-type{margin-right:10px}.en .side-bar-nav ul li.active[data-v-67eff37d]:before{right:0}.orange_class[data-v-67eff37d]:before,.side-bar-nav ul li[data-v-67eff37d]:before{content:"";position:absolute;height:0;transition:all .5s;background-color:#43aa8c;width:4px}.orange_class[data-v-67eff37d]:hover:before,.side-bar-nav ul li[data-v-67eff37d]:hover:before{height:100%}.orange_class:hover span[data-v-67eff37d],.side-bar-nav ul li:hover span[data-v-67eff37d]{color:#43aa8c}.side-bar-nav[data-v-67eff37d]{transition:all .5s;position:fixed;background-color:hsla(0,0%,93.3%,.2196078431372549);width:200px;height:100%;padding:0!important}.side-bar-nav>span[data-v-67eff37d]{position:absolute;top:14px;color:#03071e}.side-bar-nav .logo img[data-v-67eff37d]{padding-top:10px;width:115px;display:block;margin:auto}.side-bar-nav ul[data-v-67eff37d]{padding-top:50px;height:calc(100% - 50px);overflow:auto}.side-bar-nav ul li[data-v-67eff37d]{transition:all .5s;position:relative}.side-bar-nav ul li a[data-v-67eff37d]{display:flex;align-items:center;padding:5px}.side-bar-nav ul li a span[data-v-67eff37d]{color:#03071e}.side-bar-nav ul li.active span[data-v-67eff37d]{color:#43aa8c}.side-bar-nav ul li.active[data-v-67eff37d]:before{content:"";position:absolute;transition:all .5s;background-color:#43aa8c;width:4px;height:100%}.side-bar-nav ul li[data-v-67eff37d]:not(:last-of-type){border-bottom:1px solid #eee}.side-bar-nav.icons_only[data-v-67eff37d]{width:50px}.side-bar-nav.icons_only>span[data-v-67eff37d]{right:10px}.side-bar-nav.icons_only .logo img[data-v-67eff37d]{display:none}.side-bar-nav.icons_only ul li a[data-v-67eff37d]{align-items:center;justify-content:center}.side-bar-nav.icons_only ul li a span[data-v-67eff37d]:not(:first-of-type){display:none}',""]);const i=r},5126:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".alert-danger[data-v-4f44fc96]{display:none}",""]);const i=r},8824:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"SideNavbarComponent",mixins:[a(7412).Z],mounted:function(){var e=document.URL.split("/")[document.URL.split("/").length-1];$("ul").find('li[custom="'+e+'"]').addClass("active")},methods:{toggleSideNav:function(){$(event.target).parent().parent().toggleClass("icons_only"),$(event.target).parent().parent().hasClass("icons_only")?$(".dashboard .content").css("width",$(document).innerWidth()-50):$(".dashboard .content").css("width",$(document).innerWidth()-200)}}};a(7400);const r=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"side-bar-nav"},[a("span",{staticClass:"cursor-pointer"},["ar"==e.$page.props.lang?a("i",{staticClass:"ri-menu-3-line",on:{click:e.toggleSideNav}}):a("i",{staticClass:"ri-menu-2-line",on:{click:e.toggleSideNav}})]),e._v(" "),a("div",{staticClass:"logo"},[a("inertia-link",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])],1),e._v(" "),a("ul",[a("li",{attrs:{custom:"dashboard"}},[a("inertia-link",{attrs:{href:"/"}},[a("span",[a("i",{staticClass:"ri-home-2-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("Home")))]),e._v(" "),a("span")])],1),e._v(" "),a("li",{attrs:{custom:"settings"}},[a("inertia-link",{attrs:{href:"/dashboard/settings"}},[a("span",[a("i",{staticClass:"ri-settings-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("settings")))]),e._v(" "),a("span")])],1),e._v(" "),a("li",{attrs:{custom:"definitions"}},[a("inertia-link",{attrs:{href:"/dashboard/definitions"}},[a("span",[a("i",{staticClass:"ri-book-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("definitions")))])])],1),e._v(" "),a("li",{attrs:{custom:"uploadfile"}},[a("inertia-link",{attrs:{href:"/dashboard/uploadfile"}},[a("span",[a("i",{staticClass:"ri-upload-2-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("uploadfile")))])])],1),e._v(" "),a("li",{attrs:{custom:"ads"}},[a("inertia-link",{attrs:{href:"/dashboard/ads"}},[a("span",[a("i",{staticClass:"ri-image-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("ads")))])])],1),e._v(" "),a("li",{attrs:{custom:"contact_us"}},[a("inertia-link",{attrs:{href:"/dashboard/contactus"}},[a("span",[a("i",{staticClass:"ri-message-3-line"})]),e._v(" "),a("span",[e._v(e._s(e.switchWord("contact_us")))])])],1),e._v(" "),e._e()])])}),[],!1,null,"67eff37d",null).exports},7412:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"SwitchLangWord",data:function(){return{words:{Home:{ar:"الرئيسية",en:"Home",tu:""},Profile:{ar:"الملف الشخصي",en:"profile",tu:""},Search:{ar:"أبحث",en:"Search",tu:""},Arabic_Language:{ar:"اللغة العربية",en:"Arabic Language",tu:""},English_Language:{ar:"اللغة الأنجليزية",en:"English Language",tu:""},Turkish_Language:{ar:"اللغة التركية",en:"Turkish Language",tu:""},Help:{ar:"مساعدة",en:"Help",tu:""},sign_in:{ar:"تسجيل دخول",en:"Sign in",tu:""},sign_up:{ar:"تسجيل حساب",en:"Sign up",tu:""},logout:{ar:"تسجيل خروج",en:"logout",tu:""},registered_from_date:{ar:"سجل منذ تاريخ ",en:"registered from date ",tu:""},activities:{ar:"نشاطاتي",en:"my activities",tu:""},website:{ar:"قاموس بودي",en:"Boodai Dictionary",tu:""},footer_info:{ar:"يحتوي القاموس على ما يقرب من (15.000) خمسة عشر ألف مصطلح باللغـة الإنجليزية وما يقابلها باللغة العربية.",en:"We provide more than a million terms in the accounts, you can search for anything you want with ease with the ability to download anything you want with ease",tu:""},jobs:{ar:"وظائف",en:"Jobs",tu:""},contact_us:{ar:"تواصل معنا",en:"ContactUs",tu:""},site_map:{ar:"خريطة الموقع",en:"Sitemap",tu:""},conditions:{ar:"الاحكام",en:"Terms",tu:""},searches:{ar:"أبحاث",en:"Market Research",tu:""},big_photo_upload:{ar:"مساحه الصوره المرفوعه اكبر من 2 ميجا",en:"size of photo uploaded is more than 2 mega",tu:""},upload_good_image:{ar:"ارفع صورة صحيحة",en:"Upload good image",tu:""},big_photo_upload_error_preview:{ar:"لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا",en:"we cant preview photo uploaded that size is more than 2 mega",tu:""},you_exceed_number_of_uploaded:{ar:"لقد تجاوزت عدد الصور المسموح به للرفع",en:"you exceed number of photos uploaded",tu:""},see_more:{ar:"رؤيه المزيد",en:"See more",tu:""},added_to_fav:{ar:"تم الأضافه الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},do_you_need_help:{ar:"هل تحتاج الي مساعده",en:"Do you need help",tu:""},registered_at_date:{ar:"سجل في تاريخ",en:"Registered at date",tu:""},request_contact:{ar:"طلب اتصال",en:"Request contact",tu:""},personal_info:{ar:"حسابي",en:"My Account",tu:""},select_status:{ar:"اختر الحالة",en:"Select Status",tu:""},live_listings:{ar:"نشطة",en:"Live",tu:""},rejected_listings:{ar:"مرفوضة",en:"Rejected",tu:""},expired_listings:{ar:"منتهية",en:"Expired",tu:""},pending_listings:{ar:"معلقة",en:"Pending",tu:""},payment_done:{ar:"تم الدفع",en:"payment done",tu:""},pending:{ar:"معلقة",en:"pending",tu:""},statistics:{ar:"احصائياتي",en:"Statistics",tu:""},my_favourite:{ar:"المفضلة",en:"Favourite",tu:""},my_notes:{ar:"ملاحظاتي",en:"My Notes",tu:""},notifications:{ar:"الأشعارات",en:"notifications",tu:""},settings:{ar:"الاعدادت",en:"settings",tu:""},added_to_fav_successfully:{ar:"تم الأضافة الي المفضلة بنجاح",en:"added to favourite successfully",tu:""},removed_from_fav_successfully:{ar:"تمت الأزالة من المفضلة بنجاح",en:"removed from favourite successfully",tu:""},about_us:{ar:"عن المؤلف",en:"About Author",tu:""},about_book:{ar:"عن القاموس",en:"About Dictionary",tu:""},ads:{ar:"اعلانات",en:"Ads",tu:""},please_contact_with_this_number:{ar:"برجاء التواصل مع الرقم",en:"please contact with this number",tu:""},contact_with_us:{ar:"يمكنك التواصل معنا هنا",en:"you can contact with us",tu:""},sale:{ar:"بيع",en:"Sale"},share_this_link:{ar:"مشاركة هذا الرابط",en:"Share this link",tu:""},close:{ar:"اغلاق",en:"Close",tu:""},dashboard:{ar:"الاداره",en:"Dashboard"},users:{ar:"المستخدمين",en:"Users",tu:""},chart:{ar:"الإحصائيات",en:"Chart",tu:""},reports:{ar:"التقارير",en:"Reports",tu:""},client_support:{ar:"الدعم الفني",en:"client support",tu:""},are_you_sure_about_approve:{ar:"هل انت متأكد من عملية الموافقة",en:"Are you sure from approving this request",tu:""},are_you_sure_about_delete:{ar:"هل انت متأكد من عملية المسح",en:"Are you sure from delete operation",tu:""},in_case_you_approved_listing_will_be_at_public:{ar:"في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة",en:"In case you approved this request , the request will be available to any one to see it",tu:""},in_case_you_delete_you_cant_retrieve_it:{ar:"في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري",en:"In case you delete you cant retrieve data another time",tu:""},yes_iam_sure:{ar:"نعم انا متأكد",en:"yes iam sure",tu:""},cancel:{ar:"إلغاء",en:"Cancel",tu:""},approved_done:{ar:"تمت الموافقة",en:"Approved !",tu:""},deleted_done:{ar:"تم المسح",en:"Deleted !",tu:""},approved_done_successfully:{ar:"تمت عملية الموافقة بنجاح",en:"Approved done successfully",tu:""},deleted_done_successfully:{ar:"تمت عملية المسح بنجاح",en:"Deleted done successfully",tu:""},add_new_item:{ar:"إضافة عنصر جديد",en:"Add new Item",tu:""},update_new_item:{ar:"تعديل بيانات ",en:"update info of",tu:""},upload_image:{ar:"أرفع صورة",en:"upload image",tu:""},upload_files:{ar:"رفع الملفات",en:"upload files",tu:""},upload_file:{ar:"أرفع الملف",en:"Upload file",tu:""},upload_quotation_file:{ar:"ارفع ملف الكوتيشن",en:"upload quotation file",tu:""},upload_product_file:{ar:"ارفع ملف اضافه المنتجات",en:"upload file of upload products",tu:""},upload_images:{ar:"أرفع الصور",en:"upload images",tu:""},appearance:{ar:"عملية الظهور",en:"appearance",tu:""},actions:{ar:"الأوامر",en:"actions",tu:""},update_status_successfully:{ar:"تم تحديث الحالة بنجاح",en:"Status updated Successfully",tu:""},select_year:{ar:"أختر السنة",en:"Select year",tu:""},area:{ar:"منطقة",en:"Area",tu:""},city:{ar:"مدينة",en:"City",tu:""},government:{ar:"محافظة",en:"Government",tu:""},country:{ar:"دولة",en:"Country",tu:""},select_country:{ar:"اختر الدولة",en:"Select country",tu:""},select_government:{ar:"اختر المحافظة",en:"Select government",tu:""},select_city:{ar:"اختر المدينة",en:"Select city",tu:""},select_area:{ar:"اختر المنطقة",en:"Select area",tu:""},visible:{ar:"متاح",en:"visible",tu:""},not_visible:{ar:"غير متاح",en:"not visible",tu:""},save:{ar:"حفظ",en:"Save",tu:""},send:{ar:"أرسال",en:"Send",tu:""},name:{ar:"الأسم",en:"Name",tu:""},add_new_question:{ar:"أضف سؤال جديد",en:"Add new question",tu:""},filter:{ar:"فلترة",en:"Filter",tu:""},related_to:{ar:"تابعة ل",en:"Related to",tu:""},block:{ar:"محظور",en:"Block",tu:""},yes:{ar:"نعم",en:"Yes",tu:""},no:{ar:"لا",en:"No",tu:""},leave_password:{ar:"أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها",en:"",tu:""},press_here:{ar:"أضغط هنا",en:"Press Here",tu:""},select_best_choice:{ar:"أختر ما يناسبك",en:"Select best choice",tu:""},search_for_you_best:{ar:"ابحث عن ما يناسبك",en:"search about anything",tu:""},in:{ar:"في",en:"in",tu:""},for:{ar:"ل",en:"for ",tu:""},currency:{ar:"دولار",en:"dollar",tu:""},you_should_login:{ar:"من فضلك سجل دخول اولا",en:"You should login first",tu:""},seller_phone:{ar:"رقم تليفون البائع",en:"Phone Seller",tu:""},next:{ar:"التالي",en:"next",tu:""},prev:{ar:"السابق",en:"previous",tu:""},select_best_for_you:{ar:"اختر ما يناسبك",en:"Select what you want",tu:""},problem:{ar:"مشكلة",en:"Problem",tu:""},thanks:{ar:"شكر و تقدير",en:"thanks",tu:""},development:{ar:"تطوير فني",en:"Development",tu:""},add_another_item:{ar:"اضافه عنصر جديد",en:"Add another item",tu:""},please_enter_all_required_data:{ar:"من فضلك ادخل قيم للبيانات الاجبارية",en:"Please enter all required inputs",tu:""},print_bill:{ar:"طباعه الفاتورة",en:"Print bill",tu:""},please_wait_until_finish_processing:{ar:"من فضلك انتظر حتي يتم اكتمال التحميل",en:"please wait until finish processing",tu:""},definitions:{ar:"تعريفات",en:"definitions",tu:""},uploadfile:{ar:"رفع الملف",en:"upload file",tu:""},download_this_template:{ar:"يرجي تحميل هذه التمبلت و تعبئتها بالمصلحات التي تريدها",en:"download this template"}}}},methods:{switchWord:function(e){if(Object.keys(this.words).includes(e))return"tu"==this.$inertia.page.props.lang?this.words[e].en:this.words[e][this.$inertia.page.props.lang]}}};const r=(0,a(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"c0227642",null).exports},603:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const n={name:"delete_item",methods:{delete_item:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("ar"==window.vm.$inertia.page.props.lang)var i="هل أنت متأكد من عملية المسح",o="نعم أنا متأكد",s="إلغاء";else i="are you sure from delete operation",o="yes",s="cancel";Swal.fire({title:i,icon:"info",showCancelButton:!0,confirmButtonColor:"#035397",cancelButtonColor:"#aaa",confirmButtonText:o,cancelButtonText:s}).then((function(i){i.isConfirmed&&axios.post("/deleteitem",{table:e,id:t}).then((function(e){Toast.fire({icon:"success",title:e.data.message[0]}),1==n&&$(".modal").modal("hide"),0!=r&&window.vm.$inertia.visit(r),""!=a&&(console.log($(a)),$(a).remove())}))}))}}};a(6247);const r=(0,a(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},2671:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});function n(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const i={name:"tableData",data:function(){return{tableObj:null}},mounted:function(){var e=this.table_url,t=this.table_requested_table,a=this.table_columns,r=this;if(console.log(r),"ar"==this.$inertia.page.props.lang){if(window.location.href.indexOf("definitions")>=0||"/"==window.location.pathname)var i=window.location.origin+"/ar.json";else i="https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json";console.log(i)}else i="https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json";jQuery(document).ready((function(o){var s=null;s=o(".myTable").DataTable({order:[[1,"desc"]],language:{url:i},serverSide:!0,ajax:function(a,i,o){var l=new Object;if(document.querySelectorAll("thead tr td input").length>0){var d,u=n(document.querySelectorAll("thead tr td input"));try{for(u.s();!(d=u.n()).done;){var c=d.value;l[c.name]=c.value}}catch(e){u.e(e)}finally{u.f()}}axios.post(e+"?page="+(Number(s.page.info().page)+1),{length:a.length,table:t,searches:l}).then((function(e){r.page_data=e.data.data,i({recordsTotal:e.data.total,recordsFiltered:e.data.total,data:e.data.data})}))},columns:a}),r.tableObj=s,window.table_data=s}))}};const o=(0,a(1900).Z)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"127e4785",null).exports},5173:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(8824),r=a(2671),i=a(7412),o=a(603),s=a(629);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c={name:"contact_us",mixins:[r.Z,i.Z,o.Z],props:["main_title","handling_data"],data:function(){return{modal_data:[],table_url:"/paginate-data",table_requested_table:"contacts",table_columns:null,page_data:null}},mounted:function(){var e=this,t=document.querySelectorAll("table thead tr td:not(:last-of-type)");for(var a in t)isNaN(a)||(t[a].innerHTML='<input class="form-control" placeholder="'+t[a].textContent.trim()+'" name="'+Object.keys(this.handling_data.table_head_keys)[a]+'">');$("table").on("click"," tbody td:last-of-type .actions span:last-of-type",(function(){var t=$(this).parent().parent().parent();e.delete_item("contacts",$(this).attr("row_id"),t)}))},methods:d(d({},(0,s.nv)({save_ad:"ads/save_ad"})),(0,s.OI)({update_data:"ads/update_data",inilaize_data:"ads/inilalize_data"})),created:function(){this.inilaize_data(this.handling_data.data);this.table_columns=[{data:"name"},{data:"email",render:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"}},{data:"phone",render:function(e){return'<a  href="tel:'+e+'" >'+e+"</a>"}},{data:"reason"},{data:"message"},{data:"id",render:function(e,t,a){return"<p class='actions row_"+e+"'><span class='delete delete_jquery' row_id='"+e+"' table='definisions'><i class='ri-close-line'></i></span></p>"}}]},components:{SideNavbarComponent:n.Z}};a(4386);const f=(0,a(1900).Z)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("side-navbar-component"),e._v(" "),a("div",{staticClass:"content users table-data-page"},[a("div",{staticClass:"container mb-4"},[a("p",{staticClass:"d-flex mb-3 align-items-center justify-content-between main-title-toggle"},[a("span",[e._v(e._s(e.main_title))])]),e._v(" "),a("div",{staticClass:"overflow-auto"},[a("table",{staticClass:"myTable table text-center table-bordered table-striped table-hover"},[a("thead",[a("tr",e._l(e.handling_data.table_head_keys,(function(t){return a("td",{key:t},[e._v("\n                            "+e._s(t)+"\n                        ")])})),0)]),e._v(" "),a("tbody")])])])])],1)}),[],!1,null,"4f44fc96",null).exports},1900:(e,t,a)=>{"use strict";function n(e,t,a,n,r,i,o,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=a,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):r&&(l=s?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}a.d(t,{Z:()=>n})},6247:(e,t,a)=>{var n=a(4435);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("7093795c",n,!0,{})},7400:(e,t,a)=>{var n=a(3965);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("48e64ec1",n,!0,{})},4386:(e,t,a)=>{var n=a(5126);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5346).Z)("212b4443",n,!0,{})}}]);
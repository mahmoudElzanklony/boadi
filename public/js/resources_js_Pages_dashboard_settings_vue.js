(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_dashboard_settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/dashboard/SideNavbarComponent */ "./resources/js/components/dashboard/SideNavbarComponent.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "settings",
  props: ['keywords', 'main_title', 'countries'],
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_1__.default],
  components: {
    SideNavbarComponent: _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    'save_settings': 'settings_dash/save_settings'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideNavbarComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  mounted: function mounted() {
    var active_li = document.URL.split('/')[document.URL.split('/').length - 1];
    $('ul').find('li[custom="' + active_li + '"]').addClass('active');
  },
  methods: {
    toggleSideNav: function toggleSideNav() {
      $(event.target).parent().parent().toggleClass('icons_only');

      if ($(event.target).parent().parent().hasClass('icons_only')) {
        $('.dashboard .content').css('width', $(document).innerWidth() - 50);
      } else {
        $('.dashboard .content').css('width', $(document).innerWidth() - 200);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SwitchLangWord",
  data: function data() {
    return {
      words: {
        // navbar words
        Home: {
          ar: 'الرئيسية',
          en: 'Home',
          tu: ''
        },
        Profile: {
          ar: 'الملف الشخصي',
          en: 'profile',
          tu: ''
        },
        Search: {
          ar: 'أبحث',
          en: 'Search',
          tu: ''
        },
        Arabic_Language: {
          ar: 'اللغة العربية',
          en: 'Arabic Language',
          tu: ''
        },
        English_Language: {
          ar: 'اللغة الأنجليزية',
          en: 'English Language',
          tu: ''
        },
        Turkish_Language: {
          ar: 'اللغة التركية',
          en: 'Turkish Language',
          tu: ''
        },
        Help: {
          ar: 'مساعدة',
          en: 'Help',
          tu: ''
        },
        sign_in: {
          ar: 'تسجيل دخول',
          en: 'Sign in',
          tu: ''
        },
        sign_up: {
          ar: 'تسجيل حساب',
          en: 'Sign up',
          tu: ''
        },
        logout: {
          ar: 'تسجيل خروج',
          en: 'logout',
          tu: ''
        },
        registered_from_date: {
          ar: 'سجل منذ تاريخ ',
          en: 'registered from date ',
          tu: ''
        },
        activities: {
          ar: 'نشاطاتي',
          en: 'my activities',
          tu: ''
        },
        // footer words
        website: {
          ar: 'قاموس بودي',
          en: 'Boodai Dictionary',
          tu: ''
        },
        footer_info: {
          ar: 'يحتوي القاموس على ما يقرب من (15.000) خمسة عشر ألف مصطلح باللغـة الإنجليزية وما يقابلها باللغة العربية.',
          en: 'We provide more than a million terms in the accounts, you can search for anything you want with ease with the ability to download anything you want with ease',
          tu: ''
        },
        jobs: {
          ar: 'وظائف',
          en: 'Jobs',
          tu: ''
        },
        contact_us: {
          ar: 'تواصل معنا',
          en: 'ContactUs',
          tu: ''
        },
        site_map: {
          ar: 'خريطة الموقع',
          en: 'Sitemap',
          tu: ''
        },
        conditions: {
          ar: 'الاحكام',
          en: 'Terms',
          tu: ''
        },
        searches: {
          ar: 'أبحاث',
          en: 'Market Research',
          tu: ''
        },
        big_photo_upload: {
          ar: 'مساحه الصوره المرفوعه اكبر من 2 ميجا',
          en: 'size of photo uploaded is more than 2 mega',
          tu: ''
        },
        upload_good_image: {
          ar: 'ارفع صورة صحيحة',
          en: 'Upload good image',
          tu: ''
        },
        big_photo_upload_error_preview: {
          ar: 'لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا',
          en: 'we cant preview photo uploaded that size is more than 2 mega',
          tu: ''
        },
        you_exceed_number_of_uploaded: {
          ar: 'لقد تجاوزت عدد الصور المسموح به للرفع',
          en: 'you exceed number of photos uploaded',
          tu: ''
        },
        see_more: {
          ar: 'رؤيه المزيد',
          en: 'See more',
          tu: ''
        },
        added_to_fav: {
          ar: 'تم الأضافه الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        do_you_need_help: {
          ar: 'هل تحتاج الي مساعده',
          en: 'Do you need help',
          tu: ''
        },
        registered_at_date: {
          ar: 'سجل في تاريخ',
          en: 'Registered at date',
          tu: ''
        },
        request_contact: {
          ar: 'طلب اتصال',
          en: 'Request contact',
          tu: ''
        },
        personal_info: {
          ar: 'حسابي',
          en: 'My Account',
          tu: ''
        },
        select_status: {
          ar: 'اختر الحالة',
          en: 'Select Status',
          tu: ''
        },
        live_listings: {
          ar: 'نشطة',
          en: 'Live',
          tu: ''
        },
        rejected_listings: {
          ar: 'مرفوضة',
          en: 'Rejected',
          tu: ''
        },
        expired_listings: {
          ar: 'منتهية',
          en: 'Expired',
          tu: ''
        },
        pending_listings: {
          ar: 'معلقة',
          en: 'Pending',
          tu: ''
        },
        payment_done: {
          ar: 'تم الدفع',
          en: 'payment done',
          tu: ''
        },
        pending: {
          ar: 'معلقة',
          en: 'pending',
          tu: ''
        },
        statistics: {
          ar: 'احصائياتي',
          en: 'Statistics',
          tu: ''
        },
        my_favourite: {
          ar: 'المفضلة',
          en: 'Favourite',
          tu: ''
        },
        my_notes: {
          ar: 'ملاحظاتي',
          en: 'My Notes',
          tu: ''
        },
        notifications: {
          ar: 'الأشعارات',
          en: 'notifications',
          tu: ''
        },
        settings: {
          ar: 'الاعدادت',
          en: 'settings',
          tu: ''
        },
        added_to_fav_successfully: {
          ar: 'تم الأضافة الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav_successfully: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        about_us: {
          ar: 'عن المؤلف',
          en: 'About Author',
          tu: ''
        },
        about_book: {
          ar: 'عن القاموس',
          en: 'About Dictionary',
          tu: ''
        },
        ads: {
          ar: 'اعلانات',
          en: 'Ads',
          tu: ''
        },
        please_contact_with_this_number: {
          ar: 'برجاء التواصل مع الرقم',
          en: 'please contact with this number',
          tu: ''
        },
        contact_with_us: {
          ar: 'يمكنك التواصل معنا هنا',
          en: 'you can contact with us',
          tu: ''
        },
        sale: {
          ar: 'بيع',
          en: 'Sale'
        },
        share_this_link: {
          ar: 'مشاركة هذا الرابط',
          en: 'Share this link',
          tu: ''
        },
        close: {
          ar: 'اغلاق',
          en: 'Close',
          tu: ''
        },
        // dashboard words
        dashboard: {
          ar: 'الاداره',
          en: 'Dashboard'
        },
        users: {
          ar: 'المستخدمين',
          en: 'Users',
          tu: ''
        },
        chart: {
          ar: 'الإحصائيات',
          en: 'Chart',
          tu: ''
        },
        reports: {
          ar: 'التقارير',
          en: 'Reports',
          tu: ''
        },
        client_support: {
          ar: 'الدعم الفني',
          en: 'client support',
          tu: ''
        },
        are_you_sure_about_approve: {
          ar: 'هل انت متأكد من عملية الموافقة',
          en: 'Are you sure from approving this request',
          tu: ''
        },
        are_you_sure_about_delete: {
          ar: 'هل انت متأكد من عملية المسح',
          en: 'Are you sure from delete operation',
          tu: ''
        },
        in_case_you_approved_listing_will_be_at_public: {
          ar: 'في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة',
          en: 'In case you approved this request , the request will be available to any one to see it',
          tu: ''
        },
        in_case_you_delete_you_cant_retrieve_it: {
          ar: 'في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري',
          en: 'In case you delete you cant retrieve data another time',
          tu: ''
        },
        yes_iam_sure: {
          ar: 'نعم انا متأكد',
          en: 'yes iam sure',
          tu: ''
        },
        cancel: {
          ar: 'إلغاء',
          en: 'Cancel',
          tu: ''
        },
        approved_done: {
          ar: 'تمت الموافقة',
          en: 'Approved !',
          tu: ''
        },
        deleted_done: {
          ar: 'تم المسح',
          en: 'Deleted !',
          tu: ''
        },
        approved_done_successfully: {
          ar: 'تمت عملية الموافقة بنجاح',
          en: 'Approved done successfully',
          tu: ''
        },
        deleted_done_successfully: {
          ar: 'تمت عملية المسح بنجاح',
          en: 'Deleted done successfully',
          tu: ''
        },
        add_new_item: {
          ar: 'إضافة عنصر جديد',
          en: 'Add new Item',
          tu: ''
        },
        update_new_item: {
          ar: 'تعديل بيانات ',
          en: 'update info of',
          tu: ''
        },
        upload_image: {
          ar: 'أرفع صورة',
          en: 'upload image',
          tu: ''
        },
        upload_files: {
          ar: 'رفع الملفات',
          en: 'upload files',
          tu: ''
        },
        upload_file: {
          ar: 'أرفع الملف',
          en: 'Upload file',
          tu: ''
        },
        upload_quotation_file: {
          ar: 'ارفع ملف الكوتيشن',
          en: 'upload quotation file',
          tu: ''
        },
        upload_product_file: {
          ar: 'ارفع ملف اضافه المنتجات',
          en: 'upload file of upload products',
          tu: ''
        },
        upload_images: {
          ar: 'أرفع الصور',
          en: 'upload images',
          tu: ''
        },
        appearance: {
          ar: 'عملية الظهور',
          en: 'appearance',
          tu: ''
        },
        actions: {
          ar: 'الأوامر',
          en: 'actions',
          tu: ''
        },
        update_status_successfully: {
          ar: 'تم تحديث الحالة بنجاح',
          en: 'Status updated Successfully',
          tu: ''
        },
        select_year: {
          ar: 'أختر السنة',
          en: 'Select year',
          tu: ''
        },
        area: {
          ar: 'منطقة',
          en: 'Area',
          tu: ''
        },
        city: {
          ar: 'مدينة',
          en: 'City',
          tu: ''
        },
        government: {
          ar: 'محافظة',
          en: 'Government',
          tu: ''
        },
        country: {
          ar: 'دولة',
          en: 'Country',
          tu: ''
        },
        select_country: {
          ar: 'اختر الدولة',
          en: 'Select country',
          tu: ''
        },
        select_government: {
          ar: 'اختر المحافظة',
          en: 'Select government',
          tu: ''
        },
        select_city: {
          ar: 'اختر المدينة',
          en: 'Select city',
          tu: ''
        },
        select_area: {
          ar: 'اختر المنطقة',
          en: 'Select area',
          tu: ''
        },
        visible: {
          ar: 'متاح',
          en: 'visible',
          tu: ''
        },
        not_visible: {
          ar: 'غير متاح',
          en: 'not visible',
          tu: ''
        },
        save: {
          ar: 'حفظ',
          en: 'Save',
          tu: ''
        },
        send: {
          ar: 'أرسال',
          en: 'Send',
          tu: ''
        },
        name: {
          ar: 'الأسم',
          en: 'Name',
          tu: ''
        },
        add_new_question: {
          ar: 'أضف سؤال جديد',
          en: 'Add new question',
          tu: ''
        },
        filter: {
          ar: 'فلترة',
          en: 'Filter',
          tu: ''
        },
        related_to: {
          ar: 'تابعة ل',
          en: 'Related to',
          tu: ''
        },
        block: {
          ar: 'محظور',
          en: 'Block',
          tu: ''
        },
        yes: {
          ar: 'نعم',
          en: 'Yes',
          tu: ''
        },
        no: {
          ar: 'لا',
          en: 'No',
          tu: ''
        },
        leave_password: {
          ar: 'أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها',
          en: '',
          tu: ''
        },
        press_here: {
          ar: 'أضغط هنا',
          en: 'Press Here',
          tu: ''
        },
        select_best_choice: {
          ar: 'أختر ما يناسبك',
          en: 'Select best choice',
          tu: ''
        },
        search_for_you_best: {
          ar: 'ابحث عن ما يناسبك',
          en: 'search about anything',
          tu: ''
        },
        "in": {
          ar: 'في',
          en: 'in',
          tu: ''
        },
        "for": {
          ar: 'ل',
          en: 'for ',
          tu: ''
        },
        currency: {
          ar: 'دولار',
          en: 'dollar',
          tu: ''
        },
        you_should_login: {
          ar: 'من فضلك سجل دخول اولا',
          en: 'You should login first',
          tu: ''
        },
        seller_phone: {
          ar: 'رقم تليفون البائع',
          en: 'Phone Seller',
          tu: ''
        },
        next: {
          ar: 'التالي',
          en: 'next',
          tu: ''
        },
        prev: {
          ar: 'السابق',
          en: 'previous',
          tu: ''
        },
        select_best_for_you: {
          ar: 'اختر ما يناسبك',
          en: 'Select what you want',
          tu: ''
        },
        problem: {
          ar: 'مشكلة',
          en: 'Problem',
          tu: ''
        },
        thanks: {
          ar: 'شكر و تقدير',
          en: 'thanks',
          tu: ''
        },
        development: {
          ar: 'تطوير فني',
          en: 'Development',
          tu: ''
        },
        add_another_item: {
          ar: 'اضافه عنصر جديد',
          en: 'Add another item',
          tu: ''
        },
        please_enter_all_required_data: {
          ar: 'من فضلك ادخل قيم للبيانات الاجبارية',
          en: 'Please enter all required inputs',
          tu: ''
        },
        print_bill: {
          ar: 'طباعه الفاتورة',
          en: 'Print bill',
          tu: ''
        },
        please_wait_until_finish_processing: {
          ar: 'من فضلك انتظر حتي يتم اكتمال التحميل',
          en: 'please wait until finish processing',
          tu: ''
        },
        definitions: {
          ar: 'تعريفات',
          en: 'definitions',
          tu: ''
        },
        uploadfile: {
          ar: 'رفع الملف',
          en: 'upload file',
          tu: ''
        },
        download_this_template: {
          ar: 'يرجي تحميل هذه التمبلت و تعبئتها بالمصلحات التي تريدها',
          en: 'download this template'
        }
      }
    };
  },
  methods: {
    switchWord: function switchWord(word) {
      // find word first
      if (Object.keys(this.words).includes(word)) {
        // yes found it  =======> you passed english
        if (this.$inertia.page.props.lang == "tu") {
          return this.words[word]['en'];
        } else {
          return this.words[word][this.$inertia.page.props.lang];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings h2[data-v-58cff8f2] {\n  padding-top: 45px;\n}\n.settings form[data-v-58cff8f2] {\n  margin: 20px auto;\n}\n.alert[data-v-58cff8f2] {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ar .orange_class[data-v-218a8ca0]:hover, .ar .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .ar li[data-v-218a8ca0]:hover {\n  padding-right: 10px;\n}\n.ar .orange_class[data-v-218a8ca0]::before, .ar .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .ar li[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.ar .side-bar-nav[data-v-218a8ca0] {\n  right: 0px;\n}\n.ar .side-bar-nav > span[data-v-218a8ca0] {\n  right: 5px;\n}\n.ar .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-left: 10px;\n}\n.ar .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.en .orange_class[data-v-218a8ca0]:hover, .en .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .en li[data-v-218a8ca0]:hover {\n  padding-left: 10px;\n}\n.en .orange_class[data-v-218a8ca0]::before, .en .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .en li[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.en .side-bar-nav[data-v-218a8ca0] {\n  left: 0px;\n}\n.en .side-bar-nav > span[data-v-218a8ca0] {\n  left: 5px;\n}\n.en .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-right: 10px;\n}\n.en .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.orange_class[data-v-218a8ca0]::before, .side-bar-nav ul li[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  transition: 0.5s all;\n  background-color: #43aa8c;\n  width: 4px;\n}\n.orange_class[data-v-218a8ca0]:hover::before, .side-bar-nav ul li[data-v-218a8ca0]:hover::before {\n  height: 100%;\n}\n.orange_class:hover span[data-v-218a8ca0], .side-bar-nav ul li:hover span[data-v-218a8ca0] {\n  color: #43aa8c;\n}\n.side-bar-nav[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: fixed;\n  background-color: #eeeeee38;\n  width: 200px;\n  height: 100%;\n  padding: 0px !important;\n}\n.side-bar-nav > span[data-v-218a8ca0] {\n  position: absolute;\n  top: 14px;\n  color: #03071E;\n}\n.side-bar-nav .logo img[data-v-218a8ca0] {\n  padding-top: 10px;\n  width: 115px;\n  display: block;\n  margin: auto;\n}\n.side-bar-nav ul[data-v-218a8ca0] {\n  padding-top: 50px;\n  height: calc(100% - 50px);\n  overflow: auto;\n}\n.side-bar-nav ul li[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: relative;\n}\n.side-bar-nav ul li a[data-v-218a8ca0] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.side-bar-nav ul li a span[data-v-218a8ca0] {\n  color: #03071E;\n}\n.side-bar-nav ul li.active span[data-v-218a8ca0] {\n  color: #43aa8c;\n}\n.side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  transition: 0.5s all;\n  background-color: #43aa8c;\n  width: 4px;\n  height: 100%;\n}\n.side-bar-nav ul li[data-v-218a8ca0]:not(:last-of-type) {\n  border-bottom: 1px solid #eeeeee;\n}\n.side-bar-nav.icons_only[data-v-218a8ca0] {\n  width: 50px;\n}\n.side-bar-nav.icons_only > span[data-v-218a8ca0] {\n  right: 10px;\n}\n.side-bar-nav.icons_only .logo img[data-v-218a8ca0] {\n  display: none;\n}\n.side-bar-nav.icons_only ul li a[data-v-218a8ca0] {\n  align-items: center;\n  justify-content: center;\n}\n.side-bar-nav.icons_only ul li a span[data-v-218a8ca0]:not(:first-of-type) {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/dashboard/settings.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/dashboard/settings.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=58cff8f2&scoped=true& */ "./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& */ "./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58cff8f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dashboard/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "218a8ca0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SideNavbarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue":
/*!***********************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");
/* harmony import */ var _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=script&lang=js& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62c21d50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/SwitchLangWord.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_58cff8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=58cff8f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_58cff8f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=template&id=58cff8f2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard" },
    [
      _c("side-navbar-component"),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container settings" }, [
          _c("h2", { staticClass: "text-center" }, [
            _vm._v(_vm._s(_vm.main_title)),
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { method: "post" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.save_settings.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c("input", {
                    attrs: { type: "hidden", name: "id" },
                    domProps: { value: _vm.$page.props.user["id"] },
                  }),
                  _vm._v(" "),
                  _vm._l(Object.keys(_vm.keywords), function (i, index) {
                    return _c("div", { key: index, staticClass: "col-6" }, [
                      _c("div", { staticClass: "form-group input-icon" }, [
                        _c("label", [_vm._v(_vm._s(_vm.keywords[i]))]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            name: i,
                            type: i == "password" ? "password" : "text",
                            required: i != "password",
                            placeholder:
                              i == "password"
                                ? _vm.switchWord("leave_password")
                                : "",
                          },
                          domProps: { value: _vm.$page.props.user[i] },
                        }),
                        _vm._v(" "),
                        i == "password"
                          ? _c("span", [
                              _c("i", {
                                staticClass:
                                  "ri-eye-line show_password cursor-pointer",
                              }),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", { staticClass: "alert-danger alert" }),
                      ]),
                    ])
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  staticClass: "btn  btn-primary",
                  attrs: { type: "submit" },
                  domProps: { value: _vm.switchWord("save") },
                }),
              ]),
            ]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "side-bar-nav" }, [
    _c("span", { staticClass: "cursor-pointer" }, [
      _vm.$page.props.lang == "ar"
        ? _c("i", {
            staticClass: "ri-menu-3-line",
            on: { click: _vm.toggleSideNav },
          })
        : _c("i", {
            staticClass: "ri-menu-2-line",
            on: { click: _vm.toggleSideNav },
          }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "logo" },
      [
        _c("inertia-link", { attrs: { href: "/" } }, [
          _c("img", { attrs: { src: "/images/logo.png" } }),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c("ul", [
      _c(
        "li",
        { attrs: { custom: "dashboard" } },
        [
          _c("inertia-link", { attrs: { href: "/" } }, [
            _c("span", [_c("i", { staticClass: "ri-home-2-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("Home")))]),
            _vm._v(" "),
            _c("span"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "settings" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/settings" } }, [
            _c("span", [_c("i", { staticClass: "ri-settings-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("settings")))]),
            _vm._v(" "),
            _c("span"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "definitions" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/definitions" } }, [
            _c("span", [_c("i", { staticClass: "ri-book-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("definitions")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "uploadfile" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/uploadfile" } }, [
            _c("span", [_c("i", { staticClass: "ri-upload-2-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("uploadfile")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "ads" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/ads" } }, [
            _c("span", [_c("i", { staticClass: "ri-image-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("ads")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "contact_us" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/contactus" } }, [
            _c("span", [_c("i", { staticClass: "ri-message-3-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("contact_us")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
       false
        ? 0
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/settings.vue?vue&type=style&index=0&id=58cff8f2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("374e2717", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("de938f0a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_dashboard_definitions_vue"],{

/***/ "./node_modules/@voerro/vue-tagsinput/src/main.js":
/*!********************************************************!*\
  !*** ./node_modules/@voerro/vue-tagsinput/src/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VoerroTagsInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoerroTagsInput.vue */ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue");


window.VoerroTagsInput = _VoerroTagsInput_vue__WEBPACK_IMPORTED_MODULE_0__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VoerroTagsInput_vue__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/dashboard/SideNavbarComponent */ "./resources/js/components/dashboard/SideNavbarComponent.vue");
/* harmony import */ var _mixin_tableData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixin/tableData */ "./resources/js/mixin/tableData.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
/* harmony import */ var _mixin_delete_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixin/delete_item */ "./resources/js/mixin/delete_item.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @voerro/vue-tagsinput */ "./node_modules/@voerro/vue-tagsinput/src/main.js");
/* harmony import */ var _voerro_vue_tagsinput_dist_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @voerro/vue-tagsinput/dist/style.css */ "./node_modules/@voerro/vue-tagsinput/dist/style.css");
/* harmony import */ var _voerro_vue_tagsinput_dist_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_voerro_vue_tagsinput_dist_style_css__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  name: "definitions",
  mixins: [_mixin_tableData__WEBPACK_IMPORTED_MODULE_1__.default, _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_2__.default, _mixin_delete_item__WEBPACK_IMPORTED_MODULE_3__.default],
  props: ['main_title', 'handling_data'],
  data: function data() {
    return {
      modal_data: [],
      table_url: '/paginate-data',
      table_requested_table: 'definisions_dash',
      table_columns: null,
      page_data: null,
      item: null,
      tags_inputs: this.handling_data['tags']
      /*selectedTags: [
          { key: 'web-development', value: 'Web Development' },
          { key: 'php', value: 'PHP' },
          { key: 'javascript', value: 'JavaScript' },
      ],*/

    };
  },
  mounted: function mounted() {
    var component = this;
    var all_thead_tds = document.querySelectorAll('table thead tr td:not(:last-of-type)');

    for (var input in all_thead_tds) {
      if (!isNaN(input)) {
        all_thead_tds[input].innerHTML = '<input class="form-control" placeholder="' + all_thead_tds[input].textContent.trim() + '" name="' + Object.keys(this.handling_data['table_head_keys'])[input] + '">';
      }
    }

    $('table').on('click', ' tbody td:last-of-type .actions span:first-of-type', function () {
      var id = $(this).find('i').attr('row_id');
      var item = component.page_data.find(function (e) {
        return e['id'] == id;
      });
      component.update_item(item);
      $('.modal').modal('show');
    });
    $('table').on('click', ' tbody td:last-of-type .actions span:last-of-type', function () {
      var row = $(this).parent().parent().parent();
      component.delete_item('definisions', $(this).attr('row_id'), row);
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)({
    'vuex_data': 'definitions/get_data'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)({
    'save_definition': 'definitions/save_brand'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapMutations)({
    'update_data': 'definitions/update_data',
    'inilaize_data': 'definitions/inilalize_data'
  })), {}, {
    update_item: function update_item(e) {
      if (e['tags'].length > 0) {
        var tags_input = e['tags'];
        delete e['tags'];
        this.item = e;
        this.item['tags'] = [];

        var _iterator = _createForOfIteratorHelper(tags_input),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tag = _step.value;
            this.item['tags'].push({
              key: tag['id'],
              value: tag['name']
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this.item = e;
      }
    }
  }),
  created: function created() {
    this.inilaize_data(this.handling_data['data']);
    this.modal_data = this.handling_data['data_model'];
    var component = this;
    this.table_columns = [{
      "data": "term_in_arabic"
    }, {
      "data": "term_in_english",
      "render": function render(data, type, row) {
        return '<p class="d-flex align-items-center justify-content-between"><span>' + data + '</span><span class="table-icon"><i class="ri-volume-down-line" ></i></span></p>';
      }
    }, {
      "data": "tags",
      "render": function render(data, type, row) {
        var output = '<p class="d-flex align-items-center justify-content-between">';

        var _iterator2 = _createForOfIteratorHelper(row['tags']),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var tag = _step2.value;
            output += '<span class="tag">' + tag['name'] + '</span>';
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        output += '</p>';
        return output;
      }
    }, {
      "data": "expression"
    }, {
      "data": "id",
      "render": function render(data, type, row) {
        return "<p class='actions row_" + data + "'><span><i  row_id='" + data + "' class='ri-edit-line'></i></span><span class='delete delete_jquery' row_id='" + data + "' table='definisions'><i class='ri-close-line'></i></span></p>";
      }
    }];
  },
  components: {
    SideNavbarComponent: _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default,
    VoerroTagsInput: _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_4__.default
  }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  name: "delete_item",
  methods: {
    delete_item: function delete_item(table, id) {
      var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var closeall = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (window.vm.$inertia.page.props.lang == 'ar') {
        var msg = 'هل أنت متأكد من عملية المسح';
        var confirm = 'نعم أنا متأكد';
        var cancel = 'إلغاء';
      } else {
        var msg = 'are you sure from delete operation';
        var confirm = 'yes';
        var cancel = 'cancel';
      }

      Swal.fire({
        title: msg,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#035397',
        cancelButtonColor: '#aaa',
        confirmButtonText: confirm,
        cancelButtonText: cancel
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/deleteitem', {
            table: table,
            id: id
          }).then(function (e) {
            /*if(table == 'listings_infos'){
                $(target).parent().parent().parent().parent().remove();
            }else {
                $(target).parent().parent().remove();
            }*/
            Toast.fire({
              icon: 'success',
              title: e.data.message[0]
            });

            if (closeall == true) {
              $('.modal').modal('hide');
            }

            if (url != false) {
              window.vm.$inertia.visit(url);
            }

            if (selector != '') {
              console.log($(selector));
              $(selector).remove();
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "tableData",
  data: function data() {
    return {
      tableObj: null
    };
  },
  mounted: function mounted() {
    var url_request = this.table_url;
    var table_requested = this.table_requested_table;
    var columns = this.table_columns;
    var this_component = this;
    console.log(this_component);

    if (this.$inertia.page.props.lang == 'ar') {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/ar.json';
      var export_selected = 'استيراد المحدد';
    } else {
      var url = 'https://cdn.datatables.net/plug-ins/1.11.4/i18n/en-gb.json';
      var export_selected = 'Export selected';
    }

    jQuery(document).ready(function ($) {
      var data_table = null;
      data_table = $('.myTable').DataTable({
        order: [[1, "desc"]],
        language: {
          url: url
        },
        serverSide: true,
        ajax: function ajax(data, callback, settings) {
          // check if thead has searches
          var searches = new Object();

          if (document.querySelectorAll('thead tr td input').length > 0) {
            var _iterator = _createForOfIteratorHelper(document.querySelectorAll('thead tr td input')),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var input = _step.value;
                searches[input.name] = input.value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          axios.post(url_request + '?page=' + (Number(data_table.page.info().page) + 1), {
            length: data.length,
            table: table_requested,
            searches: searches
          }).then(function (e) {
            this_component.page_data = e.data.data;
            callback({
              recordsTotal: e.data.total,
              recordsFiltered: e.data.total,
              data: e.data.data
            });
          });
        },
        columns: columns //  dom: 'lBfrtip',

        /*buttons: [
            'copy', 'csv', 'excel', 'print',
            /!*{
                extend: 'excel',
                text:export_selected,
                exportOptions: {
                    columns: ':visible:not(.not-exported)',
                    rows: '.selected',
                }
            }*!/
        ]*/

      });
      this_component.tableObj = data_table;
      window.table_data = data_table;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/@voerro/vue-tagsinput/dist/style.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/@voerro/vue-tagsinput/dist/style.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The input */\n.tags-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.tags-input input {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background: transparent;\n    border: none;\n}\n\n.tags-input input:focus {\n    outline: none;\n}\n\n.tags-input input[type=\"text\"] {\n    color: #495057;\n}\n\n.tags-input-wrapper-default {\n    padding: .5em .25em;\n\n    background: #fff;\n\n    border: 1px solid transparent;\n    border-radius: .25em;\n    border-color: #dbdbdb;\n}\n\n.tags-input-wrapper-default.active {\n    border: 1px solid #8bbafe;\n    -webkit-box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);\n            box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);\n    outline: 0 none;\n}\n\n/* The tag badges & the remove icon */\n.tags-input span {\n    margin-right: 0.3em;\n}\n\n.tags-input-remove {\n    cursor: pointer;\n    position: absolute;\n    display: inline-block;\n    right: 0.3em;\n    top: 0.3em;\n    padding: 0.5em;\n    overflow: hidden;\n}\n\n.tags-input-remove:focus {\n    outline: none;\n}\n\n.tags-input-remove:before, .tags-input-remove:after {\n    content: '';\n    position: absolute;\n    width: 75%;\n    left: 0.15em;\n    background: #5dc282;\n    \n    height: 2px;\n    margin-top: -1px;\n}\n\n.tags-input-remove:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.tags-input-remove:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n/* Tag badge styles */\n.tags-input-badge {\n    position: relative;\n    display: inline-block;\n    padding: 0.25em 0.4em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: 0.25em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tags-input-badge-pill {\n    padding-right: 1.25em;\n    padding-left: 0.6em;\n    border-radius: 10em;\n}\n.tags-input-badge-pill.disabled {\n    padding-right: 0.6em;\n}\n\n.tags-input-badge-selected-default {\n    color: #212529;\n    background-color: #f0f1f2;\n}\n\n/* Typeahead */\n.typeahead-hide-btn {\n    color: #999 !important;\n    font-style: italic;\n}\n\n/* Typeahead - badges */\n.typeahead-badges > span {\n    margin-top: .5em;\n}\n\n.typeahead-badges > span {\n    cursor: pointer;\n    margin-right: 0.3em;\n}\n\n/* Typeahead - dropdown */\n.typeahead-dropdown {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    z-index: 1000;\n}\n\n.typeahead-dropdown li {\n    padding: .25em 1em;\n    cursor: pointer;\n}\n\n/* Typeahead elements style/theme */\n.tags-input-typeahead-item-default {\n    color: #fff;\n    background-color: #343a40;\n}\n\n.tags-input-typeahead-item-highlighted-default {\n    color: #fff;\n    background-color: #007bff !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.swal2-container{\n    z-index: 99999999999999999999999999;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".alert-danger[data-v-80a85368] {\n  display: none;\n}", ""]);
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

/***/ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue":
/*!********************************************************************!*\
  !*** ./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoerroTagsInput.vue?vue&type=template&id=d29272ca& */ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca&");
/* harmony import */ var _VoerroTagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoerroTagsInput.vue?vue&type=script&lang=js& */ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VoerroTagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
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
    props: {
        elementId: String,

        inputId: String,

        existingTags: {
            type: Array,
            default: () => {
                return [];
            }
        },

        value: {
            type: Array,
            default: () => {
                return [];
            }
        },

        idField: {
            type: String,
            default: 'key',
        },

        textField: {
            type: String,
            default: 'value',
        },

        displayField: {
          type: String,
          default: null,
        },

        valueFields: {
            type: String,
            default: null,
        },

        disabled: {
            type: Boolean,
            default: false
        },

        typeahead: {
            type: Boolean,
            default: false
        },

        typeaheadStyle: {
            type: String,
            default: 'badges'
        },

        typeaheadActivationThreshold: {
            type: Number,
            default: 1
        },

        typeaheadMaxResults: {
            type: Number,
            default: 0
        },

        typeaheadAlwaysShow: {
            type: Boolean,
            default: false
        },

        typeaheadShowOnFocus: {
            type: Boolean,
            default: true
        },

        typeaheadHideDiscard: {
            type: Boolean,
            default: false
        },

        typeaheadUrl: {
            type: String,
            default: ''
        },

        typeaheadCallback: {
            type: Function,
            default: null
        },

        placeholder: {
            type: String,
            default: 'Add a tag'
        },

        discardSearchText: {
            type: String,
            default: 'Discard Search Results'
        },

        limit: {
            type: Number,
            default: 0
        },

        hideInputOnLimit: {
            type: Boolean,
            default: false
        },

        onlyExistingTags: {
            type: Boolean,
            default: false
        },

        deleteOnBackspace: {
            type: Boolean,
            default: true
        },

        allowDuplicates: {
            type: Boolean,
            default: false
        },

        validate: {
            type: Function,
            default: () => true
        },

        addTagsOnComma: {
            type: Boolean,
            default: false
        },

        addTagsOnSpace: {
            type: Boolean,
            default: false
        },

        addTagsOnBlur: {
            type: Boolean,
            default: false
        },

        wrapperClass: {
            type: String,
            default: 'tags-input-wrapper-default'
        },

        sortSearchResults: {
            type: Boolean,
            default: true
        },

        caseSensitiveTags: {
            type: Boolean,
            default: false
        },

        beforeAddingTag: {
            type: Function,
            default: () => true
        },

        beforeRemovingTag: {
            type: Function,
            default: () => true
        },
    },

    data() {
        return {
            badgeId: 0,
            tags: [],

            input: '',
            oldInput: '',
            hiddenInput: '',

            searchResults: [],
            searchSelection: 0,

            selectedTag: -1,

            isActive: false,
            composing: false,
        };
    },

    created () {
        this.typeaheadTags = this.cloneArray(this.existingTags);

        this.tagsFromValue();

        if (this.typeaheadAlwaysShow) {
            this.searchTag(false);
        }
    },

    mounted () {
        // Emit an event
        this.$emit('initialized');

        document.addEventListener('click', (e) => {
            if (e.target !== this.$refs['taginput']) {
                this.clearSearchResults();
            }
        });
    },

    computed: {
        hideInputField() {
            return (this.hideInputOnLimit && this.limit > 0 && this.tags.length >= this.limit) || this.disabled;
        }
    },

    watch: {
        input(newVal, oldVal) {
            this.searchTag(false);

            if (newVal.length && newVal != oldVal) {
                const diff = newVal.substring(oldVal.length, newVal.length);

                if (this.addTagsOnSpace) {
                    if (newVal.endsWith(' ')) {
                        // The space shouldn't actually be inserted
                        this.input = newVal.trim();

                        // Add the inputed tag
                        this.tagFromInput(true);
                    }
                }

                if (this.addTagsOnComma) {
                    newVal = newVal.trim();

                    if (newVal.endsWith(',')) {
                        // The comma shouldn't actually be inserted
                        this.input = newVal.substring(0, newVal.length - 1);

                        // Add the inputed tag
                        this.tagFromInput(true);
                    }
                }

                this.$emit('change', newVal);
            }
        },

        existingTags(newVal) {
            this.typeaheadTags.splice(0);

            this.typeaheadTags = this.cloneArray(newVal);

            this.searchTag();
        },

        tags() {
            // Updating the hidden input
            this.hiddenInput = JSON.stringify(this.tags);

            // Update the bound v-model value
            this.$emit('input', this.tags);
        },

        value() {
            this.tagsFromValue();
        },

        typeaheadAlwaysShow(newValue) {
            if (newValue) {
                this.searchTag(false);
            } else {
                this.clearSearchResults();
            }
        },
    },

    methods: {
        /**
         * Remove reserved regex characters from a string so that they don't
         * affect search results
         *
         * @param string
         * @returns String
         */
        escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },

        /**
         * Add a tag whether from user input or from search results (typeahead)
         *
         * @param ignoreSearchResults
         * @returns void
         */
        tagFromInput(ignoreSearchResults = false) {
            if (this.composing) return;

            // If we're choosing a tag from the search results
            if (this.searchResults.length && this.searchSelection >= 0 && !ignoreSearchResults) {
                this.tagFromSearch(this.searchResults[this.searchSelection]);

                this.input = '';
            } else {
                // If we're adding an unexisting tag
                let text = this.input.trim();

                // If the new tag is not an empty string and passes validation
                if (!this.onlyExistingTags && text.length && this.validate(text)) {
                    this.input = '';

                    // Determine if the inputted tag exists in the typeagedTags
                    // array
                    let newTag = {
                        [this.idField]: '',
                        [this.textField]: text
                    };

                    const searchQuery = this.escapeRegExp(
                        this.caseSensitiveTags
                            ? newTag[this.textField]
                            : newTag[this.textField].toLowerCase()
                    );

                    for (let tag of this.typeaheadTags) {
                        const compareable = this.escapeRegExp(
                            this.caseSensitiveTags
                                ? tag[this.textField]
                                : tag[this.textField].toLowerCase()
                        );

                        if (searchQuery === compareable) {
                            newTag = Object.assign({}, tag);

                            break;
                        }
                    }

                    this.addTag(newTag);
                }
            }
        },

        /**
         * Add a tag from search results when a user clicks on it
         *
         * @param tag
         * @returns void
         */
        tagFromSearchOnClick(tag) {
            this.tagFromSearch(tag);

            this.$refs['taginput'].blur();
        },

        /**
         * Add the selected tag from the search results.
         * Clear search results.
         * Clear user input.
         *
         * @param tag
         * @return void
         */
        tagFromSearch(tag) {
            this.clearSearchResults();
            this.addTag(tag);

            this.$nextTick(() => {
                this.input = '';
                this.oldInput = '';
            });
        },

        /**
         * Add/Select a tag
         *
         * @param tag
         * @param force
         * @returns void | Boolean
         */
        addTag(tag, force = false) {
            if (this.disabled && !force) {
                return;
            }

            if (!this.beforeAddingTag(tag)) {
                return false;
            }

            // Check if the limit has been reached
            if (this.limit > 0 && this.tags.length >= this.limit) {
                this.$emit('limit-reached');

                return false;
            }

            // Attach the tag if it hasn't been attached yet
            if (!this.tagSelected(tag)) {
                this.tags.push(tag);

                // Emit events
                this.$nextTick(() => {
                    this.$emit('tag-added', tag);
                    this.$emit('tags-updated');
                });
            }
        },

        /**
         * Remove the last tag in the tags array.
         *
         * @returns void
         */
        removeLastTag() {
            if (!this.input.length && this.deleteOnBackspace && this.tags.length) {
                this.removeTag(this.tags.length - 1);
            }
        },

        /**
         * Remove the selected tag at the specified index.
         *
         * @param index
         * @returns void
         */
        removeTag(index) {
            if (this.disabled) {
                return;
            }

            let tag = this.tags[index];

            if (!this.beforeRemovingTag(tag)) {
                return false;
            }

            this.tags.splice(index, 1);

            // Emit events
            this.$nextTick(() => {
                this.$emit('tag-removed', tag);
                this.$emit('tags-updated');

                if (this.typeaheadAlwaysShow) {
                    this.searchTag();
                }
            });
        },

        /**
         * Search the currently entered text in the list of existing tags
         *
         * @returns void | Boolean
         */
        searchTag() {
            if (this.typeahead !== true) {
                return false;
            }

            if (this.oldInput != this.input || (!this.searchResults.length && this.typeaheadActivationThreshold == 0) || this.typeaheadAlwaysShow || this.typeaheadShowOnFocus) {
                if (!this.typeaheadUrl.length && !this.typeaheadCallback) {
                    this.searchResults = [];
                }

                this.searchSelection = 0;
                let input = this.input.trim();

                if ((input.length && input.length >= this.typeaheadActivationThreshold) || this.typeaheadActivationThreshold == 0 || this.typeaheadAlwaysShow) {
                    // Find all the existing tags which include the search text
                    const searchQuery = this.escapeRegExp(
                        this.caseSensitiveTags ? input : input.toLowerCase()
                    );

                    // AJAX search
                    if (this.typeaheadCallback) {
                        this.typeaheadCallback(searchQuery)
                            .then((results) => {
                                this.typeaheadTags = results;
                            });
                    } else if (this.typeaheadUrl.length > 0) {
                        this.typeaheadTags.splice(0);
                        const xhttp = new XMLHttpRequest();
                        const that = this;

                        xhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                                that.typeaheadTags = JSON.parse(xhttp.responseText);

                                that.doSearch(searchQuery);
                            }
                        }

                        const endpoint = this.typeaheadUrl.replace(':search', searchQuery);
                        xhttp.open('GET', endpoint, true);
                        xhttp.send();
                    } else {
                        // Search the existing collection
                        this.doSearch(searchQuery);
                    }
                }

                this.oldInput = this.input;
            }
        },

        /**
         * Perform the actual search
         *
         * @param string searchQuery
         * @return void
         */
        doSearch(searchQuery) {
            this.searchResults = [];

            for (let tag of this.typeaheadTags) {
                const compareable = this.caseSensitiveTags
                    ? tag[this.textField]
                    : tag[this.textField].toLowerCase();
                const ids = this.searchResults.map((res) => (res[this.idField]));

                if (compareable.search(searchQuery) > -1 && ! this.tagSelected(tag) && ! ids.includes(tag[this.idField])) {
                    this.searchResults.push(tag);
                }
            }

            // Sort the search results alphabetically
            if (this.sortSearchResults) {
                this.searchResults.sort((a, b) => {
                    if (a[this.textField] < b[this.textField]) return -1;
                    if (a[this.textField] > b[this.textField]) return 1;

                    return 0;
                });
            }

            // Shorten Search results to desired length
            if (this.typeaheadMaxResults > 0) {
                this.searchResults = this.searchResults.slice(
                    0,
                    this.typeaheadMaxResults
                );
            }
        },

        /**
         * Hide the typeahead if there's nothing intered into the input field.
         *
         * @returns void
         */
        hideTypeahead() {
            if (! this.input.length) {
                this.$nextTick(() => {
                    this.clearSearchResults();
                });
            }
        },

        /**
         * Select the next search result in typeahead.
         *
         * @returns void
         */
        nextSearchResult() {
            if (this.searchSelection + 1 <= this.searchResults.length - 1) {
                this.searchSelection++;
            }
        },

        /**
         * Select the previous search result in typeahead.
         *
         * @returns void
         */
        prevSearchResult() {
            if (this.searchSelection > 0) {
                this.searchSelection--;
            }
        },

        /**
         * Clear/Empty the search results.
         *
         * @reutrns void
         */
        clearSearchResults(returnFocus = false) {
            this.searchResults = [];
            this.searchSelection = 0;

            if (this.typeaheadAlwaysShow) {
                this.$nextTick(() => {
                    this.searchTag();
                });
            }

            if (returnFocus) {
                this.$refs['taginput'].focus();
            }
        },

        /**
         * Clear the list of selected tags.
         *
         * @returns void
         */
        clearTags() {
            this.tags.splice(0, this.tags.length);
        },

        /**
         * Replace the currently selected tags with the tags from the value.
         *
         * @returns void
         */
        tagsFromValue() {
            if (this.value && this.value.length) {
                if (!Array.isArray(this.value)) {
                    console.error('Voerro Tags Input: the v-model value must be an array!');

                    return;
                }

                let tags = this.value;

                // Don't update if nothing has changed
                if (this.tags == tags) {
                    return;
                }

                this.clearTags();

                for (let tag of tags) {
                    this.addTag(tag, true);
                }
            } else {
                if (this.tags.length == 0) {
                    return;
                }

                this.clearTags();
            }
        },

        /**
         * Check if a tag is already selected.
         *
         * @param tag
         * @returns Boolean
         */
        tagSelected(tag) {
            if (this.allowDuplicates) {
                return false;
            }

            if (! tag) {
                return false;
            }

            const searchQuery = this.escapeRegExp(
                this.caseSensitiveTags ? tag[this.textField] : tag[this.textField].toLowerCase()
            );

            for (let selectedTag of this.tags) {
                const compareable = this.caseSensitiveTags
                    ? selectedTag[this.textField]
                    : selectedTag[this.textField].toLowerCase();

                if (selectedTag[this.idField] === tag[this.idField] && this.escapeRegExp(compareable).length == searchQuery.length && compareable.search(searchQuery) > -1) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Clear the input.
         *
         * @returns void
         */
        clearInput() {
            this.input = '';
        },

        /**
         * Process all the keyup events.
         *
         * @param e
         * @returns void
         */
        onKeyUp(e) {
            this.$emit('keyup', e);
        },

        /**
         * Process all the keydown events.
         *
         * @param e
         * @returns void
         */
        onKeyDown(e) {
            this.$emit('keydown', e);
        },

        /**
         * Process the onfocus event.
         *
         * @param e
         * @returns void
         */
        onFocus(e) {
            this.$emit('focus', e);

            this.isActive = true;
        },

        /**
         * Process the onClick event.
         *
         * @param e
         * @returns void
         */
        onClick(e) {
            this.$emit('click', e);

            this.isActive = true;

            this.searchTag();
        },

        /**
         * Process the onblur event.
         *
         * @param e
         * @returns void
         */
        onBlur(e) {
            this.$emit('blur', e)

            if (this.addTagsOnBlur) {
                // Add the inputed tag
                this.tagFromInput(true);
            }

            if (!this.typeaheadAlwaysShow) {
                this.hideTypeahead();
            } else {
                this.searchTag();
            }

            this.isActive = false;
        },

        hiddenInputValue(tag) {
            // Return all fields
            if (!this.valueFields) {
                return JSON.stringify(tag);
            }

            const fields = this.valueFields.replace(/\s/, '').split(',');

            // A single field
            if (fields.length === 1) {
                return tag[fields[0]];
            } else {
                // Specified fields
                return JSON.stringify(
                    Object.assign(
                        {},
                        ...fields.map(field => ({ [field]: tag[field] }))
                    )
                );
            }

            return JSON.stringify(tag);
        },

        getDisplayField(tag) {
            const hasDisplayField = this.displayField !== undefined
                && this.displayField !== null
                && tag[this.displayField] !== undefined
                && tag[this.displayField] !== null
                && tag[this.displayField] !== '';

            return hasDisplayField
                ? tag[this.displayField]
                : tag[this.textField];
        },

        cloneArray(arr) {
            return arr.map(el => Object.assign({}, el));
        }
    }
});


/***/ }),

/***/ "./resources/js/Pages/dashboard/definitions.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/dashboard/definitions.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.vue?vue&type=template&id=80a85368&scoped=true& */ "./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true&");
/* harmony import */ var _definitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js&");
/* harmony import */ var _definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& */ "./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _definitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "80a85368",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dashboard/definitions.vue"
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

/***/ "./resources/js/mixin/delete_item.vue":
/*!********************************************!*\
  !*** ./resources/js/mixin/delete_item.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_item.vue?vue&type=template&id=5a5de98b& */ "./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&");
/* harmony import */ var _delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete_item.vue?vue&type=script&lang=js& */ "./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&");
/* harmony import */ var _delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_item.vue?vue&type=style&index=0&lang=css& */ "./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.render,
  _delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/delete_item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/tableData.vue":
/*!******************************************!*\
  !*** ./resources/js/mixin/tableData.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableData.vue?vue&type=template&id=e3419908&scoped=true& */ "./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&");
/* harmony import */ var _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableData.vue?vue&type=script&lang=js& */ "./resources/js/mixin/tableData.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e3419908",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/tableData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./definitions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/tableData.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/mixin/tableData.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VoerroTagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./VoerroTagsInput.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_VoerroTagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VoerroTagsInput_vue_vue_type_template_id_d29272ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib/index.js??vue-loader-options!./VoerroTagsInput.vue?vue&type=template&id=d29272ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca&");


/***/ }),

/***/ "./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_template_id_80a85368_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./definitions.vue?vue&type=template&id=80a85368&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true&");


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

/***/ "./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&":
/*!***************************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_template_id_5a5de98b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=template&id=5a5de98b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&");


/***/ }),

/***/ "./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableData_vue_vue_type_template_id_e3419908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tableData.vue?vue&type=template&id=e3419908&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_delete_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_definitions_vue_vue_type_style_index_0_id_80a85368_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/@voerro/vue-tagsinput/src/VoerroTagsInput.vue?vue&type=template&id=d29272ca& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tags-input-root", staticStyle: { position: "relative" } },
    [
      _c(
        "div",
        {
          class:
            ((_obj = {}),
            (_obj[_vm.wrapperClass + " tags-input"] = true),
            (_obj["active"] = _vm.isActive),
            (_obj["disabled"] = _vm.disabled),
            _obj),
        },
        [
          _vm._l(_vm.tags, function (tag, index) {
            return _c(
              "span",
              {
                key: index,
                staticClass:
                  "tags-input-badge tags-input-badge-pill tags-input-badge-selected-default",
                class: { disabled: _vm.disabled },
              },
              [
                _vm._t(
                  "selected-tag",
                  function () {
                    return [
                      _c("span", {
                        domProps: { innerHTML: _vm._s(tag[_vm.textField]) },
                      }),
                      _vm._v(" "),
                      _c("a", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.disabled,
                            expression: "!disabled",
                          },
                        ],
                        staticClass: "tags-input-remove",
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.removeTag(index)
                          },
                        },
                      }),
                    ]
                  },
                  { tag: tag, index: index, removeTag: _vm.removeTag }
                ),
              ],
              2
            )
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.hideInputField,
                expression: "!hideInputField",
              },
            ],
            ref: "taginput",
            attrs: {
              type: "text",
              id: _vm.inputId,
              name: _vm.inputId,
              placeholder: _vm.placeholder,
            },
            domProps: { value: _vm.input },
            on: {
              input: function (e) {
                return (_vm.input = e.target.value)
              },
              compositionstart: function ($event) {
                _vm.composing = true
              },
              compositionend: function ($event) {
                _vm.composing = false
              },
              keydown: [
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.tagFromInput(false)
                },
                function ($event) {
                  if (!$event.type.indexOf("key") && $event.keyCode !== 8) {
                    return null
                  }
                  return _vm.removeLastTag.apply(null, arguments)
                },
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown",
                    ])
                  ) {
                    return null
                  }
                  return _vm.nextSearchResult.apply(null, arguments)
                },
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp",
                    ])
                  ) {
                    return null
                  }
                  return _vm.prevSearchResult.apply(null, arguments)
                },
                _vm.onKeyDown,
              ],
              keyup: [
                _vm.onKeyUp,
                function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape",
                    ])
                  ) {
                    return null
                  }
                  return _vm.clearSearchResults.apply(null, arguments)
                },
              ],
              focus: _vm.onFocus,
              click: _vm.onClick,
              blur: _vm.onBlur,
              value: _vm.tags,
            },
          }),
          _vm._v(" "),
          _vm.elementId
            ? _c(
                "div",
                { staticStyle: { display: "none" } },
                _vm._l(_vm.tags, function (tag, index) {
                  return _c("input", {
                    key: index,
                    attrs: { type: "hidden", name: _vm.elementId + "[]" },
                    domProps: { value: _vm.hiddenInputValue(tag) },
                  })
                }),
                0
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.searchResults.length,
              expression: "searchResults.length",
            },
          ],
        },
        [
          _vm.typeaheadStyle === "badges"
            ? _c(
                "p",
                { class: "typeahead-" + _vm.typeaheadStyle },
                [
                  !_vm.typeaheadHideDiscard
                    ? _c("span", {
                        staticClass:
                          "tags-input-badge typeahead-hide-btn tags-input-typeahead-item-default",
                        domProps: {
                          textContent: _vm._s(_vm.discardSearchText),
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.clearSearchResults(true)
                          },
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.searchResults, function (tag, index) {
                    return _c("span", {
                      key: index,
                      staticClass: "tags-input-badge",
                      class: {
                        "tags-input-typeahead-item-default":
                          index != _vm.searchSelection,
                        "tags-input-typeahead-item-highlighted-default":
                          index == _vm.searchSelection,
                      },
                      domProps: { innerHTML: _vm._s(tag[_vm.textField]) },
                      on: {
                        mouseover: function ($event) {
                          _vm.searchSelection = index
                        },
                        mousedown: function ($event) {
                          $event.preventDefault()
                          return _vm.tagFromSearchOnClick(tag)
                        },
                      },
                    })
                  }),
                ],
                2
              )
            : _vm.typeaheadStyle === "dropdown"
            ? _c(
                "ul",
                { class: "typeahead-" + _vm.typeaheadStyle },
                [
                  !_vm.typeaheadHideDiscard
                    ? _c("li", {
                        staticClass:
                          "tags-input-typeahead-item-default typeahead-hide-btn",
                        domProps: {
                          textContent: _vm._s(_vm.discardSearchText),
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.clearSearchResults(true)
                          },
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.searchResults, function (tag, index) {
                    return _c("li", {
                      key: index,
                      class: {
                        "tags-input-typeahead-item-default":
                          index != _vm.searchSelection,
                        "tags-input-typeahead-item-highlighted-default":
                          index == _vm.searchSelection,
                      },
                      domProps: { innerHTML: _vm._s(_vm.getDisplayField(tag)) },
                      on: {
                        mouseover: function ($event) {
                          _vm.searchSelection = index
                        },
                        mousedown: function ($event) {
                          $event.preventDefault()
                          return _vm.tagFromSearchOnClick(tag)
                        },
                      },
                    })
                  }),
                ],
                2
              )
            : _vm._e(),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=template&id=80a85368&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content users table-data-page" }, [
        _c("div", { staticClass: "container mb-4" }, [
          _c(
            "p",
            {
              staticClass:
                "d-flex mb-3 align-items-center justify-content-between main-title-toggle",
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.main_title))]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn black-btn btn-outline-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#update_box",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.update_item(null)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.switchWord("add_new_item")) +
                      "\n                "
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overflow-auto" }, [
            _c(
              "table",
              {
                staticClass:
                  "myTable table text-center table-bordered table-striped table-hover",
              },
              [
                _c("thead", [
                  _c(
                    "tr",
                    _vm._l(_vm.handling_data["table_head_keys"], function (i) {
                      return _c("td", { key: i }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(i) +
                            "\n                        "
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("tbody"),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "update_box",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "update_box_data" },
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.item == null
                            ? _vm.switchWord("add_new_item")
                            : _vm.switchWord("update_new_item") +
                                _vm.item.term_in_arabic
                        )
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.save_definition.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _vm.item != null
                        ? _c("input", {
                            attrs: { type: "hidden", name: "id" },
                            domProps: { value: _vm.item.id },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(
                        Object.keys(_vm.handling_data["data_model"]),
                        function (input, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "form-group" },
                            [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.handling_data["data_model"][input])
                                ),
                              ]),
                              _vm._v(" "),
                              input == "expression"
                                ? _c("textarea", {
                                    staticClass: "form-control",
                                    attrs: { name: input, required: "" },
                                    domProps: {
                                      value:
                                        _vm.item != null ? _vm.item[input] : "",
                                    },
                                  })
                                : _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: input,
                                      required: input.indexOf("tags") == -1,
                                    },
                                    domProps: {
                                      value:
                                        _vm.item != null ? _vm.item[input] : "",
                                    },
                                  }),
                              _vm._v(" "),
                              _c("p", { staticClass: "alert alert-danger" }),
                            ]
                          )
                        }
                      ),
                      _vm._v(" "),
                      _vm.item == null ||
                      (_vm.item != null && _vm.item.tags.length == 0)
                        ? _c("VoerroTagsInput", {
                            attrs: {
                              "element-id": "tags",
                              "existing-tags": _vm.tags_inputs,
                              typeahead: true,
                            },
                          })
                        : _c("VoerroTagsInput", {
                            attrs: {
                              "element-id": "tags",
                              "existing-tags": _vm.tags_inputs,
                              typeahead: true,
                            },
                            model: {
                              value: _vm.item["tags"],
                              callback: function ($$v) {
                                _vm.$set(_vm.item, "tags", $$v)
                              },
                              expression: "item['tags']",
                            },
                          }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mt-3" }, [
                        _c("input", {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit", name: "save" },
                          domProps: { value: _vm.switchWord("save") },
                        }),
                      ]),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.switchWord("close")) +
                          "\n                    "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=template&id=5a5de98b& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/tableData.vue?vue&type=template&id=e3419908&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/@voerro/vue-tagsinput/dist/style.css":
/*!***********************************************************!*\
  !*** ./node_modules/@voerro/vue-tagsinput/dist/style.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/@voerro/vue-tagsinput/dist/style.css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0ade3873", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./delete_item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/delete_item.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7093795c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/definitions.vue?vue&type=style&index=0&id=80a85368&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("64f984b4", content, false, {});
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
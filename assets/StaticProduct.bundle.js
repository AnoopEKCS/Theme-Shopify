(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[30],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _components_RichText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _components_ProductDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Product = /*#__PURE__*/function () {
  function Product(section) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Product);

    this.section = section;
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.section.el);
    this.context = section.data.context;
    this.settings = section.data.settings;
    this.product = section.data.product;
    this.richText = null;
    this.readmoreText = null;
    this.reviewForm = null;

    if (this.settings) {
      this.isThreeColumn = this.settings.layout === 'layout--three-col';
    } // History


    this.isThemeEditor = window.Shopify && window.Shopify.designMode;
    this.useHistory = 'useHistory' in options ? options.useHistory : !!(!this.isThemeEditor && history.replaceState);
    var gallery = this.$el.find('[data-product-gallery]')[0]; // Product details

    this.$details = this.$el.find('[data-product-details]'); // Product description

    this.$description = this.$el.find('[data-product-description]');
    this.$readmore = this.$el.find('[data-product-readmore]'); // Product form containers

    this.$formRegular = this.$el.find('[data-product-form-regular]');
    this.$formAlt = this.$el.find('[data-product-form-alt]'); // Product form area

    this.$formArea = this.$el.find('[data-product-form-area]'); // Move product form and information on breakpoint change

    this.layoutHandler = this.onBreakpointChange.bind(this);
    _Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].onBreakpointChange(this.layoutHandler); // Product reviews

    this.$productReviews = this.$el.find('[data-product-reviews]');

    this._moveForm();

    if (this.$description.length) {
      this.richText = new _components_RichText__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.$description);
    }

    if (this.$readmore.length) {
      this.readmoreText = new _components_RichText__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.$readmore);
    }

    if (this.$productReviews.length) {
      this.reviewForm = new _Forms__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](this.$productReviews, '.spr-form-input');
    } // Instantiate ProductDetails after Shopify API is loaded


    scriptjs__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scripts]').data('shopify-api-url'), function () {
      _this.productDetails = new _components_ProductDetails__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]({
        $formArea: _this.$formArea,
        $details: _this.$details,
        gallery: gallery,
        context: _this.context,
        settings: _this.settings,
        product: _this.product,
        useHistory: _this.useHistory,
        sectionId: section.id
      });
    });
  }

  _createClass(Product, [{
    key: "onSectionUnload",
    value: function onSectionUnload() {
      _Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].offBreakpointChange(this.layoutHandler);

      if (this.productDetails) {
        this.productDetails.unload();
      }

      if (this.richText) {
        this.richText.unload();
      }

      if (this.readmoreText) {
        this.readmoreText.unload();
      }

      if (this.reviewForm) {
        this.reviewForm.unload();
      }
    }
  }, {
    key: "onBreakpointChange",
    value: function onBreakpointChange() {
      this._moveForm();
    }
    /**
     * Move product form if is a three column layout
     * @private
     */

  }, {
    key: "_moveForm",
    value: function _moveForm() {
      if (!this.isThreeColumn) return;

      if (_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isGreaterThanBreakpoint('M')) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(this.$formAlt[0], this.$formArea[0])) {
          var $form = this.$formArea.detach();
          this.$formAlt.append($form);
        }
      } else if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(this.$formRegular[0], this.$formArea[0])) {
        var _$form = this.$formArea.detach();

        this.$formRegular.append(_$form);
      }
    }
  }]);

  return Product;
}();



/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticProduct; });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StaticProduct = /*#__PURE__*/function (_Product) {
  _inherits(StaticProduct, _Product);

  var _super = _createSuper(StaticProduct);

  function StaticProduct() {
    _classCallCheck(this, StaticProduct);

    return _super.apply(this, arguments);
  }

  return StaticProduct;
}(_Product__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


  
/***/ })

}]);
//# sourceMappingURL=StaticProduct.bundle.js.map?1585847753798
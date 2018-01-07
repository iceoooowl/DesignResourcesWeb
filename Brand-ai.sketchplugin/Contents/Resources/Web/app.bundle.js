webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var type = _ref.type,
      readOnly = _ref.readOnly,
      addButtonText = _ref.addButtonText,
      onAddAction = _ref.onAddAction,
      children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "u-pb15" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "styleguide-message" },
      "There Are No ",
      type,
      " in this Design Library"
    ),
    readOnly || !addButtonText ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "text-center" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        { onClick: onAddAction },
        addButtonText
      )
    ),
    children ? children : null
  );
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_lib__);

var loggerService = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["clientServices"].loggingService(__WEBPACK_IMPORTED_MODULE_0__brandai_lib__["sharedConstants"].clients.sketch, '810554f1-ab86-49fe-9be6-873ac5260b63', { environment: 'prod', forceHttps: true });

/* harmony default export */ __webpack_exports__["a"] = (loggerService);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_lib__);

var analyticsReporter = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["analyticsService"](__WEBPACK_IMPORTED_MODULE_0__brandai_lib__["sharedConstants"].clients.sketch);

/* harmony default export */ __webpack_exports__["a"] = (analyticsReporter);

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NoItemsView__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageTile__ = __webpack_require__(157);






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      logos = _ref.logos,
      editingItemID = _ref.editingItemID,
      _onBeginEditItem = _ref.onBeginEditItem,
      onRenameLogo = _ref.onRenameLogo,
      onImageDragEnd = _ref.onImageDragEnd,
      onImageDragStart = _ref.onImageDragStart,
      onLogoContextMenu = _ref.onLogoContextMenu,
      isSearching = _ref.isSearching,
      onAddLogosInWeb = _ref.onAddLogosInWeb;


  //if no logos
  if (!__WEBPACK_IMPORTED_MODULE_1__util__["r" /* isNonEmptyArray */](logos)) {
    if (isSearching) {
      // and we are in search flow present no result message
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NoSearchResults__["a" /* default */], { type: 'logos' });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NoItemsView__["a" /* default */], {
      type: 'Logos',
      addButtonText: 'Upload in web view\u2026',
      onAddAction: onAddLogosInWeb
    });
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'section-head flex items-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-title flex-auto' },
        'Brand Logos'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'grid' },
      logos.map(function (logo) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cell cell-md', title: logo.displayName, key: logo._id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImageTile__["a" /* default */], {
            image: logo,
            size: 'md',
            preferPngFormat: true,
            readOnly: readOnly,
            editing: editingItemID && editingItemID === logo._id,
            onBeginEditItem: function onBeginEditItem() {
              return _onBeginEditItem({ elementID: logo._id });
            },
            onRenameImage: onRenameLogo.bind(null, logo._id),
            onImageDragEnd: onImageDragEnd.bind(null, logo, 'Logos'),
            onImageDragStart: onImageDragStart,
            onImageContextMenu: function onImageContextMenu(evt) {
              !readOnly ? onLogoContextMenu(evt, logo) : null;
            }
          })
        );
      })
    )
  );
});

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




//Currently this class is work in progress, we do not pass fallback for now

var ImageWithFallback = function (_Component) {
  _inherits(ImageWithFallback, _Component);

  function ImageWithFallback(props) {
    _classCallCheck(this, ImageWithFallback);

    var _this = _possibleConstructorReturn(this, (ImageWithFallback.__proto__ || Object.getPrototypeOf(ImageWithFallback)).call(this, props));

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ImageWithFallback, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$customData = _props.customData,
          customData = _props$customData === undefined ? {} : _props$customData,
          src = _props.src,
          fallback = _props.fallback,
          onFallbackLoaded = _props.onFallbackLoaded;

      //Since there might be a gap from the moment the src load fail and until the fallback is loaded it might present the '?' image of non found resource.
      //Thus the image are rendered with display none and only when loaded are show, this avoid this flickering

      var style = customData.style || {};
      if (!this.state.visible) {
        style = _.merge({}, style, { display: 'none' });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({}, customData, { style: style,
        src: src,
        onError: function onError(e) {
          var image = e.target;

          //try to set the fallback as src if such was provided
          if (fallback && image.src !== fallback) {
            image.src = fallback;
          } else {
            __WEBPACK_IMPORTED_MODULE_1__util__["h" /* debug */]('Rendering of the fallback image failed: ' + image.src);
          }
        },
        onLoad: function onLoad(e) {
          var img = e.target;
          _this2.setState({ visible: true });

          //meaning we loaded the image from fallback so we should provide the image data to the onFallbackLoaded
          if (img.src === fallback && onFallbackLoaded) {

            //todo: should handle svg differently
            //todo: support jpeg for artboards

            var canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            __WEBPACK_IMPORTED_MODULE_1__util__["h" /* debug */](canvas.width + ' : ' + canvas.height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            var dataURL = canvas.toDataURL('image/png');
            __WEBPACK_IMPORTED_MODULE_1__util__["h" /* debug */](dataURL);
            onFallbackLoaded(dataURL);
          }
        }
      }));
    }
  }]);

  return ImageWithFallback;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ImageWithFallback);

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ColorSwatch__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SectionHead__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NoItemsView__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(16);







/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      palettes = _ref.palettes,
      onChooseColor = _ref.onChooseColor,
      onAddColors = _ref.onAddColors,
      editingItemID = _ref.editingItemID,
      onBeginEditItem = _ref.onBeginEditItem,
      onCancelEditItem = _ref.onCancelEditItem,
      onRenameColor = _ref.onRenameColor,
      onColorContextMenu = _ref.onColorContextMenu,
      onAddPalette = _ref.onAddPalette,
      onPaletteContextMenu = _ref.onPaletteContextMenu,
      onRenamePalette = _ref.onRenamePalette,
      isSearching = _ref.isSearching;


  // if there are no sections
  if (!__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](palettes)) {
    if (isSearching) {
      //in search mode we want to present consistent no result view, even if there was no original data
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NoSearchResults__["a" /* default */], { type: 'Colors' });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NoItemsView__["a" /* default */], {
      type: 'Colors',
      readOnly: readOnly,
      onAddAction: onAddPalette,
      addButtonText: 'Add Palette\u2026'
    });
  }

  //there are sections but no colors in sections and we are searching, show no result view
  if (__WEBPACK_IMPORTED_MODULE_5__util__["m" /* getAllItemsInSections */](palettes, 'colors').length === 0 && isSearching) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NoSearchResults__["a" /* default */], { type: 'Colors' });
  }

  var sections = palettes.map(function (palette, paletteIdx) {

    var colorSwatches = palette.colors.map(function (color) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: 'cell cell-sm',
          title: color.name,
          key: color._id
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorSwatch__["a" /* default */], {
          readOnly: readOnly,
          name: color.name || '',
          color: color.value,
          onSelect: function onSelect(event) {
            return onChooseColor(color.value, event);
          },
          onBeginEdit: function onBeginEdit() {
            return onBeginEditItem({ elementID: color._id });
          },
          onCancelEdit: onCancelEditItem,
          editing: editingItemID && editingItemID === color._id,
          onRename: function onRename(name) {
            return onRenameColor(palette._id, color._id, name);
          },
          onMenu: function onMenu(evt) {
            return onColorContextMenu(evt, palette._id, color._id, color.name);
          }
        })
      );
    });

    //if there are no color swatches in the specific section and we are searching return null, since we don't want to present empty sections
    if (colorSwatches.length === 0 && isSearching) {
      return null;
    }

    var addButton;
    if (!readOnly && !isSearching) {
      addButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        {
          className: 'button-sm button-head',
          onClick: onAddColors.bind(null, palette._id)
        },
        'Add Colors\u2026'
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: paletteIdx },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__SectionHead__["a" /* default */],
        {
          readOnly: readOnly,
          name: palette.name || 'Untitled Palette',
          onMenu: function onMenu(evt) {
            return onPaletteContextMenu(evt, palette._id, palette.name);
          },
          onBeginEdit: function onBeginEdit() {
            return onBeginEditItem({ elementID: palette._id });
          },
          editing: editingItemID && editingItemID === palette._id,
          onRename: function onRename(name) {
            return onRenamePalette(palette._id, name);
          }
        },
        addButton
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid' },
        colorSwatches
      )
    );
  });

  // Render placeholder section that users use to create new sections.
  if (!readOnly && !isSearching) {
    sections.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: 'new-palette' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__SectionHead__["a" /* default */],
        { isNew: true, name: 'New Palette' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            className: 'button-sm button-head',
            onClick: onAddPalette
          },
          'Add Palette\u2026'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
    ));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      sections
    )
  );
});

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeStyleSample__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NoItemsView__ = __webpack_require__(111);







/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      typeStyles = _ref.typeStyles,
      onTypeStyleDragEnd = _ref.onTypeStyleDragEnd,
      onAddTypeStyles = _ref.onAddTypeStyles,
      onTypeStyleContextMenu = _ref.onTypeStyleContextMenu,
      installedFonts = _ref.installedFonts,
      onChooseTypeStyle = _ref.onChooseTypeStyle,
      isSearching = _ref.isSearching,
      onOpenDeleteTypeStylesApp = _ref.onOpenDeleteTypeStylesApp;


  //if no type styles
  if (!__WEBPACK_IMPORTED_MODULE_2__util__["r" /* isNonEmptyArray */](typeStyles)) {

    if (isSearching) {
      //and we are in search flow present no result message
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NoSearchResults__["a" /* default */], { type: 'Typography' });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NoItemsView__["a" /* default */], {
      type: 'Typography Styles',
      readOnly: readOnly,
      onAddAction: onAddTypeStyles,
      addButtonText: 'Add Type Styles\u2026'
    });
  }

  var addButton;
  if (!readOnly && !isSearching) {
    addButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        className: 'button-sm button-head',
        onClick: onAddTypeStyles
      },
      'Add Type Styles\u2026'
    );
  }

  var deleteButton;
  if (!readOnly && __WEBPACK_IMPORTED_MODULE_2__util__["r" /* isNonEmptyArray */](typeStyles)) {
    deleteButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        className: 'button-sm button-head',
        onClick: onOpenDeleteTypeStylesApp
      },
      'Delete Type Styles\u2026'
    );
  }

  var sortedTypeStyles = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.sortBy(typeStyles, function (typeStyle) {
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.toLower(typeStyle.name);
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'section-head flex items-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-title flex-auto' },
        'Type Styles'
      ),
      deleteButton,
      addButton
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      sortedTypeStyles.map(function (typeStyle) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-border-bottom', key: typeStyle._id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TypeStyleSample__["a" /* default */], {
            onSelect: function onSelect(event) {
              return onChooseTypeStyle(typeStyle, event);
            },
            readOnly: readOnly,
            draggable: true,
            onDragEnd: onTypeStyleDragEnd,
            installedFonts: installedFonts,
            typeStyle: typeStyle,
            onMenu: function onMenu(evt) {
              return onTypeStyleContextMenu(evt, typeStyle);
            }
          })
        );
      })
    )
  );
});

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SharedStyle__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NoItemsView__ = __webpack_require__(111);







/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      sharedStyles = _ref.sharedStyles,
      onAddSharedStyles = _ref.onAddSharedStyles,
      onSharedStyleItemContextMenu = _ref.onSharedStyleItemContextMenu,
      onChooseStyle = _ref.onChooseStyle,
      onOpenDeleteSharedStylesApp = _ref.onOpenDeleteSharedStylesApp,
      isSearching = _ref.isSearching;


  //if no styles found
  if (!__WEBPACK_IMPORTED_MODULE_2__util__["r" /* isNonEmptyArray */](sharedStyles)) {
    if (isSearching) {
      //and we are in search flow present no result message
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NoSearchResults__["a" /* default */], { type: 'Shared Styles' });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NoItemsView__["a" /* default */], {
      type: 'Shared Styles',
      readOnly: readOnly,
      onAddAction: onAddSharedStyles,
      addButtonText: 'Add Shared Styles\u2026'
    });
  }

  // we have found styles
  var addButton;
  if (!readOnly && !isSearching) {
    addButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        className: 'button-sm button-head',
        onClick: onAddSharedStyles
      },
      'Add Shared Styles\u2026'
    );
  }

  var deleteButton;
  if (!readOnly && __WEBPACK_IMPORTED_MODULE_2__util__["r" /* isNonEmptyArray */](sharedStyles)) {
    deleteButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        className: 'button-sm button-head',
        onClick: onOpenDeleteSharedStylesApp
      },
      'Delete Shared Styles\u2026'
    );
  }

  var sortedSharedStyles = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.sortBy(sharedStyles, function (sharedStyle) {
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.toLower(sharedStyle.name);
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'SectionHead flex items-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'SectionHead__title flex-auto' },
        'Shared Styles'
      ),
      deleteButton,
      addButton
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      sortedSharedStyles.map(function (sharedStyle) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-border-bottom', key: sharedStyle._id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SharedStyle__["a" /* default */], {
            readOnly: readOnly,
            name: sharedStyle.name,
            thumbnailURL: sharedStyle.thumbnailUrl,
            thumbnailSize: 40,
            onMenu: function onMenu(evt) {
              return onSharedStyleItemContextMenu(evt, sharedStyle);
            },
            onSelect: function onSelect(evt) {
              return onChooseStyle(sharedStyle, evt);
            }
          })
        );
      })
    )
  );
});

/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shared_constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionHead__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ImageTile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NoItemsView__ = __webpack_require__(111);










var _require = __webpack_require__(124),
    LazyLoad = _require.LazyLoad;

var lazyPlaceholderHeightMap = {
  xs: 48,
  sm: 72,
  md: 96
};

/* harmony default export */ __webpack_exports__["a"] = (function (imageType, boxSize) {
  var category = __WEBPACK_IMPORTED_MODULE_3__shared_constants__["IMAGE_CATS"][imageType];

  return function (_ref) {
    var readOnly = _ref.readOnly,
        sections = _ref.sections,
        onImageDragEnd = _ref.onImageDragEnd,
        onImageDragStart = _ref.onImageDragStart,
        _onImageContextMenu = _ref.onImageContextMenu,
        onImageSectionContextMenu = _ref.onImageSectionContextMenu,
        onUploadLayers = _ref.onUploadLayers,
        selectedLayerCount = _ref.selectedLayerCount,
        _onBeginEditItem = _ref.onBeginEditItem,
        onRenameImage = _ref.onRenameImage,
        onRenameSection = _ref.onRenameSection,
        editingItemID = _ref.editingItemID,
        isSearching = _ref.isSearching,
        onFallbackDataReceived = _ref.onFallbackDataReceived;


    if (!__WEBPACK_IMPORTED_MODULE_1__util__["r" /* isNonEmptyArray */](sections)) {
      if (isSearching) {
        //in search mode we want to present consistent no result view, even if there was no original data
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NoSearchResults__["a" /* default */], { type: category.displayNamePlural });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__NoItemsView__["a" /* default */],
          {
            type: category.displayNamePlural
          },
          readOnly ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'text-center', key: 'upload' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              {
                onClick: onUploadLayers.bind(null, imageType, null),
                disabled: !selectedLayerCount
              },
              'Add Layers'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'note' },
              selectedLayerCount ? selectedLayerCount + ' ' + (selectedLayerCount > 1 ? 'Layers' : 'Layer') + ' Selected' : 'No Layers Selected'
            )
          )
        )
      );
    }

    //there are sections but no images in sections and we are searching, show no result view
    if (__WEBPACK_IMPORTED_MODULE_1__util__["m" /* getAllItemsInSections */](sections, category.itemsKey).length === 0 && isSearching) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NoSearchResults__["a" /* default */], { type: category.displayNamePlural });
    }

    var imageSections = sections.map(function (section, sectionIdx) {
      var anyLargeItems = false;

      section[category.itemsKey].forEach(function (image) {
        var dims = (image.dimensions || 'x').split(/x/i);
        var width = parseFloat(dims[0]);
        var height = parseFloat(dims[1]);

        if (Number.isNaN(width) || width > 40 || Number.isNaN(height) || height > 40) {
          // Large OR unknown dimensions.
          anyLargeItems = true;
        }
      });

      var sectionBoxSize = anyLargeItems ? boxSize : 'xs';
      var nameHidden = sectionBoxSize === 'xs';

      var imageTiles = section[category.itemsKey].map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: item._id,
            className: 'cell cell-' + sectionBoxSize
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            LazyLoad,
            { height: lazyPlaceholderHeightMap[sectionBoxSize], onlyCacheOnFirstLoad: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ImageTile__["a" /* default */], {
              image: item,
              nameHidden: nameHidden,
              trimName: true,
              size: sectionBoxSize,
              preferPngFormat: category.preferPNGFormat,
              readOnly: readOnly,
              editing: editingItemID && editingItemID === item._id,
              onBeginEditItem: function onBeginEditItem() {
                return _onBeginEditItem({ elementID: item._id });
              },
              onRenameImage: onRenameImage.bind(null, imageType, section._id, item._id),
              onImageDragEnd: onImageDragEnd.bind(null, item, section.name || 'Untitled ' + category.displayNamePlural + ' Section'),
              onImageDragStart: onImageDragStart,
              onImageContextMenu: function onImageContextMenu(evt) {
                !readOnly ? _onImageContextMenu(evt, imageType, item, section, nameHidden) : null;
              },
              onFallbackDataReceived: onFallbackDataReceived
            })
          )
        );
      });

      //if there are no image tiles for the specific section and we are searching return null, since we don't want to present empty sections
      if (imageTiles.length === 0 && isSearching) {
        return null;
      }

      var uploadButton;
      if (!readOnly && !isSearching) {
        uploadButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            className: 'button-sm button-head',
            onClick: onUploadLayers.bind(null, imageType, section._id)
          },
          'Add Layers ',
          selectedLayerCount ? '(' + selectedLayerCount + ')' : ''
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: section._id || sectionIdx },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__SectionHead__["a" /* default */],
          {
            readOnly: readOnly,
            name: section.name || 'Untitled Section',
            onMenu: function onMenu(evt) {
              return onImageSectionContextMenu(evt, imageType, section);
            },
            onBeginEdit: function onBeginEdit() {
              return _onBeginEditItem({ elementID: section._id });
            },
            editing: editingItemID && editingItemID === section._id,
            onRename: function onRename(name) {
              return onRenameSection(imageType, section._id, name);
            }
          },
          uploadButton
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'grid' },
          imageTiles
        )
      );
    });

    // Render placeholder section that users use to create new sections.
    if (!readOnly && !isSearching) {
      imageSections.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: 'new-section' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__SectionHead__["a" /* default */],
          { isNew: true, name: 'New Section' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              className: 'button-sm button-head',
              onClick: onUploadLayers.bind(null, imageType, null)
            },
            'Add Layers ',
            selectedLayerCount ? '(' + selectedLayerCount + ')' : ''
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
      ));
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      imageSections
    );
  };
});

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var tabs = _ref.tabs,
      onSelect = _ref.onSelect;


  var tabElements = tabs.map(function (tab) {
    var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('c-tab', { 'c-tab--selected': tab.selected });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: tab.name, className: className,
        onClick: function onClick(evt) {
          return onSelect(tab.name);
        }
      },
      tab.name
    );
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'flex items-center' },
    tabElements
  );
});

/***/ }),

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f1ca98152e47ba3a168ca851e7ded891.png";

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_moon__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_moon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__brandai_moon__);




var _moon$compositeCompon = __WEBPACK_IMPORTED_MODULE_2__brandai_moon__["compositeComponents"],
    NewUserForm = _moon$compositeCompon.NewUserForm,
    NewOrganizationForm = _moon$compositeCompon.NewOrganizationForm;


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var user = _ref.user,
      organizationExistMessage = _ref.organizationExistMessage,
      onCreateOrganization = _ref.onCreateOrganization,
      checkOrganizationExists = _ref.checkOrganizationExists,
      onUpdateUserDetails = _ref.onUpdateUserDetails,
      onTermsClicked = _ref.onTermsClicked;


  var form = void 0;
  if (user.user_metadata) {
    form = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewOrganizationForm, {
      message: organizationExistMessage,
      showStyleguideTemplates: false,
      styleguideTemplateKey: __WEBPACK_IMPORTED_MODULE_1__brandai_lib__["sharedConstants"].styleguideTemplates.developer,
      onCreate: onCreateOrganization,
      checkOrganizationExists: checkOrganizationExists
    });
  } else {
    form = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewUserForm, {
      onNext: onUpdateUserDetails,
      onTermsClicked: onTermsClicked
    });
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'c-sign-up' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      { className: 'c-sign-up-header' },
      'SIGN UP'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'u-text-center u-my8' },
      'Create your account and get started with our free plan'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'u-mx12' },
      form
    )
  );
});

/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pages__ = __webpack_require__(1244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ArtboardHistory__ = __webpack_require__(1245);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ArtboardsApp = function (_React$Component) {
  _inherits(ArtboardsApp, _React$Component);

  function ArtboardsApp() {
    _classCallCheck(this, ArtboardsApp);

    return _possibleConstructorReturn(this, (ArtboardsApp.__proto__ || Object.getPrototypeOf(ArtboardsApp)).apply(this, arguments));
  }

  _createClass(ArtboardsApp, [{
    key: 'render',
    value: function render() {
      if (this.props.selectedArtboard) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ArtboardHistory__["a" /* default */], {
          artboard: this.props.selectedArtboard,
          imageDragEnd: this.props.imageDragEnd,
          uploadArtboard: this.uploadArtboard,
          offset: this.props.offset,
          connected: this.props.connected
        });
      } else if (Array.isArray(this.props.pages) && !this.props.loadingPages) {

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Pages__["a" /* default */], {
          pages: this.props.pages,
          imageDragEnd: this.props.imageDragEnd,
          uploadArtboard: this.uploadArtboard,
          selectedArtboardCount: this.props.selectedArtboardCount,
          isSearching: this.props.isSearching,
          searchQuery: this.props.searchQuery,
          noResultsFound: this.props.noResultsFound,
          connected: this.props.connected
        });
      }

      return null;
    }
  }, {
    key: 'uploadArtboard',
    value: function uploadArtboard(options) {
      __WEBPACK_IMPORTED_MODULE_1__sketch__["i" /* postNativeUIEvent */]('onUploadArtboard', options);
    }
  }]);

  return ArtboardsApp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ArtboardsApp);

/***/ }),

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flux_actions__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ImageTile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SectionHead__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NoSearchResults__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SearchBox__ = __webpack_require__(545);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var Pages = function (_React$Component) {
  _inherits(Pages, _React$Component);

  function Pages() {
    _classCallCheck(this, Pages);

    return _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).apply(this, arguments));
  }

  _createClass(Pages, [{
    key: 'renderNewPageSection',
    value: function renderNewPageSection() {
      var _this2 = this;

      if (!this.props.connected) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__SectionHead__["a" /* default */],
        { isNew: true, name: 'New Page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button-sm button-head u-mr2', onClick: function onClick() {
              return _this2.props.uploadArtboard();
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-cloud-upload' }),
          this.getUploadButtonText(this.props.selectedArtboardCount)
        )
      );
    }
  }, {
    key: 'renderPageSections',
    value: function renderPageSections() {
      var _this3 = this;

      var _props = this.props,
          pages = _props.pages,
          imageDragEnd = _props.imageDragEnd,
          selectedArtboardCount = _props.selectedArtboardCount,
          isSearching = _props.isSearching;

      var pagesSections = pages.map(function (page) {
        var pageHistoryItems = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.chain(page.artboards).map('historyItems').flatten().value();
        if ((!pageHistoryItems || pageHistoryItems.length === 0) && isSearching) {
          return null;
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: page._id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__SectionHead__["a" /* default */],
            {
              name: page.name,
              onMenu: function onMenu(evt) {
                return _this3.onPageContextMenu(evt, page);
              }
            },
            !pageHistoryItems || pageHistoryItems.length === 0 ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button-sm button-head', onClick: _this3.addArtboardsToDocument.bind(null, page) },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-add-document' }),
              'Add Page to Document'
            ),
            _this3.props.connected ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              {
                className: 'button-sm button-head u-mr2',
                onClick: function onClick() {
                  return _this3.props.uploadArtboard({ forcePageName: page.name });
                } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-cloud-upload' }),
              _this3.getUploadButtonText(selectedArtboardCount)
            ) : null
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'grid' },
            page.artboards.map(function (artboard) {
              if (!artboard.historyItems || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(artboard.historyItems)) {
                return null;
              }
              var latestImage = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(artboard.historyItems).image;
              latestImage.displayName = artboard.name;

              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  className: 'cell cell-md',
                  key: artboard._id,
                  onClick: function onClick() {
                    return _this3.props.actions.selectArtboard(artboard);
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ImageTile__["a" /* default */], {
                  image: latestImage,
                  size: 'md',
                  selectable: true,
                  onImageDragEnd: imageDragEnd.bind(null, _extends({}, latestImage, { pageName: page.name }), null),
                  onImageContextMenu: function onImageContextMenu(evt) {
                    return _this3.onArtboardContextMenu(evt, page, artboard);
                  }
                })
              );
            })
          )
        );
      });
      return pagesSections;
    }
  }, {
    key: 'renderSearchBox',
    value: function renderSearchBox() {
      if (this.props.pages.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'u-relative' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__SearchBox__["a" /* default */], {
            searchQuery: this.props.searchQuery,
            placeholder: 'Search...',
            onSearch: this.props.actions.searchArtboards
          })
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var content = null;
      if (this.props.noResultsFound) {
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__NoSearchResults__["a" /* default */], { type: 'Artboards' });
      } else {
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          this.renderPageSections(),
          this.renderNewPageSection()
        );
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.renderSearchBox(),
        content
      );
    }
  }, {
    key: 'onPageContextMenu',
    value: function onPageContextMenu(event, page) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        page: page,
        menuItems: [{ value: 'Delete', callbackFunction: 'deletePage' }]
      });
    }
  }, {
    key: 'onArtboardContextMenu',
    value: function onArtboardContextMenu(event, page, artboard) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        page: page,
        artboard: artboard,
        menuItems: [{ value: 'Delete', callbackFunction: 'deleteArtboard' }]
      });
    }
  }, {
    key: 'addArtboardsToDocument',
    value: function addArtboardsToDocument(page) {
      var pageItems = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(page.artboards, function (artboard) {
        var item = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(artboard.historyItems).image;

        var sklaFormat = __WEBPACK_IMPORTED_MODULE_4__util__["k" /* findAlternativeFormat */](item, 'skla') || {};
        return {
          url: sklaFormat.url || item.url,
          extension: sklaFormat.extension || item.extension,
          name: item.displayName,
          id: item._id,
          metadata: item.metadata,
          pageName: page.name
        };
      });

      //if we want to insert an image and there is also skla native format for the primary format then use it instead
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onAddArtboardsToDocument', pageItems);
    }
  }, {
    key: 'getUploadButtonText',
    value: function getUploadButtonText(selectedArtboardCount) {
      return 'Upload' + (selectedArtboardCount == 0 ? '' : ' ' + selectedArtboardCount) + ' Selected Artboard' + (selectedArtboardCount > 1 ? 's' : '');
    }
  }]);

  return Pages;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_flux_actions__["a" /* default */])(Pages));

/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flux_actions__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var ArtboardHistory = function (_React$Component) {
  _inherits(ArtboardHistory, _React$Component);

  function ArtboardHistory(props) {
    _classCallCheck(this, ArtboardHistory);

    var _this = _possibleConstructorReturn(this, (ArtboardHistory.__proto__ || Object.getPrototypeOf(ArtboardHistory)).call(this, props));

    _this.state = {
      selectedItem: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(_this.props.artboard.historyItems),
      historyItems: _this.props.artboard.historyItems.slice().reverse()
    };
    return _this;
  }

  _createClass(ArtboardHistory, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (!nextProps.artboard) {
        return;
      }

      var selectedItem = this.state.selectedItem;
      if (selectedItem) {
        var destinationSelectedItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(nextProps.artboard.historyItems, { _id: selectedItem._id });
        if (!destinationSelectedItem) {
          selectedItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(nextProps.artboard.historyItems);
        }
      }

      this.setState({
        selectedItem: selectedItem,
        historyItems: nextProps.artboard.historyItems.slice().reverse()
      });
    }
  }, {
    key: 'renderUploadButton',
    value: function renderUploadButton(artboard) {
      var _this2 = this;

      if (!this.props.connected) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'button-sm button-head', onClick: function onClick() {
            _this2.props.uploadArtboard({
              forcePageName: artboard.pageName,
              forceArtboardName: artboard.name
            });
          } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-cloud-upload' }),
        'Upload Selected Artboard'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var artboard = this.props.artboard;
      if (!artboard) {
        return null;
      }

      var historyItems = this.state.historyItems;
      var selectedItem = this.state.selectedItem;

      var offset = this.props.offset || 0;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'c-artboard-history__artboard', style: { top: offset } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-head flex items-center' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              {
                className: 'c-artboard-history__back-button u-mr2',
                onClick: function onClick() {
                  _this3.props.actions.selectArtboard(null);
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-arrow-left icon-only' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                className: 'section-title flex-auto u-inline-block c-artboard-history__artboard-name',
                title: artboard.name },
              artboard.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              {
                className: 'button-sm button-head', title: 'View Artboard in Web',
                onClick: function onClick() {
                  _this3.props.actions.viewArtboardInWeb(artboard.pageId, artboard.kebabName, selectedItem);
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon icon-comments-chat' }),
              'Share and Discuss'
            ),
            this.renderUploadButton(artboard)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-p4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
              className: 'c-artboard-history__main-image',
              src: __WEBPACK_IMPORTED_MODULE_6__util__["i" /* displayableURL */](selectedItem.image, 'medium'),
              onDragEnd: function onDragEnd() {
                _this3.props.imageDragEnd(selectedItem.image, null);
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'c-artboard-history__version-history-title', style: { marginTop: 325 + offset } },
          'Version History'
        ),
        historyItems.map(function (item) {
          var itemClassName = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('c-artboard-history__item', { 'c-artboard-history__item--selected': item._id === selectedItem._id });
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: item._id,
              className: itemClassName,
              onClick: function onClick() {
                _this3.setState({ selectedItem: item });
              },
              onContextMenu: function onContextMenu(evt) {
                return _this3.onHistoryItemContextMenu(evt, artboard.pageId, artboard, item);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'c-artboard-history-item__serialnumber u-mr4' },
              item.serialNumber
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'c-artboard-history-item__thumbnail u-mr4' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
                src: __WEBPACK_IMPORTED_MODULE_6__util__["i" /* displayableURL */](item.image),
                onDragEnd: function onDragEnd() {
                  _this3.props.imageDragEnd(item.image, null);
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'c-artboard-history-item__descriptionBox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                item.description ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'u-mb4' },
                  item.description
                ) : null
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'c-artboard-history-item__metadata' },
                item.user.firstName,
                ' ',
                item.user.lastName,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'u-pull-right' },
                  __WEBPACK_IMPORTED_MODULE_2_moment___default()(item.createdDate).fromNow()
                )
              )
            )
          );
        })
      );
    }
  }, {
    key: 'onHistoryItemContextMenu',
    value: function onHistoryItemContextMenu(event, pageId, artboard, item) {
      __WEBPACK_IMPORTED_MODULE_5__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        pageId: pageId,
        artboard: artboard,
        item: item,
        menuItems: [{ value: 'Delete', callbackFunction: 'deleteArtboardHistoryItem' }]
      });
    }
  }]);

  return ArtboardHistory;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_flux_actions__["a" /* default */])(ArtboardHistory));

/***/ }),

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColorSwatch__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(82);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AddColorsApp = function (_App) {
  _inherits(AddColorsApp, _App);

  function AddColorsApp(props) {
    _classCallCheck(this, AddColorsApp);

    var _this = _possibleConstructorReturn(this, (AddColorsApp.__proto__ || Object.getPrototypeOf(AddColorsApp)).call(this, props));

    _this.state = {
      colorSections: []
    };
    return _this;
  }

  _createClass(AddColorsApp, [{
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [this.setColors, this.getSelectedColors];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sections = this.state.colorSections.map(function (section, sectionIdx) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { key: section.name },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'section-head' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'section-title-sm' },
              section.name
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'grid' },
            section.colors.map(function (color, colorIdx) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'cell cell-xs', key: colorIdx },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ColorSwatch__["a" /* default */], {
                  color: color.color,
                  size: 'sm',
                  selected: color.selected,
                  onSelect: _this2.toggleSelected.bind(_this2, sectionIdx, colorIdx)
                })
              );
            })
          )
        );
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        sections
      );
    }
  }, {
    key: 'toggleSelected',
    value: function toggleSelected(sectionIdx, colorIdx) {
      var _this3 = this;

      var colorSections = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.state.colorSections);
      colorSections[sectionIdx].colors[colorIdx].selected = !colorSections[sectionIdx].colors[colorIdx].selected;

      this.setState({ colorSections: colorSections }, function () {
        _this3.nativeHost.onSelectionChanged(_this3.getSelectedColors().length);
      });
    }
  }, {
    key: 'setColors',
    value: function setColors(colorSections) {
      this.setState({
        colorSections: colorSections.map(function (section) {
          return {
            name: section.name,
            colors: section.colors.map(function (color) {
              return {
                selected: false,
                color: color
              };
            })
          };
        })
      });
    }
  }, {
    key: 'getSelectedColors',
    value: function getSelectedColors() {
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default()(this.state.colorSections).flatMap('colors').filter({ selected: true }).map('color').value();
    }
  }]);

  return AddColorsApp;
}(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (AddColorsApp);

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListView__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TypeStyleSample__ = __webpack_require__(543);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ManageTypeStylesApp = function (_App) {
  _inherits(ManageTypeStylesApp, _App);

  function ManageTypeStylesApp(props) {
    _classCallCheck(this, ManageTypeStylesApp);

    var _this = _possibleConstructorReturn(this, (ManageTypeStylesApp.__proto__ || Object.getPrototypeOf(ManageTypeStylesApp)).call(this, props));

    _this.state = {
      idKey: 'ObjectID' //inital value that can be overrriden
    };
    return _this;
  }

  _createClass(ManageTypeStylesApp, [{
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [this.setTypeStyles, this.getSelectedTypeStyles, this.toggleSelectAll];
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ListView__["a" /* default */], {
        ref: 'typeStylesList',
        idKey: this.state.idKey,
        sortBy: 'name',
        onSelectionChanged: this.nativeHost.onSelectionChanged,
        renderItem: this.renderTypeStyle.bind(this)
      });
    }
  }, {
    key: 'renderTypeStyle',
    value: function renderTypeStyle(typeStyle, isSelected, toggleSelected) {
      var key = typeStyle[this.state.idKey];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-border-bottom', key: key },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TypeStyleSample__["a" /* default */], {
          typeStyle: typeStyle,
          selected: isSelected,
          onSelect: toggleSelected
        })
      );
    }
  }, {
    key: 'setTypeStyles',
    value: function setTypeStyles(typeStyles, idKey) {
      this.refs.typeStylesList.setItems(typeStyles);
      this.setState({ idKey: idKey });
    }
  }, {
    key: 'getSelectedTypeStyles',
    value: function getSelectedTypeStyles() {
      return this.refs.typeStylesList.getSelectedItems();
    }
  }, {
    key: 'toggleSelectAll',
    value: function toggleSelectAll() {
      this.refs.typeStylesList.toggleSelectAll();
    }
  }]);

  return ManageTypeStylesApp;
}(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (ManageTypeStylesApp);

/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListView__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SharedStyle__ = __webpack_require__(544);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ManageSharedStylesApp = function (_App) {
  _inherits(ManageSharedStylesApp, _App);

  function ManageSharedStylesApp(props) {
    _classCallCheck(this, ManageSharedStylesApp);

    var _this = _possibleConstructorReturn(this, (ManageSharedStylesApp.__proto__ || Object.getPrototypeOf(ManageSharedStylesApp)).call(this, props));

    _this.state = {
      idKey: 'ObjectID' //inital value that can be overrriden
    };
    return _this;
  }

  _createClass(ManageSharedStylesApp, [{
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [this.setSharedStyles, this.getSelectedSharedStyles, this.toggleSelectAll];
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ListView__["a" /* default */], {
        ref: 'sharedStylesList',
        idKey: this.state.idKey,
        sortBy: 'name',
        onSelectionChanged: this.nativeHost.onSelectionChanged,
        renderItem: this.renderSharedStyle.bind(this)
      });
    }
  }, {
    key: 'renderSharedStyle',
    value: function renderSharedStyle(sharedStyle, isSelected, toggleSelected) {

      var key = sharedStyle[this.state.idKey];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-border-bottom', key: key },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SharedStyle__["a" /* default */], {
          name: sharedStyle.name,
          thumbnailURL: sharedStyle.thumbnailUrl,
          thumbnailSize: 24,
          selected: isSelected,
          onSelect: toggleSelected
        })
      );
    }
  }, {
    key: 'setSharedStyles',
    value: function setSharedStyles(sharedStyles, idKey) {
      this.refs.sharedStylesList.setItems(sharedStyles);
      this.setState({ idKey: idKey });
    }
  }, {
    key: 'getSelectedSharedStyles',
    value: function getSelectedSharedStyles() {
      return this.refs.sharedStylesList.getSelectedItems();
    }
  }, {
    key: 'toggleSelectAll',
    value: function toggleSelectAll() {
      this.refs.sharedStylesList.toggleSelectAll();
    }
  }]);

  return ManageSharedStylesApp;
}(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (ManageSharedStylesApp);

/***/ }),

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageTile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_js__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ManageSymbolsApp = function (_App) {
  _inherits(ManageSymbolsApp, _App);

  function ManageSymbolsApp(props) {
    _classCallCheck(this, ManageSymbolsApp);

    var _this = _possibleConstructorReturn(this, (ManageSymbolsApp.__proto__ || Object.getPrototypeOf(ManageSymbolsApp)).call(this, props));

    _this.state = {
      sketchSymbols: []
    };
    return _this;
  }

  _createClass(ManageSymbolsApp, [{
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [this.setSymbols, this.getSelectedSymbols];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var symbols = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.state.sketchSymbols, function (sketchSymbol) {
        var className = sketchSymbol.selected ? 'c-image-tile--selected' : 'c-image-tile--unselected';
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cell cell-sm',
            key: sketchSymbol._id,
            onClick: function onClick() {
              return _this2.toggleSelected(sketchSymbol._id);
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageTile__["a" /* default */], {
            image: sketchSymbol,
            nameHidden: false,
            trimName: false,
            size: 'sm',
            preferPngFormat: true,
            readOnly: true,
            editing: false,
            draggable: false,
            customClassName: className
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid' },
        symbols
      );
    }
  }, {
    key: 'setSymbols',
    value: function setSymbols(sketchSymbols) {
      var clonedSketchSymbols = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(sketchSymbols);
      this.setState({
        sketchSymbols: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(clonedSketchSymbols, function (symbol) {
          return _extends({
            selected: false
          }, symbol);
        })
      });
    }
  }, {
    key: 'getSelectedSymbols',
    value: function getSelectedSymbols() {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(this.state.sketchSymbols, { selected: true });
    }
  }, {
    key: 'toggleSelected',
    value: function toggleSelected(symbolId) {
      var _this3 = this;

      var selectedSymbol = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(this.state.sketchSymbols, { _id: symbolId });
      selectedSymbol.selected = !selectedSymbol.selected;
      this.forceUpdate(function () {
        _this3.nativeHost.onSelectionChanged(_this3.getSelectedSymbols().length);
      });
    }
  }]);

  return ManageSymbolsApp;
}(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (ManageSymbolsApp);

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shared_constants__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SelectiveSyncApp = function (_App) {
  _inherits(SelectiveSyncApp, _App);

  function SelectiveSyncApp(props) {
    _classCallCheck(this, SelectiveSyncApp);

    var _this = _possibleConstructorReturn(this, (SelectiveSyncApp.__proto__ || Object.getPrototypeOf(SelectiveSyncApp)).call(this, props));

    _this.items = {};
    _this.state = {};

    _this.toggleSelected = _this.toggleSelected.bind(_this);
    return _this;
  }

  _createClass(SelectiveSyncApp, [{
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [this.getSelectedItems];
    }
  }, {
    key: 'renderExplanation',
    value: function renderExplanation() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'u-px7 u-pt7' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'u-my0 u-bold' },
          'Select Items to Sync'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'u-my6' },
          'All items in each category will be added to the document. Items that already exist in the document will be updated.'
        )
      );
    }
  }, {
    key: 'renderTypeRow',
    value: function renderTypeRow(type) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'u-mb2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: type.key, ref: function ref(c) {
            return _this2.items[type.key] = c;
          }, type: 'checkbox', defaultChecked: true,
          onChange: this.toggleSelected }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: type.key },
          ' ',
          type.label
        ),
        type.description ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'u-inline-block u-small u-m0 u-ml2', style: { color: 'gray' } },
          '\u2014 ',
          type.description
        ) : null
      );
    }
  }, {
    key: 'renderTypeSelection',
    value: function renderTypeSelection() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'u-px7' },
        this.renderTypeRow(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["TYPES_TO_SYNC"].symbols),
        this.renderTypeRow(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["TYPES_TO_SYNC"].typeStyles),
        this.renderTypeRow(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["TYPES_TO_SYNC"].sharedStyles),
        this.renderTypeRow(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["TYPES_TO_SYNC"].colors)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { backgroundColor: '#EFEFEF', height: '100vh' } },
        this.renderExplanation(),
        this.renderTypeSelection()
      );
    }
  }, {
    key: 'getSelectedItems',
    value: function getSelectedItems() {
      var checkedItems = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.chain(this.items).map(function (item, key) {
        if (item.checked) {
          return key;
        }
        return null;
      }).compact().value();

      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(__WEBPACK_IMPORTED_MODULE_3__shared_constants__["TYPES_TO_SYNC"], checkedItems);
    }
  }, {
    key: 'toggleSelected',
    value: function toggleSelected() {
      var _this3 = this;

      this.forceUpdate(function () {
        _this3.nativeHost.onSelectionChanged(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.keys(_this3.getSelectedItems()).length);
      });
    }
  }]);

  return SelectiveSyncApp;
}(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (SelectiveSyncApp);

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1252);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"cacheDirectory":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(549)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--3-1!../../../postcss-loader/lib/index.js??ref--3-2!../../../sass-loader/lib/loader.js??ref--3-3!./_icons.scss", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--3-1!../../../postcss-loader/lib/index.js??ref--3-2!../../../sass-loader/lib/loader.js??ref--3-3!./_icons.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"brandai-icons\";\n  src: url(" + __webpack_require__(548) + ");\n  src: url(" + __webpack_require__(548) + "?#iefix) format(\"eot\"), url(" + __webpack_require__(1253) + ") format(\"woff\"), url(" + __webpack_require__(1254) + ") format(\"truetype\"); }\n\n.icon-brush:before, .icon-group:before, .icon-clock:before, .icon-code:before, .icon-download:before, .icon-github:before, .icon-handshake:before, .icon-menu:before, .icon-refresh:before, .icon-rss-circle:before, .icon-learn-circle:before, .icon-selenium:before, .icon-shapes:before, .icon-sign-in-circle:before, .icon-projects-circle:before, .icon-star-circle:before, .icon-user-circle:before, .icon-help-circle:before, .icon-github-circle:before, .icon-close-x:before, .icon-left-arrow-circle:before, .icon-pencil:before, .icon-trash:before, .icon-brush-circle:before, .icon-apps-circle:before, .icon-triangle-down:before, .icon-triangle-right:before, .icon-X-circle:before, .icon-X:before, .icon-check-circle:before, .icon-check:before, .icon-plus:before, .icon-clipboard:before, .icon-sub-component:before, .icon-reorder:before, .icon-table:before, .icon-private_lock:before, .icon-hand-geom:before, .icon-search:before, .icon-warning:before, .icon-png:before, .icon-vector:before, .icon-zip:before, .icon-back-arrow:before, .icon-connectors:before, .icon-drop:before, .icon-font-size:before, .icon-font:before, .icon-capitalize:before, .icon-gift:before, .icon-play:before, .icon-public_globe:before, .icon-share-arrow:before, .icon-info:before, .icon-pricing-tag:before, .icon-line-height:before, .icon-align-center:before, .icon-align-justify:before, .icon-align-left:before, .icon-align-right:before, .icon-plus-thin:before, .icon-settings:before, .icon-pencil-box:before, .icon-versions-circle-thick:before, .icon-key:before, .icon-letter-spacing:before, .icon-strikethrough:before, .icon-underline:before, .icon-cloud-update:before, .icon-zoom:before, .icon-left-nav:before, .icon-top-nav:before, .icon-blog:before, .icon-chevron-right:before, .icon-arrow-left:before, .icon-arrow-right:before, .icon-drag-handle-circle-small:before, .icon-drag-handle-circle:before, .icon-drag-handle-rect:before, .icon-move-cross-arrow:before, .icon-move:before, .icon-drag-handle-rect-small:before, .icon-cancel-remove:before, .icon-checkmark:before, .icon-exchange:before, .icon-plus-thick:before, .icon-versions-stack:before, .icon-copy:before, .icon-Slice:before, .icon-arrow-forward:before, .icon-comments-chat:before, .icon-duplicate:before, .icon-target:before, .icon-arrow-up-circle:before, .icon-settings-circle:before, .icon-share-circle:before, .icon-versions-circle:before, .icon-add-document:before, .icon-cloud-upload:before, .icon-download-circle:before, .icon-reply:before, .icon-upload-circle:before, .icon-view:before {\n  font-family: \"brandai-icons\";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  text-decoration: none;\n  text-transform: none; }\n\n.icon-brush:before {\n  content: \"\\E001\"; }\n\n.icon-group:before {\n  content: \"\\E002\"; }\n\n.icon-clock:before {\n  content: \"\\E003\"; }\n\n.icon-code:before {\n  content: \"\\E004\"; }\n\n.icon-download:before {\n  content: \"\\E005\"; }\n\n.icon-github:before {\n  content: \"\\E006\"; }\n\n.icon-handshake:before {\n  content: \"\\E007\"; }\n\n.icon-menu:before {\n  content: \"\\E008\"; }\n\n.icon-refresh:before {\n  content: \"\\E009\"; }\n\n.icon-rss-circle:before {\n  content: \"\\E00A\"; }\n\n.icon-learn-circle:before {\n  content: \"\\E00B\"; }\n\n.icon-selenium:before {\n  content: \"\\E00C\"; }\n\n.icon-shapes:before {\n  content: \"\\E00D\"; }\n\n.icon-sign-in-circle:before {\n  content: \"\\E00E\"; }\n\n.icon-projects-circle:before {\n  content: \"\\E00F\"; }\n\n.icon-star-circle:before {\n  content: \"\\E010\"; }\n\n.icon-user-circle:before {\n  content: \"\\E011\"; }\n\n.icon-help-circle:before {\n  content: \"\\E012\"; }\n\n.icon-github-circle:before {\n  content: \"\\E013\"; }\n\n.icon-close-x:before {\n  content: \"\\E014\"; }\n\n.icon-left-arrow-circle:before {\n  content: \"\\E015\"; }\n\n.icon-pencil:before {\n  content: \"\\E016\"; }\n\n.icon-trash:before {\n  content: \"\\E017\"; }\n\n.icon-brush-circle:before {\n  content: \"\\E018\"; }\n\n.icon-apps-circle:before {\n  content: \"\\E019\"; }\n\n.icon-triangle-down:before {\n  content: \"\\E01A\"; }\n\n.icon-triangle-right:before {\n  content: \"\\E01B\"; }\n\n.icon-X-circle:before {\n  content: \"\\E01C\"; }\n\n.icon-X:before {\n  content: \"\\E01D\"; }\n\n.icon-check-circle:before {\n  content: \"\\E01E\"; }\n\n.icon-check:before {\n  content: \"\\E01F\"; }\n\n.icon-plus:before {\n  content: \"\\E020\"; }\n\n.icon-clipboard:before {\n  content: \"\\E021\"; }\n\n.icon-sub-component:before {\n  content: \"\\E022\"; }\n\n.icon-reorder:before {\n  content: \"\\E023\"; }\n\n.icon-table:before {\n  content: \"\\E024\"; }\n\n.icon-private_lock:before {\n  content: \"\\E025\"; }\n\n.icon-hand-geom:before {\n  content: \"\\E026\"; }\n\n.icon-search:before {\n  content: \"\\E027\"; }\n\n.icon-warning:before {\n  content: \"\\E028\"; }\n\n.icon-png:before {\n  content: \"\\E029\"; }\n\n.icon-vector:before {\n  content: \"\\E02A\"; }\n\n.icon-zip:before {\n  content: \"\\E02B\"; }\n\n.icon-back-arrow:before {\n  content: \"\\E02C\"; }\n\n.icon-connectors:before {\n  content: \"\\E02D\"; }\n\n.icon-drop:before {\n  content: \"\\E02E\"; }\n\n.icon-font-size:before {\n  content: \"\\E02F\"; }\n\n.icon-font:before {\n  content: \"\\E030\"; }\n\n.icon-capitalize:before {\n  content: \"\\E031\"; }\n\n.icon-gift:before {\n  content: \"\\E032\"; }\n\n.icon-play:before {\n  content: \"\\E033\"; }\n\n.icon-public_globe:before {\n  content: \"\\E034\"; }\n\n.icon-share-arrow:before {\n  content: \"\\E035\"; }\n\n.icon-info:before {\n  content: \"\\E036\"; }\n\n.icon-pricing-tag:before {\n  content: \"\\E037\"; }\n\n.icon-line-height:before {\n  content: \"\\E038\"; }\n\n.icon-align-center:before {\n  content: \"\\E039\"; }\n\n.icon-align-justify:before {\n  content: \"\\E03A\"; }\n\n.icon-align-left:before {\n  content: \"\\E03B\"; }\n\n.icon-align-right:before {\n  content: \"\\E03C\"; }\n\n.icon-plus-thin:before {\n  content: \"\\E03D\"; }\n\n.icon-settings:before {\n  content: \"\\E03E\"; }\n\n.icon-pencil-box:before {\n  content: \"\\E03F\"; }\n\n.icon-versions-circle-thick:before {\n  content: \"\\E040\"; }\n\n.icon-key:before {\n  content: \"\\E041\"; }\n\n.icon-letter-spacing:before {\n  content: \"\\E042\"; }\n\n.icon-strikethrough:before {\n  content: \"\\E043\"; }\n\n.icon-underline:before {\n  content: \"\\E044\"; }\n\n.icon-cloud-update:before {\n  content: \"\\E045\"; }\n\n.icon-zoom:before {\n  content: \"\\E046\"; }\n\n.icon-left-nav:before {\n  content: \"\\E047\"; }\n\n.icon-top-nav:before {\n  content: \"\\E048\"; }\n\n.icon-blog:before {\n  content: \"\\E049\"; }\n\n.icon-chevron-right:before {\n  content: \"\\E04A\"; }\n\n.icon-arrow-left:before {\n  content: \"\\E04B\"; }\n\n.icon-arrow-right:before {\n  content: \"\\E04C\"; }\n\n.icon-drag-handle-circle-small:before {\n  content: \"\\E04D\"; }\n\n.icon-drag-handle-circle:before {\n  content: \"\\E04E\"; }\n\n.icon-drag-handle-rect:before {\n  content: \"\\E04F\"; }\n\n.icon-move-cross-arrow:before {\n  content: \"\\E050\"; }\n\n.icon-move:before {\n  content: \"\\E051\"; }\n\n.icon-drag-handle-rect-small:before {\n  content: \"\\E052\"; }\n\n.icon-cancel-remove:before {\n  content: \"\\E053\"; }\n\n.icon-checkmark:before {\n  content: \"\\E054\"; }\n\n.icon-exchange:before {\n  content: \"\\E055\"; }\n\n.icon-plus-thick:before {\n  content: \"\\E056\"; }\n\n.icon-versions-stack:before {\n  content: \"\\E057\"; }\n\n.icon-copy:before {\n  content: \"\\E058\"; }\n\n.icon-Slice:before {\n  content: \"\\E059\"; }\n\n.icon-arrow-forward:before {\n  content: \"\\E05A\"; }\n\n.icon-comments-chat:before {\n  content: \"\\E05B\"; }\n\n.icon-duplicate:before {\n  content: \"\\E05C\"; }\n\n.icon-target:before {\n  content: \"\\E05D\"; }\n\n.icon-arrow-up-circle:before {\n  content: \"\\E05F\"; }\n\n.icon-settings-circle:before {\n  content: \"\\E060\"; }\n\n.icon-share-circle:before {\n  content: \"\\E061\"; }\n\n.icon-versions-circle:before {\n  content: \"\\E062\"; }\n\n.icon-add-document:before {\n  content: \"\\E063\"; }\n\n.icon-cloud-upload:before {\n  content: \"\\E064\"; }\n\n.icon-download-circle:before {\n  content: \"\\E065\"; }\n\n.icon-reply:before {\n  content: \"\\E066\"; }\n\n.icon-upload-circle:before {\n  content: \"\\E067\"; }\n\n.icon-view:before {\n  content: \"\\E05E\"; }\n", ""]);

// exports


/***/ }),

/***/ 1253:
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f938d69b7420b684143e73621afe4e88.ttf";

/***/ }),

/***/ 1255:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1257);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"cacheDirectory":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(549)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--3-1!../../node_modules/postcss-loader/lib/index.js??ref--3-2!../../node_modules/sass-loader/lib/loader.js??ref--3-3!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--3-1!../../node_modules/postcss-loader/lib/index.js??ref--3-2!../../node_modules/sass-loader/lib/loader.js??ref--3-3!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(547)(undefined);
// imports


// module
exports.push([module.i, "/* Fonts\n   ----- */\n/* Colors\n   ------ */\n.c-search-box--searching {\n  padding-bottom: 50px; }\n\n.c-search-box__strip {\n  border-bottom: 1px solid lightgrey; }\n\n.c-search-box__strip--searching {\n  width: 100%;\n  background-color: #fbfbfb;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1032;\n  margin-top: 0;\n  background: -webkit-gradient(linear, left top, left bottom, from(#efefef), to(#e6e6e6));\n  background: linear-gradient(to bottom, #efefef 0%, #e6e6e6 100%);\n  -webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); }\n\n.c-search-box__box {\n  position: relative;\n  color: grey;\n  max-width: 190px;\n  margin: 0px auto;\n  padding: 7px 0px; }\n  .c-search-box__box input {\n    border: 1px solid lightgrey;\n    padding: 1px 20px 2px 20px;\n    line-height: 1.3;\n    border-radius: 4px; }\n    .c-search-box__box input:focus {\n      color: #6b6f70;\n      border: 1px solid transparent; }\n\n.c-search-box__box--searching input {\n  color: #6b6f70;\n  border-color: #6b6f70; }\n\n.c-search-box__clear-button {\n  font-size: 10px;\n  position: absolute;\n  right: 11px;\n  top: 13.5px;\n  cursor: pointer; }\n\n.c-search-box__search-icon {\n  font-size: 9px;\n  position: absolute;\n  left: 7px;\n  top: 13.7px; }\n\n.auth0-lock-overlay {\n  background: Window !important;\n  opacity: 1 !important; }\n\n.auth0-lock-widget {\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15) !important;\n          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15) !important; }\n\n.auth0-lock-header-bg-blur {\n  visibility: hidden; }\n\n.auth0-lock-header-bg {\n  background-color: #eaeaea !important; }\n\nh3, h4 {\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px; }\n\n.c-panel {\n  border: 1px solid #dddedb;\n  background-color: #ffffff; }\n\n.form-group {\n  margin-bottom: 10px; }\n  .form-group .checkbox {\n    padding-left: 20px; }\n    .form-group .checkbox input[type=\"checkbox\"] {\n      position: absolute;\n      margin-left: -20px; }\n  .form-group input[type=\"text\"] {\n    padding: 0px 5px; }\n\n.has-error .form-control {\n  border: 1px solid #c30101;\n  border-radius: 2px; }\n\n.form-control {\n  display: block;\n  line-height: 1.8;\n  width: 96%;\n  margin: 0px auto; }\n\n.c-button {\n  cursor: pointer; }\n\n.c-dialog__form-label {\n  display: block;\n  margin: 6px 2px;\n  font-size: 13px; }\n\n.c-dialog__url {\n  font-weight: 300;\n  font-style: italic;\n  color: #6b6f70;\n  margin-left: 2px; }\n\n.c-organization-exists__message {\n  text-align: center;\n  padding-top: 15px;\n  border-top: 1px solid #eaeaea;\n  margin-top: 20px; }\n  .c-organization-exists__message:empty:before {\n    content: \"\\A0\"; }\n\n.c-panel-section__title {\n  font-size: 15px;\n  font-weight: 400;\n  border-bottom: 1px solid #dddedb;\n  padding: 13px 16px; }\n\n.c-sign-up {\n  background-color: #fbfbf9;\n  color: #1b1b1b;\n  height: 480px; }\n\n.c-sign-up-header {\n  background-color: #ebebeb;\n  font-weight: 400;\n  line-height: 2.5;\n  text-align: center; }\n\n.c-tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.c-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center;\n  background: -webkit-gradient(linear, left bottom, left top, from(#fbfbf9), to(#efefef));\n  background: linear-gradient(to top, #fbfbf9 0%, #efefef 100%);\n  padding: 5px;\n  font-size: 12px;\n  color: #6b6f70;\n  border-right: 1px solid #acacac;\n  border-bottom: 1px solid #dddedb; }\n  .c-tab:last-of-type {\n    border-right: none; }\n\n.c-tab--selected {\n  background: -webkit-gradient(linear, left bottom, left top, from(#efefef), to(#e6e6e6));\n  background: linear-gradient(to top, #efefef 0%, #e6e6e6 100%);\n  border-bottom: 1px solid #efefef; }\n\n.c-artboard-history__back-button {\n  padding: 1px 8px 2px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  background-color: #fbfbf9;\n  color: #333; }\n\n.c-artboard-history__artboard {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #ffffff; }\n\n.c-artboard-history__main-image {\n  height: 250px;\n  margin: 0 auto;\n  display: block;\n  border: 1px solid lightgrey;\n  max-width: 100%; }\n\n.c-artboard-history__version-history-title {\n  margin-top: 325px;\n  padding: 5px 15px;\n  border-bottom: 1px solid #acacac;\n  font-size: 13px;\n  font-weight: bold;\n  color: #4a4a4a; }\n\n.c-artboard-history__item {\n  padding: 10px 15px;\n  border-bottom: 1px solid #eaeaea;\n  cursor: pointer;\n  color: #4a4a4a;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .c-artboard-history__item:last-of-type {\n    margin-bottom: 66px; }\n\n.c-artboard-history-item__metadata {\n  font-style: italic;\n  color: #acacac;\n  font-size: 12px; }\n\n.c-artboard-history__item--selected {\n  background-color: #f4f4f4; }\n\n.c-artboard-history-item__serialnumber {\n  font-weight: bold; }\n\n.c-artboard-history-item__thumbnail {\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  background-color: white;\n  width: 48px;\n  height: 40px;\n  padding: 2px; }\n  .c-artboard-history-item__thumbnail img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain; }\n\n.c-artboard-history__artboard-name {\n  width: 150px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.c-artboard-history-item__descriptionBox {\n  width: 100%; }\n\n.c-collapsible-section.has-divider {\n  border-bottom: 1px solid #dddedb; }\n\n.c-collapsible-section__title {\n  padding: 8px 12px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#efefef), to(#e6e6e6));\n  background: linear-gradient(to bottom, #efefef 0%, #e6e6e6 100%);\n  margin-top: -1px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  color: gray;\n  font-weight: bold;\n  cursor: pointer; }\n\n.c-collapsible-section__content {\n  background-color: #ffffff; }\n  .c-collapsible-section__content.is-collapsed {\n    display: none; }\n\n.c-collapsible-section__icon {\n  margin-right: 15px;\n  font-size: 22px;\n  float: left;\n  margin-top: -5px; }\n\n.c-collapsible-section__disclosure-triangle {\n  float: right;\n  margin-top: 3px; }\n\n.u-m0 {\n  margin: 0px; }\n\n.u-mt0 {\n  margin-top: 0px; }\n\n.u-mr0 {\n  margin-right: 0px; }\n\n.u-mb0 {\n  margin-bottom: 0px; }\n\n.u-ml0 {\n  margin-left: 0px; }\n\n.u-mx0 {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.u-my0 {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.u-p0 {\n  padding: 0px; }\n\n.u-pt0 {\n  padding-top: 0px; }\n\n.u-pr0 {\n  padding-right: 0px; }\n\n.u-pb0 {\n  padding-bottom: 0px; }\n\n.u-pl0 {\n  padding-left: 0px; }\n\n.u-px0 {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.u-py0 {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.u-b0 {\n  bottom: 0px; }\n\n.u-t0 {\n  top: 0px; }\n\n.u-l0 {\n  left: 0px; }\n\n.u-r0 {\n  right: 0px; }\n\n.u-m1 {\n  margin: 3px; }\n\n.u-mt1 {\n  margin-top: 3px; }\n\n.u-mr1 {\n  margin-right: 3px; }\n\n.u-mb1 {\n  margin-bottom: 3px; }\n\n.u-ml1 {\n  margin-left: 3px; }\n\n.u-mx1 {\n  margin-left: 3px;\n  margin-right: 3px; }\n\n.u-my1 {\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n.u-p1 {\n  padding: 3px; }\n\n.u-pt1 {\n  padding-top: 3px; }\n\n.u-pr1 {\n  padding-right: 3px; }\n\n.u-pb1 {\n  padding-bottom: 3px; }\n\n.u-pl1 {\n  padding-left: 3px; }\n\n.u-px1 {\n  padding-left: 3px;\n  padding-right: 3px; }\n\n.u-py1 {\n  padding-top: 3px;\n  padding-bottom: 3px; }\n\n.u-b1 {\n  bottom: 3px; }\n\n.u-t1 {\n  top: 3px; }\n\n.u-l1 {\n  left: 3px; }\n\n.u-r1 {\n  right: 3px; }\n\n.u-m2 {\n  margin: 6px; }\n\n.u-mt2 {\n  margin-top: 6px; }\n\n.u-mr2 {\n  margin-right: 6px; }\n\n.u-mb2 {\n  margin-bottom: 6px; }\n\n.u-ml2 {\n  margin-left: 6px; }\n\n.u-mx2 {\n  margin-left: 6px;\n  margin-right: 6px; }\n\n.u-my2 {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.u-p2 {\n  padding: 6px; }\n\n.u-pt2 {\n  padding-top: 6px; }\n\n.u-pr2 {\n  padding-right: 6px; }\n\n.u-pb2 {\n  padding-bottom: 6px; }\n\n.u-pl2 {\n  padding-left: 6px; }\n\n.u-px2 {\n  padding-left: 6px;\n  padding-right: 6px; }\n\n.u-py2 {\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.u-b2 {\n  bottom: 6px; }\n\n.u-t2 {\n  top: 6px; }\n\n.u-l2 {\n  left: 6px; }\n\n.u-r2 {\n  right: 6px; }\n\n.u-m3 {\n  margin: 9px; }\n\n.u-mt3 {\n  margin-top: 9px; }\n\n.u-mr3 {\n  margin-right: 9px; }\n\n.u-mb3 {\n  margin-bottom: 9px; }\n\n.u-ml3 {\n  margin-left: 9px; }\n\n.u-mx3 {\n  margin-left: 9px;\n  margin-right: 9px; }\n\n.u-my3 {\n  margin-top: 9px;\n  margin-bottom: 9px; }\n\n.u-p3 {\n  padding: 9px; }\n\n.u-pt3 {\n  padding-top: 9px; }\n\n.u-pr3 {\n  padding-right: 9px; }\n\n.u-pb3 {\n  padding-bottom: 9px; }\n\n.u-pl3 {\n  padding-left: 9px; }\n\n.u-px3 {\n  padding-left: 9px;\n  padding-right: 9px; }\n\n.u-py3 {\n  padding-top: 9px;\n  padding-bottom: 9px; }\n\n.u-b3 {\n  bottom: 9px; }\n\n.u-t3 {\n  top: 9px; }\n\n.u-l3 {\n  left: 9px; }\n\n.u-r3 {\n  right: 9px; }\n\n.u-m4 {\n  margin: 12px; }\n\n.u-mt4 {\n  margin-top: 12px; }\n\n.u-mr4 {\n  margin-right: 12px; }\n\n.u-mb4 {\n  margin-bottom: 12px; }\n\n.u-ml4 {\n  margin-left: 12px; }\n\n.u-mx4 {\n  margin-left: 12px;\n  margin-right: 12px; }\n\n.u-my4 {\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.u-p4 {\n  padding: 12px; }\n\n.u-pt4 {\n  padding-top: 12px; }\n\n.u-pr4 {\n  padding-right: 12px; }\n\n.u-pb4 {\n  padding-bottom: 12px; }\n\n.u-pl4 {\n  padding-left: 12px; }\n\n.u-px4 {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.u-py4 {\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n.u-b4 {\n  bottom: 12px; }\n\n.u-t4 {\n  top: 12px; }\n\n.u-l4 {\n  left: 12px; }\n\n.u-r4 {\n  right: 12px; }\n\n.u-m5 {\n  margin: 15px; }\n\n.u-mt5 {\n  margin-top: 15px; }\n\n.u-mr5 {\n  margin-right: 15px; }\n\n.u-mb5 {\n  margin-bottom: 15px; }\n\n.u-ml5 {\n  margin-left: 15px; }\n\n.u-mx5 {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.u-my5 {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.u-p5 {\n  padding: 15px; }\n\n.u-pt5 {\n  padding-top: 15px; }\n\n.u-pr5 {\n  padding-right: 15px; }\n\n.u-pb5 {\n  padding-bottom: 15px; }\n\n.u-pl5 {\n  padding-left: 15px; }\n\n.u-px5 {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.u-py5 {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.u-b5 {\n  bottom: 15px; }\n\n.u-t5 {\n  top: 15px; }\n\n.u-l5 {\n  left: 15px; }\n\n.u-r5 {\n  right: 15px; }\n\n.u-m6 {\n  margin: 18px; }\n\n.u-mt6 {\n  margin-top: 18px; }\n\n.u-mr6 {\n  margin-right: 18px; }\n\n.u-mb6 {\n  margin-bottom: 18px; }\n\n.u-ml6 {\n  margin-left: 18px; }\n\n.u-mx6 {\n  margin-left: 18px;\n  margin-right: 18px; }\n\n.u-my6 {\n  margin-top: 18px;\n  margin-bottom: 18px; }\n\n.u-p6 {\n  padding: 18px; }\n\n.u-pt6 {\n  padding-top: 18px; }\n\n.u-pr6 {\n  padding-right: 18px; }\n\n.u-pb6 {\n  padding-bottom: 18px; }\n\n.u-pl6 {\n  padding-left: 18px; }\n\n.u-px6 {\n  padding-left: 18px;\n  padding-right: 18px; }\n\n.u-py6 {\n  padding-top: 18px;\n  padding-bottom: 18px; }\n\n.u-b6 {\n  bottom: 18px; }\n\n.u-t6 {\n  top: 18px; }\n\n.u-l6 {\n  left: 18px; }\n\n.u-r6 {\n  right: 18px; }\n\n.u-m7 {\n  margin: 21px; }\n\n.u-mt7 {\n  margin-top: 21px; }\n\n.u-mr7 {\n  margin-right: 21px; }\n\n.u-mb7 {\n  margin-bottom: 21px; }\n\n.u-ml7 {\n  margin-left: 21px; }\n\n.u-mx7 {\n  margin-left: 21px;\n  margin-right: 21px; }\n\n.u-my7 {\n  margin-top: 21px;\n  margin-bottom: 21px; }\n\n.u-p7 {\n  padding: 21px; }\n\n.u-pt7 {\n  padding-top: 21px; }\n\n.u-pr7 {\n  padding-right: 21px; }\n\n.u-pb7 {\n  padding-bottom: 21px; }\n\n.u-pl7 {\n  padding-left: 21px; }\n\n.u-px7 {\n  padding-left: 21px;\n  padding-right: 21px; }\n\n.u-py7 {\n  padding-top: 21px;\n  padding-bottom: 21px; }\n\n.u-b7 {\n  bottom: 21px; }\n\n.u-t7 {\n  top: 21px; }\n\n.u-l7 {\n  left: 21px; }\n\n.u-r7 {\n  right: 21px; }\n\n.u-m8 {\n  margin: 24px; }\n\n.u-mt8 {\n  margin-top: 24px; }\n\n.u-mr8 {\n  margin-right: 24px; }\n\n.u-mb8 {\n  margin-bottom: 24px; }\n\n.u-ml8 {\n  margin-left: 24px; }\n\n.u-mx8 {\n  margin-left: 24px;\n  margin-right: 24px; }\n\n.u-my8 {\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\n.u-p8 {\n  padding: 24px; }\n\n.u-pt8 {\n  padding-top: 24px; }\n\n.u-pr8 {\n  padding-right: 24px; }\n\n.u-pb8 {\n  padding-bottom: 24px; }\n\n.u-pl8 {\n  padding-left: 24px; }\n\n.u-px8 {\n  padding-left: 24px;\n  padding-right: 24px; }\n\n.u-py8 {\n  padding-top: 24px;\n  padding-bottom: 24px; }\n\n.u-b8 {\n  bottom: 24px; }\n\n.u-t8 {\n  top: 24px; }\n\n.u-l8 {\n  left: 24px; }\n\n.u-r8 {\n  right: 24px; }\n\n.u-m9 {\n  margin: 27px; }\n\n.u-mt9 {\n  margin-top: 27px; }\n\n.u-mr9 {\n  margin-right: 27px; }\n\n.u-mb9 {\n  margin-bottom: 27px; }\n\n.u-ml9 {\n  margin-left: 27px; }\n\n.u-mx9 {\n  margin-left: 27px;\n  margin-right: 27px; }\n\n.u-my9 {\n  margin-top: 27px;\n  margin-bottom: 27px; }\n\n.u-p9 {\n  padding: 27px; }\n\n.u-pt9 {\n  padding-top: 27px; }\n\n.u-pr9 {\n  padding-right: 27px; }\n\n.u-pb9 {\n  padding-bottom: 27px; }\n\n.u-pl9 {\n  padding-left: 27px; }\n\n.u-px9 {\n  padding-left: 27px;\n  padding-right: 27px; }\n\n.u-py9 {\n  padding-top: 27px;\n  padding-bottom: 27px; }\n\n.u-b9 {\n  bottom: 27px; }\n\n.u-t9 {\n  top: 27px; }\n\n.u-l9 {\n  left: 27px; }\n\n.u-r9 {\n  right: 27px; }\n\n.u-m10 {\n  margin: 30px; }\n\n.u-mt10 {\n  margin-top: 30px; }\n\n.u-mr10 {\n  margin-right: 30px; }\n\n.u-mb10 {\n  margin-bottom: 30px; }\n\n.u-ml10 {\n  margin-left: 30px; }\n\n.u-mx10 {\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.u-my10 {\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n.u-p10 {\n  padding: 30px; }\n\n.u-pt10 {\n  padding-top: 30px; }\n\n.u-pr10 {\n  padding-right: 30px; }\n\n.u-pb10 {\n  padding-bottom: 30px; }\n\n.u-pl10 {\n  padding-left: 30px; }\n\n.u-px10 {\n  padding-left: 30px;\n  padding-right: 30px; }\n\n.u-py10 {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.u-b10 {\n  bottom: 30px; }\n\n.u-t10 {\n  top: 30px; }\n\n.u-l10 {\n  left: 30px; }\n\n.u-r10 {\n  right: 30px; }\n\n.u-m11 {\n  margin: 33px; }\n\n.u-mt11 {\n  margin-top: 33px; }\n\n.u-mr11 {\n  margin-right: 33px; }\n\n.u-mb11 {\n  margin-bottom: 33px; }\n\n.u-ml11 {\n  margin-left: 33px; }\n\n.u-mx11 {\n  margin-left: 33px;\n  margin-right: 33px; }\n\n.u-my11 {\n  margin-top: 33px;\n  margin-bottom: 33px; }\n\n.u-p11 {\n  padding: 33px; }\n\n.u-pt11 {\n  padding-top: 33px; }\n\n.u-pr11 {\n  padding-right: 33px; }\n\n.u-pb11 {\n  padding-bottom: 33px; }\n\n.u-pl11 {\n  padding-left: 33px; }\n\n.u-px11 {\n  padding-left: 33px;\n  padding-right: 33px; }\n\n.u-py11 {\n  padding-top: 33px;\n  padding-bottom: 33px; }\n\n.u-b11 {\n  bottom: 33px; }\n\n.u-t11 {\n  top: 33px; }\n\n.u-l11 {\n  left: 33px; }\n\n.u-r11 {\n  right: 33px; }\n\n.u-m12 {\n  margin: 36px; }\n\n.u-mt12 {\n  margin-top: 36px; }\n\n.u-mr12 {\n  margin-right: 36px; }\n\n.u-mb12 {\n  margin-bottom: 36px; }\n\n.u-ml12 {\n  margin-left: 36px; }\n\n.u-mx12 {\n  margin-left: 36px;\n  margin-right: 36px; }\n\n.u-my12 {\n  margin-top: 36px;\n  margin-bottom: 36px; }\n\n.u-p12 {\n  padding: 36px; }\n\n.u-pt12 {\n  padding-top: 36px; }\n\n.u-pr12 {\n  padding-right: 36px; }\n\n.u-pb12 {\n  padding-bottom: 36px; }\n\n.u-pl12 {\n  padding-left: 36px; }\n\n.u-px12 {\n  padding-left: 36px;\n  padding-right: 36px; }\n\n.u-py12 {\n  padding-top: 36px;\n  padding-bottom: 36px; }\n\n.u-b12 {\n  bottom: 36px; }\n\n.u-t12 {\n  top: 36px; }\n\n.u-l12 {\n  left: 36px; }\n\n.u-r12 {\n  right: 36px; }\n\n.u-m13 {\n  margin: 39px; }\n\n.u-mt13 {\n  margin-top: 39px; }\n\n.u-mr13 {\n  margin-right: 39px; }\n\n.u-mb13 {\n  margin-bottom: 39px; }\n\n.u-ml13 {\n  margin-left: 39px; }\n\n.u-mx13 {\n  margin-left: 39px;\n  margin-right: 39px; }\n\n.u-my13 {\n  margin-top: 39px;\n  margin-bottom: 39px; }\n\n.u-p13 {\n  padding: 39px; }\n\n.u-pt13 {\n  padding-top: 39px; }\n\n.u-pr13 {\n  padding-right: 39px; }\n\n.u-pb13 {\n  padding-bottom: 39px; }\n\n.u-pl13 {\n  padding-left: 39px; }\n\n.u-px13 {\n  padding-left: 39px;\n  padding-right: 39px; }\n\n.u-py13 {\n  padding-top: 39px;\n  padding-bottom: 39px; }\n\n.u-b13 {\n  bottom: 39px; }\n\n.u-t13 {\n  top: 39px; }\n\n.u-l13 {\n  left: 39px; }\n\n.u-r13 {\n  right: 39px; }\n\n.u-m14 {\n  margin: 42px; }\n\n.u-mt14 {\n  margin-top: 42px; }\n\n.u-mr14 {\n  margin-right: 42px; }\n\n.u-mb14 {\n  margin-bottom: 42px; }\n\n.u-ml14 {\n  margin-left: 42px; }\n\n.u-mx14 {\n  margin-left: 42px;\n  margin-right: 42px; }\n\n.u-my14 {\n  margin-top: 42px;\n  margin-bottom: 42px; }\n\n.u-p14 {\n  padding: 42px; }\n\n.u-pt14 {\n  padding-top: 42px; }\n\n.u-pr14 {\n  padding-right: 42px; }\n\n.u-pb14 {\n  padding-bottom: 42px; }\n\n.u-pl14 {\n  padding-left: 42px; }\n\n.u-px14 {\n  padding-left: 42px;\n  padding-right: 42px; }\n\n.u-py14 {\n  padding-top: 42px;\n  padding-bottom: 42px; }\n\n.u-b14 {\n  bottom: 42px; }\n\n.u-t14 {\n  top: 42px; }\n\n.u-l14 {\n  left: 42px; }\n\n.u-r14 {\n  right: 42px; }\n\n.u-m15 {\n  margin: 45px; }\n\n.u-mt15 {\n  margin-top: 45px; }\n\n.u-mr15 {\n  margin-right: 45px; }\n\n.u-mb15 {\n  margin-bottom: 45px; }\n\n.u-ml15 {\n  margin-left: 45px; }\n\n.u-mx15 {\n  margin-left: 45px;\n  margin-right: 45px; }\n\n.u-my15 {\n  margin-top: 45px;\n  margin-bottom: 45px; }\n\n.u-p15 {\n  padding: 45px; }\n\n.u-pt15 {\n  padding-top: 45px; }\n\n.u-pr15 {\n  padding-right: 45px; }\n\n.u-pb15 {\n  padding-bottom: 45px; }\n\n.u-pl15 {\n  padding-left: 45px; }\n\n.u-px15 {\n  padding-left: 45px;\n  padding-right: 45px; }\n\n.u-py15 {\n  padding-top: 45px;\n  padding-bottom: 45px; }\n\n.u-b15 {\n  bottom: 45px; }\n\n.u-t15 {\n  top: 45px; }\n\n.u-l15 {\n  left: 45px; }\n\n.u-r15 {\n  right: 45px; }\n\n.u-m16 {\n  margin: 48px; }\n\n.u-mt16 {\n  margin-top: 48px; }\n\n.u-mr16 {\n  margin-right: 48px; }\n\n.u-mb16 {\n  margin-bottom: 48px; }\n\n.u-ml16 {\n  margin-left: 48px; }\n\n.u-mx16 {\n  margin-left: 48px;\n  margin-right: 48px; }\n\n.u-my16 {\n  margin-top: 48px;\n  margin-bottom: 48px; }\n\n.u-p16 {\n  padding: 48px; }\n\n.u-pt16 {\n  padding-top: 48px; }\n\n.u-pr16 {\n  padding-right: 48px; }\n\n.u-pb16 {\n  padding-bottom: 48px; }\n\n.u-pl16 {\n  padding-left: 48px; }\n\n.u-px16 {\n  padding-left: 48px;\n  padding-right: 48px; }\n\n.u-py16 {\n  padding-top: 48px;\n  padding-bottom: 48px; }\n\n.u-b16 {\n  bottom: 48px; }\n\n.u-t16 {\n  top: 48px; }\n\n.u-l16 {\n  left: 48px; }\n\n.u-r16 {\n  right: 48px; }\n\n.u-m17 {\n  margin: 51px; }\n\n.u-mt17 {\n  margin-top: 51px; }\n\n.u-mr17 {\n  margin-right: 51px; }\n\n.u-mb17 {\n  margin-bottom: 51px; }\n\n.u-ml17 {\n  margin-left: 51px; }\n\n.u-mx17 {\n  margin-left: 51px;\n  margin-right: 51px; }\n\n.u-my17 {\n  margin-top: 51px;\n  margin-bottom: 51px; }\n\n.u-p17 {\n  padding: 51px; }\n\n.u-pt17 {\n  padding-top: 51px; }\n\n.u-pr17 {\n  padding-right: 51px; }\n\n.u-pb17 {\n  padding-bottom: 51px; }\n\n.u-pl17 {\n  padding-left: 51px; }\n\n.u-px17 {\n  padding-left: 51px;\n  padding-right: 51px; }\n\n.u-py17 {\n  padding-top: 51px;\n  padding-bottom: 51px; }\n\n.u-b17 {\n  bottom: 51px; }\n\n.u-t17 {\n  top: 51px; }\n\n.u-l17 {\n  left: 51px; }\n\n.u-r17 {\n  right: 51px; }\n\n.u-m18 {\n  margin: 54px; }\n\n.u-mt18 {\n  margin-top: 54px; }\n\n.u-mr18 {\n  margin-right: 54px; }\n\n.u-mb18 {\n  margin-bottom: 54px; }\n\n.u-ml18 {\n  margin-left: 54px; }\n\n.u-mx18 {\n  margin-left: 54px;\n  margin-right: 54px; }\n\n.u-my18 {\n  margin-top: 54px;\n  margin-bottom: 54px; }\n\n.u-p18 {\n  padding: 54px; }\n\n.u-pt18 {\n  padding-top: 54px; }\n\n.u-pr18 {\n  padding-right: 54px; }\n\n.u-pb18 {\n  padding-bottom: 54px; }\n\n.u-pl18 {\n  padding-left: 54px; }\n\n.u-px18 {\n  padding-left: 54px;\n  padding-right: 54px; }\n\n.u-py18 {\n  padding-top: 54px;\n  padding-bottom: 54px; }\n\n.u-b18 {\n  bottom: 54px; }\n\n.u-t18 {\n  top: 54px; }\n\n.u-l18 {\n  left: 54px; }\n\n.u-r18 {\n  right: 54px; }\n\n.u-m19 {\n  margin: 57px; }\n\n.u-mt19 {\n  margin-top: 57px; }\n\n.u-mr19 {\n  margin-right: 57px; }\n\n.u-mb19 {\n  margin-bottom: 57px; }\n\n.u-ml19 {\n  margin-left: 57px; }\n\n.u-mx19 {\n  margin-left: 57px;\n  margin-right: 57px; }\n\n.u-my19 {\n  margin-top: 57px;\n  margin-bottom: 57px; }\n\n.u-p19 {\n  padding: 57px; }\n\n.u-pt19 {\n  padding-top: 57px; }\n\n.u-pr19 {\n  padding-right: 57px; }\n\n.u-pb19 {\n  padding-bottom: 57px; }\n\n.u-pl19 {\n  padding-left: 57px; }\n\n.u-px19 {\n  padding-left: 57px;\n  padding-right: 57px; }\n\n.u-py19 {\n  padding-top: 57px;\n  padding-bottom: 57px; }\n\n.u-b19 {\n  bottom: 57px; }\n\n.u-t19 {\n  top: 57px; }\n\n.u-l19 {\n  left: 57px; }\n\n.u-r19 {\n  right: 57px; }\n\n.u-m20 {\n  margin: 60px; }\n\n.u-mt20 {\n  margin-top: 60px; }\n\n.u-mr20 {\n  margin-right: 60px; }\n\n.u-mb20 {\n  margin-bottom: 60px; }\n\n.u-ml20 {\n  margin-left: 60px; }\n\n.u-mx20 {\n  margin-left: 60px;\n  margin-right: 60px; }\n\n.u-my20 {\n  margin-top: 60px;\n  margin-bottom: 60px; }\n\n.u-p20 {\n  padding: 60px; }\n\n.u-pt20 {\n  padding-top: 60px; }\n\n.u-pr20 {\n  padding-right: 60px; }\n\n.u-pb20 {\n  padding-bottom: 60px; }\n\n.u-pl20 {\n  padding-left: 60px; }\n\n.u-px20 {\n  padding-left: 60px;\n  padding-right: 60px; }\n\n.u-py20 {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.u-b20 {\n  bottom: 60px; }\n\n.u-t20 {\n  top: 60px; }\n\n.u-l20 {\n  left: 60px; }\n\n.u-r20 {\n  right: 60px; }\n\n.u-small {\n  font-size: 11px; }\n\n.u-medium {\n  font-size: 13px; }\n\n.u-large {\n  font-size: 14px; }\n\n.u-xl {\n  font-size: 15px; }\n\n.u-light {\n  font-weight: 300; }\n\n.u-normal {\n  font-weight: 400; }\n\n.u-semi-bold {\n  font-weight: 600; }\n\n.u-bold {\n  font-weight: 700; }\n\n.u-italic {\n  font-style: italic; }\n\n.u-oblique {\n  font-style: oblique; }\n\n.u-text-center {\n  text-align: center; }\n\n.u-section-border {\n  border: 1px solid #dddedb; }\n\n.u-section-border-light {\n  border: 1px solid #eaeaea; }\n\n.u-section-border-top-light {\n  border-top: 1px solid #eaeaea; }\n\n.u-section-border-bottom-light {\n  border-bottom: 1px solid #eaeaea; }\n\n.u-section-border-top {\n  border-top: 1px solid #dddedb; }\n\n.u-section-border-right {\n  border-right: 1px solid #dddedb; }\n\n.u-section-border-bottom {\n  border-bottom: 1px solid #dddedb; }\n\n.u-section-border-y {\n  border-bottom: 1px solid #dddedb;\n  border-top: 1px solid #dddedb; }\n\n.u-cursor-pointer {\n  cursor: pointer; }\n\n.u-absolute {\n  position: absolute; }\n\n.u-relative {\n  position: relative; }\n\n.u-pull-right {\n  float: right; }\n\n.u-inline-block {\n  display: inline-block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, 'Helvetica Neue', 'Helvetica', sans-serif;\n  font-size: 13px;\n  -webkit-user-select: none;\n  cursor: default;\n  -webkit-font-smoothing: subpixel-antialiased; }\n\nbutton {\n  font-size: 13px;\n  cursor: pointer; }\n  button .icon {\n    position: relative;\n    top: 2px;\n    margin-right: 6px; }\n    button .icon.icon-only {\n      margin-right: 0; }\n\n.button-sm {\n  font-size: 11px;\n  padding: 3px 10px 4px; }\n  .button-sm .icon {\n    position: relative;\n    top: 2px;\n    margin-right: 4px; }\n    .button-sm .icon.icon-only {\n      margin-right: 0; }\n\n.button-head {\n  padding: 1px 8px 2px;\n  border: 1px solid #aaa;\n  background: transparent;\n  border-radius: 5px;\n  color: #333; }\n  .button-head:active {\n    background: #ddd; }\n\n.message {\n  margin: 70px 20px 20px;\n  color: gray;\n  text-align: center;\n  font-size: 15px; }\n\n.styleguide-message {\n  margin: 35px 20px;\n  color: gray;\n  text-align: center;\n  font-size: 15px; }\n\n.sub-message {\n  margin: 10px 10px 0;\n  color: gray;\n  text-align: center;\n  font-size: 12px; }\n\n.alert {\n  position: fixed;\n  height: 30px;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0px 12px;\n  font-size: 10px;\n  z-index: 200; }\n\n.alert-message {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.alert-link {\n  text-decoration: underline;\n  cursor: pointer; }\n\n.alert--warning {\n  color: #524602;\n  border-bottom: 1px solid #e5dda0;\n  background: #fff9db; }\n\n.alert--info {\n  border-bottom: 1px solid #dddedb;\n  border-top: 1px solid #dddedb;\n  background-color: #eaeaea; }\n\n.alert--default {\n  background-color: #ffffff;\n  border-top: 1px solid #dddedb;\n  border-bottom: 1px solid #dddedb; }\n\n.alert--bottom {\n  bottom: 0px;\n  top: initial; }\n\n.has-alert {\n  margin-bottom: 30px; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 10px; }\n\n.cell {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 8px;\n  min-width: 0; }\n\n.cell-md {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.c-image-tile--md {\n  height: 96px; }\n\n@media (min-width: 360px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; } }\n\n@media (min-width: 480px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%; } }\n\n@media (min-width: 600px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%; } }\n\n@media (min-width: 720px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%; } }\n\n@media (min-width: 840px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 14.28571%;\n            flex: 0 0 14.28571%; } }\n\n@media (min-width: 960px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 12.5%;\n            flex: 0 0 12.5%; } }\n\n@media (min-width: 1080px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 11.11111%;\n            flex: 0 0 11.11111%; } }\n\n@media (min-width: 1200px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%; } }\n\n@media (min-width: 1320px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 9.09091%;\n            flex: 0 0 9.09091%; } }\n\n@media (min-width: 1440px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%; } }\n\n@media (min-width: 1560px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.69231%;\n            flex: 0 0 7.69231%; } }\n\n@media (min-width: 1680px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.14286%;\n            flex: 0 0 7.14286%; } }\n\n@media (min-width: 1800px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.66667%;\n            flex: 0 0 6.66667%; } }\n\n@media (min-width: 1920px) {\n  .cell-md {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.25%;\n            flex: 0 0 6.25%; } }\n\n.cell-sm {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.c-image-tile--sm {\n  height: 72px; }\n\n@media (min-width: 270px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; } }\n\n@media (min-width: 360px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%; } }\n\n@media (min-width: 450px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%; } }\n\n@media (min-width: 540px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%; } }\n\n@media (min-width: 630px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 14.28571%;\n            flex: 0 0 14.28571%; } }\n\n@media (min-width: 720px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 12.5%;\n            flex: 0 0 12.5%; } }\n\n@media (min-width: 810px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 11.11111%;\n            flex: 0 0 11.11111%; } }\n\n@media (min-width: 900px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%; } }\n\n@media (min-width: 990px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 9.09091%;\n            flex: 0 0 9.09091%; } }\n\n@media (min-width: 1080px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%; } }\n\n@media (min-width: 1170px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.69231%;\n            flex: 0 0 7.69231%; } }\n\n@media (min-width: 1260px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.14286%;\n            flex: 0 0 7.14286%; } }\n\n@media (min-width: 1350px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.66667%;\n            flex: 0 0 6.66667%; } }\n\n@media (min-width: 1440px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.25%;\n            flex: 0 0 6.25%; } }\n\n@media (min-width: 1530px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.88235%;\n            flex: 0 0 5.88235%; } }\n\n@media (min-width: 1620px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.55556%;\n            flex: 0 0 5.55556%; } }\n\n@media (min-width: 1710px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.26316%;\n            flex: 0 0 5.26316%; } }\n\n@media (min-width: 1800px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%; } }\n\n@media (min-width: 1890px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.7619%;\n            flex: 0 0 4.7619%; } }\n\n@media (min-width: 1980px) {\n  .cell-sm {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.54545%;\n            flex: 0 0 4.54545%; } }\n\n.cell-xs {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.c-image-tile--xs {\n  height: 48px; }\n\n@media (min-width: 180px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; } }\n\n@media (min-width: 240px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%; } }\n\n@media (min-width: 300px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%; } }\n\n@media (min-width: 360px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%; } }\n\n@media (min-width: 420px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 14.28571%;\n            flex: 0 0 14.28571%; } }\n\n@media (min-width: 480px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 12.5%;\n            flex: 0 0 12.5%; } }\n\n@media (min-width: 540px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 11.11111%;\n            flex: 0 0 11.11111%; } }\n\n@media (min-width: 600px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%; } }\n\n@media (min-width: 660px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 9.09091%;\n            flex: 0 0 9.09091%; } }\n\n@media (min-width: 720px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%; } }\n\n@media (min-width: 780px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.69231%;\n            flex: 0 0 7.69231%; } }\n\n@media (min-width: 840px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 7.14286%;\n            flex: 0 0 7.14286%; } }\n\n@media (min-width: 900px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.66667%;\n            flex: 0 0 6.66667%; } }\n\n@media (min-width: 960px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 6.25%;\n            flex: 0 0 6.25%; } }\n\n@media (min-width: 1020px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.88235%;\n            flex: 0 0 5.88235%; } }\n\n@media (min-width: 1080px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.55556%;\n            flex: 0 0 5.55556%; } }\n\n@media (min-width: 1140px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5.26316%;\n            flex: 0 0 5.26316%; } }\n\n@media (min-width: 1200px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%; } }\n\n@media (min-width: 1260px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.7619%;\n            flex: 0 0 4.7619%; } }\n\n@media (min-width: 1320px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.54545%;\n            flex: 0 0 4.54545%; } }\n\n@media (min-width: 1380px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.34783%;\n            flex: 0 0 4.34783%; } }\n\n@media (min-width: 1440px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4.16667%;\n            flex: 0 0 4.16667%; } }\n\n@media (min-width: 1500px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 4%;\n            flex: 0 0 4%; } }\n\n@media (min-width: 1560px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.84615%;\n            flex: 0 0 3.84615%; } }\n\n@media (min-width: 1620px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.7037%;\n            flex: 0 0 3.7037%; } }\n\n@media (min-width: 1680px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.57143%;\n            flex: 0 0 3.57143%; } }\n\n@media (min-width: 1740px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.44828%;\n            flex: 0 0 3.44828%; } }\n\n@media (min-width: 1800px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.33333%;\n            flex: 0 0 3.33333%; } }\n\n@media (min-width: 1860px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.22581%;\n            flex: 0 0 3.22581%; } }\n\n@media (min-width: 1920px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.125%;\n            flex: 0 0 3.125%; } }\n\n@media (min-width: 1980px) {\n  .cell-xs {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 3.0303%;\n            flex: 0 0 3.0303%; } }\n\n.section-border-bottom {\n  border-bottom: 1px solid #EEE; }\n\n.SectionHead, .section-head {\n  padding: 4px 12px;\n  background: #f6f6f4;\n  margin-top: -1px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc; }\n\n.SectionHead--dashed, .section-head__dashed {\n  border-top: 1px dashed #ccc;\n  border-bottom: 1px dashed #ccc; }\n\n.SectionHead__title, .section-title {\n  color: gray;\n  font-weight: bold;\n  margin: 4px 0; }\n  .SectionHead__title input, .section-title input {\n    display: block;\n    width: 50%;\n    font-weight: inherit;\n    font-size: inherit;\n    color: #555;\n    padding: 1px 2px;\n    margin: -3px -4px; }\n\n.section-title-sm {\n  color: gray;\n  font-weight: bold;\n  font-size: 12px; }\n\n.note {\n  font-size: 11px;\n  text-align: center;\n  margin: 10px 10px 5px; }\n\n.c-image-tile {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 8px;\n  border-radius: 3px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1); }\n  .c-image-tile > img {\n    max-width: 100%;\n    max-height: 100%; }\n  .c-image-tile.c-image-tile--selectable img {\n    cursor: pointer; }\n\n.cell-label {\n  text-align: center;\n  font-size: 11px;\n  margin-top: 3px;\n  padding-bottom: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\nimg[draggable=true] {\n  cursor: -webkit-grab; }\n\nimg[draggable=true]:active {\n  cursor: -webkit-grabbing; }\n\n.color-swatch-bg {\n  /*\n   * 8x8px checkered background for showing behind non-opaque colors.\n   * See http://lea.verou.me/css3patterns/#checkerboard\n   */\n  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee);\n  background-size: 16px 16px;\n  background-position: 0 0, 8px 8px; }\n\n.typography-sample {\n  padding: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  overflow: hidden; }\n  .typography-sample img {\n    cursor: pointer; }\n\n.typography-drag {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.0001; }\n\n.text-center {\n  text-align: center; }\n\n/* Flex layout */\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.flex-none {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.items-baseline {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n.self-start {\n  -ms-flex-item-align: start;\n      align-self: flex-start; }\n\n.self-end {\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.self-center {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.self-baseline {\n  -ms-flex-item-align: baseline;\n      align-self: baseline; }\n\n.self-stretch {\n  -ms-flex-item-align: stretch;\n      align-self: stretch; }\n\n/* Components */\n.ColorSwatch {\n  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1); }\n\n.ColorSwatch__background {\n  /*\n   * 8x8px checkered background for showing behind non-opaque colors.\n   * See http://lea.verou.me/css3patterns/#checkerboard\n   */\n  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee);\n  background-size: 16px 16px;\n  background-position: 0 0, 8px 8px; }\n\n.ColorSwatch__swatch {\n  height: 40px;\n  cursor: pointer;\n  text-align: center; }\n\n.ColorSwatch--sm .ColorSwatch__swatch {\n  height: 28px; }\n\n.TextInput__value {\n  color: #666;\n  background-color: white;\n  text-align: center;\n  font-size: 10px;\n  height: 18px;\n  padding: 3px 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: text; }\n  .TextInput__value input {\n    padding: 0;\n    border: none;\n    text-align: center;\n    font-size: 10px;\n    width: 100%; }\n    .TextInput__value input:focus {\n      outline: none; }\n\n.TextInput__value--editing {\n  outline-color: -webkit-focus-ring-color;\n  outline-style: auto;\n  outline-width: 5px;\n  outline-offset: -2px; }\n\n.c-search-box__buttons {\n  position: absolute;\n  top: 8px;\n  right: 17px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.c-search-box__button {\n  border-radius: 3px;\n  border: 1px solid #acacac;\n  cursor: pointer;\n  padding: 3px 6px;\n  height: 12px;\n  display: inline-block;\n  color: #8a8d8e; }\n\n.c-view-on-web__image {\n  background: no-repeat center;\n  height: 100%;\n  width: 16px; }\n\n.c-image-tile--unselected {\n  border: 1px solid transparent; }\n\n.c-image-tile--selected {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.11);\n          box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.11); }\n  .c-image-tile--selected .c-image-tile {\n    border-radius: 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n", ""]);

// exports


/***/ }),

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserStore__ = __webpack_require__(1259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyleguideStore__ = __webpack_require__(1274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OrganizationStore__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApiClientStore__ = __webpack_require__(1276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ApplicationStore__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SearchResultsStore__ = __webpack_require__(1278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SubscribersStore__ = __webpack_require__(1279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PagesStore__ = __webpack_require__(1281);









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    UserStore: new __WEBPACK_IMPORTED_MODULE_0__UserStore__["a" /* default */](),
    OrganizationStore: new __WEBPACK_IMPORTED_MODULE_2__OrganizationStore__["a" /* default */](),
    StyleguideStore: new __WEBPACK_IMPORTED_MODULE_1__StyleguideStore__["a" /* default */](),
    ApiClientStore: new __WEBPACK_IMPORTED_MODULE_3__ApiClientStore__["a" /* default */](),
    ApplicationStore: new __WEBPACK_IMPORTED_MODULE_4__ApplicationStore__["a" /* default */](),
    SearchResultsStore: new __WEBPACK_IMPORTED_MODULE_5__SearchResultsStore__["a" /* default */](),
    SubscribersStore: new __WEBPACK_IMPORTED_MODULE_6__SubscribersStore__["a" /* default */](),
    PagesStore: new __WEBPACK_IMPORTED_MODULE_7__PagesStore__["a" /* default */]()
  };
});

/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service_js__ = __webpack_require__(112);







var UserStore = __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.init();

    this.bindActions(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].INIT_AUTH_SERVICE, this._initAuthService, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PLUGIN_LOADED, this.onPluginLaunched, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].START_LOADING_USER, this.onStartLoadingUser, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_AUTH_SUCCESS, this.onUserAuthenticated, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_AUTH_FAIL, this.onUserAuthenticationFailed, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_SIGNED_OUT, this.init, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_TOKENS_REFRESHED, this.userTokensUpdated, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_DETAILS_UPDATED, this.userDetailsUpdated);
  },

  init: function init() {
    this.loadingUser = false;
    this.idToken = null;
    this.accessToken = null;
    this.user = null;
  },

  onPluginLaunched: function onPluginLaunched(payload) {
    this.idToken = payload.idToken;
    this.accessToken = payload.accessToken;
    this.emit('change');
  },

  _initAuthService: function _initAuthService(_ref) {
    var idToken = _ref.idToken,
        accessToken = _ref.accessToken;

    if (idToken) {
      localStorage.setItem('userToken', idToken);
    }
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    if (!this.authService) {
      this.authService = new __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["AuthService"]({
        closable: false,
        auth: {
          redirect: false
        }
      }, __WEBPACK_IMPORTED_MODULE_4__services_logger_service_js__["a" /* default */]);
    }
  },

  onStartLoadingUser: function onStartLoadingUser() {
    this.loadingUser = true;
    this.emit('change');
  },

  onUserAuthenticated: function onUserAuthenticated(_ref2) {
    var user = _ref2.user,
        idToken = _ref2.idToken,
        accessToken = _ref2.accessToken;

    this.idToken = idToken;
    this.accessToken = accessToken;
    this.user = user;
    this.loadingUser = false;
    this.emit('change');
  },

  onUserAuthenticationFailed: function onUserAuthenticationFailed() {
    this.init();
    this.emit('change');
  },

  onUserSignedOut: function onUserSignedOut() {
    this.init();
    this.emit('change');
  },

  userTokensUpdated: function userTokensUpdated(_ref3) {
    var idToken = _ref3.idToken,
        accessToken = _ref3.accessToken;

    this.idToken = idToken;
    this.accessToken = accessToken;
    this.emit('change');
  },

  userDetailsUpdated: function userDetailsUpdated(updatedUserDetails) {
    this.user = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, this.user, updatedUserDetails);
    this.emit('change');
  },

  getAuthService: function getAuthService() {
    return this.authService;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (UserStore);

/***/ }),

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_actions_save_type_styles_action__ = __webpack_require__(1261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complex_actions_save_shared_styles_action__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complex_actions_upload_layers_action__ = __webpack_require__(1263);










var constants = {
  START_LOADING_STYLEGUIDE: 'START_LOADING_STYLEGUIDE',
  STYLEGUIDE_LOADED: 'STYLEGUIDE_LOADED',
  STYLEGUIDE_LOAD_FAILED: 'STYLEGUIDE_LOAD_FAILED',
  CURRENT_SECTION_CHANGED: 'CURRENT_SECTION_CHANGED',
  EDITING_STYLEGUIDE_ITEM: 'EDITING_STYLEGUIDE_ITEM',
  STYLEGUIDE_VIEWED: 'STYLEGUIDE_VIEWED',
  START_REFRESHING_STYLEGUIDE: 'START_REFRESHING_STYLEGUIDE',
  REFETCH_CACHEABLE_STYLE_DATA: 'REFETCH_CACHEABLE_STYLE_DATA'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {

    loadStyleData: function loadStyleData(styleguideId) {
      var _this = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var automaticReload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


      var previousStyleguideId = this.flux.store('StyleguideStore').getStyleguideId();

      this.dispatch(constants.START_LOADING_STYLEGUIDE);
      Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('Loading styleguide with id: ' + styleguideId);
      data = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omitBy(data, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil);

      getStyleguideClient(this.flux).loadStyleguideById(styleguideId, data, { skipReporting: automaticReload }).then(function (styleData) {

        _this.dispatch(constants.STYLEGUIDE_LOADED, styleData);

        //This event is needed to differentiate for the specific case where styleguide is loaded as opposed to LOAD_STYLEGUIDE_COMPLETED that happen on each edit as well
        _this.dispatch(constants.STYLEGUIDE_VIEWED, { styleData: styleData, previousStyleguideId: previousStyleguideId });

        // although not pure action it is still an action aimed for the triggering something at the native part
        // Notify native code that type styles have loaded so we can check for installed fonts.
        // As this code might be very long to execute (~3 sec) we use deffer to start their loading
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.defer(__WEBPACK_IMPORTED_MODULE_1__sketch__["i" /* postNativeUIEvent */].bind(null, 'onTypeStylesDidLoad', styleData.styleguide.typeStyles));
      }).catch(function (err) {
        var reportedError = reportLoadError(_this.flux, err, 'load', styleguideId, data.snapshotId);
        _this.dispatch(constants.STYLEGUIDE_LOAD_FAILED, reportedError);
      });
    },

    refreshStyleData: function refreshStyleData() {
      var _this2 = this;

      this.dispatch(constants.START_REFRESHING_STYLEGUIDE);
      var styleguideStore = this.flux.store('StyleguideStore');
      var styleguideId = styleguideStore.getStyleguideId();
      var snapshotId = styleguideStore.getSnapshotId();
      var data = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omitBy({ snapshotId: snapshotId, withVersions: true }, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil);

      Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('Refreshing styleguide with id: ' + styleguideId);

      if (!styleguideId) {
        return;
      }

      getStyleguideClient(this.flux).loadStyleguideById(styleguideId, data, { skipReporting: true }).then(function (styleData) {

        _this2.dispatch(constants.STYLEGUIDE_LOADED, styleData);

        // although not pure action it is still an action aimed for the triggering something at the native part
        //I assume parent libraries cannot change we don't need to go over parent styles upon refresh based on its current usages
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.defer(__WEBPACK_IMPORTED_MODULE_1__sketch__["i" /* postNativeUIEvent */].bind(null, 'onTypeStylesDidLoad', styleData.styleguide.typeStyles));
      }).catch(function (err) {
        var reportedError = reportLoadError(_this2.flux, err, 'refresh', styleguideId, data.snapshotId);

        // removed the 401 here as potentially if there is authentication glitch I don't want to remove all the existing style data
        // and if he really lost the permissions in org there is subscription to reduce his permissions
        if (err.status === 404) {
          _this2.dispatch(constants.STYLEGUIDE_LOAD_FAILED, reportedError);
        }
      });
    },

    updateCurrentSection: function updateCurrentSection(newSection) {
      this.dispatch(constants.CURRENT_SECTION_CHANGED, newSection);
      __WEBPACK_IMPORTED_MODULE_1__sketch__["i" /* postNativeUIEvent */]('onStyleguideSectionChanged', { sectionName: newSection });
    },

    onBeginEditItem: function onBeginEditItem(_ref) {
      var elementID = _ref.elementID;

      this.dispatch(constants.EDITING_STYLEGUIDE_ITEM, elementID);
    },

    onRenameColor: function onRenameColor(paletteID, colorID, name) {
      this.flux.actions.onUpdateItem({
        type: 'colors',
        enclosingType: 'colorSections',
        enclosingID: paletteID,
        elementID: colorID,
        data: { name: name }
      });
    },

    onRenamePalette: function onRenamePalette(paletteID, name) {
      this.flux.actions.onUpdateItem({
        type: 'colorSections',
        elementID: paletteID,
        data: { name: name }
      });
    },

    onRenameLogo: function onRenameLogo(logoId, name) {
      this.flux.actions.onUpdateItem({
        type: 'logos',
        elementID: logoId,
        data: { displayName: name }
      });
    },

    onRenameImageType: function onRenameImageType(imageType, sectionID, imageID, name) {
      this.flux.actions.onUpdateItem({
        type: __WEBPACK_IMPORTED_MODULE_2__util__["t" /* itemsKeyForImageType */](imageType),
        enclosingType: __WEBPACK_IMPORTED_MODULE_2__util__["g" /* categoryKeyForImageType */](imageType),
        elementID: imageID,
        enclosingID: sectionID,
        data: { displayName: name }
      });
    },

    onRenameImageSection: function onRenameImageSection(imageType, sectionID, name) {
      this.flux.actions.onUpdateItem({
        type: __WEBPACK_IMPORTED_MODULE_2__util__["g" /* categoryKeyForImageType */](imageType),
        elementID: sectionID,
        data: { name: name }
      });
    },

    onUpdateItem: function onUpdateItem(_ref2) {
      var _this3 = this;

      var type = _ref2.type,
          enclosingType = _ref2.enclosingType,
          enclosingID = _ref2.enclosingID,
          elementID = _ref2.elementID,
          data = _ref2.data;

      this.dispatch(constants.EDITING_STYLEGUIDE_ITEM, null);
      var updatedData = void 0;
      if (enclosingType && enclosingID) {
        data._id = elementID;
        updatedData = getStyleguideClient(this.flux).updateElementsInNestedArray(type, enclosingType, enclosingID, data);
      } else {
        data._id = elementID;
        updatedData = getStyleguideClient(this.flux).updateElementsInArray(type, data);
      }

      updatedData.then(function (styleData) {
        _this3.dispatch(constants.STYLEGUIDE_LOADED, styleData);
      }).catch(function (err) {
        _this3.flux.actions.onShowError({
          title: 'Error updating item'
        }, err);
      });
    },

    onDeleteItem: function onDeleteItem(_ref3) {
      var _this4 = this;

      var type = _ref3.type,
          enclosingType = _ref3.enclosingType,
          enclosingID = _ref3.enclosingID,
          elementID = _ref3.elementID,
          itemName = _ref3.itemName;

      //todo: extract to the native
      __WEBPACK_IMPORTED_MODULE_1__sketch__["b" /* displayAlert */]({
        title: itemName ? 'Are you sure you want to delete \u201C' + itemName + '\u201D?' : 'Are you sure you want to delete this item?',
        description: 'You can’t undo this action.',
        buttons: ['Delete', 'Cancel']

      }, function (alertResult) {
        if (alertResult == __WEBPACK_IMPORTED_MODULE_2__util__["a" /* AlertResult */].OK) {

          var resolvedStyleData = void 0;
          if (enclosingType && enclosingID) {
            resolvedStyleData = getStyleguideClient(_this4.flux).deleteElementFromNestedArray(type, enclosingType, enclosingID, elementID);
          } else {
            resolvedStyleData = getStyleguideClient(_this4.flux).deleteElementsFromArray(type, [elementID]);
          }

          resolvedStyleData.then(function (styleData) {
            _this4.dispatch(constants.STYLEGUIDE_LOADED, styleData);
          }).catch(function (err) {
            _this4.flux.actions.onShowError({
              title: 'Error deleting item'
            }, err);
          });
        }
      });
    },

    onDeleteItems: function onDeleteItems(_ref4) {
      var _this5 = this;

      var type = _ref4.type,
          elementIDs = _ref4.elementIDs,
          customDescription = _ref4.customDescription;

      //todo: extract alert to the native
      __WEBPACK_IMPORTED_MODULE_1__sketch__["b" /* displayAlert */]({
        title: 'Are you sure you want to delete these items?',
        description: customDescription ? customDescription : 'You can’t undo this action.',
        buttons: ['Delete', 'Cancel']

      }, function (alertResult) {
        if (alertResult == __WEBPACK_IMPORTED_MODULE_2__util__["a" /* AlertResult */].OK) {

          var resolvedStyleData = getStyleguideClient(_this5.flux).deleteElementsFromArray(type, elementIDs);

          resolvedStyleData.then(function (styleData) {
            _this5.dispatch(constants.STYLEGUIDE_LOADED, styleData);
          }).catch(function (err) {
            _this5.flux.actions.onShowError({
              title: 'Error deleting items'
            }, err);
          });
        }
      });
    },

    onAddNewColors: function onAddNewColors(payload) {
      var _this6 = this;

      var palette = {
        colors: payload.colors.map(function (color) {
          return {
            name: '',
            value: color
          };
        })
      };

      getStyleguideClient(this.flux).addElementsToNestedArray('colors', // type
      'colorSections', // enclosingType
      payload.sectionID, // enclosingId
      palette).then(function (styleData) {
        _this6.dispatch(constants.STYLEGUIDE_LOADED, styleData);
      }).catch(function (err) {
        return _this6.flux.actions.onShowError({
          title: 'Adding new color(s) failed',
          style: 'error'
        }, err);
      });
    },

    onAddNewPalette: function onAddNewPalette(name) {
      var _this7 = this;

      return getStyleguideClient(this.flux).addElementsToArray('colorSections', { name: name }).then(function (styleData) {
        _this7.dispatch(constants.STYLEGUIDE_LOADED, styleData);
      }).catch(function (err) {
        _this7.flux.actions.onShowError({
          title: 'Error adding new color palette',
          style: 'error'
        }, err);
      });
    },

    onSaveTypeStyles: function onSaveTypeStyles(_ref5) {
      var _this8 = this;

      var typeStyles = _ref5.typeStyles,
          fontVariants = _ref5.fontVariants;

      var styleData = this.flux.store('StyleguideStore').styleData;
      __WEBPACK_IMPORTED_MODULE_3__complex_actions_save_type_styles_action__["a" /* saveTypeStylesWithDependencies */].call(this, typeStyles, fontVariants, styleData).then(function (styleData) {
        if (styleData) {
          //the data can be undefined, do update the store in this case
          _this8.dispatch(constants.STYLEGUIDE_LOADED, styleData);
        }
      }).catch(function (err) {
        _this8.flux.actions.onShowError({
          title: 'Error adding type style(s)',
          style: 'error'
        }, err);
      });
    },

    onSaveSharedLayerStyles: function onSaveSharedLayerStyles(sharedStyles) {
      var _this9 = this;

      var styleData = this.flux.store('StyleguideStore').styleData;
      __WEBPACK_IMPORTED_MODULE_4__complex_actions_save_shared_styles_action__["a" /* saveSharedLayerStyles */].call(this, sharedStyles, styleData).then(function (styleData) {
        if (styleData) {
          //the data can be undefined, do update the store in this case
          _this9.dispatch(constants.STYLEGUIDE_LOADED, styleData);
        }
      }).catch(function (err) {
        _this9.flux.actions.onShowError({
          title: 'Error adding shared layer style(s)',
          style: 'error'
        }, err);
      });
    },

    onUploadLayers: function onUploadLayers(_ref6) {
      var _this10 = this;

      var newSection = _ref6.newSection,
          layersToUpload = _ref6.layersToUpload,
          sharedLayerStylesToUpload = _ref6.sharedLayerStylesToUpload,
          sharedTypeStylesToUpload = _ref6.sharedTypeStylesToUpload,
          fontVariantsToUpload = _ref6.fontVariantsToUpload;

      var initialStyleData = this.flux.store('StyleguideStore').styleData; //this styleData is normalized and updated with global lists
      var styleDataImageHashes = this.flux.store('StyleguideStore').styleDataImageHashes;
      __WEBPACK_IMPORTED_MODULE_4__complex_actions_save_shared_styles_action__["a" /* saveSharedLayerStyles */].call(this, sharedLayerStylesToUpload, initialStyleData, true).then(function (styleData) {
        if (styleData) {
          _this10.dispatch(constants.STYLEGUIDE_LOADED, styleData);
        }
        return __WEBPACK_IMPORTED_MODULE_3__complex_actions_save_type_styles_action__["a" /* saveTypeStylesWithDependencies */].call(_this10, sharedTypeStylesToUpload, fontVariantsToUpload, initialStyleData, true);
      }).then(function (styleData) {
        if (styleData) {
          _this10.dispatch(constants.STYLEGUIDE_LOADED, styleData);
        }
        return __WEBPACK_IMPORTED_MODULE_5__complex_actions_upload_layers_action__["a" /* uploadLayers */].call(_this10, newSection, layersToUpload, initialStyleData, styleDataImageHashes);
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_1__sketch__["g" /* hideProgressSheet */]();
        _this10.flux.actions.onShowError({
          title: 'Error uploading layers.',
          style: 'error'
        }, err);
      });
    },

    fetchCacheableStyleData: function fetchCacheableStyleData() {
      this.dispatch(constants.REFETCH_CACHEABLE_STYLE_DATA);
    }
  }

});

//needed until I move the action
function getStyleguideClient(flux) {
  return flux.store('ApiClientStore').getStyleguideClient();
}

function reportLoadError(flux, err, type, styleguideId, snapshotId) {
  var thrownError = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(err, 'response.message') || err.message;
  if (err.status === 502) {
    thrownError = 'Bad Gateway';
  }

  var errorMessage = { message: 'Could not ' + type + ' style data: ' + thrownError };
  var errorData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign(err, styleguideId, snapshotId, errorMessage);
  flux.actions.onLogMessage('error', errorData);
  return errorMessage;
}

/***/ }),

/***/ 1261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = saveTypeStylesWithDependencies;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sketch__ = __webpack_require__(21);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






function saveTypeStylesWithDependencies(typeStyles, fontVariants, styleData, inUploadLayers) {

  try {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(typeStyles)) {
      //we can get here with empty list only in the process of upload layer, that case we still want to show the progress bar
      __WEBPACK_IMPORTED_MODULE_2__sketch__["j" /* resetProgress */]({ maxValue: 0, label: '(2/5) Adding Type Styles…' });
      return Promise.resolve();
    }

    var numberOfOperations = 0;
    var trackProgress = __WEBPACK_IMPORTED_MODULE_1__util__["E" /* promiseTracker */]({
      onCreate: function onCreate() {
        return numberOfOperations += 1;
      },
      onResolve: function onResolve() {
        return __WEBPACK_IMPORTED_MODULE_2__sketch__["h" /* incrementProgress */](1);
      }
    });

    var styleguideApiClient = this.flux.store('ApiClientStore').getStyleguideClient();

    // Add dependent font families, if they don’t already
    // exist.
    var promiseToAddMissingFamilies = Promise.resolve(styleData);

    var missingFamilies = __WEBPACK_IMPORTED_MODULE_1__util__["w" /* missingFontFamiliesForTypeStyles */](typeStyles, styleData);

    if (missingFamilies.length > 0) {
      promiseToAddMissingFamilies = trackProgress(styleguideApiClient.addElementsToArray('fonts', {
        fonts: missingFamilies.map(function (family) {
          return {
            family: family,
            source: 'system',
            name: family, // TODO: there might be a better display name available.
            variants: fontVariants[family]
          };
        })
      }));
    }

    // Add any dependent colors that do not already exist to
    // an anonymous color palette.
    var promiseToAddMissingColors = Promise.resolve(styleData);

    var missingColors = __WEBPACK_IMPORTED_MODULE_1__util__["v" /* missingColorsInTypeStyles */](typeStyles, styleData);

    if (missingColors.length > 0) {
      var anonymousPalette = __WEBPACK_IMPORTED_MODULE_1__util__["c" /* anonymousColorPalette */](styleData);
      if (anonymousPalette) {
        promiseToAddMissingColors = trackProgress(styleguideApiClient.addElementsToNestedArray('colors', 'colorSections', anonymousPalette._id, { colors: missingColors }));
      } else {
        promiseToAddMissingColors = trackProgress(styleguideApiClient.addElementsToArray('colorSections', {
          name: 'Other Colors',
          anonymousColorSection: true,
          colors: missingColors
        }));
      }
    }

    //Existing typestyles still taken only from the styleguide as we should not get here with parent styles
    var existingTypeStyleIDs = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(styleData.styleguide.typeStyles).map('_id').compact();

    var promiseToClassifyTypeStyles = Promise.all([promiseToAddMissingFamilies, promiseToAddMissingColors]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          styleDataAfterAddingFamilies = _ref2[0],
          styleDataAfterAddingColors = _ref2[1];

      // Update type styles with resolved color and font families.
      var linkedTypeStyles = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(typeStyles);
      __WEBPACK_IMPORTED_MODULE_1__util__["A" /* populateTypeStyleFontFamilyIDs */](linkedTypeStyles, styleDataAfterAddingFamilies);
      __WEBPACK_IMPORTED_MODULE_1__util__["B" /* populateTypeStyleTextColorIDs */](linkedTypeStyles, styleDataAfterAddingColors);

      // Clasify the incoming typeStyles into:
      var typeStylesToCreate = [];
      var typeStylesToUpdate = [];

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(linkedTypeStyles, function (linkedTypeStyle) {
        if (existingTypeStyleIDs.includes(linkedTypeStyle._id)) {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.unset(linkedTypeStyle, ['sampleText']);
          typeStylesToUpdate.push(linkedTypeStyle);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.unset(linkedTypeStyle, ['_id']);

          //set the consistent id for new layers but avoid changing it for update layers as those might already have usage
          linkedTypeStyle.uuid = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.toUpper(linkedTypeStyle.objectID);

          typeStylesToCreate.push(linkedTypeStyle);
        }
      });

      return { typeStylesToCreate: typeStylesToCreate, typeStylesToUpdate: typeStylesToUpdate };
    });

    var promiseToAddNewStyles = trackProgress(promiseToClassifyTypeStyles.then(function (_ref3) {
      var typeStylesToCreate = _ref3.typeStylesToCreate;

      if (typeStylesToCreate.length > 0) {
        return styleguideApiClient.addElementsToArray('typeStyles', { typeStyles: typeStylesToCreate });
      } else {
        // If there are no styles to add, return the current style
        // data instead of after adding them.
        return styleData;
      }
    }));

    var promiseToUpdateExistingStyles = trackProgress(promiseToAddNewStyles // Wait for new styles to be added first.
    .then(function () {
      return promiseToClassifyTypeStyles;
    }).then(function (_ref4) {
      var typeStylesToUpdate = _ref4.typeStylesToUpdate;

      if (typeStylesToUpdate.length > 0) {
        return styleguideApiClient.updateElementsInArray('typeStyles', { typeStyles: typeStylesToUpdate });
      } else {
        // If there are no styles to update, return the promise to add
        // new styles, which will contain style data just like after
        // updating styles would have.
        return promiseToAddNewStyles;
      }
    }));

    //progress bar is affected by the fact if it called as a standalone operation or part of uploading layers
    if (inUploadLayers) {
      __WEBPACK_IMPORTED_MODULE_2__sketch__["j" /* resetProgress */]({ maxValue: numberOfOperations, label: '(2/5) Adding Type Styles…' });
    } else {
      __WEBPACK_IMPORTED_MODULE_2__sketch__["n" /* showProgressSheet */]({
        label: 'Adding Type Style(s)…',
        maxValue: numberOfOperations
      });
    }

    return promiseToUpdateExistingStyles.then(function (styleData) {
      if (!inUploadLayers) {
        __WEBPACK_IMPORTED_MODULE_2__sketch__["g" /* hideProgressSheet */]();
      }
      __WEBPACK_IMPORTED_MODULE_2__sketch__["i" /* postNativeUIEvent */]('onTypeStylesDidLoad', styleData.styleguide.typeStyles);
      return styleData;
    }).catch(function (err) {
      __WEBPACK_IMPORTED_MODULE_2__sketch__["g" /* hideProgressSheet */]();
      return Promise.reject(err);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

/***/ }),

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = saveSharedLayerStyles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sha1__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sha1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sha1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_service__ = __webpack_require__(248);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();








function saveSharedLayerStyles(sharedStyles, styleData, inUploadLayers) {

  try {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(sharedStyles)) {
      //we can get here with empty list only in the process of upload layer, that case we still want to show the progress bar
      __WEBPACK_IMPORTED_MODULE_3__sketch__["n" /* showProgressSheet */]({ label: '(1/5) Adding Shared Styles…', maxValue: 0 });
      return Promise.resolve();
    }

    var numberOfOperations = 0;
    var trackProgress = __WEBPACK_IMPORTED_MODULE_2__util__["E" /* promiseTracker */]({
      onCreate: function onCreate() {
        return numberOfOperations += 1;
      },
      onResolve: function onResolve() {
        return __WEBPACK_IMPORTED_MODULE_3__sketch__["h" /* incrementProgress */](1);
      }
    });

    var styleguideApiClient = this.flux.store('ApiClientStore').getStyleguideClient();

    var cloudSharedStyles = styleData.styleguide.sharedStyles;

    // Create an “instruction” for each shared style to be saved. The instruction
    // is a promise that wraps a description of what should be done and what
    // remains to be done to save each item. Start out with a skeleton structure
    // for the instruction including what the uploaded file name should be.
    var instructions = sharedStyles.map(function (sharedStyle) {

      var fileName = sharedStyle.name + '-' + sharedStyle.objectID;

      return Promise.resolve({
        objectID: sharedStyle.objectID,
        thumbnailFileName: fileName + '.png',
        sketchArchiveFileName: fileName + '.skla',
        cloudData: {
          _id: sharedStyle._id,
          name: sharedStyle.name
        }
      });
    });

    // Add the sketch data for each instruction.
    instructions = instructions.map(function (instructionPromise) {

      var promiseToGetThumbnailData = instructionPromise.then(function (instruction) {
        return __WEBPACK_IMPORTED_MODULE_3__sketch__["f" /* getSharedStylePreviewImageData */](instruction.objectID);
      });
      var promiseToGetSketchArchiveData = instructionPromise.then(function (instruction) {
        return __WEBPACK_IMPORTED_MODULE_3__sketch__["e" /* getSharedStyleArchiveData */](instruction.objectID);
      });

      return trackProgress(Promise.all([instructionPromise, promiseToGetThumbnailData, promiseToGetSketchArchiveData]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            instruction = _ref2[0],
            thumbnailDataURI = _ref2[1],
            sketchArchiveDataURI = _ref2[2];

        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(instruction, {
          thumbnailDataURI: thumbnailDataURI,
          sketchArchiveDataURI: sketchArchiveDataURI,
          cloudData: {
            sketchArchiveHash: __WEBPACK_IMPORTED_MODULE_1_sha1___default()(sketchArchiveDataURI)
          }
        });
      }));
    });

    // Determine which shared styles need to be added vs. updated. For those that
    // need to be updated which ones can be skipped due to a matching hash.
    instructions = instructions.map(function (instructionPromise) {

      return instructionPromise.then(function (instruction) {
        var uploadOperation = void 0;

        var cloudSharedStyle = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(cloudSharedStyles, { _id: instruction.cloudData._id });
        if (cloudSharedStyle) {
          uploadOperation = 'update';

          if (cloudSharedStyle.sketchArchiveHash && cloudSharedStyle.sketchArchiveHash === instruction.cloudData.sketchArchiveHash) {

            // Skip when hashes match.
            uploadOperation = 'skip';
          }
        } else {
          uploadOperation = 'add';

          //when adding new shared styly we will want pass uuid value so that we will have all the layers associated with it correctly
          //for update flow we should nto pass this value to avoid overriding thus potentially causing issue in styles already create with the new id
          instruction.cloudData.uuid = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.toUpper(instruction.objectID);
        }

        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(instruction, { uploadOperation: uploadOperation });
      });
    });

    // Sign all the files that need to be uploaded.
    var promiseToSignFiles = trackProgress(Promise.all(instructions).then(function (instructions) {

      var fileNamesToUpload = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(instructions).filter(function (inst) {
        return inst.uploadOperation !== 'skip';
      }).flatMap(function (inst) {
        return [inst.thumbnailFileName, inst.sketchArchiveFileName];
      }).value();

      if (!__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(fileNamesToUpload)) {
        return __WEBPACK_IMPORTED_MODULE_2__util__["C" /* promiseTimeout */](7000, 'Timed out waiting for server to sign files.', styleguideApiClient.signFiles(fileNamesToUpload).catch(function () {
          return Promise.reject(new Error('Error signing files.'));
        }));
      }
    }));

    // Upload all the files that need to be uploaded. Note: we track all the
    // files because at this time we don’t know which ones will be skipped
    // because those promises haven’t resolved. The ones that are skipped will
    // just process really fast!
    instructions = instructions.map(function (instructionPromise) {

      return trackProgress(instructionPromise.then(function (instruction) {

        if (instruction.uploadOperation === 'skip') {

          return instruction;
        } else {

          var promiseToUploadThumbnail = promiseToSignFiles.then(function (signedFiles) {
            var signedFileURL = __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["b" /* signedURLFromFileName */](signedFiles, instruction.thumbnailFileName);
            var fileURL = signedFileURL.split('?')[0];
            return __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["c" /* uploadDataURI */](signedFileURL, instruction.thumbnailDataURI).then(function () {
              return fileURL;
            });
          });
          var promiseToUploadSketchArchive = promiseToSignFiles.then(function (signedFiles) {
            var signedFileURL = __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["b" /* signedURLFromFileName */](signedFiles, instruction.sketchArchiveFileName);
            var fileURL = signedFileURL.split('?')[0];
            return __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["c" /* uploadDataURI */](signedFileURL, instruction.sketchArchiveDataURI).then(function () {
              return fileURL;
            });
          });

          return Promise.all([promiseToUploadThumbnail, promiseToUploadSketchArchive]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                thumbnailUrl = _ref4[0],
                sketchArchiveUrl = _ref4[1];

            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(instruction, {
              cloudData: {
                thumbnailUrl: thumbnailUrl,
                sketchArchiveUrl: sketchArchiveUrl
              }
            });
          });
        }
      }));
    });

    var promiseToAddItems = trackProgress(Promise.all(instructions) // Wait for all items files to upload.

    // Filter down to just instructions for adding new items.
    .then(function (instructions) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(instructions, function (inst) {
        return inst.uploadOperation === 'add';
      });
    })

    // Add these items with a single network call.
    .then(function (instructionsToAdd) {
      if (instructionsToAdd.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_2__util__["C" /* promiseTimeout */](7000, 'Timed out waiting for server to add shared style(s).', styleguideApiClient.addElementsToArray('sharedStyles', {
          sharedStyles: instructionsToAdd.map(function (instruction) {
            var cloudData = instruction.cloudData;
            // Important: remove the _id, if any, before saving to the
            // cloud. An item could have an _id because it used to be in
            // the database and has been deleted. At this point we have
            // determined that the style should not be updated because it
            // does not exist in the database, so we should let the
            // database create a new _id.
            cloudData._id = void 0;
            return cloudData;
          })
        }));
      } else {
        // If there are no items to add, fall back to the current style data.
        return styleData;
      }
    }));

    var promiseToUpdateItems = trackProgress(promiseToAddItems // Wait for items to be added first.

    .then(function () {
      return Promise.all(instructions);
    }) // Operate on all the instructions.

    // Filter down to just instructions for updating existing items.
    .then(function (instructions) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(instructions, function (inst) {
        return inst.uploadOperation === 'update';
      });
    })

    // Update these items with a single network call.
    .then(function (instructionsToUpdate) {
      if (instructionsToUpdate.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_2__util__["C" /* promiseTimeout */](7000, 'Timed out waiting for server to update shared style(s).', styleguideApiClient.updateElementsInArray('sharedStyles', {
          sharedStyles: instructionsToUpdate.map(function (inst) {
            return inst.cloudData;
          })
        }));
      } else {
        // If there are no items to update, return promise containing the style
        // data from the request to add items.
        return promiseToAddItems;
      }
    }));

    //progress bar label is affected by the fact if it called as a standalone operation or part of uploading layers
    var label = inUploadLayers ? '(1/5) Adding Shared Styles…' : 'Adding Shared Style(s)…';
    __WEBPACK_IMPORTED_MODULE_3__sketch__["n" /* showProgressSheet */]({
      label: label,
      maxValue: numberOfOperations
    });

    return promiseToUpdateItems.then(function (styleData) {
      if (!inUploadLayers) {
        __WEBPACK_IMPORTED_MODULE_3__sketch__["g" /* hideProgressSheet */]();
      }
      return styleData;
    }).catch(function (err) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["g" /* hideProgressSheet */]();
      return Promise.reject(err);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

/***/ }),

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uploadLayers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sha1__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sha1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sha1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_queue__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__(248);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










// upload layers - stage #3
function uploadLayers(newSection, layersToUpload, styleData, styleDataImageHashes) {
  var _this = this;

  var hasDuplicates = checkLayersContainDuplicates.call(this, layersToUpload);
  var layersLookup = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keyBy(layersToUpload, 'id');
  var masterSymbolsLookup = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keyBy(styleData.globalAssets.sketchSymbols, 'metadata.sketchSymbolId');

  // Promise wrapper that tracks progress to show in the UI for everything
  // but the style uploads.
  var trackProgress = __WEBPACK_IMPORTED_MODULE_4__util__["E" /* promiseTracker */]({
    onResolve: function onResolve() {
      return __WEBPACK_IMPORTED_MODULE_5__sketch__["h" /* incrementProgress */](1);
    }
  });

  // since all have should the same values and the first item is symbol instance that always contain the data we will take it
  // from there.
  // If the order will change we can always change this code for iteration
  var first = layersToUpload[0];
  var imageType = first.sectionType;
  var type = __WEBPACK_IMPORTED_MODULE_4__util__["t" /* itemsKeyForImageType */](imageType);
  var enclosingType = __WEBPACK_IMPORTED_MODULE_4__util__["g" /* categoryKeyForImageType */](imageType);
  var sectionID = first.sectionID;
  var primaryFormat = __WEBPACK_IMPORTED_MODULE_4__util__["u" /* mainFormatFromImageType */](imageType);
  var expectedExtensions = __WEBPACK_IMPORTED_MODULE_4__util__["n" /* getFilesExtensionsToUploadFromImageType */](imageType);

  var promiseToGetLayersData = __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(layersToUpload, function (layer) {
    // Get layer data from Sketch.
    return trackProgress(__WEBPACK_IMPORTED_MODULE_5__sketch__["d" /* getLayerData */](layer.id, {
      skipJPG: true,
      skipSVG: primaryFormat === 'png',
      isSymbolMasterDependency: layer.isSymbolMasterDependency
    }).then(function (layerData) {
      // Filter out layers that do not need to be uploaded because they have not changed.

      //meaning we created an instance layer for master and as they differe we want to change their ids
      if (layerData.layerID !== layer.id) {
        var layerID = layerData.layerID;
        layer.id = layerID;
        layersLookup[layerID] = layer; //needed so it will befound in the lookup later
      }

      //get image either by id or from to lookup of master files, as the hashes key is per symbol and brandid item id
      var imageId = layer.imageID || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(masterSymbolsLookup[layerData.symbolID], '_id');

      //calculate the hash for all the sklalayer (for now it is save to assume we always have a sketch layer)
      var hash = __WEBPACK_IMPORTED_MODULE_2_sha1___default()(layerData.sklaDataURL);
      //set layer hash will be used later to get persisted on the image metadata
      layer.hash = hash;

      //we want only existing item to be verified against the hash, all new items will always be uploaded
      //symbol instances will always be uploaded, partially as we dont expect perf issue from ther upload and partially
      //because the archive data for instance currently does not seems to reflect complete struture for example the sharedStyles
      if (layerData.symbolID && imageId && layer.isSymbolMasterDependency) {
        var key = __WEBPACK_IMPORTED_MODULE_4__util__["o" /* getImageHashKey */](layerData.symbolID, imageId);
        //if they are identical we want to skip this layer in this upload operation
        if (hash === styleDataImageHashes[key]) {
          return null;
        }
      }
      //new or changed item, return the layer data as is
      return layerData;
    }));
  }, { concurrency: 50 });

  //Show the progress bar of the initial stage of retreiving layersData
  __WEBPACK_IMPORTED_MODULE_5__sketch__["j" /* resetProgress */]({
    label: '(3/5) Retrieving Layers...',
    maxValue: layersToUpload.length
  });

  var styleguideApiClient = this.flux.store('ApiClientStore').getStyleguideClient();

  //1. Get layers data (tracked step)
  return promiseToGetLayersData.then(function (layersData) {
    layersData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.compact(layersData);
    if (hasDuplicates) {
      _this.flux.actions.onLogMessage('info', { layersLookup: layersLookup });
    }
    __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('Changed layers count - ' + layersData.length);
    if (layersData.length === 0) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(layersData, function (layerData) {
      //2. resolve layer background color (untracked)
      var layer = layersLookup[layerData.layerID];
      return __WEBPACK_IMPORTED_MODULE_4__util__["d" /* backgroundColorIDWithBestContrastForImageURL */](layerData.pngDataURL, layer.backgroundColorID).then(function (backgroundColorId) {
        layer.backgroundColorID = backgroundColorId;
      });
    }).then(function () {
      //3. sign files (untracked)
      //get layers only of the re-uploaded layerData (layerId will be the corrected id for coppied symbol instance case)
      var filteredLayersToUpload = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(layersData, function (layerData) {
        return layersLookup[layerData.layerID];
      });
      // add storage file names
      __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* addStorageFileNamesToLayers */](filteredLayersToUpload, expectedExtensions);

      return __WEBPACK_IMPORTED_MODULE_4__util__["C" /* promiseTimeout */](30000, 'Timed out waiting for server to sign files.', styleguideApiClient.signFiles(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatMap(filteredLayersToUpload, 'storageFileNames')).catch(function () {
        return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error signing files.'));
      }));
    }).then(function (signedFiles) {
      //4. upload files to s3 (tracked)
      __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('Layers signed. Will upload files...');

      var maxValue = signedFiles && signedFiles.length;
      __WEBPACK_IMPORTED_MODULE_5__sketch__["j" /* resetProgress */]({ maxValue: maxValue, label: '(4/5) Uploading Layers...' }); // reset progress bar to track upload progress

      return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(layersData, function (layerData) {
        var layer = layersLookup[layerData.layerID];
        // Upload each format as a file.
        return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(layer.storageFileNames, function (fileName) {
          var signedFileURL = __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["b" /* signedURLFromFileName */](signedFiles, fileName);
          var fileURL = signedFileURL.split('?')[0];
          var extension = __WEBPACK_IMPORTED_MODULE_4__util__["j" /* fileExtension */](fileName);
          var layerDataURI = layerData[extension + 'DataURL'];

          return trackProgress(
          // File uploads depend on both signatures and layer data.
          __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["c" /* uploadDataURI */](signedFileURL, layerDataURI, false).catch(function () {
            return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error uploading layer data.'));
          }).then(function () {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({ extension: extension, fileURL: fileURL }, layerData);
          }));
        }).then(function (uploadedLayers) {
          return { layerID: layerData.layerID, uploadedLayers: uploadedLayers };
        });
      }, { concurrency: 100 });
    }).then(function (layersWithUploadedData) {
      //5. classify the uploaded layer place in design library and update sketch symbols list (untracked)
      __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('');
      var newItems = [];
      var updatedItems = [];
      var sketchSymbols = [];
      var newSectionItems = [];

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(layersWithUploadedData, function (layerData) {

        var layer = layersLookup[layerData.layerID];

        var imageObjectToPersist = __WEBPACK_IMPORTED_MODULE_4__util__["q" /* imageItemFromLayer */](layer, layerData.uploadedLayers, primaryFormat);

        if (layer.imageID && layer.sectionID) {
          imageObjectToPersist._id = layer.imageID;
          updatedItems.push(imageObjectToPersist);
        } else if (layer.sectionID) {
          newItems.push(imageObjectToPersist);
        } else if (layer.isSymbolMasterDependency) {
          sketchSymbols.push(imageObjectToPersist);
        } else {
          // Create new image in new section.
          newSectionItems.push(imageObjectToPersist);
        }
      });

      var maxValue = countOfNonEmptyArray(updatedItems.length) + countOfNonEmptyArray(newItems.length) + countOfNonEmptyArray(sketchSymbols.length) + countOfNonEmptyArray(newSectionItems);
      __WEBPACK_IMPORTED_MODULE_5__sketch__["j" /* resetProgress */]({ maxValue: maxValue, label: '(5/5) Updating Design Library...' });

      if (sketchSymbols.length === 0) {
        return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.resolve({
          type: type,
          enclosingType: enclosingType,
          sectionID: sectionID,
          updatedItems: updatedItems,
          newItems: newItems,
          newSectionItems: newSectionItems
        });
      } else {
        //we need to update symbols first only if it will be successful update the rest
        __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('Updated sketch symbols - ' + sketchSymbols.length);
        return trackProgress(__WEBPACK_IMPORTED_MODULE_4__util__["C" /* promiseTimeout */](30000, 'Timed out waiting for server to update symbols.', styleguideApiClient.updateSketchSymbols(sketchSymbols).then(function (styleData) {
          _this.dispatch('STYLEGUIDE_LOADED', styleData);
          return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.resolve({
            type: type,
            enclosingType: enclosingType,
            sectionID: sectionID,
            updatedItems: updatedItems,
            newItems: newItems,
            newSectionItems: newSectionItems
          });
        }).catch(function () {
          return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error updating symbols'));
        })));
      }
    }).then(function (_ref) {
      var type = _ref.type,
          enclosingType = _ref.enclosingType,
          sectionID = _ref.sectionID,
          updatedItems = _ref.updatedItems,
          newItems = _ref.newItems,
          newSectionItems = _ref.newSectionItems;

      //5. add, update or create new section in design library with the derived elements data from the previous steps (tracked)
      __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('Updating Design Library - newItems:' + newItems.length + ', updatedItems:' + updatedItems.length + ', newSectionItems:' + newSectionItems.length);
      if (hasDuplicates) {
        _this.flux.actions.onLogMessage('info', { updatedItems: updatedItems, newItems: newItems });
      }
      // For now, make upsert API calls sequentially since there were errors
      // doing them in parallel.
      var upsertQueue = Object(__WEBPACK_IMPORTED_MODULE_3_d3_queue__["queue"])(1);
      var promisesToUpsertAllItems = [];

      if (updatedItems && updatedItems.length > 0) {
        // Update existing image.
        promisesToUpsertAllItems.push(trackProgress(__WEBPACK_IMPORTED_MODULE_4__util__["D" /* promiseToRunOnQueue */](upsertQueue, function () {
          return __WEBPACK_IMPORTED_MODULE_4__util__["C" /* promiseTimeout */](30000, 'Timed out waiting for server to update item.', styleguideApiClient.updateElementsInNestedArray(type, enclosingType, sectionID, _defineProperty({}, type, updatedItems)).then(function (styleData) {
            _this.dispatch('STYLEGUIDE_LOADED', styleData);
          }).catch(function () {
            return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error updating item in design library.'));
          }));
        })));
      }
      if (newItems && newItems.length > 0) {
        // Create new image in existing section.
        promisesToUpsertAllItems.push(trackProgress(__WEBPACK_IMPORTED_MODULE_4__util__["D" /* promiseToRunOnQueue */](upsertQueue, function () {
          return __WEBPACK_IMPORTED_MODULE_4__util__["C" /* promiseTimeout */](30000, 'Timed out waiting for server to create item.', styleguideApiClient.addElementsToNestedArray(type, enclosingType, sectionID, _defineProperty({}, type, newItems)).then(function (styleData) {
            _this.dispatch('STYLEGUIDE_LOADED', styleData);
          }).catch(function () {
            return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error creating item in design library.'));
          }));
        })));
      }
      if (newSection && newSectionItems && newSectionItems.length) {
        var categoryKey = __WEBPACK_IMPORTED_MODULE_4__util__["g" /* categoryKeyForImageType */](newSection.imageType);
        var itemsKey = __WEBPACK_IMPORTED_MODULE_4__util__["t" /* itemsKeyForImageType */](newSection.imageType);
        var sectionWithItems = _defineProperty({ name: newSection.name }, itemsKey, newSectionItems);
        promisesToUpsertAllItems.push(trackProgress(__WEBPACK_IMPORTED_MODULE_4__util__["D" /* promiseToRunOnQueue */](upsertQueue, function () {
          return __WEBPACK_IMPORTED_MODULE_4__util__["C" /* promiseTimeout */](30000, 'Timed out waiting for server to create new section.', styleguideApiClient.addElementsToArray(categoryKey, sectionWithItems).then(function (styleData) {
            _this.dispatch('STYLEGUIDE_LOADED', styleData);
          }).catch(function () {
            return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(new Error('Error adding new section to design library.'));
          }));
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.all(promisesToUpsertAllItems).then(function () {
        __WEBPACK_IMPORTED_MODULE_5__sketch__["g" /* hideProgressSheet */]();
        //no need to actually triggered the data updates by directly clling the api and dipatching the results
        return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.resolve();
      });
    });
  }).catch(function (err) {
    // I am not hiding here the hiding of the progress bar as it happen in higher catch clause
    __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */](err.stack);
    return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.reject(err);
  });
}

function checkLayersContainDuplicates(layers) {
  var symbolMasters = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(layers, function (layer) {
    return layer.isSymbolMasterDependency;
  });

  var duplicateIds = __WEBPACK_IMPORTED_MODULE_4__util__["p" /* hasDuplicateElements */](symbolMasters, 'id');
  var duplicatedSymbolIDs = __WEBPACK_IMPORTED_MODULE_4__util__["p" /* hasDuplicateElements */](symbolMasters, 'symbolID');

  var hasDuplicates = duplicateIds || duplicatedSymbolIDs;
  if (hasDuplicates) {
    this.flux.actions.onLogMessage('info', { message: 'Possible layers duplication issues', layers: layers });
  }
  return hasDuplicates;
}

function countOfNonEmptyArray(array) {
  return array.length > 0 ? 1 : 0;
}

/***/ }),

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__ = __webpack_require__(113);




var constants = {
  START_LOADING_ORGANIZATION: 'START_LOADING_ORGANIZATION',
  ORGANIZATION_CREATED: 'ORGANIZATION_CREATED',
  ORGANIZATION_LOADED: 'ORGANIZATION_LOADED',
  ORGANIZATION_LOAD_FAILED: 'ORGANIZATION_LOAD_FAILED',
  CHECK_ORGANIZATION_EXISTS: 'CHECK_ORGANIZATION_EXISTS',
  SET_DEFAULT_ORAGNIZATION: 'SET_DEFAULT_ORGANIZATION'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {

    loadUserOrganizations: function loadUserOrganizations() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* debug */])('Load user organizations.');
      this.dispatch(constants.START_LOADING_ORGANIZATION);
      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      apiClient.fetchUserOrganizations().then(function (organizations) {
        _this.dispatch(constants.ORGANIZATION_LOADED, organizations);
      }).catch(function (err) {
        var errorMessage = reportLoadError(_this.flux, err, 'load');
        _this.dispatch(constants.ORGANIZATION_LOAD_FAILED, errorMessage);
      });
    },

    refreshUserOrganizations: function refreshUserOrganizations() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* debug */])('Load user organizations.');
      this.dispatch(constants.START_LOADING_ORGANIZATION);
      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      apiClient.fetchUserOrganizations().then(function (organizations) {
        _this2.dispatch(constants.ORGANIZATION_LOADED, organizations);
        return organizations;
      }).catch(function (err) {
        var errorMessage = reportLoadError(_this2.flux, err, 'refresh');
        _this2.dispatch(constants.ORGANIZATION_LOAD_FAILED, errorMessage);
        //
        // //if for some reason we can not refresh user organizations after he already had them loaded we will force signed out
        // //to avoid inconsistent or stuck states
        // this.dispatch(constants.USER_SIGNED_OUT);
      });
    },

    setDefaultOrganization: function setDefaultOrganization(newOrganizationID) {

      var organizations = this.flux.store('OrganizationStore').organizations;

      var newCurrentObject = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(organizations, { _id: newOrganizationID });
      if (newCurrentObject) {
        var apiClient = this.flux.store('ApiClientStore').getApiClient();
        apiClient.makeOrganizationDefault(newCurrentObject._id, true);
        //todo: consider have this in then
        this.dispatch(constants.SET_DEFAULT_ORAGNIZATION, newOrganizationID);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* debug */])('Did not find a match for ' + newOrganizationID + ', will not update server');
      }
    },

    checkOrganizationExists: function checkOrganizationExists(name) {
      var _this3 = this;

      if (!name || !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.kebabCase(name)) {
        return;
      }
      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      apiClient.checkOrganizationExists(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.kebabCase(name)).then(function (response) {
        var organizationExistMessage = void 0;
        if (!response.exists) {
          organizationExistMessage = { message: 'Company name is available!', canPost: true, error: false };
        } else {
          organizationExistMessage = {
            message: 'Company name is already taken, please try a different one.',
            canPost: false,
            error: true
          };
        }
        _this3.dispatch(constants.CHECK_ORGANIZATION_EXISTS, organizationExistMessage);
      });
    },

    createOrganization: function createOrganization(data) {
      var _this4 = this;

      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      apiClient.createOrganization(data).then(function (newOrganization) {
        _this4.dispatch(constants.ORGANIZATION_CREATED, newOrganization);
        __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__["a" /* default */].report('Organization Created', data);
      }).catch(function (err) {
        _this4.props.actions.onShowError({ title: 'Could not create organization.' }, err);
      });
    }
  }
});

function reportLoadError(flux, err, type) {
  var specificError = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(err, 'response.message') || err.message;
  if (err.status === 502) {
    specificError = 'Bad Gateway';
  }
  var errorMessage = { message: 'Could not ' + type + ' user organizations: ' + specificError };
  var errorData = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(err, errorMessage);
  flux.actions.onLogMessage('error', errorData);
  return errorMessage;
}

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytics_client_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* global mixpanel */






var constants = {
  INIT_AUTH_SERVICE: 'INIT_AUTH_SERVICE',
  START_LOADING_USER: 'START_LOADING_USER',
  USER_TOKENS_REFRESHED: 'USER_TOKEN_REFRESHED',
  USER_SIGNED_OUT: 'USER_SIGNED_OUT',
  USER_AUTH_SUCCESS: 'USER_AUTH_SUCCESS',
  USER_AUTH_FAIL: 'USER_AUTH_FAIL',
  USER_DETAILS_UPDATED: 'USER_DETAILS_UPDATED'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {
    initAuthService: function initAuthService(idToken, accessToken) {
      this.dispatch(constants.INIT_AUTH_SERVICE, { idToken: idToken, accessToken: accessToken });
    },

    openAuthenticationDialog: function openAuthenticationDialog() {
      var _this = this;

      this.dispatch(constants.START_LOADING_USER);

      var cb = function cb(err, profile, id_token, auth_state, access_token) {
        if (err || !id_token) {
          _this.dispatch(constants.USER_AUTH_FAIL);
          Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('Error sign in user, id token: ' + id_token + ' error: ' + err);
          reportAuthError(_this.flux, err, id_token, 'openAuthenticationDialog');
          return;
        }

        _this.dispatch(constants.USER_AUTH_SUCCESS, { user: profile, idToken: id_token, accessToken: access_token });

        if (profile.user_metadata) {
          //user signed in
          associateUserIdentityInMixpanel(_this.flux, profile, false);
          __WEBPACK_IMPORTED_MODULE_1__services_analytics_client_js__["a" /* default */].report('User signed in');
        } else {
          //user signed up
          associateUserIdentityInMixpanel(_this.flux, profile, true);
          __WEBPACK_IMPORTED_MODULE_1__services_analytics_client_js__["a" /* default */].report('User signed up');
        }
      };

      var authService = this.flux.store('UserStore').getAuthService();
      authService.showModal({}, cb);
    },

    loadUserData: function loadUserData() {
      var _this2 = this;

      this.dispatch(constants.START_LOADING_USER);
      var authService = this.flux.store('UserStore').getAuthService();
      var idToken = authService.getToken();
      authService.loadUser().then(function (user) {

        if (user) {
          associateUserIdentityInMixpanel(_this2.flux, user);
          __WEBPACK_IMPORTED_MODULE_1__services_analytics_client_js__["a" /* default */].report('User loaded');
          idToken = authService.getToken();
          //parse the expected data to data object
          var accessToken = authService.getAccessToken();
          _this2.dispatch(constants.USER_AUTH_SUCCESS, { user: user, idToken: idToken, accessToken: accessToken });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('Unexpected loadUser error, action succeeded but no user data found');
          _this2.dispatch(constants.USER_AUTH_FAIL);
        }
      }).catch(function (err) {
        _this2.dispatch(constants.USER_AUTH_FAIL);
        reportAuthError(_this2.flux, err, idToken, 'loadUser');
      });
    },

    onUserSignedOut: function onUserSignedOut() {
      Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('User signed out');
      var authService = this.flux.store('UserStore').getAuthService();
      authService.signout();
      this.dispatch(constants.USER_SIGNED_OUT);
    },

    refreshToken: function refreshToken() {
      var _this3 = this;

      var authService = this.flux.store('UserStore').getAuthService();
      authService.refreshToken().then(function (data) {
        if (data && data.idToken) {
          _this3.dispatch(constants.USER_TOKENS_REFRESHED, { idToken: data.idToken, accessToken: data.accessToken });
        }
      }).catch(function (err) {
        //technically currently there is not rejection in this process but just in case
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('could not refresh token');
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])(err);
      });
    },

    updateUserDetails: function updateUserDetails(details) {
      var _this4 = this;

      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      apiClient.updateUserDetails(details).then(function (updatedDetails) {
        __WEBPACK_IMPORTED_MODULE_1__services_analytics_client_js__["a" /* default */].report('User details form submitted', details);
        _this4.dispatch(constants.USER_DETAILS_UPDATED, updatedDetails);
      });
    }
  }
});

function associateUserIdentityInMixpanel(flux, user, isNewUser) {
  // Set the Auth0 user id on mixpanel so the user who
  // created the token can be matched to events in other
  // clients.
  var applicationStore = flux.store('ApplicationStore');

  if (isNewUser) {
    mixpanel.alias(user.user_id);
    mixpanel.people.set({
      '$email': user.email,
      '$created': user.created_at
    });
  } else {
    mixpanel.identify(user.user_id);
  }

  mixpanel.register({
    client: __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["sharedConstants"].clients.sketch,
    clientVersion: applicationStore.pluginVersion,
    sketchVersion: applicationStore.sketchVersion
  });
}

function reportAuthError(flux, err, idToken, authenticationMethod) {

  var message = err.error || err.message;
  Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])('exception caught, ' + message);
  Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */])(err.stack);
  flux.actions.onLogMessage('error', {
    message: message,
    err: err,
    idToken: idToken,
    method: authenticationMethod
  });
}

/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var constants = {
  SEARCH_STYLEGUIDE: 'SEARCH_STYLEGUIDE',
  SEARCH_ARTBOARDS: 'SEARCH_ARTBOARDS',
  RESET_SEARCH: 'RESET_SEARCH'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {
    searchStyleguide: function searchStyleguide(query) {
      this.flux.actions.onTrackData({ eventName: 'Styleguide searched', properties: { queryString: query } });
      this.dispatch(constants.SEARCH_STYLEGUIDE, { queryString: query });
    },

    searchArtboards: function searchArtboards(query) {
      this.flux.actions.onTrackData({ eventName: 'Artboards searched', properties: { searchQuery: query } });
      this.dispatch(constants.SEARCH_ARTBOARDS, { queryString: query });
    }
  }
});

/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var constants = {

  PLUGIN_LOADED: 'PLUGIN_LAUNCHED',
  PLUGIN_APP_CHANGED: 'PLUGIN_APP_CHANGED',
  SET_APPLICATION_NOTIFICATION: 'SET_APPLICATION_NOTIFICATION'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {

    pluginLaunched: function pluginLaunched(initialData) {
      this.dispatch(constants.PLUGIN_LOADED, initialData);
    },

    pluginAppChanged: function pluginAppChanged(currentApp) {
      this.dispatch(constants.PLUGIN_APP_CHANGED, currentApp);
    },

    setApplicationNotification: function setApplicationNotification(notificationData) {
      this.dispatch(constants.SET_APPLICATION_NOTIFICATION, notificationData);
    },

    getLatestAvailablePluginInfo: function getLatestAvailablePluginInfo() {

      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      return apiClient.getPluginVersion('sketch').then(function (res) {
        if (!res.version || !res.downloadURL || !res.releaseNotesURL) {
          return Promise.reject('Bad data from server.');
        } else {
          return res;
        }
      });
    }
  }
});

/***/ }),

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_application_notifications_factory__ = __webpack_require__(551);


var constants = {
  SNAPSHOT_CREATED: 'SNAPSHOT_CREATED'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {
    onCreateNewVersion: function onCreateNewVersion(data) {
      var _this = this;

      if (!data.name) {
        return Promise.reject('You must provide a snapshot name');
      }
      var apiClient = this.flux.store('ApiClientStore').getApiClient();
      var styleguideId = this.flux.store('StyleguideStore').getStyleguideId();
      apiClient.createSnapshot(styleguideId, data).then(function (allSnapshots) {
        _this.flux.actions.onTrackData({ eventName: 'Snapshot Created', properties: { snapshotName: data.name } });
        if (allSnapshots) {

          _this.dispatch(constants.SNAPSHOT_CREATED, allSnapshots);

          var message = {
            snapshotName: allSnapshots[0].name,
            snapshotId: allSnapshots[0]._id,
            styleguideId: styleguideId
          };
          _this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_0__utils_application_notifications_factory__["c" /* snapshotCreatedMessage */](message));
        }
      }).catch(function (err) {
        _this.flux.actions.onShowError({
          title: 'Error creating version.'
        }, err);
      });
    }
  }
});

/***/ }),

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complex_actions_upload_artboards__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sketch__ = __webpack_require__(21);









var constants = {
  START_LOADING_PAGES: 'START_LOADING_PAGES',
  START_REFRESHING_PAGES: 'START_REFRESHING_PAGES',
  PAGES_LOADED: 'PAGES_LOADED',
  PAGES_LOAD_FAILED: 'PAGES_LOAD_FAILED',
  ARTBOARD_SELECTED: 'ARTBOARD_SELECTED',
  PAGES_VIEWED: 'PAGES_VIEWED',
  PAGE_DELETED: 'PAGE_DELETED',
  PAGE_ADDED: 'PAGE_ADDED'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {

    loadOrganizationPages: function loadOrganizationPages(organizationName) {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* debug */])('Load pages for organization ' + organizationName);
      this.dispatch(constants.START_LOADING_PAGES);
      var apiClientStore = this.flux.store('ApiClientStore');

      var pagesStore = this.flux.store('PagesStore');
      var previousPagesIds = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(pagesStore.pages, '_id');

      apiClientStore.getPagesApiClient().fetchPagesByOrganization(organizationName).then(function (pages) {
        _this.dispatch(constants.PAGES_LOADED, pages);

        //This event is needed to differentiate for the specific case where styleguide is loaded as opposed to LOAD_STYLEGUIDE_COMPLETED that happen on each edit as well
        _this.dispatch(constants.PAGES_VIEWED, { pages: pages, previousPagesIds: previousPagesIds });

        __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__["a" /* default */].report('Organization pages loaded', { organization: organizationName });
      }).catch(function (err) {
        var errorMessage = reportLoadError(_this.flux, err, 'load', organizationName);
        _this.dispatch(constants.PAGES_LOAD_FAILED, errorMessage);
      });
    },

    refreshOrganizationPages: function refreshOrganizationPages() {
      var _this2 = this;

      var organizationName = this.flux.store('PagesStore').getPagesOrganization() || this.flux.store('OrganizationStore').getCurrentOrganization();

      Object(__WEBPACK_IMPORTED_MODULE_1__util__["h" /* debug */])('Refreshing pages for organization ' + organizationName);
      var apiClientStore = this.flux.store('ApiClientStore');
      this.dispatch(constants.START_REFRESHING_PAGES);
      apiClientStore.getPagesApiClient().fetchPagesByOrganization(organizationName).then(function (pages) {
        _this2.dispatch(constants.PAGES_LOADED, pages);
        __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__["a" /* default */].report('Organization pages loaded', { organization: organizationName });
      }).catch(function (err) {
        var errorMessage = reportLoadError(_this2.flux, err, 'refresh', organizationName);

        //only if it is not found report it as error and remove the current pages
        if (err.status === 404) {
          _this2.dispatch(constants.PAGES_LOAD_FAILED, errorMessage);
        }
      });
    },

    signArtboardFiles: function signArtboardFiles(fileNames) {
      var apiClientStore = this.flux.store('ApiClientStore');
      return apiClientStore.getPagesApiClient().signArtboardFiles(fileNames);
    },

    addArtboard: function addArtboard(artboard) {
      var _this3 = this;

      var apiClientStore = this.flux.store('ApiClientStore');
      apiClientStore.getPagesApiClient().addArtboard(artboard).then(function (response) {
        _this3.dispatch(constants.PAGES_LOADED, response.pages);
        if (response.newPageId) {
          // since this api is user for creating pages and their nested items we want to distinguish when it was a new page creation since we want to subscribe this page
          //This additional event is used in subscriber store so that we will know to unssubscribe from the pages but the pagestore is not updated by it
          _this3.dispatch(constants.PAGE_ADDED, response.newPageId);
        }
      });
    },

    deletePage: function deletePage(_ref) {
      var _this4 = this;

      var page = _ref.page;

      //todo: move alert to native and merge the two actions
      __WEBPACK_IMPORTED_MODULE_4__sketch__["b" /* displayAlert */]({
        title: 'Are you sure you want to delete \u201C' + page.name + '\u201D?',
        description: 'You can’t undo this action.',
        buttons: ['Delete', 'Cancel']

      }, function (alertResult) {
        if (alertResult == __WEBPACK_IMPORTED_MODULE_1__util__["a" /* AlertResult */].OK) {
          var apiClientStore = _this4.flux.store('ApiClientStore');
          var pageId = page._id;
          apiClientStore.getPagesApiClient().deletePage(pageId).then(function (pages) {
            _this4.dispatch(constants.PAGES_LOADED, pages);
            //This additional event is used in subscriber store so that we will know to unssubscribe from the pages but the pagestore is not updated by it
            _this4.dispatch(constants.PAGE_DELETED, pageId);
          });
        }
      });
    },

    deleteArtboard: function deleteArtboard(_ref2) {
      var _this5 = this;

      var page = _ref2.page,
          artboard = _ref2.artboard;

      //todo: move alert to native and merge the two actions
      __WEBPACK_IMPORTED_MODULE_4__sketch__["b" /* displayAlert */]({
        title: 'Are you sure you want to delete \u201C' + artboard.name + '\u201D?',
        description: 'You can’t undo this action.',
        buttons: ['Delete', 'Cancel']

      }, function (alertResult) {
        if (alertResult == __WEBPACK_IMPORTED_MODULE_1__util__["a" /* AlertResult */].OK) {
          var apiClientStore = _this5.flux.store('ApiClientStore');
          apiClientStore.getPagesApiClient().deleteArtboard(page._id, artboard._id).then(function (pages) {
            _this5.dispatch(constants.PAGES_LOADED, pages);
          });
        }
      });
    },

    deleteArtboardHistoryItem: function deleteArtboardHistoryItem(_ref3) {
      var _this6 = this;

      var pageId = _ref3.pageId,
          artboard = _ref3.artboard,
          item = _ref3.item;

      //todo: move alert to native and merge the two actions
      __WEBPACK_IMPORTED_MODULE_4__sketch__["b" /* displayAlert */]({
        title: 'Are you sure you want to delete artboard #' + item.serialNumber + '?',
        description: 'You can’t undo this action.',
        buttons: ['Delete', 'Cancel']

      }, function (alertResult) {
        if (alertResult == __WEBPACK_IMPORTED_MODULE_1__util__["a" /* AlertResult */].OK) {
          var apiClientStore = _this6.flux.store('ApiClientStore');
          apiClientStore.getPagesApiClient().deleteArtboardHistoryItem(pageId, artboard._id, item._id).then(function (pages) {
            _this6.dispatch(constants.PAGES_LOADED, pages);
          });
        }
      });
    },

    selectArtboard: function selectArtboard(selectedArtboard) {
      this.dispatch(constants.ARTBOARD_SELECTED, selectedArtboard);
    },

    onUploadAndSaveArtboards: function onUploadAndSaveArtboards(_ref4) {
      var _this7 = this;

      var layersToUpload = _ref4.layersToUpload;

      __WEBPACK_IMPORTED_MODULE_3__complex_actions_upload_artboards__["a" /* onUploadAndPersistArtboards */].call(this, layersToUpload).catch(function (reason) {
        _this7.flux.actions.onShowError({
          title: 'Upload Arboards Failed',
          style: 'error'
        }, reason);
      });
    }
  }
});

function reportLoadError(flux, err, type, organizationName) {
  var thrownError = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(err, 'response.message') || err.message;
  if (err.status === 502) {
    thrownError = 'Bad Gateway';
  }
  var errorMessage = { message: 'Could not ' + type + ' organization pages: ' + thrownError };
  var errorData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign(err, organizationName, errorMessage);
  flux.actions.onLogMessage('error', errorData);
  return errorMessage;
}

/***/ }),

/***/ 1270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onUploadAndPersistArtboards;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_queue__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_service__ = __webpack_require__(248);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();








function onUploadAndPersistArtboards(layersToUpload) {
  var _this = this;

  // Promise wrapper that tracks progress to show in the UI.
  var numberOfOperations = 0;

  var trackProgress = __WEBPACK_IMPORTED_MODULE_2__util__["E" /* promiseTracker */]({
    onCreate: function onCreate() {
      return numberOfOperations += 1;
    },
    onResolve: function onResolve() {
      return __WEBPACK_IMPORTED_MODULE_3__sketch__["h" /* incrementProgress */](1);
    }
  });

  __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["a" /* addStorageFileNamesToLayers */](layersToUpload, ['jpg', 'skla']);

  // Get the API to sign the files for us.
  var promiseToSignFiles = trackProgress(this.flux.actions.signArtboardFiles(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatMap(layersToUpload, 'storageFileNames')).catch(function () {
    return Promise.reject(new Error('Error signing files.'));
  }));

  // For now, make upsert API calls sequentially since there were errors
  // doing them in parallel.
  var upsertQueue = Object(__WEBPACK_IMPORTED_MODULE_1_d3_queue__["queue"])(1);

  var promisesToUpsertAllItems = [];

  layersToUpload.forEach(function (layer) {

    // Get layer data from Sketch.
    var promiseToGetLayerData = trackProgress(__WEBPACK_IMPORTED_MODULE_3__sketch__["d" /* getLayerData */](layer.id, { skipSVG: true, skipPNG: true, includeDepencendiesInArchive: true }));

    // Upload each format as a file.
    var promisesToUploadFiles = layer.storageFileNames.map(function (fileName) {
      return trackProgress(
      // File uploads depend on both signatures and layer data.
      Promise.all([promiseToSignFiles, promiseToGetLayerData]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            signedFiles = _ref2[0],
            layerData = _ref2[1];

        var signedFileURL = __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["b" /* signedURLFromFileName */](signedFiles, fileName);
        var fileURL = signedFileURL.split('?')[0];
        var extension = __WEBPACK_IMPORTED_MODULE_2__util__["j" /* fileExtension */](fileName);
        var layerDataURI = layerData[extension + 'DataURL'];
        return __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["c" /* uploadDataURI */](signedFileURL, layerDataURI).catch(function () {
          return Promise.reject(new Error('Error uploading layer data.'));
        }).then(function () {
          return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({ extension: extension, fileURL: fileURL }, layerData);
        });
      }));
    });

    var promiseToUploadFiles = Promise.all(promisesToUploadFiles);
    promisesToUpsertAllItems.push(trackProgress(promiseToUploadFiles.then(function (uploadedFiles) {
      return __WEBPACK_IMPORTED_MODULE_2__util__["D" /* promiseToRunOnQueue */](upsertQueue, function () {
        return __WEBPACK_IMPORTED_MODULE_2__util__["C" /* promiseTimeout */](7000, 'Timed out waiting for server to update item.',
        //this action actually trigger update of store per executed artboard upasert ot api
        //since they are not bulked we want to update after each update
        _this.flux.actions.addArtboard(_extends({}, layer, { image: __WEBPACK_IMPORTED_MODULE_2__util__["q" /* imageItemFromLayer */](layer, uploadedFiles, 'jpg') })));
      });
    }).catch(function () {
      return Promise.reject(new Error('Error updating artboard.'));
    })));
  });

  __WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */]('Number of operations: ' + numberOfOperations);

  __WEBPACK_IMPORTED_MODULE_3__sketch__["n" /* showProgressSheet */]({
    label: 'Adding Layers…',
    maxValue: numberOfOperations
  });

  return Promise.all(promisesToUpsertAllItems).catch(function (err) {
    __WEBPACK_IMPORTED_MODULE_3__sketch__["g" /* hideProgressSheet */]();
    return Promise.reject(err);
  }).then(function () {
    __WEBPACK_IMPORTED_MODULE_3__sketch__["g" /* hideProgressSheet */]();
  });
}

/***/ }),

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger_service_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







/* harmony default export */ __webpack_exports__["default"] = ({
  constants: {},
  actions: {

    onLogMessage: function onLogMessage(level, data) {

      var reportedData = data;
      var applicationStore = this.flux.store('ApplicationStore');
      var styleguideStore = this.flux.store('StyleguideStore');
      var options = { //set relevant data on loggerService
        sketchVersion: applicationStore.sketchVersion,
        pluginVersion: applicationStore.pluginVersion
      };

      //todo: maybe better take organization from OrganizationStore
      if (!applicationStore.isPagesApp()) {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign(options, {
          styleguide: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(styleguideStore, 'styleguide.kebabName'),
          organization: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(styleguideStore, 'styleguide.organization')
        });
      }

      __WEBPACK_IMPORTED_MODULE_1__services_logger_service_js__["a" /* default */].setReportingOptions(options);

      __WEBPACK_IMPORTED_MODULE_1__services_logger_service_js__["a" /* default */][level](reportedData);
    },

    onTrackData: function onTrackData(_ref) {
      var eventName = _ref.eventName,
          _ref$properties = _ref.properties,
          properties = _ref$properties === undefined ? {} : _ref$properties;


      var applicationStore = this.flux.store('ApplicationStore');
      var organizationStore = this.flux.store('OrganizationStore');
      var styleguideStore = this.flux.store('StyleguideStore');

      var currentOrganization = organizationStore.getCurrentOrganization();
      var reportedData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign(properties, {
        organization: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(currentOrganization, 'kebabName'),
        pluginVersion: applicationStore.pluginVersion
      });

      if (!applicationStore.isPagesApp()) {
        reportedData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign(reportedData, {
          styleguide: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(styleguideStore, 'styleguide.kebabName')
        });
      }

      __WEBPACK_IMPORTED_MODULE_2__services_analytics_client_js__["a" /* default */].report(eventName, reportedData); // eslint-disable-line no-undef
    },

    onShowError: function onShowError() {
      var alertData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var err = arguments[1];

      //consider extracting description here from the error
      if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(alertData.description)) {
        alertData.description = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(err, 'response.message') || err.message;
      }
      __WEBPACK_IMPORTED_MODULE_3__sketch__["b" /* displayAlert */](alertData);

      this.flux.actions.onLogMessage('error', _extends({}, err, { message: alertData.title + ' - ' + alertData.description }));
    }
  }
});

/***/ }),

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__ = __webpack_require__(1273);





var constants = {};

//todo: consider refactoring so that each url util will return only the path and the host and token will be concatanated in one place

/* harmony default export */ __webpack_exports__["default"] = ({
  constants: constants,
  actions: {
    openStyleguideInBrowser: function openStyleguideInBrowser() {
      var styleguide = this.flux.store('StyleguideStore').styleguide;

      var _getTokens = getTokens(this.flux),
          accessToken = _getTokens.accessToken,
          idToken = _getTokens.idToken;

      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["f" /* getStyleguideURL */](getHost(this.flux), styleguide, idToken, accessToken));
    },

    openStyleguideSettingsInBrowser: function openStyleguideSettingsInBrowser() {
      var styleguide = this.flux.store('StyleguideStore').styleguide;

      var _getTokens2 = getTokens(this.flux),
          accessToken = _getTokens2.accessToken,
          idToken = _getTokens2.idToken;

      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["e" /* getStyleguideSettingsURL */](getHost(this.flux), styleguide, idToken, accessToken));
    },

    addNewMemberInBrowser: function addNewMemberInBrowser() {
      //todo: probably need to take from default organization
      var styleguide = this.flux.store('StyleguideStore').styleguide;

      var _getTokens3 = getTokens(this.flux),
          accessToken = _getTokens3.accessToken,
          idToken = _getTokens3.idToken;

      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["a" /* getAddUserToOrganization */](getHost(this.flux), styleguide.organization, idToken, accessToken));
    },

    manageProfileInBrowser: function manageProfileInBrowser() {
      var _getTokens4 = getTokens(this.flux),
          accessToken = _getTokens4.accessToken,
          idToken = _getTokens4.idToken;

      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["c" /* getManageProfileURL */](getHost(this.flux), idToken, accessToken));
    },

    viewStyleguideReleasesPage: function viewStyleguideReleasesPage() {
      var styleguide = this.flux.store('StyleguideStore').styleguide;

      var _getTokens5 = getTokens(this.flux),
          accessToken = _getTokens5.accessToken,
          idToken = _getTokens5.idToken;

      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["d" /* getStyleguideReleasesURL */](getHost(this.flux), styleguide.organization, styleguide.kebabName, idToken, accessToken));
    },

    viewArtboardInWeb: function viewArtboardInWeb(pageId, artboardName, historyItem) {
      var _getTokens6 = getTokens(this.flux),
          accessToken = _getTokens6.accessToken,
          idToken = _getTokens6.idToken;

      var pages = this.flux.store('PagesStore').pages;
      var page = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(pages, { _id: pageId });
      openURL(__WEBPACK_IMPORTED_MODULE_2__utils_tokyo_urls_utils__["b" /* getArtboardURL */](getHost(this.flux), page.organization, page.kebabName, artboardName, historyItem._id, idToken, accessToken));
    },


    viewHomepage: function viewHomepage() {
      openURL(getHost(this.flux));
    },

    viewTermsPage: function viewTermsPage() {
      openURL(getHost(this.flux) + '/terms');
    },

    viewSketchReleaseNotesPage: function viewSketchReleaseNotesPage(releaseNotesURL) {
      openURL(releaseNotesURL);
    }
  }
});

function getHost(flux) {
  var apiClientStore = flux.store('ApiClientStore');
  return apiClientStore.getHost();
}

function getTokens(flux) {
  var userStore = flux.store('UserStore');
  return { idToken: userStore.idToken, accessToken: userStore.accessToken };
}

function openURL(url) {
  __WEBPACK_IMPORTED_MODULE_1__sketch__["i" /* postNativeUIEvent */]('onOpenURLInBrowser', url);
}

/***/ }),

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = getStyleguideURL;
/* harmony export (immutable) */ __webpack_exports__["e"] = getStyleguideSettingsURL;
/* harmony export (immutable) */ __webpack_exports__["c"] = getManageProfileURL;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAddUserToOrganization;
/* harmony export (immutable) */ __webpack_exports__["d"] = getStyleguideReleasesURL;
/* harmony export (immutable) */ __webpack_exports__["b"] = getArtboardURL;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(158);


function getWebSiteUrl(host) {
  var baseURL = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].webURLs[host] || 'http://localhost:3000';
  return baseURL;
}

function getStyleguideURL(host, styleData, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);
  var styleguide = styleData.kebabName;
  var organization = styleData.organization;

  var url = baseURL + '/' + organization + '/' + styleguide;

  if (styleData.snapshotId) {
    url += '?version=' + styleData.snapshotId;
  }

  if (idToken) {
    url += '#id_token=' + idToken + '&access_token=' + accessToken;
  }

  return url;
}

function getStyleguideSettingsURL(host, styleData, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);
  var styleguide = styleData.kebabName;
  var organization = styleData.organization;

  var url = baseURL + '/' + organization + '/' + styleguide + '/settings';

  if (idToken) {
    url += '#id_token=' + idToken + '&access_token=' + accessToken;
  }

  return url;
}

function getManageProfileURL(host, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);
  return baseURL + '/manage/#id_token=' + idToken + '&access_token=' + accessToken;
}

function getAddUserToOrganization(host, organization, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);

  var url = baseURL + '/' + organization + '/users/?ref=sketch#id_token=' + idToken + '&access_token=' + accessToken;
  return url;
}

function getStyleguideReleasesURL(host, organizationName, styleguideName, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);

  var url = baseURL + '/' + organizationName + '/' + styleguideName + '/releases#id_token=' + idToken + '&access_token=' + accessToken;
  return url;
}

function getArtboardURL(host, organizationName, pageName, artboardName, artboardId, idToken, accessToken) {
  var baseURL = getWebSiteUrl(host);

  var url = baseURL + '/' + organizationName + '/artboards/' + pageName + '/' + artboardName + '/' + artboardId + '/#id_token=' + idToken + '&access_token=' + accessToken;
  return url;
}

/***/ }),

/***/ 1274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_download_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sketch__ = __webpack_require__(21);













var INTERVAL_TO_UPDATE_THE_DATE = 1000 * 60 * 3; //  3 minutes


var StyleguideStore = __WEBPACK_IMPORTED_MODULE_2__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.init();

    setInterval(this._setLastUpdateTime.bind(this, true), INTERVAL_TO_UPDATE_THE_DATE);

    this.bindActions(__WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].PLUGIN_LOADED, this.onPluginLoaded, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].START_LOADING_STYLEGUIDE, this.onLoadStyleguideStarted, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].START_REFRESHING_STYLEGUIDE, this.onRefreshStyleguideStarted, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].STYLEGUIDE_LOADED, this.onStyleguideLoaded, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].STYLEGUIDE_LOAD_FAILED, this.onStyleguideLoadFailed, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].CURRENT_SECTION_CHANGED, this.onStyleguideSectionChanged, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].EDITING_STYLEGUIDE_ITEM, this.onEditingStyleguideItem, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].SNAPSHOT_CREATED, this.updateStyleguideSnapshots, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].REFETCH_CACHEABLE_STYLE_DATA, this.onFetchCacheableLibraryData, __WEBPACK_IMPORTED_MODULE_3__actions_actions_js__["constants"].USER_SIGNED_OUT, this.onUserSignedOut);
  },

  init: function init() {
    this.styleData = null;
    this.styleguide = null;
    this.styleguideError = null;
    this.loadingStyleData = false;
    this.shouldReloadStyleguide = false;
    this.styleDataImageHashes = {};
    this.relativeUpdateDate = '';
    this.editingItemID = null;
    this.initialStyleguideId = null;
    this.prefetchingStyleData = true;
    this.prefetchingStyleDataFailed = false;

    if (this.prefetchAlternateDataTimer) {
      clearTimeout(this.prefetchAlternateDataTimer);
    }
    this.prefetchAlternateDataTimer = null;
    //don't reset currentSection as part of this, it is still should be valid when the user sign in again
  },

  onPluginLoaded: function onPluginLoaded(payload) {
    this.currentSection = payload.currentSection;
    this.initialStyleguideId = payload.styleguideId;
    this.emit('change');
  },

  onLoadStyleguideStarted: function onLoadStyleguideStarted() {
    this.loadingStyleData = true;
    this.styleguideError = null;
    this.prefetchingStyleDataFailed = false;
    this.emit('change');
  },

  onRefreshStyleguideStarted: function onRefreshStyleguideStarted() {
    this.shouldReloadStyleguide = false;
    this.emit('change');
  },

  onStyleguideLoaded: function onStyleguideLoaded(styleData) {
    this.loadingStyleData = false;
    this.styleguideError = null;
    this.prefetchingStyleData = true;

    //process the incoming style data
    __WEBPACK_IMPORTED_MODULE_6__util__["x" /* normalizeStyleData */](styleData);
    __WEBPACK_IMPORTED_MODULE_6__util__["z" /* populateGlobalAssetsObject */](styleData);

    this.styleData = styleData;
    this.styleguide = styleData.styleguide;

    this._setLastUpdateTime();
    this._updateNativeLayerOnNewData();
    this.cacheAlternateData();

    this.emit('change');
  },

  onStyleguideLoadFailed: function onStyleguideLoadFailed(error) {
    this.styleData = null;
    this.styleguide = null;
    this.loadingStyleData = false;
    this.styleguideError = error;
    this.emit('change');
  },

  onStyleguideSectionChanged: function onStyleguideSectionChanged(newSection) {
    this.currentSection = newSection;
    this.emit('change');
  },

  onEditingStyleguideItem: function onEditingStyleguideItem(editingItemID) {
    this.editingItemID = editingItemID;
    this.emit('change');
  },

  onUserSignedOut: function onUserSignedOut() {
    this.init();
    this.emit('change');
  },

  markStyleDataAsStale: function markStyleDataAsStale() {
    this.shouldReloadStyleguide = true;
    this.emit('change');
  },


  removeStyleguideSnapshot: function removeStyleguideSnapshot(snapshotId) {
    var snapshotDeleted = false;
    if (this.styleguide) {
      var clonedStyleguide = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.styleguide);
      var snapshots = clonedStyleguide.snapshots;
      var deletedSnapshots = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(snapshots, { _id: snapshotId });
      snapshotDeleted = !!deletedSnapshots.length;
      this.styleguide = clonedStyleguide;
      this.styleData.styleguide = this.styleguide;
      this.emit('change');
    }
    return snapshotDeleted;
  },

  updateStyleguideSnapshots: function updateStyleguideSnapshots(snapshots) {

    var clonedStyleguide = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.styleguide);
    clonedStyleguide.snapshots = snapshots;
    this.styleguide = clonedStyleguide;
    this.styleData.styleguide = this.styleguide;
    this.emit('change');
  },

  libraryPermissionsChanged: function libraryPermissionsChanged(allowEditing) {
    this.styleguide.allowEditing = allowEditing;
    this.emit('change');
  },

  getStyleguideId: function getStyleguideId() {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(this.styleguide, '_id');
  },

  getSnapshotId: function getSnapshotId() {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(this.styleguide, 'snapshotId');
  },

  isReadOnly: function isReadOnly() {
    if (!this.styleguide) {
      return true;
    }
    return !this.styleguide.allowEditing;
  },

  onFetchCacheableLibraryData: function onFetchCacheableLibraryData() {
    this.prefetchingStyleDataFailed = false;
    this.prefetchingStyleData = true;
    this.emit('change');
    this.cacheAlternateData();
  },

  // Cache data that is not displayed by the web UI but required for image resolving later.
  // We will delay this operation a bit so it won't interfere with using browser resources to download the visible images
  cacheAlternateData: function cacheAlternateData() {

    if (!this.styleData) {
      return;
    }

    if (this.prefetchAlternateDataTimer) {
      clearTimeout(this.prefetchAlternateDataTimer);
    }
    //populate hashes at this stage so that we can benefit from already existing data without the need to wait for prefetching
    __WEBPACK_IMPORTED_MODULE_6__util__["y" /* populateAllImageHashes */](this.styleData, this.styleDataImageHashes);

    this.prefetchAlternateDataTimer = setTimeout(this._downloadCacheableStyleData.bind(this, this.styleData, this.styleDataImageHashes), 2 * 1000);
  },

  _downloadCacheableStyleData: function _downloadCacheableStyleData(styleData, styleDataImageHashes) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_4__services_download_service__["b" /* prefetchAlternateData */](styleData, styleDataImageHashes).then(function (results) {

      if (styleData.styleguide.kebabName !== _this.styleData.styleguide.kebabName) {
        Object(__WEBPACK_IMPORTED_MODULE_6__util__["h" /* debug */])('We probably got here from the previously loaded styleguide, dont reflect the status on the current state');
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_6__util__["h" /* debug */])('Prefetching of style data finished.');
      _this.prefetchingStyleData = false;

      var failedItems = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.compact(results);
      if (failedItems.length > 0) {
        var styleguide = styleData.styleguide;
        __WEBPACK_IMPORTED_MODULE_5__services_logger_service_js__["a" /* default */].error({ message: 'Some of the items were not fetched successfully.', failedItems: failedItems, styleguideName: styleguide.name, organizationName: styleguide.organization });
        _this.prefetchingStyleDataFailed = true;
      } else {
        _this.prefetchingStyleDataFailed = false;
      }
      _this.emit('change');
    }).catch(function (err) {
      //we dont expect to get here as even the files we can not download are not rejecting the download promise
      //this is should catch unexpected errors in the flow
      Object(__WEBPACK_IMPORTED_MODULE_6__util__["h" /* debug */])('unexpected error occurred while prefetching.');
      Object(__WEBPACK_IMPORTED_MODULE_6__util__["h" /* debug */])(err);
      _this.prefetchingStyleData = false;
      _this.emit('change');
    });
  },


  //update relative calculations of last update date to the current time
  _setLastUpdateTime: function _setLastUpdateTime() {
    var autoRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!this.styleguide) {
      this.relativeUpdateDate = '';
      return;
    }

    var lastUpdated = this.styleguide.updatedDate;
    if (lastUpdated) {
      this.relativeUpdateDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(lastUpdated).fromNow();
    } else {
      this.relativeUpdateDate = '';
    }

    // no need to trigger this if it was called from styleguide loaded
    if (autoRefresh) {
      this.emit('change');
    }
  },

  _updateNativeLayerOnNewData: function _updateNativeLayerOnNewData() {
    __WEBPACK_IMPORTED_MODULE_7__sketch__["m" /* setStyleData */](this.styleData).catch(function () {
      Object(__WEBPACK_IMPORTED_MODULE_6__util__["h" /* debug */])('Updating native layer with new style data failed');
    });
  }

});

/* harmony default export */ __webpack_exports__["a"] = (StyleguideStore);

/***/ }),

/***/ 1275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);







var SubscribersStore = __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.init();

    this.bindActions(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].START_LOADING_ORGANIZATION, this.onLoadOrganizationStarted, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ORGANIZATION_CREATED, this.onOrganizationCreated, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ORGANIZATION_LOADED, this.onOrganizationLoaded, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ORGANIZATION_LOAD_FAILED, this.onOrganizationLoadFailed, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].CHECK_ORGANIZATION_EXISTS, this.updateOrganizationExistsMessage, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].SET_DEFAULT_ORAGNIZATION, this.onSetDefaultOrganization, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_SIGNED_OUT, this.onUserSignedOut);
  },

  init: function init() {
    this.loadingOrganizations = false;
    this.organizations = [];
    this.organizationExistMessage = null;
    this.organizationError = null;
  },

  onLoadOrganizationStarted: function onLoadOrganizationStarted() {
    this.loadingOrganizations = true;
    this.organizationError = null;
    this.emit('change');
  },

  onOrganizationLoaded: function onOrganizationLoaded(organizations) {
    this.loadingOrganizations = false;
    this.organizations = organizations;
    this.emit('change');
  },

  onSetDefaultOrganization: function onSetDefaultOrganization(newDefaultOrganizationId) {
    var organizations = this.organizations;

    var currentDefault = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(organizations, { isDefault: true });
    var destinationOrganization = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(organizations, { _id: newDefaultOrganizationId });

    if (destinationOrganization && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(currentDefault, '_id') !== destinationOrganization._id) {
      currentDefault.isDefault = false;
      destinationOrganization.isDefault = true;
    }
    this.emit('change');
  },

  onOrganizationLoadFailed: function onOrganizationLoadFailed(error) {
    this.loadingOrganizations = false;
    this.organizationError = error;
    this.emit('change');
  },

  onOrganizationCreated: function onOrganizationCreated(newOrganization) {
    this.organizations = this.organizations.concat(newOrganization);
    this.emit('change');
  },

  onOrganizationRemoved: function onOrganizationRemoved(organizationId) {
    var currentOrganizations = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.organizations);
    var removedOrganizations = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(currentOrganizations, { _id: organizationId });
    this.organizations = currentOrganizations;
    this.emit('change');
    return !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(removedOrganizations);
  },

  onUserRoleInOrganizationChanged: function onUserRoleInOrganizationChanged(organizationId, userId, newRole) {
    var changedOrg = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(this.organizations).find({ _id: organizationId });
    var userInOrg = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].findUserInOrganization(changedOrg, userId);
    if (userInOrg) {
      userInOrg.role = newRole;
    }
  },

  addStyleguideToOrganization: function addStyleguideToOrganization(organizationId, styleguide) {
    var currentOrganizations = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.organizations);
    var org = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(currentOrganizations, { _id: organizationId });
    if (org) {
      org.styleguides = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.concat(org.styleguides, styleguide);
      this.organizations = currentOrganizations;
      this.emit('change');
    }
  },

  removeStyleguideFromOrganization: function removeStyleguideFromOrganization(organizationId, styleguideId) {
    var currentOrganizations = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.organizations);
    var org = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(currentOrganizations, { _id: organizationId });
    var removedStyleguides = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(org.styleguides, { _id: styleguideId });
    this.organizations = currentOrganizations;
    this.emit('change');
    return !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(removedStyleguides);
  },

  renameStyleguideInOrganization: function renameStyleguideInOrganization(organizationId, styleguideId, newName) {
    var organizations = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(this.organizations);
    var org = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(organizations, { _id: organizationId });
    var styleguide = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(org.styleguides, { _id: styleguideId });
    if (styleguide) {
      styleguide.name = newName;
      styleguide.kebabName = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.kebabCase(newName);
      this.organizations = organizations;
      this.emit('change');
    }
  },

  updateOrganizationExistsMessage: function updateOrganizationExistsMessage(organizationExistMessage) {
    this.organizationExistMessage = organizationExistMessage;
    this.emit('change');
  },

  onUserSignedOut: function onUserSignedOut() {
    this.init();
    this.emit('change');
  },

  getCurrentOrganization: function getCurrentOrganization() {
    var defaultOrganization = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.organizations, { isDefault: true });
    if (!defaultOrganization && this.organizations.length > 0) {
      Object(__WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */])('missing default organization for user, setting manually');
      defaultOrganization = this.organizations[0];
      defaultOrganization.isDefault = true;
    }
    return defaultOrganization;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (SubscribersStore);

/***/ }),

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_analytics_client_js__ = __webpack_require__(113);









var ApiClientStore = __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default.a.createStore({

  initialize: function initialize() {

    this.bindActions(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].PLUGIN_LOADED, this.onPluginLoaded, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].USER_AUTH_SUCCESS, this.onTokenUpdated, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].USER_SIGNED_OUT, this.onUserSignout, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].USER_TOKENS_REFRESHED, this.onTokenUpdated, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].STYLEGUIDE_LOADED, this.onStyleguideLoaded);
  },

  onPluginLoaded: function onPluginLoaded(payload) {
    this.apiURL = payload.apiURL || __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiURL;

    this.initClients();
  },

  initClients: function initClients() {
    Object(__WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */])('api url ' + this.apiURL);
    this.apiClient = new __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["brandaiApi"].ApiClient({
      host: this.apiURL,
      client: __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["sharedConstants"].clients.sketch
    });

    this.styleguideClient = new __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["brandaiApi"].StyleguideApi(this.apiClient, __WEBPACK_IMPORTED_MODULE_5__services_analytics_client_js__["a" /* default */]);

    this.pagesClient = new __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["brandaiApi"].PagesApi(this.apiClient, __WEBPACK_IMPORTED_MODULE_5__services_analytics_client_js__["a" /* default */]);
  },

  //update token if one was changed
  onTokenUpdated: function onTokenUpdated(_ref) {
    var idToken = _ref.idToken;

    this.apiClient.setToken(idToken);
    this.emit('change');
  },

  onUserSignout: function onUserSignout() {
    this.initClients();
  },

  //todo: fix set up in the styleguide-api directly
  onStyleguideLoaded: function onStyleguideLoaded(styleData) {
    // At this point, we know the styleguide name and organization, so
    // we’ll add those to the client.
    var styleguide = styleData.styleguide.kebabName;
    var organization = styleData.styleguide.organization;
    this.styleguideClient.styleguideName = styleguide;
    this.styleguideClient.organizationName = organization;
  },

  getApiClient: function getApiClient() {
    return this.apiClient;
  },

  getStyleguideClient: function getStyleguideClient() {
    return this.styleguideClient;
  },

  getPagesApiClient: function getPagesApiClient() {
    return this.pagesClient;
  },

  getHost: function getHost() {
    return this.apiURL;
  }

});

/* harmony default export */ __webpack_exports__["a"] = (ApiClientStore);

/***/ }),

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_applications_data__ = __webpack_require__(431);




var ApplicationStore = __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.resetApplicationNotification();

    this.bindActions(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].PLUGIN_APP_CHANGED, this.onAppChanged, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].PLUGIN_LOADED, this.onPluginLoaded, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].SET_APPLICATION_NOTIFICATION, this.onNewApplicationNotification, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].START_LOADING_STYLEGUIDE, this.resetApplicationNotification, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].START_LOADING_PAGES, this.resetApplicationNotification, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].USER_SIGNED_OUT, this.resetApplicationNotification);
  },

  resetApplicationNotification: function resetApplicationNotification() {
    this.applicationNotification = null;
  },

  onAppChanged: function onAppChanged(currentApp) {
    this.currentApp = currentApp;
    this.emit('change');
  },

  onPluginLoaded: function onPluginLoaded(payload) {
    this.currentApp = payload.currentApp;
    this.pluginVersion = payload.pluginVersion;
    this.sketchVersion = payload.sketchVersion;
    this.emit('change');
  },

  onNewApplicationNotification: function onNewApplicationNotification(notificationData) {
    this.applicationNotification = notificationData;
    this.emit('change');
  },

  isPagesApp: function isPagesApp() {
    return this.currentApp === __WEBPACK_IMPORTED_MODULE_2__utils_applications_data__["a" /* default */].PAGES.name;
  },

  isProductionEnv: function isProductionEnv() {
    //todo: user more accurate way to define prod build
    var host = this.flux.store('ApiClientStore').getHost();
    return host === 'https://api.brand.ai';
  }

});

/* harmony default export */ __webpack_exports__["a"] = (ApplicationStore);

/***/ }),

/***/ 1278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__brandai_lib__);




// for example why it null, why the {}

var SearchResultsStore = __WEBPACK_IMPORTED_MODULE_0__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {
    this.init();

    this.bindActions(__WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].SEARCH_STYLEGUIDE, this.onSearchStyleguide, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].STYLEGUIDE_LOADED, this.onStyleguideLoaded, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].SEARCH_ARTBOARDS, this.onSearchArtboards, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].PAGES_LOADED, this.onPagesLoaded, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].START_LOADING_PAGES, this.cleanPagesSearchQuery, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].START_LOADING_STYLEGUIDE, this.cleanStyleDataSearchQuery, __WEBPACK_IMPORTED_MODULE_1__actions_actions_js__["constants"].USER_SIGNED_OUT, this.userSignedOut);

    this.styleguideSearchService = new __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["clientServices"].StyleguideSearchService();
    this.pagesSearchService = new __WEBPACK_IMPORTED_MODULE_2__brandai_lib__["clientServices"].PagesSearchService();
  },

  init: function init() {
    this.pagesSearchQuery = '';
    this.styleDataSearchQuery = '';
    this.filteredStyleguide = null;
    this.filteredPages = null;
  },

  userSignedOut: function userSignedOut() {
    this.init();
    this.emit('change');
  },

  _searchStyleguide: function _searchStyleguide(query, styleData) {
    if (query && styleData) {
      this.filteredStyleguide = this.styleguideSearchService.searchAndFilter(query, styleData);
    } else {
      this.filteredStyleguide = null;
    }
    this.emit('change');
  },

  onStyleguideLoaded: function onStyleguideLoaded(styleData) {
    this.styleguideSearchService.buildIndex(styleData);
    this._searchStyleguide(this.styleDataSearchQuery, styleData);
  },

  onSearchStyleguide: function onSearchStyleguide(data) {
    this.styleDataSearchQuery = data.queryString;
    var styleData = this.flux.store('StyleguideStore').styleData;
    this._searchStyleguide(this.styleDataSearchQuery, styleData);
  },

  _searchArtboards: function _searchArtboards(query, pages) {
    if (query && pages.length > 0) {
      this.filteredPages = this.pagesSearchService.searchAndFilter(query, { pages: pages });
    } else {
      this.filteredPages = {};
    }
    this.emit('change');
  },

  onPagesLoaded: function onPagesLoaded(pages) {
    this.pagesSearchService.buildIndex(pages);
    this._searchArtboards(this.pagesSearchQuery, pages);
  },

  onSearchArtboards: function onSearchArtboards(data) {
    var pages = this.flux.store('PagesStore').pages;
    this.pagesSearchQuery = data.queryString;
    this._searchArtboards(this.pagesSearchQuery, pages);
  },

  cleanPagesSearchQuery: function cleanPagesSearchQuery() {
    this.pagesSearchQuery = '';
  },

  cleanStyleDataSearchQuery: function cleanStyleDataSearchQuery() {
    this.styleDataSearchQuery = '';
  },

  getFilteredPages: function getFilteredPages() {
    return this.filteredPages || {};
  }

});

/* harmony default export */ __webpack_exports__["a"] = (SearchResultsStore);

/***/ }),

/***/ 1279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger_service_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_subscriber_service_js__ = __webpack_require__(1280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(158);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };















var SubscribersStore = __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.bindActions(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PLUGIN_LOADED, this.onPluginLoaded, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_AUTH_SUCCESS, this.onUserAuthenticated, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_TOKENS_REFRESHED, this.onUserTokenUpdated, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_SIGNED_OUT, this.onUserSignedOut, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].STYLEGUIDE_VIEWED, this.subscribeToStyleguide, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ORGANIZATION_LOADED, this.subscribeToOrganizations, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ORGANIZATION_CREATED, this.subscribeToOrganization, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PAGES_VIEWED, this.subscribeToPages, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PAGE_ADDED, this.subscribeToPage, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PAGE_DELETED, this.unsubscribeFromPage);
  },

  init: function init() {
    this.subscriberService = null;
    this.connected = null;
    this._setConnectionStatusCB = null;
  },

  onPluginLoaded: function onPluginLoaded(payload) {
    if (!this.subscriberService) {
      Object(__WEBPACK_IMPORTED_MODULE_7__util__["h" /* debug */])('create subscriber service');
      //we are passing the CB directly from mainApp as we want it to be called directly on connection changes
      //communicating so through the state is prone to error and unnecessary updates
      this._setConnectionStatusCB = payload.setConnectionStatus || this._setConnectionStatus.bind(this);
      this.subscriberService = new __WEBPACK_IMPORTED_MODULE_4__services_notifications_subscriber_service_js__["a" /* default */](payload.apiURL, this._setConnectionStatusCB, payload.idToken);
    }
    this.apiURL = payload.apiURL || __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */].apiURL;
  },

  onUserTokenUpdated: function onUserTokenUpdated(_ref) {
    var idToken = _ref.idToken;

    this.subscriberService.updateUserData(idToken);
  },

  onUserSignedOut: function onUserSignedOut() {
    this.subscriberService.onUserSignedOut();
    this.subscriberService = new __WEBPACK_IMPORTED_MODULE_4__services_notifications_subscriber_service_js__["a" /* default */](this.apiURL, this._setConnectionStatusCB, null);
  },

  onUserAuthenticated: function onUserAuthenticated(_ref2) {
    var idToken = _ref2.idToken,
        user = _ref2.user;

    var userId = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(user, 'user_id');
    this.subscriberService.updateUserData(idToken, userId);

    //when the user is loaded subscriber to user relevant messages
    var userSubscriber = this.subscriberService.getUserSubscriber();
    userSubscriber.subscribeToOrganizationCreated(userId, this._onOrganizationAddedToUserMessage);
    userSubscriber.subscribeToOrganizationDeleted(userId, this._onOrganizationRemovedFromUserMessage);
    userSubscriber.subscribeToUserAddedToOrganization(userId, this._onOrganizationAddedToUserMessage);
    userSubscriber.subscribeToUserRemovedFromOrganization(userId, this._onOrganizationRemovedFromUserMessage);
    userSubscriber.subscribeToUserPermissionChanged(userId, this._onUserRoleInOrganizationChangedMessage);
  },

  subscribeToStyleguide: function subscribeToStyleguide(payload) {
    var _this = this;

    var styleguideSubscriber = this.subscriberService.getStyleguideSubscriber();
    var styleguide = payload.styleData.styleguide;
    var styleguideId = styleguide._id;

    //unsubscribe from previously loaded id
    if (payload.previousStyleguideId) {
      styleguideSubscriber.unsubscribeFromStyleguideChannel(payload.previousStyleguideId);
    }

    //subscribe to styleguide changes
    if (!styleguide.snapshotId) {
      //subscribe to edit events (in snapshot view no edits can happen)
      styleguideSubscriber.subscribeToStyleguideChanges(styleguideId, function () {
        return _this.flux.store('StyleguideStore').markStyleDataAsStale();
      }, true);
    }

    //subscribe to snapshot created/deleted events
    styleguideSubscriber.subscribeToSnapshotCreated(styleguideId, this._onNewVersionCreatedMessage);
    styleguideSubscriber.subscribeToSnapshotDeleted(styleguideId, this._onVersionDeletedMessage);
  },

  subscribeToOrganizations: function subscribeToOrganizations(organizations) {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(organizations, function (org) {
      _this2.subscribeToOrganization(org);
    });
  },

  subscribeToOrganization: function subscribeToOrganization(organization) {
    var organizationSubscriber = this.subscriberService.getOrganizationSubscriber();
    var organizationId = organization._id;
    organizationSubscriber.subscribeToStyleguideCreated(organizationId, this._onStyleguideAddedToOrganizationMessage);
    organizationSubscriber.subscribeToStyleguideDeleted(organizationId, this._onStyleguideRemovedFromOrganizationMessage);
    organizationSubscriber.subscribeToPageOrArtboardDataAdded(organizationId, this._onPageOrArtboardAddedMessage);
    organizationSubscriber.subscribeToPageDeleted(organizationId, this._onPageRemovedMessage);
    organizationSubscriber.subscribeToStyleguideRenamed(organizationId, this._onStyleguideRenamedMessage);
  },

  subscribeToPages: function subscribeToPages(payload) {
    var _this3 = this;

    //unsubscribe from previously loaded id
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(payload.previousPagesIds)) {
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(payload.previousPagesIds, this.unsubscribeFromPage);
    }

    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(payload.pages, function (page) {
      _this3.subscribeToPage(page._id);
    });
  },

  subscribeToPage: function subscribeToPage(pageId) {
    this.subscriberService.getPagesSubscriber().subscribeToArtboardDeleted(pageId, this._onArtboardDeletedMessage);
  },

  unsubscribeFromPage: function unsubscribeFromPage(pageId) {
    this.subscriberService.getPagesSubscriber().unsubscribeFromPageChannel(pageId);
  },

  _onNewVersionCreatedMessage: function _onNewVersionCreatedMessage(versionCreatedMessage) {

    var styleguideStore = this.flux.store('StyleguideStore');
    var isSnapshot = !!styleguideStore.getSnapshotId();

    //if the styleguide we are currently viewing is the one for which snapshot was added
    if (styleguideStore.getStyleguideId() === versionCreatedMessage.styleguideId) {
      styleguideStore.updateStyleguideSnapshots(versionCreatedMessage.snapshots);
      if (!this._isPagesApp()) {
        this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["c" /* snapshotCreatedMessage */](versionCreatedMessage, isSnapshot));
      }
    }
  },
  _onVersionDeletedMessage: function _onVersionDeletedMessage(message) {
    //currently not changing if it is the currently viewed snapshot that was deleted, just updating the list
    var snapshotDeleted = this.flux.store('StyleguideStore').removeStyleguideSnapshot(message.snapshotId);
    if (!this._isPagesApp() && snapshotDeleted) {
      this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["d" /* snapshotDeleteMessage */](message));
    }
  },


  _onOrganizationAddedToUserMessage: function _onOrganizationAddedToUserMessage(message) {
    if (!message || !message.organization) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in organization added to user message.' }, message));
      return;
    }

    var newOrganization = message.organization;
    var organizationStore = this.flux.store('OrganizationStore');
    organizationStore.onOrganizationCreated(newOrganization);

    this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["a" /* organizationAddedToUserMessage */](message));

    this.subscribeToOrganization(newOrganization);
  },

  _onOrganizationRemovedFromUserMessage: function _onOrganizationRemovedFromUserMessage(message) {
    if (!message || !message.organization) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in organization removed from user message.' }, message));
      return;
    }

    var organizationId = message.organization._id;

    // //handle the case where user is currently watching the removed organization
    // if (this.state.styleguide && this.state.styleguide.organization === message.organization.kebabName) {
    //   const leftOrganizations = _.filter(this.state.organizations, (org) => {
    //     return org._id !== organizationId && util.isNonEmptyArray(org.styleguides);
    //   });
    //   if (util.isNonEmptyArray(leftOrganizations)) {
    //     const newDefaultOrg = leftOrganizations[0];
    //     this.onStyleguideChanged({
    //       organizationId: newDefaultOrg._id,
    //       styleguideId: newDefaultOrg.styleguides[0]._id,
    //       latestSnapshot: true
    //     });
    //   } else {
    //     //clear the styledata since we are no longer viewing this last styleguide but have no alernative to load
    //     this.setState({ styleData: null, styleguide: null, styleguideId: null });
    //   }
    // }

    var organizationsRemoved = this.flux.store('OrganizationStore').onOrganizationRemoved(organizationId);
    this.subscriberService.getOrganizationSubscriber().unsubscribeFromOrganizationChannel(organizationId);

    //if we indeed found the organization to remove add a message
    if (organizationsRemoved) {
      this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["b" /* organizationRemovedFromUserMessage */](message));
    }
  },

  _onUserRoleInOrganizationChangedMessage: function _onUserRoleInOrganizationChangedMessage(message) {

    if (!message || !message.organizationKebabName || !message.newRole) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in user role changed message.' }, message));
      return;
    }

    //if we are watching this organization then we need to update the styleguide permissions
    var styleguideStore = this.flux.store('StyleguideStore');
    if (styleguideStore.styleguide.organization === message.organizationKebabName) {
      var isEditingRole = __WEBPACK_IMPORTED_MODULE_6__brandai_lib__["utils"].isEditingRole(message.newRole);

      //if new role differ from the previous one update user role in that organization
      if (styleguideStore.isReadOnly() === isEditingRole) {
        this.flux.store('OrganizationStore').onUserRoleInOrganizationChanged(message.organizationId, message.user.id, message.newRole);
        styleguideStore.libraryPermissionsChanged(isEditingRole);
        this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["h" /* userPermissionsChangedMessage */](message));
      }
    }
  },

  _onStyleguideAddedToOrganizationMessage: function _onStyleguideAddedToOrganizationMessage(message) {
    if (!message || !message.organizationId || !message.styleguide) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in styleguide added message.' }, message));
      return;
    }
    this.flux.store('OrganizationStore').addStyleguideToOrganization(message.organizationId, message.styleguide);
    this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["e" /* styleguideAddedMessage */](message));
  },
  _onStyleguideRemovedFromOrganizationMessage: function _onStyleguideRemovedFromOrganizationMessage(message) {
    if (!message || !message.organizationId || !message.styleguideId) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in styleguide removed message.' }, message));
      return;
    }

    if (this.flux.store('StyleguideStore').getStyleguideId() === message.styleguideId) {
      // if it is the viewed styleguide that was deleted make it read only and update the settings
      this.flux.store('StyleguideStore').libraryPermissionsChanged(false);
    }

    var styleguidesRemoved = this.flux.store('OrganizationStore').removeStyleguideFromOrganization(message.organizationId, message.styleguideId);
    if (styleguidesRemoved) {
      this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["f" /* styleguideRemovedMessage */](message));
    }
  },


  _onStyleguideRenamedMessage: function _onStyleguideRenamedMessage(message) {
    if (!message || !message.organizationId || !message.styleguideId) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in styleguide renamed message.' }, message));
      return;
    }

    this.flux.store('OrganizationStore').renameStyleguideInOrganization(message.organizationId, message.styleguideId, message.newName);

    //the styleguide that was renamed is the current styleguide
    var styleguideStore = this.flux.store('StyleguideStore');
    if (styleguideStore.getStyleguideId() === message.styleguideId) {
      styleguideStore.renameStyleguide(message.newName);
      //we need to refresh the styledata so that data in api client will be consistent
      this.flux.store('StyleguideStore').markStyleDataAsStale();
      if (!this._isPagesApp()) {
        this.flux.store('ApplicationStore').onNewApplicationNotification(__WEBPACK_IMPORTED_MODULE_5__utils_application_notifications_factory__["g" /* styleguideRenamedMessage */](message));
      }
    }
  },

  _onPageOrArtboardAddedMessage: function _onPageOrArtboardAddedMessage(message) {

    if (!message || !message.organizationName || !message.pageId) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in page added message.' }, message));
      return;
    }

    if (message.newPage) {
      this.subscribeToPage(message.pageId);
    }

    var organizationStore = this.flux.store('OrganizationStore');
    var currentOrg = organizationStore.getCurrentOrganization(); //todo: take the current or the currently loaded pages
    if (currentOrg.kebabName === message.organizationName) {
      this.flux.store('PagesStore').markPagesDataAsStale();
    }
  },
  _onPageRemovedMessage: function _onPageRemovedMessage(message) {

    var pageID = message.pageId;
    if (!message || !message.organizationName || !pageID) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in page removed message.' }, message));
      return;
    }

    var pagesStore = this.flux.store('PagesStore');

    //remove the selected asrtboard if its page was deleted
    var selectedArtboard = pagesStore.getSelectedArtboard();
    if (selectedArtboard && selectedArtboard.pageId === pageID) {
      pagesStore.onArtboardSelected(null);
    }

    // usubscribe from this page
    this.unsubscribeFromPage(pageID);

    //trigger refresh of organization pages and not only remove it will also recalculate search result
    pagesStore.markPagesDataAsStale();
  },


  _onArtboardDeletedMessage: function _onArtboardDeletedMessage(message) {
    if (!message || !message.pageId || !message.artboardId) {
      this._logNotificationErrorMessage(_extends({ message: 'Error in artboard deleted message.' }, message));
      return;
    }

    var pagesStore = this.flux.store('PagesStore');
    var selectedArtboard = pagesStore.getSelectedArtboard();

    if (selectedArtboard && selectedArtboard.pageId === message.pageId && selectedArtboard._id === message.artboardId) {
      if (!message.historyItemId) {
        //if complete artboard was deleted and it is the currently selected on, clean the selection
        pagesStore.onArtboardSelected(null);
      } else if (selectedArtboard.historyItems.length === 1) {
        //if last history item was deleted
        pagesStore.onArtboardSelected(null);
      }
    }

    pagesStore.markPagesDataAsStale();
  },

  //receive an indication if we have a valid connection now
  _setConnectionStatus: function _setConnectionStatus(connected) {
    Object(__WEBPACK_IMPORTED_MODULE_7__util__["h" /* debug */])('Unexpected connectivity callback called, expected to receive a dedicated callback from the application.');
    this.connected = connected;
  },

  _isPagesApp: function _isPagesApp() {
    return this.flux.store('ApplicationStore').isPagesApp();
  },

  _logNotificationErrorMessage: function _logNotificationErrorMessage(data) {
    __WEBPACK_IMPORTED_MODULE_3__services_logger_service_js__["a" /* default */].error(data);
  }

});

/* harmony default export */ __webpack_exports__["a"] = (SubscribersStore);

/***/ }),

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(158);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SubscriberService = function () {
  function SubscriberService(apiUrl, statusChangesCB, jwtToken, userId) {
    var _this = this;

    _classCallCheck(this, SubscriberService);

    //create pubsub service
    //note: for now we are not passing userId to the service so that user messages originating from the same user (for example: people sharing the same token) will not be filtered
    //       when we will block this option we need to read here the user so that user own edits will not trigger refreshes
    this.pubsubService = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["pubsub"].PubsubService({
      authenticationHost: apiUrl || __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].apiURL,
      token: jwtToken,
      userId: userId,
      client: __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["sharedConstants"].clients.sketch
    });

    //register for connection changes updates
    this.pubsubService.connectionStatus(function (connected) {
      _this.connected = connected;
      if (statusChangesCB) {
        statusChangesCB(connected);
      }
    });

    this.styleguideSubscriber = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["pubsub"].StyleguideSubscriber(this.pubsubService);
    this.userSubscriber = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["pubsub"].UserSubscriber(this.pubsubService);
    this.organizationSubscriber = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["pubsub"].OrganizationSubscriber(this.pubsubService);
    this.pageSubscriber = new __WEBPACK_IMPORTED_MODULE_0__brandai_lib__["pubsub"].PageSubscriber(this.pubsubService);
  }

  _createClass(SubscriberService, [{
    key: 'updateUserData',
    value: function updateUserData(idToken, userId) {
      this.pubsubService.updateUserData(idToken, userId);
    }
  }, {
    key: 'userSignedOut',
    value: function userSignedOut() {
      if (this.pubsubService) {
        this.pubsubService.disconnect();
      }
    }
  }, {
    key: 'getStyleguideSubscriber',
    value: function getStyleguideSubscriber() {
      return this.styleguideSubscriber;
    }
  }, {
    key: 'getPagesSubscriber',
    value: function getPagesSubscriber() {
      return this.pageSubscriber;
    }
  }, {
    key: 'getUserSubscriber',
    value: function getUserSubscriber() {
      return this.userSubscriber;
    }
  }, {
    key: 'getOrganizationSubscriber',
    value: function getOrganizationSubscriber() {
      return this.organizationSubscriber;
    }
  }]);

  return SubscriberService;
}();

/* harmony default export */ __webpack_exports__["a"] = (SubscriberService);

/***/ }),

/***/ 1281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_download_service__ = __webpack_require__(194);








var PagesStore = __WEBPACK_IMPORTED_MODULE_1__brandai_fluxxor___default.a.createStore({
  initialize: function initialize() {

    this.init();

    this.bindActions(__WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].START_LOADING_PAGES, this.onLoadPagesStarted, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].START_REFRESHING_PAGES, this.onRefreshingPagesStarted, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PAGES_LOADED, this.onPagesLoaded, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].PAGES_LOAD_FAILED, this.onPagesLoadFailed, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].ARTBOARD_SELECTED, this.onArtboardSelected, __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["constants"].USER_SIGNED_OUT, this.onUserSignedOut);
  },

  init: function init() {
    this.pages = [];
    this.pagesError = null;
    this.loadingPages = false;
    this.prefetchArtboardDataTimer = null;
    this.selectedArtboard = null;
    this.shouldReloadPages = false;
  },

  onLoadPagesStarted: function onLoadPagesStarted() {
    this.selectedArtboard = null;
    this.loadingPages = true;
    this.pagesError = null;
    this.emit('change');
  },

  onRefreshingPagesStarted: function onRefreshingPagesStarted() {
    this.shouldReloadPages = false;
    this.emit('change');
  },

  onPagesLoaded: function onPagesLoaded(pages) {
    this.pages = pages;
    this.loadingPages = false;
    this.pagesError = null;
    this._updateNativeLayerOnNewData();
    this._cacheArtboardData();
    this.emit('change');
  },

  onPagesLoadFailed: function onPagesLoadFailed(error) {
    this.pages = [];
    this.loadingPages = false;
    this.pagesError = error;
    this.emit('change');
  },

  onArtboardSelected: function onArtboardSelected(selectedArtboard) {
    this.selectedArtboard = selectedArtboard;
    this.emit('change');
  },

  markPagesDataAsStale: function markPagesDataAsStale() {
    this.shouldReloadPages = true;
    this.emit('change');
  },

  onPageDeleted: function onPageDeleted(deletedPageID) {
    this.pages = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reject(this.pages, { _id: deletedPageID });
    this.emit('change');
  },

  onUserSignedOut: function onUserSignedOut() {
    this.init();
    this.emit('change');
  },

  getSelectedArtboard: function getSelectedArtboard() {
    if (this.selectedArtboard) {
      var selectedPage = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.pages, { _id: this.selectedArtboard.pageId });
      if (selectedPage) {
        var selectedArtboard = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(selectedPage.artboards, { _id: this.selectedArtboard._id });
        if (selectedArtboard && selectedArtboard.historyItems.length > 0) {
          return selectedArtboard;
        }
      }
    }
    return null;
  },

  getPagesOrganization: function getPagesOrganization() {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(this.pages, '[0].organization');
  },

  _cacheArtboardData: function _cacheArtboardData() {

    if (this.prefetchArtboardDataTimer) {
      clearTimeout(this.prefetchArtboardDataTimer);
    }
    //todo: decide if I want to include pages in considering prefetching indication
    this.prefetchArtboardDataTimer = setTimeout(__WEBPACK_IMPORTED_MODULE_5__services_download_service__["c" /* prefetchArtboardData */].bind(null, this.pages), 12 * 1000);
  },

  _updateNativeLayerOnNewData: function _updateNativeLayerOnNewData() {
    __WEBPACK_IMPORTED_MODULE_3__sketch__["l" /* setArtboardData */](this.pages).catch(function () {
      __WEBPACK_IMPORTED_MODULE_4__util__["h" /* debug */]('Updating native layer with new style data failed');
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (PagesStore);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextInput__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageWithFallback__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);






var SIZE_TO_HEIGHT = {
  xs: 48,
  sm: 72,
  md: 96
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var image = _ref.image,
      nameHidden = _ref.nameHidden,
      trimName = _ref.trimName,
      size = _ref.size,
      preferPngFormat = _ref.preferPngFormat,
      readOnly = _ref.readOnly,
      editing = _ref.editing,
      onBeginEditItem = _ref.onBeginEditItem,
      onRenameImage = _ref.onRenameImage,
      onImageDragEnd = _ref.onImageDragEnd,
      onImageContextMenu = _ref.onImageContextMenu,
      selectable = _ref.selectable,
      _ref$draggable = _ref.draggable,
      draggable = _ref$draggable === undefined ? true : _ref$draggable,
      customClassName = _ref.customClassName,
      onFallbackDataReceived = _ref.onFallbackDataReceived,
      onImageDragStart = _ref.onImageDragStart;


  var displayName = image.displayName;
  if (image.displayName && image.displayName.length && trimName) {
    var displayNamePathParts = image.displayName.split('/');
    displayName = displayNamePathParts[displayNamePathParts.length - 1];
  }

  var dims = (image.dimensions || 'x').split(/x/i);
  var width = parseFloat(dims[0]);
  var height = parseFloat(dims[1]);

  var style = { objectFit: 'contain' };

  if (!(Number.isNaN(width) || Number.isNaN(height))) {

    var expectedSize = SIZE_TO_HEIGHT[size] - 5;
    if (width < expectedSize && height < expectedSize) {
      //we dont want to stretch small items
      style = { objectFit: 'none' };
    }
    style.width = '100%';
    style.height = '100%';
  }

  var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('c-image-tile', 'c-image-tile--' + size, { 'c-image-tile--selectable': selectable });

  var customData = {
    style: style,
    draggable: draggable,
    onDragEnd: onImageDragEnd,
    onDragStart: function onDragStart(evt) {
      if (onImageDragStart) {
        onImageDragStart(evt);
      }
    }
  };

  var _getImageURLs = getImageURLs(image, preferPngFormat),
      src = _getImageURLs.src,
      fallback = _getImageURLs.fallback;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: customClassName,
      title: image.displayName
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: className,
        style: { background: image.backgroundColor },
        onContextMenu: function onContextMenu(evt) {
          !readOnly ? onImageContextMenu(evt) : null;
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageWithFallback__["a" /* default */], {
        customData: customData,
        src: src,
        fallback: fallback,
        onFallbackLoaded: function onFallbackLoaded(dataURL) {
          return onFallbackDataReceived(dataURL, image);
        }
      })
    ),
    nameHidden ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TextInput__["a" /* default */], {
      value: image.displayName,
      labelDefaultValue: displayName,
      readOnly: readOnly,
      editing: editing,
      onBeginEdit: onBeginEditItem,
      onChangeValue: onRenameImage
    })
  );
});

function getImageURLs(image, preferPngFormat) {
  var externalURL = __WEBPACK_IMPORTED_MODULE_4__util__["i" /* displayableURL */](image, 'small', { preferPngFormat: preferPngFormat });
  return { src: externalURL };
}

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  auth0AppID: 'mVp7ORn9wVBUyIPbuIy3ia9y1waqVnIK',

  apiURL: 'https://api.brand.ai',
  // apiURL: 'https://brandai-api-staging.brand.ai/',
  auth0URL: 'https://brandai.auth0.com',
  webURLs: {
    'https://api.brand.ai': 'https://brand.ai',

    'https://brandai-api-staging.brand.ai/': 'http://brandai-staging.s3-website-us-east-1.amazonaws.com',

    'http://localhost:3001': 'http://localhost:3000'
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertResult; });
/* harmony export (immutable) */ __webpack_exports__["h"] = debug;
/* harmony export (immutable) */ __webpack_exports__["s"] = isNonEmptyObject;
/* harmony export (immutable) */ __webpack_exports__["r"] = isNonEmptyArray;
/* harmony export (immutable) */ __webpack_exports__["l"] = forAllItems;
/* harmony export (immutable) */ __webpack_exports__["m"] = getAllItemsInSections;
/* harmony export (immutable) */ __webpack_exports__["t"] = itemsKeyForImageType;
/* harmony export (immutable) */ __webpack_exports__["g"] = categoryKeyForImageType;
/* harmony export (immutable) */ __webpack_exports__["w"] = missingFontFamiliesForTypeStyles;
/* harmony export (immutable) */ __webpack_exports__["A"] = populateTypeStyleFontFamilyIDs;
/* harmony export (immutable) */ __webpack_exports__["B"] = populateTypeStyleTextColorIDs;
/* harmony export (immutable) */ __webpack_exports__["x"] = normalizeStyleData;
/* harmony export (immutable) */ __webpack_exports__["z"] = populateGlobalAssetsObject;
/* harmony export (immutable) */ __webpack_exports__["G"] = replaceFileExtension;
/* harmony export (immutable) */ __webpack_exports__["j"] = fileExtension;
/* harmony export (immutable) */ __webpack_exports__["E"] = promiseTracker;
/* harmony export (immutable) */ __webpack_exports__["D"] = promiseToRunOnQueue;
/* harmony export (immutable) */ __webpack_exports__["C"] = promiseTimeout;
/* harmony export (immutable) */ __webpack_exports__["q"] = imageItemFromLayer;
/* harmony export (immutable) */ __webpack_exports__["o"] = getImageHashKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = addImageHash;
/* harmony export (immutable) */ __webpack_exports__["y"] = populateAllImageHashes;
/* harmony export (immutable) */ __webpack_exports__["H"] = styleFromFVD;
/* harmony export (immutable) */ __webpack_exports__["f"] = base64Encode;
/* unused harmony export allColors */
/* harmony export (immutable) */ __webpack_exports__["v"] = missingColorsInTypeStyles;
/* harmony export (immutable) */ __webpack_exports__["c"] = anonymousColorPalette;
/* harmony export (immutable) */ __webpack_exports__["F"] = randomID;
/* harmony export (immutable) */ __webpack_exports__["i"] = displayableURL;
/* harmony export (immutable) */ __webpack_exports__["k"] = findAlternativeFormat;
/* unused harmony export imageFromURL */
/* harmony export (immutable) */ __webpack_exports__["d"] = backgroundColorIDWithBestContrastForImageURL;
/* harmony export (immutable) */ __webpack_exports__["e"] = backgroundColorWithBetterContrastForTextColor;
/* harmony export (immutable) */ __webpack_exports__["p"] = hasDuplicateElements;
/* harmony export (immutable) */ __webpack_exports__["u"] = mainFormatFromImageType;
/* harmony export (immutable) */ __webpack_exports__["n"] = getFilesExtensionsToUploadFromImageType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinycolor2__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tinycolor2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sha1__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sha1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sha1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constants__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__shared_constants__);







var AlertResult = {
  OK: 1000,
  Cancel: 1001
};

function debug(msg) {
  __WEBPACK_IMPORTED_MODULE_4__sketch__["i" /* postNativeUIEvent */]('onDebug', msg);
}

function isNonEmptyObject(obj) {
  return obj && Object.keys(obj).length;
}

function isNonEmptyArray(ary) {
  return ary && ary.length;
}

function forAllItems(styleguide, func) {
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(styleguide.logos, function (logo) {
    return func(logo);
  });
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(styleguide.typeStyles, function (style) {
    return func(style);
  });
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(styleguide.sharedStyles, function (style) {
    return func(style);
  });
  forAllImageItems(styleguide, func);
}

function forAllImageItems(styleguide, func) {
  var _loop = function _loop() {
    var category = __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS[imageType];
    if (styleguide[category.categoryKey]) {
      styleguide[category.categoryKey].forEach(function (section) {
        section[category.itemsKey].forEach(function (image) {
          func(image);
        });
      });
    }
  };

  for (var imageType in __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS) {
    _loop();
  }
}

function getAllItemsInSections(sections, itemKey) {
  return __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].getItemsFromSections(sections, itemKey);
}

function itemsKeyForImageType(imageType) {
  return __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS[imageType].itemsKey;
}

function categoryKeyForImageType(imageType) {
  return __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS[imageType].categoryKey;
}

function missingFontFamiliesForTypeStyles(typeStyles, styleData) {
  var missingFonts = [];
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(typeStyles, function (style) {
    var existingFamily = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(styleData.globalAssets.fonts, {
      family: style.fontFamily
    });
    if (!existingFamily) {
      missingFonts = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.union(missingFonts, [style.fontFamily]);
    }
  });

  return missingFonts;
}

function populateTypeStyleFontFamilyIDs(typeStyles, styleData) {
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(typeStyles, function (style) {
    var existingFamily = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(styleData.globalAssets.fonts, {
      family: style.fontFamily
    });
    if (!existingFamily) {
      throw new Error('No font family "' + style.fontFamily + '" in design library.');
    } else {
      style.fontFamily = existingFamily._id;
    }
  });
}

function populateTypeStyleTextColorIDs(typeStyles, styleData) {
  var colors = allColors(styleData);

  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(typeStyles, function (typeStyle) {

    var matchingColor = colors.find(function (color) {
      return __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(color.value).toRgbString() == __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(typeStyle.textColor).toRgbString();
    });

    typeStyle.textColor = matchingColor ? matchingColor._id : null;
  });
}

//todo: think of getting rid of this step at all
function normalizeStyleData(styleData) {
  var styleguides = styleData.parentStyleguides.concat(styleData.styleguide);
  styleguides.forEach(function (styleguide) {
    forAllItems(styleguide, function (item) {
      if (item.backgroundColor) {
        item.backgroundColorID = item.backgroundColor;
        item.backgroundColor = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(item, 'backgroundColorObject.value');
      }

      if (item.textColor) {
        item.textColorID = item.textColor;
        item.textColor = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(item, 'textColorObject.value');
      }

      if (item.fontFamily) {
        item.fontFamilyID = item.fontFamily;
        item.fontFamily = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(item, 'fontFamilyObject.family');
      }
    });
  });
}

//for now populate it upon new data, it can be optimized upon first time needed maybe?
function populateGlobalAssetsObject(styleData) {
  var styleguides = styleData.parentStyleguides.concat(styleData.styleguide);
  var ImageConstants = __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS;
  styleData.globalAssets.images = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForSections(styleguides, ImageConstants.images.categoryKey, ImageConstants.images.itemsKey);
  styleData.globalAssets.icons = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForSections(styleguides, ImageConstants.icons.categoryKey, ImageConstants.icons.itemsKey);
  styleData.globalAssets.componentImages = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForSections(styleguides, ImageConstants.componentImages.categoryKey, ImageConstants.componentImages.itemsKey);
  styleData.globalAssets.typeStyles = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForType(styleguides, 'typeStyles');
  styleData.globalAssets.sharedStyles = __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForType(styleguides, 'sharedStyles');
  styleData.globalAssets.sketchSymbols = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniqBy(__WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].createGlobalAssetsListForType(styleguides, 'sketchSymbols'), function (value) {
    return value.metadata.sketchSymbolId;
  });
}

function replaceFileExtension(fileName, oldExtension, newExtension) {
  return fileName.replace(new RegExp('\\.' + oldExtension + '$'), '.' + newExtension);
}

function fileExtension(url) {
  var urlParts = (url || '').split('.');
  return urlParts[urlParts.length - 1].toLowerCase();
}

// Create a promise wrapper that calls back immediately and when the promise
// resolves.
function promiseTracker(_ref) {
  var onCreate = _ref.onCreate,
      onResolve = _ref.onResolve;

  return function (promise) {
    if (onCreate) {
      onCreate();
    }

    return promise.then(function (value) {
      if (onResolve) {
        onResolve();
      }

      return value;
    });
  };
}

// queue is the queue to use, func is something that returns a promise or value.
function promiseToRunOnQueue(queue, func) {
  return new Promise(function (resolve, reject) {
    queue.defer(function (complete) {
      // Calling func returns the result of the task. It is either a promise or
      // a value.
      var promiseOrValue = func();

      // Treat it as a promise either way.
      var promise = Promise.resolve(promiseOrValue);

      // When that promise completes, resolve or reject the wrapper promise and
      // notify the queue the task is complete.
      promise.then(function (value) {
        resolve(value);
        complete(null, value);
      }).catch(function (err) {
        reject(err);
        complete(err);
      });
    });
  });
}

function promiseTimeout(time, message, promise) {
  var timeout = new Promise(function (resolve) {
    return setTimeout(resolve, time);
  }).then(function () {
    return Promise.reject(new Error(message));
  });

  return Promise.race([promise, timeout]);
}

function imageItemFromLayer(layer, uploadedFiles, primaryExtension) {
  primaryExtension = primaryExtension || 'svg';
  var primaryUploaded = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(uploadedFiles, { extension: primaryExtension });

  // add all created additional formats (skla, png) to image entity, svg is the primary so don't add it to additional
  var additionalFormats = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.chain(uploadedFiles).reject({ extension: primaryExtension }).map(function (file) {
    return {
      url: file.fileURL,
      extension: file.extension,
      size: file[file.extension + 'ByteLength']
    };
  }).value();

  var backgroundColor = layer.backgroundColorID || null;
  var size = primaryUploaded[primaryExtension + 'ByteLength'];

  var sharedObjectsV2 = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniq(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(primaryUploaded.sharedObjects || {}));
  var directNestedSymbolIds = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniq(primaryUploaded.directNestedSymbolIds);

  return {
    displayName: layer.name,
    fileName: layer.name + '.' + primaryExtension,
    extension: primaryExtension,
    url: primaryUploaded.fileURL,
    size: size,
    dimensions: primaryUploaded.width + 'X' + primaryUploaded.height,
    metadata: {
      sketchSymbolId: primaryUploaded.symbolID,
      hash: layer.hash,
      sharedObjects: primaryUploaded.sharedObjects,
      sharedObjectsV2: sharedObjectsV2.length > 0 ? sharedObjectsV2 : undefined,
      directNestedSymbolIds: directNestedSymbolIds.length > 0 ? directNestedSymbolIds : undefined
    },
    additionalFormats: additionalFormats,
    backgroundColor: backgroundColor
  };
}

function getImageHashKey(symbolID, imageID) {
  return symbolID + '-' + imageID;
}

function addImageHash(hashesMap, image, dataURI) {
  if (hashesMap) {
    var symbolId = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(image, 'metadata.sketchSymbolId');
    var imageId = image._id;
    // we use the symbol and imageId as the hash key so validate we have both
    if (symbolId && imageId) {
      var key = getImageHashKey(symbolId, imageId);
      // if we have persisted hash use it, otherwise generate new one
      hashesMap[key] = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(image, 'metadata.hash');
      //meaning we don't have the hash for this object and we have the data upon which we can calculate the key, perform the calculation
      if (!hashesMap[key] && dataURI) {
        hashesMap[key] = __WEBPACK_IMPORTED_MODULE_2_sha1___default()(dataURI);
      }
    }
  }
}

function populateAllImageHashes(styleData, hashesMap) {

  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(styleData.globalAssets.sketchSymbols, function (symbol) {
    //we set image hash here to optimize for the initial state where we dont have any persisted hashes and everything will be considered new
    // it is redundant for the uploaded layere and after some time we can consider to remove this
    addImageHash(hashesMap, symbol);
  });

  //create a list of all styleguides
  var styleguides = [styleData.styleguide].concat(styleData.parentStyleguides);
  styleguides.forEach(function (styleguide) {
    forAllImageItems(styleguide, function (item) {
      addImageHash(hashesMap, item);
    });
  });
}

function styleFromFVD(fvd) {
  var result = {};

  if (!fvd) {
    return result;
  }

  var parts = fvd.split('');
  var style = parts[0];
  var weight = parts[1];

  // fontStyle
  if (style === 'i') {
    result.fontStyle = 'italic';
  }

  // fontWeight
  var number = parseInt(weight, 10);
  if (number) {
    weight = weight * 100;

    if (weight === 700) {
      result.fontWeight = 'bold';
    } else if (weight != 400) {
      result.fontWeight = weight;
    }
  }

  return result;
}

// This works with unicode characters.
function base64Encode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function allColors(styleData) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default()(__WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].defaultColors.colors).concat(styleData.globalAssets.colors);
}

function missingColorsInTypeStyles(typeStyles, styleData) {
  var colorStrs = allColors(styleData).map(function (color) {
    return __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(color.value).toRgbString();
  });

  var missingColors = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(typeStyles)
  // Common format for matching strings.
  .map(function (typeStyle) {
    return __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(typeStyle.textColor).toRgbString();
  }).filter(function (colorStr) {
    return !colorStrs.includes(colorStr);
  }).uniq().map(function (colorStr) {
    return { value: colorStr };
  }).value();

  return missingColors;
}

function anonymousColorPalette(styleData) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(styleData.styleguide.colorSections, { anonymousColorSection: true });
}

function randomID() {
  return Math.random().toString(36).substr(2, 10);
}

function displayableURL(imageType) {
  var thumbnailSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'small';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  var url = imageType.url;
  var size = imageType.size;
  if (imageType.extension === 'svg' && options.preferPNGFormat) {
    var pngAlternative = findAlternativeFormat(imageType, 'png');
    if (pngAlternative) {
      url = pngAlternative.url;
      size = pngAlternative.size;
    }
  }
  var presentedImage = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, imageType, { url: url, size: size });
  return __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].needThumbnail(presentedImage) ? __WEBPACK_IMPORTED_MODULE_3__brandai_lib__["utils"].getPresetTransformationUrl(presentedImage.url, thumbnailSize) : presentedImage.url;
}

function findAlternativeFormat(imageType, requestedFromat) {

  if (!imageType || !imageType.additionalFormats) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(imageType.additionalFormats, { extension: requestedFromat });
}

function imageFromURL(url) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');
    img.onerror = function (err) {
      return reject(err.message);
    };
    img.onload = function () {
      return resolve(img);
    };
    img.src = url;
  });
}

function imageIsLight(img) {
  var width = 10;
  var height = 10;
  var brightnessThreshold = 240; // Out of 255.

  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');

  // Draw image on white background.
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);

  // Get image pixel data.
  var imageData = ctx.getImageData(0, 0, width, height);
  var data = imageData.data;

  var r, g, b;
  for (var i = 0; i < data.length; i += 4) {
    r = data[i];
    g = data[i + 1];
    b = data[i + 2];
    // Stop as soon as any pixel is too dark.
    if (brightnessThreshold > __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()({ r: r, g: g, b: b }).getBrightness()) {
      return false;
    }
  }

  return true;
}

function okayToOverrideBackgroundColorID(backgroundColorID) {
  if (!backgroundColorID) {
    return true;
  } else if (backgroundColorID == 'white' || backgroundColorID == 'gray') {
    return true;
  }
  return false;
}

function backgroundColorIDWithBestContrastForImageURL(newImageURL, currentBackgroundColorID) {
  if (newImageURL && okayToOverrideBackgroundColorID(currentBackgroundColorID)) {
    return imageFromURL(newImageURL).then(function (img) {
      return imageIsLight(img) ? 'gray' : 'white';
    });
  } else {
    return Promise.resolve(currentBackgroundColorID);
  }
}

function backgroundColorWithBetterContrastForTextColor(textColorString, currentBackgroundColorString) {
  var backgroundColor = __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(currentBackgroundColorString);
  var backgroundColorBrightness = backgroundColor.getBrightness();

  // Only adjust background color if it is white.
  if (backgroundColorBrightness == 255) {
    var textColorBrightness = __WEBPACK_IMPORTED_MODULE_1_tinycolor2___default()(textColorString).getBrightness();
    if (backgroundColorBrightness - textColorBrightness < 16) {
      backgroundColor.darken(28);
    }
  }

  return backgroundColor.toHexString();
}

function hasDuplicateElements(list, fieldName) {
  var map = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.groupBy(list, fieldName);
  var duplicatesFound = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.some(map, function (value, key) {
    return value.length > 1;
  });
  return duplicatesFound;
}

function mainFormatFromImageType(type) {
  return __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS[type].preferPNGFormat ? 'png' : 'svg';
}

function getFilesExtensionsToUploadFromImageType(type) {
  return __WEBPACK_IMPORTED_MODULE_5__shared_constants___default.a.IMAGE_CATS[type].extensionsToUpload;
}

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// From https://github.com/isaacs/inherits
// inherits is licensed under the ISC license:
//
//
// The ISC License
//
// Copyright (c) Isaac Z. Schlueter
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function() {
  var crypt = __webpack_require__(596),
      utf8 = __webpack_require__(267).utf8,
      bin = __webpack_require__(267).bin,

  // The core
  sha1 = function (message) {
    // Convert to byte array
    if (message.constructor == String)
      message = utf8.stringToBytes(message);
    else if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer == 'function' && Buffer.isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();

    // otherwise assume byte array

    var m  = crypt.bytesToWords(message),
        l  = message.length * 8,
        w  = [],
        H0 =  1732584193,
        H1 = -271733879,
        H2 = -1732584194,
        H3 =  271733878,
        H4 = -1009589776;

    // Padding
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >>> 9) << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {
      var a = H0,
          b = H1,
          c = H2,
          d = H3,
          e = H4;

      for (var j = 0; j < 80; j++) {

        if (j < 16)
          w[j] = m[i + j];
        else {
          var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
          w[j] = (n << 1) | (n >>> 31);
        }

        var t = ((H0 << 5) | (H0 >>> 27)) + H4 + (w[j] >>> 0) + (
                j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 :
                j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 :
                j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 :
                         (H1 ^ H2 ^ H3) - 899497514);

        H4 = H3;
        H3 = H2;
        H2 = (H1 << 30) | (H1 >>> 2);
        H1 = H0;
        H0 = t;
      }

      H0 += a;
      H1 += b;
      H2 += c;
      H3 += d;
      H4 += e;
    }

    return [H0, H1, H2, H3, H4];
  },

  // Public API
  api = function (message, options) {
    var digestbytes = crypt.wordsToBytes(sha1(message));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

  api._blocksize = 16;
  api._digestsize = 20;

  module.exports = api;
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(593).Buffer))

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = {
  IMAGE_CATS: {
    icons: {
      categoryKey: 'iconSections',
      itemsKey: 'icons',
      displayNamePlural: 'Icons',
      preferPNGFormat: false,
      extensionsToUpload: ['png', 'skla', 'svg']
    },
    images: {
      categoryKey: 'imageSections',
      itemsKey: 'images',
      displayNamePlural: 'Images',
      preferPNGFormat: true,
      extensionsToUpload: ['png', 'skla']
    },
    componentImages: {
      categoryKey: 'componentImageSections',
      itemsKey: 'components',
      displayNamePlural: 'UI Components',
      preferPNGFormat: true,
      extensionsToUpload: ['png', 'skla']
    }
  },
  TYPES_TO_SYNC: {
    colors: { key: 'colors', label: 'Colors', description: 'Added to “Document Colors”' },
    typeStyles: { key: 'typeStyles', label: 'Text Styles' },
    sharedStyles: { key: 'sharedStyles', label: 'Layer Styles' },
    symbols: { key: 'symbols', label: 'Symbols' }
  },
  INDEX: {
    fontPSName: 0,
    fontFaceName: 1,
    fontWeight: 2,
    fontTraits: 3
  }
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = prefetchAlternateData;
/* harmony export (immutable) */ __webpack_exports__["c"] = prefetchArtboardData;
/* harmony export (immutable) */ __webpack_exports__["a"] = downloadFileAsDataURI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* eslint-disable */






function prefetchAlternateData(styleData, hashesMap) {

  var allPrefetchingCandidates = [].concat(styleData.globalAssets.sketchSymbols);

  //create a list of all styleguides where the current appear first so its data will be cached first
  var styleguides = [styleData.styleguide].concat(styleData.parentStyleguides);
  styleguides.forEach(function (styleguide) {
    __WEBPACK_IMPORTED_MODULE_2__util__["l" /* forAllItems */](styleguide, function (item) {
      allPrefetchingCandidates.push(item);
    });
  });

  //start with prefetching of all the symbol masters
  //by doing this on the globaAssets we avoid possible duplication that might be in the inital parent and childs lists
  return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(allPrefetchingCandidates, function (symbol) {
    return prefetchAlternateDataForItem(symbol, hashesMap);
  }, { concurrency: 6 });
}

function prefetchArtboardData(pages) {
  var allPrefetchingCandidates = [];
  pages.forEach(function (page) {
    page.artboards.forEach(function (artboard) {
      if (artboard.historyItems.length > 0) {
        var itemToCache = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.last(artboard.historyItems).image;
        allPrefetchingCandidates.push(itemToCache);
      }
    });
  });

  return __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.map(allPrefetchingCandidates, function (item) {
    return prefetchAlternateDataForItem(item);
  }, { concurrency: 6 });
}

function prefetchAlternateDataForItem(item, hashesMap) {
  return new __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a(function (resolve, reject) {
    var cacheURL;

    // Cache if the extension indicates there is data that can’t be displayed
    // stored side by side with the main URL.

    var sklaAlternative = __WEBPACK_IMPORTED_MODULE_2__util__["k" /* findAlternativeFormat */](item, 'skla');
    if (sklaAlternative) {
      cacheURL = sklaAlternative.url;
    } else if (item.sketchArchiveUrl) {
      cacheURL = item.sketchArchiveUrl;
    } else if (['ai', 'eps', 'png', 'jpg', 'jpeg'].includes(item.extension)) {
      // Cache any images. Large ones will not be loaded by the web view since a
      // smaller alternative will be loaded instead. And images that cannot be
      // displayed in the web view will also not be loaded.
      cacheURL = item.url;
    }
    // keeping this for backward compatibility, since I will not run the dmp for now skla extension will still exist and
    // we want to support the caching for those files
    // remove this once the dmp is run
    else if (item.extension == 'skla') {
        cacheURL = __WEBPACK_IMPORTED_MODULE_2__util__["G" /* replaceFileExtension */](item.url, 'svg', 'skla');
      }

    //download and store in 'window cache'
    if (cacheURL) {
      if (!window.brandai['imageCache-' + cacheURL]) {
        __WEBPACK_IMPORTED_MODULE_3__sketch__["c" /* getCachedImageData */]({ url: cacheURL, extension: item.extension }).then(function (dataURI) {
          imageDataLoaded(false, cacheURL, hashesMap, item, dataURI);
          resolve();
        }).catch(function () {
          downloadFileAsDataURI(cacheURL, function (dataURI) {
            return imageDataLoaded(true, cacheURL, hashesMap, item, dataURI);
          }).then(function (dataURI) {
            imageDataLoaded(true, cacheURL, hashesMap, item, dataURI);
            resolve();
          }).catch(function () {
            __WEBPACK_IMPORTED_MODULE_2__util__["h" /* debug */]('error caught ' + cacheURL);
            //we are not rejecting here as what we are really interested in is to know that we finished dowloading
            //todo: consider if it is useful saving which urls failed
            resolve(item);
          });
        });
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function imageDataLoaded(persistLoadedData, cacheURL, hashesMap, item, dataURI) {
  //we set image hash here to optimize for the initial state where we dont have any persisted hashes and everything will be considered new
  // it is redundant for the uploaded layere and after some time we can consider to remove this
  __WEBPACK_IMPORTED_MODULE_2__util__["b" /* addImageHash */](hashesMap, item, dataURI);

  window.brandai['imageCache-' + cacheURL] = dataURI;

  if (persistLoadedData) {
    __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onImageFallbackDataReceived', { url: cacheURL, extension: 'skla', dataURL: dataURI });
  }
}

// Make as lightweight a request as possible, not using a library. I don’t want
// to use up too much memory doing fancy response parsing.
function downloadFileAsDataURI(url) {
  return new __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';

    req.onload = function (evt) {
      if (evt.target.status == 200) {
        // Read the file data as a data-uri, which can be later read by native
        // code.
        var reader = new FileReader();
        reader.onload = function (evt) {
          resolve(evt.target.result);
        };
        reader.onerror = function (err) {
          reject(err);
        };
        reader.readAsDataURL(req.response);
      } else {
        reject(new Error('Could not download element with url ' + url + ' received error status: ' + evt.target.status));
      }
    };
    req.onerror = function (err) {
      reject(err);
    };

    req.send();
  });
}

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FluxActionAwareComponent = function FluxActionAwareComponent(InnerComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {};
      _this.getFlux = _this.getFlux.bind(_this);
      _this.getActions = _this.getActions.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (!this.props.flux && (!this.context || !this.context.flux)) {
          var namePart = this.constructor.displayName ? " of " + this.constructor.displayName : "";
          throw new Error("Could not find flux on this.props or this.context" + namePart);
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          flux: this.getFlux()
        };
      }
    }, {
      key: 'getFlux',
      value: function getFlux() {
        return this.props.flux || this.context && this.context.flux;
      }
    }, {
      key: 'getActions',
      value: function getActions() {
        var flux = this.getFlux();
        if (flux) {
          return flux.actions;
        }
        throw new Error("Could not find flux on this.props or this.context");
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InnerComponent, _extends({}, this.props, {
          actions: this.getActions()
        }));
      }
    }]);

    return _class;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.childContextTypes = {
    flux: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }, _class.contextTypes = {
    flux: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }, _temp;
};

/* harmony default export */ __webpack_exports__["a"] = (FluxActionAwareComponent);

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["k"] = sendDataToNativeHost;
/* harmony export (immutable) */ __webpack_exports__["a"] = debug;
/* harmony export (immutable) */ __webpack_exports__["i"] = postNativeUIEvent;
/* unused harmony export callNativeUIFunction */
/* harmony export (immutable) */ __webpack_exports__["m"] = setStyleData;
/* harmony export (immutable) */ __webpack_exports__["l"] = setArtboardData;
/* harmony export (immutable) */ __webpack_exports__["d"] = getLayerData;
/* harmony export (immutable) */ __webpack_exports__["e"] = getSharedStyleArchiveData;
/* harmony export (immutable) */ __webpack_exports__["f"] = getSharedStylePreviewImageData;
/* harmony export (immutable) */ __webpack_exports__["c"] = getCachedImageData;
/* harmony export (immutable) */ __webpack_exports__["o"] = updateNativeUIState;
/* harmony export (immutable) */ __webpack_exports__["n"] = showProgressSheet;
/* harmony export (immutable) */ __webpack_exports__["g"] = hideProgressSheet;
/* harmony export (immutable) */ __webpack_exports__["j"] = resetProgress;
/* harmony export (immutable) */ __webpack_exports__["h"] = incrementProgress;
/* harmony export (immutable) */ __webpack_exports__["b"] = displayAlert;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*eslint no-console: ["error", { allow: ["log"] }]*/

function sendDataToNativeHost(data) {
  console.log('WEB->NATIVE', data);
  window.status = JSON.stringify(data);
}

function debug(message) {
  sendDataToNativeHost({
    eventType: 'debug',
    message: message
  });
}

function postNativeUIEvent(eventName, payload) {
  window.status = JSON.stringify({ eventName: eventName, payload: payload });
}
function callNativeUIFunction(functionName, args, callback) {
  var callbackID = Math.random().toString(36).substr(2, 10);
  window.brandai['callback-' + callbackID] = callback;
  postNativeUIEvent('onCallFunction', { functionName: functionName, callbackID: callbackID, args: args });
}

function setStyleData(styleData) {
  return new Promise(function (resolve) {
    callNativeUIFunction('setStyleData', styleData, function () {
      resolve();
    });
  });
}

function setArtboardData(pages) {
  return new Promise(function (resolve) {
    callNativeUIFunction('setArtboardData', pages, function () {
      resolve();
    });
  });
}

function getLayerData(layerID) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return new Promise(function (resolve) {
    callNativeUIFunction('getLayerData', _extends({ layerID: layerID }, options), function (layerData) {
      resolve(layerData);
    });
  });
}

function getSharedStyleArchiveData(sharedStyleID) {
  return new Promise(function (resolve) {
    callNativeUIFunction('getSharedStyleArchiveData', sharedStyleID, function (data) {
      resolve(data);
    });
  });
}

function getSharedStylePreviewImageData(sharedStyleID) {
  return new Promise(function (resolve) {
    callNativeUIFunction('getSharedStylePreviewImageData', sharedStyleID, function (data) {
      resolve(data);
    });
  });
}

function getCachedImageData(payload) {
  return new Promise(function (resolve, reject) {
    callNativeUIFunction('getCachedImageData', payload, function (dataURI) {
      if (!dataURI) {
        reject();
      }
      resolve(dataURI);
    });
  });
}

function updateNativeUIState(newState) {
  postNativeUIEvent('onUIStateDidChange', newState);
}

function showProgressSheet(options) {
  postNativeUIEvent('onShowProgresSheet', options);
}

function hideProgressSheet() {
  postNativeUIEvent('onHideProgressSheet');
}

function resetProgress(payload) {
  postNativeUIEvent('onResetProgressSheet', payload);
}

function incrementProgress(incrementBy) {
  postNativeUIEvent('onIncrementProgress', incrementBy);
}

function displayAlert(options, callback) {
  callNativeUIFunction('displayAlert', options, callback);
}

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


var ENTER_KEY = 13;

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      fieldClassName = _ref.fieldClassName,
      value = _ref.value,
      labelDefaultValue = _ref.labelDefaultValue,
      editing = _ref.editing,
      onBeginEdit = _ref.onBeginEdit,
      onChangeValue = _ref.onChangeValue;


  var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(fieldClassName, { 'TextInput__value': !fieldClassName }, { 'TextInput__value--editing': !fieldClassName && editing });

  return (value || value == '') && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: className,
      onDoubleClick: function onDoubleClick() {
        return setBeginEdit(readOnly, onBeginEdit);
      }
    },
    editing ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
      autoFocus: true,
      defaultValue: value,
      onKeyDown: function onKeyDown(event) {
        return _onKeyDown(event, onChangeValue);
      },
      onFocus: function onFocus(event) {
        return event.target.select();
      },
      onBlur: function onBlur(event) {
        return onChangeValue(event.target.value);
      }
    }) : labelDefaultValue || value
  );
});

function setBeginEdit(readOnly, onBeginEdit) {
  if (!readOnly) {
    onBeginEdit();
  }
}

function _onKeyDown(event, onChangeValue) {
  if (event.keyCode === ENTER_KEY) {
    event.preventDefault();
    onChangeValue(event.target.value);
  }
}

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TextInput_js__ = __webpack_require__(246);



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      name = _ref.name,
      isNew = _ref.isNew,
      onMenu = _ref.onMenu,
      children = _ref.children,
      editing = _ref.editing,
      onBeginEdit = _ref.onBeginEdit,
      onRename = _ref.onRename;


  var className = 'SectionHead flex items-center ' + (isNew ? 'SectionHead--dashed' : '');

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: className,
      onContextMenu: function onContextMenu(event) {
        !readOnly ? onMenu(event) : null;
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__TextInput_js__["a" /* default */], {
      readOnly: readOnly,
      fieldClassName: 'SectionHead__title flex-auto',
      value: name,
      editing: editing,
      onBeginEdit: onBeginEdit,
      onChangeValue: onRename,
      labelDefaultValue: getName(isNew, name || 'Untitled')
    }),
    children
  );
});

function getName(isNew, name) {
  if (isNew) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'em',
      null,
      name
    );
  } else {
    return name;
  }
}

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = uploadDataURI;
/* harmony export (immutable) */ __webpack_exports__["a"] = addStorageFileNamesToLayers;
/* harmony export (immutable) */ __webpack_exports__["b"] = signedURLFromFileName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service_js__ = __webpack_require__(112);






var request = __webpack_require__(95);

function uploadDataURI(destinationURL, fileDataURI) {
  var verifyImage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var blob = blobFromDataURI(fileDataURI);
  var contentType = contentTypeFromDataURI(fileDataURI);
  return uploadBlob(destinationURL, fileDataURI, blob, contentType, verifyImage);
}

function uploadBlob(destinationURL, fileDataURI, fileBlob, contentType, verifyImage) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.onload = function () {
      request.put(destinationURL).set('Content-Type', contentType).send(this.result).end(function (err, res) {
        if (err) {
          __WEBPACK_IMPORTED_MODULE_3__logger_service_js__["a" /* default */].error(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({ message: 'Error uploading layer' }, err));
          reject(err);
          return;
        }

        if (verifyImage && contentType.includes('png')) {
          var image = new Image();
          image.onload = function () {
            resolve();
          };
          image.onerror = function () {
            __WEBPACK_IMPORTED_MODULE_3__logger_service_js__["a" /* default */].error(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({
              message: 'Image upload failed - xhr result',
              fileBlobLength: fileBlob && fileBlob.size,
              fileDataURILength: fileDataURI && fileDataURI.length,
              signedURL: destinationURL,
              contentType: contentType
            }, res));
            reject(new Error('Image could not be loaded after upload'));
          };

          image.src = destinationURL.split('?')[0];
        } else {
          resolve();
        }
      });
    };
    fileReader.readAsArrayBuffer(fileBlob);
  });
}

function contentTypeFromDataURI(dataURI) {
  var match = /^data:([^;,]*)/.exec(dataURI);
  var result = 'text/plain';
  if (match && match[1] && !/^charset=|^base64$/.test(match[1])) {
    result = match[1];
  }
  return result;
}

function blobFromDataURI(dataURI) {
  var req = new XMLHttpRequest();
  // Below false means synchronous, which makes this unsuitable for calling
  // remote URLs, although that will technically work.
  req.open('GET', dataURI, false);
  req.responseType = 'blob';
  req.send();
  return req.response;
}

//todo: move to util
function addStorageFileNamesToLayers(layers, extensions) {
  extensions = extensions || ['svg', 'png', 'skla'];
  layers.forEach(function (layer) {
    var prefix = '';
    if (layer.isSymbolMasterDependency) {
      prefix = 'sketch-symbols/';
    }
    var storageFileNames = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(extensions, function (extension) {
      return '' + prefix + layer.name + '-' + layer.id + '.' + extension;
    });
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(layer, {
      storageFileNames: storageFileNames
    });
  });
}

function signedURLFromFileName(signedFiles, fileName) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default()(signedFiles).find({ fileName: fileName }).signedUrl;
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(8);

var defaultDispatchInterceptor = function defaultDispatchInterceptor(action, dispatch) {
  dispatch(action);
};

var Dispatcher = function Dispatcher(stores) {
  this.stores = {};
  this.currentDispatch = null;
  this.currentActionType = null;
  this.waitingToDispatch = [];
  this.dispatchInterceptor = defaultDispatchInterceptor;
  this._boundDispatch = this._dispatch.bind(this);

  for (var key in stores) {
    if (stores.hasOwnProperty(key)) {
      this.addStore(key, stores[key]);
    }
  }
};

Dispatcher.prototype.addStore = function (name, store) {
  store.dispatcher = this;
  this.stores[name] = store;
};

Dispatcher.prototype.dispatch = function (action) {
  this.dispatchInterceptor(action, this._boundDispatch);
};

Dispatcher.prototype._dispatch = function (action) {
  if (!action || !action.type) {
    throw new Error("Can only dispatch actions with a 'type' property");
  }

  if (this.currentDispatch) {
    var complaint = "Cannot dispatch an action ('" + action.type + "') while another action ('" + this.currentActionType + "') is being dispatched";
    throw new Error(complaint);
  }

  this.waitingToDispatch = _.clone(this.stores);

  this.currentActionType = action.type;
  this.currentDispatch = _.mapValues(this.stores, function () {
    return { resolved: false, waitingOn: [], waitCallback: null };
  });

  try {
    this.doDispatchLoop(action);
  } finally {
    this.currentActionType = null;
    this.currentDispatch = null;
  }
};

Dispatcher.prototype.doDispatchLoop = function (action) {
  var dispatch,
      canBeDispatchedTo,
      wasHandled = false,
      removeFromDispatchQueue = [],
      dispatchedThisLoop = [];

  _.forOwn(this.waitingToDispatch, function (value, key) {
    dispatch = this.currentDispatch[key];
    canBeDispatchedTo = !dispatch.waitingOn.length || !_.intersection(dispatch.waitingOn, _.keys(this.waitingToDispatch)).length;
    if (canBeDispatchedTo) {
      if (dispatch.waitCallback) {
        var stores = _.map(dispatch.waitingOn, function (key) {
          return this.stores[key];
        }.bind(this));
        var fn = dispatch.waitCallback;
        dispatch.waitCallback = null;
        dispatch.waitingOn = [];
        dispatch.resolved = true;
        fn.apply(null, stores);
        wasHandled = true;
      } else {
        dispatch.resolved = true;
        var handled = this.stores[key].__handleAction__(action);
        if (handled) {
          wasHandled = true;
        }
      }

      dispatchedThisLoop.push(key);

      if (this.currentDispatch[key].resolved) {
        removeFromDispatchQueue.push(key);
      }
    }
  }.bind(this));

  if (_.keys(this.waitingToDispatch).length && !dispatchedThisLoop.length) {
    var storesWithCircularWaits = _.keys(this.waitingToDispatch).join(", ");
    throw new Error("Indirect circular wait detected among: " + storesWithCircularWaits);
  }

  _.forEach(removeFromDispatchQueue, function (key) {
    delete this.waitingToDispatch[key];
  }.bind(this));

  if (_.size(this.waitingToDispatch)) {
    this.doDispatchLoop(action);
  }

  if (!wasHandled && console && console.warn) {
    console.warn("An action of type " + action.type + " was dispatched, but no store handled it");
  }
};

Dispatcher.prototype.waitForStores = function (store, stores, fn) {
  if (!this.currentDispatch) {
    throw new Error("Cannot wait unless an action is being dispatched");
  }

  var waitingStoreName = _.findKey(this.stores, function (val) {
    return val === store;
  });

  if (stores.indexOf(waitingStoreName) > -1) {
    throw new Error("A store cannot wait on itself");
  }

  var dispatch = this.currentDispatch[waitingStoreName];

  if (dispatch.waitingOn.length) {
    throw new Error(waitingStoreName + " already waiting on stores");
  }

  _.forEach(stores, function (storeName) {
    var storeDispatch = this.currentDispatch[storeName];
    if (!this.stores[storeName]) {
      throw new Error("Cannot wait for non-existent store " + storeName);
    }
    if (storeDispatch.waitingOn.indexOf(waitingStoreName) > -1) {
      throw new Error("Circular wait detected between " + waitingStoreName + " and " + storeName);
    }
  }.bind(this));

  dispatch.resolved = false;
  dispatch.waitingOn = _.uniq(dispatch.waitingOn.concat(stores));
  dispatch.waitCallback = fn;
};

Dispatcher.prototype.setDispatchInterceptor = function (fn) {
  if (fn) {
    this.dispatchInterceptor = fn;
  } else {
    this.dispatchInterceptor = defaultDispatchInterceptor;
  }
};

module.exports = Dispatcher;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event]) return [];
  if (this._events[event].fn) return [this._events[event].fn];

  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event]) return false;

  var listeners = this._events[event]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event]) return this;

  var listeners = this._events[event]
    , events = [];

  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
        events.push(listeners[i]);
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[event];
  else this._events = {};

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the module.
//
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.EventEmitter2 = EventEmitter;
EventEmitter.EventEmitter3 = EventEmitter;

//
// Expose the module.
//
module.exports = EventEmitter;


/***/ }),

/***/ 267:
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  PAGES: { name: 'Artboards' },
  LIBRARIES: { name: 'Design Libraries' }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var Dispatcher = __webpack_require__(254),
    Flux = __webpack_require__(570),
    FluxMixin = __webpack_require__(572),
    FluxChildMixin = __webpack_require__(573),
    StoreWatchMixin = __webpack_require__(574),
    createStore = __webpack_require__(575);

var Fluxxor = {
  Dispatcher: Dispatcher,
  Flux: Flux,
  FluxMixin: FluxMixin,
  FluxChildMixin: FluxChildMixin,
  StoreWatchMixin: StoreWatchMixin,
  createStore: createStore,
  version: __webpack_require__(577)
};

module.exports = Fluxxor;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(8);

var actionClasses = [__webpack_require__(1260).default, __webpack_require__(1264).default, __webpack_require__(1265).default, __webpack_require__(1266).default, __webpack_require__(1267).default, __webpack_require__(1268).default, __webpack_require__(1269).default, __webpack_require__(1271).default, __webpack_require__(1272).default];

var actions = _.map(actionClasses, 'actions');
var constants = _.map(actionClasses, 'constants');

actions = _.merge.apply(_, actions);
constants = _.merge.apply(_, constants);

module.exports = { actions: actions, constants: constants };

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinycolor2__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tinycolor2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextInput_js__ = __webpack_require__(246);






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      color = _ref.color,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      selected = _ref.selected,
      editing = _ref.editing,
      onSelect = _ref.onSelect,
      onBeginEdit = _ref.onBeginEdit,
      onRename = _ref.onRename,
      onMenu = _ref.onMenu;


  var isDark = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()(color).getLuminance() < 0.7;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ColorSwatch', 'ColorSwatch--' + size),
      title: name,
      onContextMenu: function onContextMenu(event) {
        !readOnly ? onMenu(event) : null;
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ColorSwatch__background' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: 'ColorSwatch__swatch',
        style: { backgroundColor: color },
        onMouseDown: onSelect,
        dangerouslySetInnerHTML: selected ? checkMark(isDark) : null
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TextInput_js__["a" /* default */], {
      readOnly: readOnly,
      value: name,
      editing: editing,
      onBeginEdit: onBeginEdit,
      onChangeValue: onRename
    })
  );
});

function checkMark() {
  var backgroundIsDark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return {
    __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="-355.5 0 500 500" style="position:relative; top: 7px;">\n  <path fill="' + (backgroundIsDark ? 'white' : 'black') + '" d="M144.441,133.281c0,8.598-3.009,15.907-9.028,21.925l-277.288,277.288 c-6.018,6.019-13.327,9.028-21.925,9.028s-15.907-3.01-21.925-9.028l-160.569-160.568c-6.019-6.019-9.028-13.328-9.028-21.925 c0-8.599,3.009-15.907,9.028-21.926l43.85-43.85c6.019-6.019,13.328-9.028,21.925-9.028s15.906,3.01,21.925,9.028l94.794,95.116 L47.712,67.506c6.019-6.019,13.327-9.028,21.925-9.028c8.598,0,15.906,3.01,21.925,9.028l43.85,43.85 C141.432,117.375,144.441,124.684,144.441,133.281z"/>\n</svg>'
  };
}

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      typeStyle = _ref.typeStyle,
      draggable = _ref.draggable,
      selected = _ref.selected,
      installedFonts = _ref.installedFonts,
      onSelect = _ref.onSelect,
      onDragEnd = _ref.onDragEnd,
      onMenu = _ref.onMenu;


  var id = typeStyle._id || typeStyle.objectID;

  var fontFamily;
  var fontIsNotInstalled = false;
  if (installedFonts) {
    if (installedFonts[id]) {
      fontFamily = installedFonts[id];
    } else {
      // Font is not installed if there is installed font data, but not
      // for this type style.
      fontIsNotInstalled = true;
      fontFamily = 'Helvetica'; // Fallback.
    }
  } else {
    // No installed font data, so use info from type style.
    fontFamily = typeStyle.metadata && typeStyle.metadata.postScriptName || typeStyle.fontFamily;
  }
  var fontStyle = __WEBPACK_IMPORTED_MODULE_2__util__["H" /* styleFromFVD */](typeStyle.fontVariant);

  // Adjust background color for better contrast.
  var textColor = typeStyle.textColor || 'black';
  var backgroundColor = __WEBPACK_IMPORTED_MODULE_2__util__["e" /* backgroundColorWithBetterContrastForTextColor */](textColor, typeStyle.backgroundColor || 'white');

  var sampleStyles = {
    color: selected ? 'white' : textColor,
    backgroundColor: selected ? 'ActiveBorder' : backgroundColor,
    fontSize: typeStyle.fontSize,
    fontFamily: fontFamily,
    fontWeight: fontStyle.fontWeight,
    fontStyle: fontStyle.fontStyle,
    textAlign: typeStyle.alignment,
    letterSpacing: typeStyle.letterSpacing,
    textTransform: typeStyle.uppercase ? 'uppercase' : void 0,
    opacity: typeStyle.opacity ? typeStyle.opacity : void 0,
    textDecoration: (typeStyle.underline ? 'underline' : void 0) || (typeStyle.strikethrough ? 'line-through' : void 0)
  };
  var fontNotInstalledWarning = fontIsNotInstalled ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: 'flex-none',
      style: { paddingRight: 10 },
      title: 'The font used in this style is not installed. A fallback font will be used.'
    },
    '\u26A0\uFE0F'
  ) : null;

  var name = typeStyle.name || 'Untitled Type Style';

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      onClick: onSelect ? function (evt) {
        return onSelect(evt);
      } : null,
      onContextMenu: function onContextMenu(event) {
        !readOnly ? onMenu(event) : null;
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'flex items-center', style: { backgroundColor: sampleStyles.backgroundColor } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'flex-auto typography-sample', style: sampleStyles },
        name,
        draggable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
          className: 'typography-drag',
          draggable: true,
          onDragStart: handleDragStart.bind(null, id),
          onDragEnd: onDragEnd.bind(null, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.defaults({ name: name }, typeStyle)),
          src: svgDataURI(name, fontFamily, sampleStyles, 3000, 200)
        })
      ),
      fontNotInstalledWarning
    ),
    draggable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
      id: 'proxy-image-' + id,
      style: { position: 'absolute', left: '-9999px' },
      src: svgDataURI(name, fontFamily, sampleStyles, 1000, 300)
    })
  );
});

function handleDragStart(id, evt) {
  var image = document.getElementById('proxy-image-' + id);
  evt.dataTransfer.setDragImage(image, 20, 260);
  evt.dataTransfer.setData('text/plain', '.....');
}

function svgDataURI(text, fontFamily, styles, width, height) {
  var svg = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n    <svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" version="1.1">\n      <text\n        x="0"\n        y="' + height * 0.9 + '"\n        fill="' + styles.color + '"\n        font-family="' + fontFamily + '"\n        font-size="' + styles.fontSize + '"\n        font-weight="' + styles.fontWeight + '"\n        font-style="' + styles.fontStyle + '"\n        letter-spacing="' + styles.letterSpacing + '"\n        text-decoration="' + styles.textDecoration + '"\n        text-transform="' + styles.textTransform + '"\n      >\n        ' + text + '\n      </text>\n    </svg>\n  ';

  return 'data:image/svg+xml;base64,' + __WEBPACK_IMPORTED_MODULE_2__util__["f" /* base64Encode */](svg);
}

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var readOnly = _ref.readOnly,
      name = _ref.name,
      thumbnailSize = _ref.thumbnailSize,
      thumbnailURL = _ref.thumbnailURL,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      onMenu = _ref.onMenu;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      onMouseDown: onSelect ? function (evt) {
        return onSelect(evt);
      } : null,
      onContextMenu: function onContextMenu(event) {
        !readOnly ? onMenu(event) : null;
      },
      style: {
        backgroundColor: selected ? 'ActiveBorder' : null,
        color: selected ? 'white' : null,
        cursor: 'pointer'
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'flex items-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
        src: thumbnailURL,
        width: thumbnailSize,
        height: thumbnailSize,
        className: 'u-pl4 u-py2',
        draggable: false
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'flex-auto u-py3 u-px4' },
        name
      )
    )
  );
});

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_waypoint__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_waypoint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_waypoint__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox(props) {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);

    _this.state = {
      searchQuery: props.searchQuery,
      searchCallback: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(props.onSearch, 300),
      visible: true
    };
    return _this;
  }

  _createClass(SearchBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.searchQuery) {
        this.setState({
          searchQuery: nextProps.searchQuery
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var value = e.target.value;
      this.setState({ searchQuery: value });
      this.state.searchCallback(value);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      if (this.state.searchQuery) {
        var value = '';
        this.setState({ searchQuery: value });
        this.props.onSearch(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fieldValue = this.state.searchQuery;

      var componentClassName = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(this.props.className, { 'c-search-box--searching': fieldValue && !this.state.visible });

      var searchStripClassName = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('c-search-box__strip', { 'c-search-box__strip--searching': fieldValue && !this.state.visible });

      var inputBoxClassName = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('c-search-box__box', { 'c-search-box__box--searching': fieldValue });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: componentClassName },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_waypoint___default.a, { onLeave: function onLeave() {
            _this2.setState({ visible: false });
          },
          onEnter: function onEnter() {
            _this2.setState({ visible: true });
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: searchStripClassName },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: inputBoxClassName },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: 'icon icon-search c-search-box__search-icon' }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { value: fieldValue,
              placeholder: this.props.placeholder,
              onChange: this.handleChange.bind(this)
            }),
            fieldValue ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: 'icon icon-close-x c-search-box__clear-button', onClick: this.handleClear.bind(this) }) : null
          )
        )
      );
    }
  }]);

  return SearchBox;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchBox);


SearchBox.propTypes = {
  searchQuery: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  placeholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  onSearch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ListView = function (_React$Component) {
  _inherits(ListView, _React$Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

    _this.state = {
      items: [],
      selectedItemIDs: {},
      lastSelectedItemID: null
    };
    return _this;
  }

  _createClass(ListView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        this.sortedItems().map(function (item) {
          var id = item[_this2.props.idKey];
          var isSelected = _this2.state.selectedItemIDs[id];
          var toggleSelected = _this2.toggleItemSelection.bind(_this2, id);
          return _this2.props.renderItem(item, isSelected, toggleSelected);
        })
      );
    }
  }, {
    key: 'sortedItems',
    value: function sortedItems() {
      if (this.props.sortBy) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.sortBy(this.state.items, this.props.sortBy);
      } else {
        return this.state.items;
      }
    }
  }, {
    key: 'setItems',
    value: function setItems(items) {
      this.setState({ items: items });
    }
  }, {
    key: 'afterChangeSelection',
    value: function afterChangeSelection() {
      this.props.onSelectionChanged(this.getSelectedItems().length, this.state.items.length);
    }
  }, {
    key: 'toggleItemSelection',
    value: function toggleItemSelection(id, evt) {
      var _this3 = this;

      if (evt.shiftKey && this.state.lastSelectedItemID) {
        // Select all items between last selected item and
        // this one, inclusive.
        var idsInRange = {};
        var inRange = false;
        __WEBPACK_IMPORTED_MODULE_0_lodash___default()(this.sortedItems()).map(this.props.idKey).each(function (anID) {
          // Going through the list of all ids, check if we are at either end.
          if (anID === id || anID === _this3.state.lastSelectedItemID) {
            // This makes it inclusive.
            idsInRange[anID] = true;

            // Only two ends, so this turns the range on at one end and off at the other.
            inRange = !inRange;
          }
          if (inRange) {
            idsInRange[anID] = true;
          }
        });

        this.setState({
          selectedItemIDs: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(idsInRange, this.state.selectedItemIDs)
        }, this.afterChangeSelection);
      } else {
        // Toggle selected item.

        if (this.state.selectedItemIDs[id]) {
          // Deselect.
          this.setState({
            selectedItemIDs: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(this.state.selectedItemIDs, id),
            lastSelectedItemID: id
          }, this.afterChangeSelection);
        } else {
          // Select.
          var newID = {};
          newID[id] = true;
          this.setState({
            selectedItemIDs: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(newID, this.state.selectedItemIDs),
            lastSelectedItemID: id
          }, this.afterChangeSelection);
        }
      }
    }
  }, {
    key: 'toggleSelectAll',
    value: function toggleSelectAll() {
      var areAllSelected = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keys(this.state.selectedItemIDs).length === this.state.items.length;

      if (areAllSelected) {
        this.setState({ selectedItemIDs: {} }, this.afterChangeSelection);
      } else {
        var allIDs = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(this.state.items, this.props.idKey);
        var trues = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.range(this.state.items.length), function () {
          return true;
        });
        var selectedItemIDs = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.zipObject(allIDs, trues);
        this.setState({ selectedItemIDs: selectedItemIDs }, this.afterChangeSelection);
      }
    }
  }, {
    key: 'getSelectedItems',
    value: function getSelectedItems() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(this.state.items, function (item) {
        return _this4.state.selectedItemIDs[item[_this4.props.idKey]];
      });
    }
  }]);

  return ListView;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ListView);


ListView.propTypes = {
  idKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  onSelectionChanged: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  renderItem: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ab0a8f1a833d897215cb9690ec7abc19.eot";

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(1255);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3_queue = global.d3_queue || {})));
}(this, function (exports) { 'use strict';

  var version = "2.0.3";

  var slice = [].slice;

  var noabort = {};

  function Queue(size) {
    if (!(size >= 1)) throw new Error;
    this._size = size;
    this._call =
    this._error = null;
    this._tasks = [];
    this._data = [];
    this._waiting =
    this._active =
    this._ended =
    this._start = 0; // inside a synchronous task callback?
  }

  Queue.prototype = queue.prototype = {
    constructor: Queue,
    defer: function(callback) {
      if (typeof callback !== "function" || this._call) throw new Error;
      if (this._error != null) return this;
      var t = slice.call(arguments, 1);
      t.push(callback);
      ++this._waiting, this._tasks.push(t);
      poke(this);
      return this;
    },
    abort: function() {
      if (this._error == null) abort(this, new Error("abort"));
      return this;
    },
    await: function(callback) {
      if (typeof callback !== "function" || this._call) throw new Error;
      this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
      maybeNotify(this);
      return this;
    },
    awaitAll: function(callback) {
      if (typeof callback !== "function" || this._call) throw new Error;
      this._call = callback;
      maybeNotify(this);
      return this;
    }
  };

  function poke(q) {
    if (!q._start) try { start(q); } // let the current task complete
    catch (e) { if (q._tasks[q._ended + q._active - 1]) abort(q, e); } // task errored synchronously
  }

  function start(q) {
    while (q._start = q._waiting && q._active < q._size) {
      var i = q._ended + q._active,
          t = q._tasks[i],
          j = t.length - 1,
          c = t[j];
      t[j] = end(q, i);
      --q._waiting, ++q._active;
      t = c.apply(null, t);
      if (!q._tasks[i]) continue; // task finished synchronously
      q._tasks[i] = t || noabort;
    }
  }

  function end(q, i) {
    return function(e, r) {
      if (!q._tasks[i]) return; // ignore multiple callbacks
      --q._active, ++q._ended;
      q._tasks[i] = null;
      if (q._error != null) return; // ignore secondary errors
      if (e != null) {
        abort(q, e);
      } else {
        q._data[i] = r;
        if (q._waiting) poke(q);
        else maybeNotify(q);
      }
    };
  }

  function abort(q, e) {
    var i = q._tasks.length, t;
    q._error = e; // ignore active callbacks
    q._data = undefined; // allow gc
    q._waiting = NaN; // prevent starting

    while (--i >= 0) {
      if (t = q._tasks[i]) {
        q._tasks[i] = null;
        if (t.abort) try { t.abort(); }
        catch (e) { /* ignore */ }
      }
    }

    q._active = NaN; // allow notification
    maybeNotify(q);
  }

  function maybeNotify(q) {
    if (!q._active && q._call) q._call(q._error, q._data);
  }

  function queue(concurrency) {
    return new Queue(arguments.length ? +concurrency : Infinity);
  }

  exports.version = version;
  exports.queue = queue;

}));

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = snapshotDeleteMessage;
/* harmony export (immutable) */ __webpack_exports__["c"] = snapshotCreatedMessage;
/* harmony export (immutable) */ __webpack_exports__["a"] = organizationAddedToUserMessage;
/* harmony export (immutable) */ __webpack_exports__["b"] = organizationRemovedFromUserMessage;
/* harmony export (immutable) */ __webpack_exports__["h"] = userPermissionsChangedMessage;
/* harmony export (immutable) */ __webpack_exports__["e"] = styleguideAddedMessage;
/* harmony export (immutable) */ __webpack_exports__["f"] = styleguideRemovedMessage;
/* harmony export (immutable) */ __webpack_exports__["g"] = styleguideRenamedMessage;
function snapshotDeleteMessage(message) {
  return {
    message: 'Version ' + message.snapshotName + ' was removed from your design library.'
  };
}

function snapshotCreatedMessage(versionCreatedMessage, isSnapshot) {
  // let message;
  // // if user is in "snapshot mode" looking at a version, load the latest created version.
  // if (isSnapshot) {
  //   message = `Your library has been updated to version ${versionCreatedMessage.snapshotName}`;
  // } else {
  //   message = `New version ${versionCreatedMessage.snapshotName} is available in your library`;
  // }


  return {
    message: 'New version ' + versionCreatedMessage.snapshotName + ' is available in your library',
    actions: {
      first: {
        text: 'See what’s new',
        action: { eventName: 'viewStyleguideReleasesPage' }
      },
      second: {
        text: 'Switch',
        action: {
          eventName: 'onStyleguideChanged',
          payload: {
            styleguideId: versionCreatedMessage.styleguideId,
            snapshotId: versionCreatedMessage.snapshotId
          }
        }
      }
    }
  };
}

function organizationAddedToUserMessage(message) {
  return {
    message: 'Organization ' + message.organization.name + ' was added.'
  };
}

function organizationRemovedFromUserMessage(message) {
  return {
    message: 'Organization ' + message.organization.name + ' was removed.'
  };
}

function userPermissionsChangedMessage(message) {
  return {
    message: 'Your permissions in ' + message.organizationName + ' were changed.'
  };
}

function styleguideAddedMessage(message) {
  return {
    message: 'Design library ' + message.styleguide.name + ' is now available in your organization ' + message.styleguide.organization + '.'
  };
}

function styleguideRemovedMessage(message) {
  return {
    message: message.styleguideName + ' design library was removed from your organization ' + message.organizationName + '.'
  };
}

function styleguideRenamedMessage() {
  return {
    message: 'This design library has been renamed.'
  };
}

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(553);


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(14);
var queryString = __webpack_require__(568);
var Fluxxor = __webpack_require__(45);

var MainApp = __webpack_require__(578).default;
var AddColorsApp = __webpack_require__(1246).default;
var ManageTypeStylesApp = __webpack_require__(1247).default;
var ManageSharedStylesApp = __webpack_require__(1248).default;
var ManageSymbolsApp = __webpack_require__(1249).default;
var SelectiveSyncApp = __webpack_require__(1250).default;

__webpack_require__(1251);
__webpack_require__(1256);

var storeCreator = __webpack_require__(1258).default;
var stores = storeCreator(history);
var actions = __webpack_require__(54).actions;

var flux = new Fluxxor.Flux(stores, actions);
flux.setDispatchInterceptor(function (action, dispatch) {
  ReactDOM.unstable_batchedUpdates(function () {
    dispatch(action);
  });
});

flux.on('dispatch', function (type, payload) {

  //todo: don't log it in prod
  if (console && console.log) {
    // eslint-disable-line no-console
    if (type !== 'REGISTER_WALKTHROUGH_STEP') {
      var time = new Date();
      var timeString = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ',' + time.getMilliseconds();
      console.log('[Dispatch]-' + timeString + ':', type, payload); // eslint-disable-line no-console
    }
  }
});

var params = queryString.parse(window.location.search);
var appElement = {
  MainApp: MainApp,
  AddColorsApp: AddColorsApp,
  ManageTypeStylesApp: ManageTypeStylesApp,
  ManageSharedStylesApp: ManageSharedStylesApp,
  ManageSymbolsApp: ManageSymbolsApp,
  SelectiveSyncApp: SelectiveSyncApp
}[params.appName];

var props = {};

if (!params.nativeHandlers) {
  props.nativeHandlers = [];
} else if (!Array.isArray(params.nativeHandlers)) {
  // If there is only one key in the query string, it will
  // be parsed as a value, not an array. So, here we make it
  // an array.
  props.nativeHandlers = [params.nativeHandlers];
} else {
  props.nativeHandlers = params.nativeHandlers;
}

var createElement = function createElement(Component, props) {
  return React.createElement(Component, _extends({}, props, { flux: flux }));
};

ReactDOM.render(createElement(appElement, props), document.getElementById('main'));

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(569);
var objectAssign = __webpack_require__(65);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(255),
    inherits = __webpack_require__(162),
    objectPath = __webpack_require__(571);

var _ = __webpack_require__(8);

var Dispatcher = __webpack_require__(254);

var findLeaves = function findLeaves(obj, path, callback) {
  path = path || [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (_.isFunction(obj[key])) {
        callback(path.concat(key), obj[key]);
      } else {
        findLeaves(obj[key], path.concat(key), callback);
      }
    }
  }
};

var Flux = function Flux(stores, actions) {
  EventEmitter.call(this);
  this.dispatcher = new Dispatcher(stores);
  this.actions = {};
  this.stores = {};

  var dispatcher = this.dispatcher;
  var flux = this;
  this.dispatchBinder = {
    flux: flux,
    dispatch: function dispatch(type, payload) {
      try {
        flux.emit("dispatch", type, payload);
      } finally {
        dispatcher.dispatch({ type: type, payload: payload });
      }
    }
  };

  this.addActions(actions);
  this.addStores(stores);
};

inherits(Flux, EventEmitter);

Flux.prototype.addActions = function (actions) {
  findLeaves(actions, [], this.addAction.bind(this));
};

// addAction has two signatures:
// 1: string[, string, string, string...], actionFunction
// 2: arrayOfStrings, actionFunction
Flux.prototype.addAction = function () {
  if (arguments.length < 2) {
    throw new Error("addAction requires at least two arguments, a string (or array of strings) and a function");
  }

  var args = Array.prototype.slice.call(arguments);

  if (!_.isFunction(args[args.length - 1])) {
    throw new Error("The last argument to addAction must be a function");
  }

  var func = args.pop().bind(this.dispatchBinder);

  if (!_.isString(args[0])) {
    args = args[0];
  }

  var leadingPaths = _.reduce(args, function (acc, next) {
    if (acc) {
      var nextPath = acc[acc.length - 1].concat([next]);
      return acc.concat([nextPath]);
    } else {
      return [[next]];
    }
  }, null);

  // Detect trying to replace a function at any point in the path
  _.forEach(leadingPaths, function (path) {
    if (_.isFunction(objectPath.get(this.actions, path))) {
      throw new Error("An action named " + args.join(".") + " already exists");
    }
  }.bind(this));

  // Detect trying to replace a namespace at the final point in the path
  if (objectPath.get(this.actions, args)) {
    throw new Error("A namespace named " + args.join(".") + " already exists");
  }

  objectPath.set(this.actions, args, func, true);
};

Flux.prototype.store = function (name) {
  return this.stores[name];
};

Flux.prototype.getAllStores = function () {
  return this.stores;
};

Flux.prototype.addStore = function (name, store) {
  if (name in this.stores) {
    throw new Error("A store named '" + name + "' already exists");
  }
  store.flux = this;
  this.stores[name] = store;
  this.dispatcher.addStore(name, store);
};

Flux.prototype.addStores = function (stores) {
  for (var key in stores) {
    if (stores.hasOwnProperty(key)) {
      this.addStore(key, stores[key]);
    }
  }
};

Flux.prototype.setDispatchInterceptor = function (fn) {
  this.dispatcher.setDispatchInterceptor(fn);
};

module.exports = Flux;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
      return true;
    } else {
      for (var i in value) {
        if (_hasOwnProperty.call(value, i)) {
          return false;
        }
      }
      return true;
    }
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.'), value, doNotReplace);
    }
    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      if (isNumber(currentPath)) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = {};

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

var FluxMixin = function FluxMixin(React) {
  return {
    componentWillMount: function componentWillMount() {
      if (!this.props.flux && (!this.context || !this.context.flux)) {
        var namePart = this.constructor.displayName ? " of " + this.constructor.displayName : "";
        throw new Error("Could not find flux on this.props or this.context" + namePart);
      }
    },

    childContextTypes: {
      flux: React.PropTypes.object
    },

    contextTypes: {
      flux: React.PropTypes.object
    },

    getChildContext: function getChildContext() {
      return {
        flux: this.getFlux()
      };
    },

    getFlux: function getFlux() {
      return this.props.flux || this.context && this.context.flux;
    }
  };
};

FluxMixin.componentWillMount = function () {
  throw new Error("Fluxxor.FluxMixin is a function that takes React as a " + "parameter and returns the mixin, e.g.: mixins: [Fluxxor.FluxMixin(React)]");
};

module.exports = FluxMixin;

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

var FluxChildMixin = function FluxChildMixin(React) {
  return {
    componentWillMount: function componentWillMount() {
      if (console && console.warn) {
        var namePart = this.constructor.displayName ? " in " + this.constructor.displayName : "",
            message = "Fluxxor.FluxChildMixin was found in use" + namePart + ", " + "but has been deprecated. Use Fluxxor.FluxMixin instead.";
        console.warn(message);
      }
    },

    contextTypes: {
      flux: React.PropTypes.object
    },

    getFlux: function getFlux() {
      return this.context.flux;
    }
  };
};

FluxChildMixin.componentWillMount = function () {
  throw new Error("Fluxxor.FluxChildMixin is a function that takes React as a " + "parameter and returns the mixin, e.g.: mixins[Fluxxor.FluxChildMixin(React)]");
};

module.exports = FluxChildMixin;

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(8);

var StoreWatchMixin = function StoreWatchMixin() {
  var storeNames = Array.prototype.slice.call(arguments);
  return {
    componentDidMount: function componentDidMount() {
      var flux = this.props.flux || this.context.flux;
      this.mounted = true;

      // No autobinding in ES6 classes
      this._setStateFromFlux = function () {
        if (this.mounted) {
          this.setState(this.getStateFromFlux());
        }
      }.bind(this);

      _.forEach(storeNames, function (store) {
        flux.store(store).on("change", this._setStateFromFlux);
      }.bind(this));
    },

    componentWillUnmount: function componentWillUnmount() {
      var flux = this.props.flux || this.context.flux;
      this.mounted = false;
      _.forEach(storeNames, function (store) {
        flux.store(store).removeListener("change", this._setStateFromFlux);
      }.bind(this));
    },

    getInitialState: function getInitialState() {
      return this.getStateFromFlux();
    }
  };
};

StoreWatchMixin.componentWillMount = function () {
  throw new Error("Fluxxor.StoreWatchMixin is a function that takes one or more " + "store names as parameters and returns the mixin, e.g.: " + "mixins: [Fluxxor.StoreWatchMixin(\"Store1\", \"Store2\")]");
};

module.exports = StoreWatchMixin;

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(8);

var Store = __webpack_require__(576);
var inherits = __webpack_require__(162);

var RESERVED_KEYS = ["flux", "waitFor"];

var createStore = function createStore(spec) {
  _.forEach(RESERVED_KEYS, function (key) {
    if (spec[key]) {
      throw new Error("Reserved key '" + key + "' found in store definition");
    }
  });

  var constructor = function constructor(options) {
    options = options || {};
    Store.call(this);

    for (var key in spec) {
      if (key === "actions") {
        this.bindActions(spec[key]);
      } else if (key === "initialize") {
        // do nothing
      } else if (_.isFunction(spec[key])) {
        this[key] = spec[key].bind(this);
      } else {
        this[key] = spec[key];
      }
    }

    if (spec.initialize) {
      spec.initialize.call(this, options);
    }
  };

  inherits(constructor, Store);
  return constructor;
};

module.exports = createStore;

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(255),
    inherits = __webpack_require__(162);

var _ = __webpack_require__(8);

function Store(dispatcher) {
  this.dispatcher = dispatcher;
  this.__actions__ = {};
  EventEmitter.call(this);
}

inherits(Store, EventEmitter);

Store.prototype.__handleAction__ = function (action) {
  var handler;
  if (!!(handler = this.__actions__[action.type])) {
    if (_.isFunction(handler)) {
      handler.call(this, action.payload, action.type);
    } else if (handler && _.isFunction(this[handler])) {
      this[handler].call(this, action.payload, action.type);
    } else {
      throw new Error("The handler for action type " + action.type + " is not a function");
    }
    return true;
  } else {
    return false;
  }
};

Store.prototype.bindActions = function () {
  var actions = Array.prototype.slice.call(arguments);

  if (actions.length > 1 && actions.length % 2 !== 0) {
    throw new Error("bindActions must take an even number of arguments.");
  }

  var bindAction = function (type, handler) {
    if (!handler) {
      throw new Error("The handler for action type " + type + " is falsy");
    }

    this.__actions__[type] = handler;
  }.bind(this);

  if (actions.length === 1 && _.isObject(actions[0])) {
    actions = actions[0];
    for (var key in actions) {
      if (actions.hasOwnProperty(key)) {
        bindAction(key, actions[key]);
      }
    }
  } else {
    for (var i = 0; i < actions.length; i += 2) {
      var type = actions[i],
          handler = actions[i + 1];

      if (!type) {
        throw new Error("Argument " + (i + 1) + " to bindActions is a falsy value");
      }

      bindAction(type, handler);
    }
  }
};

Store.prototype.waitFor = function (stores, fn) {
  this.dispatcher.waitForStores(this, stores, fn.bind(this));
};

module.exports = Store;

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "1.7.3";

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semver__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixpanel_browser__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixpanel_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mixpanel_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_flux_stores__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_applications_data__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_download_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brandai_lib__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brandai_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__brandai_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__StyleguidePage__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SignupForms__ = __webpack_require__(1242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Artboards_ArtboardsApp__ = __webpack_require__(1243);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global BRANDAI_PLUGIN_REF */























var INTERVAL_TO_CHECK_TOKEN = 1000 * 60 * 60 * 2; //  2 hours
var INTERVAL_TO_CHECK_FOR_PLUGIN_UPDATE = 1000 * 60 * 30; // 30 minutes


var MainApp = function (_App) {
  _inherits(MainApp, _App);

  function MainApp(props) {
    _classCallCheck(this, MainApp);

    var _this = _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).call(this, props));

    _this.state = {};
    //TODO: kim will tell me how to fix this - maybe :)
    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(_this.state, _this.getInitialState());
    return _this;
  }

  _createClass(MainApp, [{
    key: 'getStateFromFlux',
    value: function getStateFromFlux(flux) {

      var userStore = flux.store('UserStore');
      var organizationStore = flux.store('OrganizationStore');
      var searchResultsStore = flux.store('SearchResultsStore');
      var pagesStore = flux.store('PagesStore');
      var styleguideStore = flux.store('StyleguideStore');
      var applicationStore = flux.store('ApplicationStore');
      var shouldLog = !applicationStore.isProductionEnv();
      if (shouldLog) {
        console.log('get state from flux'); // eslint-disable-line no-console
      }

      //todo: change how the filtered data working
      var state = {
        user: userStore.user,
        idToken: userStore.idToken,
        accessToken: userStore.accessToken,
        loadingUser: userStore.loadingUser,
        loadingOrganizations: organizationStore.loadingOrganizations,
        organizations: organizationStore.organizations,
        organizationExistMessage: organizationStore.organizationExistMessage,
        organizationError: organizationStore.organizationError,
        currentOrganization: organizationStore.getCurrentOrganization(),

        filteredPagesData: searchResultsStore.getFilteredPages(),
        filteredStyleData: searchResultsStore.filteredStyleguide,
        searchQuery: applicationStore.isPagesApp() ? searchResultsStore.pagesSearchQuery : searchResultsStore.styleDataSearchQuery,

        pages: pagesStore.pages,
        pagesError: pagesStore.pagesError,
        loadingPages: pagesStore.loadingPages,
        selectedArtboard: pagesStore.getSelectedArtboard(),
        shouldReloadPages: pagesStore.shouldReloadPages,

        styleData: styleguideStore.styleData,
        styleguide: styleguideStore.styleguide,
        styleguideId: styleguideStore.getStyleguideId(),
        snapshotId: styleguideStore.getSnapshotId(),
        styleguideError: styleguideStore.styleguideError,
        loadingStyleData: styleguideStore.loadingStyleData,
        relativeUpdateDate: styleguideStore.relativeUpdateDate,
        readOnly: styleguideStore.isReadOnly(),
        styleDataImageHashes: styleguideStore.styleDataImageHashes,
        currentSection: styleguideStore.currentSection,
        editingItemID: styleguideStore.editingItemID,
        shouldReloadStyleguide: styleguideStore.shouldReloadStyleguide,
        prefetchingStyleData: styleguideStore.prefetchingStyleData,
        prefetchingStyleDataFailed: styleguideStore.prefetchingStyleDataFailed,
        initialStyleguideId: styleguideStore.initialStyleguideId, //the value of the styleguideId persisted in defaults

        applicationNotification: applicationStore.applicationNotification,
        currentApp: applicationStore.currentApp
      };

      //if no connection override explicitly the state from store
      if (!this.state.connected) {
        state.readOnly = true;
      }
      if (shouldLog) {
        console.log(state); // eslint-disable-line no-console
      }
      return state;
    }
  }, {
    key: '_handleEvent',
    value: function _handleEvent(eventData) {
      var handler = this[eventData.eventName];
      if (!handler && this.props.actions) {
        handler = this.props.actions[eventData.eventName];
      }
      if (!handler) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('No event handler for web UI event "' + eventData.eventName + '"');
      } else {
        handler.call(this, eventData.payload);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Put event handling function on the window so it can be called from the
      // native UI.
      window.brandai = window.brandai || {};
      window.brandai.handleEvent = this._handleEvent.bind(this);

      // Prevent default context menu unless holding option key (for development).
      window.oncontextmenu = function (evt) {
        if (!evt.altKey) {
          evt.preventDefault();
        }
      };

      window.onblur = function () {
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onWindowDidBlur');
      };

      // Init job queue.
      window.brandai.jobQueue = [];

      // Everything is set up, inform the native UI that we are ready.
      __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onWebUIDidFinishLoading');

      window.addEventListener('unhandledrejection', function (event) {
        var reason = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(event, 'detail.reason') || event;

        console.error(reason); // eslint-disable-line no-console
        _this2.createLogMessage('error', { message: 'Unhandled Rejection', reason: reason });
      });

      //initializing mixpanel
      __WEBPACK_IMPORTED_MODULE_3_mixpanel_browser___default.a.init('6909ef0ec7400e2386ad572c78e550a5', {
        api_host: 'https://api.mixpanel.com',
        decide_host: 'https://api.mixpanel.com'
      });
      window.mixpanel = __WEBPACK_IMPORTED_MODULE_3_mixpanel_browser___default.a; // brandai-lib expects global mixpanel object.
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {

      //if we now have a signed in user load organizations (token can exist even if we don't yet know the authentication will be successful)
      if (!this.state.user && nextState.user) {
        this.props.actions.loadUserOrganizations();
      }

      //meaning we have a signed user who completed the sign up steps
      if (!__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](this.state.organizations) && __WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](nextState.organizations)) {
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onPresentAuthModal', { shown: false }); //trigger recalculate the height action


        //if user organization loaded and we have styleguide, try to load it

        var _styleguideToLoad = this.styleguideToLoad(nextState, nextState.initialStyleguideId),
            styleguideId = _styleguideToLoad.styleguideId,
            defaultOrganization = _styleguideToLoad.defaultOrganization;

        if (styleguideId) {
          this.loadStyleData(styleguideId);
        }

        // load organization pages
        // since styleguideId defines the default organization we will user the organization returned from there
        this.loadOrganizationPages(defaultOrganization.kebabName);
      }

      // we change the state from signed in to signed out or if for some reason we couldn't reload existing user's organizations
      // open not closable sign in window and recalculate the height
      if (this.state.idToken && !nextState.idToken && !nextState.loadingUser) {
        this._updateWithNewAuthenticationData(this.props.actions.openAuthenticationDialog, true);
      }

      //changes that trigger user menu change (user signed in, or new styleguide or organizations data)
      if (!this.state.idToken && nextState.idToken || this.organizationsDiffer(this.state.organizations, nextState.organizations) || this.styleguidesDiffer(this.state, nextState) || this.state.currentApp !== nextState.currentApp || this.state.readOnly !== nextState.readOnly) {
        this._updateSettingsMenu(nextState);
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onMoreActionsMenuCreated');
      }

      //if need to trigger refresh styleguide operation
      if (!this.state.shouldReloadStyleguide && nextState.shouldReloadStyleguide) {
        this.props.actions.refreshStyleData();
      }

      //if need to trigger refresh styleguide operation
      if (!this.state.shouldReloadPages && nextState.shouldReloadPages) {
        this.props.actions.refreshOrganizationPages();
      }

      this.updateNativeState(this.state, nextState);
    }
  }, {
    key: 'organizationsDiffer',
    value: function organizationsDiffer(currentOrganizations, nextStateOrganizations) {

      if (!currentOrganizations || currentOrganizations.length !== nextStateOrganizations.length) {
        return true;
      }

      var organizationsDiffer = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.some(currentOrganizations, function (org, index) {
        var nextStateOrganization = nextStateOrganizations[index];
        if (org._id !== nextStateOrganization._id) {
          return true;
        }

        if (org.isDefault !== nextStateOrganization.isDefault) {
          return true;
        }

        if (org.styleguides.length !== nextStateOrganization.styleguides.length) {
          return true;
        }

        if (org.styleguides.length > 0) {
          return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.some(org.styleguides, function (styleguide, index) {
            return styleguide.kebabName !== nextStateOrganization.styleguides[index].kebabName;
          });
        }
      });

      return organizationsDiffer;
    }
  }, {
    key: 'styleguidesDiffer',
    value: function styleguidesDiffer(state, nextState) {
      if (state.styleguideId !== nextState.styleguideId) {
        return true;
      }

      if (state.snapshotId !== nextState.snapshotId) {
        return true;
      }

      if (state.styleguide && nextState.styleguide && state.styleguide.snapshots.length !== nextState.styleguide.snapshots.length) {
        return true;
      }

      return false;
    }

    // Renderers for different plugin parts

  }, {
    key: 'renderUpdateMessage',
    value: function renderUpdateMessage() {

      if (!this._shouldUpdatePlugin()) {
        return null;
      }

      var ready = this.state.updateReadyToInstall;
      var updateMessageText = ready.updateMessage || 'A new plugin version is available to install.';
      var releaseNotesURL = ready.releaseNotesURL;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'has-alert' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'alert alert--warning flex items-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'flex-auto' },
            updateMessageText
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              className: 'button-sm',
              onClick: this.props.actions.viewSketchReleaseNotesPage.bind(null, releaseNotesURL) },
            'Read More'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-sm', onClick: this.installUpdate },
            'Install'
          )
        )
      );
    }
  }, {
    key: 'renderApplicationNotification',
    value: function renderApplicationNotification() {
      var _this3 = this;

      var applicationNotification = this.state.applicationNotification;
      if (!applicationNotification) {
        return null;
      }

      var actions = applicationNotification.actions || {};
      var first = actions.first,
          second = actions.second;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'has-alert' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'alert alert--info flex items-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'flex-auto alert-message u-mr7' },
            applicationNotification.message
          ),
          first ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'alert-link u-px2', onClick: this._handleEvent.bind(this, first.action) },
            first.text
          ) : null,
          second ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'alert-link u-px2', onClick: this._handleEvent.bind(this, second.action) },
            second.text
          ) : null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-close-x u-ml2 u-pt1 u-cursor-pointer', onClick: function onClick() {
              _this3.props.actions.setApplicationNotification(null);
            } })
        )
      );
    }
  }, {
    key: 'renderRestartNeeded',
    value: function renderRestartNeeded() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'message' },
          'Restart Sketch to Continue'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'sub-message' },
          'Sketch must be restarted for the update to take effect'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text-center u-mt5' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button', onClick: this.restartSketch },
            'Restart Sketch'
          )
        )
      );
    }
  }, {
    key: 'renderStyleguidePage',
    value: function renderStyleguidePage(styleData) {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__StyleguidePage__["a" /* default */], {
        styleData: styleData,
        currentSection: this.state.currentSection,
        readOnly: this.state.readOnly,
        isSearching: !!this.state.searchQuery,
        searchQuery: this.state.searchQuery,
        editingItemID: this.state.editingItemID,
        onAddLogosInWeb: this.props.actions.openStyleguideInBrowser,
        installedFonts: this.state.installedFonts,
        selectedLayerCount: this.state.selectedLayerCount,
        imageDragEnd: this.imageDragEnd,
        onStyleguideChanged: this.onStyleguideChanged.bind(this, { styleguideId: this.state.styleguideId }),
        prefetchingStyleData: this.state.prefetchingStyleData,
        prefetchingStyleDataFailed: this.state.prefetchingStyleDataFailed
      });
    }
  }, {
    key: 'renderSignupForms',
    value: function renderSignupForms() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SignupForms__["a" /* default */], {
        user: this.state.user,
        organizationExistMessage: this.state.organizationExistMessage,
        onCreateOrganization: this._createOrganization.bind(this),
        checkOrganizationExists: this.props.actions.checkOrganizationExists,
        onUpdateUserDetails: this.props.actions.updateUserDetails,
        onTermsClicked: this.props.actions.viewTermsPage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.needsRestart) {
        return this.renderRestartNeeded();
      }

      var appDataLoading = void 0;
      var appError = void 0;
      var content;
      if (this.isPagesApp()) {
        appDataLoading = this.state.loadingPages;
        appError = this.state.pagesError;
        var pages = this.state.searchQuery ? this.state.filteredPagesData.pages : this.state.pages;

        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Artboards_ArtboardsApp__["a" /* default */], {
          pages: pages,
          selectedArtboard: this.state.selectedArtboard,
          imageDragEnd: this.imageDragEnd,
          offset: !!this.state.applicationNotification || this._shouldUpdatePlugin() ? 30 : 0,
          connected: this.state.connected,
          selectedArtboardCount: this.state.selectedArtboardCount,
          isSearching: !!this.state.searchQuery,
          searchQuery: this.state.searchQuery,
          noResultsFound: this.state.searchQuery ? this.state.filteredPagesData.noResultsFound : false,
          loadingPages: this.state.loadingPages
        });
      } else {
        appDataLoading = this.state.loadingStyleData;
        appError = this.state.styleguideError;
        var styleData = this.state.searchQuery ? this.state.filteredStyleData : this.state.styleData;
        if (__WEBPACK_IMPORTED_MODULE_5__util__["s" /* isNonEmptyObject */](styleData)) {
          content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            this.renderStyleguidePage(styleData)
          );
        }
      }
      //this.state.connected === undefined means we dont know yet the status of the connection so show loading
      if (appDataLoading || this.state.loadingUser || this.state.loadingOrganizations || this.state.connected === undefined) {
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'message' },
          'Loading\u2026'
        );
      } else if (this.state.connected === false && !this.state.user) {
        //explicit no connection
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'message' },
          'Could not load Brand.ai - no connection found.'
        );
      } else if (this.state.organizationError || appError) {
        var error = this.state.organizationError || appError;
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'message' },
            'Could Not Connect to ',
            this.state.currentApp
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'note text-center' },
            error.message
          )
        );
      } else if (this.state.user && !__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](this.state.organizations)) {
        content = this.renderSignupForms();
      } else if (!content) {
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'message' },
            'No Design Libraries Exist'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'sub-message' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Create one at '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                href: 'javascript:void(0)',
                onClick: this.props.actions.viewHomepage
              },
              'Brand.ai'
            )
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.renderUpdateMessage(),
        this.renderApplicationNotification(),
        content
      );
    }
  }, {
    key: '_getNativeState',
    value: function _getNativeState(state) {
      var pickedFields = ['idToken', 'connected', 'accessToken', 'needsRestart', 'loadingUser', 'loadingStyleData', 'prefetchingStyleData', 'styleguideId', 'snapshotId', 'relativeUpdateDate', 'currentApp', 'currentOrganization'];
      var passedState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(state, pickedFields);

      passedState.styleguideName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state.styleguide, 'name');
      passedState.selectedArtboardName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state.selectedArtboard, 'name');
      passedState.snapshotName = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state.styleguide, 'snapshotName');
      return passedState;
    }
  }, {
    key: 'updateNativeState',
    value: function updateNativeState(currentState, nextState) {

      var currentNativeData = this._getNativeState(currentState);
      var nextNativeData = this._getNativeState(nextState);

      if (!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(currentNativeData, nextNativeData)) {
        __WEBPACK_IMPORTED_MODULE_6__sketch__["o" /* updateNativeUIState */](nextNativeData);
      }
    }

    // data loaders methods

  }, {
    key: 'styleguideToLoad',
    value: function styleguideToLoad(state, styleguideId) {
      var styleguideToLoad = void 0;

      var defaultOrganization = state.currentOrganization;

      //check if the stored styleguide id is part of this user organizations and find what organization it is
      var styleguideOrganizations = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.chain(state.organizations).map(function (org) {
        var styleguides = org.styleguides || [];
        var found = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(styleguides, { _id: styleguideId });
        if (!found) {
          return null;
        }
        return org;
      }).compact().value();

      if (styleguideId && __WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](styleguideOrganizations)) {
        styleguideToLoad = styleguideId;
        this.props.actions.setDefaultOrganization(styleguideOrganizations[0]._id);
        defaultOrganization = styleguideOrganizations[0];
      } else {
        //if we decided not to load the saved styleguide then choose the first from the default organization
        if (__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](defaultOrganization.styleguides)) {
          styleguideToLoad = defaultOrganization.styleguides[0]._id;
        }
      }
      return { styleguideId: styleguideToLoad, defaultOrganization: defaultOrganization };
    }

    /**
     * Load styleguide and update the state according to the results of the fetch
     *
     * Used in working copy and snapshot fetching
     * @param styleguideId
     */

  }, {
    key: 'loadStyleData',
    value: function loadStyleData(styleguideId, requestedSnapshotId) {
      var latestSnapshot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      this.props.actions.loadStyleData(styleguideId, {
        snapshotId: requestedSnapshotId,
        latestSnapshot: latestSnapshot,
        withVersions: true
      });
    }

    /* *
     * Similar to loadStyleguide except:
     *   will not cleaning the style data upon and replace only when new data is fetched
     *   search filter will be preserved
     *   and we will not create new subscription as one already exists
     *
     * Should be use only within the currently loaded styleguide/snapshot
     */

  }, {
    key: 'refreshStyleData',
    value: function refreshStyleData() {
      this.props.actions.refreshStyleData();
    }
  }, {
    key: 'loadOrganizationPages',
    value: function loadOrganizationPages(organizationName) {
      this.props.actions.loadOrganizationPages(organizationName);
    }

    //callback for creating new organization

  }, {
    key: '_createOrganization',
    value: function _createOrganization(organizationData) {
      if (typeof BRANDAI_PLUGIN_REF !== 'undefined' && BRANDAI_PLUGIN_REF === 'uxpt') {
        //eslint-ignore-line
        organizationData.referrer = 'uxpt';
        organizationData.styleguideTemplateKey = __WEBPACK_IMPORTED_MODULE_9__brandai_lib__["sharedConstants"].styleguideTemplates.blank;
      }
      this.props.actions.createOrganization(organizationData);
    }
  }, {
    key: '_updateSettingsMenu',
    value: function _updateSettingsMenu(state) {
      var currentOrganization = state.currentOrganization || {};
      __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onSettingMenuChange', {
        idToken: state.idToken,
        styleguideId: state.styleguideId,
        organizations: state.organizations,
        readOnly: state.readOnly,
        snapshots: state.styleguide ? state.styleguide.snapshots : null,
        snapshotId: state.snapshotId,
        currentApp: state.currentApp,
        organizationId: currentOrganization._id
      });
    }

    // Native events publishers

  }, {
    key: 'downloadUpdate',
    value: function downloadUpdate(newVersion) {
      var _this4 = this;

      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('...Downloading file.');
      this.setState({ downloadingUpdate: true });
      __WEBPACK_IMPORTED_MODULE_8__services_download_service__["a" /* downloadFileAsDataURI */](newVersion.downloadURL).then(function (dataURI) {
        _this4.setState({ downloadingUpdate: false });
        window.brandai.updateFileDataURI = dataURI;
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onUpdateDownloadComplete', newVersion);
      });
    }
  }, {
    key: 'installUpdate',
    value: function installUpdate() {
      __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onInstallUpdate');
    }
  }, {
    key: 'restartSketch',
    value: function restartSketch() {
      __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onRestartSketch');
    }
  }, {
    key: 'runNextJobInQueue',
    value: function runNextJobInQueue() {
      var nextJobId = window.brandai.jobQueue.shift();
      if (nextJobId) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('Running job with id \'' + nextJobId + '\'');
        setTimeout(function () {
          return __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onRunJob', nextJobId);
        }, 5);
      } else {
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onAllJobsDidFinish');
      }
    }

    // Native UI event handlers.

  }, {
    key: 'onLaunchPlugin',
    value: function onLaunchPlugin(payload) {
      var _this5 = this;

      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('API key: ' + payload.idToken);
      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])(payload);

      payload.setConnectionStatus = this.setConnectionStatus.bind(this);
      this.props.actions.pluginLaunched(payload);

      //here the state is updated with all the stored data
      //todo: get rid of this initial setState?
      this.setState(payload, function () {

        //execute token refresh upon timeout execution and every interval since then
        // we need the first one as we don't have timestamp stored in the local storage and will not have correct token refresh on user load otherwise
        setTimeout(function () {
          _this5._refreshAuthToken();
          setInterval(_this5._refreshAuthToken.bind(_this5), INTERVAL_TO_CHECK_TOKEN);
        }, 10000);

        //execute version update check upon timeout execution and every interval since then
        setTimeout(function () {
          _this5.checkForUpdate();
          setInterval(_this5.checkForUpdate.bind(_this5), INTERVAL_TO_CHECK_FOR_PLUGIN_UPDATE);
        }, 10000);
      });
    }

    /*
     * Authenticate based on the provided authentication method refresh data
     */

  }, {
    key: '_updateWithNewAuthenticationData',
    value: function _updateWithNewAuthenticationData(authenticationMethod) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      //trigger recalculate window height if it is a visible auth method
      if (options.authVisible) {
        __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onPresentAuthModal', { shown: true });
      }

      authenticationMethod();
    }
  }, {
    key: '_refreshAuthToken',
    value: function _refreshAuthToken() {
      var user = this.state.user;
      if (this.state.idToken && user && !user.impersonated) {
        //there is a problem with refreshing the token while impersonating, so we will disallow the refresh from impersonation flow
        this.props.actions.refreshToken();
      }
    }

    /* *
      Refresh user data with delayed execution
       This function is called after connection is returned. Delay it and check if after timeout the connection is still available.
      This should help to avoid refreshing user data when the connection is 'jumpy'.
    **/

  }, {
    key: '_delayedRefreshUserData',
    value: function _delayedRefreshUserData() {
      var _this6 = this;

      if (this.refreshAllTimer) {
        clearTimeout(this.refreshAllTimer);
      }

      this.refreshAllTimer = setTimeout(function () {
        if (_this6.state.connected) {
          // refresh organizations
          _this6.props.actions.refreshUserOrganizations();

          // refresh styleguide
          if (_this6.state.styleguideId) {
            _this6.refreshStyleData();
          }

          //it will miss the case where no pages were exited and then the first was created but on other hand it will load more accurate organization data
          // for example is default organization was changed in server it would not affect this case
          if (__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](_this6.state.pages)) {
            _this6.props.actions.refreshOrganizationPages();
          }

          _this6.refreshAllTimer = null;
        }
      }, 3 * 1000);
    }

    //receive an indication if we have a valid connection now

  }, {
    key: 'setConnectionStatus',
    value: function setConnectionStatus(connected) {
      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('set connection status - ' + connected);

      //if there was indication that the state changed from disconnected, fetch the style data
      //(it is explicit false as we want to distinguish the initial setConnectionStatus call on which we don't want to fetch the data as it was just loaded)
      if (this.state.connected === false && connected) {
        //reload only if the user was already loaded
        if (this.state.user) {
          this._delayedRefreshUserData();
        }
      }

      //this will happen after initial launch and only after we have a valid connection
      if (!this.state.user && !this.state.connected && connected) {
        this.props.actions.initAuthService(this.state.idToken, this.state.accessToken);
        if (!this.state.idToken) {
          this._updateWithNewAuthenticationData(this.props.actions.openAuthenticationDialog, { authVisible: true });
        } else {
          //as the plugin launched we want to put the persisted token from default into localStorage where it will be available to authService
          this._updateWithNewAuthenticationData(this.props.actions.loadUserData);
        }
      }

      //we want the style data not to be editable if there is not connection so updating readOnly property of the styleguide based on the status
      if (this.state.connected !== connected) {
        var editable = connected && this.state.styleguide && this.state.styleguide.allowEditing;
        this.setState({ readOnly: !editable, connected: connected });
      }
    }
  }, {
    key: '_shouldUpdatePlugin',
    value: function _shouldUpdatePlugin() {
      var ready = this.state.updateReadyToInstall;
      if (!ready) {
        return false;
      }

      if (!__WEBPACK_IMPORTED_MODULE_2_semver___default.a.valid(ready.version) || !__WEBPACK_IMPORTED_MODULE_2_semver___default.a.valid(this.state.pluginVersion)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('Invalid version.');
        return false;
      }

      if (__WEBPACK_IMPORTED_MODULE_2_semver___default.a.lte(ready.version, this.state.pluginVersion)) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('Downloaded update is not newer than running plugin');
        return false;
      }

      return true;
    }
  }, {
    key: 'onStyleguideChanged',
    value: function onStyleguideChanged(payload) {
      var organizationId = payload.organizationId,
          styleguideId = payload.styleguideId,
          snapshotId = payload.snapshotId,
          _payload$latestSnapsh = payload.latestSnapshot,
          latestSnapshot = _payload$latestSnapsh === undefined ? false : _payload$latestSnapsh;

      if (styleguideId && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(styleguideId) && (this.state.styleguideId !== styleguideId || this.state.snapshotId !== snapshotId)) {

        //check if we changed the organization, update the default indication
        this.props.actions.setDefaultOrganization(organizationId);

        //if we are navigating from the styleguide remove the created version message
        this.setState({ applicationNotification: null });

        this.loadStyleData(styleguideId, snapshotId, latestSnapshot);
      }
    }
  }, {
    key: 'onPagesOrganizationChanged',
    value: function onPagesOrganizationChanged(payload) {
      var organizationId = payload.organizationId,
          organizationName = payload.organizationName;

      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('on pages organizaion changed');
      var pagesOrganization = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.state.pages, '[0].organization');
      if (organizationName !== pagesOrganization) {

        this.props.actions.setDefaultOrganization(organizationId);
        this.loadOrganizationPages(organizationName);
      }
    }
  }, {
    key: 'onAppChanged',
    value: function onAppChanged(newApp) {
      var currentOrg = this.state.currentOrganization;
      if (newApp === __WEBPACK_IMPORTED_MODULE_7__utils_applications_data__["a" /* default */].PAGES.name) {
        if (!__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](this.state.pages) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(this.state.pages, '[0].organization') !== currentOrg.kebabName) {
          Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('appchanged - reload pages');
          this.onPagesOrganizationChanged({ organizationName: currentOrg.kebabName, organizationId: currentOrg._id });
        }
      } else {
        if (!__WEBPACK_IMPORTED_MODULE_5__util__["r" /* isNonEmptyArray */](currentOrg.styleguides)) {
          this.props.actions.pluginAppChanged(__WEBPACK_IMPORTED_MODULE_7__utils_applications_data__["a" /* default */].PAGES.name);
          __WEBPACK_IMPORTED_MODULE_6__sketch__["b" /* displayAlert */]({
            title: 'No design libraries available for organization ' + currentOrg.name,
            description: 'You can try another organization or create one at https://brand.ai'
          });
          return;
        }

        var styleguideId = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(currentOrg, 'styleguides[0]._id');
        if (styleguideId && (!this.state.styleguide || this.state.styleguide.organization !== currentOrg.kebabName)) {
          Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('appchanged - reload styleguides');
          this.onStyleguideChanged({ styleguideId: styleguideId, organizationId: currentOrg._id, latestSnapshot: true });
        }
      }
      this.props.actions.pluginAppChanged(newApp);
    }
  }, {
    key: 'onUpdateDownloadIsReady',
    value: function onUpdateDownloadIsReady(updateReadyToInstall) {
      this.setState({ updateReadyToInstall: updateReadyToInstall });
    }
  }, {
    key: 'onInstallUpdateDidFinish',
    value: function onInstallUpdateDidFinish() {
      this.setState({
        needsRestart: true,
        updateReadyToInstall: false
      });
      this.props.actions.onTrackData({ eventName: 'Sketch plugin version updated' });
    }
  }, {
    key: 'onInstalledFontsAvailable',
    value: function onInstalledFontsAvailable(installedFonts) {
      this.setState({ installedFonts: installedFonts });
    }
  }, {
    key: 'onSelectionDidChange',
    value: function onSelectionDidChange(counts) {
      this.setState(counts);
    }
  }, {
    key: 'onQueueJob',
    value: function onQueueJob(jobId) {
      window.brandai.jobQueue.push(jobId);
    }
  }, {
    key: 'onStartRunningJobsInQueue',
    value: function onStartRunningJobsInQueue() {
      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('start running jobs');
      // Run the first job. When it finishes, the the next one will be run, etc.
      this.runNextJobInQueue();
    }
  }, {
    key: 'onJobDidFinish',
    value: function onJobDidFinish() {
      // After each job, run the next one.
      this.runNextJobInQueue();
    }
  }, {
    key: 'onCallback',
    value: function onCallback(_ref) {
      var callbackID = _ref.callbackID,
          payload = _ref.payload;

      var callback = window.brandai['callback-' + callbackID];
      if (callback) {
        callback(payload);
      }
    }
  }, {
    key: 'createLogMessage',
    value: function createLogMessage(level, data) {
      this.props.actions.onLogMessage(level, data);
    }

    //consider native calling to action directly

  }, {
    key: 'onLogMessage',
    value: function onLogMessage(_ref2) {
      var level = _ref2.level,
          _ref2$data = _ref2.data,
          data = _ref2$data === undefined ? {} : _ref2$data;

      this.props.actions.onLogMessage(level, data);
    }
  }, {
    key: 'imageDragEnd',
    value: function imageDragEnd(item, symbolPageName) {

      //if we want to insert an image and there is also skla native format for the primary format then use it instead
      var sklaFormat = __WEBPACK_IMPORTED_MODULE_5__util__["k" /* findAlternativeFormat */](item, 'skla') || {};

      __WEBPACK_IMPORTED_MODULE_6__sketch__["i" /* postNativeUIEvent */]('onPossibleImageDrop', {
        url: sklaFormat.url || item.url,
        extension: sklaFormat.extension || item.extension,
        name: item.displayName,
        id: item._id,
        symbolPageName: symbolPageName,
        metadata: item.metadata,
        pageName: item.pageName
      });
    }
  }, {
    key: 'checkForUpdate',
    value: function checkForUpdate() {
      var _this7 = this;

      Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('Checking for update to plugin...');

      if (!this.state.pluginVersion) {
        Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('...Unknown current version.');
        return;
      }

      this.props.actions.getLatestAvailablePluginInfo().then(function (newestVersion) {
        var newer = __WEBPACK_IMPORTED_MODULE_2_semver___default.a.gt(newestVersion.version, _this7.state.pluginVersion);
        var ready = _this7.state.updateReadyToInstall && _this7.state.updateReadyToInstall.version === newestVersion.version;
        var downloading = _this7.state.downloadingUpdate;
        var needsRestart = _this7.state.needsRestart;

        if (newer && !ready && !downloading && !needsRestart) {
          Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('...Downloading update ' + newestVersion.downloadURL);
          _this7.downloadUpdate(newestVersion);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('...No reason to download update.');
        }
      }).catch(function (reason) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__util__["h" /* debug */])('...Network failure: ' + reason);
      });
    }
  }, {
    key: 'isPagesApp',
    value: function isPagesApp() {
      return this.state.currentApp === __WEBPACK_IMPORTED_MODULE_7__utils_applications_data__["a" /* default */].PAGES.name;
    }
  }]);

  return MainApp;
}(__WEBPACK_IMPORTED_MODULE_10__App__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_flux_stores__["a" /* default */])(['StyleguideStore', 'UserStore', 'OrganizationStore', 'SearchResultsStore', 'PagesStore', 'ApplicationStore'])(MainApp));

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_pure_render_shallowEqual__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_pure_render_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_pure_render_shallowEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_forEach__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_forEach__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Wrapper component that gives the wrapped component access to flux stores
 * example from BaseContainer:
 *    export default FluxStoreAwareComponent(['UserStore', 'RouterStore'], getStateFromFlux)(BaseContainer);
 * */
/* harmony default export */ __webpack_exports__["a"] = (function (storeNames) {
  return function (WrappedComponent) {
    var _class, _temp;

    var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    validateWrappedComponentMethods(WrappedComponent.prototype, displayName);
    initializeWrappedComponentStateMethods(WrappedComponent);

    var getStateFromFlux = WrappedComponent.prototype.getStateFromFlux;
    var updateStateFromFlux = WrappedComponent.prototype.updateStateFromFlux;

    return _temp = _class = function (_Component) {
      _inherits(FluxStoreAwareComponent, _Component);

      function FluxStoreAwareComponent(props) {
        _classCallCheck(this, FluxStoreAwareComponent);

        var _this = _possibleConstructorReturn(this, (FluxStoreAwareComponent.__proto__ || Object.getPrototypeOf(FluxStoreAwareComponent)).call(this, props));

        _this.handleStoresChanged = _this.handleStoresChanged.bind(_this);

        // reference to the wrapped container so that we can call instance methods on it with the correct
        // "this" context
        _this.decoratedRef = null;
        return _this;
      }

      _createClass(FluxStoreAwareComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          var flux = this.props.flux || this.context.flux;
          this.mounted = true;

          __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default()(storeNames, function (store) {
            flux.store(store).on("change", _this2.handleStoresChanged);
          }, this);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.handleStoresChanged();
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (!__WEBPACK_IMPORTED_MODULE_1_react_pure_render_shallowEqual___default()(nextProps, this.props)) {
            this.handleStoresChanged();
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          var flux = this.props.flux || this.context.flux;
          this.mounted = false;
          __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default()(storeNames, function (store) {
            flux.store(store).removeListener("change", _this3.handleStoresChanged);
          });
        }
      }, {
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            flux: this.getFlux()
          };
        }
      }, {
        key: 'getFlux',
        value: function getFlux() {
          return this.props.flux || this.context && this.context.flux;
        }
      }, {
        key: 'getActions',
        value: function getActions() {
          var flux = this.getFlux();
          if (flux) {
            return flux.actions;
          }
          throw new Error("Could not find flux on this.props or this.context");
        }
      }, {
        key: 'handleStoresChanged',
        value: function handleStoresChanged() {
          if (!getStateFromFlux) {
            console.log('[BUG] You took a dependency on FluxStoreAwareComponent without defining a setStateFromFlux method');
          }
          if (this.mounted && this.decoratedRef && getStateFromFlux) {
            var flux = this.props.flux || this.context.flux;
            updateStateFromFlux.call(this.decoratedRef, flux);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({
            ref: function ref(e) {
              return _this4.decoratedRef = e;
            }
          }, this.props, this.state, {

            getFlux: this.getFlux,
            flux: this.getFlux(),
            actions: this.getActions()
          }));
        }
      }]);

      return FluxStoreAwareComponent;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.displayName = 'FluxStoreAwareComponent(' + displayName + ')', _class.childContextTypes = {
      flux: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
    }, _class.contextTypes = {
      flux: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
    }, _temp;
  };
});

/**
 * Throw if a wrapped component defines a property named with one of the methods we overwrite
 * */
var methodNameKeys = ['getInitialState', 'updateStateFromFlux'];
var validateWrappedComponentMethods = function validateWrappedComponentMethods(wrappedComponent, displayName) {
  __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default()(methodNameKeys, function (key) {
    if (wrappedComponent[key]) {
      throw new Error('Component: ' + displayName + ' is wrapped by FluxStoreAwareComponent and cannot define ' + key);
    }
  });
};

/**
 * Add lifecycle methods to the component so we can set state in a way that is semantically the same as Fluxxor
 * */
var initializeWrappedComponentStateMethods = function initializeWrappedComponentStateMethods(wrappedComponent) {
  if (!wrappedComponent.prototype.getInitialState) {
    wrappedComponent.prototype.getInitialState = function () {
      if (!this.props.flux) {
        return {};
      }
      var state = wrappedComponent.prototype.getStateFromFlux.call(this, this.props.flux);
      return state;
    };
  }
  if (!wrappedComponent.prototype.updateStateFromFlux) {
    wrappedComponent.prototype.updateStateFromFlux = function (flux) {
      var state = wrappedComponent.prototype.getStateFromFlux.call(this, flux);
      this.setState(state);
    };
  }
};

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(171)
var ieee754 = __webpack_require__(594)
var isArray = __webpack_require__(595)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 595:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 596:
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flux_actions__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brandai_moon__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brandai_moon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__brandai_moon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LogosSection__ = __webpack_require__(1234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ColorsSection__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TypographySection__ = __webpack_require__(1237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SharedStyles__ = __webpack_require__(1238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ImagesSection__ = __webpack_require__(1239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Tabs__ = __webpack_require__(1240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SearchBox__ = __webpack_require__(545);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var IconsSection = Object(__WEBPACK_IMPORTED_MODULE_10__ImagesSection__["a" /* default */])('icons', 'sm');
var ImagesSection = Object(__WEBPACK_IMPORTED_MODULE_10__ImagesSection__["a" /* default */])('images', 'md');
var ComponentsSection = Object(__WEBPACK_IMPORTED_MODULE_10__ImagesSection__["a" /* default */])('componentImages', 'md');

var viewOnWebPng = __webpack_require__(1241);
var DEFAULT_STYLEGUIDE_TABS = [{ name: 'Logos' }, { name: 'Colors' }, { name: 'Text' }, { name: 'Styles' }, { name: 'Icons' }, { name: 'Images' }, { name: 'Components' }];

var StyleguidePage = function (_Component) {
  _inherits(StyleguidePage, _Component);

  function StyleguidePage(props) {
    _classCallCheck(this, StyleguidePage);

    var _this = _possibleConstructorReturn(this, (StyleguidePage.__proto__ || Object.getPrototypeOf(StyleguidePage)).call(this, props));

    _this.state = {
      showVersionExplanation: true
    };

    _this.imageDragStart = _this.imageDragStart.bind(_this);
    return _this;
  }

  _createClass(StyleguidePage, [{
    key: 'renderVersionSnapshotIndication',
    value: function renderVersionSnapshotIndication() {
      var _this2 = this;

      // if we did not showed yet the message and the user is editor and viewing and snapshot show this message
      var styleguide = this.props.styleData.styleguide;
      if (this.state.showVersionExplanation && styleguide && styleguide.snapshotId && styleguide.isStyleguideEditor && !this.props.prefetchingStyleData) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'alert alert--default alert--bottom flex items-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'flex-auto alert-message' },
            'You are viewing version "',
            styleguide.snapshotName,
            '" of your design library.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: 'alert-link u-ml3',
              style: { minWidth: 100 },
              onClick: this.props.onStyleguideChanged
            },
            'Edit in Shared Draft'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-close-x u-ml2 u-pt1 u-cursor-pointer', onClick: function onClick() {
              _this2.setState({ showVersionExplanation: false });
            } })
        );
      }
    }
  }, {
    key: 'renderStyledataNeedRefetching',
    value: function renderStyledataNeedRefetching() {
      // if we did not showed yet the message and the user is editor and viewing and snapshot show this message
      if (this.props.styleData && !this.props.prefetchingStyleData && this.props.prefetchingStyleDataFailed) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'alert alert--default alert--bottom flex items-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'alert-message flex-auto' },
            'Could not download library data.  Please check you connection',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'alert-link u-ml1', onClick: this.props.actions.fetchCacheableStyleData },
              'and click here to try again.'
            )
          )
        );
      }
    }
  }, {
    key: 'renderStyleguideTabBar',
    value: function renderStyleguideTabBar() {
      var _this3 = this;

      DEFAULT_STYLEGUIDE_TABS.forEach(function (tab) {
        tab.selected = _this3.props.currentSection === tab.name;
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Tabs__["a" /* default */], {
        tabs: DEFAULT_STYLEGUIDE_TABS,
        onSelect: this.props.actions.updateCurrentSection
      });
    }
  }, {
    key: 'renderSearchBox',
    value: function renderSearchBox() {
      if (this.props.styleData) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'u-relative' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SearchBox__["a" /* default */], {
            searchQuery: this.props.searchQuery,
            placeholder: 'Search...',
            onSearch: this.props.actions.searchStyleguide
          }),
          //this is found here as we did not had any better place to put it for now
          this.renderAdditionalButtonsInSearchBox()
        );
      }
      return null;
    }
  }, {
    key: 'renderAdditionalButtonsInSearchBox',
    value: function renderAdditionalButtonsInSearchBox() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'c-search-box__buttons' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: 'c-search-box__button u-mr3', title: 'Edit Design Library Settings in Web',
            onClick: this.props.actions.openStyleguideSettingsInBrowser },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon-settings' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: 'c-search-box__button', title: 'View Design Library in Web',
            onClick: this.props.actions.openStyleguideInBrowser
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'c-view-on-web__image',
            style: { backgroundImage: 'url(' + viewOnWebPng + ')' }
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var styleData = this.props.styleData;


      var parentStyleguideSections = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(styleData.parentStyleguides || [], function (parent) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: parent._id },
          _this4.renderStyleguide(parent, true, true, _this4.props)
        );
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.renderSearchBox(),
        this.renderStyleguideTabBar(),
        this.renderStyleguide(styleData.styleguide, this.props.readOnly, false),
        parentStyleguideSections,
        this.renderVersionSnapshotIndication(),
        this.renderStyledataNeedRefetching()
      );
    }
  }, {
    key: 'renderStyleguide',
    value: function renderStyleguide(styleguide, readOnly, isParent) {
      var selectedSection;
      var selectedItems;
      switch (this.props.currentSection) {
        case 'Logos':
          selectedItems = styleguide.logos;
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__LogosSection__["a" /* default */], {
            readOnly: readOnly,
            logos: styleguide.logos,
            onImageDragEnd: this.props.imageDragEnd,
            editingItemID: this.props.editingItemID,
            onBeginEditItem: this.props.actions.onBeginEditItem,
            onRenameLogo: this.props.actions.onRenameLogo,
            onLogoContextMenu: this.onLogoContextMenu,
            isSearching: this.props.isSearching,
            onAddLogosInWeb: this.props.onAddLogosInWeb,
            onImageDragStart: this.imageDragStart
          });
          break;

        case 'Colors':
          selectedItems = __WEBPACK_IMPORTED_MODULE_4__util__["m" /* getAllItemsInSections */](styleguide.colorSections, 'colors');
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ColorsSection__["a" /* default */], {
            readOnly: readOnly,
            palettes: styleguide.colorSections,
            onChooseColor: this.chooseColor,
            onAddColors: this.addColors,
            onAddPalette: this.addPalette,
            editingItemID: this.props.editingItemID,
            onBeginEditItem: this.props.actions.onBeginEditItem,
            onRenameColor: this.props.actions.onRenameColor,
            onColorContextMenu: this.onColorContextMenu,
            onPaletteContextMenu: this.onPaletteContextMenu,
            onRenamePalette: this.props.actions.onRenamePalette,
            isSearching: this.props.isSearching
          });
          break;

        case 'Text':
          selectedItems = styleguide.typeStyles;
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TypographySection__["a" /* default */], {
            readOnly: readOnly,
            typeStyles: styleguide.typeStyles,
            onTypeStyleDragEnd: this.typeStyleDragEnd,
            onAddTypeStyles: this.addTypeStyles,
            installedFonts: this.props.installedFonts,
            onTypeStyleContextMenu: this.onTypeStyleContextMenu,
            isSearching: this.props.isSearching,
            onChooseTypeStyle: this.chooseTypography,
            onOpenDeleteTypeStylesApp: this.onOpenDeleteTypeStylesApp
          });
          break;

        case 'Styles':
          selectedItems = styleguide.sharedStyles;
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SharedStyles__["a" /* default */], {
            readOnly: readOnly,
            sharedStyles: styleguide.sharedStyles,
            onAddSharedStyles: this.addSharedStyles,
            onSharedStyleItemContextMenu: this.onSharedStyleContextMenu,
            onChooseStyle: this.chooseSharedStyle.bind(this),
            isSearching: this.props.isSearching,
            onOpenDeleteSharedStylesApp: this.onOpenDeleteSharedStylesApp
          });
          break;

        case 'Icons':
          selectedItems = __WEBPACK_IMPORTED_MODULE_4__util__["m" /* getAllItemsInSections */](styleguide.iconSections, 'icons');
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IconsSection, {
            readOnly: readOnly,
            sections: styleguide.iconSections,
            onImageDragEnd: this.props.imageDragEnd,
            onImageContextMenu: this.onImageContextMenu,
            onImageSectionContextMenu: this.onImageSectionContextMenu,
            selectedLayerCount: this.props.selectedLayerCount,
            onUploadLayers: this.uploadLayers,
            onBeginEditItem: this.props.actions.onBeginEditItem,
            editingItemID: this.props.editingItemID,
            onRenameImage: this.props.actions.onRenameImageType,
            onRenameSection: this.props.actions.onRenameImageSection,
            isSearching: this.props.isSearching,
            onFallbackDataReceived: this.onImageFallbackDataReceived,
            onImageDragStart: this.imageDragStart
          });
          break;

        case 'Images':
          selectedItems = __WEBPACK_IMPORTED_MODULE_4__util__["m" /* getAllItemsInSections */](styleguide.imageSections, 'images');
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ImagesSection, {
            readOnly: readOnly,
            sections: styleguide.imageSections,
            onImageDragEnd: this.props.imageDragEnd,
            onImageContextMenu: this.onImageContextMenu,
            onImageSectionContextMenu: this.onImageSectionContextMenu,
            selectedLayerCount: this.props.selectedLayerCount,
            onUploadLayers: this.uploadLayers,
            onBeginEditItem: this.props.actions.onBeginEditItem,
            editingItemID: this.props.editingItemID,
            onRenameImage: this.props.actions.onRenameImageType,
            onRenameSection: this.props.actions.onRenameImageSection,
            isSearching: this.props.isSearching,
            onFallbackDataReceived: this.onImageFallbackDataReceived,
            onImageDragStart: this.imageDragStart
          });
          break;

        case 'Components':
          selectedItems = __WEBPACK_IMPORTED_MODULE_4__util__["m" /* getAllItemsInSections */](styleguide.componentImageSections, 'components');
          selectedSection = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentsSection, {
            readOnly: readOnly,
            sections: styleguide.componentImageSections,
            onImageDragEnd: this.props.imageDragEnd,
            onImageContextMenu: this.onImageContextMenu,
            onImageSectionContextMenu: this.onImageSectionContextMenu,
            selectedLayerCount: this.props.selectedLayerCount,
            onUploadLayers: this.uploadLayers,
            onBeginEditItem: this.props.actions.onBeginEditItem,
            editingItemID: this.props.editingItemID,
            onRenameImage: this.props.actions.onRenameImageType,
            onRenameSection: this.props.actions.onRenameImageSection,
            isSearching: this.props.isSearching,
            onFallbackDataReceived: this.onImageFallbackDataReceived,
            onImageDragStart: this.imageDragStart
          });
          break;
      }

      if (isParent && (!selectedItems || !selectedItems.length || selectedItems.length === 0)) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__brandai_moon__["CollapsibleSection"],
        { sectionDivider: false, title: styleguide.name },
        selectedSection
      );
    }
  }, {
    key: 'onLogoContextMenu',
    value: function onLogoContextMenu(event, logo) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: logo.displayName,
        type: 'logos',
        elementID: logo._id,
        menuItems: [{ key: 'rename', value: 'Rename' }, { key: 'delete', value: 'Delete' }]
      });
    }
  }, {
    key: 'onImageContextMenu',
    value: function onImageContextMenu(event, imageType, image, section, nameHidden) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: image.displayName,
        type: __WEBPACK_IMPORTED_MODULE_4__util__["t" /* itemsKeyForImageType */](imageType),
        enclosingType: __WEBPACK_IMPORTED_MODULE_4__util__["g" /* categoryKeyForImageType */](imageType),
        enclosingID: section._id,
        elementID: image._id,
        menuItems: nameHidden ? [{ key: 'delete', value: 'Delete' }] : [{
          key: 'rename',
          value: 'Rename'
        }, { key: 'delete', value: 'Delete' }]
      });
    }
  }, {
    key: 'onImageSectionContextMenu',
    value: function onImageSectionContextMenu(event, imageType, section) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: section.name,
        type: __WEBPACK_IMPORTED_MODULE_4__util__["g" /* categoryKeyForImageType */](imageType),
        elementID: section._id,
        menuItems: [{ key: 'delete', value: 'Delete Section' }, { key: 'rename', value: 'Rename Section' }]
      });
    }
  }, {
    key: 'onColorContextMenu',
    value: function onColorContextMenu(event, paletteID, colorID, colorName) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: colorName,
        type: 'colors',
        enclosingType: 'colorSections',
        enclosingID: paletteID,
        elementID: colorID,
        menuItems: [{ key: 'rename', value: 'Rename' }, { key: 'delete', value: 'Delete' }]
      });
    }
  }, {
    key: 'onPaletteContextMenu',
    value: function onPaletteContextMenu(event, paletteID, paletteName) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: paletteName,
        type: 'colorSections',
        elementID: paletteID,
        menuItems: [{ key: 'rename', value: 'Rename Palette' }, { key: 'delete', value: 'Delete Palette' }]
      });
    }
  }, {
    key: 'onTypeStyleContextMenu',
    value: function onTypeStyleContextMenu(event, typeStyle) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onTypeStyleContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: typeStyle.name,
        element: typeStyle,
        type: 'typeStyles',
        elementID: typeStyle._id
      });
    }
  }, {
    key: 'onSharedStyleContextMenu',
    value: function onSharedStyleContextMenu(event, sharedStyle) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onContextMenu', {
        x: event.clientX,
        y: event.clientY,
        itemName: sharedStyle.name,
        element: sharedStyle,
        type: 'sharedStyles',
        elementID: sharedStyle._id,
        menuItems: [{ key: 'delete', value: 'Delete' }]
      });
    }
  }, {
    key: 'addTypeStyles',
    value: function addTypeStyles() {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onAddTypeStyles');
    }
  }, {
    key: 'onOpenDeleteTypeStylesApp',
    value: function onOpenDeleteTypeStylesApp() {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('openDeleteTypeStylesApp');
    }
  }, {
    key: 'addSharedStyles',
    value: function addSharedStyles() {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onAddSharedStyles');
    }
  }, {
    key: 'onOpenDeleteSharedStylesApp',
    value: function onOpenDeleteSharedStylesApp() {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('openDeleteSharedStylesApp');
    }
  }, {
    key: 'addColors',
    value: function addColors(paletteID) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onAddColors', paletteID);
    }
  }, {
    key: 'addPalette',
    value: function addPalette() {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onAddPalette');
    }
  }, {
    key: 'chooseColor',
    value: function chooseColor(color, event) {
      if (event.button === 0) {
        __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onChooseColor', {
          color: color,
          preferBorders: !!event.shiftKey
        });
      }
    }
  }, {
    key: 'chooseTypography',
    value: function chooseTypography(typeStyle, event) {
      if (event.button === 0) {
        __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onChooseTypeStyle', {
          typeStyle: typeStyle
        });
      }
    }
  }, {
    key: 'chooseSharedStyle',
    value: function chooseSharedStyle(sharedStyle, event) {
      if (event.button === 0) {
        if (this.props.prefetchingStyleData) {
          __WEBPACK_IMPORTED_MODULE_3__sketch__["b" /* displayAlert */]({
            title: 'Can\'t apply style to layer while library update is in progress.',
            description: 'Your library is getting updated with the most\nup-to-date items. You can apply styles to the document when the update is done.',
            buttons: ['OK']
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onChooseSharedStyle', sharedStyle);
        }
      }
    }
  }, {
    key: 'typeStyleDragEnd',
    value: function typeStyleDragEnd(typeStyle) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onPossibleTypeStyleDrop', typeStyle);
    }

    // Upload layers - stage #1

  }, {
    key: 'uploadLayers',
    value: function uploadLayers(imageType, sectionID) {
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onUploadLayers', { imageType: imageType, sectionID: sectionID });
    }
  }, {
    key: 'onImageFallbackDataReceived',
    value: function onImageFallbackDataReceived(dataURL, image) {
      //todo: should work for skla, and all formats in general
      __WEBPACK_IMPORTED_MODULE_3__sketch__["i" /* postNativeUIEvent */]('onImageFallbackDataReceived', {
        url: image.url,
        extension: image.extension,
        dataURL: dataURL
      });
    }
  }, {
    key: 'imageDragStart',
    value: function imageDragStart(evt) {
      if (this.props.prefetchingStyleData) {
        __WEBPACK_IMPORTED_MODULE_3__sketch__["b" /* displayAlert */]({
          title: 'Can\'t add to document while library update is in progress.',
          description: 'Your library is getting updated with the most\nup-to-date items.  You can add components to the document when the update is done.',
          buttons: ['OK']
        });
        evt.preventDefault();
      }
    }
  }]);

  return StyleguidePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_flux_actions__["a" /* default */])(StyleguidePage));

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.nativeHost = {};
    _this.pendingCallbacks = {};
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.brandai = window.brandai || {};
      var app = this;

      this.props.nativeHandlers.forEach(function (func) {
        app.nativeHost[func] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var lastArg = args[args.length - 1];
          var asyncID;
          if (lastArg && typeof lastArg == 'function') {
            args.pop();
            asyncID = __WEBPACK_IMPORTED_MODULE_2__util__["F" /* randomID */]();
            app.pendingCallbacks[asyncID] = lastArg;
          }
          __WEBPACK_IMPORTED_MODULE_1__sketch__["k" /* sendDataToNativeHost */]({
            eventType: 'functionCall',
            name: func,
            id: asyncID,
            args: args
          });
        };
      });

      window.brandai.receiveDataFromNativeUI = function (data) {
        if (data.eventType == 'functionCall') {
          var handler = app[data.name];
          if (handler) {
            var result;
            try {
              result = handler.apply(app, data.args);
            } catch (err) {
              if (data.id) {
                __WEBPACK_IMPORTED_MODULE_1__sketch__["k" /* sendDataToNativeHost */]({
                  eventType: 'asyncError',
                  id: data.id,
                  reason: err.message
                });
              }
            }
            if (data.id) {
              __WEBPACK_IMPORTED_MODULE_1__sketch__["k" /* sendDataToNativeHost */]({
                eventType: 'asyncResult',
                id: data.id,
                value: result
              });
            }
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_1__sketch__["a" /* debug */])('No app function "' + data.name + '".');
          }
        } else if (data.eventType == 'asyncResult') {
          app.pendingCallbacks[data.asyncID](null, data.value);
        } else if (data.eventType == 'asyncError') {
          app.pendingCallbacks[data.asyncID](data.reason);
        }
      };

      // Prevent default context menu unless holding option key (for development).
      window.oncontextmenu = function (evt) {
        if (!event.altKey) {
          evt.preventDefault();
        }
      };
    }

    // Wait until refs are available.

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_1__sketch__["k" /* sendDataToNativeHost */]({
        eventType: 'initialize',
        functions: this.exportToNativeHost().map(function (f) {
          return f.name;
        })
      });
    }

    // Override this in your subclass.

  }, {
    key: 'exportToNativeHost',
    value: function exportToNativeHost() {
      return [];
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var type = _ref.type;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "styleguide-message" },
    "No results found for " + type
  );
});

/***/ })

},[552]);
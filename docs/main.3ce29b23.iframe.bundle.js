(self.webpackChunk_infinite_debugger_react_mui =
  self.webpackChunk_infinite_debugger_react_mui || []).push([
  [179],
  {
    './generated-stories-entry.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            ),
          ],
          module,
          !1
        );
    },
    './src/stories/Introduction.stories.mdx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __page: function () {
            return __page;
          },
          default: function () {
            return Introduction_stories;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var esm = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
        dist_esm = __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/index.js'
        );
      var code_brackets =
        __webpack_require__.p +
        'static/media/code-brackets.2e1112d71f1a3ba28d2461481dce689b.svg';
      var colors =
        __webpack_require__.p +
        'static/media/colors.a4bd0486703b41f28ac9ef49d8046942.svg';
      var comments =
        __webpack_require__.p +
        'static/media/comments.a38590896b951b65e7ada9af32d6915d.svg';
      var direction =
        __webpack_require__.p +
        'static/media/direction.b770f9af5f20abac0352e73b4676bba2.svg';
      var flow =
        __webpack_require__.p +
        'static/media/flow.edad2ac1b0bb28e0ce513d5b7a65f8fe.svg';
      var assets_plugin =
        __webpack_require__.p +
        'static/media/plugin.d494b22808806ebe8ff4c5b276819e72.svg';
      var repo =
        __webpack_require__.p +
        'static/media/repo.6d4963229d067828d1326ea3f60f5136.svg';
      var stackalt =
        __webpack_require__.p +
        'static/media/stackalt.dba9fbb33e1e5daf57e0cf575f818e65.svg';
      function Introduction_stories_extends() {
        return (
          (Introduction_stories_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          Introduction_stories_extends.apply(this, arguments)
        );
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return (0, esm.kt)(
          'wrapper',
          Introduction_stories_extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          (0, esm.kt)(dist_esm.h_, {
            title: 'Example/Introduction',
            mdxType: 'Meta',
          }),
          (0, esm.kt)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"
          ),
          (0, esm.kt)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook'
          ),
          (0, esm.kt)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            (0, esm.kt)('strong', { parentName: 'p' }, 'stories'),
            ' to revisit during development, testing, or QA.'
          ),
          (0, esm.kt)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            (0, esm.kt)('inlineCode', { parentName: 'p' }, 'src/stories'),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            (0, esm.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              (0, esm.kt)('strong', { parentName: 'a' }, 'component-driven')
            ),
            ' process starting with atomic components and ending with pages.'
          ),
          (0, esm.kt)('div', { className: 'subheading' }, 'Configure'),
          (0, esm.kt)(
            'div',
            { className: 'link-list' },
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: assets_plugin, alt: 'plugin' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Presets for popular tools'),
                'Easy setup for TypeScript, SCSS and more.'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: stackalt, alt: 'Build' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Build configuration'),
                'How to customize webpack and Babel'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: colors, alt: 'colors' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Styling'),
                'How to load and configure CSS libraries'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: flow, alt: 'flow' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Data'),
                'Providers and mocking for data libraries'
              )
            )
          ),
          (0, esm.kt)('div', { className: 'subheading' }, 'Learn'),
          (0, esm.kt)(
            'div',
            { className: 'link-list' },
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: repo, alt: 'repo' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Storybook documentation'),
                'Configure, customize, and extend'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: direction, alt: 'direction' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'In-depth guides'),
                'Best practices from leading teams'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: code_brackets, alt: 'code' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'GitHub project'),
                'View the source and add issues'
              )
            ),
            (0, esm.kt)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              (0, esm.kt)('img', { src: comments, alt: 'comments' }),
              (0, esm.kt)(
                'span',
                null,
                (0, esm.kt)('strong', null, 'Discord chat'),
                'Chat with maintainers and the community'
              )
            )
          ),
          (0, esm.kt)(
            'div',
            { className: 'tip-wrapper' },
            (0, esm.kt)('span', { className: 'tip' }, 'Tip'),
            'Edit the Markdown in',
            ' ',
            (0, esm.kt)('code', null, 'src/stories/Introduction.stories.mdx')
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      const componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            (0, esm.kt)(
              dist_esm.aT,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentAnnotations: componentMeta,
              },
              (0, esm.kt)(MDXContent, null)
            ),
        });
      var Introduction_stories = componentMeta;
    },
    './src/stories/FieldValueDisplay.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
          WithStringValue: function () {
            return WithStringValue;
          },
          WithNumericValue: function () {
            return WithNumericValue;
          },
          WithElementValue: function () {
            return WithElementValue;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/@mui/material/Chip/Chip.js'
        ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Field Value Display',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.w3,
        parameters: { layout: 'centered' },
      };
      var Template = function Template(_ref) {
          var value = _ref.value,
            props = {};
          return (
            null != value && (props.value = value),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_0__.w3,
              (0,
              D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                { label: 'The Label' },
                props
              )
            )
          );
        },
        Default = Template.bind({}),
        WithStringValue = Template.bind({});
      WithStringValue.args = { value: 'This is the value' };
      var WithNumericValue = Template.bind({});
      WithNumericValue.args = { value: 2e3 };
      var WithElementValue = Template.bind({});
      (WithElementValue.args = {
        value: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
          { label: 'A reasonably long value', color: 'success', size: 'small' }
        ),
      }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ value }) => {\r\n  const props: any = {};\r\n  value != null && (props.value = value);\r\n\r\n  return <FieldValueDisplay label="The Label" {...props} />;\r\n}',
            },
          },
          Default.parameters
        )),
        (WithStringValue.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ value }) => {\r\n  const props: any = {};\r\n  value != null && (props.value = value);\r\n\r\n  return <FieldValueDisplay label="The Label" {...props} />;\r\n}',
            },
          },
          WithStringValue.parameters
        )),
        (WithNumericValue.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ value }) => {\r\n  const props: any = {};\r\n  value != null && (props.value = value);\r\n\r\n  return <FieldValueDisplay label="The Label" {...props} />;\r\n}',
            },
          },
          WithNumericValue.parameters
        )),
        (WithElementValue.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ value }) => {\r\n  const props: any = {};\r\n  value != null && (props.value = value);\r\n\r\n  return <FieldValueDisplay label="The Label" {...props} />;\r\n}',
            },
          },
          WithElementValue.parameters
        ));
    },
    './src/stories/FileUploader.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@mui/material/Box/Box.js'
        ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/File Uploader',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.bA,
      };
      var Default = function Template() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,
          {
            sx: { maxWidth: 1200, p: 3, mx: 'auto' },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_0__.bA,
              {}
            ),
          }
        );
      }.bind({});
      Default.parameters = (0,
      D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {
          storySource: {
            source:
              "() => (\r\n  <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n    <FileUploader />\r\n  </Box>\r\n)",
          },
        },
        Default.parameters
      );
    },
    './src/stories/ImageSelector.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
          WithFieldErrorMessage: function () {
            return WithFieldErrorMessage;
          },
          AutoUpload: function () {
            return AutoUpload;
          },
          AutoUploadWithErrors: function () {
            return AutoUploadWithErrors;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@mui/material/Box/Box.js'
        ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Image Selector',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.m6,
      };
      var Template = function Template(_ref) {
          var rest = Object.assign({}, _ref);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,
            {
              sx: { maxWidth: 1200, p: 3, mx: 'auto' },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_0__.m6,
                (0,
                D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  rest
                )
              ),
            }
          );
        },
        Default = Template.bind({}),
        WithFieldErrorMessage = Template.bind({});
      WithFieldErrorMessage.args = {
        error: !0,
        helperText: 'This is an error message',
      };
      var AutoUpload = Template.bind({});
      AutoUpload.args = {
        upload: function upload(imageFile, _ref2) {
          var onComplete = _ref2.onComplete,
            onProgress = _ref2.onProgress,
            onSuccess = _ref2.onSuccess,
            countDown = 1e4,
            interval = setInterval(function () {
              onProgress(((1e4 - (countDown -= 100)) / 1e4) * 100),
                countDown <= 0 &&
                  (clearInterval(interval), onSuccess({}), onComplete());
            }, 100);
          return {
            cancel: function cancel() {
              clearInterval(interval), console.log('Cancelled Image Upload');
            },
          };
        },
      };
      var AutoUploadWithErrors = Template.bind({});
      (AutoUploadWithErrors.args = {
        upload: function uploadWithErrors(imageFile, _ref3) {
          var onComplete = _ref3.onComplete,
            onError = _ref3.onError,
            onProgress = _ref3.onProgress,
            countDown = 1e4,
            errorStage = Math.floor(1e4 * Math.random()),
            interval = setInterval(function () {
              onProgress(((1e4 - (countDown -= 100)) / 1e4) * 100),
                countDown <= errorStage &&
                  (clearInterval(interval),
                  onError(new Error('Failed to upload')),
                  onComplete());
            }, 100);
          return {
            cancel: function cancel() {
              clearInterval(interval),
                console.log('Cancelled Image Upload With Errors');
            },
          };
        },
      }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({ ...rest }) => (\r\n  <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n    <ImageSelector {...rest} />\r\n  </Box>\r\n)",
            },
          },
          Default.parameters
        )),
        (WithFieldErrorMessage.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({ ...rest }) => (\r\n  <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n    <ImageSelector {...rest} />\r\n  </Box>\r\n)",
            },
          },
          WithFieldErrorMessage.parameters
        )),
        (AutoUpload.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({ ...rest }) => (\r\n  <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n    <ImageSelector {...rest} />\r\n  </Box>\r\n)",
            },
          },
          AutoUpload.parameters
        )),
        (AutoUploadWithErrors.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({ ...rest }) => (\r\n  <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n    <ImageSelector {...rest} />\r\n  </Box>\r\n)",
            },
          },
          AutoUploadWithErrors.parameters
        ));
    },
    './src/stories/InputFields/CurrencyInputField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Currency Input Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.jq,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.jq,
          { label: 'Currency', required: required, sx: { minWidth: 300 } }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ required }) => {\r\n  return (\r\n    <CurrencyInputField\r\n      label="Currency"\r\n      {...{ required }}\r\n      sx={{ minWidth: 300 }}\r\n    />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/InputFields/DataDropdownField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
          WithStaticOptions: function () {
            return WithStaticOptions;
          },
          WithOverflowingOptions: function () {
            return WithOverflowingOptions;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Data Dropdown Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.O1,
        parameters: { layout: 'centered' },
      };
      var Template = function Template(_ref) {
          var required = _ref.required,
            label = _ref.label,
            options = _ref.options,
            props = {};
          return (
            required && (props.required = required),
            label && (props.label = label),
            options && (props.options = options),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_0__.O1,
              (0,
              D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                (0,
                D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                  { label: 'Dropdown' },
                  props
                ),
                {},
                { sx: { minWidth: 300 } }
              )
            )
          );
        },
        Default = Template.bind({});
      Default.args = { required: !0 };
      var WithStaticOptions = Template.bind({});
      WithStaticOptions.args = {
        label: 'Dropdown With Options',
        required: !0,
        options: ['One', 'Two', 'Three'].map(function (value) {
          return { label: value, value: value };
        }),
      };
      var WithOverflowingOptions = Template.bind({});
      (WithOverflowingOptions.args = {
        label: 'Dropdown With Many Options',
        required: !0,
        options: Array.from({ length: 200 }).map(function (_, index) {
          return { label: String(index), value: index };
        }),
      }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({\r\n  required,\r\n  label,\r\n  options,\r\n}) => {\r\n  const props: any = {};\r\n  required && (props.required = required);\r\n  label && (props.label = label);\r\n  options && (props.options = options);\r\n\r\n  return (\r\n    <DataDropdownField label="Dropdown" {...props} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          Default.parameters
        )),
        (WithStaticOptions.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({\r\n  required,\r\n  label,\r\n  options,\r\n}) => {\r\n  const props: any = {};\r\n  required && (props.required = required);\r\n  label && (props.label = label);\r\n  options && (props.options = options);\r\n\r\n  return (\r\n    <DataDropdownField label="Dropdown" {...props} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          WithStaticOptions.parameters
        )),
        (WithOverflowingOptions.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({\r\n  required,\r\n  label,\r\n  options,\r\n}) => {\r\n  const props: any = {};\r\n  required && (props.required = required);\r\n  label && (props.label = label);\r\n  options && (props.options = options);\r\n\r\n  return (\r\n    <DataDropdownField label="Dropdown" {...props} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          WithOverflowingOptions.parameters
        ));
    },
    './src/stories/InputFields/DateInputField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Date Input Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.f_,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.f_,
          { label: 'Date', required: required, sx: { minWidth: 300 } }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ required }) => {\r\n  return (\r\n    <DateInputField label="Date" {...{ required }} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/InputFields/FileInputField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/File Input Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.Tv,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.Tv,
          {
            label: 'File Input Field',
            required: required,
            sx: { minWidth: 300 },
          }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ required }) => {\r\n  return (\r\n    <FileInputField\r\n      label="File Input Field"\r\n      {...{ required }}\r\n      sx={{ minWidth: 300 }}\r\n    />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/InputFields/NumberInputField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Number Input Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.zu,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.zu,
          { label: 'Number', required: required, sx: { minWidth: 300 } }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ required }) => {\r\n  return (\r\n    <NumberInputField label="Number" {...{ required }} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/InputFields/PhoneNumberInputField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Phone Number Input Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.xV,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.xV,
          { label: 'Phone Number', required: required, sx: { minWidth: 300 } }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({\r\n  required,\r\n}) => {\r\n  return (\r\n    <PhoneNumberInputField\r\n      label="Phone Number"\r\n      {...{ required }}\r\n      sx={{ minWidth: 300 }}\r\n    />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/InputFields/TextField.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Input Fields/Text Field',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.nv,
        parameters: { layout: 'centered' },
      };
      var Default = function Template(_ref) {
        var required = _ref.required;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _components__WEBPACK_IMPORTED_MODULE_0__.nv,
          { label: 'Short Text', required: required, sx: { minWidth: 300 } }
        );
      }.bind({});
      (Default.args = { required: !0 }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ required }) => {\r\n  return (\r\n    <TextField label="Short Text" {...{ required }} sx={{ minWidth: 300 }} />\r\n  );\r\n}',
            },
          },
          Default.parameters
        ));
    },
    './src/stories/KanbanBoard.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
          ),
        lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/lorem-ipsum/dist/index.js'
        ),
        _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/KanbanBoard',
        component: _components__WEBPACK_IMPORTED_MODULE_1__.mj,
      };
      var lorem = new lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__.Ap({
          sentencesPerParagraph: { max: 8, min: 4 },
          wordsPerSentence: { max: 16, min: 4 },
        }),
        lanes = Array.from({ length: 6 }).map(function (_, laneIndex) {
          return {
            id: laneIndex,
            title: lorem.generateWords(3),
            showCardCount: !0,
            cards: Array.from({ length: Math.round(20 * Math.random()) }).map(
              function (_, cardIndex) {
                return {
                  id: ''.concat(laneIndex).concat(cardIndex),
                  laneId: laneIndex,
                  title: ''
                    .concat(cardIndex + 1, '. ')
                    .concat(lorem.generateWords(5)),
                  description: lorem.generateWords(40),
                };
              }
            ),
          };
        }),
        Default = function Template(_ref) {
          return (
            (0,
            D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _components__WEBPACK_IMPORTED_MODULE_1__.mj,
              { lanes: lanes }
            )
          );
        }.bind({});
      Default.parameters = (0,
      D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        {
          storySource: {
            source: '({}) => {\r\n  return <KanbanBoard lanes={lanes} />;\r\n}',
          },
        },
        Default.parameters
      );
    },
    './src/stories/Table.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: function () {
            return Default;
          },
          WithoutPaging: function () {
            return WithoutPaging;
          },
          WithoutHeaderRow: function () {
            return WithoutHeaderRow;
          },
          WithHeaderRowProps: function () {
            return WithHeaderRowProps;
          },
          ColumnTypes: function () {
            return ColumnTypes;
          },
          ClassicPagination: function () {
            return ClassicPagination;
          },
        });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@mui/material/Box/Box.js'
        ),
        _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Components/Table',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.iA,
      };
      var Template = function Template(_ref) {
          var showHeaderRow = _ref.showHeaderRow,
            paging = _ref.paging,
            HeaderRowProps = _ref.HeaderRowProps,
            columns = _ref.columns,
            rows = _ref.rows,
            paginationType = _ref.paginationType,
            props = {};
          return (
            null != showHeaderRow && (props.showHeaderRow = showHeaderRow),
            null != paging && (props.paging = paging),
            null != HeaderRowProps && (props.HeaderRowProps = HeaderRowProps),
            null != columns && (props.columns = columns),
            null != rows && (props.rows = rows),
            null != paginationType && (props.paginationType = paginationType),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,
              {
                sx: { maxWidth: 1200, p: 3, mx: 'auto' },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components__WEBPACK_IMPORTED_MODULE_0__.iA,
                  (0,
                  D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                    {
                      variant: 'stripped',
                      columns: [
                        {
                          id: 'accountNumber',
                          label: 'Account Number',
                          type: 'id',
                          width: 160,
                        },
                        { id: 'name', label: 'Name' },
                        {
                          id: 'outstandingBalance',
                          label: 'Balance',
                          type: 'currency',
                        },
                      ],
                      rows: Array.from({ length: 3 }).map(function () {
                        return {
                          accountNumber: '18728',
                          name: 'John Doe',
                          outstandingBalance: 66e4,
                        };
                      }),
                    },
                    props
                  )
                ),
              }
            )
          );
        },
        Default = Template.bind({}),
        WithoutPaging = Template.bind({});
      WithoutPaging.args = { paging: !1 };
      var WithoutHeaderRow = Template.bind({});
      WithoutHeaderRow.args = { showHeaderRow: !1 };
      var WithHeaderRowProps = Template.bind({});
      WithHeaderRowProps.args = {
        HeaderRowProps: {
          sx: {
            textTransform: 'none',
            '&>th': { color: '#fff', backgroundColor: '#333', py: 0 },
            '&>th>p': { lineHeight: '40px' },
          },
        },
      };
      var ColumnTypes = Template.bind({});
      ColumnTypes.args = {
        columns: [
          { id: 'id', label: 'id', type: 'id' },
          { id: 'amount', label: 'Currency', type: 'currency' },
          { id: 'number', label: 'Number', type: 'number' },
          { id: 'percent', label: 'Percent', type: 'percentage' },
          { id: 'isHere', label: 'Boolean', type: 'boolean' },
        ],
        rows: Array.from({ length: 4 + Math.round(100 * Math.random()) }).map(
          function () {
            return {
              id: Math.round(500 * Math.random()),
              amount: 500 * Math.round(5e3 * Math.random()),
              number: Math.round(1e4 * Math.random()),
              percent: 100 * Math.random(),
              isHere: Math.round(10 * Math.random()) % 2 == 0,
            };
          }
        ),
      };
      var ClassicPagination = Template.bind({});
      (ClassicPagination.args = {
        columns: [
          { id: 'id', label: 'id', type: 'id' },
          { id: 'amount', label: 'Currency', type: 'currency' },
          { id: 'number', label: 'Number', type: 'number' },
          { id: 'percent', label: 'Percent', type: 'percentage' },
          { id: 'isHere', label: 'Boolean', type: 'boolean' },
        ],
        rows: Array.from({ length: 4 + Math.round(100 * Math.random()) }).map(
          function () {
            return {
              id: Math.round(500 * Math.random()),
              amount: 500 * Math.round(5e3 * Math.random()),
              number: Math.round(1e4 * Math.random()),
              percent: 100 * Math.random(),
              isHere: Math.round(10 * Math.random()) % 2 == 0,
            };
          }
        ),
        paginationType: 'classic',
      }),
        (Default.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          Default.parameters
        )),
        (WithoutPaging.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          WithoutPaging.parameters
        )),
        (WithoutHeaderRow.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          WithoutHeaderRow.parameters
        )),
        (WithHeaderRowProps.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          WithHeaderRowProps.parameters
        )),
        (ColumnTypes.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          ColumnTypes.parameters
        )),
        (ClassicPagination.parameters = (0,
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({\r\n  showHeaderRow,\r\n  paging,\r\n  HeaderRowProps,\r\n  columns,\r\n  rows,\r\n  paginationType,\r\n}) => {\r\n  const props: any = {};\r\n  showHeaderRow != null && (props.showHeaderRow = showHeaderRow);\r\n  paging != null && (props.paging = paging);\r\n  HeaderRowProps != null && (props.HeaderRowProps = HeaderRowProps);\r\n  columns != null && (props.columns = columns);\r\n  rows != null && (props.rows = rows);\r\n  paginationType != null && (props.paginationType = paginationType);\r\n\r\n  return (\r\n    <Box sx={{ maxWidth: 1200, p: 3, mx: 'auto' }}>\r\n      <Table\r\n        variant=\"stripped\"\r\n        columns={[\r\n          {\r\n            id: 'accountNumber',\r\n            label: 'Account Number',\r\n            type: 'id',\r\n            width: 160,\r\n          },\r\n          { id: 'name', label: 'Name' },\r\n          {\r\n            id: 'outstandingBalance',\r\n            label: 'Balance',\r\n            type: 'currency',\r\n          },\r\n        ]}\r\n        rows={Array.from({ length: 3 }).map(() => ({\r\n          accountNumber: '18728',\r\n          name: 'John Doe',\r\n          outstandingBalance: 660000,\r\n        }))}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}",
            },
          },
          ClassicPagination.parameters
        ));
    },
    './.storybook/preview.js-generated-config-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          parameters: function () {
            return parameters;
          },
        });
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        esm = __webpack_require__(
          './node_modules/@storybook/client-logger/dist/esm/index.js'
        ),
        CssBaseline = __webpack_require__(
          './node_modules/@mui/material/CssBaseline/CssBaseline.js'
        ),
        createTheme = __webpack_require__(
          './node_modules/@mui/material/styles/createTheme.js'
        ),
        ThemeProvider = __webpack_require__(
          './node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js'
        ),
        dist = __webpack_require__(
          './node_modules/@react-theming/storybook-addon/dist/index.js'
        ),
        client = __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ),
        formik_esm = __webpack_require__(
          './node_modules/formik/dist/formik.esm.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        es = __webpack_require__('./node_modules/react-redux/es/index.js'),
        react_router_dom = __webpack_require__(
          './node_modules/react-router-dom/index.js'
        ),
        contexts = __webpack_require__('./src/contexts/index.ts'),
        redux = __webpack_require__('./node_modules/redux/es/redux.js'),
        redux_thunk_es = __webpack_require__(
          './node_modules/redux-thunk/es/index.js'
        ),
        reducer = __webpack_require__('./src/redux/data/reducer.ts'),
        page_reducer = __webpack_require__('./src/redux/page/reducer.ts'),
        theme_reducer = __webpack_require__('./src/redux/theme/reducer.ts'),
        redux_reducer = (0, redux.UY)({
          theme: theme_reducer.x,
          page: page_reducer.k,
          data: reducer.I,
        }),
        redux_store = (0, redux.MT)(
          redux_reducer,
          (0, redux.md)(redux_thunk_es.Z)
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        createPalette = __webpack_require__(
          './node_modules/@mui/material/styles/createPalette.js'
        ),
        defineProperty = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        colorManipulator = __webpack_require__(
          './node_modules/@mui/system/esm/colorManipulator.js'
        ),
        getBaseTheme =
          (__webpack_require__('./node_modules/@mui/material/colors/grey.js')
            .Z[800],
          function getBaseTheme(palette) {
            var baseTheme = (0, createTheme.Z)({ palette: palette });
            return (0, createTheme.Z)(
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, baseTheme),
                {},
                {
                  mixins: { toolbar: { minHeight: 48 } },
                  components: {
                    MuiButton: {
                      styleOverrides: {
                        root: { textTransform: 'none' },
                        contained: {
                          boxShadow: 'none',
                          '&:active': { boxShadow: 'none' },
                        },
                        sizeMedium: (0, defineProperty.Z)(
                          {},
                          baseTheme.breakpoints.down('sm'),
                          { height: 32 }
                        ),
                        containedInherit: {
                          backgroundColor: (0, colorManipulator._j)(
                            palette.background.paper,
                            0.1
                          ),
                          '&:hover': {
                            backgroundColor: (0, colorManipulator._j)(
                              palette.background.paper,
                              0.18
                            ),
                            boxShadow: 'none',
                          },
                        },
                      },
                    },
                    MuiTabs: {
                      styleOverrides: {
                        root: { marginLeft: baseTheme.spacing(1) },
                        indicator: {
                          height: 3,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                          backgroundColor: palette.common.white,
                        },
                      },
                    },
                    MuiTab: {
                      styleOverrides: {
                        root: (0, defineProperty.Z)(
                          {
                            textTransform: 'none',
                            margin: '0 16px',
                            minWidth: 0,
                            padding: 0,
                          },
                          baseTheme.breakpoints.up('md'),
                          { padding: 0, minWidth: 0 }
                        ),
                      },
                    },
                    MuiIconButton: {
                      styleOverrides: {
                        root: {
                          padding: baseTheme.spacing(1),
                          color: palette.text.primary,
                          '&.Mui-disabled': { color: palette.text.disabled },
                          '&:hover': {
                            backgroundColor: (0, colorManipulator.Fq)(
                              palette.text.primary,
                              0.1
                            ),
                          },
                        },
                      },
                    },
                    MuiDivider: {
                      styleOverrides: {
                        root: {
                          backgroundColor: (0, colorManipulator.Fq)(
                            palette.background.paper,
                            0.15
                          ),
                        },
                      },
                    },
                    MuiListItemButton: {
                      styleOverrides: {
                        root: {
                          '&.Mui-selected': { color: palette.primary.main },
                        },
                      },
                    },
                    MuiListItemText: {
                      styleOverrides: {
                        primary: {
                          fontSize: 14,
                          fontWeight: baseTheme.typography.fontWeightMedium,
                        },
                      },
                    },
                    MuiListItemIcon: {
                      styleOverrides: {
                        root: {
                          color: 'inherit',
                          minWidth: 'auto',
                          marginRight: baseTheme.spacing(2),
                          '& svg': { fontSize: 20 },
                        },
                      },
                    },
                    MuiAvatar: {
                      styleOverrides: { root: { width: 32, height: 32 } },
                    },
                    MuiCard: {
                      styleOverrides: {
                        root: {
                          boxShadow: 'none',
                          border: '1px solid '.concat(
                            (0, colorManipulator.Fq)(
                              palette.text.secondary,
                              0.2
                            )
                          ),
                        },
                      },
                    },
                    MuiCardHeader: {
                      styleOverrides: {
                        root: {
                          paddingLeft: baseTheme.spacing(3),
                          paddingRight: baseTheme.spacing(3),
                        },
                        title: (0, defineProperty.Z)(
                          { fontSize: 20 },
                          baseTheme.breakpoints.down('sm'),
                          { fontSize: 16, fontWeight: 'bold' }
                        ),
                      },
                    },
                    MuiCardContent: {
                      styleOverrides: {
                        root: {
                          paddingLeft: baseTheme.spacing(3),
                          paddingRight: baseTheme.spacing(3),
                        },
                      },
                    },
                    MuiInputLabel: {
                      styleOverrides: {
                        root: { fontSize: 14 },
                        asterisk: { color: palette.error.main },
                      },
                    },
                    MuiTableCell: {
                      styleOverrides: {
                        root: {
                          borderBottom: '1px solid '.concat(
                            (0, colorManipulator.Fq)(palette.text.primary, 0.1)
                          ),
                        },
                      },
                    },
                    MuiAppBar: {
                      styleOverrides: {
                        root: {
                          backgroundColor: palette.background.paper,
                          color: palette.text.primary,
                        },
                      },
                    },
                    MuiInputAdornment: {
                      styleOverrides: { root: { color: palette.text.primary } },
                    },
                    MuiSvgIcon: {
                      styleOverrides: {
                        colorAction: { color: palette.text.primary },
                      },
                    },
                    MuiSelect: {
                      styleOverrides: {
                        icon: { color: palette.text.secondary },
                      },
                    },
                    MuiTextField: {
                      defaultProps: {
                        variant: 'outlined',
                        size: 'small',
                        fullWidth: !0,
                      },
                    },
                    MuiInputBase: {
                      styleOverrides: { input: { fontSize: 14 } },
                    },
                    MuiOutlinedInput: {
                      styleOverrides: {
                        root: {
                          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                            borderColor: (0, colorManipulator.Fq)(
                              palette.text.disabled,
                              0.1
                            ),
                          },
                        },
                        notchedOutline: {
                          borderColor: (0, colorManipulator.Fq)(
                            palette.text.primary,
                            0.2
                          ),
                        },
                        input: { height: 'auto' },
                      },
                    },
                  },
                }
              )
            );
          }),
        lightThemePalatte = (0, createPalette.ZP)({}),
        lightTheme = (0, createTheme.Z)(
          (0, objectSpread2.Z)({}, getBaseTheme(lightThemePalatte))
        ),
        palette = (0, createPalette.ZP)(
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, lightThemePalatte),
            {},
            {
              background: { default: '#161B22', paper: '#161B22' },
              text: {
                disabled: (0, colorManipulator.Fq)(
                  (0, colorManipulator._j)('#fff', 0.15),
                  0.38
                ),
                primary: (0, colorManipulator.Fq)(
                  (0, colorManipulator._j)('#fff', 0.15),
                  0.87
                ),
                secondary: (0, colorManipulator.Fq)(
                  (0, colorManipulator._j)('#fff', 0.15),
                  0.6
                ),
              },
              error: {
                main: (0, colorManipulator.$n)(
                  lightThemePalatte.error.main,
                  0.5
                ),
              },
              divider: (0, colorManipulator.Fq)('#fff', 0.12),
              mode: 'dark',
            }
          )
        ),
        baseTheme = getBaseTheme(palette),
        darkTheme = (0, createTheme.Z)(
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, baseTheme),
            {},
            {
              palette: palette,
              components: (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, baseTheme.components),
                {},
                {
                  MuiCssBaseline: {
                    styleOverrides: {
                      body: {
                        backgroundColor: '#0D1117',
                        color: palette.text.primary,
                      },
                    },
                  },
                  MuiDrawer: {
                    styleOverrides: {
                      paper: { backgroundColor: palette.background.paper },
                    },
                  },
                }
              ),
            }
          )
        ),
        defaultTheme = lightTheme,
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      (0, client.addDecorator)(
        (0, dist.withThemes)(
          null,
          [
            { name: 'Light Theme', theme: defaultTheme },
            { name: 'Dark Theme', theme: darkTheme },
          ],
          {
            providerFn: function providerFn(_ref) {
              var theme = _ref.theme.theme,
                children = _ref.children,
                serialTheme = JSON.parse(JSON.stringify(theme)),
                muiTheme = (0, createTheme.Z)(serialTheme);
              return (
                (0, react.useEffect)(function () {
                  var interval = setInterval(function () {
                    var _document$querySelect;
                    null ===
                      (_document$querySelect = document.querySelector(
                        '#addon-backgrounds-color'
                      )) ||
                      void 0 === _document$querySelect ||
                      _document$querySelect.remove();
                  }, 500);
                  return function () {
                    clearInterval(interval);
                  };
                }, []),
                (0, jsx_runtime.jsx)(react_router_dom.VK, {
                  children: (0, jsx_runtime.jsx)(contexts.EF, {
                    children: (0, jsx_runtime.jsx)(contexts.un, {
                      children: (0, jsx_runtime.jsx)(es.zt, {
                        store: redux_store,
                        children: (0, jsx_runtime.jsxs)(ThemeProvider.Z, {
                          theme: muiTheme,
                          children: [
                            (0, jsx_runtime.jsx)(CssBaseline.ZP, {}),
                            (0, jsx_runtime.jsx)(formik_esm.J9, {
                              children: children,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                })
              );
            },
          }
        )
      );
      var parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
          matchers: { color: /(background|color)$/i, date: /Date$/ },
        },
        docs: { source: { type: 'code' } },
        layout: 'fullscreen',
      };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.kg.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case 'render':
            return (0, ClientApi.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './src/components/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        jq: function () {
          return CurrencyInputField;
        },
        O1: function () {
          return DataDropdownField;
        },
        f_: function () {
          return DateInputField;
        },
        w3: function () {
          return FieldValueDisplay;
        },
        Tv: function () {
          return FileInputField;
        },
        bA: function () {
          return FileUploader;
        },
        m6: function () {
          return ImageSelector;
        },
        mj: function () {
          return KanbanBoard;
        },
        zu: function () {
          return NumberInputField;
        },
        xV: function () {
          return PhoneNumberInputField;
        },
        iA: function () {
          return components_Table_Table;
        },
        nv: function () {
          return InputFields_TextField_TextField;
        },
      });
      var asyncToGenerator = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        regenerator = __webpack_require__(
          './node_modules/@babel/runtime/regenerator/index.js'
        ),
        regenerator_default = __webpack_require__.n(regenerator),
        objectSpread2 = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        createClass =
          (__webpack_require__('./node_modules/axios/index.js'),
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/createClass.js'
          )),
        classCallCheck = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
        ),
        inherits = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/inherits.js'
        ),
        createSuper = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/createSuper.js'
        ),
        StorageManager =
          (Error, __webpack_require__('./src/utils/StorageManager.ts')),
        object_hash = __webpack_require__(
          './node_modules/object-hash/dist/object_hash.js'
        ),
        object_hash_default = __webpack_require__.n(object_hash),
        defaultRequestHeaders = (window.location.origin, {}),
        cachedDefaultRequestHeaders = StorageManager.Z.get(
          'defaultRequestHeaders'
        );
      cachedDefaultRequestHeaders &&
        Object.assign(defaultRequestHeaders, cachedDefaultRequestHeaders);
      StorageManager.Z.get('user');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        AuthGuard = function AuthGuard(_ref) {
          var variant = _ref.variant,
            location = useLocation();
          switch (variant) {
            case 'PROTECTED':
              if (!Auth.isAuthenticated()) {
                var redirectConfig = { pathname: LOGIN_ROUTE_PATH };
                return (
                  location.pathname.length > 1 &&
                    (redirectConfig.search = '?return_to='.concat(
                      location.pathname
                    )),
                  _jsx(Navigate, {
                    to: redirectConfig,
                    state: { from: location },
                  })
                );
              }
              break;
            case 'PUBLIC_ONLY':
              if (Auth.isAuthenticated())
                return _jsx(Navigate, {
                  to: INDEX_ROUTE_PATH,
                  state: { from: location },
                });
          }
          return _jsx(Outlet, {});
        };
      try {
        (AuthGuard.displayName = 'AuthGuard'),
          (AuthGuard.__docgenInfo = {
            description: '',
            displayName: 'AuthGuard',
            props: {
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"PROTECTED"' },
                    { value: '"PUBLIC_ONLY"' },
                    { value: '"PUBLIC"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/AuthGuard.tsx#AuthGuard'] =
              {
                docgenInfo: AuthGuard.__docgenInfo,
                name: 'AuthGuard',
                path: 'src/components/AuthGuard.tsx#AuthGuard',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      var Card_Card = __webpack_require__(
          './node_modules/@mui/material/Card/Card.js'
        ),
        CardHeader_CardHeader = __webpack_require__(
          './node_modules/@mui/material/CardHeader/CardHeader.js'
        ),
        Skeleton_Skeleton = __webpack_require__(
          './node_modules/@mui/material/Skeleton/Skeleton.js'
        ),
        CardContent = __webpack_require__(
          './node_modules/@mui/material/CardContent/CardContent.js'
        ),
        toConsumableArray = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        formik_esm = __webpack_require__(
          './node_modules/formik/dist/formik.esm.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        defineProperty = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        styles_useTheme = __webpack_require__(
          './node_modules/@mui/material/styles/useTheme.js'
        ),
        useMediaQuery_useMediaQuery = __webpack_require__(
          './node_modules/@mui/material/useMediaQuery/useMediaQuery.js'
        ),
        es = __webpack_require__('./node_modules/react-redux/es/index.js'),
        contexts = __webpack_require__('./src/contexts/index.ts'),
        types = __webpack_require__('./src/redux/data/types.ts'),
        updateData = function updateData(payload) {
          return { type: types.X, payload: payload };
        },
        useAPIService =
          (__webpack_require__('./src/redux/data/reducer.ts'),
          __webpack_require__('./src/redux/page/reducer.ts'),
          __webpack_require__('./src/redux/theme/reducer.ts'),
          function useAPIService(defautValue, key) {
            var data = (0, es.v9)(function (state) {
              return state.data;
            });
            key && data[key] && (defautValue = data[key]);
            var call = (0, react.useContext)(contexts.ye).call,
              _useState = (0, react.useState)(defautValue),
              _useState2 = (0, slicedToArray.Z)(_useState, 2),
              record = _useState2[0],
              setRecord = _useState2[1],
              _useState3 = (0, react.useState)(!1),
              _useState4 = (0, slicedToArray.Z)(_useState3, 2),
              loaded = _useState4[0],
              setLoaded = _useState4[1],
              _useState5 = (0, react.useState)(!1),
              _useState6 = (0, slicedToArray.Z)(_useState5, 2),
              loading = _useState6[0],
              setLoading = _useState6[1],
              _useState7 = (0, react.useState)(''),
              _useState8 = (0, slicedToArray.Z)(_useState7, 2),
              errorMessage = _useState8[0],
              setErrorMessage = _useState8[1],
              dispatch = (0, es.I0)(),
              isComponentMountedRef = (0, react.useRef)(!0);
            (0, react.useEffect)(
              function () {
                key &&
                  data[key] &&
                  isComponentMountedRef.current &&
                  setRecord(data[key]);
              },
              [data, key]
            );
            var load = (0, react.useCallback)(
              (function () {
                var _ref = (0, asyncToGenerator.Z)(
                  regenerator_default().mark(function _callee(apiFunction) {
                    var _data;
                    return regenerator_default().wrap(function _callee$(
                      _context
                    ) {
                      for (;;)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            if (!apiFunction) {
                              _context.next = 9;
                              break;
                            }
                            return (
                              setErrorMessage(''),
                              setLoaded(!1),
                              setLoading(!0),
                              (_context.next = 6),
                              call(function () {
                                return apiFunction();
                              }).catch(function (err) {
                                setErrorMessage(err.message);
                              })
                            );
                          case 6:
                            (_data = _context.sent) &&
                              (isComponentMountedRef.current &&
                                (setRecord(_data), setLoaded(!0)),
                              key &&
                                dispatch(
                                  updateData(
                                    (0, defineProperty.Z)({}, key, _data)
                                  )
                                )),
                              isComponentMountedRef.current && setLoading(!1);
                          case 9:
                          case 'end':
                            return _context.stop();
                        }
                    },
                    _callee);
                  })
                );
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              })(),
              [call, key, dispatch]
            );
            return (
              (0, react.useEffect)(function () {
                return function () {
                  isComponentMountedRef.current = !1;
                };
              }, []),
              {
                errorMessage: errorMessage,
                load: load,
                loaded: loaded,
                loading: loading,
                record: record,
                setLoaded: setLoaded,
                setRecord: setRecord,
              }
            );
          }),
        utils_useLoadingContext = function useLoadingContext() {
          return (0, react.useContext)(contexts.pV);
        },
        useFormikValue = function useFormikValue(_ref2) {
          var _value,
            value = _ref2.value,
            name = _ref2.name,
            values = ((0, formik_esm.u6)() || {}).values;
          return null !== (_value = value) && void 0 !== _value
            ? _value
            : (value = (function () {
                if (values && name && null != values[name]) return values[name];
              })());
        },
        utils_useSmallScreen = function useSmallScreen() {
          var theme = (0, styles_useTheme.Z)();
          return (0, useMediaQuery_useMediaQuery.Z)(
            theme.breakpoints.down('sm')
          );
        },
        colorManipulator = __webpack_require__(
          './node_modules/@mui/system/esm/colorManipulator.js'
        ),
        ErrorSkeleton_excluded = ['sx'],
        ErrorSkeleton_ErrorSkeleton = function ErrorSkeleton(_ref) {
          var sx = _ref.sx,
            rest = (0, objectWithoutProperties.Z)(_ref, ErrorSkeleton_excluded),
            theme = (0, styles_useTheme.Z)();
          return (0, jsx_runtime.jsx)(
            Skeleton_Skeleton.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {
                  sx: (0, objectSpread2.Z)(
                    {
                      bgcolor: (0, colorManipulator.Fq)(
                        theme.palette.text.disabled,
                        0.05
                      ),
                    },
                    sx
                  ),
                },
                rest
              ),
              {},
              { animation: !1 }
            )
          );
        },
        components_ErrorSkeleton = ErrorSkeleton_ErrorSkeleton;
      try {
        (ErrorSkeleton_ErrorSkeleton.displayName = 'ErrorSkeleton'),
          (ErrorSkeleton_ErrorSkeleton.__docgenInfo = {
            description: '',
            displayName: 'ErrorSkeleton',
            props: {
              animation: {
                defaultValue: { value: "'pulse'" },
                description:
                  'The animation.\nIf `false` the animation effect is disabled.',
                name: 'animation',
                required: !1,
                type: { name: 'false | "pulse" | "wave"' },
              },
              children: {
                defaultValue: null,
                description:
                  'Optional children to infer width and height from.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<SkeletonClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              height: {
                defaultValue: null,
                description:
                  "Height of the skeleton.\nUseful when you don't want to adapt the skeleton to a text element but for instance a card.",
                name: 'height',
                required: !1,
                type: { name: 'string | number' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              variant: {
                defaultValue: { value: "'text'" },
                description: 'The type of content that will be rendered.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"text"' },
                    { value: '"rectangular"' },
                    { value: '"circular"' },
                  ],
                },
              },
              width: {
                defaultValue: null,
                description:
                  'Width of the skeleton.\nUseful when the skeleton is inside an inline element with no width of its own.',
                name: 'width',
                required: !1,
                type: { name: 'string | number' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ErrorSkeleton.tsx#ErrorSkeleton'
            ] = {
              docgenInfo: ErrorSkeleton_ErrorSkeleton.__docgenInfo,
              name: 'ErrorSkeleton',
              path: 'src/components/ErrorSkeleton.tsx#ErrorSkeleton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Card_excluded = [
          'children',
          'title',
          'CardHeaderProps',
          'CardContentProps',
        ],
        Card_excluded2 = ['sx'],
        Card_excluded3 = ['sx'],
        components_Card_Card = function Card(_ref) {
          var titleSkeletonWidth,
            children = _ref.children,
            title = _ref.title,
            _ref$CardHeaderProps = _ref.CardHeaderProps,
            CardHeaderProps =
              void 0 === _ref$CardHeaderProps ? {} : _ref$CardHeaderProps,
            _ref$CardContentProps = _ref.CardContentProps,
            CardContentProps =
              void 0 === _ref$CardContentProps ? {} : _ref$CardContentProps,
            rest = (0, objectWithoutProperties.Z)(_ref, Card_excluded),
            _useLoadingContext = utils_useLoadingContext(),
            loading = _useLoadingContext.loading,
            errorMessage = _useLoadingContext.errorMessage,
            smallScreen = utils_useSmallScreen(),
            sxCardHeaderProps = CardHeaderProps.sx,
            restCardHeaderProps = (0, objectWithoutProperties.Z)(
              CardHeaderProps,
              Card_excluded2
            ),
            sxCardContentProps = CardContentProps.sx,
            restCardContentProps = (0, objectWithoutProperties.Z)(
              CardContentProps,
              Card_excluded3
            );
          return (0, jsx_runtime.jsxs)(
            Card_Card.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, rest),
              {},
              {
                children: [
                  title &&
                    (0, jsx_runtime.jsx)(
                      CardHeader_CardHeader.Z,
                      (0, objectSpread2.Z)(
                        (0, objectSpread2.Z)({}, restCardHeaderProps),
                        {},
                        {
                          title:
                            ((titleSkeletonWidth =
                              'string' == typeof title ? 10 * title.length : 0),
                            errorMessage
                              ? (0, jsx_runtime.jsx)(components_ErrorSkeleton, {
                                  sx: { width: titleSkeletonWidth },
                                })
                              : loading
                              ? (0, jsx_runtime.jsx)(Skeleton_Skeleton.Z, {
                                  sx: { width: titleSkeletonWidth },
                                })
                              : title),
                          sx: (0, objectSpread2.Z)(
                            { px: smallScreen ? 2 : 3 },
                            sxCardHeaderProps
                          ),
                        }
                      )
                    ),
                  (0, jsx_runtime.jsx)(
                    CardContent.Z,
                    (0, objectSpread2.Z)(
                      (0, objectSpread2.Z)({}, restCardContentProps),
                      {},
                      {
                        sx: (0, objectSpread2.Z)(
                          { p: smallScreen ? 2 : 3 },
                          sxCardContentProps
                        ),
                        children: children,
                      }
                    )
                  ),
                ],
              }
            )
          );
        },
        components_Card = components_Card_Card;
      try {
        (components_Card_Card.displayName = 'Card'),
          (components_Card_Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'ReactNode' },
              },
              CardHeaderProps: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'CardHeaderProps',
                required: !1,
                type: { name: 'CardHeaderProps<"div", {}, "span", "span">' },
              },
              CardContentProps: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'CardContentProps',
                required: !1,
                type: { name: 'CardContentProps<"div", {}>' },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              variant: {
                defaultValue: { value: "'elevation'" },
                description: 'The variant to use.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outlined"' }, { value: '"elevation"' }],
                },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<CardClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
              elevation: {
                defaultValue: { value: '1' },
                description:
                  'Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.',
                name: 'elevation',
                required: !1,
                type: { name: 'number' },
              },
              square: {
                defaultValue: { value: 'false' },
                description: 'If `true`, rounded corners are disabled.',
                name: 'square',
                required: !1,
                type: { name: 'boolean' },
              },
              raised: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the card will use raised styling.',
                name: 'raised',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Card.tsx#Card'] = {
              docgenInfo: components_Card_Card.__docgenInfo,
              name: 'Card',
              path: 'src/components/Card.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var PaddedContentArea_PaddedContentArea = function PaddedContentArea(
        _ref
      ) {
        var children = _ref.children,
          title = _ref.title,
          sx = _ref.sx,
          tools = _ref.tools,
          rest = _objectWithoutProperties(_ref, null),
          theme = useTheme(),
          smallScreenBreakpoint = theme.breakpoints.down('sm'),
          largeScreen = useMediaQuery(theme.breakpoints.up('sm'));
        return _jsxs(
          Container,
          _objectSpread(
            _objectSpread({ component: 'main' }, rest),
            {},
            {
              sx: _objectSpread(
                _defineProperty({ flex: 1, p: 3 }, smallScreenBreakpoint, {
                  p: 2,
                }),
                sx
              ),
              children: [
                ((title && largeScreen) || tools) &&
                  _jsxs(Grid, {
                    container: !0,
                    spacing: 1,
                    sx: _defineProperty(
                      { mb: 3, alignItems: 'center' },
                      smallScreenBreakpoint,
                      { mb: 2, justifyContent: 'end' }
                    ),
                    children: [
                      largeScreen &&
                        title &&
                        _jsx(Grid, {
                          item: !0,
                          xs: !0,
                          sx: _defineProperty(
                            { minWidth: 0 },
                            smallScreenBreakpoint,
                            { mb: 1 }
                          ),
                          children: _jsx(Typography, {
                            variant: 'h3',
                            sx: _defineProperty(
                              { fontSize: 28 },
                              theme.breakpoints.down('md'),
                              { fontSize: 18 }
                            ),
                            noWrap: !0,
                            children: title,
                          }),
                        }),
                      (function () {
                        if (tools)
                          return Children.toArray(tools).map(function (
                            tool,
                            index
                          ) {
                            return _jsx(
                              Grid,
                              { item: !0, sx: { minWidth: 0 }, children: tool },
                              index
                            );
                          });
                      })(),
                    ],
                  }),
                children,
              ],
            }
          )
        );
      };
      try {
        (PaddedContentArea_PaddedContentArea.displayName = 'PaddedContentArea'),
          (PaddedContentArea_PaddedContentArea.__docgenInfo = {
            description: '',
            displayName: 'PaddedContentArea',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              tools: {
                defaultValue: null,
                description: '',
                name: 'tools',
                required: !1,
                type: { name: 'ReactNode | ReactNode[]' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ContainerClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              disableGutters: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the left and right padding is removed.',
                name: 'disableGutters',
                required: !1,
                type: { name: 'boolean' },
              },
              fixed: {
                defaultValue: { value: 'false' },
                description:
                  "Set the max-width to match the min-width of the current breakpoint.\nThis is useful if you'd prefer to design for a fixed set of sizes\ninstead of trying to accommodate a fully fluid viewport.\nIt's fluid by default.",
                name: 'fixed',
                required: !1,
                type: { name: 'boolean' },
              },
              maxWidth: {
                defaultValue: { value: "'lg'" },
                description:
                  'Determine the max-width of the container.\nThe container width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.',
                name: 'maxWidth',
                required: !1,
                type: { name: 'false | Breakpoint' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/PaddedContentArea.tsx#PaddedContentArea'
            ] = {
              docgenInfo: PaddedContentArea_PaddedContentArea.__docgenInfo,
              name: 'PaddedContentArea',
              path: 'src/components/PaddedContentArea.tsx#PaddedContentArea',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var EntityViewWrapper = function EntityViewWrapper(_ref) {
        var children = _ref.children,
          title = _ref.title,
          pathToEdit = _ref.pathToEdit,
          tools = _ref.tools,
          toolsList = [];
        return (
          pathToEdit &&
            toolsList.push(
              _jsx(Button, {
                color: 'primary',
                variant: 'contained',
                size: 'small',
                startIcon: _jsx(EditIcon, {}),
                component: Link,
                to: pathToEdit,
                children: 'Edit',
              })
            ),
          tools && toolsList.push(tools),
          _jsx(PaddedContentArea, {
            title: title,
            tools: toolsList,
            children: children,
          })
        );
      };
      try {
        (EntityViewWrapper.displayName = 'EntityViewWrapper'),
          (EntityViewWrapper.__docgenInfo = {
            description: '',
            displayName: 'EntityViewWrapper',
            props: {
              pathToEdit: {
                defaultValue: null,
                description: '',
                name: 'pathToEdit',
                required: !1,
                type: { name: 'string' },
              },
              tools: {
                defaultValue: null,
                description: '',
                name: 'tools',
                required: !1,
                type: { name: 'ReactNode' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ContainerClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              disableGutters: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the left and right padding is removed.',
                name: 'disableGutters',
                required: !1,
                type: { name: 'boolean' },
              },
              fixed: {
                defaultValue: { value: 'false' },
                description:
                  "Set the max-width to match the min-width of the current breakpoint.\nThis is useful if you'd prefer to design for a fixed set of sizes\ninstead of trying to accommodate a fully fluid viewport.\nIt's fluid by default.",
                name: 'fixed',
                required: !1,
                type: { name: 'boolean' },
              },
              maxWidth: {
                defaultValue: { value: "'lg'" },
                description:
                  'Determine the max-width of the container.\nThe container width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.',
                name: 'maxWidth',
                required: !1,
                type: { name: 'false | Breakpoint' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/EntityViewWrapper.tsx#EntityViewWrapper'
            ] = {
              docgenInfo: EntityViewWrapper.__docgenInfo,
              name: 'EntityViewWrapper',
              path: 'src/components/EntityViewWrapper.tsx#EntityViewWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Refresh = __webpack_require__(
          './node_modules/@mui/icons-material/Refresh.js'
        ),
        Tooltip = __webpack_require__(
          './node_modules/@mui/material/Tooltip/Tooltip.js'
        ),
        IconButton_IconButton = __webpack_require__(
          './node_modules/@mui/material/IconButton/IconButton.js'
        ),
        RetryErrorMessage_RetryErrorMessage = function RetryErrorMessage(_ref) {
          var message = _ref.message,
            retry = _ref.retry;
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              message,
              retry &&
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    ' ',
                    (0, jsx_runtime.jsx)(Tooltip.Z, {
                      title: 'Try again',
                      children: (0, jsx_runtime.jsx)(IconButton_IconButton.Z, {
                        onClick: function onClick() {
                          return retry();
                        },
                        size: 'small',
                        sx: { width: 12, height: 12 },
                        children: (0, jsx_runtime.jsx)(Refresh.Z, {
                          color: 'inherit',
                          sx: { display: 'block', width: 18, height: 18 },
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        components_RetryErrorMessage = RetryErrorMessage_RetryErrorMessage;
      try {
        (RetryErrorMessage_RetryErrorMessage.displayName = 'RetryErrorMessage'),
          (RetryErrorMessage_RetryErrorMessage.__docgenInfo = {
            description: '',
            displayName: 'RetryErrorMessage',
            props: {
              message: {
                defaultValue: null,
                description: '',
                name: 'message',
                required: !0,
                type: { name: 'string' },
              },
              retry: {
                defaultValue: null,
                description: '',
                name: 'retry',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/RetryErrorMessage.tsx#RetryErrorMessage'
            ] = {
              docgenInfo: RetryErrorMessage_RetryErrorMessage.__docgenInfo,
              name: 'RetryErrorMessage',
              path: 'src/components/RetryErrorMessage.tsx#RetryErrorMessage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ErrorAlert_ErrorAlert = function ErrorAlert(_ref) {
        var message = _ref.message,
          retry = _ref.retry;
        return _jsx(Alert, {
          severity: 'error',
          sx: { width: '100%', boxSizing: 'border-box' },
          children: _jsx(RetryErrorMessage, { message: message, retry: retry }),
        });
      };
      try {
        (ErrorAlert_ErrorAlert.displayName = 'ErrorAlert'),
          (ErrorAlert_ErrorAlert.__docgenInfo = {
            description: '',
            displayName: 'ErrorAlert',
            props: {
              message: {
                defaultValue: null,
                description: '',
                name: 'message',
                required: !0,
                type: { name: 'string' },
              },
              retry: {
                defaultValue: null,
                description: '',
                name: 'retry',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ErrorAlert.tsx#ErrorAlert'
            ] = {
              docgenInfo: ErrorAlert_ErrorAlert.__docgenInfo,
              name: 'ErrorAlert',
              path: 'src/components/ErrorAlert.tsx#ErrorAlert',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__('./node_modules/process/browser.js').env
        .REACT_APP_NAME;
      var ErrorFieldHighlighter_ErrorFieldHighlighter =
        function ErrorFieldHighlighter(_ref) {
          var children = _ref.children,
            _useFormikContext = useFormikContext(),
            isValid = _useFormikContext.isValid,
            submitCount = _useFormikContext.submitCount;
          return (
            useEffect(
              function () {
                if (submitCount > 0 && !isValid) {
                  var _fieldsWithError$,
                    fieldsWithError = document.querySelectorAll('.Mui-error');
                  null === (_fieldsWithError$ = fieldsWithError[0]) ||
                    void 0 === _fieldsWithError$ ||
                    _fieldsWithError$.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    }),
                    fieldsWithError.forEach(function (field) {
                      return flickerElement(field);
                    });
                }
              },
              [isValid, submitCount]
            ),
            _jsx(_Fragment, { children: children })
          );
        };
      try {
        (ErrorFieldHighlighter_ErrorFieldHighlighter.displayName =
          'ErrorFieldHighlighter'),
          (ErrorFieldHighlighter_ErrorFieldHighlighter.__docgenInfo = {
            description: '',
            displayName: 'ErrorFieldHighlighter',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ErrorFieldHighlighter.tsx#ErrorFieldHighlighter'
            ] = {
              docgenInfo:
                ErrorFieldHighlighter_ErrorFieldHighlighter.__docgenInfo,
              name: 'ErrorFieldHighlighter',
              path: 'src/components/ErrorFieldHighlighter.tsx#ErrorFieldHighlighter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Typography_Typography = __webpack_require__(
          './node_modules/@mui/material/Typography/Typography.js'
        ),
        FieldLabel_excluded = ['children', 'sx'],
        FieldLabel_FieldLabel = function FieldLabel(_ref) {
          var children = _ref.children,
            sx = _ref.sx,
            rest = (0, objectWithoutProperties.Z)(_ref, FieldLabel_excluded);
          return (0, jsx_runtime.jsx)(
            Typography_Typography.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({ variant: 'body2', noWrap: !0 }, rest),
              {},
              {
                sx: (0, objectSpread2.Z)({ fontWeight: 'bold' }, sx),
                children: children,
              }
            )
          );
        },
        components_FieldLabel = FieldLabel_FieldLabel;
      try {
        (FieldLabel_FieldLabel.displayName = 'FieldLabel'),
          (FieldLabel_FieldLabel.__docgenInfo = {
            description: '',
            displayName: 'FieldLabel',
            props: {
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Color | Color[]> | ((theme: Theme) => ResponsiveStyleValue<Color | Color[]>)',
                },
              },
              margin: {
                defaultValue: null,
                description: '',
                name: 'margin',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | Margin<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Margin<string | number> | Margin<...>[]>)',
                },
              },
              p: {
                defaultValue: null,
                description: '',
                name: 'p',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | Padding<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Padding<string | number> | Padding<...>[]>)',
                },
              },
              maxWidth: {
                defaultValue: null,
                description: '',
                name: 'maxWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxWidth<string | number> | MaxWidth<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<MaxWidth<...> | MaxWidth<...>[]>)',
                },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | "hidden" | "inherit" | "none" | (string & {}) | "medium" | "inset" | "-moz-initial" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | ... 183 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              boxShadow: {
                defaultValue: null,
                description: '',
                name: 'boxShadow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)',
                },
              },
              fontWeight: {
                defaultValue: null,
                description: '',
                name: 'fontWeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              zIndex: {
                defaultValue: null,
                description: '',
                name: 'zIndex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)',
                },
              },
              alignContent: {
                defaultValue: null,
                description: '',
                name: 'alignContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<AlignContent | AlignContent[]> | ((theme: Theme) => ResponsiveStyleValue<AlignContent | AlignContent[]>)',
                },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<AlignItems | AlignItems[]> | ((theme: Theme) => ResponsiveStyleValue<AlignItems | AlignItems[]>)',
                },
              },
              alignSelf: {
                defaultValue: null,
                description: '',
                name: 'alignSelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<AlignSelf | AlignSelf[]> | ((theme: Theme) => ResponsiveStyleValue<AlignSelf | AlignSelf[]>)',
                },
              },
              bottom: {
                defaultValue: null,
                description: '',
                name: 'bottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Bottom<string | number> | Bottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Bottom<string | number> | Bottom<...>[]>)',
                },
              },
              boxSizing: {
                defaultValue: null,
                description: '',
                name: 'boxSizing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BoxSizing | BoxSizing[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | BoxSizing[]>)',
                },
              },
              columnGap: {
                defaultValue: null,
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<ColumnGap<string | number> | ColumnGap<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              display: {
                defaultValue: null,
                description: '',
                name: 'display',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Display | Display[]> | ((theme: Theme) => ResponsiveStyleValue<Display | Display[]>)',
                },
              },
              flexBasis: {
                defaultValue: null,
                description: '',
                name: 'flexBasis',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexBasis<string | number> | FlexBasis<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flexDirection: {
                defaultValue: null,
                description: '',
                name: 'flexDirection',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexDirection | FlexDirection[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | FlexDirection[]>)',
                },
              },
              flexGrow: {
                defaultValue: null,
                description: '',
                name: 'flexGrow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexGrow | FlexGrow[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | FlexGrow[]>)',
                },
              },
              flexShrink: {
                defaultValue: null,
                description: '',
                name: 'flexShrink',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexShrink | FlexShrink[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | FlexShrink[]>)',
                },
              },
              flexWrap: {
                defaultValue: null,
                description: '',
                name: 'flexWrap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FlexWrap | FlexWrap[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | FlexWrap[]>)',
                },
              },
              fontFamily: {
                defaultValue: null,
                description: '',
                name: 'fontFamily',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontFamily | FontFamily[]> | ((theme: Theme) => ResponsiveStyleValue<FontFamily | FontFamily[]>)',
                },
              },
              fontSize: {
                defaultValue: null,
                description: '',
                name: 'fontSize',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontSize<string | number> | FontSize<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<FontSize<...> | FontSize<...>[]>)',
                },
              },
              fontStyle: {
                defaultValue: null,
                description: '',
                name: 'fontStyle',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<FontStyle | FontStyle[]> | ((theme: Theme) => ResponsiveStyleValue<FontStyle | FontStyle[]>)',
                },
              },
              gridAutoColumns: {
                defaultValue: null,
                description: '',
                name: 'gridAutoColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoColumns<string | number> | GridAutoColumns<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridAutoFlow: {
                defaultValue: null,
                description: '',
                name: 'gridAutoFlow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoFlow | GridAutoFlow[]> | ((theme: Theme) => ResponsiveStyleValue<GridAutoFlow | GridAutoFlow[]>)',
                },
              },
              gridAutoRows: {
                defaultValue: null,
                description: '',
                name: 'gridAutoRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridAutoRows<string | number> | GridAutoRows<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateAreas: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateAreas',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateAreas | GridTemplateAreas[]> | ((theme: Theme) => ResponsiveStyleValue<GridTemplateAreas | GridTemplateAreas[]>)',
                },
              },
              gridTemplateColumns: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateColumns',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateColumns<string | number> | GridTemplateColumns<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              gridTemplateRows: {
                defaultValue: null,
                description: '',
                name: 'gridTemplateRows',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridTemplateRows<string | number> | GridTemplateRows<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Height<string | number> | Height<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Height<string | number> | Height<...>[]>)',
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<JustifyContent | JustifyContent[]> | ((theme: Theme) => ResponsiveStyleValue<JustifyContent | JustifyContent[]>)',
                },
              },
              justifyItems: {
                defaultValue: null,
                description: '',
                name: 'justifyItems',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<JustifyItems | JustifyItems[]> | ((theme: Theme) => ResponsiveStyleValue<JustifyItems | JustifyItems[]>)',
                },
              },
              justifySelf: {
                defaultValue: null,
                description: '',
                name: 'justifySelf',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<JustifySelf | JustifySelf[]> | ((theme: Theme) => ResponsiveStyleValue<JustifySelf | JustifySelf[]>)',
                },
              },
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Left<string | number> | Left<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<string | number> | Left<...>[]>)',
                },
              },
              letterSpacing: {
                defaultValue: null,
                description: '',
                name: 'letterSpacing',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LetterSpacing<string | number> | LetterSpacing<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<LineHeight<string | number> | LineHeight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginBottom: {
                defaultValue: null,
                description: '',
                name: 'marginBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | MarginBottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginLeft: {
                defaultValue: null,
                description: '',
                name: 'marginLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | MarginLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginRight: {
                defaultValue: null,
                description: '',
                name: 'marginRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | MarginRight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginTop: {
                defaultValue: null,
                description: '',
                name: 'marginTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | MarginTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              maxHeight: {
                defaultValue: null,
                description: '',
                name: 'maxHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MaxHeight<string | number> | MaxHeight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minHeight: {
                defaultValue: null,
                description: '',
                name: 'minHeight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinHeight<string | number> | MinHeight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              minWidth: {
                defaultValue: null,
                description: '',
                name: 'minWidth',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MinWidth<string | number> | MinWidth<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<MinWidth<...> | MinWidth<...>[]>)',
                },
              },
              order: {
                defaultValue: null,
                description: '',
                name: 'order',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Order | Order[]> | ((theme: Theme) => ResponsiveStyleValue<Order | Order[]>)',
                },
              },
              paddingBottom: {
                defaultValue: null,
                description: '',
                name: 'paddingBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | PaddingBottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingLeft: {
                defaultValue: null,
                description: '',
                name: 'paddingLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | PaddingLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingRight: {
                defaultValue: null,
                description: '',
                name: 'paddingRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | PaddingRight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingTop: {
                defaultValue: null,
                description: '',
                name: 'paddingTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | PaddingTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Position | Position[]> | ((theme: Theme) => ResponsiveStyleValue<Position | Position[]>)',
                },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Right<string | number> | Right<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Right<string | number> | Right<...>[]>)',
                },
              },
              rowGap: {
                defaultValue: null,
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<RowGap<string | number> | RowGap<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<RowGap<string | number> | RowGap<...>[]>)',
                },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextAlign | TextAlign[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | TextAlign[]>)',
                },
              },
              textOverflow: {
                defaultValue: null,
                description: '',
                name: 'textOverflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextOverflow | TextOverflow[]> | ((theme: Theme) => ResponsiveStyleValue<TextOverflow | TextOverflow[]>)',
                },
              },
              textTransform: {
                defaultValue: null,
                description: '',
                name: 'textTransform',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<TextTransform | TextTransform[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | TextTransform[]>)',
                },
              },
              top: {
                defaultValue: null,
                description: '',
                name: 'top',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Top<string | number> | Top<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | Top<...>[]>)',
                },
              },
              visibility: {
                defaultValue: null,
                description: '',
                name: 'visibility',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Visibility | Visibility[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | Visibility[]>)',
                },
              },
              whiteSpace: {
                defaultValue: null,
                description: '',
                name: 'whiteSpace',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<WhiteSpace | WhiteSpace[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | WhiteSpace[]>)',
                },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Width<string | number> | Width<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Width<string | number> | Width<...>[]>)',
                },
              },
              borderBottom: {
                defaultValue: null,
                description: '',
                name: 'borderBottom',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderBottom<string | number> | BorderBottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderColor: {
                defaultValue: null,
                description: '',
                name: 'borderColor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderColor | BorderColor[]> | ((theme: Theme) => ResponsiveStyleValue<BorderColor | BorderColor[]>)',
                },
              },
              borderLeft: {
                defaultValue: null,
                description: '',
                name: 'borderLeft',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderLeft<string | number> | BorderLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRadius<string | number> | BorderRadius<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderRight: {
                defaultValue: null,
                description: '',
                name: 'borderRight',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderRight<string | number> | BorderRight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              borderTop: {
                defaultValue: null,
                description: '',
                name: 'borderTop',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BorderTop<string | number> | BorderTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Flex<string | number> | Flex<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<string | number> | Flex<...>[]>)',
                },
              },
              gap: {
                defaultValue: null,
                description: '',
                name: 'gap',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Gap<string | number> | Gap<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | Gap<...>[]>)',
                },
              },
              gridArea: {
                defaultValue: null,
                description: '',
                name: 'gridArea',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridArea | GridArea[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | GridArea[]>)',
                },
              },
              gridColumn: {
                defaultValue: null,
                description: '',
                name: 'gridColumn',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridColumn | GridColumn[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | GridColumn[]>)',
                },
              },
              gridRow: {
                defaultValue: null,
                description: '',
                name: 'gridRow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<GridRow | GridRow[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | GridRow[]>)',
                },
              },
              overflow: {
                defaultValue: null,
                description: '',
                name: 'overflow',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Overflow | Overflow[]> | ((theme: Theme) => ResponsiveStyleValue<Overflow | Overflow[]>)',
                },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Padding<string | number> | Padding<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Padding<string | number> | Padding<...>[]>)',
                },
              },
              bgcolor: {
                defaultValue: null,
                description: '',
                name: 'bgcolor',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<BackgroundColor | BackgroundColor[]> | ((theme: Theme) => ResponsiveStyleValue<BackgroundColor | BackgroundColor[]>)',
                },
              },
              m: {
                defaultValue: null,
                description: '',
                name: 'm',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Margin<string | number> | Margin<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<Margin<string | number> | Margin<...>[]>)',
                },
              },
              mt: {
                defaultValue: null,
                description: '',
                name: 'mt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | MarginTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mr: {
                defaultValue: null,
                description: '',
                name: 'mr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginRight<string | number> | MarginRight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mb: {
                defaultValue: null,
                description: '',
                name: 'mb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginBottom<string | number> | MarginBottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              ml: {
                defaultValue: null,
                description: '',
                name: 'ml',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | MarginLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              mx: {
                defaultValue: null,
                description: '',
                name: 'mx',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | MarginLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginX: {
                defaultValue: null,
                description: '',
                name: 'marginX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginLeft<string | number> | MarginLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              my: {
                defaultValue: null,
                description: '',
                name: 'my',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | MarginTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              marginY: {
                defaultValue: null,
                description: '',
                name: 'marginY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<MarginTop<string | number> | MarginTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pt: {
                defaultValue: null,
                description: '',
                name: 'pt',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | PaddingTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pr: {
                defaultValue: null,
                description: '',
                name: 'pr',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingRight<string | number> | PaddingRight<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pb: {
                defaultValue: null,
                description: '',
                name: 'pb',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingBottom<string | number> | PaddingBottom<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              pl: {
                defaultValue: null,
                description: '',
                name: 'pl',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | PaddingLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              px: {
                defaultValue: null,
                description: '',
                name: 'px',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | PaddingLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingX: {
                defaultValue: null,
                description: '',
                name: 'paddingX',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingLeft<string | number> | PaddingLeft<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              py: {
                defaultValue: null,
                description: '',
                name: 'py',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | PaddingTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              paddingY: {
                defaultValue: null,
                description: '',
                name: 'paddingY',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<PaddingTop<string | number> | PaddingTop<string | number>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)',
                },
              },
              typography: {
                defaultValue: null,
                description: '',
                name: 'typography',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)',
                },
              },
              displayPrint: {
                defaultValue: null,
                description: '',
                name: 'displayPrint',
                required: !1,
                type: {
                  name: 'ResponsiveStyleValue<Display | Display[]> | ((theme: Theme) => ResponsiveStyleValue<Display | Display[]>)',
                },
              },
              align: {
                defaultValue: { value: "'inherit'" },
                description: 'Set the text-align on the component.',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"inherit"' },
                    { value: '"left"' },
                    { value: '"right"' },
                    { value: '"center"' },
                    { value: '"justify"' },
                  ],
                },
              },
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<TypographyClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              gutterBottom: {
                defaultValue: { value: 'false' },
                description: 'If `true`, the text will have a bottom margin.',
                name: 'gutterBottom',
                required: !1,
                type: { name: 'boolean' },
              },
              noWrap: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.\n\nNote that text overflow can only happen with block or inline-block level elements\n(the element needs to have a width in order to overflow).',
                name: 'noWrap',
                required: !1,
                type: { name: 'boolean' },
              },
              paragraph: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the element will be a paragraph element.',
                name: 'paragraph',
                required: !1,
                type: { name: 'boolean' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              variant: {
                defaultValue: { value: "'body1'" },
                description: 'Applies the theme typography styles.',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"caption"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"inherit"' },
                    { value: '"subtitle1"' },
                    { value: '"subtitle2"' },
                    { value: '"body1"' },
                    { value: '"body2"' },
                    { value: '"overline"' },
                  ],
                },
              },
              variantMapping: {
                defaultValue: {
                  value:
                    "{\nh1: 'h1',\nh2: 'h2',\nh3: 'h3',\nh4: 'h4',\nh5: 'h5',\nh6: 'h6',\nsubtitle1: 'h6',\nsubtitle2: 'h6',\nbody1: 'p',\nbody2: 'p',\ninherit: 'p',\n}",
                },
                description:
                  'The component maps the variant prop to a range of different HTML element types.\nFor instance, subtitle1 to `<h6>`.\nIf you wish to change that mapping, you can provide your own.\nAlternatively, you can use the `component` prop.',
                name: 'variantMapping',
                required: !1,
                type: {
                  name: 'Partial<Record<"button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline", string>>',
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/FieldLabel.tsx#FieldLabel'
            ] = {
              docgenInfo: FieldLabel_FieldLabel.__docgenInfo,
              name: 'FieldLabel',
              path: 'src/components/FieldLabel.tsx#FieldLabel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var FieldValueDisplay = function FieldValueDisplay(_ref) {
        var label = _ref.label,
          value = _ref.value;
        value || (value = '-');
        var theme = (0, styles_useTheme.Z)(),
          _useLoadingContext = utils_useLoadingContext(),
          loading = _useLoadingContext.loading,
          errorMessage = _useLoadingContext.errorMessage,
          labelSkeletonWidth = 7 * label.length,
          valueSkeletonWidth = ''.concat(
            20 + Math.round(60 * Math.random()),
            '%'
          );
        return errorMessage
          ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_ErrorSkeleton, {
                  sx: { width: labelSkeletonWidth },
                }),
                (0, jsx_runtime.jsx)(components_ErrorSkeleton, {
                  sx: { width: valueSkeletonWidth },
                }),
              ],
            })
          : loading
          ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(Skeleton_Skeleton.Z, {
                  sx: { width: labelSkeletonWidth },
                }),
                (0, jsx_runtime.jsx)(Skeleton_Skeleton.Z, {
                  sx: { width: valueSkeletonWidth },
                }),
              ],
            })
          : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(components_FieldLabel, {
                  children: label,
                }),
                ['string', 'number'].includes(typeof value)
                  ? (0, jsx_runtime.jsx)(Typography_Typography.Z, {
                      variant: 'body2',
                      sx: {
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-line',
                        color: (0, colorManipulator.Fq)(
                          theme.palette.text.primary,
                          0.5
                        ),
                      },
                      children: value,
                    })
                  : value,
              ],
            });
      };
      try {
        (FieldValueDisplay.displayName = 'FieldValueDisplay'),
          (FieldValueDisplay.__docgenInfo = {
            description: '',
            displayName: 'FieldValueDisplay',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'ReactNode' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/FieldValueDisplay.tsx#FieldValueDisplay'
            ] = {
              docgenInfo: FieldValueDisplay.__docgenInfo,
              name: 'FieldValueDisplay',
              path: 'src/components/FieldValueDisplay.tsx#FieldValueDisplay',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Cancel = __webpack_require__(
          './node_modules/@mui/icons-material/Cancel.js'
        ),
        CloudUpload = __webpack_require__(
          './node_modules/@mui/icons-material/CloudUpload.js'
        ),
        Delete = __webpack_require__(
          './node_modules/@mui/icons-material/Delete.js'
        ),
        Grid_Grid = __webpack_require__(
          './node_modules/@mui/material/Grid/Grid.js'
        ),
        Box_Box = __webpack_require__(
          './node_modules/@mui/material/Box/Box.js'
        ),
        Button_Button = __webpack_require__(
          './node_modules/@mui/material/Button/Button.js'
        ),
        List_List = __webpack_require__(
          './node_modules/@mui/material/List/List.js'
        ),
        Divider_Divider = __webpack_require__(
          './node_modules/@mui/material/Divider/Divider.js'
        ),
        ListItem_ListItem = __webpack_require__(
          './node_modules/@mui/material/ListItem/ListItem.js'
        ),
        ListItemAvatar_ListItemAvatar = __webpack_require__(
          './node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js'
        ),
        ListItemText_ListItemText = __webpack_require__(
          './node_modules/@mui/material/ListItemText/ListItemText.js'
        ),
        LinearProgress = __webpack_require__(
          './node_modules/@mui/material/LinearProgress/LinearProgress.js'
        ),
        formatBytes = function formatBytes(bytes) {
          return bytes < 1024
            ? ''.concat(bytes, ' bytes')
            : bytes < 1048576
            ? ''.concat((bytes / 1024).toFixed(2), ' KB')
            : bytes < 1073741824
            ? ''.concat((bytes / 1048576).toFixed(2), ' MB')
            : ''.concat((bytes / 1073741824).toFixed(2), ' GB');
        },
        supportedFileIcons = [
          'pdf',
          'jpg',
          'png',
          'ppt',
          'doc',
          'zip',
          'exe',
          'wav',
          'mpg',
          'mp4',
          'mov',
          'html',
          'xlsx',
          'svg',
          'docx',
          'jar',
          'json',
          'csv',
          'py',
          'xml',
          'mp3',
          'css',
          'js',
          'txt',
          'reg',
          'psd',
          'ink',
          'inf',
        ],
        iconGroups = {
          jpg: ['jpeg'],
          zip: ['rar', '7z', 'gz', 'tar'],
          jar: ['war', 'jad'],
          xlsx: ['xltx'],
          ink: ['lnk'],
          inf: ['nfo'],
        },
        fileIconAliases = Object.keys(iconGroups).reduce(function (
          accumlator,
          key
        ) {
          return (
            iconGroups[key].forEach(function (alias) {
              return (accumlator[alias] = key);
            }),
            accumlator
          );
        },
        {});
      supportedFileIcons.push.apply(
        supportedFileIcons,
        (0, toConsumableArray.Z)(Object.keys(fileIconAliases))
      );
      var FileUploader = function FileUploader() {
        var theme = (0, styles_useTheme.Z)(),
          fileInputFieldRef = (0, react.useRef)(null),
          fileListContainerRef = (0, react.useRef)(null),
          _useState = (0, react.useState)([]),
          _useState2 = (0, slicedToArray.Z)(_useState, 2),
          files = _useState2[0],
          setFiles = _useState2[1],
          _useState3 = (0, react.useState)([]),
          _useState4 = (0, slicedToArray.Z)(_useState3, 2),
          duplicateSelections = _useState4[0],
          setDuplicateSelections = _useState4[1];
        return (
          (0, react.useEffect)(
            function () {
              if (
                duplicateSelections.length > 0 &&
                fileListContainerRef.current
              ) {
                var duplicateSelectionIndexes = duplicateSelections
                  .map(function (duplicateSelection) {
                    return files.indexOf(duplicateSelection);
                  })
                  .filter(function (index) {
                    return null != index;
                  });
                fileListContainerRef.current
                  .querySelectorAll('li')
                  .forEach(function (fileListItem, index) {
                    duplicateSelectionIndexes.includes(index) &&
                      (function flickerElement(element) {
                        element.classList.add('flicker'),
                          setTimeout(function () {
                            return element.classList.remove('flicker');
                          }, 1e3);
                      })(fileListItem);
                  });
              }
            },
            [duplicateSelections, files]
          ),
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)('input', {
                ref: fileInputFieldRef,
                type: 'file',
                multiple: !0,
                style: { display: 'none' },
                onChange: function onChange(event) {
                  if (event.target.files) {
                    for (
                      var selectedFiles = [],
                        filesAlreadyAttached = [],
                        _loop = function _loop(i, j) {
                          var _event$target$files$i = event.target.files[i],
                            currentFileName = _event$target$files$i.name,
                            currentFileSize = _event$target$files$i.size,
                            attachedFile = files.find(function (_ref) {
                              var name = _ref.name,
                                size = _ref.size;
                              return (
                                name === currentFileName &&
                                size === currentFileSize
                              );
                            });
                          attachedFile
                            ? filesAlreadyAttached.push(attachedFile)
                            : selectedFiles.push(event.target.files[i]);
                        },
                        i = 0,
                        j = event.target.files.length;
                      i < j;
                      i++
                    )
                      _loop(i);
                    setFiles(function (prevFiles) {
                      return [].concat(
                        (0, toConsumableArray.Z)(prevFiles),
                        selectedFiles
                      );
                    }),
                      setDuplicateSelections(filesAlreadyAttached),
                      (event.target.value = '');
                  }
                },
              }),
              (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                container: !0,
                columnSpacing: 3,
                children: [
                  (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                    item: !0,
                    xs: files.length <= 0,
                    children: (0, jsx_runtime.jsx)(components_Card, {
                      sx: {
                        backgroundColor: (0, colorManipulator.Fq)(
                          theme.palette.text.primary,
                          0.1
                        ),
                        cursor: 'pointer',
                      },
                      onClick: function onClick() {
                        fileInputFieldRef.current &&
                          fileInputFieldRef.current.click();
                      },
                      children: (0, jsx_runtime.jsxs)(Box_Box.Z, {
                        sx: {
                          width: '100%',
                          minWidth: 220,
                          height: 220,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(CloudUpload.Z, {
                            sx: {
                              fontSize: 80,
                              display: 'block',
                              color: (0, colorManipulator.Fq)(
                                theme.palette.text.primary,
                                0.2
                              ),
                            },
                          }),
                          (0, jsx_runtime.jsx)(Button_Button.Z, {
                            variant: 'contained',
                            color: 'success',
                            sx: { mb: 1 },
                            children: 'Upload File',
                          }),
                          (0, jsx_runtime.jsx)(Typography_Typography.Z, {
                            variant: 'body2',
                            sx: {
                              color: (0, colorManipulator.Fq)(
                                theme.palette.text.primary,
                                0.2
                              ),
                              fontWeight: 'bold',
                            },
                            children: '20MB Maximum file size',
                          }),
                        ],
                      }),
                    }),
                  }),
                  files.length > 0
                    ? (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                        item: !0,
                        xs: !0,
                        children: [
                          (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                            container: !0,
                            alignItems: 'center',
                            children: [
                              (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                                item: !0,
                                xs: !0,
                                children: (0, jsx_runtime.jsxs)(
                                  Typography_Typography.Z,
                                  {
                                    sx: { fontWeight: 'bold' },
                                    children: [
                                      files.length,
                                      ' file',
                                      1 === files.length ? null : 's',
                                    ],
                                  }
                                ),
                              }),
                              (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                                item: !0,
                                children: (0, jsx_runtime.jsx)(
                                  Typography_Typography.Z,
                                  {
                                    sx: {
                                      color: theme.palette.success.main,
                                      cursor: 'pointer',
                                      fontSize: 14,
                                    },
                                    children: 'Download All',
                                  }
                                ),
                              }),
                            ],
                          }),
                          (0, jsx_runtime.jsx)(List_List.Z, {
                            ref: fileListContainerRef,
                            sx: { width: '100%' },
                            children: files.map(function (_ref2, index) {
                              var name = _ref2.name,
                                size = _ref2.size,
                                fileIconClassNames = [
                                  'file-icon',
                                  'file-icon-small',
                                ],
                                fileExtensionMatch = /\.(\w+)$/g.exec(name);
                              if (
                                fileExtensionMatch &&
                                supportedFileIcons.includes(
                                  fileExtensionMatch[1].toLowerCase()
                                )
                              ) {
                                var fileExtension =
                                  fileExtensionMatch[1].toLowerCase();
                                fileIconClassNames.push(
                                  fileIconAliases[fileExtension] ||
                                    fileExtension
                                );
                              }
                              return (0,
                              jsx_runtime.jsxs)(react.Fragment, { children: [0 === index ? null : (0, jsx_runtime.jsx)(Divider_Divider.Z, {}), (0, jsx_runtime.jsxs)(ListItem_ListItem.ZP, { sx: { px: 0, py: 0.5, '&:hover': { backgroundColor: (0, colorManipulator.Fq)(theme.palette.primary.main, 0.1) } }, children: [(0, jsx_runtime.jsx)(ListItemAvatar_ListItemAvatar.Z, { sx: { minWidth: 48 }, children: (0, jsx_runtime.jsx)(Box_Box.Z, { className: fileIconClassNames.join(' '), sx: { width: 30, height: 40 } }) }), (0, jsx_runtime.jsx)(ListItemText_ListItemText.Z, { primary: name, secondary: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [formatBytes(size), ' ', (0, jsx_runtime.jsx)(Typography_Typography.Z, { variant: 'body2', component: 'span', color: theme.palette.success.main, children: '•' }), ' ', 'Ronald M. Kasendwa'] }), secondaryTypographyProps: { sx: { fontSize: 12 } }, sx: { flex: 1, minWidth: 0, wordBreak: 'break-all' } }), (0, jsx_runtime.jsxs)(Box_Box.Z, { sx: { display: 'flex', gap: 1 }, children: [(0, jsx_runtime.jsx)(Button_Button.Z, { startIcon: (0, jsx_runtime.jsx)(CloudUpload.Z, {}), variant: 'outlined', color: 'success', children: 'Download' }), (0, jsx_runtime.jsx)(Button_Button.Z, { startIcon: (0, jsx_runtime.jsx)(Delete.Z, {}), variant: 'outlined', color: 'error', children: 'Delete' }), (0, jsx_runtime.jsx)(Button_Button.Z, { startIcon: (0, jsx_runtime.jsx)(Cancel.Z, {}), variant: 'outlined', color: 'warning', children: 'Cancel' })] })] }), (0, jsx_runtime.jsx)(LinearProgress.Z, { value: 23, variant: 'determinate', color: 'error' })] }, index);
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      };
      try {
        (FileUploader.displayName = 'FileUploader'),
          (FileUploader.__docgenInfo = {
            description: '',
            displayName: 'FileUploader',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/FileUploader/index.tsx#FileUploader'
            ] = {
              docgenInfo: FileUploader.__docgenInfo,
              name: 'FileUploader',
              path: 'src/components/FileUploader/index.tsx#FileUploader',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var FormWrapper = function FormWrapper(_ref) {
        var _children = _ref.children,
          title = _ref.title,
          tools = _ref.tools,
          _ref$initialValues = _ref.initialValues,
          initialValues =
            void 0 === _ref$initialValues ? {} : _ref$initialValues,
          validationSchema = _ref.validationSchema,
          onSubmit = _ref.onSubmit,
          smallScreen = useSmallScreen(),
          _useLoadingContext = useLoadingContext(),
          load = _useLoadingContext.load,
          loading = _useLoadingContext.loading,
          errorMessage = _useLoadingContext.errorMessage;
        return _jsxs(PaddedContentArea, {
          title: title,
          tools: tools,
          children: [
            errorMessage &&
              _jsx(Box, {
                sx: { mb: 2 },
                children: _jsx(ErrorAlert, {
                  message: errorMessage,
                  retry: load,
                }),
              }),
            _jsx(Formik, {
              initialValues: initialValues,
              validationSchema: validationSchema,
              onSubmit: (function () {
                var _ref2 = _asyncToGenerator(
                  _regeneratorRuntime.mark(function _callee(
                    values,
                    formikHelpers
                  ) {
                    return _regeneratorRuntime.wrap(function _callee$(
                      _context
                    ) {
                      for (;;)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            if (((_context.t0 = onSubmit), !_context.t0)) {
                              _context.next = 4;
                              break;
                            }
                            return (
                              (_context.next = 4),
                              onSubmit(values, formikHelpers)
                            );
                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                    },
                    _callee);
                  })
                );
                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              })(),
              enableReinitialize: !0,
              children: function children(_ref3) {
                var isSubmitting = _ref3.isSubmitting,
                  rest = _objectWithoutProperties(_ref3, null);
                return _jsxs(Form, {
                  noValidate: !0,
                  children: [
                    _jsx(ErrorFieldHighlighter, {}),
                    'function' == typeof _children
                      ? _children(
                          _objectSpread({ isSubmitting: isSubmitting }, rest)
                        )
                      : _children,
                    loading || errorMessage
                      ? null
                      : _jsxs(Grid, {
                          container: !0,
                          sx: { mt: 2 },
                          children: [
                            smallScreen
                              ? null
                              : _jsx(Grid, { item: !0, xs: !0 }),
                            _jsx(Grid, {
                              item: !0,
                              xs: smallScreen,
                              children: _jsx(LoadingButton, {
                                color: 'success',
                                variant: 'contained',
                                startIcon: _jsx(SaveIcon, {}),
                                fullWidth: smallScreen,
                                type: 'submit',
                                loading: isSubmitting,
                                children: 'Save',
                              }),
                            }),
                          ],
                        }),
                  ],
                });
              },
            }),
          ],
        });
      };
      try {
        (FormWrapper.displayName = 'FormWrapper'),
          (FormWrapper.__docgenInfo = {
            description: '',
            displayName: 'FormWrapper',
            props: {
              initialValues: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'initialValues',
                required: !1,
                type: { name: 'FormikValues' },
              },
              validationSchema: {
                defaultValue: null,
                description: '',
                name: 'validationSchema',
                required: !1,
                type: { name: 'any' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: {
                  name: '((values: any, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>)',
                },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ContainerClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
              fixed: {
                defaultValue: { value: 'false' },
                description:
                  "Set the max-width to match the min-width of the current breakpoint.\nThis is useful if you'd prefer to design for a fixed set of sizes\ninstead of trying to accommodate a fully fluid viewport.\nIt's fluid by default.",
                name: 'fixed',
                required: !1,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              disableGutters: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the left and right padding is removed.',
                name: 'disableGutters',
                required: !1,
                type: { name: 'boolean' },
              },
              maxWidth: {
                defaultValue: { value: "'lg'" },
                description:
                  'Determine the max-width of the container.\nThe container width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.',
                name: 'maxWidth',
                required: !1,
                type: { name: 'false | Breakpoint' },
              },
              tools: {
                defaultValue: null,
                description: '',
                name: 'tools',
                required: !1,
                type: { name: 'ReactNode | ReactNode[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/FormWrapper.tsx#FormWrapper'
            ] = {
              docgenInfo: FormWrapper.__docgenInfo,
              name: 'FormWrapper',
              path: 'src/components/FormWrapper.tsx#FormWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LoadingScreen_LoadingScreen = function LoadingScreen(_ref) {
        var style = {};
        return (
          _ref.absolute
            ? Object.assign(style, {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
              })
            : Object.assign(style, { height: 200 }),
          _jsx(Box, {
            sx: _objectSpread(
              {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              style
            ),
            children: _jsx(CircularProgress, { size: 60, sx: { mt: 1 } }),
          })
        );
      };
      try {
        (LoadingScreen_LoadingScreen.displayName = 'LoadingScreen'),
          (LoadingScreen_LoadingScreen.__docgenInfo = {
            description: '',
            displayName: 'LoadingScreen',
            props: {
              absolute: {
                defaultValue: null,
                description: '',
                name: 'absolute',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/LoadingScreen.tsx#LoadingScreen'
            ] = {
              docgenInfo: LoadingScreen_LoadingScreen.__docgenInfo,
              name: 'LoadingScreen',
              path: 'src/components/LoadingScreen.tsx#LoadingScreen',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var CircularProgress_CircularProgress = __webpack_require__(
          './node_modules/@mui/material/CircularProgress/CircularProgress.js'
        ),
        ReloadIconButton_excluded = ['loading', 'load'],
        ReloadIconButton_ReloadIconButton = function ReloadIconButton(_ref) {
          var _ref$loading = _ref.loading,
            loading = void 0 !== _ref$loading && _ref$loading,
            load = _ref.load,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              ReloadIconButton_excluded
            );
          return (0, jsx_runtime.jsx)(
            Tooltip.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                { title: loading ? 'Loading...' : 'Reload' },
                rest
              ),
              {},
              {
                children: (0, jsx_runtime.jsx)(Box_Box.Z, {
                  component: 'span',
                  children: loading
                    ? (0, jsx_runtime.jsx)(IconButton_IconButton.Z, {
                        disabled: !0,
                        children: (0, jsx_runtime.jsx)(
                          CircularProgress_CircularProgress.Z,
                          { size: 24, color: 'inherit' }
                        ),
                      })
                    : (0, jsx_runtime.jsx)(IconButton_IconButton.Z, {
                        onClick: function onClick() {
                          return load && load();
                        },
                        children: (0, jsx_runtime.jsx)(Refresh.Z, {
                          color: 'inherit',
                          sx: { display: 'block' },
                        }),
                      }),
                }),
              }
            )
          );
        },
        components_ReloadIconButton = ReloadIconButton_ReloadIconButton;
      try {
        (ReloadIconButton_ReloadIconButton.displayName = 'ReloadIconButton'),
          (ReloadIconButton_ReloadIconButton.__docgenInfo = {
            description: '',
            displayName: 'ReloadIconButton',
            props: {
              loading: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              load: {
                defaultValue: null,
                description: '',
                name: 'load',
                required: !1,
                type: { name: '(() => void)' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<unknown>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ReloadIconButton.tsx#ReloadIconButton'
            ] = {
              docgenInfo: ReloadIconButton_ReloadIconButton.__docgenInfo,
              name: 'ReloadIconButton',
              path: 'src/components/ReloadIconButton.tsx#ReloadIconButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__('./node_modules/datejs/index.js');
      var TableContainer = __webpack_require__(
          './node_modules/@mui/material/TableContainer/TableContainer.js'
        ),
        Table_Table = __webpack_require__(
          './node_modules/@mui/material/Table/Table.js'
        ),
        TableHead = __webpack_require__(
          './node_modules/@mui/material/TableHead/TableHead.js'
        ),
        TableRow = __webpack_require__(
          './node_modules/@mui/material/TableRow/TableRow.js'
        ),
        TableCell = __webpack_require__(
          './node_modules/@mui/material/TableCell/TableCell.js'
        ),
        TableBody = __webpack_require__(
          './node_modules/@mui/material/TableBody/TableBody.js'
        ),
        Pagination = __webpack_require__(
          './node_modules/@mui/material/Pagination/Pagination.js'
        ),
        TablePagination = __webpack_require__(
          './node_modules/@mui/material/TablePagination/TablePagination.js'
        ),
        formatDate = function formatDate(dateParam, includeTime) {
          var dateFormat =
            !0 === includeTime
              ? 'dddd, dd MMM yyyy hh:mm tt'
              : 'SECONDS' === includeTime
              ? 'dddd, dd MMM yyyy hh:mm:ss tt'
              : 'dd MMM yyyy';
          if (dateParam instanceof Date) return dateParam.toString(dateFormat);
          if (
            ('string' == typeof dateParam &&
              dateParam.toString().match(/^-?\d+$/) &&
              (dateParam = parseInt(dateParam)),
            ['string', 'number'].includes(typeof dateParam))
          ) {
            var date = new Date(dateParam);
            if (!isNaN(date.getTime())) return date.toString(dateFormat);
          }
          return dateParam;
        },
        addThousandCommas = function addThousandCommas(number, decimalPlaces) {
          var numberString = String(number);
          'number' == typeof decimalPlaces
            ? (numberString = number.toFixed(decimalPlaces))
            : 'boolean' == typeof decimalPlaces &&
              (numberString = number.toFixed(2));
          var numberParts = numberString.split('.'),
            wholeNumber = numberParts[0],
            fraction = numberParts[1];
          return (
            wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
            (void 0 !== fraction ? '.' + fraction : '')
          );
        },
        Table_excluded = ['sx'],
        getColumnWidthStyles = function getColumnWidthStyles(_ref) {
          var width = _ref.width;
          return {
            width: width,
            minWidth: _ref.minWidth || width || 70,
            maxWidth: width || 180,
          };
        },
        toolTypes = [
          'tool',
          'input',
          'currencyInput',
          'selectInput',
          'dateInput',
          'phoneInput',
          'rowAdder',
          'percentageInput',
          'numberInput',
          'fragment',
          'checkbox',
        ],
        components_Table_Table = function Table(_ref2) {
          var onClickRow = _ref2.onClickRow,
            columnsProp = _ref2.columns,
            rows = _ref2.rows,
            totalRowCount = _ref2.totalRowCount,
            _ref2$labelPlural = _ref2.labelPlural,
            labelPlural =
              void 0 === _ref2$labelPlural ? 'Records' : _ref2$labelPlural,
            lowercaseLabelPlural = _ref2.lowercaseLabelPlural,
            _ref2$rowsPerPage = _ref2.rowsPerPage,
            rowsPerPageProp =
              void 0 === _ref2$rowsPerPage ? 10 : _ref2$rowsPerPage,
            _ref2$pageIndex = _ref2.pageIndex,
            pageIndexProp = void 0 === _ref2$pageIndex ? 0 : _ref2$pageIndex,
            onChangePage = _ref2.onChangePage,
            forEachDerivedColumn = _ref2.forEachDerivedColumn,
            _ref2$variant = _ref2.variant,
            variant = void 0 === _ref2$variant ? 'plain' : _ref2$variant,
            _ref2$paging = _ref2.paging,
            paging = void 0 === _ref2$paging || _ref2$paging,
            _ref2$showHeaderRow = _ref2.showHeaderRow,
            showHeaderRow =
              void 0 === _ref2$showHeaderRow || _ref2$showHeaderRow,
            _ref2$HeaderRowProps = _ref2.HeaderRowProps,
            HeaderRowProps =
              void 0 === _ref2$HeaderRowProps ? {} : _ref2$HeaderRowProps,
            currencyCode = _ref2.currencyCode,
            decimalPlaces = _ref2.decimalPlaces,
            labelTransform = _ref2.labelTransform,
            _ref2$paginationType = _ref2.paginationType,
            paginationType =
              void 0 === _ref2$paginationType
                ? 'default'
                : _ref2$paginationType,
            _ref2$PaginationProps = _ref2.PaginationProps,
            PaginationProps =
              void 0 === _ref2$PaginationProps ? {} : _ref2$PaginationProps;
          lowercaseLabelPlural ||
            (lowercaseLabelPlural = labelPlural.toLowerCase());
          var headerRowPropsSx = HeaderRowProps.sx,
            restHeaderRowProps = (0, objectWithoutProperties.Z)(
              HeaderRowProps,
              Table_excluded
            ),
            _useState = (0, react.useState)(0),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            pageIndex = _useState2[0],
            setPageIndex = _useState2[1],
            _useState3 = (0, react.useState)(10),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            rowsPerPage = _useState4[0],
            setRowsPerPage = _useState4[1],
            _useState5 = (0, react.useState)([]),
            _useState6 = (0, slicedToArray.Z)(_useState5, 2),
            columns = _useState6[0],
            setColumns = _useState6[1],
            _useState7 = (0, react.useState)([]),
            _useState8 = (0, slicedToArray.Z)(_useState7, 2),
            formattedRows = _useState8[0],
            setFormattedRows = _useState8[1],
            defaultCurrencyCode = (0, react.useContext)(
              contexts.Zj
            ).currencyCode;
          currencyCode || (currencyCode = defaultCurrencyCode),
            (0, react.useEffect)(
              function () {
                setPageIndex(pageIndexProp);
              },
              [pageIndexProp]
            ),
            (0, react.useEffect)(
              function () {
                setColumns(function () {
                  return columnsProp.map(function (column) {
                    var nextColumn = (0, objectSpread2.Z)({}, column);
                    switch (nextColumn.type) {
                      case 'date':
                      case 'time':
                        nextColumn.width || (nextColumn.width = 120);
                        break;
                      case 'enum':
                        nextColumn.width || (nextColumn.width = 150);
                        break;
                      case 'currency':
                      case 'percentage':
                      case 'number':
                        if (
                          ((nextColumn.align = 'right'),
                          !nextColumn.noHeaderTextAfter)
                        )
                          switch (nextColumn.type) {
                            case 'currency':
                              currencyCode &&
                                (nextColumn.headerTextAfter = ' ('.concat(
                                  currencyCode,
                                  ')'
                                ));
                              break;
                            case 'percentage':
                              nextColumn.headerTextAfter = ' (%)';
                          }
                        break;
                      case 'boolean':
                        (nextColumn.align = 'center'),
                          (nextColumn.enumValues = ['Yes', 'No']),
                          nextColumn.width || (nextColumn.width = 120),
                          nextColumn.searchKeyMapper ||
                            (nextColumn.searchKeyMapper = function (
                              searchValue
                            ) {
                              return 'Yes' === searchValue;
                            });
                        break;
                      case 'id':
                        (nextColumn.align = 'center'),
                          nextColumn.width || (nextColumn.width = 100);
                        break;
                      case 'phoneNumber':
                        nextColumn.width || (nextColumn.width = 195),
                          (nextColumn.columnClassName = 'phone-number-column');
                        break;
                      case 'currencyInput':
                        (nextColumn.align = 'right'),
                          currencyCode &&
                            (nextColumn.headerTextAfter = ' ('.concat(
                              currencyCode,
                              ')'
                            ));
                        break;
                      case 'tool':
                      case 'checkbox':
                        (nextColumn.locked = !0), (nextColumn.align = 'center');
                    }
                    return nextColumn;
                  });
                });
              },
              [columnsProp, currencyCode]
            ),
            (0, react.useEffect)(
              function () {
                setFormattedRows(function () {
                  var allowedDataTypes = ['number', 'string', 'boolean'];
                  return rows.map(function (row) {
                    var nextRow = (0, objectSpread2.Z)({}, row);
                    return (
                      columns.forEach(function (column) {
                        var type = column.type,
                          id = column.id,
                          defaultValue = column.defaultValue,
                          postProcessor = column.postProcessor;
                        if (type && toolTypes.includes(type)) type;
                        else if (
                          ((0, react.isValidElement)(nextRow[id]) ||
                            allowedDataTypes.includes(typeof nextRow[id])) &&
                          '' !== nextRow[id]
                        )
                          switch (type) {
                            case 'date':
                              nextRow[id] = formatDate(nextRow[id]);
                              break;
                            case 'dateTime':
                              nextRow[id] = formatDate(nextRow[id], !0);
                              break;
                            case 'time':
                              var date = new Date(nextRow[id]);
                              nextRow[id] = isNaN(date.getTime())
                                ? ''
                                : date.toString('hh:mm tt');
                              break;
                            case 'currency':
                            case 'percentage':
                              (nextRow[id] = parseFloat(nextRow[id])),
                                (nextRow[id] = addThousandCommas(
                                  nextRow[id],
                                  decimalPlaces || !0
                                ));
                              break;
                            case 'number':
                              nextRow[id] = addThousandCommas(nextRow[id]);
                              break;
                            case 'phoneNumber':
                              break;
                            case 'enum':
                              !1 !== labelTransform &&
                                (nextRow[id] = String(nextRow[id]).toTitleCase(
                                  !0
                                ));
                              break;
                            case 'boolean':
                              nextRow[id] = nextRow[id] ? 'Yes' : 'No';
                          }
                        else
                          nextRow[id] =
                            defaultValue ||
                            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                              children: ' ',
                            });
                        postProcessor &&
                          (nextRow[id] = postProcessor(
                            nextRow[id],
                            row,
                            column
                          ));
                      }),
                      nextRow
                    );
                  });
                });
              },
              [columns, decimalPlaces, labelTransform, rows]
            ),
            (0, react.useEffect)(
              function () {
                setRowsPerPage(rowsPerPageProp);
              },
              [rowsPerPageProp]
            );
          var handleChangePage = function handleChangePage(e, newPage) {
              setPageIndex(newPage), onChangePage && onChangePage(newPage);
            },
            pageRows =
              totalRowCount || !paging
                ? formattedRows
                : formattedRows.slice(
                    pageIndex * rowsPerPage,
                    pageIndex * rowsPerPage + rowsPerPage
                  ),
            theme = (0, styles_useTheme.Z)(),
            bodyStyles = {
              '& tr.MuiTableRow-hover:hover': {
                backgroundColor: (0, colorManipulator.Fq)(
                  theme.palette.primary.main,
                  0.1
                ),
              },
            };
          switch (variant) {
            case 'plain':
              break;
            case 'stripped':
              Object.assign(bodyStyles, {
                '& tr.MuiTableRow-root:nth-child(even):not(:hover)': {
                  backgroundColor: (0, colorManipulator.Fq)(
                    theme.palette.text.primary,
                    0.04
                  ),
                },
                '& td.MuiTableCell-root:nth-child(even)': {
                  backgroundColor: (0, colorManipulator.Fq)(
                    theme.palette.text.primary,
                    0.02
                  ),
                },
              });
          }
          var tableContainerStyles = {};
          return (
            paging &&
              pageRows.length > 0 &&
              (tableContainerStyles.height = 'calc(100% - 52px)'),
            (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(TableContainer.Z, {
                  sx: tableContainerStyles,
                  children: (0, jsx_runtime.jsxs)(Table_Table.Z, {
                    stickyHeader: !0,
                    'aria-label': 'sticky table',
                    children: [
                      showHeaderRow
                        ? (0, jsx_runtime.jsx)(TableHead.Z, {
                            children: (0, jsx_runtime.jsx)(
                              TableRow.Z,
                              (0, objectSpread2.Z)(
                                (0, objectSpread2.Z)({}, restHeaderRowProps),
                                {},
                                {
                                  sx: (0, objectSpread2.Z)(
                                    { textTransform: 'uppercase' },
                                    headerRowPropsSx
                                  ),
                                  children: columns.map(function (column) {
                                    var id = column.id,
                                      align = column.align,
                                      style = column.style,
                                      label = column.label;
                                    return (
                                      column.headerTextAfter &&
                                        (label = (0, jsx_runtime.jsxs)(
                                          jsx_runtime.Fragment,
                                          {
                                            children: [
                                              label,
                                              ' ',
                                              column.headerTextAfter,
                                            ],
                                          }
                                        )),
                                      (0, jsx_runtime.jsx)(
                                        TableCell.Z,
                                        {
                                          align: align,
                                          sx: (0, objectSpread2.Z)(
                                            (0, objectSpread2.Z)(
                                              { fontWeight: 'bold', px: 3 },
                                              getColumnWidthStyles(column)
                                            ),
                                            style
                                          ),
                                          children: (0, jsx_runtime.jsx)(
                                            Typography_Typography.Z,
                                            {
                                              sx: {
                                                fontWeight: 'bold',
                                                fontSize: 12,
                                              },
                                              noWrap: !0,
                                              children: label,
                                            }
                                          ),
                                        },
                                        id
                                      )
                                    );
                                  }),
                                }
                              )
                            ),
                          })
                        : null,
                      (0, jsx_runtime.jsx)(TableBody.Z, {
                        sx: bodyStyles,
                        children:
                          pageRows.length > 0
                            ? pageRows.map(function (row, index) {
                                var sx = { verticalAlign: 'top' };
                                return (
                                  onClickRow && (sx.cursor = 'pointer'),
                                  (0, jsx_runtime.jsx)(
                                    TableRow.Z,
                                    {
                                      hover: !0,
                                      role: 'checkbox',
                                      tabIndex: -1,
                                      onClick: function onClick() {
                                        onClickRow && onClickRow(row, index);
                                      },
                                      sx: sx,
                                      children: columns.map(function (column) {
                                        var id = column.id,
                                          align = column.align,
                                          style = column.style,
                                          value =
                                            column.isDerivedColumn &&
                                            forEachDerivedColumn
                                              ? forEachDerivedColumn({
                                                  key: id,
                                                  currentEntity: row,
                                                })
                                              : row[column.id];
                                        return (0,
                                        jsx_runtime.jsx)(TableCell.Z, { align: align, sx: (0, objectSpread2.Z)((0, objectSpread2.Z)({ py: 1.8, px: 3 }, getColumnWidthStyles(column)), style), children: value }, id);
                                      }),
                                    },
                                    index
                                  )
                                );
                              })
                            : (0, jsx_runtime.jsx)(TableRow.Z, {
                                children: (0, jsx_runtime.jsx)(TableCell.Z, {
                                  colSpan: columns.length,
                                  align: 'center',
                                  children: (0, jsx_runtime.jsxs)(
                                    Typography_Typography.Z,
                                    {
                                      variant: 'body2',
                                      children: [
                                        'No ',
                                        lowercaseLabelPlural,
                                        ' found',
                                      ],
                                    }
                                  ),
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                (function () {
                  if (paging && pageRows.length > 0)
                    return 'classic' === paginationType
                      ? (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                          container: !0,
                          spacing: 3,
                          sx: { height: 40, alignItems: 'center', pl: 3 },
                          children: [
                            (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                              item: !0,
                              children: (0, jsx_runtime.jsxs)(
                                Typography_Typography.Z,
                                {
                                  variant: 'body2',
                                  sx: { lineHeight: '40px' },
                                  children: [rows.length, ' ', labelPlural],
                                }
                              ),
                            }),
                            (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                              item: !0,
                              children: (0, jsx_runtime.jsxs)(
                                Typography_Typography.Z,
                                {
                                  variant: 'body2',
                                  sx: { lineHeight: '40px' },
                                  children: [
                                    'Display ',
                                    rowsPerPage,
                                    ' ',
                                    lowercaseLabelPlural,
                                    ' per page',
                                  ],
                                }
                              ),
                            }),
                            (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                              item: !0,
                              xs: !0,
                            }),
                            (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                              item: !0,
                              children: (0, jsx_runtime.jsx)(
                                Pagination.Z,
                                (0, objectSpread2.Z)(
                                  {
                                    count: Math.ceil(
                                      (totalRowCount || rows.length) /
                                        rowsPerPage
                                    ),
                                    page: pageIndex + 1,
                                    onChange: function onChange(e, pageNumber) {
                                      handleChangePage(0, pageNumber - 1);
                                    },
                                    shape: 'rounded',
                                    showFirstButton: !0,
                                    showLastButton: !0,
                                  },
                                  PaginationProps
                                )
                              ),
                            }),
                          ],
                        })
                      : (0, jsx_runtime.jsx)(TablePagination.Z, {
                          rowsPerPageOptions: [10, 25, 50, 100],
                          component: 'div',
                          count: totalRowCount || rows.length,
                          rowsPerPage: rowsPerPage,
                          onRowsPerPageChange: function onRowsPerPageChange(
                            event
                          ) {
                            setRowsPerPage(+event.target.value);
                          },
                          page: pageIndex,
                          onPageChange: handleChangePage,
                          showFirstButton: !0,
                          showLastButton: !0,
                        });
                })(),
              ],
            })
          );
        };
      try {
        (components_Table_Table.displayName = 'Table'),
          (components_Table_Table.__docgenInfo = {
            description: '',
            displayName: 'Table',
            props: {
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !0,
                type: { name: 'ITableColumn[]' },
              },
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !0,
                type: { name: 'any[]' },
              },
              rowsPerPage: {
                defaultValue: null,
                description: '',
                name: 'rowsPerPage',
                required: !1,
                type: { name: 'number' },
              },
              pageIndex: {
                defaultValue: null,
                description: '',
                name: 'pageIndex',
                required: !1,
                type: { name: 'number' },
              },
              totalRowCount: {
                defaultValue: null,
                description: '',
                name: 'totalRowCount',
                required: !1,
                type: { name: 'number' },
              },
              labelPlural: {
                defaultValue: { value: 'Records' },
                description: '',
                name: 'labelPlural',
                required: !1,
                type: { name: 'string' },
              },
              lowercaseLabelPlural: {
                defaultValue: null,
                description: '',
                name: 'lowercaseLabelPlural',
                required: !1,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: { value: 'plain' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"stripped"' }, { value: '"plain"' }],
                },
              },
              onClickRow: {
                defaultValue: null,
                description: '',
                name: 'onClickRow',
                required: !1,
                type: { name: '((listItem: any, index: number) => void)' },
              },
              onChangePage: {
                defaultValue: null,
                description: '',
                name: 'onChangePage',
                required: !1,
                type: { name: '((pageIndex: number) => void)' },
              },
              forEachDerivedColumn: {
                defaultValue: null,
                description: '',
                name: 'forEachDerivedColumn',
                required: !1,
                type: {
                  name: '((config: IForEachDerivedColumnConfiguration) => ReactNode)',
                },
              },
              paging: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'paging',
                required: !1,
                type: { name: 'boolean' },
              },
              showHeaderRow: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'showHeaderRow',
                required: !1,
                type: { name: 'boolean' },
              },
              HeaderRowProps: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'HeaderRowProps',
                required: !1,
                type: { name: 'TableRowProps<"tr", {}>' },
              },
              currencyCode: {
                defaultValue: null,
                description: '',
                name: 'currencyCode',
                required: !1,
                type: { name: 'string' },
              },
              decimalPlaces: {
                defaultValue: null,
                description: '',
                name: 'decimalPlaces',
                required: !1,
                type: { name: 'number' },
              },
              labelTransform: {
                defaultValue: null,
                description: '',
                name: 'labelTransform',
                required: !1,
                type: { name: 'boolean' },
              },
              paginationType: {
                defaultValue: { value: 'default' },
                description: '',
                name: 'paginationType',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"default"' }, { value: '"classic"' }],
                },
              },
              PaginationProps: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'PaginationProps',
                required: !1,
                type: { name: 'PaginationProps' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Table.tsx#Table'] = {
              docgenInfo: components_Table_Table.__docgenInfo,
              name: 'Table',
              path: 'src/components/Table.tsx#Table',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var FullPageTable = function FullPageTable(_ref) {
        var title = _ref.title,
          pathToAddNew = _ref.pathToAddNew,
          columns = _ref.columns,
          rows = _ref.rows,
          onClickRow = _ref.onClickRow,
          forEachDerivedColumn = _ref.forEachDerivedColumn,
          labelPlural = _ref.labelPlural,
          tools = _ref.tools,
          variant = _ref.variant,
          loading = _ref.loading,
          errorMessage = _ref.errorMessage,
          load = _ref.load,
          _useState = useState(0),
          _useState2 = _slicedToArray(_useState, 2),
          tablePageIndex = _useState2[0],
          setTablePageIndex = _useState2[1],
          _useState3 = useState(''),
          _useState4 = _slicedToArray(_useState3, 2),
          searchTerm = _useState4[0],
          setSearchTerm = _useState4[1],
          _useState5 = useState([]),
          _useState6 = _slicedToArray(_useState5, 2),
          filteredRows = _useState6[0],
          setFilteredRows = _useState6[1],
          _useState7 = useState([]),
          _useState8 = _slicedToArray(_useState7, 2),
          displayRows = _useState8[0],
          setDisplayRows = _useState8[1],
          _useState9 = useState(null),
          _useState10 = _slicedToArray(_useState9, 2),
          tableWrapperDiv = _useState10[0],
          setTableWrapperDiv = _useState10[1],
          _useState11 = useState(!1),
          _useState12 = _slicedToArray(_useState11, 2),
          showStickyToolBar = _useState12[0],
          setShowStickyToolBar = _useState12[1],
          searchableColumnIds = useMemo(
            function () {
              return columns.map(function (_ref2) {
                return _ref2.id;
              });
            },
            [columns]
          ),
          searchableFieldLabels = columns
            .filter(function (label) {
              return 'string' == typeof label;
            })
            .map(function (_ref3) {
              return _ref3.label.toLowerCase();
            }),
          searchFieldPlaceholder = 'Search by '
            .concat(searchableFieldLabels.slice(0, -1).join(', '), ', or ')
            .concat(searchableFieldLabels.slice(-1)),
          theme = useTheme();
        useEffect(
          function () {
            if (searchTerm.length > 0) {
              var lowerCaseSearchTerm = searchTerm.toLowerCase();
              setFilteredRows(
                rows.filter(function (row) {
                  return searchableColumnIds.some(function (columnId) {
                    var columnValue = row[columnId];
                    return Array.isArray(columnValue)
                      ? columnValue.some(function (item) {
                          return (
                            'string' == typeof item &&
                            item.toLowerCase().match(lowerCaseSearchTerm)
                          );
                        })
                      : 'string' == typeof columnValue &&
                          columnValue.toLowerCase().match(lowerCaseSearchTerm);
                  });
                })
              );
            } else setFilteredRows(rows);
          },
          [rows, searchTerm, searchTerm.length, searchableColumnIds]
        ),
          useEffect(
            function () {
              if (tableWrapperDiv && document.scrollingElement) {
                var scrollCallback = function scrollCallback() {
                  var scrollY = window.scrollY,
                    topRowCount = Math.floor(scrollY / 54);
                  setDisplayRows(
                    filteredRows.slice(
                      0,
                      topRowCount + Math.ceil(window.innerHeight / 54)
                    )
                  );
                };
                return (
                  window.addEventListener('scroll', scrollCallback),
                  scrollCallback(),
                  function () {
                    window.removeEventListener('scroll', scrollCallback);
                  }
                );
              }
            },
            [filteredRows, filteredRows.length, tableWrapperDiv]
          ),
          useEffect(
            function () {
              tableWrapperDiv &&
                (tableWrapperDiv.style.minHeight = ''.concat(
                  54 * (filteredRows.length + 2),
                  'px'
                ));
            },
            [filteredRows.length, tableWrapperDiv]
          ),
          useEffect(function () {
            var scrollCallback = function scrollCallback() {
              var scrollY = window.scrollY;
              setShowStickyToolBar(function (previousValue) {
                if (!1 === previousValue) {
                  if (scrollY >= 85)
                    return (
                      scrollY < 130 &&
                        document.scrollingElement &&
                        (document.scrollingElement.scrollTop = 130),
                      !0
                    );
                } else if (scrollY < 120) return scrollY >= 85 && document.scrollingElement && (document.scrollingElement.scrollTop = 84), !1;
                return previousValue;
              }),
                scrollY >= 85 || setShowStickyToolBar(!1);
            };
            return (
              window.addEventListener('scroll', scrollCallback),
              scrollCallback(),
              function () {
                window.removeEventListener('scroll', scrollCallback);
              }
            );
          }, []),
          useEffect(
            function () {
              setDisplayRows(
                filteredRows.slice(0, Math.ceil(window.innerHeight / 54))
              );
            },
            [filteredRows]
          );
        var toolbar = _jsx(Toolbar, {
          children: _jsxs(Grid, {
            container: !0,
            spacing: 2,
            alignItems: 'center',
            children: [
              _jsx(Grid, {
                item: !0,
                children: _jsx(SearchIcon, {
                  color: 'inherit',
                  sx: { display: 'block' },
                }),
              }),
              _jsx(Grid, {
                item: !0,
                xs: !0,
                children: _jsx(TextField, {
                  fullWidth: !0,
                  placeholder: searchFieldPlaceholder,
                  InputProps: {
                    disableUnderline: !0,
                    sx: { fontSize: 'default' },
                    endAdornment:
                      searchTerm &&
                      _jsx(IconButton, {
                        onClick: function onClick() {
                          return setSearchTerm('');
                        },
                        children: _jsx(CloseIcon, {}),
                      }),
                  },
                  variant: 'standard',
                  value: searchTerm,
                  onChange: function onChange(event) {
                    return setSearchTerm(event.target.value);
                  },
                  disabled: loading && rows.length <= 0,
                }),
              }),
              _jsxs(Grid, {
                item: !0,
                children: [
                  pathToAddNew &&
                    _jsx(Button, {
                      variant: 'contained',
                      component: Link,
                      to: pathToAddNew,
                      sx: { mr: 1 },
                      size: 'small',
                      children: 'Add New',
                    }),
                  loading && rows.length <= 0
                    ? null
                    : _jsx(ReloadIconButton, { load: load, loading: loading }),
                ],
              }),
            ],
          }),
        });
        return _jsxs(_Fragment, {
          children: [
            showStickyToolBar &&
              _jsx(AppBar, {
                position: 'sticky',
                color: 'default',
                elevation: 0,
                sx: {
                  borderBottom: '1px solid '.concat(
                    alpha(theme.palette.text.primary, 0.12)
                  ),
                  top: 56,
                },
                children: _jsx(Container, { children: toolbar }),
              }),
            _jsx(PaddedContentArea, {
              title: title,
              tools: tools,
              children: _jsxs(Paper, {
                sx: { overflow: 'hidden' },
                children: [
                  _jsx(AppBar, {
                    position: 'static',
                    color: 'default',
                    elevation: 0,
                    sx: {
                      borderBottom: '1px solid '.concat(
                        alpha(theme.palette.text.primary, 0.12)
                      ),
                    },
                    children: toolbar,
                  }),
                  errorMessage &&
                    _jsx(ErrorAlert, { message: errorMessage, retry: load }),
                  loading && rows.length <= 0
                    ? _jsx(Box, { children: _jsx(LoadingScreen, {}) })
                    : errorMessage && filteredRows.length <= 0
                    ? null
                    : _jsx(Box, {
                        ref: function ref(tableWrapper) {
                          setTableWrapperDiv(tableWrapper);
                        },
                        sx: { boxSizing: 'border-box' },
                        children: _jsx(Table, {
                          columns: columns,
                          rows: displayRows,
                          pageIndex: tablePageIndex,
                          onChangePage: function onChangePage(pageIndex) {
                            setTablePageIndex(pageIndex);
                          },
                          onClickRow: onClickRow,
                          forEachDerivedColumn: forEachDerivedColumn,
                          labelPlural: labelPlural,
                          variant: variant,
                          paging: !1,
                        }),
                      }),
                  _jsxs(Grid, {
                    container: !0,
                    sx: { px: 3, py: 2 },
                    children: [
                      _jsx(Grid, { item: !0, xs: !0 }),
                      _jsx(Grid, {
                        item: !0,
                        children:
                          filteredRows.length > 0
                            ? filteredRows.length === rows.length
                              ? _jsxs(Typography, {
                                  variant: 'body2',
                                  children: [
                                    'Displaying ',
                                    filteredRows.length,
                                    ' rows',
                                  ],
                                })
                              : _jsxs(Typography, {
                                  variant: 'body2',
                                  children: [
                                    'Filtering ',
                                    filteredRows.length,
                                    ' out of ',
                                    rows.length,
                                    ' rows',
                                  ],
                                })
                            : null,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      try {
        (FullPageTable.displayName = 'FullPageTable'),
          (FullPageTable.__docgenInfo = {
            description: '',
            displayName: 'FullPageTable',
            props: {
              pathToAddNew: {
                defaultValue: null,
                description: '',
                name: 'pathToAddNew',
                required: !1,
                type: { name: 'string' },
              },
              load: {
                defaultValue: null,
                description: '',
                name: 'load',
                required: !1,
                type: { name: '(() => void)' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              tools: {
                defaultValue: null,
                description: '',
                name: 'tools',
                required: !1,
                type: { name: 'ReactNode | ReactNode[]' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ContainerClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              disableGutters: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the left and right padding is removed.',
                name: 'disableGutters',
                required: !1,
                type: { name: 'boolean' },
              },
              fixed: {
                defaultValue: { value: 'false' },
                description:
                  "Set the max-width to match the min-width of the current breakpoint.\nThis is useful if you'd prefer to design for a fixed set of sizes\ninstead of trying to accommodate a fully fluid viewport.\nIt's fluid by default.",
                name: 'fixed',
                required: !1,
                type: { name: 'boolean' },
              },
              maxWidth: {
                defaultValue: { value: "'lg'" },
                description:
                  'Determine the max-width of the container.\nThe container width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.',
                name: 'maxWidth',
                required: !1,
                type: { name: 'false | Breakpoint' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"stripped"' }, { value: '"plain"' }],
                },
              },
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !0,
                type: { name: 'any[]' },
              },
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !0,
                type: { name: 'ITableColumn[]' },
              },
              labelPlural: {
                defaultValue: null,
                description: '',
                name: 'labelPlural',
                required: !1,
                type: { name: 'string' },
              },
              onClickRow: {
                defaultValue: null,
                description: '',
                name: 'onClickRow',
                required: !1,
                type: { name: '((listItem: any, index: number) => void)' },
              },
              forEachDerivedColumn: {
                defaultValue: null,
                description: '',
                name: 'forEachDerivedColumn',
                required: !1,
                type: {
                  name: '((config: IForEachDerivedColumnConfiguration) => ReactNode)',
                },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              errorMessage: {
                defaultValue: null,
                description: '',
                name: 'errorMessage',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/FullPageTable.tsx#FullPageTable'
            ] = {
              docgenInfo: FullPageTable.__docgenInfo,
              name: 'FullPageTable',
              path: 'src/components/FullPageTable.tsx#FullPageTable',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var CameraAlt = __webpack_require__(
          './node_modules/@mui/icons-material/CameraAlt.js'
        ),
        Close = __webpack_require__(
          './node_modules/@mui/icons-material/Close.js'
        ),
        Replay = __webpack_require__(
          './node_modules/@mui/icons-material/Replay.js'
        ),
        FormControl = __webpack_require__(
          './node_modules/@mui/material/FormControl/FormControl.js'
        ),
        Avatar_Avatar = __webpack_require__(
          './node_modules/@mui/material/Avatar/Avatar.js'
        ),
        FormHelperText = __webpack_require__(
          './node_modules/@mui/material/FormHelperText/FormHelperText.js'
        ),
        ImageSelector = function ImageSelector(_ref) {
          var _error,
            helperText = _ref.helperText,
            error = _ref.error,
            onChange = _ref.onChange,
            name = _ref.name,
            value = _ref.value,
            upload = _ref.upload,
            _ref2 = (0, formik_esm.u6)() || {},
            touched = _ref2.touched,
            errors = _ref2.errors;
          (value = useFormikValue({ value: value, name: name })),
            (null !== (_error = error) && void 0 !== _error) ||
              (error = (function () {
                if (errors && touched && name && touched[name])
                  return Boolean(errors[name]);
              })());
          var _useState = (0, react.useState)(null),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            fileField = _useState2[0],
            setFileField = _useState2[1],
            _useFileUpload = (function useFileUpload(_ref) {
              var fileField = _ref.fileField,
                upload = _ref.upload,
                name = _ref.name,
                value = _ref.value,
                onChange = _ref.onChange,
                handleChange = ((0, formik_esm.u6)() || {}).handleChange;
              value = useFormikValue({ value: value, name: name });
              var _useState = (0, react.useState)([]),
                _useState2 = (0, slicedToArray.Z)(_useState, 2),
                files = _useState2[0],
                setFiles = _useState2[1];
              return (
                (0, react.useEffect)(
                  function () {
                    if (fileField) {
                      var changeEventCallback = (function () {
                        var _ref3 = (0, asyncToGenerator.Z)(
                          regenerator_default().mark(function _callee() {
                            var existingFileNames, newImages, nextImages;
                            return regenerator_default().wrap(function _callee$(
                              _context
                            ) {
                              for (;;)
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    if (
                                      !(
                                        fileField.files &&
                                        fileField.files.length > 0
                                      )
                                    ) {
                                      _context.next = 8;
                                      break;
                                    }
                                    return (
                                      (existingFileNames = files.map(function (
                                        image
                                      ) {
                                        return (
                                          image.originalFile.name +
                                          image.originalFile.size
                                        );
                                      })),
                                      (_context.next = 4),
                                      Promise.all(
                                        (0, toConsumableArray.Z)(
                                          fileField.files
                                        )
                                          .filter(function (file) {
                                            return !existingFileNames.includes(
                                              file.name + file.size
                                            );
                                          })
                                          .map(function (file) {
                                            return new Promise(function (
                                              resolve,
                                              reject
                                            ) {
                                              var reader = new FileReader();
                                              reader.readAsDataURL(file),
                                                (reader.onload = function () {
                                                  return resolve({
                                                    base64: reader.result,
                                                    originalFile: file,
                                                  });
                                                }),
                                                (reader.onerror = function (
                                                  error
                                                ) {
                                                  return reject(error);
                                                });
                                            });
                                          })
                                      )
                                    );
                                  case 4:
                                    (newImages = _context.sent),
                                      (fileField.value = ''),
                                      (nextImages = [].concat(
                                        (0, toConsumableArray.Z)(files),
                                        (0, toConsumableArray.Z)(
                                          upload
                                            ? newImages.map(function (
                                                newImage
                                              ) {
                                                var originalFile =
                                                    newImage.originalFile,
                                                  retryImageUpload =
                                                    function retryImageUpload() {
                                                      setFiles(function (
                                                        prevImages
                                                      ) {
                                                        var stateImage =
                                                          prevImages.find(
                                                            function (_ref4) {
                                                              return (
                                                                _ref4.originalFile ===
                                                                originalFile
                                                              );
                                                            }
                                                          );
                                                        return stateImage
                                                          ? ((stateImage.uploadError =
                                                              ''),
                                                            delete stateImage.retryUpload,
                                                            Object.assign(
                                                              stateImage,
                                                              uploadImageFile()
                                                            ),
                                                            (0,
                                                            toConsumableArray.Z)(
                                                              prevImages
                                                            ))
                                                          : prevImages;
                                                      });
                                                    },
                                                  uploadImageFile =
                                                    function uploadImageFile() {
                                                      var _upload = upload(
                                                          originalFile,
                                                          {
                                                            onProgress:
                                                              function onProgress(
                                                                progress
                                                              ) {
                                                                setFiles(
                                                                  function (
                                                                    prevImages
                                                                  ) {
                                                                    var stateImage =
                                                                      prevImages.find(
                                                                        function (
                                                                          _ref5
                                                                        ) {
                                                                          return (
                                                                            _ref5.originalFile ===
                                                                            originalFile
                                                                          );
                                                                        }
                                                                      );
                                                                    return stateImage
                                                                      ? ((stateImage.uploadProgress =
                                                                          progress),
                                                                        (0,
                                                                        toConsumableArray.Z)(
                                                                          prevImages
                                                                        ))
                                                                      : prevImages;
                                                                  }
                                                                );
                                                              },
                                                            onError:
                                                              function onError(
                                                                err
                                                              ) {
                                                                setFiles(
                                                                  function (
                                                                    prevImages
                                                                  ) {
                                                                    var stateImage =
                                                                      prevImages.find(
                                                                        function (
                                                                          _ref6
                                                                        ) {
                                                                          return (
                                                                            _ref6.originalFile ===
                                                                            originalFile
                                                                          );
                                                                        }
                                                                      );
                                                                    return stateImage
                                                                      ? ((stateImage.uploadError =
                                                                          err.message),
                                                                        (stateImage.retryUpload =
                                                                          retryImageUpload),
                                                                        (0,
                                                                        toConsumableArray.Z)(
                                                                          prevImages
                                                                        ))
                                                                      : prevImages;
                                                                  }
                                                                );
                                                              },
                                                            onSuccess:
                                                              function onSuccess(
                                                                payload
                                                              ) {
                                                                payload.id &&
                                                                  setFiles(
                                                                    function (
                                                                      prevImages
                                                                    ) {
                                                                      var stateImage =
                                                                        prevImages.find(
                                                                          function (
                                                                            _ref7
                                                                          ) {
                                                                            return (
                                                                              _ref7.originalFile ===
                                                                              originalFile
                                                                            );
                                                                          }
                                                                        );
                                                                      return stateImage
                                                                        ? ((stateImage.id =
                                                                            payload.id),
                                                                          (0,
                                                                          toConsumableArray.Z)(
                                                                            prevImages
                                                                          ))
                                                                        : prevImages;
                                                                    }
                                                                  );
                                                              },
                                                            onComplete:
                                                              function onComplete() {
                                                                setFiles(
                                                                  function (
                                                                    prevImages
                                                                  ) {
                                                                    var stateImage =
                                                                      prevImages.find(
                                                                        function (
                                                                          _ref8
                                                                        ) {
                                                                          return (
                                                                            _ref8.originalFile ===
                                                                            originalFile
                                                                          );
                                                                        }
                                                                      );
                                                                    return stateImage
                                                                      ? ((stateImage.uploading =
                                                                          !1),
                                                                        delete stateImage.cancelUpload,
                                                                        (0,
                                                                        toConsumableArray.Z)(
                                                                          prevImages
                                                                        ))
                                                                      : prevImages;
                                                                  }
                                                                );
                                                              },
                                                          }
                                                        ),
                                                        cancel = _upload.cancel;
                                                      return (0,
                                                      objectSpread2.Z)(
                                                        (0, objectSpread2.Z)(
                                                          {},
                                                          newImage
                                                        ),
                                                        {},
                                                        {
                                                          uploading: !0,
                                                          cancelUpload: cancel,
                                                        }
                                                      );
                                                    };
                                                return uploadImageFile();
                                              })
                                            : newImages
                                        )
                                      )),
                                      setFiles(nextImages);
                                  case 8:
                                  case 'end':
                                    return _context.stop();
                                }
                            },
                            _callee);
                          })
                        );
                        return function changeEventCallback() {
                          return _ref3.apply(this, arguments);
                        };
                      })();
                      return (
                        fileField.addEventListener(
                          'change',
                          changeEventCallback
                        ),
                        function () {
                          fileField.removeEventListener(
                            'change',
                            changeEventCallback
                          );
                        }
                      );
                    }
                  },
                  [fileField, files, upload]
                ),
                (0, react.useEffect)(
                  function () {
                    value &&
                      value
                        .map(function (_ref9) {
                          return _ref9.base64;
                        })
                        .join('') !==
                        files
                          .map(function (_ref10) {
                            return _ref10.base64;
                          })
                          .join('') &&
                      setFiles(value);
                  },
                  [files, value]
                ),
                (0, react.useEffect)(
                  function () {
                    if (null != onChange ? onChange : handleChange) {
                      var event = new Event('change', { bubbles: !0 });
                      Object.defineProperty(event, 'target', {
                        writable: !1,
                        value: {
                          name: name,
                          value: (0, toConsumableArray.Z)(files),
                        },
                      }),
                        (null != onChange ? onChange : handleChange)(event);
                    }
                  },
                  [handleChange, files, name, onChange]
                ),
                { files: files, setFiles: setFiles }
              );
            })({
              fileField: fileField,
              upload: upload,
              name: name,
              value: value,
              onChange: onChange,
            }),
            images = _useFileUpload.files,
            setImages = _useFileUpload.setFiles,
            theme = (0, styles_useTheme.Z)(),
            alphaBGColor = (0, colorManipulator.Fq)(
              theme.palette.text.primary,
              0.3
            ),
            wrapperStyle = {};
          return (
            error && (wrapperStyle.borderColor = theme.palette.error.main),
            (0, jsx_runtime.jsxs)(FormControl.Z, {
              fullWidth: !0,
              error: error,
              children: [
                (0, jsx_runtime.jsxs)(Card_Card.Z, {
                  sx: (0, objectSpread2.Z)(
                    {
                      p: 1.5,
                      borderRadius: 1,
                      bgcolor: (0, colorManipulator._j)(
                        theme.palette.background.paper,
                        0.03
                      ),
                      borderStyle: 'dashed',
                    },
                    wrapperStyle
                  ),
                  children: [
                    (0, jsx_runtime.jsx)('input', {
                      type: 'file',
                      ref: function ref(fileField) {
                        setFileField(fileField);
                      },
                      multiple: !0,
                      accept: '.jpg,.png,.jpeg,.bmp',
                      style: { display: 'none' },
                    }),
                    (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                      container: !0,
                      spacing: 1.5,
                      children: [
                        images.map(function (_ref3, index) {
                          var base64 = _ref3.base64,
                            uploading = _ref3.uploading,
                            uploadProgress = _ref3.uploadProgress,
                            uploadError = _ref3.uploadError,
                            cancelUpload = _ref3.cancelUpload,
                            retryUpload = _ref3.retryUpload;
                          return (0, jsx_runtime.jsx)(
                            Grid_Grid.ZP,
                            {
                              item: !0,
                              xs: 4,
                              sm: 3,
                              md: 2,
                              children: (0, jsx_runtime.jsxs)(Card_Card.Z, {
                                sx: { borderRadius: 1, position: 'relative' },
                                children: [
                                  (0, jsx_runtime.jsx)(Avatar_Avatar.Z, {
                                    sx: {
                                      borderRadius: 1,
                                      width: '100%',
                                      height: 80,
                                      bgcolor: '#fff',
                                      opacity:
                                        uploading || uploadError ? 0.3 : 1,
                                    },
                                    src: base64,
                                  }),
                                  (0, jsx_runtime.jsxs)(Box_Box.Z, {
                                    sx: {
                                      position: 'absolute',
                                      right: 5,
                                      top: 5,
                                      display: 'flex',
                                      gap: '5px',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(
                                        IconButton_IconButton.Z,
                                        {
                                          onClick: function onClick() {
                                            !(function handleClickImageRemoveButton(
                                              index
                                            ) {
                                              images.splice(index, 1),
                                                setImages(
                                                  (0, toConsumableArray.Z)(
                                                    images
                                                  )
                                                );
                                            })(index),
                                              cancelUpload && cancelUpload();
                                          },
                                          sx: {
                                            bgcolor: alphaBGColor,
                                            '&:hover': {
                                              bgcolor: alphaBGColor,
                                            },
                                            color:
                                              theme.palette.background.paper,
                                          },
                                          size: 'small',
                                          children: (0, jsx_runtime.jsx)(
                                            Close.Z,
                                            { sx: { fontSize: '12px' } }
                                          ),
                                        }
                                      ),
                                      retryUpload &&
                                        (0, jsx_runtime.jsx)(
                                          IconButton_IconButton.Z,
                                          {
                                            onClick: retryUpload,
                                            sx: {
                                              bgcolor: alphaBGColor,
                                              '&:hover': {
                                                bgcolor: alphaBGColor,
                                              },
                                              color:
                                                theme.palette.background.paper,
                                            },
                                            size: 'small',
                                            children: (0, jsx_runtime.jsx)(
                                              Replay.Z,
                                              { sx: { fontSize: '12px' } }
                                            ),
                                          }
                                        ),
                                    ],
                                  }),
                                  uploadProgress && (uploading || uploadError)
                                    ? (0, jsx_runtime.jsx)(Box_Box.Z, {
                                        sx: {
                                          position: 'absolute',
                                          height: 3,
                                          borderRadius: '4px',
                                          width: ''.concat(uploadProgress, '%'),
                                          bgcolor: uploadError
                                            ? '#D04437'
                                            : '#006BFF',
                                          bottom: 0,
                                        },
                                      })
                                    : null,
                                ],
                              }),
                            },
                            index
                          );
                        }),
                        (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                          item: !0,
                          xs: 4,
                          sm: 3,
                          md: 2,
                          children: (0, jsx_runtime.jsxs)(Button_Button.Z, {
                            onClick: function onClick() {
                              null == fileField || fileField.click();
                            },
                            sx: {
                              borderRadius: 1,
                              width: '100%',
                              height: '80px !important',
                              bgcolor: theme.palette.background.paper,
                              color: '#BABCC1',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              border: 'none',
                              '&:hover': {
                                bgcolor: theme.palette.background.paper,
                              },
                            },
                            children: [
                              (0, jsx_runtime.jsx)(CameraAlt.Z, {}),
                              (0, jsx_runtime.jsx)(Typography_Typography.Z, {
                                variant: 'body2',
                                sx: { fontSize: 12, color: '#BABCC1' },
                                children: 'Add Photos',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                helperText &&
                  (0, jsx_runtime.jsx)(FormHelperText.Z, {
                    children: helperText,
                  }),
              ],
            })
          );
        };
      try {
        (ImageSelector.displayName = 'ImageSelector'),
          (ImageSelector.__docgenInfo = {
            description: '',
            displayName: 'ImageSelector',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'IFile[]' },
              },
              onChange: {
                defaultValue: null,
                description: 'Callback fired when the value is changed.',
                name: 'onChange',
                required: !1,
                type: { name: 'any' },
              },
              upload: {
                defaultValue: null,
                description: '',
                name: 'upload',
                required: !1,
                type: { name: 'IFileUploadFunction' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ImageSelector.tsx#ImageSelector'
            ] = {
              docgenInfo: ImageSelector.__docgenInfo,
              name: 'ImageSelector',
              path: 'src/components/ImageSelector.tsx#ImageSelector',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var react_number_format_es = __webpack_require__(
          './node_modules/react-number-format/dist/react-number-format.es.js'
        ),
        TextField_TextField = __webpack_require__(
          './node_modules/@mui/material/TextField/TextField.js'
        ),
        TextField_excluded = [
          'label',
          'required',
          'variant',
          'size',
          'multiline',
          'rows',
          'fullWidth',
          'name',
          'value',
          'onBlur',
          'onChange',
          'error',
          'helperText',
        ],
        InputFields_TextField_TextField = (0, react.forwardRef)(
          function TextField(_ref, ref) {
            var label = _ref.label,
              required = _ref.required,
              variant = _ref.variant,
              size = _ref.size,
              multiline = _ref.multiline,
              rows = _ref.rows,
              fullWidth = _ref.fullWidth,
              name = _ref.name,
              value = _ref.value,
              onBlur = _ref.onBlur,
              onChange = _ref.onChange,
              error = _ref.error,
              helperText = _ref.helperText,
              rest = (0, objectWithoutProperties.Z)(_ref, TextField_excluded),
              _useLoadingContext = utils_useLoadingContext(),
              loading = _useLoadingContext.loading,
              errorMessage = _useLoadingContext.errorMessage,
              _ref2 = (0, formik_esm.u6)() || {},
              handleBlur = _ref2.handleBlur,
              handleChange = _ref2.handleChange,
              touched = _ref2.touched,
              errors = _ref2.errors;
            value = useFormikValue({ value: value, name: name });
            var labelSkeletonWidth =
              'string' == typeof label ? 7 * label.length : 0;
            return errorMessage
              ? (0, jsx_runtime.jsx)(TextField_TextField.Z, {
                  size: size,
                  variant: variant,
                  multiline: multiline,
                  rows: rows,
                  fullWidth: fullWidth,
                  label: (0, jsx_runtime.jsx)(components_ErrorSkeleton, {
                    width: labelSkeletonWidth,
                  }),
                  value: '',
                  disabled: !0,
                })
              : loading
              ? (0, jsx_runtime.jsx)(TextField_TextField.Z, {
                  size: size,
                  variant: variant,
                  multiline: multiline,
                  rows: rows,
                  fullWidth: fullWidth,
                  label: (0, jsx_runtime.jsx)(Skeleton_Skeleton.Z, {
                    width: labelSkeletonWidth,
                  }),
                  value: '',
                  disabled: !0,
                })
              : (0, jsx_runtime.jsx)(
                  TextField_TextField.Z,
                  (0, objectSpread2.Z)(
                    (0, objectSpread2.Z)(
                      {
                        ref: ref,
                        size: size,
                        label: label,
                        variant: variant,
                        required: required,
                        multiline: multiline,
                        rows: rows,
                        fullWidth: fullWidth,
                        name: name,
                      },
                      rest
                    ),
                    {},
                    {
                      value: value,
                      onChange: null != onChange ? onChange : handleChange,
                      onBlur: null != onBlur ? onBlur : handleBlur,
                      error:
                        null != error
                          ? error
                          : (function () {
                              if (errors && touched && name && touched[name])
                                return Boolean(errors[name]);
                            })(),
                      helperText:
                        null != helperText
                          ? helperText
                          : (function () {
                              if (errors && touched && name && touched[name])
                                return errors[name];
                            })(),
                    }
                  )
                );
          }
        ),
        InputFields_TextField = InputFields_TextField_TextField;
      try {
        (InputFields_TextField_TextField.displayName = 'TextField'),
          (InputFields_TextField_TextField.__docgenInfo = {
            description: '',
            displayName: 'TextField',
            props: {
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/TextField.tsx#TextField'
            ] = {
              docgenInfo: InputFields_TextField_TextField.__docgenInfo,
              name: 'TextField',
              path: 'src/components/InputFields/TextField.tsx#TextField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var NumberInputField_excluded = ['onValueChange'],
        NumberInputField_excluded2 = [
          'setFieldValue',
          'InputProps',
          'value',
          'name',
        ],
        NumberField = (0, react.forwardRef)(function (_ref, inputRef) {
          var _onValueChange = _ref.onValueChange,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              NumberInputField_excluded
            );
          return (0, jsx_runtime.jsx)(
            react_number_format_es.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, rest),
              {},
              {
                getInputRef: function getInputRef(inputField) {
                  if (inputField) {
                    var descriptor = Object.getOwnPropertyDescriptor(
                      inputField,
                      'value'
                    );
                    if (null != descriptor && descriptor.get) {
                      var _get = descriptor.get;
                      Object.defineProperty(inputField, 'value', {
                        get: function get() {
                          return String(_get.call(this)).replace(/\D/g, '');
                        },
                      });
                    }
                  }
                  inputRef(inputField);
                },
                onValueChange: function onValueChange(values) {
                  _onValueChange(values.floatValue);
                },
                thousandSeparator: !0,
              }
            )
          );
        });
      NumberField.displayName = 'NumberField';
      var NumberInputField = function NumberInputField(_ref2) {
          var setFieldValue = _ref2.setFieldValue,
            InputProps = _ref2.InputProps,
            value = _ref2.value,
            name = _ref2.name,
            rest = (0, objectWithoutProperties.Z)(
              _ref2,
              NumberInputField_excluded2
            );
          return (
            (value = useFormikValue({ value: value, name: name })),
            (0, jsx_runtime.jsx)(
              InputFields_TextField,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, rest),
                {},
                {
                  name: name,
                  value: value,
                  InputProps: (0, objectSpread2.Z)(
                    (0, objectSpread2.Z)({}, InputProps || {}),
                    {},
                    {
                      inputComponent: NumberField,
                      inputProps: {
                        onValueChange: function onValueChange(value) {
                          'function' == typeof setFieldValue &&
                            setFieldValue(value);
                        },
                      },
                    }
                  ),
                }
              )
            )
          );
        },
        InputFields_NumberInputField = NumberInputField;
      try {
        (NumberField.displayName = 'NumberField'),
          (NumberField.__docgenInfo = {
            description: '',
            displayName: 'NumberField',
            props: {
              setFieldValue: {
                defaultValue: null,
                description: '',
                name: 'setFieldValue',
                required: !1,
                type: { name: '((value: number) => void)' },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/NumberInputField.tsx#NumberField'
            ] = {
              docgenInfo: NumberField.__docgenInfo,
              name: 'NumberField',
              path: 'src/components/InputFields/NumberInputField.tsx#NumberField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var CurrencyInputField_excluded = ['showCurrency', 'InputProps'],
        CurrencyInputField = function CurrencyInputField(_ref) {
          var _ref$showCurrency = _ref.showCurrency,
            showCurrency = void 0 !== _ref$showCurrency && _ref$showCurrency,
            InputProps = _ref.InputProps,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              CurrencyInputField_excluded
            ),
            inputProps = {};
          return (
            showCurrency &&
              (inputProps.endAdornment = (0, jsx_runtime.jsx)(
                Typography_Typography.Z,
                { variant: 'body2', children: 'UGX' }
              )),
            (0, jsx_runtime.jsx)(
              InputFields_NumberInputField,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, rest),
                {},
                {
                  InputProps: (0, objectSpread2.Z)(
                    (0, objectSpread2.Z)({}, inputProps),
                    InputProps
                  ),
                }
              )
            )
          );
        };
      try {
        (CurrencyInputField.displayName = 'CurrencyInputField'),
          (CurrencyInputField.__docgenInfo = {
            description: '',
            displayName: 'CurrencyInputField',
            props: {
              showCurrency: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showCurrency',
                required: !1,
                type: { name: 'boolean' },
              },
              setFieldValue: {
                defaultValue: null,
                description: '',
                name: 'setFieldValue',
                required: !1,
                type: { name: '((value: number) => void)' },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/CurrencyInputField.tsx#CurrencyInputField'
            ] = {
              docgenInfo: CurrencyInputField.__docgenInfo,
              name: 'CurrencyInputField',
              path: 'src/components/InputFields/CurrencyInputField.tsx#CurrencyInputField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ExpandMore = __webpack_require__(
          './node_modules/@mui/icons-material/ExpandMore.js'
        ),
        Popper_Popper = __webpack_require__(
          './node_modules/@mui/material/Popper/Popper.js'
        ),
        Grow_Grow = __webpack_require__(
          './node_modules/@mui/material/Grow/Grow.js'
        ),
        ClickAwayListener_ClickAwayListener = __webpack_require__(
          './node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js'
        ),
        MenuItem = __webpack_require__(
          './node_modules/@mui/material/MenuItem/MenuItem.js'
        ),
        DataDropdownField_excluded = [
          'SelectProps',
          'getDropdownEntities',
          'getDropdownOptions',
          'name',
          'value',
          'dataKey',
          'options',
          'sortOptions',
          'onChange',
          'onBlur',
          'error',
          'helperText',
        ],
        DEFAULT_NUMBER_OF_OPTIONS_TO_RENDER = Math.ceil(200 / 36),
        DataDropdownField = function DataDropdownField(_ref) {
          var SelectProps = _ref.SelectProps,
            getDropdownEntities = _ref.getDropdownEntities,
            getDropdownOptions = _ref.getDropdownOptions,
            name = _ref.name,
            value = _ref.value,
            dataKey = _ref.dataKey,
            propOptions = _ref.options,
            _ref$sortOptions = _ref.sortOptions,
            sortOptions = void 0 !== _ref$sortOptions && _ref$sortOptions,
            onChange = _ref.onChange,
            onBlur = _ref.onBlur,
            error = _ref.error,
            helperText = _ref.helperText,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              DataDropdownField_excluded
            );
          value = useFormikValue({ value: value, name: name });
          var _ref2 = (0, formik_esm.u6)() || {},
            formikHandleBlur = _ref2.handleBlur,
            formikHandleChange = _ref2.handleChange,
            touched = _ref2.touched,
            errors = _ref2.errors,
            preferStale = (function useAPIDataContext() {
              return (0, react.useContext)(contexts._Q);
            })().preferStale,
            theme = (0, styles_useTheme.Z)(),
            _useAPIService = useAPIService([], dataKey),
            load = _useAPIService.load,
            loaded = _useAPIService.loaded,
            loading = _useAPIService.loading,
            dropdownEntities = _useAPIService.record,
            errorMessage = _useAPIService.errorMessage,
            _useState = (0, react.useState)(
              DEFAULT_NUMBER_OF_OPTIONS_TO_RENDER
            ),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            limit = _useState2[0],
            setLimit = _useState2[1],
            _useState3 = (0, react.useState)(''),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            searchTerm = _useState4[0],
            setSearchTerm = _useState4[1],
            _useState5 = (0, react.useState)(!1),
            _useState6 = (0, slicedToArray.Z)(_useState5, 2),
            open = _useState6[0],
            setOpen = _useState6[1],
            anchorRef = (0, react.useRef)(null),
            isTouchedRef = (0, react.useRef)(!1),
            _useState7 = (0, react.useState)([]),
            _useState8 = (0, slicedToArray.Z)(_useState7, 2),
            options = _useState8[0],
            setOptions = _useState8[1],
            _useState9 = (0, react.useState)([]),
            _useState10 = (0, slicedToArray.Z)(_useState9, 2),
            selectedOptions = _useState10[0],
            setSelectedOptions = _useState10[1],
            _useState11 = (0, react.useState)([]),
            _useState12 = (0, slicedToArray.Z)(_useState11, 2),
            missingOptionValues = _useState12[0],
            setMissingOptionValues = _useState12[1],
            loadOptions = (0, react.useCallback)(
              (0, asyncToGenerator.Z)(
                regenerator_default().mark(function _callee() {
                  var reloadOptions,
                    _args = arguments;
                  return regenerator_default().wrap(function _callee$(
                    _context
                  ) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          (reloadOptions =
                            _args.length > 0 &&
                            void 0 !== _args[0] &&
                            _args[0]),
                            loading ||
                              (loaded && !reloadOptions) ||
                              !(
                                !preferStale ||
                                options.length <= 0 ||
                                reloadOptions
                              ) ||
                              !getDropdownEntities ||
                              load(getDropdownEntities);
                        case 2:
                        case 'end':
                          return _context.stop();
                      }
                  },
                  _callee);
                })
              ),
              [
                getDropdownEntities,
                load,
                loaded,
                loading,
                options.length,
                preferStale,
              ]
            ),
            selectedOptionDisplayString = selectedOptions
              .filter(function (_ref4) {
                return 'string' == typeof _ref4.label;
              })
              .map(function (_ref5) {
                return _ref5.label;
              })
              .join(', '),
            selectedOptionValue = (0, react.useMemo)(
              function () {
                var _selectedOptions$;
                return null != SelectProps && SelectProps.multiple
                  ? selectedOptions.map(function (_ref6) {
                      return _ref6.value;
                    })
                  : null === (_selectedOptions$ = selectedOptions[0]) ||
                    void 0 === _selectedOptions$
                  ? void 0
                  : _selectedOptions$.value;
              },
              [
                null == SelectProps ? void 0 : SelectProps.multiple,
                selectedOptions,
              ]
            ),
            handleBlur = function handleBlur() {
              if (onBlur || formikHandleBlur) {
                var event = new Event('blur', { bubbles: !0 });
                Object.defineProperty(event, 'target', {
                  writable: !1,
                  value: { name: name, value: selectedOptionValue },
                }),
                  (onBlur || formikHandleBlur)(event);
              }
            },
            handleChange = (0, react.useCallback)(
              function () {
                if (onChange || formikHandleChange) {
                  var event = new Event('change', { bubbles: !0 });
                  Object.defineProperty(event, 'target', {
                    writable: !1,
                    value: { name: name, value: selectedOptionValue },
                  }),
                    (onChange || formikHandleChange)(event);
                }
              },
              [formikHandleChange, name, onChange, selectedOptionValue]
            ),
            handleClose = function handleClose() {
              setOpen(!1);
            };
          if (
            ((0, react.useEffect)(
              function () {
                if (value) {
                  var fieldValues = Array.isArray(value) ? value : [value],
                    optionValues = options.map(function (_ref7) {
                      return _ref7.value;
                    });
                  setMissingOptionValues(function (prevMissingOptionValues) {
                    var newMissingOptionValues = fieldValues.filter(function (
                      value
                    ) {
                      return !optionValues.includes(value);
                    });
                    return object_hash_default()(newMissingOptionValues) !==
                      object_hash_default()(prevMissingOptionValues)
                      ? newMissingOptionValues
                      : prevMissingOptionValues;
                  });
                }
              },
              [errorMessage, loadOptions, options, value]
            ),
            (0, react.useEffect)(
              function () {
                missingOptionValues.length > 0 &&
                  !errorMessage &&
                  loadOptions();
              },
              [errorMessage, loadOptions, missingOptionValues.length]
            ),
            (0, react.useEffect)(
              function () {
                setOptions(
                  propOptions ||
                    (getDropdownOptions
                      ? getDropdownOptions(dropdownEntities)
                      : dropdownEntities)
                );
              },
              [dropdownEntities, getDropdownOptions, propOptions, setOptions]
            ),
            (0, react.useEffect)(
              function () {
                sortOptions &&
                  options.sort(function (_ref8, _ref9) {
                    var aLabel = _ref8.label,
                      bLabel = _ref9.label;
                    return 'string' == typeof aLabel &&
                      'string' == typeof bLabel
                      ? aLabel.localeCompare(bLabel)
                      : 0;
                  });
              },
              [options, sortOptions]
            ),
            (0, react.useEffect)(
              function () {
                setSearchTerm(selectedOptionDisplayString);
              },
              [selectedOptionDisplayString]
            ),
            (0, react.useEffect)(
              function () {
                !0 === isTouchedRef.current && handleChange();
              },
              [handleChange]
            ),
            (0, react.useEffect)(
              function () {
                setSelectedOptions(function (prevSelectedOptions) {
                  var newSelectedOptions = (
                    Array.isArray(value) ? value : [value]
                  )
                    .map(function (value) {
                      return options.find(function (_ref10) {
                        var optionValue = _ref10.value;
                        return value === optionValue;
                      });
                    })
                    .filter(function (option) {
                      return option;
                    });
                  return object_hash_default()(newSelectedOptions) !==
                    object_hash_default()(prevSelectedOptions)
                    ? newSelectedOptions
                    : prevSelectedOptions;
                });
              },
              [options, value]
            ),
            value && loading && missingOptionValues.length > 0)
          )
            return (0, jsx_runtime.jsx)(contexts.PK, {
              value: { loading: loading, errorMessage: errorMessage },
              children: (0, jsx_runtime.jsx)(
                InputFields_TextField,
                (0, objectSpread2.Z)({}, rest)
              ),
            });
          var errorProps = {};
          errorMessage &&
            ((errorProps.error = !0),
            (errorProps.helperText = (0, jsx_runtime.jsx)(
              components_RetryErrorMessage,
              { message: errorMessage, retry: loadOptions }
            )));
          var filteredOptions = (function () {
              if (searchTerm && searchTerm !== selectedOptionDisplayString) {
                var searchFilterTerms = searchTerm
                  .split(',')
                  .map(function (string) {
                    return string.trim().toLowerCase();
                  });
                return options.filter(function (_ref11) {
                  var label = _ref11.label;
                  return (
                    'string' == typeof label &&
                    searchFilterTerms.some(function (searchFilterTerm) {
                      return label.toLowerCase().match(searchFilterTerm);
                    })
                  );
                });
              }
              return options;
            })(),
            displayOptions = filteredOptions.slice(0, limit);
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(
                InputFields_TextField,
                (0, objectSpread2.Z)(
                  (0, objectSpread2.Z)(
                    {
                      onClick: function onClick() {
                        setTimeout(function () {
                          return setOpen(!0);
                        }, 200),
                          loadOptions();
                      },
                      onBlur: function onBlur() {
                        (isTouchedRef.current = !0), handleBlur();
                      },
                      onChange: function onChange(event) {
                        setSearchTerm(event.target.value);
                      },
                      InputProps: {
                        ref: anchorRef,
                        endAdornment: (0, jsx_runtime.jsx)(ExpandMore.Z, {}),
                      },
                      value: searchTerm,
                      error:
                        null != error
                          ? error
                          : (function () {
                              if (errors && touched && name && touched[name])
                                return Boolean(errors[name]);
                            })(),
                      helperText:
                        null != helperText
                          ? helperText
                          : (function () {
                              if (errors && touched && name && touched[name])
                                return errors[name];
                            })(),
                    },
                    rest
                  ),
                  errorProps
                )
              ),
              (0, jsx_runtime.jsx)(Popper_Popper.Z, {
                open: open,
                anchorEl: anchorRef.current,
                transition: !0,
                placement: 'bottom-start',
                children: function children(_ref12) {
                  var TransitionProps = _ref12.TransitionProps;
                  return (0, jsx_runtime.jsx)(
                    Grow_Grow.Z,
                    (0, objectSpread2.Z)(
                      (0, objectSpread2.Z)({}, TransitionProps),
                      {},
                      {
                        children: (0, jsx_runtime.jsx)(Box_Box.Z, {
                          children: (0, jsx_runtime.jsx)(
                            ClickAwayListener_ClickAwayListener.Z,
                            {
                              onClickAway: handleClose,
                              children: (0, jsx_runtime.jsxs)(Card_Card.Z, {
                                children: [
                                  (0, jsx_runtime.jsx)(Box_Box.Z, {
                                    onScroll: function onScroll(event) {
                                      var scrollTop = event.target.scrollTop,
                                        topOptionCount = Math.floor(
                                          scrollTop / 36
                                        );
                                      setLimit(
                                        topOptionCount +
                                          DEFAULT_NUMBER_OF_OPTIONS_TO_RENDER
                                      );
                                    },
                                    sx: {
                                      minWidth: anchorRef.current
                                        ? anchorRef.current.offsetWidth
                                        : 200,
                                      maxHeight: 200,
                                      boxSizing: 'border-box',
                                      overflowY: 'auto',
                                    },
                                    children: (0, jsx_runtime.jsx)(Box_Box.Z, {
                                      component: 'ul',
                                      sx: {
                                        m: 0,
                                        p: 0,
                                        minHeight: 36 * filteredOptions.length,
                                      },
                                      children:
                                        displayOptions.length > 0
                                          ? displayOptions.map(function (
                                              _ref13
                                            ) {
                                              var value = _ref13.value,
                                                label = _ref13.label;
                                              return (0, jsx_runtime.jsx)(
                                                MenuItem.Z,
                                                {
                                                  value: value,
                                                  onClick: function onClick() {
                                                    null != SelectProps &&
                                                    SelectProps.multiple
                                                      ? setSelectedOptions(
                                                          function (
                                                            prevOptions
                                                          ) {
                                                            var selectedOption =
                                                              prevOptions.find(
                                                                function (
                                                                  _ref14
                                                                ) {
                                                                  return (
                                                                    _ref14.value ===
                                                                    value
                                                                  );
                                                                }
                                                              );
                                                            return (
                                                              selectedOption
                                                                ? prevOptions.splice(
                                                                    prevOptions.indexOf(
                                                                      selectedOption
                                                                    ),
                                                                    1
                                                                  )
                                                                : prevOptions.push(
                                                                    {
                                                                      value:
                                                                        value,
                                                                      label:
                                                                        label,
                                                                    }
                                                                  ),
                                                              (0,
                                                              toConsumableArray.Z)(
                                                                prevOptions
                                                              )
                                                            );
                                                          }
                                                        )
                                                      : (setSelectedOptions([
                                                          {
                                                            value: value,
                                                            label: label,
                                                          },
                                                        ]),
                                                        handleClose());
                                                  },
                                                  selected: selectedOptions
                                                    .map(function (_ref15) {
                                                      return _ref15.value;
                                                    })
                                                    .includes(value),
                                                  sx: { minHeight: 36 },
                                                  children: label,
                                                },
                                                value
                                              );
                                            })
                                          : loading
                                          ? null
                                          : (0, jsx_runtime.jsx)(MenuItem.Z, {
                                              disabled: !0,
                                              children: (0, jsx_runtime.jsx)(
                                                Typography_Typography.Z,
                                                {
                                                  variant: 'body2',
                                                  color:
                                                    theme.palette.error.main,
                                                  children: 'No options found',
                                                }
                                              ),
                                            }),
                                    }),
                                  }),
                                  getDropdownEntities &&
                                    (0, jsx_runtime.jsx)(Box_Box.Z, {
                                      sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        py: 1,
                                      },
                                      children: (0, jsx_runtime.jsx)(
                                        components_ReloadIconButton,
                                        {
                                          load: function load() {
                                            return loadOptions(!0);
                                          },
                                          loading: loading,
                                        }
                                      ),
                                    }),
                                ],
                              }),
                            }
                          ),
                        }),
                      }
                    )
                  );
                },
              }),
            ],
          });
        };
      try {
        (DataDropdownField.displayName = 'DataDropdownField'),
          (DataDropdownField.__docgenInfo = {
            description: '',
            displayName: 'DataDropdownField',
            props: {
              disableEmptyOption: {
                defaultValue: null,
                description: '',
                name: 'disableEmptyOption',
                required: !1,
                type: { name: 'boolean' },
              },
              getDropdownEntities: {
                defaultValue: null,
                description: '',
                name: 'getDropdownEntities',
                required: !1,
                type: { name: 'IAPIFunction' },
              },
              getDropdownOptions: {
                defaultValue: null,
                description: '',
                name: 'getDropdownOptions',
                required: !1,
                type: { name: '((options: any[]) => IDropdownOption[])' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'IDropdownOption[]' },
              },
              dataKey: {
                defaultValue: null,
                description: '',
                name: 'dataKey',
                required: !1,
                type: { name: 'string' },
              },
              sortOptions: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'sortOptions',
                required: !1,
                type: { name: 'boolean' },
              },
              value: {
                defaultValue: null,
                description:
                  'The value of the `input` element, required for a controlled component.',
                name: 'value',
                required: !1,
                type: { name: 'string | string[]' },
              },
              selectedOption: {
                defaultValue: null,
                description: '',
                name: 'selectedOption',
                required: !1,
                type: { name: 'IDropdownOption' },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/DataDropdownField.tsx#DataDropdownField'
            ] = {
              docgenInfo: DataDropdownField.__docgenInfo,
              name: 'DataDropdownField',
              path: 'src/components/InputFields/DataDropdownField.tsx#DataDropdownField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LocalizationProvider = __webpack_require__(
          './node_modules/@mui/lab/LocalizationProvider/LocalizationProvider.js'
        ),
        MobileDatePicker = __webpack_require__(
          './node_modules/@mui/lab/MobileDatePicker/MobileDatePicker.js'
        ),
        DesktopDatePicker = __webpack_require__(
          './node_modules/@mui/lab/DesktopDatePicker/DesktopDatePicker.js'
        ),
        index_esm = __webpack_require__(
          './node_modules/@date-io/date-fns/build/index.esm.js'
        ),
        constants = __webpack_require__('./src/constants.ts'),
        DateInputField_excluded = ['value', 'name', 'onChange', 'onClick'],
        DateInputField = function DateInputField(_ref) {
          var value = _ref.value,
            name = _ref.name,
            _onChange = _ref.onChange,
            _onClick = _ref.onClick,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              DateInputField_excluded
            );
          value = useFormikValue({ value: value, name: name });
          var handleChange = ((0, formik_esm.u6)() || {}).handleChange,
            smallScreen = utils_useSmallScreen(),
            _useState = (0, react.useState)(null),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            inputField = _useState2[0],
            setInputField = _useState2[1],
            datePickerProps = {
              value: value ? new Date(value) : new Date(),
              onChange: function onChange(date) {
                if (inputField && (!date || !isNaN(date.getTime()))) {
                  inputField.value = date ? date.toISOString() : '';
                  var event = new Event('change', { bubbles: !0 });
                  Object.defineProperty(event, 'target', {
                    writable: !1,
                    value: inputField,
                  }),
                    _onChange && _onChange(event),
                    handleChange && handleChange(event);
                }
              },
              renderInput: function renderInput(params) {
                return (
                  params.inputProps &&
                    ((params.inputProps.value = value
                      ? new Date(params.inputProps.value).toString(constants.K_)
                      : ''),
                    delete params.inputProps.onFocus,
                    delete params.inputProps.onChange,
                    delete params.inputProps.onBlur),
                  delete params.error,
                  (0, jsx_runtime.jsx)(
                    InputFields_TextField,
                    (0, objectSpread2.Z)(
                      (0, objectSpread2.Z)(
                        (0, objectSpread2.Z)({}, params),
                        rest
                      ),
                      {},
                      {
                        name: name,
                        onClick: function onClick(event) {
                          var _inputField$nextEleme, _inputField$nextEleme2;
                          null == inputField ||
                            null ===
                              (_inputField$nextEleme =
                                inputField.nextElementSibling) ||
                            void 0 === _inputField$nextEleme ||
                            null ===
                              (_inputField$nextEleme2 =
                                _inputField$nextEleme.querySelector(
                                  'button'
                                )) ||
                            void 0 === _inputField$nextEleme2 ||
                            _inputField$nextEleme2.click(),
                            _onClick && _onClick(event);
                        },
                        ref: function ref(inputField) {
                          setInputField(
                            null == inputField
                              ? void 0
                              : inputField.querySelector('input')
                          );
                        },
                      }
                    )
                  )
                );
              },
            };
          return (0, jsx_runtime.jsx)(LocalizationProvider.Z, {
            dateAdapter: index_esm.Z,
            children: smallScreen
              ? (0, jsx_runtime.jsx)(
                  MobileDatePicker.Z,
                  (0, objectSpread2.Z)({}, datePickerProps)
                )
              : (0, jsx_runtime.jsx)(
                  DesktopDatePicker.Z,
                  (0, objectSpread2.Z)({}, datePickerProps)
                ),
          });
        };
      try {
        (DateInputField.displayName = 'DateInputField'),
          (DateInputField.__docgenInfo = {
            description: '',
            displayName: 'DateInputField',
            props: {
              value: {
                defaultValue: null,
                description:
                  'The value of the `input` element, required for a controlled component.',
                name: 'value',
                required: !1,
                type: { name: 'string | number' },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/DateInputField.tsx#DateInputField'
            ] = {
              docgenInfo: DateInputField.__docgenInfo,
              name: 'DateInputField',
              path: 'src/components/InputFields/DateInputField.tsx#DateInputField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var InputAdornment = __webpack_require__(
          './node_modules/@mui/material/InputAdornment/InputAdornment.js'
        ),
        FileInputField_excluded = [
          'onClick',
          'onChange',
          'value',
          'name',
          'sx',
        ],
        FileInputField = function FileInputField(_ref) {
          var _value,
            _onClick = _ref.onClick,
            _onChange = _ref.onChange,
            value = _ref.value,
            name = _ref.name,
            sx = _ref.sx,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              FileInputField_excluded
            ),
            _ref2 = (0, formik_esm.u6)() || {},
            handleChange = _ref2.handleChange,
            values = _ref2.values;
          (null !== (_value = value) && void 0 !== _value) ||
            (value = (function () {
              if (values && name && null != values[name]) return values[name];
            })());
          var inputFieldRef = (0, react.useRef)(null),
            _useState = (0, react.useState)(''),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            selectedFileName = _useState2[0],
            setSelectedFileName = _useState2[1];
          return (
            (0, react.useEffect)(
              function () {
                setSelectedFileName(
                  value
                    ? ''
                        .concat(value.name, ' (')
                        .concat(formatBytes(value.size), ')')
                    : ''
                );
              },
              [value]
            ),
            (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)('input', {
                  ref: inputFieldRef,
                  type: 'file',
                  style: { display: 'none' },
                  onChange: function onChange(event) {
                    var _event$target, _event$target$files;
                    event.target.files && event.target.files.length > 0
                      ? setSelectedFileName(
                          ''
                            .concat(event.target.files[0].name, ' (')
                            .concat(
                              formatBytes(event.target.files[0].size),
                              ')'
                            )
                        )
                      : setSelectedFileName('');
                    var eventTarget = {
                        name: name,
                        value:
                          null === (_event$target = event.target) ||
                          void 0 === _event$target ||
                          null ===
                            (_event$target$files = _event$target.files) ||
                          void 0 === _event$target$files
                            ? void 0
                            : _event$target$files[0],
                      },
                      changeEvent = new Event('change', { bubbles: !0 });
                    Object.defineProperty(changeEvent, 'target', {
                      writable: !1,
                      value: eventTarget,
                    }),
                      _onChange && _onChange(changeEvent),
                      handleChange && handleChange(changeEvent);
                  },
                }),
                (0, jsx_runtime.jsx)(
                  InputFields_TextField,
                  (0, objectSpread2.Z)(
                    (0, objectSpread2.Z)({}, rest),
                    {},
                    {
                      name: name,
                      value: selectedFileName,
                      onClick: function onClick(event) {
                        inputFieldRef.current && inputFieldRef.current.click(),
                          _onClick && _onClick(event);
                      },
                      sx: (0, objectSpread2.Z)(
                        (0, objectSpread2.Z)({}, sx),
                        {},
                        { '&>.MuiInputBase-formControl': { pr: 0 } }
                      ),
                      InputProps: {
                        startAdornment: (0, jsx_runtime.jsx)(InputAdornment.Z, {
                          position: 'start',
                          children: (0, jsx_runtime.jsx)(Button_Button.Z, {
                            variant: 'contained',
                            color: 'inherit',
                            size: 'small',
                            sx: { height: 24, fontWeight: 'normal' },
                            children: 'Choose File',
                          }),
                        }),
                        endAdornment:
                          selectedFileName.length > 0
                            ? (0, jsx_runtime.jsx)(IconButton_IconButton.Z, {
                                onClick: function onClick(event) {
                                  event.stopPropagation(),
                                    inputFieldRef.current &&
                                      ((inputFieldRef.current.value = ''),
                                      inputFieldRef.current.dispatchEvent(
                                        new Event('change', { bubbles: !0 })
                                      ));
                                },
                                children: (0, jsx_runtime.jsx)(Close.Z, {
                                  color: 'inherit',
                                }),
                              })
                            : (0, jsx_runtime.jsx)(IconButton_IconButton.Z, {
                                children: (0, jsx_runtime.jsx)(CloudUpload.Z, {
                                  color: 'inherit',
                                }),
                              }),
                        readOnly: !0,
                      },
                    }
                  )
                ),
              ],
            })
          );
        };
      try {
        (FileInputField.displayName = 'FileInputField'),
          (FileInputField.__docgenInfo = {
            description: '',
            displayName: 'FileInputField',
            props: {
              value: {
                defaultValue: null,
                description:
                  'The value of the `input` element, required for a controlled component.',
                name: 'value',
                required: !1,
                type: { name: 'File | null' },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/FileInputField.tsx#FileInputField'
            ] = {
              docgenInfo: FileInputField.__docgenInfo,
              name: 'FileInputField',
              path: 'src/components/InputFields/FileInputField.tsx#FileInputField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      (String.prototype.toTitleCase = function (isUnderscoreSeparated) {
        var words;
        return (
          this.toLowerCase(),
          (words = isUnderscoreSeparated
            ? this.split('_')
            : this.split(/\s/g)).forEach(function (word, index) {
            (!isUnderscoreSeparated && word.toUpperCase() === word) ||
              (words[index] = word.replace(/\w\S*/g, function (txt) {
                return (
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
              }));
          }),
          words.join(' ')
        );
      }),
        (String.prototype.isTitleCase = function () {
          return this.split(' ').every(function (string) {
            return (
              string.isUpperCase() ||
              (string.charAt(0).isUpperCase() && string.slice(1).isLowerCase())
            );
          });
        }),
        (String.prototype.isUpperCase = function () {
          return String(this) === this.toUpperCase();
        }),
        (String.prototype.isLowerCase = function () {
          return String(this) === this.toLowerCase();
        }),
        (String.prototype.contains = function (string) {
          return -1 !== this.indexOf(string);
        }),
        (String.prototype.chunk = function (config, indexChunkLength) {
          config || (config = {}),
            !indexChunkLength &&
              'object' == typeof config &&
              config.indexChunkLength &&
              (indexChunkLength = config.indexChunkLength);
          var string = String(this),
            numberOfChunks =
              'number' == typeof config ? config : config.numberOfChunks,
            chunkDigest = string,
            chunkedOutput = [];
          if (numberOfChunks) {
            indexChunkLength &&
              (chunkedOutput.push(indexChunkLength),
              (chunkDigest = this.substring(indexChunkLength, this.length)),
              numberOfChunks--);
            for (
              var chunkDigestLength = chunkDigest.length,
                chunkLength = Math.floor(chunkDigest.length / numberOfChunks),
                i = 1;
              i <= numberOfChunks;
              i++
            )
              chunkedOutput.push(chunkLength),
                i === numberOfChunks &&
                  (chunkedOutput[i - 1] += chunkDigestLength % numberOfChunks);
            chunkedOutput = chunkedOutput.map(function (
              currentChunckLength,
              index
            ) {
              return string.substr(
                index > 0
                  ? chunkedOutput.slice(0, index).reduce(function (a, b) {
                      return a + b;
                    }, 0)
                  : 0,
                currentChunckLength
              );
            });
          } else if ('object' == typeof config && config.chunkLength)
            do {
              chunkedOutput.push(chunkDigest.substr(0, config.chunkLength)),
                (chunkDigest = chunkDigest.substring(config.chunkLength));
            } while (chunkDigest.length > 0);
          return 'object' == typeof config && config.rawOutput
            ? chunkedOutput
            : chunkedOutput.join(' ');
        }),
        (String.prototype.reverse = function () {
          return this.split('').reverse().join('');
        }),
        (String.prototype.hyphenatePascal = function () {
          return this.toUpperCase() === this.toString()
            ? this.toLowerCase()
            : this.replace(/[A-Z]+/g, function (upperCaseCharacters) {
                return upperCaseCharacters.length > 1
                  ? 2 === upperCaseCharacters.length
                    ? upperCaseCharacters.charAt(0) +
                      upperCaseCharacters.charAt(1).toLowerCase()
                    : upperCaseCharacters.charAt(0) +
                      upperCaseCharacters
                        .substring(1, upperCaseCharacters.length - 1)
                        .toLowerCase() +
                      upperCaseCharacters.charAt(upperCaseCharacters.length - 1)
                  : upperCaseCharacters;
              }).replace(/[A-Z]/g, function (upperCaseCharacters, offset) {
                return (
                  (offset > 0 ? '-' : '') + upperCaseCharacters.toLowerCase()
                );
              });
        }),
        (String.prototype.titleCasePascal = function () {
          var inputString = String(this);
          return inputString.toUpperCase() === inputString
            ? inputString
            : this.replace(/[A-Z]/g, function (upperCaseCharacters, offset) {
                return (offset > 0 ? ' ' : '') + upperCaseCharacters;
              })
                .toTitleCase()
                .replace(/(?<=\b[A-Z])\s(?=[A-Z]\b)/g, '');
        }),
        (String.prototype.toCamelCase = function (from) {
          var string = String(this);
          switch (from) {
            case 'HYPHENATED':
              string = string
                .split('-')
                .map(function (subString) {
                  return subString.toTitleCase();
                })
                .join('');
              break;
            case 'UPPER_CASE':
              string = string.toTitleCase(!0).replace(/\s/g, '');
          }
          return string.charAt(0).toLowerCase() + string.substr(1);
        }),
        (String.prototype.replaceAt = function () {
          var startIndex =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            replacement =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            endIndex =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            replacementString =
              'string' == typeof replacement ? replacement : '',
            replacementLength =
              'number' == typeof replacement ? replacement : replacement.length;
          return (
            this.substr(0, startIndex) +
            replacementString +
            this.substr(endIndex || startIndex + replacementLength)
          );
        }),
        (String.prototype.insertAt = function () {
          var index =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            insertion =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '';
          return this.substr(0, index) + insertion + this.substr(index);
        });
      var libphonenumber = __webpack_require__(
          './node_modules/google-libphonenumber/dist/libphonenumber.js'
        ),
        systemStandardFormatSupportedCountries = ['UG', 'DE', 'TZ', 'KE'],
        PhoneNumberUtil = new libphonenumber.PhoneNumberUtil(),
        utils_PhoneNumberUtil = PhoneNumberUtil,
        isValidPhoneNumber = function isValidPhoneNumber(
          phoneNumber,
          regionalCode,
          defaultCountryCodeIsPrecident
        ) {
          try {
            !defaultCountryCodeIsPrecident &&
              phoneNumber.startsWith('+') &&
              (regionalCode = (function getRegionalCode(formattedPhoneNumber) {
                try {
                  if (
                    (formattedPhoneNumber.startsWith('+') ||
                      (formattedPhoneNumber = '+'.concat(formattedPhoneNumber)),
                    formattedPhoneNumber.startsWith('+'))
                  ) {
                    var countryCode =
                      PhoneNumberUtil.parseAndKeepRawInput(
                        formattedPhoneNumber
                      ).getCountryCode();
                    if (countryCode)
                      return PhoneNumberUtil.getRegionCodeForCountryCode(
                        countryCode
                      );
                  }
                } catch (exception) {}
              })(phoneNumber));
            var parsedPhoneNumber = PhoneNumberUtil.parseAndKeepRawInput(
              phoneNumber,
              regionalCode
            );
            if (PhoneNumberUtil.isValidNumber(parsedPhoneNumber))
              return parsedPhoneNumber;
          } catch (exception) {
            return !1;
          }
          return (
            !phoneNumber.startsWith('+') &&
            isValidPhoneNumber(
              '+' + phoneNumber,
              regionalCode,
              defaultCountryCodeIsPrecident
            )
          );
        },
        flags_namespaceObject = JSON.parse(
          '{"AD":"Andorra","AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BM":"Bermuda","BN":"Brunei Darussalam","BO":"Bolivia, Plurinational State of","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CD":"Congo, the Democratic Republic of the","CF":"Central African Republic","CG":"Congo","CH":"Switzerland","CI":"C&ocirc;te d\'Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CW":"Cura&ccedil;ao","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands (Malvinas)","FM":"Micronesia, Federated States of","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GS":"South Georgia and the South Sandwich Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HM":"Heard Island and McDonald Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran, Islamic Republic of","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"Korea, Democratic People\'s Republic of","KR":"Korea, Republic of","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Lao People\'s Democratic Republic","LB":"Lebanon","LC":"Saint Lucia","LI":"Liechtenstein","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova, Republic of","ME":"Montenegro","MF":"Saint Martin (French part)","MG":"Madagascar","MH":"Marshall Islands","MK":"Macedonia, the former Yugoslav Republic of","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macao","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PN":"Pitcairn","PR":"Puerto Rico","PS":"Palestinian Territory, Occupied","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"R&eacute;union","RO":"Romania","RS":"Serbia","RU":"Russian Federation","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena, Ascension and Tristan da Cunha","SI":"Slovenia","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"Sao Tome and Principe","SV":"El Salvador","SX":"Sint Maarten (Dutch part)","SY":"Syrian Arab Republic","SZ":"Swaziland","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan, Province of China","TZ":"Tanzania, United Republic of","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Holy See (Vatican City State)","VC":"Saint Vincent and the Grenadines","VE":"Venezuela, Bolivarian Republic of","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","VN":"Viet Nam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"}'
        ),
        countries = Object.keys(flags_namespaceObject).map(function (key) {
          var countryCode = utils_PhoneNumberUtil.getCountryCodeForRegion(key);
          return {
            regionalCode: key,
            name: flags_namespaceObject[key],
            countryCode: countryCode,
          };
        }),
        Clear = __webpack_require__(
          './node_modules/@mui/icons-material/Clear.js'
        ),
        Search = __webpack_require__(
          './node_modules/@mui/icons-material/Search.js'
        ),
        CountryList = function CountryList(_ref) {
          var open = _ref.open,
            onClose = _ref.onClose,
            onSelectCountry = _ref.onSelectCountry,
            selectedCountry = _ref.selectedCountry,
            anchor = _ref.anchor,
            _useState = (0, react.useState)(7),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            limit = _useState2[0],
            setLimit = _useState2[1],
            _useState3 = (0, react.useState)(''),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            searchTerm = _useState4[0],
            setSearchTerm = _useState4[1],
            handleClose = function handleClose() {
              onClose && onClose();
            },
            displayCountries = countries
              .filter(function (_ref2) {
                var name = _ref2.name;
                return (
                  !searchTerm ||
                  name.toLowerCase().match(searchTerm.toLowerCase())
                );
              })
              .slice(0, limit);
          return (0, jsx_runtime.jsx)(Popper_Popper.Z, {
            open: open,
            anchorEl: anchor,
            transition: !0,
            placement: 'bottom-start',
            children: function children(_ref3) {
              var TransitionProps = _ref3.TransitionProps;
              return (0, jsx_runtime.jsx)(
                Grow_Grow.Z,
                (0, objectSpread2.Z)(
                  (0, objectSpread2.Z)({}, TransitionProps),
                  {},
                  {
                    children: (0, jsx_runtime.jsx)(Box_Box.Z, {
                      children: (0, jsx_runtime.jsx)(
                        ClickAwayListener_ClickAwayListener.Z,
                        {
                          onClickAway: handleClose,
                          children: (0, jsx_runtime.jsxs)(Card_Card.Z, {
                            children: [
                              (0, jsx_runtime.jsx)(Box_Box.Z, {
                                sx: { p: 2 },
                                children: (0, jsx_runtime.jsx)(
                                  InputFields_TextField,
                                  {
                                    variant: 'outlined',
                                    size: 'small',
                                    placeholder: 'Search',
                                    value: searchTerm,
                                    InputProps: {
                                      startAdornment: (0, jsx_runtime.jsx)(
                                        Search.Z,
                                        { sx: { pointerEvents: 'none', mr: 1 } }
                                      ),
                                      endAdornment: searchTerm
                                        ? (0, jsx_runtime.jsx)(Clear.Z, {
                                            onClick: function onClick() {
                                              return setSearchTerm('');
                                            },
                                            fontSize: 'small',
                                            sx: { cursor: 'pointer' },
                                          })
                                        : null,
                                    },
                                    onChange: function onChange(event) {
                                      return setSearchTerm(event.target.value);
                                    },
                                    fullWidth: !0,
                                  }
                                ),
                              }),
                              (0, jsx_runtime.jsx)(Divider_Divider.Z, {}),
                              (0, jsx_runtime.jsx)(Box_Box.Z, {
                                onScroll: function onScroll(event) {
                                  limit < countries.length &&
                                    event.target.scrollHeight -
                                      event.target.scrollTop -
                                      event.target.offsetHeight <
                                      30 &&
                                    setLimit(function (prevLimit) {
                                      var nextLimit = Math.floor(
                                        1.5 * prevLimit
                                      );
                                      return countries.length < nextLimit
                                        ? countries.length
                                        : nextLimit;
                                    });
                                },
                                component: 'ul',
                                sx: {
                                  minWidth: 200,
                                  maxHeight: 200,
                                  p: 0,
                                  overflowY: 'auto',
                                },
                                children:
                                  displayCountries.length > 0
                                    ? displayCountries.map(function (_ref4) {
                                        var regionalCode = _ref4.regionalCode,
                                          countryCode = _ref4.countryCode,
                                          name = _ref4.name;
                                        return (0, jsx_runtime.jsxs)(
                                          MenuItem.Z,
                                          {
                                            onClick: function onClick() {
                                              onSelectCountry &&
                                                onSelectCountry({
                                                  regionalCode: regionalCode,
                                                  name: name,
                                                  countryCode: countryCode,
                                                }),
                                                handleClose();
                                            },
                                            selected:
                                              regionalCode ===
                                              (null == selectedCountry
                                                ? void 0
                                                : selectedCountry.regionalCode),
                                            children: [
                                              (0, jsx_runtime.jsx)('i', {
                                                className:
                                                  'phone-field-flag-icon phone-field-flag-'.concat(
                                                    regionalCode.toLowerCase()
                                                  ),
                                              }),
                                              (0, jsx_runtime.jsxs)('span', {
                                                className:
                                                  'phone-field-flag-country-name',
                                                children: [
                                                  name,
                                                  ' ',
                                                  (0, jsx_runtime.jsxs)(
                                                    Typography_Typography.Z,
                                                    {
                                                      variant: 'body2',
                                                      component: 'span',
                                                      children: [
                                                        '+',
                                                        countryCode,
                                                      ],
                                                    }
                                                  ),
                                                ],
                                              }),
                                            ],
                                          },
                                          regionalCode
                                        );
                                      })
                                    : (0, jsx_runtime.jsx)(MenuItem.Z, {
                                        children: (0, jsx_runtime.jsx)(
                                          Typography_Typography.Z,
                                          {
                                            variant: 'body2',
                                            children: 'No countries found',
                                          }
                                        ),
                                      }),
                              }),
                            ],
                          }),
                        }
                      ),
                    }),
                  }
                )
              );
            },
          });
        },
        PhoneNumberInputField_CountryList = CountryList;
      try {
        (CountryList.displayName = 'CountryList'),
          (CountryList.__docgenInfo = {
            description: '',
            displayName: 'CountryList',
            props: {
              open: {
                defaultValue: null,
                description: '',
                name: 'open',
                required: !0,
                type: { name: 'boolean' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !1,
                type: { name: '(() => void)' },
              },
              selectedCountry: {
                defaultValue: null,
                description: '',
                name: 'selectedCountry',
                required: !1,
                type: { name: 'ICountry' },
              },
              onSelectCountry: {
                defaultValue: null,
                description: '',
                name: 'onSelectCountry',
                required: !1,
                type: { name: '((country: ICountry) => void)' },
              },
              anchor: {
                defaultValue: null,
                description: '',
                name: 'anchor',
                required: !1,
                type: { name: 'any' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/PhoneNumberInputField/CountryList.tsx#CountryList'
            ] = {
              docgenInfo: CountryList.__docgenInfo,
              name: 'CountryList',
              path: 'src/components/InputFields/PhoneNumberInputField/CountryList.tsx#CountryList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var PhoneNumberInputField_excluded = [
          'displaySelectedFlagLabel',
          'displayPhoneNumberCountry',
          'displayRegionalCodeOnEmptyFocus',
          'label',
          'placeholder',
          'onFocus',
          'onBlur',
          'onChange',
          'value',
          'name',
          'regionalCode',
        ],
        flags = countries.reduce(function (accumulator, country) {
          return (accumulator[country.regionalCode] = country), accumulator;
        }, {}),
        PhoneNumberInputField = function PhoneNumberInputField(_ref) {
          var _ref$displaySelectedF = _ref.displaySelectedFlagLabel,
            displaySelectedFlagLabel =
              void 0 === _ref$displaySelectedF || _ref$displaySelectedF,
            _ref$displayPhoneNumb = _ref.displayPhoneNumberCountry,
            displayPhoneNumberCountry =
              void 0 !== _ref$displayPhoneNumb && _ref$displayPhoneNumb,
            _ref$displayRegionalC = _ref.displayRegionalCodeOnEmptyFocus,
            displayRegionalCodeOnEmptyFocus =
              void 0 !== _ref$displayRegionalC && _ref$displayRegionalC,
            label = _ref.label,
            placeholder = _ref.placeholder,
            _onFocus = _ref.onFocus,
            _onBlur = _ref.onBlur,
            _onChange = _ref.onChange,
            value = _ref.value,
            name = _ref.name,
            regionalCode = _ref.regionalCode,
            rest = (0, objectWithoutProperties.Z)(
              _ref,
              PhoneNumberInputField_excluded
            );
          value = useFormikValue({ value: value, name: name });
          var countryCode = (0, react.useContext)(contexts.Zj).countryCode;
          regionalCode || (regionalCode = countryCode);
          var _useState = (0, react.useState)(flags[regionalCode]),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            selectedCountry = _useState2[0],
            setSelectedCountry = _useState2[1],
            anchorRef = (0, react.useRef)(null),
            _useState3 = (0, react.useState)(!1),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            menuOpen = _useState4[0],
            setMenuOpen = _useState4[1],
            _useState5 = (0, react.useState)(''),
            _useState6 = (0, slicedToArray.Z)(_useState5, 2),
            inputValue = _useState6[0],
            setInputValue = _useState6[1],
            setSanitizedInputValue = (0, react.useCallback)(
              function (value) {
                var validCharacters = value.match(/^\+|[\d-\s]/g);
                if (validCharacters) {
                  var sanitizedValue =
                    (function systemStandardPhoneNumberFormat(
                      phoneNumberString,
                      regionalCode
                    ) {
                      var phoneNumber = isValidPhoneNumber(
                        phoneNumberString,
                        regionalCode
                      );
                      if (phoneNumber) {
                        var formattedPhoneNumber = PhoneNumberUtil.format(
                            phoneNumber,
                            libphonenumber.PhoneNumberFormat.INTERNATIONAL
                          ),
                          countryCode = phoneNumber.getCountryCode();
                        if (countryCode) {
                          if (
                            ((regionalCode =
                              PhoneNumberUtil.getRegionCodeForCountryCode(
                                countryCode
                              )),
                            systemStandardFormatSupportedCountries.includes(
                              regionalCode
                            ))
                          ) {
                            var formattedPhoneNumberWithoutSpaces =
                              formattedPhoneNumber.replaceAll(/\s/g, '');
                            if (
                              'UG' === regionalCode &&
                              PhoneNumberUtil.isValidNumber(phoneNumber) &&
                              13 === formattedPhoneNumberWithoutSpaces.length
                            ) {
                              var formattedPhoneNumberParts =
                                formattedPhoneNumberWithoutSpaces
                                  .chunk(4, 4)
                                  .split(' ');
                              formattedPhoneNumber = ''
                                .concat(formattedPhoneNumberParts[0], ' (')
                                .concat(formattedPhoneNumberParts[1], ') ')
                                .concat(formattedPhoneNumberParts[2], ' ')
                                .concat(formattedPhoneNumberParts[3]);
                            } else {
                              var _formattedPhoneNumberParts =
                                formattedPhoneNumber.split(' ');
                              formattedPhoneNumber = ''
                                .concat(
                                  _formattedPhoneNumberParts.shift(),
                                  ' ('
                                )
                                .concat(
                                  _formattedPhoneNumberParts.shift(),
                                  ') '
                                )
                                .concat(
                                  _formattedPhoneNumberParts.join('').chunk(2)
                                );
                            }
                          }
                          return formattedPhoneNumber;
                        }
                      }
                      return phoneNumberString;
                    })(validCharacters.join(''), regionalCode);
                  setInputValue(sanitizedValue);
                } else setInputValue('');
              },
              [regionalCode]
            );
          return (
            (0, react.useEffect)(
              function () {
                null != value && setSanitizedInputValue(value);
              },
              [setSanitizedInputValue, value]
            ),
            (0, jsx_runtime.jsx)(
              InputFields_TextField,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)(
                  {
                    label: label,
                    value: inputValue,
                    onFocus: function onFocus(event) {
                      displayRegionalCodeOnEmptyFocus &&
                        0 === inputValue.length &&
                        setInputValue('+'.concat(selectedCountry.countryCode)),
                        _onFocus && _onFocus(event);
                    },
                    onBlur: function onBlur(event) {
                      inputValue === '+'.concat(selectedCountry.countryCode) &&
                        setInputValue(''),
                        _onBlur && _onBlur(event);
                    },
                    onChange: function onChange(event) {
                      setSanitizedInputValue(event.target.value),
                        _onChange && _onChange(event);
                    },
                    placeholder: placeholder,
                  },
                  rest
                ),
                {},
                {
                  name: name,
                  InputProps: {
                    startAdornment: displayPhoneNumberCountry
                      ? (0, jsx_runtime.jsxs)(InputAdornment.Z, {
                          position: 'start',
                          children: [
                            (0, jsx_runtime.jsxs)(Button_Button.Z, {
                              color: 'inherit',
                              ref: anchorRef,
                              onClick: function handleMenuToggle() {
                                setMenuOpen(function (prevOpen) {
                                  return !prevOpen;
                                });
                              },
                              sx: { gap: 0, pr: 0, pl: 2 },
                              children: [
                                (0, jsx_runtime.jsxs)(Box_Box.Z, {
                                  component: 'span',
                                  className: 'phone-field-flag-country',
                                  sx: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                  },
                                  title: selectedCountry.name,
                                  children: [
                                    (0, jsx_runtime.jsx)('i', {
                                      className:
                                        'phone-field-flag-icon phone-field-flag-'.concat(
                                          selectedCountry.regionalCode.toLowerCase()
                                        ),
                                    }),
                                    displaySelectedFlagLabel &&
                                      (0, jsx_runtime.jsx)(
                                        Typography_Typography.Z,
                                        {
                                          className:
                                            'phone-field-flag-country-name',
                                          variant: 'body2',
                                          component: 'span',
                                          sx: {
                                            fontSize: 14,
                                            display: {
                                              sm: 'inline-block',
                                              xs: 'none',
                                            },
                                            width: 60,
                                          },
                                          noWrap: !0,
                                          children: selectedCountry.name,
                                        }
                                      ),
                                  ],
                                }),
                                (0, jsx_runtime.jsx)(ExpandMore.Z, {}),
                              ],
                            }),
                            (0, jsx_runtime.jsx)(
                              PhoneNumberInputField_CountryList,
                              {
                                open: menuOpen,
                                onClose: function handleMenuClose() {
                                  setMenuOpen(!1);
                                },
                                onSelectCountry: function onSelectCountry(
                                  selectedCountry
                                ) {
                                  setSelectedCountry(selectedCountry);
                                },
                                selectedCountry: selectedCountry,
                                anchor: anchorRef.current,
                              }
                            ),
                          ],
                        })
                      : null,
                  },
                  sx: { '&>.MuiInputBase-formControl': { pl: 0 } },
                }
              )
            )
          );
        };
      try {
        (PhoneNumberInputField.displayName = 'PhoneNumberInputField'),
          (PhoneNumberInputField.__docgenInfo = {
            description: '',
            displayName: 'PhoneNumberInputField',
            props: {
              value: {
                defaultValue: null,
                description:
                  'The value of the `input` element, required for a controlled component.',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              displaySelectedFlagLabel: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'displaySelectedFlagLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              displayPhoneNumberCountry: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'displayPhoneNumberCountry',
                required: !1,
                type: { name: 'boolean' },
              },
              displayRegionalCodeOnEmptyFocus: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'displayRegionalCodeOnEmptyFocus',
                required: !1,
                type: { name: 'boolean' },
              },
              regionalCode: {
                defaultValue: null,
                description: '',
                name: 'regionalCode',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"AF"' },
                    { value: '"AX"' },
                    { value: '"AL"' },
                    { value: '"DZ"' },
                    { value: '"AS"' },
                    { value: '"AD"' },
                    { value: '"AO"' },
                    { value: '"AI"' },
                    { value: '"AQ"' },
                    { value: '"AG"' },
                    { value: '"AR"' },
                    { value: '"AM"' },
                    { value: '"AW"' },
                    { value: '"AU"' },
                    { value: '"AT"' },
                    { value: '"AZ"' },
                    { value: '"BS"' },
                    { value: '"BH"' },
                    { value: '"BD"' },
                    { value: '"BB"' },
                    { value: '"BY"' },
                    { value: '"BE"' },
                    { value: '"BZ"' },
                    { value: '"BJ"' },
                    { value: '"BM"' },
                    { value: '"BT"' },
                    { value: '"BO"' },
                    { value: '"BA"' },
                    { value: '"BW"' },
                    { value: '"BV"' },
                    { value: '"BR"' },
                    { value: '"IO"' },
                    { value: '"BN"' },
                    { value: '"BG"' },
                    { value: '"BF"' },
                    { value: '"BI"' },
                    { value: '"KH"' },
                    { value: '"CM"' },
                    { value: '"CA"' },
                    { value: '"CV"' },
                    { value: '"KY"' },
                    { value: '"CF"' },
                    { value: '"TD"' },
                    { value: '"CL"' },
                    { value: '"CN"' },
                    { value: '"CX"' },
                    { value: '"CC"' },
                    { value: '"CO"' },
                    { value: '"KM"' },
                    { value: '"CG"' },
                    { value: '"CD"' },
                    { value: '"CK"' },
                    { value: '"CR"' },
                    { value: '"CI"' },
                    { value: '"HR"' },
                    { value: '"CU"' },
                    { value: '"CW"' },
                    { value: '"CY"' },
                    { value: '"CZ"' },
                    { value: '"DK"' },
                    { value: '"DJ"' },
                    { value: '"DM"' },
                    { value: '"DO"' },
                    { value: '"EC"' },
                    { value: '"EG"' },
                    { value: '"SV"' },
                    { value: '"GQ"' },
                    { value: '"ER"' },
                    { value: '"EE"' },
                    { value: '"ET"' },
                    { value: '"FK"' },
                    { value: '"FO"' },
                    { value: '"FJ"' },
                    { value: '"FI"' },
                    { value: '"FR"' },
                    { value: '"GF"' },
                    { value: '"PF"' },
                    { value: '"TF"' },
                    { value: '"GA"' },
                    { value: '"GM"' },
                    { value: '"GE"' },
                    { value: '"DE"' },
                    { value: '"GH"' },
                    { value: '"GI"' },
                    { value: '"GR"' },
                    { value: '"GL"' },
                    { value: '"GD"' },
                    { value: '"GP"' },
                    { value: '"GU"' },
                    { value: '"GT"' },
                    { value: '"GG"' },
                    { value: '"GN"' },
                    { value: '"GW"' },
                    { value: '"GY"' },
                    { value: '"HT"' },
                    { value: '"HM"' },
                    { value: '"VA"' },
                    { value: '"HN"' },
                    { value: '"HK"' },
                    { value: '"HU"' },
                    { value: '"IS"' },
                    { value: '"IN"' },
                    { value: '"ID"' },
                    { value: '"IR"' },
                    { value: '"IQ"' },
                    { value: '"IE"' },
                    { value: '"IM"' },
                    { value: '"IL"' },
                    { value: '"IT"' },
                    { value: '"JM"' },
                    { value: '"JP"' },
                    { value: '"JE"' },
                    { value: '"JO"' },
                    { value: '"KZ"' },
                    { value: '"KE"' },
                    { value: '"KI"' },
                    { value: '"KR"' },
                    { value: '"KP"' },
                    { value: '"KW"' },
                    { value: '"KG"' },
                    { value: '"LA"' },
                    { value: '"LV"' },
                    { value: '"LB"' },
                    { value: '"LS"' },
                    { value: '"LR"' },
                    { value: '"LY"' },
                    { value: '"LI"' },
                    { value: '"LT"' },
                    { value: '"LU"' },
                    { value: '"MO"' },
                    { value: '"MG"' },
                    { value: '"MW"' },
                    { value: '"MY"' },
                    { value: '"MV"' },
                    { value: '"ML"' },
                    { value: '"MT"' },
                    { value: '"MH"' },
                    { value: '"MQ"' },
                    { value: '"MR"' },
                    { value: '"MU"' },
                    { value: '"YT"' },
                    { value: '"MX"' },
                    { value: '"FM"' },
                    { value: '"MD"' },
                    { value: '"MC"' },
                    { value: '"MN"' },
                    { value: '"ME"' },
                    { value: '"MS"' },
                    { value: '"MA"' },
                    { value: '"MZ"' },
                    { value: '"MM"' },
                    { value: '"NA"' },
                    { value: '"NR"' },
                    { value: '"NP"' },
                    { value: '"NL"' },
                    { value: '"NC"' },
                    { value: '"NZ"' },
                    { value: '"NI"' },
                    { value: '"NE"' },
                    { value: '"NG"' },
                    { value: '"NU"' },
                    { value: '"NF"' },
                    { value: '"MP"' },
                    { value: '"NO"' },
                    { value: '"OM"' },
                    { value: '"PK"' },
                    { value: '"PW"' },
                    { value: '"PS"' },
                    { value: '"PA"' },
                    { value: '"PG"' },
                    { value: '"PY"' },
                    { value: '"PE"' },
                    { value: '"PH"' },
                    { value: '"PN"' },
                    { value: '"PL"' },
                    { value: '"PT"' },
                    { value: '"PR"' },
                    { value: '"QA"' },
                    { value: '"RE"' },
                    { value: '"MKD"' },
                    { value: '"RO"' },
                    { value: '"RU"' },
                    { value: '"RW"' },
                    { value: '"BL"' },
                    { value: '"SH"' },
                    { value: '"KN"' },
                    { value: '"LC"' },
                    { value: '"MF"' },
                    { value: '"PM"' },
                    { value: '"VC"' },
                    { value: '"WS"' },
                    { value: '"SM"' },
                    { value: '"ST"' },
                    { value: '"SA"' },
                    { value: '"SN"' },
                    { value: '"RS"' },
                    { value: '"SC"' },
                    { value: '"SL"' },
                    { value: '"SG"' },
                    { value: '"SK"' },
                    { value: '"SI"' },
                    { value: '"SB"' },
                    { value: '"SO"' },
                    { value: '"ZA"' },
                    { value: '"GS"' },
                    { value: '"ES"' },
                    { value: '"LK"' },
                    { value: '"SD"' },
                    { value: '"SS"' },
                    { value: '"SR"' },
                    { value: '"SJ"' },
                    { value: '"SZ"' },
                    { value: '"SE"' },
                    { value: '"CH"' },
                    { value: '"SX"' },
                    { value: '"SY"' },
                    { value: '"TW"' },
                    { value: '"TJ"' },
                    { value: '"TZ"' },
                    { value: '"TH"' },
                    { value: '"TL"' },
                    { value: '"TG"' },
                    { value: '"TK"' },
                    { value: '"TO"' },
                    { value: '"TT"' },
                    { value: '"TN"' },
                    { value: '"TR"' },
                    { value: '"TM"' },
                    { value: '"TC"' },
                    { value: '"TV"' },
                    { value: '"UG"' },
                    { value: '"UA"' },
                    { value: '"AE"' },
                    { value: '"GB"' },
                    { value: '"US"' },
                    { value: '"UM"' },
                    { value: '"UY"' },
                    { value: '"UZ"' },
                    { value: '"VU"' },
                    { value: '"VE"' },
                    { value: '"VN"' },
                    { value: '"VG"' },
                    { value: '"VI"' },
                    { value: '"WF"' },
                    { value: '"EH"' },
                    { value: '"YE"' },
                    { value: '"ZM"' },
                    { value: '"ZW"' },
                  ],
                },
              },
              focused: {
                defaultValue: null,
                description:
                  'If `true`, the component is displayed in focused state.',
                name: 'focused',
                required: !1,
                type: { name: 'boolean' },
              },
              hiddenLabel: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.',
                name: 'hiddenLabel',
                required: !1,
                type: { name: 'boolean' },
              },
              margin: {
                defaultValue: { value: "'none'" },
                description:
                  'If `dense` or `normal`, will adjust vertical spacing of this and contained components.',
                name: 'margin',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"none"' },
                    { value: '"normal"' },
                    { value: '"dense"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/InputFields/PhoneNumberInputField/index.tsx#PhoneNumberInputField'
            ] = {
              docgenInfo: PhoneNumberInputField.__docgenInfo,
              name: 'PhoneNumberInputField',
              path: 'src/components/InputFields/PhoneNumberInputField/index.tsx#PhoneNumberInputField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var DndProvider = __webpack_require__(
          './node_modules/react-dnd/dist/esm/core/DndProvider.mjs'
        ),
        esm = __webpack_require__(
          './node_modules/react-dnd-html5-backend/dist/esm/index.mjs'
        ),
        useDrop = __webpack_require__(
          './node_modules/react-dnd/dist/esm/hooks/useDrop/useDrop.mjs'
        ),
        KanbanBoardContext = (0, react.createContext)({ lanes: [] }),
        KanbanBoardProvider = function KanbanBoardProvider(_ref) {
          var children = _ref.children,
            propLanes = _ref.value.lanes,
            _useState = (0, react.useState)(null),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            activeLaneId = _useState2[0],
            setActiveLaneId = _useState2[1],
            _useState3 = (0, react.useState)(null),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            activeCard = _useState4[0],
            setActiveCard = _useState4[1],
            _useState5 = (0, react.useState)(null),
            _useState6 = (0, slicedToArray.Z)(_useState5, 2),
            movingCard = _useState6[0],
            setMovingCard = _useState6[1],
            _useState7 = (0, react.useState)([]),
            _useState8 = (0, slicedToArray.Z)(_useState7, 2),
            lanes = _useState8[0],
            setLanes = _useState8[1],
            moveCard = (0, react.useCallback)(
              function (movingCard, activeCard) {
                if (
                  (console.log({
                    movingCard: movingCard,
                    activeCard: activeCard,
                    activeLaneId: activeLaneId,
                  }),
                  movingCard &&
                    (activeCard ||
                      (null != activeLaneId &&
                        movingCard.laneId !== activeLaneId)))
                ) {
                  var movingLane = lanes.find(function (_ref2) {
                      return _ref2.id === movingCard.laneId;
                    }),
                    activeLane = lanes.find(function (_ref3) {
                      return _ref3.id === activeLaneId;
                    });
                  if (movingLane && activeLane) {
                    var movingCardIndex = movingLane.cards.findIndex(function (
                      _ref4
                    ) {
                      return _ref4.id === movingCard.id;
                    });
                    if (activeCard) {
                      var _activeLane$cards,
                        activeCardIndex = activeLane.cards.findIndex(function (
                          _ref5
                        ) {
                          return _ref5.id === activeCard.id;
                        });
                      (_activeLane$cards = activeLane.cards).splice.apply(
                        _activeLane$cards,
                        [activeCardIndex, 0].concat(
                          (0, toConsumableArray.Z)(
                            movingLane.cards.splice(movingCardIndex, 1)
                          )
                        )
                      );
                    } else {
                      var _activeLane$cards2;
                      (_activeLane$cards2 = activeLane.cards).push.apply(
                        _activeLane$cards2,
                        (0, toConsumableArray.Z)(
                          movingLane.cards.splice(movingCardIndex, 1)
                        )
                      );
                    }
                    setLanes((0, toConsumableArray.Z)(lanes));
                  }
                  setActiveCard && setActiveCard(null),
                    setMovingCard && setMovingCard(null);
                }
              },
              [activeLaneId, lanes]
            );
          return (
            (0, react.useEffect)(
              function () {
                setLanes(propLanes);
              },
              [propLanes]
            ),
            (0, jsx_runtime.jsx)(KanbanBoardContext.Provider, {
              value: {
                lanes: lanes,
                activeCard: activeCard,
                setActiveCard: setActiveCard,
                movingCard: movingCard,
                setMovingCard: setMovingCard,
                moveCard: moveCard,
                activeLaneId: activeLaneId,
                setActiveLaneId: setActiveLaneId,
              },
              children: children,
            })
          );
        };
      try {
        (KanbanBoardProvider.displayName = 'KanbanBoardProvider'),
          (KanbanBoardProvider.__docgenInfo = {
            description: '',
            displayName: 'KanbanBoardProvider',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: '{ lanes: ILane[]; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/KanbanBoard/KanbanBoardContext.tsx#KanbanBoardProvider'
            ] = {
              docgenInfo: KanbanBoardProvider.__docgenInfo,
              name: 'KanbanBoardProvider',
              path: 'src/components/KanbanBoard/KanbanBoardContext.tsx#KanbanBoardProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Badge_Badge = __webpack_require__(
          './node_modules/@mui/material/Badge/Badge.js'
        ),
        useDrag = __webpack_require__(
          './node_modules/react-dnd/dist/esm/hooks/useDrag/useDrag.mjs'
        ),
        getEmptyImage = __webpack_require__(
          './node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.mjs'
        ),
        KanbanBoard_Card_Card = function Card(props) {
          var title = props.title,
            description = props.description,
            onDragStart = props.onDragStart,
            _props$isGhost = props.isGhost,
            isGhost = void 0 !== _props$isGhost && _props$isGhost,
            onDragEnd = props.onDragEnd,
            id = props.id,
            laneId = props.laneId,
            palette = (0, styles_useTheme.Z)().palette,
            ref = (0, react.useRef)(null),
            _useContext = (0, react.useContext)(KanbanBoardContext),
            setActiveCard = _useContext.setActiveCard,
            setMovingCard = _useContext.setMovingCard,
            _useDrop = (0, useDrop.L)({
              accept: 'card',
              collect: function collect(monitor) {
                return {
                  handlerId: monitor.getHandlerId(),
                  isOver: monitor.isOver(),
                  canDrop: monitor.canDrop(),
                };
              },
              hover: function hover(item) {
                ref.current &&
                  item.id !== props.id &&
                  setActiveCard &&
                  setActiveCard(function (prevActiveCard) {
                    return !prevActiveCard ||
                      (prevActiveCard.id !== id &&
                        prevActiveCard.laneId !== laneId)
                      ? { id: id, laneId: laneId }
                      : prevActiveCard;
                  });
              },
            }),
            _useDrop2 = (0, slicedToArray.Z)(_useDrop, 2),
            handlerId = _useDrop2[0].handlerId,
            drop = _useDrop2[1],
            _useDrag = (0, useDrag.c)(function () {
              return {
                type: 'card',
                item: function item() {
                  return props;
                },
                canDrag: !isGhost,
                end: function end() {
                  onDragEnd && onDragEnd(props);
                },
                collect: function collect(monitor) {
                  var isDragging = monitor.isDragging(),
                    canDrag = monitor.canDrag(),
                    item = monitor.getItem();
                  return (
                    isDragging &&
                      !canDrag &&
                      ref.current &&
                      !monitor.didDrop() &&
                      (setMovingCard &&
                        setMovingCard(function (prevMovingCard) {
                          return !prevMovingCard ||
                            (prevMovingCard.id !== id &&
                              prevMovingCard.laneId !== laneId)
                            ? { id: id, laneId: laneId }
                            : prevMovingCard;
                        }),
                      onDragStart && onDragStart(item)),
                    { isDragging: isDragging }
                  );
                },
              };
            }),
            _useDrag2 = (0, slicedToArray.Z)(_useDrag, 3),
            isDragging = _useDrag2[0].isDragging,
            drag = _useDrag2[1],
            preview = _useDrag2[2];
          (0, react.useEffect)(
            function () {
              preview((0, getEmptyImage.r)(), { captureDraggingState: !0 });
            },
            [preview]
          );
          var sx = {
            border: '1px solid '.concat(
              (0, colorManipulator.Fq)(palette.text.primary, 0.2)
            ),
            backgroundColor: palette.background.default,
            px: 2,
            mb: 1,
            borderRadius: 1,
            p: 1,
            cursor: 'pointer',
            minWidth: 250,
          };
          return (
            isDragging && (sx.opacity = 0),
            drag(drop(ref)),
            (0, jsx_runtime.jsx)(Box_Box.Z, {
              ref: ref,
              'data-handler-id': handlerId,
              children: (0, jsx_runtime.jsxs)(Box_Box.Z, {
                component: 'article',
                sx: sx,
                children: [
                  (0, jsx_runtime.jsx)(Box_Box.Z, {
                    component: 'header',
                    sx: { pb: 1, fontSize: 14 },
                    children: title,
                  }),
                  (0, jsx_runtime.jsx)(Box_Box.Z, {
                    component: 'section',
                    sx: { color: palette.text.secondary },
                    children: description,
                  }),
                ],
              }),
            })
          );
        },
        KanbanBoard_Card = KanbanBoard_Card_Card;
      try {
        (KanbanBoard_Card_Card.displayName = 'Card'),
          (KanbanBoard_Card_Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '((props: ICardProps) => void)' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '((props: ICardProps) => void)' },
              },
              isGhost: {
                defaultValue: null,
                description: '',
                name: 'isGhost',
                required: !1,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'ReactNode' },
              },
              description: {
                defaultValue: null,
                description: '',
                name: 'description',
                required: !0,
                type: { name: 'ReactNode' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string | number' },
              },
              laneId: {
                defaultValue: null,
                description: '',
                name: 'laneId',
                required: !0,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/KanbanBoard/Card.tsx#Card'
            ] = {
              docgenInfo: KanbanBoard_Card_Card.__docgenInfo,
              name: 'Card',
              path: 'src/components/KanbanBoard/Card.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Lane_excluded = ['id'],
        Lane = function Lane(_ref) {
          var id = _ref.id,
            title = _ref.title,
            _ref$showCardCount = _ref.showCardCount,
            showCardCount = void 0 !== _ref$showCardCount && _ref$showCardCount,
            cards = _ref.cards,
            palette = (0, styles_useTheme.Z)().palette,
            _useState = (0, react.useState)(null),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            ghostCardProps = _useState2[0],
            setGhostCardProps = _useState2[1],
            _useState3 = (0, react.useState)(null),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            clientOffset = _useState4[0],
            setClientOffset = _useState4[1],
            setActiveLaneId = (0, react.useContext)(
              KanbanBoardContext
            ).setActiveLaneId,
            _useDrop = (0, useDrop.L)(function () {
              return {
                accept: 'card',
                drop: function drop(item, monitor) {
                  monitor.didDrop();
                },
                collect: function collect(monitor) {
                  return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                  };
                },
                hover: function hover(item, monitor) {
                  var clientOffset = monitor.getSourceClientOffset();
                  setClientOffset(clientOffset);
                },
              };
            }),
            _useDrop2 = (0, slicedToArray.Z)(_useDrop, 2),
            _useDrop2$ = _useDrop2[0],
            isOver = _useDrop2$.isOver,
            canDrop = _useDrop2$.canDrop,
            drop = _useDrop2[1],
            handleDragStart = function handleDragStart(props) {
              setGhostCardProps(function (prevProps) {
                return object_hash_default()(prevProps) !==
                  object_hash_default()(props)
                  ? props
                  : prevProps;
              });
            },
            handleDragEnd = function handleDragEnd() {
              setGhostCardProps(null), setClientOffset(null);
            };
          return (
            (0, react.useEffect)(
              function () {
                isOver && canDrop && setActiveLaneId && setActiveLaneId(id);
              },
              [canDrop, id, isOver, setActiveLaneId]
            ),
            (0, jsx_runtime.jsx)(Box_Box.Z, {
              sx: {
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'top',
                whiteSpace: 'normal',
              },
              children: (0, jsx_runtime.jsxs)(Box_Box.Z, {
                ref: drop,
                component: 'section',
                sx: {
                  backgroundColor: (0, colorManipulator._j)(
                    palette.background.default,
                    canDrop && isOver
                      ? 'dark' === palette.mode
                        ? 0.4
                        : 0.2
                      : 'dark' === palette.mode
                      ? 0.9
                      : 0.1
                  ),
                  mr: 2,
                  border: '1px solid '.concat(
                    (0, colorManipulator.Fq)(palette.text.primary, 0.2)
                  ),
                  borderRadius: 2,
                  height: '100%',
                },
                children: [
                  (0, jsx_runtime.jsx)(Box_Box.Z, {
                    component: 'header',
                    sx: { p: 1, cursor: 'grab' },
                    children: (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                      container: !0,
                      spacing: 1,
                      alignItems: 'center',
                      children: [
                        showCardCount && cards.length > 0
                          ? (0, jsx_runtime.jsxs)(Grid_Grid.ZP, {
                              item: !0,
                              children: [
                                (0, jsx_runtime.jsx)(Badge_Badge.Z, {
                                  badgeContent: cards.length,
                                  color: 'primary',
                                  max: 99,
                                  sx: {
                                    '&>.MuiBadge-badge': {
                                      position: 'relative',
                                      transform: 'none',
                                    },
                                  },
                                }),
                                ' ',
                              ],
                            })
                          : null,
                        (0, jsx_runtime.jsx)(Grid_Grid.ZP, {
                          item: !0,
                          xs: !0,
                          children: (0, jsx_runtime.jsx)(
                            Typography_Typography.Z,
                            {
                              sx: { fontWeight: 'bold', fontSize: 15 },
                              children: title,
                            }
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, jsx_runtime.jsx)(Box_Box.Z, {
                    sx: {
                      px: 1,
                      width: 360,
                      minHeight: 80,
                      flex: '1 1 0%',
                      overflow: 'hidden auto',
                      alignSelf: 'center',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      maxHeight: 'calc(100% - 40px)',
                    },
                    children: (0, jsx_runtime.jsxs)(Box_Box.Z, {
                      children: [
                        cards.map(function (_ref2) {
                          var cardId = _ref2.id,
                            rest = (0, objectWithoutProperties.Z)(
                              _ref2,
                              Lane_excluded
                            );
                          return (0,
                          jsx_runtime.jsx)(KanbanBoard_Card, (0, objectSpread2.Z)((0, objectSpread2.Z)({}, (0, objectSpread2.Z)({ id: cardId }, rest)), {}, { onDragStart: handleDragStart, onDragEnd: handleDragEnd, laneId: id }), cardId);
                        }),
                        ghostCardProps &&
                          clientOffset &&
                          (0, jsx_runtime.jsx)(Box_Box.Z, {
                            sx: {
                              position: 'fixed',
                              px: 1,
                              width: 360,
                              transform: 'rotate(3deg)',
                              left: clientOffset.x,
                              top: clientOffset.y,
                              zIndex: 9999,
                              pointerEvents: 'none',
                            },
                            children: (0, jsx_runtime.jsx)(
                              KanbanBoard_Card,
                              (0, objectSpread2.Z)(
                                (0, objectSpread2.Z)({}, ghostCardProps),
                                {},
                                { isGhost: !0 }
                              )
                            ),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        KanbanBoard_Lane = Lane;
      try {
        (Lane.displayName = 'Lane'),
          (Lane.__docgenInfo = {
            description: '',
            displayName: 'Lane',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string | number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'ReactNode' },
              },
              cards: {
                defaultValue: null,
                description: '',
                name: 'cards',
                required: !0,
                type: { name: 'ICard[]' },
              },
              showCardCount: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showCardCount',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/KanbanBoard/Lane.tsx#Lane'
            ] = {
              docgenInfo: Lane.__docgenInfo,
              name: 'Lane',
              path: 'src/components/KanbanBoard/Lane.tsx#Lane',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var DragAndDropContainer_excluded = ['id'],
        DragAndDropContainer = function DragAndDropContainer(_ref) {
          var _ref$showCardCount = _ref.showCardCount,
            showCardCount = void 0 !== _ref$showCardCount && _ref$showCardCount,
            _useContext = (0, react.useContext)(KanbanBoardContext),
            activeCard = _useContext.activeCard,
            movingCard = _useContext.movingCard,
            lanes = _useContext.lanes,
            moveCard = _useContext.moveCard,
            _useDrop = (0, useDrop.L)({
              accept: 'card',
              drop: function drop() {
                moveCard && moveCard(movingCard, activeCard);
              },
            }),
            drop = (0, slicedToArray.Z)(_useDrop, 2)[1];
          return (0, jsx_runtime.jsx)(Box_Box.Z, {
            ref: drop,
            sx: {
              overflowY: 'hidden',
              p: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              height: '100%',
              width: '100%',
              position: 'absolute',
            },
            children: (0, jsx_runtime.jsx)(Box_Box.Z, {
              sx: {
                whiteSpace: 'nowrap',
                position: 'relative',
                height: '100%',
              },
              children: lanes.map(function (_ref2) {
                var id = _ref2.id,
                  rest = (0, objectWithoutProperties.Z)(
                    _ref2,
                    DragAndDropContainer_excluded
                  );
                return (0,
                jsx_runtime.jsx)(KanbanBoard_Lane, (0, objectSpread2.Z)({}, (0, objectSpread2.Z)({ id: id, showCardCount: showCardCount }, rest)), id);
              }),
            }),
          });
        },
        KanbanBoard_DragAndDropContainer = DragAndDropContainer;
      try {
        (DragAndDropContainer.displayName = 'DragAndDropContainer'),
          (DragAndDropContainer.__docgenInfo = {
            description: '',
            displayName: 'DragAndDropContainer',
            props: {
              showCardCount: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'showCardCount',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/KanbanBoard/DragAndDropContainer.tsx#DragAndDropContainer'
            ] = {
              docgenInfo: DragAndDropContainer.__docgenInfo,
              name: 'DragAndDropContainer',
              path: 'src/components/KanbanBoard/DragAndDropContainer.tsx#DragAndDropContainer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var KanbanBoard = function KanbanBoard(props) {
        var lanes = props.lanes;
        return (0, jsx_runtime.jsx)(DndProvider.W, {
          backend: esm.PD,
          children: (0, jsx_runtime.jsx)(KanbanBoardProvider, {
            value: { lanes: lanes },
            children: (0, jsx_runtime.jsx)(
              KanbanBoard_DragAndDropContainer,
              (0, objectSpread2.Z)({}, props)
            ),
          }),
        });
      };
      try {
        (KanbanBoard.displayName = 'KanbanBoard'),
          (KanbanBoard.__docgenInfo = {
            description: '',
            displayName: 'KanbanBoard',
            props: {
              lanes: {
                defaultValue: null,
                description: '',
                name: 'lanes',
                required: !0,
                type: { name: 'ILane[]' },
              },
              showCardCount: {
                defaultValue: null,
                description: '',
                name: 'showCardCount',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/KanbanBoard/index.tsx#KanbanBoard'
            ] = {
              docgenInfo: KanbanBoard.__docgenInfo,
              name: 'KanbanBoard',
              path: 'src/components/KanbanBoard/index.tsx#KanbanBoard',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var NotFound = function NotFound(props) {
        return _jsx(
          'svg',
          _objectSpread(
            _objectSpread(
              {
                viewBox: '0 0 190 87',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              props
            ),
            {},
            {
              children: _jsx('path', {
                d: 'M52 53.0075V3.00749H33L0 56.0075L0.999999 68.0075H33V85.0075H52V68.0075H60V53.0075H52ZM33 53.0075H18L32 30.0075L33 28.0075V53.0075ZM182 53.0075V3.00749H163L130 56.0075L131 68.0075H163V85.0075H182V68.0075H190V53.0075H182ZM163 53.0075H148L162 30.0075L163 28.0075V53.0075ZM121 27.0075V86.0075H69V78.0075V27.0075C69 12.0075 81 1.00749 95 1.00749C110 0.0074932 121 12.0075 121 27.0075Z',
                fill: '#BABCC1',
              }),
            }
          )
        );
      };
      try {
        (NotFound.displayName = 'NotFound'),
          (NotFound.__docgenInfo = {
            description: '',
            displayName: 'NotFound',
            props: {
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/NotFound.tsx#NotFound'] = {
              docgenInfo: NotFound.__docgenInfo,
              name: 'NotFound',
              path: 'src/components/NotFound.tsx#NotFound',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var notifications = [].concat(
          (0, toConsumableArray.Z)(
            Array.from({ length: 4 }).map(function () {
              return { isRead: !1 };
            })
          ),
          (0, toConsumableArray.Z)(
            Array.from({ length: 5 }).map(function () {
              return { isRead: !0 };
            })
          )
        ),
        unreadNotificationStyles = { backgroundColor: 'rgba(0,58,204,0.06)' },
        readNotificationStyles = {},
        NotificationsList_NotificationsList = function NotificationsList(_ref) {
          var sx = _ref.sx,
            rest = _objectWithoutProperties(_ref, null);
          return _jsx(
            List,
            _objectSpread(
              _objectSpread({}, rest),
              {},
              {
                sx: _objectSpread({ width: '100%', p: 0 }, sx),
                children: (function () {
                  if (notifications.length > 0)
                    return notifications.map(function (_ref2, index) {
                      var isRead = _ref2.isRead,
                        avatar = _jsx(Avatar, {
                          alt: 'Notification Image',
                          src: 'https://loremflickr.com/160/160/avatar,face?random='.concat(
                            Math.round(1e3 * Math.random())
                          ),
                          sx: {
                            width: 52,
                            height: 52,
                            ml: 2,
                            bgcolor: grey[300],
                          },
                          variant: 'circular',
                        });
                      return _jsxs(
                        Fragment,
                        {
                          children: [
                            0 === index ||
                              _jsx(Divider, {
                                variant: 'inset',
                                component: 'li',
                                sx: { mx: 0 },
                              }),
                            _jsxs(ListItem, {
                              sx: _objectSpread(
                                {
                                  alignItems: 'flex-start',
                                  gap: 2,
                                  pt: 2,
                                  pb: 2,
                                },
                                isRead
                                  ? readNotificationStyles
                                  : unreadNotificationStyles
                              ),
                              children: [
                                _jsx(ListItemAvatar, {
                                  children:
                                    !1 === isRead
                                      ? _jsx(Badge, {
                                          overlap: 'circular',
                                          variant: 'dot',
                                          color: 'primary',
                                          anchorOrigin: {
                                            horizontal: 'left',
                                            vertical: 'top',
                                          },
                                          sx: {
                                            '.MuiBadge-badge': {
                                              transform:
                                                'translate(-14px, 10px)',
                                            },
                                          },
                                          children: avatar,
                                        })
                                      : avatar,
                                }),
                                _jsx(ListItemText, {
                                  sx: { m: 0 },
                                  primary: _jsxs(Typography, {
                                    variant: 'body1',
                                    sx: { fontSize: '0.75em' },
                                    children: [
                                      'Candidate “',
                                      _jsx('strong', {
                                        children: 'Ronald M. Kasendwa...',
                                      }),
                                      '” submitted their data.',
                                    ],
                                  }),
                                  secondary: _jsx(Typography, {
                                    variant: 'body2',
                                    sx: { fontSize: '0.72em', opacity: 0.6 },
                                    children: '29 September 2021, 06:54 PM',
                                  }),
                                }),
                                _jsx(ListItemAvatar, {
                                  children: _jsx(Avatar, {
                                    alt: 'Notification Image',
                                    src: 'https://loremflickr.com/160/160/apartment,house?random='.concat(
                                      Math.round(1e3 * Math.random())
                                    ),
                                    sx: {
                                      width: 60,
                                      height: 38,
                                      bgcolor: grey[300],
                                    },
                                    variant: 'rounded',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        index
                      );
                    });
                })(),
              }
            )
          );
        };
      try {
        (NotificationsList_NotificationsList.displayName = 'NotificationsList'),
          (NotificationsList_NotificationsList.__docgenInfo = {
            description: '',
            displayName: 'NotificationsList',
            props: {
              children: {
                defaultValue: null,
                description: 'The content of the component.',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              classes: {
                defaultValue: null,
                description:
                  'Override or extend the styles applied to the component.',
                name: 'classes',
                required: !1,
                type: {
                  name: '(Partial<ListClasses> & Partial<ClassNameMap<never>>)',
                },
              },
              dense: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, compact vertical padding designed for keyboard and mouse input is used for\nthe list and list items.\nThe prop is available to descendant components as the `dense` context.',
                name: 'dense',
                required: !1,
                type: { name: 'boolean' },
              },
              disablePadding: {
                defaultValue: { value: 'false' },
                description:
                  'If `true`, vertical padding is removed from the list.',
                name: 'disablePadding',
                required: !1,
                type: { name: 'boolean' },
              },
              subheader: {
                defaultValue: null,
                description:
                  'The content of the subheader, normally `ListSubheader`.',
                name: 'subheader',
                required: !1,
                type: { name: 'ReactNode' },
              },
              sx: {
                defaultValue: null,
                description:
                  'The system prop that allows defining system overrides as well as additional CSS styles.',
                name: 'sx',
                required: !1,
                type: { name: 'SxProps<Theme>' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/NotificationsTool/NotificationsList.tsx#NotificationsList'
            ] = {
              docgenInfo: NotificationsList_NotificationsList.__docgenInfo,
              name: 'NotificationsList',
              path: 'src/components/NotificationsTool/NotificationsList.tsx#NotificationsList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var NotificationsTool = function NotificationsTool() {
        var anchorRef = useRef(null),
          _useState = useState(!1),
          _useState2 = _slicedToArray(_useState, 2),
          menuOpen = _useState2[0],
          setMenuOpen = _useState2[1],
          handleMenuClose = function handleMenuClose() {
            setMenuOpen(!1);
          };
        return _jsxs(_Fragment, {
          children: [
            _jsx(IconButton, {
              size: 'large',
              ref: anchorRef,
              onClick: function handleMenuToggle() {
                setMenuOpen(function (prevOpen) {
                  return !prevOpen;
                });
              },
              color: 'inherit',
              children: _jsx(Badge, {
                color: 'error',
                children: _jsx(NotificationsIcon, {}),
              }),
            }),
            _jsx(Popper, {
              open: menuOpen,
              anchorEl: anchorRef.current,
              transition: !0,
              placement: 'bottom-end',
              disablePortal: !0,
              children: function children(_ref) {
                var TransitionProps = _ref.TransitionProps;
                return _jsx(
                  Grow,
                  _objectSpread(
                    _objectSpread({}, TransitionProps),
                    {},
                    {
                      children: _jsx(Box, {
                        children: _jsx(ClickAwayListener, {
                          onClickAway: handleMenuClose,
                          children: _jsxs(Card, {
                            sx: { width: 450 },
                            elevation: 5,
                            children: [
                              _jsx(CardHeader, {
                                title: _jsxs(Grid, {
                                  container: !0,
                                  alignItems: 'center',
                                  children: [
                                    _jsx(Grid, {
                                      item: !0,
                                      flex: 1,
                                      children: _jsx(Typography, {
                                        variant: 'h4',
                                        component: 'h2',
                                        sx: { fontSize: 18 },
                                        children: 'Notifications',
                                      }),
                                    }),
                                    _jsx(Grid, {
                                      item: !0,
                                      children: _jsx(Typography, {
                                        variant: 'body2',
                                        sx: { fontSize: 14, cursor: 'pointer' },
                                        color: 'primary',
                                        children: 'Clear all notifications',
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              _jsx(Divider, {}),
                              _jsx(NotificationsList, {
                                sx: {
                                  height: 'calc(100vh - 140px)',
                                  maxHeight: 650,
                                  overflowY: 'auto',
                                },
                              }),
                            ],
                          }),
                        }),
                      }),
                    }
                  )
                );
              },
            }),
          ],
        });
      };
      try {
        (NotificationsTool.displayName = 'NotificationsTool'),
          (NotificationsTool.__docgenInfo = {
            description: '',
            displayName: 'NotificationsTool',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/NotificationsTool/index.tsx#NotificationsTool'
            ] = {
              docgenInfo: NotificationsTool.__docgenInfo,
              name: 'NotificationsTool',
              path: 'src/components/NotificationsTool/index.tsx#NotificationsTool',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var SingleFieldCard = function SingleFieldCard(_ref) {
        var labelSkeletonWidth,
          valueSkeletonWidth,
          label = _ref.label,
          value = _ref.value,
          theme = useTheme(),
          _useLoadingContext = useLoadingContext(),
          loading = _useLoadingContext.loading,
          errorMessage = _useLoadingContext.errorMessage;
        return _jsx(Card, {
          sx: { borderTop: '6px solid '.concat(theme.palette.primary.main) },
          children:
            ((labelSkeletonWidth = 14 * label.length),
            (valueSkeletonWidth = 20 * label.length),
            errorMessage
              ? _jsxs(_Fragment, {
                  children: [
                    _jsx(ErrorSkeleton, {
                      sx: { width: labelSkeletonWidth, mx: 'auto' },
                    }),
                    _jsx(ErrorSkeleton, {
                      sx: { width: valueSkeletonWidth, height: 36, mx: 'auto' },
                    }),
                  ],
                })
              : loading
              ? _jsxs(_Fragment, {
                  children: [
                    _jsx(Skeleton, {
                      sx: { width: labelSkeletonWidth, mx: 'auto' },
                    }),
                    _jsx(Skeleton, {
                      sx: { width: valueSkeletonWidth, height: 36, mx: 'auto' },
                    }),
                  ],
                })
              : _jsxs(_Fragment, {
                  children: [
                    _jsx(FieldLabel, { align: 'center', children: label }),
                    _jsx(Typography, {
                      variant: 'body1',
                      align: 'center',
                      sx: _defineProperty(
                        { fontSize: 24, fontWeight: 'bold' },
                        theme.breakpoints.down('lg'),
                        { fontSize: 18 }
                      ),
                      children: value,
                    }),
                  ],
                })),
        });
      };
      try {
        (SingleFieldCard.displayName = 'SingleFieldCard'),
          (SingleFieldCard.__docgenInfo = {
            description: '',
            displayName: 'SingleFieldCard',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/SingleFieldCard.tsx#SingleFieldCard'
            ] = {
              docgenInfo: SingleFieldCard.__docgenInfo,
              name: 'SingleFieldCard',
              path: 'src/components/SingleFieldCard.tsx#SingleFieldCard',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/constants.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        ss: function () {
          return DEFAULT_COUNTRY_CODE;
        },
        EJ: function () {
          return DEFAULT_CURRENCY_CODE;
        },
        K_: function () {
          return DEFAULT_DATE_FORMAT;
        },
      });
      var DEFAULT_COUNTRY_CODE =
          __webpack_require__('./node_modules/process/browser.js').env
            .REACT_APP_COUNTRY_CODE || 'UG',
        DEFAULT_CURRENCY_CODE = 'UGX',
        DEFAULT_DATE_FORMAT = 'dd MMM yyyy';
    },
    './src/contexts/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        ye: function () {
          return APIContext;
        },
        _Q: function () {
          return APIDataContext;
        },
        un: function () {
          return APIProvider;
        },
        Zj: function () {
          return GlobalConfigurationContext;
        },
        EF: function () {
          return GlobalConfigurationProvider;
        },
        pV: function () {
          return LoadingContext;
        },
        PK: function () {
          return LoadingProvider;
        },
      });
      var asyncToGenerator = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        regenerator = __webpack_require__(
          './node_modules/@babel/runtime/regenerator/index.js'
        ),
        regenerator_default = __webpack_require__.n(regenerator),
        react = __webpack_require__('./node_modules/react/index.js'),
        react_router = __webpack_require__(
          './node_modules/react-router/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        APIContext = (0, react.createContext)({}),
        APIProvider = function APIProvider(_ref) {
          var children = _ref.children,
            navigate = (0, react_router.s0)(),
            location = (0, react_router.TH)(),
            call = (function () {
              var _ref2 = (0, asyncToGenerator.Z)(
                regenerator_default().mark(function _callee(apiCallback) {
                  return regenerator_default().wrap(function _callee$(
                    _context
                  ) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          return _context.abrupt(
                            'return',
                            apiCallback().catch(function (err) {
                              if (
                                ![
                                  'User session timed out',
                                  'Session timed out',
                                  'Invalid token',
                                ].includes(err.message)
                              )
                                throw err;
                              var pathname = location.pathname,
                                search = location.search;
                              navigate(
                                '/users/session/login' +
                                  '?return_to='.concat(
                                    encodeURIComponent(pathname + search)
                                  )
                              );
                            })
                          );
                        case 1:
                        case 'end':
                          return _context.stop();
                      }
                  },
                  _callee);
                })
              );
              return function call(_x) {
                return _ref2.apply(this, arguments);
              };
            })(),
            value = { call: call };
          return (0, jsx_runtime.jsx)(APIContext.Provider, {
            value: value,
            children: children,
          });
        };
      try {
        (APIProvider.displayName = 'APIProvider'),
          (APIProvider.__docgenInfo = {
            description: '',
            displayName: 'APIProvider',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/contexts/APIContext.tsx#APIProvider'
            ] = {
              docgenInfo: APIProvider.__docgenInfo,
              name: 'APIProvider',
              path: 'src/contexts/APIContext.tsx#APIProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var APIDataContext = (0, react.createContext)({ preferStale: !1 }),
        APIDataProvider = function APIDataProvider(_ref) {
          var children = _ref.children,
            value = _ref.value;
          return _jsx(APIDataContext.Provider, {
            value: value,
            children: children,
          });
        };
      try {
        (APIDataProvider.displayName = 'APIDataProvider'),
          (APIDataProvider.__docgenInfo = {
            description: '',
            displayName: 'APIDataProvider',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'IAPIDataContext' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/contexts/APIDataContext.tsx#APIDataProvider'
            ] = {
              docgenInfo: APIDataProvider.__docgenInfo,
              name: 'APIDataProvider',
              path: 'src/contexts/APIDataContext.tsx#APIDataProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var slicedToArray = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        constants = __webpack_require__('./src/constants.ts'),
        GlobalConfigurationContext = (0, react.createContext)({
          countryCode: constants.ss,
          currencyCode: constants.EJ,
        }),
        GlobalConfigurationProvider = function GlobalConfigurationProvider(
          _ref
        ) {
          var children = _ref.children,
            _useState = (0, react.useState)(constants.ss),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            countryCode = _useState2[0],
            setCountryCode = _useState2[1],
            _useState3 = (0, react.useState)(constants.EJ),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            value = {
              countryCode: countryCode,
              currencyCode: _useState4[0],
              setCountryCode: setCountryCode,
              setCurrencyCode: _useState4[1],
            };
          return (0, jsx_runtime.jsx)(GlobalConfigurationContext.Provider, {
            value: value,
            children: children,
          });
        };
      try {
        (GlobalConfigurationProvider.displayName =
          'GlobalConfigurationProvider'),
          (GlobalConfigurationProvider.__docgenInfo = {
            description: '',
            displayName: 'GlobalConfigurationProvider',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/contexts/GlobalConfigurationContext.tsx#GlobalConfigurationProvider'
            ] = {
              docgenInfo: GlobalConfigurationProvider.__docgenInfo,
              name: 'GlobalConfigurationProvider',
              path: 'src/contexts/GlobalConfigurationContext.tsx#GlobalConfigurationProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var LoadingContext = (0, react.createContext)({
          loading: !1,
          errorMessage: '',
        }),
        LoadingProvider = function LoadingProvider(_ref) {
          var children = _ref.children,
            value = _ref.value;
          return (0, jsx_runtime.jsx)(LoadingContext.Provider, {
            value: value,
            children: children,
          });
        };
      try {
        (LoadingProvider.displayName = 'LoadingProvider'),
          (LoadingProvider.__docgenInfo = {
            description: '',
            displayName: 'LoadingProvider',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'ILoadingContext' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/contexts/LoadingContext.tsx#LoadingProvider'
            ] = {
              docgenInfo: LoadingProvider.__docgenInfo,
              name: 'LoadingProvider',
              path: 'src/contexts/LoadingContext.tsx#LoadingProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/redux/data/reducer.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        I: function () {
          return dataReducer;
        },
      });
      var D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          ),
        _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/utils/StorageManager.ts'),
        _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/redux/data/types.ts'
        ),
        dataKeys =
          _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__.Z.get(
            'api-data-keys'
          ) || [],
        data =
          _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__.Z.get('data') ||
          {};
      dataKeys.forEach(function (key) {
        var keyData = _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__.Z.get(
          'api-data-'.concat(key)
        );
        keyData &&
          Object.assign(
            data,
            (0,
            D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              {},
              key,
              keyData
            )
          );
      });
      var dataReducer = function dataReducer() {
        var state =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : data,
          _ref = arguments.length > 1 ? arguments[1] : void 0,
          type = _ref.type,
          payload = _ref.payload,
          newState = (0,
          D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            state
          );
        if (type === _types__WEBPACK_IMPORTED_MODULE_3__.X)
          newState = (0,
          D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            (0,
            D_sandbox_rmkasendwa_com_rmk_react_mui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              state
            ),
            payload
          );
        return (
          [_types__WEBPACK_IMPORTED_MODULE_3__.X].includes(type) &&
            payload &&
            (Object.keys(payload).forEach(function (key) {
              _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__.Z.add(
                'api-data-'.concat(key),
                payload[key]
              ),
                dataKeys.includes(key) || dataKeys.push(key);
            }),
            _utils_StorageManager__WEBPACK_IMPORTED_MODULE_0__.Z.add(
              'api-data-keys',
              dataKeys
            )),
          newState
        );
      };
    },
    './src/redux/data/types.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return UPDATE_DATA;
        },
      });
      var UPDATE_DATA = 'UPDATE_DATA';
    },
    './src/redux/page/reducer.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        k: function () {
          return pageReducer;
        },
      });
      var objectSpread2 = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        page = {},
        pageReducer = function pageReducer() {
          var state =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : page,
            _ref = arguments.length > 1 ? arguments[1] : void 0,
            type = _ref.type,
            payload = _ref.payload;
          return 'SET_PAGE_TITLE' === type
            ? (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, state),
                {},
                { title: payload }
              )
            : (0, objectSpread2.Z)({}, state);
        };
    },
    './src/redux/theme/reducer.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        x: function () {
          return themeReducer;
        },
      });
      var objectSpread2 = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        StorageManager = __webpack_require__('./src/utils/StorageManager.ts'),
        theme = StorageManager.Z.get('theme') || { darkMode: !1 },
        themeReducer = function themeReducer() {
          var state =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : theme,
            action = arguments.length > 1 ? arguments[1] : void 0,
            newState = (0, objectSpread2.Z)({}, state);
          if ('TOGGLE_DARK_MODE' === action.type)
            newState = (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, state),
              {},
              { darkMode: !state.darkMode }
            );
          return StorageManager.Z.add('theme', newState), newState;
        };
    },
    './src/utils/StorageManager.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return utils_StorageManager;
        },
      });
      var crypto_js = __webpack_require__('./node_modules/crypto-js/index.js'),
        Hex = crypto_js.enc.Hex,
        Utf8 = crypto_js.enc.Utf8,
        Pkcs7 = crypto_js.pad.Pkcs7,
        CBC = crypto_js.mode.CBC,
        WordArray = crypto_js.lib.WordArray,
        decrypt = function decrypt(transitmessage, password) {
          transitmessage = transitmessage.replace(/@xZ/gm, '/');
          var salt = Hex.parse(transitmessage.substr(0, 32)),
            iv = Hex.parse(transitmessage.substr(32, 32)),
            key = (0, crypto_js.PBKDF2)(password, salt, {
              keySize: 8,
              iterations: 100,
            }),
            decrypted = crypto_js.AES.decrypt(
              transitmessage.substring(64),
              key,
              { iv: iv, padding: Pkcs7, mode: CBC }
            );
          try {
            return decrypted.toString(Utf8);
          } catch (exception) {
            return transitmessage;
          }
        },
        encrypt = function encrypt(message, password) {
          var random =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            encrypted = (function () {
              if (!1 === random) {
                var _salt = (0, crypto_js.MD5)(password),
                  _key = (0, crypto_js.PBKDF2)(password, _salt, {
                    keySize: 8,
                    iterations: 100,
                  }),
                  _iv = (0, crypto_js.MD5)(message);
                return (
                  _salt.toString() +
                  _iv.toString() +
                  crypto_js.AES.encrypt(message, _key, {
                    iv: _iv,
                    padding: Pkcs7,
                    mode: CBC,
                  }).toString()
                );
              }
              var salt = WordArray.random(16),
                key = (0, crypto_js.PBKDF2)(password, salt, {
                  keySize: 8,
                  iterations: 100,
                }),
                iv = WordArray.random(16);
              return (
                salt.toString() +
                iv.toString() +
                crypto_js.AES.encrypt(message, key, {
                  iv: iv,
                  padding: Pkcs7,
                  mode: CBC,
                }).toString()
              );
            })();
          try {
            return decrypt(encrypted, password) === message
              ? encrypted.replace(/\//gm, '@xZ')
              : encrypt(message, password);
          } catch (exception) {
            return encrypt(message, password);
          }
        },
        process = __webpack_require__('./node_modules/process/browser.js'),
        ENCRYPTION_KEY =
          process.env.ENCRYPTION_KEY ||
          process.env.APP_NAME ||
          process.env.REACT_APP_NAME ||
          'A really trivial key',
        StorageManager = {
          add: function add(key, value, options) {
            var _this = this,
              isSessionValue =
                'object' == typeof options ? options.isSessionValue : options;
            'object' == typeof value && (value = JSON.stringify(value)),
              (value = encrypt(value, key)),
              (isSessionValue ? sessionStorage : localStorage).setItem(
                btoa(encrypt(key, ENCRYPTION_KEY, !1)),
                btoa(value)
              ),
              'object' == typeof options &&
                options.expiry &&
                setTimeout(function () {
                  return _this.remove(key, isSessionValue);
                }, options.expiry);
          },
          get: function get(key) {
            var isSessionValue =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              item = (isSessionValue ? sessionStorage : localStorage).getItem(
                btoa(encrypt(key, ENCRYPTION_KEY, !1))
              );
            if (item) {
              item = decrypt(atob(item), key);
              try {
                return JSON.parse(item);
              } catch (err) {
                return item;
              }
            }
            return null;
          },
          remove: function remove(key) {
            var isSessionValue =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (isSessionValue ? sessionStorage : localStorage).removeItem(
              btoa(encrypt(key, ENCRYPTION_KEY, !1))
            );
          },
          clear: function clear() {
            var session =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              storage = session ? sessionStorage : localStorage;
            Object.keys(storage).forEach(function (key) {
              storage.removeItem(key);
            });
          },
        },
        utils_StorageManager = StorageManager;
    },
    './node_modules/datejs/src/i18n sync recursive ^\\.\\/.*\\.js$': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      var map = {
        './af-ZA.js': './node_modules/datejs/src/i18n/af-ZA.js',
        './ar-AE.js': './node_modules/datejs/src/i18n/ar-AE.js',
        './ar-BH.js': './node_modules/datejs/src/i18n/ar-BH.js',
        './ar-DZ.js': './node_modules/datejs/src/i18n/ar-DZ.js',
        './ar-EG.js': './node_modules/datejs/src/i18n/ar-EG.js',
        './ar-IQ.js': './node_modules/datejs/src/i18n/ar-IQ.js',
        './ar-JO.js': './node_modules/datejs/src/i18n/ar-JO.js',
        './ar-KW.js': './node_modules/datejs/src/i18n/ar-KW.js',
        './ar-LB.js': './node_modules/datejs/src/i18n/ar-LB.js',
        './ar-LY.js': './node_modules/datejs/src/i18n/ar-LY.js',
        './ar-MA.js': './node_modules/datejs/src/i18n/ar-MA.js',
        './ar-OM.js': './node_modules/datejs/src/i18n/ar-OM.js',
        './ar-QA.js': './node_modules/datejs/src/i18n/ar-QA.js',
        './ar-SA.js': './node_modules/datejs/src/i18n/ar-SA.js',
        './ar-SY.js': './node_modules/datejs/src/i18n/ar-SY.js',
        './ar-TN.js': './node_modules/datejs/src/i18n/ar-TN.js',
        './ar-YE.js': './node_modules/datejs/src/i18n/ar-YE.js',
        './az-Cyrl-AZ.js': './node_modules/datejs/src/i18n/az-Cyrl-AZ.js',
        './az-Latn-AZ.js': './node_modules/datejs/src/i18n/az-Latn-AZ.js',
        './be-BY.js': './node_modules/datejs/src/i18n/be-BY.js',
        './bg-BG.js': './node_modules/datejs/src/i18n/bg-BG.js',
        './bs-Latn-BA.js': './node_modules/datejs/src/i18n/bs-Latn-BA.js',
        './ca-ES.js': './node_modules/datejs/src/i18n/ca-ES.js',
        './cs-CZ.js': './node_modules/datejs/src/i18n/cs-CZ.js',
        './cy-GB.js': './node_modules/datejs/src/i18n/cy-GB.js',
        './da-DK.js': './node_modules/datejs/src/i18n/da-DK.js',
        './de-AT.js': './node_modules/datejs/src/i18n/de-AT.js',
        './de-CH.js': './node_modules/datejs/src/i18n/de-CH.js',
        './de-DE.js': './node_modules/datejs/src/i18n/de-DE.js',
        './de-LI.js': './node_modules/datejs/src/i18n/de-LI.js',
        './de-LU.js': './node_modules/datejs/src/i18n/de-LU.js',
        './dv-MV.js': './node_modules/datejs/src/i18n/dv-MV.js',
        './el-GR.js': './node_modules/datejs/src/i18n/el-GR.js',
        './en-029.js': './node_modules/datejs/src/i18n/en-029.js',
        './en-AU.js': './node_modules/datejs/src/i18n/en-AU.js',
        './en-BZ.js': './node_modules/datejs/src/i18n/en-BZ.js',
        './en-CA.js': './node_modules/datejs/src/i18n/en-CA.js',
        './en-GB.js': './node_modules/datejs/src/i18n/en-GB.js',
        './en-IE.js': './node_modules/datejs/src/i18n/en-IE.js',
        './en-JM.js': './node_modules/datejs/src/i18n/en-JM.js',
        './en-NZ.js': './node_modules/datejs/src/i18n/en-NZ.js',
        './en-PH.js': './node_modules/datejs/src/i18n/en-PH.js',
        './en-TT.js': './node_modules/datejs/src/i18n/en-TT.js',
        './en-ZA.js': './node_modules/datejs/src/i18n/en-ZA.js',
        './en-ZW.js': './node_modules/datejs/src/i18n/en-ZW.js',
        './es-AR.js': './node_modules/datejs/src/i18n/es-AR.js',
        './es-BO.js': './node_modules/datejs/src/i18n/es-BO.js',
        './es-CL.js': './node_modules/datejs/src/i18n/es-CL.js',
        './es-CO.js': './node_modules/datejs/src/i18n/es-CO.js',
        './es-CR.js': './node_modules/datejs/src/i18n/es-CR.js',
        './es-DO.js': './node_modules/datejs/src/i18n/es-DO.js',
        './es-EC.js': './node_modules/datejs/src/i18n/es-EC.js',
        './es-ES.js': './node_modules/datejs/src/i18n/es-ES.js',
        './es-GT.js': './node_modules/datejs/src/i18n/es-GT.js',
        './es-HN.js': './node_modules/datejs/src/i18n/es-HN.js',
        './es-MX.js': './node_modules/datejs/src/i18n/es-MX.js',
        './es-NI.js': './node_modules/datejs/src/i18n/es-NI.js',
        './es-PA.js': './node_modules/datejs/src/i18n/es-PA.js',
        './es-PE.js': './node_modules/datejs/src/i18n/es-PE.js',
        './es-PR.js': './node_modules/datejs/src/i18n/es-PR.js',
        './es-PY.js': './node_modules/datejs/src/i18n/es-PY.js',
        './es-SV.js': './node_modules/datejs/src/i18n/es-SV.js',
        './es-UY.js': './node_modules/datejs/src/i18n/es-UY.js',
        './es-VE.js': './node_modules/datejs/src/i18n/es-VE.js',
        './et-EE.js': './node_modules/datejs/src/i18n/et-EE.js',
        './eu-ES.js': './node_modules/datejs/src/i18n/eu-ES.js',
        './fa-IR.js': './node_modules/datejs/src/i18n/fa-IR.js',
        './fi-FI.js': './node_modules/datejs/src/i18n/fi-FI.js',
        './fo-FO.js': './node_modules/datejs/src/i18n/fo-FO.js',
        './fr-BE.js': './node_modules/datejs/src/i18n/fr-BE.js',
        './fr-CA.js': './node_modules/datejs/src/i18n/fr-CA.js',
        './fr-CH.js': './node_modules/datejs/src/i18n/fr-CH.js',
        './fr-FR.js': './node_modules/datejs/src/i18n/fr-FR.js',
        './fr-LU.js': './node_modules/datejs/src/i18n/fr-LU.js',
        './fr-MC.js': './node_modules/datejs/src/i18n/fr-MC.js',
        './gl-ES.js': './node_modules/datejs/src/i18n/gl-ES.js',
        './gu-IN.js': './node_modules/datejs/src/i18n/gu-IN.js',
        './he-IL.js': './node_modules/datejs/src/i18n/he-IL.js',
        './hi-IN.js': './node_modules/datejs/src/i18n/hi-IN.js',
        './hr-BA.js': './node_modules/datejs/src/i18n/hr-BA.js',
        './hr-HR.js': './node_modules/datejs/src/i18n/hr-HR.js',
        './hu-HU.js': './node_modules/datejs/src/i18n/hu-HU.js',
        './hy-AM.js': './node_modules/datejs/src/i18n/hy-AM.js',
        './id-ID.js': './node_modules/datejs/src/i18n/id-ID.js',
        './is-IS.js': './node_modules/datejs/src/i18n/is-IS.js',
        './it-CH.js': './node_modules/datejs/src/i18n/it-CH.js',
        './it-IT.js': './node_modules/datejs/src/i18n/it-IT.js',
        './ja-JP.js': './node_modules/datejs/src/i18n/ja-JP.js',
        './ka-GE.js': './node_modules/datejs/src/i18n/ka-GE.js',
        './kk-KZ.js': './node_modules/datejs/src/i18n/kk-KZ.js',
        './kn-IN.js': './node_modules/datejs/src/i18n/kn-IN.js',
        './ko-KR.js': './node_modules/datejs/src/i18n/ko-KR.js',
        './kok-IN.js': './node_modules/datejs/src/i18n/kok-IN.js',
        './ky-KG.js': './node_modules/datejs/src/i18n/ky-KG.js',
        './lt-LT.js': './node_modules/datejs/src/i18n/lt-LT.js',
        './lv-LV.js': './node_modules/datejs/src/i18n/lv-LV.js',
        './mi-NZ.js': './node_modules/datejs/src/i18n/mi-NZ.js',
        './mk-MK.js': './node_modules/datejs/src/i18n/mk-MK.js',
        './mn-MN.js': './node_modules/datejs/src/i18n/mn-MN.js',
        './mr-IN.js': './node_modules/datejs/src/i18n/mr-IN.js',
        './ms-BN.js': './node_modules/datejs/src/i18n/ms-BN.js',
        './ms-MY.js': './node_modules/datejs/src/i18n/ms-MY.js',
        './mt-MT.js': './node_modules/datejs/src/i18n/mt-MT.js',
        './nb-NO.js': './node_modules/datejs/src/i18n/nb-NO.js',
        './nl-BE.js': './node_modules/datejs/src/i18n/nl-BE.js',
        './nl-NL.js': './node_modules/datejs/src/i18n/nl-NL.js',
        './nn-NO.js': './node_modules/datejs/src/i18n/nn-NO.js',
        './ns-ZA.js': './node_modules/datejs/src/i18n/ns-ZA.js',
        './pa-IN.js': './node_modules/datejs/src/i18n/pa-IN.js',
        './pl-PL.js': './node_modules/datejs/src/i18n/pl-PL.js',
        './pt-BR.js': './node_modules/datejs/src/i18n/pt-BR.js',
        './pt-PT.js': './node_modules/datejs/src/i18n/pt-PT.js',
        './quz-BO.js': './node_modules/datejs/src/i18n/quz-BO.js',
        './quz-EC.js': './node_modules/datejs/src/i18n/quz-EC.js',
        './quz-PE.js': './node_modules/datejs/src/i18n/quz-PE.js',
        './ro-RO.js': './node_modules/datejs/src/i18n/ro-RO.js',
        './ru-RU.js': './node_modules/datejs/src/i18n/ru-RU.js',
        './sa-IN.js': './node_modules/datejs/src/i18n/sa-IN.js',
        './se-FI.js': './node_modules/datejs/src/i18n/se-FI.js',
        './se-NO.js': './node_modules/datejs/src/i18n/se-NO.js',
        './se-SE.js': './node_modules/datejs/src/i18n/se-SE.js',
        './sk-SK.js': './node_modules/datejs/src/i18n/sk-SK.js',
        './sl-SI.js': './node_modules/datejs/src/i18n/sl-SI.js',
        './sma-NO.js': './node_modules/datejs/src/i18n/sma-NO.js',
        './sma-SE.js': './node_modules/datejs/src/i18n/sma-SE.js',
        './smj-NO.js': './node_modules/datejs/src/i18n/smj-NO.js',
        './smj-SE.js': './node_modules/datejs/src/i18n/smj-SE.js',
        './smn-FI.js': './node_modules/datejs/src/i18n/smn-FI.js',
        './sms-FI.js': './node_modules/datejs/src/i18n/sms-FI.js',
        './sq-AL.js': './node_modules/datejs/src/i18n/sq-AL.js',
        './sr-Cyrl-BA.js': './node_modules/datejs/src/i18n/sr-Cyrl-BA.js',
        './sr-Cyrl-CS.js': './node_modules/datejs/src/i18n/sr-Cyrl-CS.js',
        './sr-Latn-BA.js': './node_modules/datejs/src/i18n/sr-Latn-BA.js',
        './sr-Latn-CS.js': './node_modules/datejs/src/i18n/sr-Latn-CS.js',
        './sv-FI.js': './node_modules/datejs/src/i18n/sv-FI.js',
        './sv-SE.js': './node_modules/datejs/src/i18n/sv-SE.js',
        './sw-KE.js': './node_modules/datejs/src/i18n/sw-KE.js',
        './syr-SY.js': './node_modules/datejs/src/i18n/syr-SY.js',
        './ta-IN.js': './node_modules/datejs/src/i18n/ta-IN.js',
        './te-IN.js': './node_modules/datejs/src/i18n/te-IN.js',
        './th-TH.js': './node_modules/datejs/src/i18n/th-TH.js',
        './tn-ZA.js': './node_modules/datejs/src/i18n/tn-ZA.js',
        './tr-TR.js': './node_modules/datejs/src/i18n/tr-TR.js',
        './tt-RU.js': './node_modules/datejs/src/i18n/tt-RU.js',
        './uk-UA.js': './node_modules/datejs/src/i18n/uk-UA.js',
        './ur-PK.js': './node_modules/datejs/src/i18n/ur-PK.js',
        './uz-Cyrl-UZ.js': './node_modules/datejs/src/i18n/uz-Cyrl-UZ.js',
        './uz-Latn-UZ.js': './node_modules/datejs/src/i18n/uz-Latn-UZ.js',
        './vi-VN.js': './node_modules/datejs/src/i18n/vi-VN.js',
        './xh-ZA.js': './node_modules/datejs/src/i18n/xh-ZA.js',
        './zh-CN.js': './node_modules/datejs/src/i18n/zh-CN.js',
        './zh-HK.js': './node_modules/datejs/src/i18n/zh-HK.js',
        './zh-MO.js': './node_modules/datejs/src/i18n/zh-MO.js',
        './zh-SG.js': './node_modules/datejs/src/i18n/zh-SG.js',
        './zh-TW.js': './node_modules/datejs/src/i18n/zh-TW.js',
        './zu-ZA.js': './node_modules/datejs/src/i18n/zu-ZA.js',
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id =
          './node_modules/datejs/src/i18n sync recursive ^\\.\\/.*\\.js$');
    },
    './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './stories/FieldValueDisplay.stories.tsx':
            './src/stories/FieldValueDisplay.stories.tsx',
          './stories/FileUploader.stories.tsx':
            './src/stories/FileUploader.stories.tsx',
          './stories/ImageSelector.stories.tsx':
            './src/stories/ImageSelector.stories.tsx',
          './stories/InputFields/CurrencyInputField.stories.tsx':
            './src/stories/InputFields/CurrencyInputField.stories.tsx',
          './stories/InputFields/DataDropdownField.stories.tsx':
            './src/stories/InputFields/DataDropdownField.stories.tsx',
          './stories/InputFields/DateInputField.stories.tsx':
            './src/stories/InputFields/DateInputField.stories.tsx',
          './stories/InputFields/FileInputField.stories.tsx':
            './src/stories/InputFields/FileInputField.stories.tsx',
          './stories/InputFields/NumberInputField.stories.tsx':
            './src/stories/InputFields/NumberInputField.stories.tsx',
          './stories/InputFields/PhoneNumberInputField.stories.tsx':
            './src/stories/InputFields/PhoneNumberInputField.stories.tsx',
          './stories/InputFields/TextField.stories.tsx':
            './src/stories/InputFields/TextField.stories.tsx',
          './stories/KanbanBoard.stories.tsx':
            './src/stories/KanbanBoard.stories.tsx',
          './stories/Table.stories.tsx': './src/stories/Table.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$');
      },
    './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './stories/Introduction.stories.mdx':
            './src/stories/Introduction.stories.mdx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$');
      },
    './storybook-init-framework-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      );
    },
    '?9157': function () {},
    '?4f7e': function () {},
  },
  function (__webpack_require__) {
    var __webpack_exec__ = function (moduleId) {
      return __webpack_require__((__webpack_require__.s = moduleId));
    };
    __webpack_require__.O(0, [555], function () {
      return (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.js')
      );
    });
    __webpack_require__.O();
  },
]);
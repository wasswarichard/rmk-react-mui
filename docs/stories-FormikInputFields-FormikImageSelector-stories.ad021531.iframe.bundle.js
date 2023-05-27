"use strict";(self.webpackChunk_infinite_debugger_react_mui=self.webpackChunk_infinite_debugger_react_mui||[]).push([[7180],{"./src/stories/FormikInputFields/FormikImageSelector.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return FormikImageSelector_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),Button=__webpack_require__("./node_modules/@mui/material/esm/Button/Button.js"),Container=__webpack_require__("./node_modules/@mui/material/esm/Container/Container.js"),Grid=__webpack_require__("./node_modules/@mui/material/esm/Grid/Grid.js"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),Formik=__webpack_require__("./src/hooks/Formik.ts"),ImageSelector=__webpack_require__("./src/components/ImageSelector.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["name","value","onChange","error","helperText"],FormikImageSelector=(0,react.forwardRef)((function FormikImageSelector(_ref,ref){var name=_ref.name,valueProp=_ref.value,onChangeProp=_ref.onChange,errorProp=_ref.error,helperTextProp=_ref.helperText,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useAggregatedFormikC=(0,Formik.d)({value:valueProp,name:name,error:errorProp,helperText:helperTextProp,onChange:onChangeProp}),value=_useAggregatedFormikC.value,onChange=_useAggregatedFormikC.onChange,error=_useAggregatedFormikC.error,helperText=_useAggregatedFormikC.helperText;return(0,jsx_runtime.jsx)(ImageSelector.ZP,(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:ref},rest),{},{name:name,value:value,onChange:onChange,error:error,helperText:helperText}))}));try{FormikImageSelector.displayName="FormikImageSelector",FormikImageSelector.__docgenInfo={description:"",displayName:"FormikImageSelector",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"FileContainer[]"}},upload:{defaultValue:null,description:"",name:"upload",required:!1,type:{name:"FileUploadFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormikInputFields/FormikImageSelector.tsx#FormikImageSelector"]={docgenInfo:FormikImageSelector.__docgenInfo,name:"FormikImageSelector",path:"src/components/FormikInputFields/FormikImageSelector.tsx#FormikImageSelector"})}catch(__react_docgen_typescript_loader_error){}var FormikImageSelector_stories={title:"Components/Formik Input Fields/Formik Image Selector",component:FormikImageSelector},initialValues={field:null},Default=function Template(props){return(0,jsx_runtime.jsx)(Container.Z,{maxWidth:"md",sx:{p:3},children:(0,jsx_runtime.jsx)(formik_esm.J9,{initialValues:initialValues,onSubmit:function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(values){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:console.log({values:values});case 1:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),children:function children(){return(0,jsx_runtime.jsxs)(formik_esm.l0,{noValidate:!0,children:[(0,jsx_runtime.jsx)(FormikImageSelector,(0,objectSpread2.Z)({name:"field"},props)),(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,sx:{mt:2},children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:!0}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",type:"submit",children:"Submit"})})]})]})}})})}.bind({});Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'props => {\n  return <Container maxWidth="md" sx={{\n    p: 3\n  }}>\r\n      <Formik initialValues={initialValues} onSubmit={async values => {\n      console.log({\n        values\n      });\n    }}>\r\n        {() => {\n        return <Form noValidate>\r\n              <FormikImageSelector name="field" {...props} />\r\n              <Grid container sx={{\n            mt: 2\n          }}>\r\n                <Grid item xs />\r\n                <Grid item>\r\n                  <Button variant="contained" type="submit">\r\n                    Submit\r\n                  </Button>\r\n                </Grid>\r\n              </Grid>\r\n            </Form>;\n      }}\r\n      </Formik>\r\n    </Container>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/hooks/Formik.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return useAggregatedFormikContext}});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),useAggregatedFormikContext=function useAggregatedFormikContext(_ref){var value=_ref.value,name=_ref.name,onChangeProp=_ref.onChange,onBlurProp=_ref.onBlur,helperText=_ref.helperText,error=_ref.error,_ref2=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u6)()||{},values=_ref2.values,handleBlur=_ref2.handleBlur,setFieldValue=_ref2.setFieldValue,touched=_ref2.touched,errors=_ref2.errors,_useMemo=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return name?{rootPropertyPath:name.split(".")[0],propertyPath:name}:{}}),[name]),rootPropertyPath=_useMemo.rootPropertyPath,propertyPath=_useMemo.propertyPath,onChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(event){propertyPath&&rootPropertyPath&&(event.target.value?setFieldValue(propertyPath,event.target.value):setFieldValue(rootPropertyPath,void 0)),onChangeProp&&onChangeProp(event)}),[onChangeProp,propertyPath,rootPropertyPath,setFieldValue]),onBlur=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(event){handleBlur&&handleBlur(event),onBlurProp&&onBlurProp(event)}),[handleBlur,onBlurProp]);return{value:null!=value?value:function(){if(values&&propertyPath){var _value=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(values,propertyPath);if(null!=_value&&("object"!=typeof _value||!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(_value)))return _value}}(),onChange:onChange,onBlur:onBlur,error:null!=error?error:function(){if(errors&&touched&&rootPropertyPath&&propertyPath&&(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(touched,rootPropertyPath))return Boolean((0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(errors,propertyPath))}(),helperText:null!=helperText?helperText:function(){if(errors&&touched&&rootPropertyPath&&propertyPath&&(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(touched,rootPropertyPath))return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(errors,propertyPath)}()}}}}]);
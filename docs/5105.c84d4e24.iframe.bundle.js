"use strict";(self.webpackChunk_infinite_debugger_react_mui=self.webpackChunk_infinite_debugger_react_mui||[]).push([[5105],{"./node_modules/@infinite-debugger/rmk-utils/paths.js":function(__unused_webpack_module,exports){var __read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error:error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__spreadArray=this&&this.__spreadArray||function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.matchPath=exports.addSearchParams=exports.paramsSufficientForPath=exports.getInterpolatedPath=void 0;exports.getInterpolatedPath=function(templatePath,params){if(templatePath.match(/:(\w+)/g)){var extractedParameters=[],regex=/:(\w+)/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match);extractedParameters.filter((function(key){return!key.match(/^\d+$/g)})).forEach((function(key){if(!params[key])throw new Error("Param ".concat(key," not found"));templatePath=templatePath.replace(":".concat(key),encodeURIComponent(params[key]))}))}else if(templatePath.match(/\{(\w+)\}/g)){extractedParameters=[],regex=/\{(\w+)\}/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match);extractedParameters.filter((function(key){return!key.match(/^\d+$/g)})).forEach((function(key){if(!params[key])throw new Error("Param ".concat(key," not found"));templatePath=templatePath.replace("{".concat(key,"}"),encodeURIComponent(params[key]))}))}else if(templatePath.match(/\[(\w+)\]/g)){extractedParameters=[],regex=/\[(\w+)\]/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match);extractedParameters.filter((function(key){return!key.match(/^\d+$/g)})).forEach((function(key){if(!params[key])throw new Error("Param ".concat(key," not found"));templatePath=templatePath.replace("[".concat(key,"]"),encodeURIComponent(params[key]))}))}return templatePath};exports.paramsSufficientForPath=function(templatePath,params){return function(){var extractedParameters=[];if(templatePath.match(/:(\w+)/g)){var regex=/:(\w+)/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match)}else if(templatePath.match(/\{(\w+)\}/g)){regex=/\{(\w+)\}/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match)}else if(templatePath.match(/\[(\w+)\]/g)){regex=/\[(\w+)\]/g,match=void 0;do{(match=regex.exec(templatePath))&&extractedParameters.push(match[1])}while(match)}return extractedParameters}().filter((function(key){return!key.match(/^\d+$/g)})).every((function(key){return null!=params[key]}))};exports.addSearchParams=function(routePath,searchParams,_a){var _b=void 0===_a?{}:_a,_c=_b.arrayParamStyle,arrayParamStyle=void 0===_c?"comma":_c,_d=_b.mode,mode=void 0===_d?"string":_d,keys=Object.keys(searchParams);if(0===keys.length)return routePath;var paramsKeyValuePair=function(){switch(mode){case"string":return keys.reduce((function(accumulator,key){if("append"===arrayParamStyle){if(null!=searchParams[key]&&String(searchParams[key]).length>0){var baseSearchParamValue=searchParams[key],findValuePath_1=function(searchParamValue,searchParamValuePath){(void 0===searchParamValuePath&&(searchParamValuePath=[]),"object"==typeof searchParamValue)?Object.entries(searchParamValue).forEach((function(_a){var _b=__read(_a,2),objectKey=_b[0],value=_b[1];findValuePath_1(value,__spreadArray(__spreadArray([],__read(searchParamValuePath),!1),[objectKey],!1))})):accumulator.push("".concat(key).concat(searchParamValuePath.map((function(key){return"[".concat(key,"]")})).join(""),"=").concat(searchParamValue))};findValuePath_1(baseSearchParamValue)}}else if(null!=searchParams[key]&&String(searchParams[key]).length>0){var value=null!=searchParams[key]&&"object"==typeof searchParams[key]&&String(searchParams[key]).includes("[object Object]")?JSON.stringify(searchParams[key]):Array.isArray(searchParams[key])?searchParams[key].join(","):String(searchParams[key]);accumulator.push("".concat(key,"=").concat(encodeURIComponent(value)))}return accumulator}),[]);case"json":return keys.reduce((function(accumulator,key){return null!=searchParams[key]&&accumulator.push("".concat(key,"=").concat(JSON.stringify(searchParams[key]))),accumulator}),[])}}(),queryString=paramsKeyValuePair.join("&");return queryString.length>0?routePath+"?"+queryString:routePath};exports.matchPath=function(templatePath,testPath){return Boolean(RegExp("^".concat(templatePath.replace(/:(\w+)|\{(\w+)\}|\[(\w+)\]/g,"(\\w+)"),"$"),"g").exec(testPath))}},"./node_modules/@mui/material/esm/Chip/Chip.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Chip_Chip}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/esm/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Cancel=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),useForkRef=__webpack_require__("./node_modules/@mui/material/esm/utils/useForkRef.js"),capitalize=__webpack_require__("./node_modules/@mui/material/esm/utils/capitalize.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),chipClasses=__webpack_require__("./node_modules/@mui/material/esm/Chip/chipClasses.js");const _excluded=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],ChipRoot=(0,styled.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props,{color:color,iconColor:iconColor,clickable:clickable,onDelete:onDelete,size:size,variant:variant}=ownerState;return[{[`& .${chipClasses.Z.avatar}`]:styles.avatar},{[`& .${chipClasses.Z.avatar}`]:styles[`avatar${(0,capitalize.Z)(size)}`]},{[`& .${chipClasses.Z.avatar}`]:styles[`avatarColor${(0,capitalize.Z)(color)}`]},{[`& .${chipClasses.Z.icon}`]:styles.icon},{[`& .${chipClasses.Z.icon}`]:styles[`icon${(0,capitalize.Z)(size)}`]},{[`& .${chipClasses.Z.icon}`]:styles[`iconColor${(0,capitalize.Z)(iconColor)}`]},{[`& .${chipClasses.Z.deleteIcon}`]:styles.deleteIcon},{[`& .${chipClasses.Z.deleteIcon}`]:styles[`deleteIcon${(0,capitalize.Z)(size)}`]},{[`& .${chipClasses.Z.deleteIcon}`]:styles[`deleteIconColor${(0,capitalize.Z)(color)}`]},{[`& .${chipClasses.Z.deleteIcon}`]:styles[`deleteIcon${(0,capitalize.Z)(variant)}Color${(0,capitalize.Z)(color)}`]},styles.root,styles[`size${(0,capitalize.Z)(size)}`],styles[`color${(0,capitalize.Z)(color)}`],clickable&&styles.clickable,clickable&&"default"!==color&&styles[`clickableColor${(0,capitalize.Z)(color)})`],onDelete&&styles.deletable,onDelete&&"default"!==color&&styles[`deletableColor${(0,capitalize.Z)(color)}`],styles[variant],styles[`${variant}${(0,capitalize.Z)(color)}`]]}})((({theme:theme,ownerState:ownerState})=>{const deleteIconColor=(0,colorManipulator.Fq)(theme.palette.text.primary,.26),textColor="light"===theme.palette.mode?theme.palette.grey[700]:theme.palette.grey[300];return(0,esm_extends.Z)({maxWidth:"100%",fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(theme.vars||theme).palette.text.primary,backgroundColor:(theme.vars||theme).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:theme.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${chipClasses.Z.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${chipClasses.Z.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:theme.vars?theme.vars.palette.Chip.defaultAvatarColor:textColor,fontSize:theme.typography.pxToRem(12)},[`& .${chipClasses.Z.avatarColorPrimary}`]:{color:(theme.vars||theme).palette.primary.contrastText,backgroundColor:(theme.vars||theme).palette.primary.dark},[`& .${chipClasses.Z.avatarColorSecondary}`]:{color:(theme.vars||theme).palette.secondary.contrastText,backgroundColor:(theme.vars||theme).palette.secondary.dark},[`& .${chipClasses.Z.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:theme.typography.pxToRem(10)},[`& .${chipClasses.Z.icon}`]:(0,esm_extends.Z)({marginLeft:5,marginRight:-6},"small"===ownerState.size&&{fontSize:18,marginLeft:4,marginRight:-4},ownerState.iconColor===ownerState.color&&(0,esm_extends.Z)({color:theme.vars?theme.vars.palette.Chip.defaultIconColor:textColor},"default"!==ownerState.color&&{color:"inherit"})),[`& .${chipClasses.Z.deleteIcon}`]:(0,esm_extends.Z)({WebkitTapHighlightColor:"transparent",color:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / 0.26)`:deleteIconColor,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / 0.4)`:(0,colorManipulator.Fq)(deleteIconColor,.4)}},"small"===ownerState.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==ownerState.color&&{color:theme.vars?`rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].contrastText,.7),"&:hover, &:active":{color:(theme.vars||theme).palette[ownerState.color].contrastText}})},"small"===ownerState.size&&{height:24},"default"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].main,color:(theme.vars||theme).palette[ownerState.color].contrastText},ownerState.onDelete&&{[`&.${chipClasses.Z.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity+theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},ownerState.onDelete&&"default"!==ownerState.color&&{[`&.${chipClasses.Z.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark}})}),(({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({},ownerState.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity+theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity)},[`&.${chipClasses.Z.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity+theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)},"&:active":{boxShadow:(theme.vars||theme).shadows[1]}},ownerState.clickable&&"default"!==ownerState.color&&{[`&:hover, &.${chipClasses.Z.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark}})),(({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({},"outlined"===ownerState.variant&&{backgroundColor:"transparent",border:theme.vars?`1px solid ${theme.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[700]}`,[`&.${chipClasses.Z.clickable}:hover`]:{backgroundColor:(theme.vars||theme).palette.action.hover},[`&.${chipClasses.Z.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`& .${chipClasses.Z.avatar}`]:{marginLeft:4},[`& .${chipClasses.Z.avatarSmall}`]:{marginLeft:2},[`& .${chipClasses.Z.icon}`]:{marginLeft:4},[`& .${chipClasses.Z.iconSmall}`]:{marginLeft:2},[`& .${chipClasses.Z.deleteIcon}`]:{marginRight:5},[`& .${chipClasses.Z.deleteIconSmall}`]:{marginRight:3}},"outlined"===ownerState.variant&&"default"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main,border:`1px solid ${theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.7)}`,[`&.${chipClasses.Z.clickable}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity)},[`&.${chipClasses.Z.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.focusOpacity)},[`& .${chipClasses.Z.deleteIcon}`]:{color:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.7),"&:hover, &:active":{color:(theme.vars||theme).palette[ownerState.color].main}}}))),ChipLabel=(0,styled.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props,{size:size}=ownerState;return[styles.label,styles[`label${(0,capitalize.Z)(size)}`]]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===ownerState.size&&{paddingLeft:8,paddingRight:8})));function isDeleteKeyboardEvent(keyboardEvent){return"Backspace"===keyboardEvent.key||"Delete"===keyboardEvent.key}var Chip_Chip=react.forwardRef((function Chip(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiChip"}),{avatar:avatarProp,className:className,clickable:clickableProp,color:color="default",component:ComponentProp,deleteIcon:deleteIconProp,disabled:disabled=!1,icon:iconProp,label:label,onClick:onClick,onDelete:onDelete,onKeyDown:onKeyDown,onKeyUp:onKeyUp,size:size="medium",variant:variant="filled"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),chipRef=react.useRef(null),handleRef=(0,useForkRef.Z)(chipRef,ref),handleDeleteIconClick=event=>{event.stopPropagation(),onDelete&&onDelete(event)},clickable=!(!1===clickableProp||!onClick)||clickableProp,component=clickable||onDelete?ButtonBase.Z:ComponentProp||"div",ownerState=(0,esm_extends.Z)({},props,{component:component,disabled:disabled,size:size,color:color,iconColor:react.isValidElement(iconProp)&&iconProp.props.color||color,onDelete:!!onDelete,clickable:clickable,variant:variant}),classes=(ownerState=>{const{classes:classes,disabled:disabled,size:size,color:color,iconColor:iconColor,onDelete:onDelete,clickable:clickable,variant:variant}=ownerState,slots={root:["root",variant,disabled&&"disabled",`size${(0,capitalize.Z)(size)}`,`color${(0,capitalize.Z)(color)}`,clickable&&"clickable",clickable&&`clickableColor${(0,capitalize.Z)(color)}`,onDelete&&"deletable",onDelete&&`deletableColor${(0,capitalize.Z)(color)}`,`${variant}${(0,capitalize.Z)(color)}`],label:["label",`label${(0,capitalize.Z)(size)}`],avatar:["avatar",`avatar${(0,capitalize.Z)(size)}`,`avatarColor${(0,capitalize.Z)(color)}`],icon:["icon",`icon${(0,capitalize.Z)(size)}`,`iconColor${(0,capitalize.Z)(iconColor)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,capitalize.Z)(size)}`,`deleteIconColor${(0,capitalize.Z)(color)}`,`deleteIcon${(0,capitalize.Z)(variant)}Color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,chipClasses.z,classes)})(ownerState),moreProps=component===ButtonBase.Z?(0,esm_extends.Z)({component:ComponentProp||"div",focusVisibleClassName:classes.focusVisible},onDelete&&{disableRipple:!0}):{};let deleteIcon=null;onDelete&&(deleteIcon=deleteIconProp&&react.isValidElement(deleteIconProp)?react.cloneElement(deleteIconProp,{className:(0,clsx_m.Z)(deleteIconProp.props.className,classes.deleteIcon),onClick:handleDeleteIconClick}):(0,jsx_runtime.jsx)(Cancel,{className:(0,clsx_m.Z)(classes.deleteIcon),onClick:handleDeleteIconClick}));let avatar=null;avatarProp&&react.isValidElement(avatarProp)&&(avatar=react.cloneElement(avatarProp,{className:(0,clsx_m.Z)(classes.avatar,avatarProp.props.className)}));let icon=null;return iconProp&&react.isValidElement(iconProp)&&(icon=react.cloneElement(iconProp,{className:(0,clsx_m.Z)(classes.icon,iconProp.props.className)})),(0,jsx_runtime.jsxs)(ChipRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),disabled:!(!clickable||!disabled)||void 0,onClick:onClick,onKeyDown:event=>{event.currentTarget===event.target&&isDeleteKeyboardEvent(event)&&event.preventDefault(),onKeyDown&&onKeyDown(event)},onKeyUp:event=>{event.currentTarget===event.target&&(onDelete&&isDeleteKeyboardEvent(event)?onDelete(event):"Escape"===event.key&&chipRef.current&&chipRef.current.blur()),onKeyUp&&onKeyUp(event)},ref:handleRef,ownerState:ownerState},moreProps,other,{children:[avatar||icon,(0,jsx_runtime.jsx)(ChipLabel,{className:(0,clsx_m.Z)(classes.label),ownerState:ownerState,children:label}),deleteIcon]}))}))},"./node_modules/@mui/material/esm/Chip/chipClasses.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return getChipUtilityClass}});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getChipUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiChip",slot)}const chipClasses=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);__webpack_exports__.Z=chipClasses},"./node_modules/@mui/material/esm/Container/Container.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _mui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/Container/createContainer.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/esm/utils/capitalize.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js");const Container=(0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.Z)({createStyledComponent:(0,_styles_styled__WEBPACK_IMPORTED_MODULE_1__.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[`maxWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__.Z)({props:inProps,name:"MuiContainer"})});__webpack_exports__.Z=Container}}]);
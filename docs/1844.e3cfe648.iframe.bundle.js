"use strict";(self.webpackChunk_infinite_debugger_react_mui=self.webpackChunk_infinite_debugger_react_mui||[]).push([[1844],{"./node_modules/@mui/material/esm/ListItem/ListItem.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return ListItem_ListItem}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),isHostComponent=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/base/utils/isHostComponent.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js"),isMuiElement=__webpack_require__("./node_modules/@mui/material/esm/utils/isMuiElement.js"),useEnhancedEffect=__webpack_require__("./node_modules/@mui/material/esm/utils/useEnhancedEffect.js"),useForkRef=__webpack_require__("./node_modules/@mui/material/esm/utils/useForkRef.js"),ListContext=__webpack_require__("./node_modules/@mui/material/esm/List/ListContext.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItem",slot)}var ListItem_listItemClasses=(0,generateUtilityClasses.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),listItemButtonClasses=__webpack_require__("./node_modules/@mui/material/esm/ListItemButton/listItemButtonClasses.js");function getListItemSecondaryActionClassesUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemSecondaryAction",slot)}(0,generateUtilityClasses.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className"],ListItemSecondaryActionRoot=(0,styled.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,ownerState.disableGutters&&styles.disableGutters]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},ownerState.disableGutters&&{right:0}))),ListItemSecondaryAction=react.forwardRef((function ListItemSecondaryAction(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemSecondaryAction"}),{className:className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),ownerState=(0,esm_extends.Z)({},props,{disableGutters:context.disableGutters}),classes=(ownerState=>{const{disableGutters:disableGutters,classes:classes}=ownerState,slots={root:["root",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,getListItemSecondaryActionClassesUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListItemSecondaryActionRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),ownerState:ownerState,ref:ref},other))}));ListItemSecondaryAction.muiName="ListItemSecondaryAction";var ListItemSecondaryAction_ListItemSecondaryAction=ListItemSecondaryAction;const ListItem_excluded=["className"],_excluded2=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],ListItemRoot=(0,styled.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,ownerState.dense&&styles.dense,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart,ownerState.divider&&styles.divider,!ownerState.disableGutters&&styles.gutters,!ownerState.disablePadding&&styles.padding,ownerState.button&&styles.button,ownerState.hasSecondaryAction&&styles.secondaryAction]}})((({theme:theme,ownerState:ownerState})=>(0,esm_extends.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!ownerState.disablePadding&&(0,esm_extends.Z)({paddingTop:8,paddingBottom:8},ownerState.dense&&{paddingTop:4,paddingBottom:4},!ownerState.disableGutters&&{paddingLeft:16,paddingRight:16},!!ownerState.secondaryAction&&{paddingRight:48}),!!ownerState.secondaryAction&&{[`& > .${listItemButtonClasses.Z.root}`]:{paddingRight:48}},{[`&.${ListItem_listItemClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`&.${ListItem_listItemClasses.selected}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity),[`&.${ListItem_listItemClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},[`&.${ListItem_listItemClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity}},"flex-start"===ownerState.alignItems&&{alignItems:"flex-start"},ownerState.divider&&{borderBottom:`1px solid ${(theme.vars||theme).palette.divider}`,backgroundClip:"padding-box"},ownerState.button&&{transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(theme.vars||theme).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ListItem_listItemClasses.selected}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(theme.palette.primary.main,theme.palette.action.selectedOpacity)}}},ownerState.hasSecondaryAction&&{paddingRight:48}))),ListItemContainer=(0,styled.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(props,styles)=>styles.container})({position:"relative"});var ListItem_ListItem=react.forwardRef((function ListItem(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItem"}),{alignItems:alignItems="center",autoFocus:autoFocus=!1,button:button=!1,children:childrenProp,className:className,component:componentProp,components:components={},componentsProps:componentsProps={},ContainerComponent:ContainerComponent="li",ContainerProps:{className:ContainerClassName}={},dense:dense=!1,disabled:disabled=!1,disableGutters:disableGutters=!1,disablePadding:disablePadding=!1,divider:divider=!1,focusVisibleClassName:focusVisibleClassName,secondaryAction:secondaryAction,selected:selected=!1}=props,ContainerProps=(0,objectWithoutPropertiesLoose.Z)(props.ContainerProps,ListItem_excluded),other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),context=react.useContext(ListContext.Z),childContext=react.useMemo((()=>({dense:dense||context.dense||!1,alignItems:alignItems,disableGutters:disableGutters})),[alignItems,context.dense,dense,disableGutters]),listItemRef=react.useRef(null);(0,useEnhancedEffect.Z)((()=>{autoFocus&&listItemRef.current&&listItemRef.current.focus()}),[autoFocus]);const children=react.Children.toArray(childrenProp),hasSecondaryAction=children.length&&(0,isMuiElement.Z)(children[children.length-1],["ListItemSecondaryAction"]),ownerState=(0,esm_extends.Z)({},props,{alignItems:alignItems,autoFocus:autoFocus,button:button,dense:childContext.dense,disabled:disabled,disableGutters:disableGutters,disablePadding:disablePadding,divider:divider,hasSecondaryAction:hasSecondaryAction,selected:selected}),classes=(ownerState=>{const{alignItems:alignItems,button:button,classes:classes,dense:dense,disabled:disabled,disableGutters:disableGutters,disablePadding:disablePadding,divider:divider,hasSecondaryAction:hasSecondaryAction,selected:selected}=ownerState,slots={root:["root",dense&&"dense",!disableGutters&&"gutters",!disablePadding&&"padding",divider&&"divider",disabled&&"disabled",button&&"button","flex-start"===alignItems&&"alignItemsFlexStart",hasSecondaryAction&&"secondaryAction",selected&&"selected"],container:["container"]};return(0,composeClasses.Z)(slots,getListItemUtilityClass,classes)})(ownerState),handleRef=(0,useForkRef.Z)(listItemRef,ref),Root=components.Root||ListItemRoot,rootProps=componentsProps.root||{},componentProps=(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,rootProps.className,className),disabled:disabled},other);let Component=componentProp||"li";return button&&(componentProps.component=componentProp||"div",componentProps.focusVisibleClassName=(0,clsx_m.Z)(ListItem_listItemClasses.focusVisible,focusVisibleClassName),Component=ButtonBase.Z),hasSecondaryAction?(Component=componentProps.component||componentProp?Component:"div","li"===ContainerComponent&&("li"===Component?Component="div":"li"===componentProps.component&&(componentProps.component="div")),(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:childContext,children:(0,jsx_runtime.jsxs)(ListItemContainer,(0,esm_extends.Z)({as:ContainerComponent,className:(0,clsx_m.Z)(classes.container,ContainerClassName),ref:handleRef,ownerState:ownerState},ContainerProps,{children:[(0,jsx_runtime.jsx)(Root,(0,esm_extends.Z)({},rootProps,!(0,isHostComponent.Z)(Root)&&{as:Component,ownerState:(0,esm_extends.Z)({},ownerState,rootProps.ownerState)},componentProps,{children:children})),children.pop()]}))})):(0,jsx_runtime.jsx)(ListContext.Z.Provider,{value:childContext,children:(0,jsx_runtime.jsxs)(Root,(0,esm_extends.Z)({},rootProps,{as:Component,ref:handleRef,ownerState:ownerState},!(0,isHostComponent.Z)(Root)&&{ownerState:(0,esm_extends.Z)({},ownerState,rootProps.ownerState)},componentProps,{children:[children,secondaryAction&&(0,jsx_runtime.jsx)(ListItemSecondaryAction_ListItemSecondaryAction,{children:secondaryAction})]}))})}))},"./node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ListItemAvatar_ListItemAvatar}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),ListContext=__webpack_require__("./node_modules/@mui/material/esm/List/ListContext.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemAvatarUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemAvatar",slot)}(0,generateUtilityClasses.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className"],ListItemAvatarRoot=(0,styled.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,"flex-start"===ownerState.alignItems&&styles.alignItemsFlexStart]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({minWidth:56,flexShrink:0},"flex-start"===ownerState.alignItems&&{marginTop:8})));var ListItemAvatar_ListItemAvatar=react.forwardRef((function ListItemAvatar(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemAvatar"}),{className:className}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),context=react.useContext(ListContext.Z),ownerState=(0,esm_extends.Z)({},props,{alignItems:context.alignItems}),classes=(ownerState=>{const{alignItems:alignItems,classes:classes}=ownerState,slots={root:["root","flex-start"===alignItems&&"alignItemsFlexStart"]};return(0,composeClasses.Z)(slots,getListItemAvatarUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ListItemAvatarRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),ownerState:ownerState,ref:ref},other))}))},"./node_modules/@mui/material/esm/ListItemButton/listItemButtonClasses.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return getListItemButtonUtilityClass}});var _mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemButtonUtilityClass(slot){return(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiListItemButton",slot)}const listItemButtonClasses=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);__webpack_exports__.Z=listItemButtonClasses},"./node_modules/@mui/material/esm/ListItemText/ListItemText.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ListItemText_ListItemText}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),Typography=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),ListContext=__webpack_require__("./node_modules/@mui/material/esm/List/ListContext.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/esm/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getListItemTextUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiListItemText",slot)}var ListItemText_listItemTextClasses=(0,generateUtilityClasses.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ListItemTextRoot=(0,styled.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[{[`& .${ListItemText_listItemTextClasses.primary}`]:styles.primary},{[`& .${ListItemText_listItemTextClasses.secondary}`]:styles.secondary},styles.root,ownerState.inset&&styles.inset,ownerState.primary&&ownerState.secondary&&styles.multiline,ownerState.dense&&styles.dense]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},ownerState.primary&&ownerState.secondary&&{marginTop:6,marginBottom:6},ownerState.inset&&{paddingLeft:56})));var ListItemText_ListItemText=react.forwardRef((function ListItemText(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiListItemText"}),{children:children,className:className,disableTypography:disableTypography=!1,inset:inset=!1,primary:primaryProp,primaryTypographyProps:primaryTypographyProps,secondary:secondaryProp,secondaryTypographyProps:secondaryTypographyProps}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{dense:dense}=react.useContext(ListContext.Z);let primary=null!=primaryProp?primaryProp:children,secondary=secondaryProp;const ownerState=(0,esm_extends.Z)({},props,{disableTypography:disableTypography,inset:inset,primary:!!primary,secondary:!!secondary,dense:dense}),classes=(ownerState=>{const{classes:classes,inset:inset,primary:primary,secondary:secondary,dense:dense}=ownerState,slots={root:["root",inset&&"inset",dense&&"dense",primary&&secondary&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,composeClasses.Z)(slots,getListItemTextUtilityClass,classes)})(ownerState);return null==primary||primary.type===Typography.Z||disableTypography||(primary=(0,jsx_runtime.jsx)(Typography.Z,(0,esm_extends.Z)({variant:dense?"body2":"body1",className:classes.primary,component:null!=primaryTypographyProps&&primaryTypographyProps.variant?void 0:"span",display:"block"},primaryTypographyProps,{children:primary}))),null==secondary||secondary.type===Typography.Z||disableTypography||(secondary=(0,jsx_runtime.jsx)(Typography.Z,(0,esm_extends.Z)({variant:"body2",className:classes.secondary,color:"text.secondary",display:"block"},secondaryTypographyProps,{children:secondary}))),(0,jsx_runtime.jsxs)(ListItemTextRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),ownerState:ownerState,ref:ref},other,{children:[primary,secondary]}))}))}}]);
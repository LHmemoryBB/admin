(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a8bd952"],{6105:function(i,o,c){},"707a":function(i,o,c){"use strict";c("6105")},b6aa:function(i,o,c){"use strict";c.r(o);var a=function(){var i=this,o=i.$createElement,c=i._self._c||o;return c("el-main",{staticClass:"bg edit_wrap comtable_e"},[i.is_view()?c("el-form",{ref:"form",attrs:{model:i.form,"status-icon":"","label-width":"120px"}},[c("el-row",{staticClass:"row_ce"},["管理员"===i.user_group||i.$check_field("get","food_classification")||i.$check_field("add","food_classification")||i.$check_field("set","food_classification")?c("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[c("el-form-item",{attrs:{label:"美食分类",prop:"food_classification"}},["管理员"===i.user_group||i.form["food_classification_id"]&&i.$check_field("set","food_classification")||!i.form["food_classification_id"]&&i.$check_field("add","food_classification")?c("el-input",{attrs:{id:"food_classification",placeholder:"请输入美食分类",disabled:i.disabledObj["food_classification_isDisabled"]},model:{value:i.form["food_classification"],callback:function(o){i.$set(i.form,"food_classification",o)},expression:"form['food_classification']"}}):i.$check_field("get","food_classification")?c("div",[i._v(i._s(i.form["food_classification"]))]):i._e()],1)],1):i._e()],1),c("el-col",{staticClass:"el_form_btn_warp",attrs:{xs:24,sm:12,lg:8}},[i.$check_action("/food_classification/view","set")||i.$check_action("/food_classification/view","add")||i.$check_option("/food_classification/table","examine")?c("el-form-item",[c("el-button",{attrs:{type:"primary"},on:{click:function(o){return i.submit()}}},[i._v("提交")]),c("el-button",{on:{click:function(o){return i.cancel()}}},[i._v("取消")])],1):c("el-form-item",[c("el-button",{on:{click:function(o){return i.cancel()}}},[i._v("返回")])],1)],1)],1):i._e()],1)},t=[],s=(c("b64b"),c("159b"),c("c6e7")),e={mixins:[s["a"]],data:function(){return{field:"food_classification_id",url_add:"~/api/food_classification/add?",url_set:"~/api/food_classification/set?",url_get_obj:"~/api/food_classification/get_obj?",url_upload:"~/api/food_classification/upload?",query:{food_classification_id:0},form:{food_classification:"",food_classification_id:0},disabledObj:{food_classification_isDisabled:!1}}},methods:{get_obj_before:function(i){var o=this,c="";return this.form&&c&&Object.keys(this.form).forEach((function(i){Object.keys(c).forEach((function(c){i===c&&(o.disabledObj[i+"_isDisabled"]=!0)}))})),$.db.del("form"),i},get_obj_after:function(i,o){},submit_check:function(i){return null},is_view:function(){var i="管理员"==this.user_group;return i||(i=this.$check_action("/food_classification/table","add"),console.log(i?"你有表格添加权限视作有添加权限":"你没有表格添加权限")),i||(i=this.$check_action("/food_classification/table","set"),console.log(i?"你有表格添加权限视作有修改权限":"你没有表格修改权限")),i||(i=this.$check_action("/food_classification/view","add"),console.log(i?"你有视图添加权限视作有添加权限":"你没有视图添加权限")),i||(i=this.$check_action("/food_classification/view","set"),console.log(i?"你有视图修改权限视作有修改权限":"你没有视图修改权限")),i||(i=this.$check_action("/food_classification/view","get"),console.log(i?"你有视图查询权限视作有查询权限":"你没有视图查询权限")),console.log(i?"具有当前页面的查看权，请注意这不代表你有字段的查看权":"无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行"),i},uploadimg:function(i){this.uploadFile(i.file,"avatar")}},created:function(){}},l=e,f=(c("707a"),c("2877")),n=Object(f["a"])(l,a,t,!1,null,null,null);o["default"]=n.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e13fdd4"],{"1d91":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-main",{staticClass:"bg edit_wrap comtable_e"},[t.is_view()?o("el-form",{ref:"form",attrs:{model:t.form,"status-icon":"","label-width":"120px"}},[o("el-row",{staticClass:"row_ce"},["管理员"===t.user_group||t.$check_field("get","types_of_attractions")||t.$check_field("add","types_of_attractions")||t.$check_field("set","types_of_attractions")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点类型",prop:"types_of_attractions"}},["管理员"===t.user_group||t.form["types_of_attractions_id"]&&t.$check_field("set","types_of_attractions")||!t.form["types_of_attractions_id"]&&t.$check_field("add","types_of_attractions")?o("el-input",{attrs:{id:"types_of_attractions",placeholder:"请输入景点类型",disabled:t.disabledObj["types_of_attractions_isDisabled"]},model:{value:t.form["types_of_attractions"],callback:function(e){t.$set(t.form,"types_of_attractions",e)},expression:"form['types_of_attractions']"}}):t.$check_field("get","types_of_attractions")?o("div",[t._v(t._s(t.form["types_of_attractions"]))]):t._e()],1)],1):t._e()],1),o("el-col",{staticClass:"el_form_btn_warp",attrs:{xs:24,sm:12,lg:8}},[t.$check_action("/types_of_attractions/view","set")||t.$check_action("/types_of_attractions/view","add")||t.$check_option("/types_of_attractions/table","examine")?o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")]),o("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("取消")])],1):o("el-form-item",[o("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("返回")])],1)],1)],1):t._e()],1)},a=[],i=(o("b64b"),o("159b"),o("c6e7")),c={mixins:[i["a"]],data:function(){return{field:"types_of_attractions_id",url_add:"~/api/types_of_attractions/add?",url_set:"~/api/types_of_attractions/set?",url_get_obj:"~/api/types_of_attractions/get_obj?",url_upload:"~/api/types_of_attractions/upload?",query:{types_of_attractions_id:0},form:{types_of_attractions:"",types_of_attractions_id:0},disabledObj:{types_of_attractions_isDisabled:!1}}},methods:{get_obj_before:function(t){var e=this,o="";return this.form&&o&&Object.keys(this.form).forEach((function(t){Object.keys(o).forEach((function(o){t===o&&(e.disabledObj[t+"_isDisabled"]=!0)}))})),$.db.del("form"),t},get_obj_after:function(t,e){},submit_check:function(t){return null},is_view:function(){var t="管理员"==this.user_group;return t||(t=this.$check_action("/types_of_attractions/table","add"),console.log(t?"你有表格添加权限视作有添加权限":"你没有表格添加权限")),t||(t=this.$check_action("/types_of_attractions/table","set"),console.log(t?"你有表格添加权限视作有修改权限":"你没有表格修改权限")),t||(t=this.$check_action("/types_of_attractions/view","add"),console.log(t?"你有视图添加权限视作有添加权限":"你没有视图添加权限")),t||(t=this.$check_action("/types_of_attractions/view","set"),console.log(t?"你有视图修改权限视作有修改权限":"你没有视图修改权限")),t||(t=this.$check_action("/types_of_attractions/view","get"),console.log(t?"你有视图查询权限视作有查询权限":"你没有视图查询权限")),console.log(t?"具有当前页面的查看权，请注意这不代表你有字段的查看权":"无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行"),t},uploadimg:function(t){this.uploadFile(t.file,"avatar")}},created:function(){}},_=c,n=(o("9f28"),o("2877")),r=Object(n["a"])(_,s,a,!1,null,null,null);e["default"]=r.exports},"9f28":function(t,e,o){"use strict";o("f461")},f461:function(t,e,o){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ee07b6a"],{"5a44":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("el-main",{staticClass:"bg edit_wrap comtable_e"},[t.is_view()?o("el-form",{ref:"form",attrs:{model:t.form,"status-icon":"","label-width":"120px"}},[o("el-row",{staticClass:"row_ce"},["管理员"===t.user_group||t.$check_field("get","attraction_name")||t.$check_field("add","attraction_name")||t.$check_field("set","attraction_name")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点名称",prop:"attraction_name"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","attraction_name")||!t.form["attraction_information_id"]&&t.$check_field("add","attraction_name")?o("el-input",{attrs:{id:"attraction_name",placeholder:"请输入景点名称",disabled:t.disabledObj["attraction_name_isDisabled"]},model:{value:t.form["attraction_name"],callback:function(i){t.$set(t.form,"attraction_name",i)},expression:"form['attraction_name']"}}):t.$check_field("get","attraction_name")?o("div",[t._v(t._s(t.form["attraction_name"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","types_of_attractions")||t.$check_field("add","types_of_attractions")||t.$check_field("set","types_of_attractions")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点类型",prop:"types_of_attractions"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","types_of_attractions")||!t.form["attraction_information_id"]&&t.$check_field("add","types_of_attractions")?o("el-select",{attrs:{id:"types_of_attractions"},model:{value:t.form["types_of_attractions"],callback:function(i){t.$set(t.form,"types_of_attractions",i)},expression:"form['types_of_attractions']"}},t._l(t.list_types_of_attractions,(function(t){return o("el-option",{key:t["types_of_attractions"],attrs:{label:t["types_of_attractions"],value:t["types_of_attractions"]}})})),1):t.$check_field("get","types_of_attractions")?o("div",[t._v(t._s(t.form["types_of_attractions"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","attraction_cities")||t.$check_field("add","attraction_cities")||t.$check_field("set","attraction_cities")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点城市",prop:"attraction_cities"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","attraction_cities")||!t.form["attraction_information_id"]&&t.$check_field("add","attraction_cities")?o("el-input",{attrs:{id:"attraction_cities",placeholder:"请输入景点城市",disabled:t.disabledObj["attraction_cities_isDisabled"]},model:{value:t.form["attraction_cities"],callback:function(i){t.$set(t.form,"attraction_cities",i)},expression:"form['attraction_cities']"}}):t.$check_field("get","attraction_cities")?o("div",[t._v(t._s(t.form["attraction_cities"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","attraction_address")||t.$check_field("add","attraction_address")||t.$check_field("set","attraction_address")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点地址",prop:"attraction_address"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","attraction_address")||!t.form["attraction_information_id"]&&t.$check_field("add","attraction_address")?o("el-input",{attrs:{id:"attraction_address",placeholder:"请输入景点地址",disabled:t.disabledObj["attraction_address_isDisabled"]},model:{value:t.form["attraction_address"],callback:function(i){t.$set(t.form,"attraction_address",i)},expression:"form['attraction_address']"}}):t.$check_field("get","attraction_address")?o("div",[t._v(t._s(t.form["attraction_address"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","admission_price")||t.$check_field("add","admission_price")||t.$check_field("set","admission_price")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"门票价格",prop:"admission_price"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","admission_price")||!t.form["attraction_information_id"]&&t.$check_field("add","admission_price")?o("el-input-number",{attrs:{id:"admission_price",disabled:t.disabledObj["admission_price_isDisabled"]},model:{value:t.form["admission_price"],callback:function(i){t.$set(t.form,"admission_price",t._n(i))},expression:"form['admission_price']"}}):t.$check_field("get","admission_price")?o("div",[t._v(t._s(t.form["admission_price"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","opening_hours")||t.$check_field("add","opening_hours")||t.$check_field("set","opening_hours")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"开放时间",prop:"opening_hours"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","opening_hours")||!t.form["attraction_information_id"]&&t.$check_field("add","opening_hours")?o("el-input",{attrs:{id:"opening_hours",placeholder:"请输入开放时间",disabled:t.disabledObj["opening_hours_isDisabled"]},model:{value:t.form["opening_hours"],callback:function(i){t.$set(t.form,"opening_hours",i)},expression:"form['opening_hours']"}}):t.$check_field("get","opening_hours")?o("div",[t._v(t._s(t.form["opening_hours"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","map_link")||t.$check_field("add","map_link")||t.$check_field("set","map_link")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"地图链接",prop:"map_link"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","map_link")||!t.form["attraction_information_id"]&&t.$check_field("add","map_link")?o("el-input",{attrs:{id:"map_link",placeholder:"请输入地图链接",disabled:t.disabledObj["map_link_isDisabled"]},model:{value:t.form["map_link"],callback:function(i){t.$set(t.form,"map_link",i)},expression:"form['map_link']"}}):t.$check_field("get","map_link")?o("div",[t._v(t._s(t.form["map_link"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","appointment_points")||t.$check_field("add","appointment_points")||t.$check_field("set","appointment_points")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"预约积分",prop:"appointment_points"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","appointment_points")||!t.form["attraction_information_id"]&&t.$check_field("add","appointment_points")?o("el-input-number",{attrs:{id:"appointment_points",disabled:t.disabledObj["appointment_points_isDisabled"]},model:{value:t.form["appointment_points"],callback:function(i){t.$set(t.form,"appointment_points",t._n(i))},expression:"form['appointment_points']"}}):t.$check_field("get","appointment_points")?o("div",[t._v(t._s(t.form["appointment_points"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","tourist_attraction_routes")||t.$check_field("add","tourist_attraction_routes")||t.$check_field("set","tourist_attraction_routes")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"景点路线",prop:"tourist_attraction_routes"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","tourist_attraction_routes")||!t.form["attraction_information_id"]&&t.$check_field("add","tourist_attraction_routes")?o("el-input",{attrs:{type:"textarea",id:"tourist_attraction_routes",placeholder:"请输入景点路线",disabled:t.disabledObj["tourist_attraction_routes_isDisabled"]},model:{value:t.form["tourist_attraction_routes"],callback:function(i){t.$set(t.form,"tourist_attraction_routes",i)},expression:"form['tourist_attraction_routes']"}}):t.$check_field("get","tourist_attraction_routes")?o("div",[t._v(t._s(t.form["tourist_attraction_routes"]))]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","cover_photo")||t.$check_field("add","cover_photo")||t.$check_field("set","cover_photo")?o("el-col",{staticClass:"el_form_item_warp",attrs:{xs:24,sm:12,lg:8}},[o("el-form-item",{attrs:{label:"封面图片",prop:"cover_photo"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","cover_photo")||!t.form["attraction_information_id"]&&t.$check_field("add","cover_photo")?o("el-upload",{staticClass:"avatar-uploader",attrs:{disabled:t.disabledObj["cover_photo_isDisabled"],id:"cover_photo",drag:"",accept:"image/gif, image/jpeg, image/png, image/jpg",action:"","http-request":t.upload_cover_photo,"show-file-list":!1}},[t.form["cover_photo"]?o("img",{staticClass:"avatar",attrs:{src:t.$fullUrl(t.form["cover_photo"])}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):t.$check_field("get","cover_photo")?o("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.$fullUrl(t.form["cover_photo"]),"preview-src-list":[t.$fullUrl(t.form["cover_photo"])]}},[o("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[o("img",{staticStyle:{width:"90px",height:"90px"},attrs:{src:e("84f9")}})])]):t._e()],1)],1):t._e(),"管理员"===t.user_group||t.$check_field("get","introduction_to_scenic_spots")||t.$check_field("add","introduction_to_scenic_spots")||t.$check_field("set","introduction_to_scenic_spots")?o("el-col",{staticClass:"el_form_editor_warp",attrs:{xs:24,sm:24,lg:24}},[o("el-form-item",{attrs:{label:"景点简介",prop:"introduction_to_scenic_spots"}},["管理员"===t.user_group||t.form["attraction_information_id"]&&t.$check_field("set","introduction_to_scenic_spots")||!t.form["attraction_information_id"]&&t.$check_field("add","introduction_to_scenic_spots")?o("quill-editor",{model:{value:t.form["introduction_to_scenic_spots"],callback:function(i){t.$set(t.form,"introduction_to_scenic_spots",t._n(i))},expression:"form['introduction_to_scenic_spots']"}}):t.$check_field("get","introduction_to_scenic_spots")?o("div",{domProps:{innerHTML:t._s(t.form["introduction_to_scenic_spots"])}}):t._e()],1)],1):t._e()],1),o("el-col",{staticClass:"el_form_btn_warp",attrs:{xs:24,sm:12,lg:8}},[t.$check_action("/attraction_information/view","set")||t.$check_action("/attraction_information/view","add")||t.$check_option("/attraction_information/table","examine")?o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.submit()}}},[t._v("提交")]),o("el-button",{on:{click:function(i){return t.cancel()}}},[t._v("取消")])],1):o("el-form-item",[o("el-button",{on:{click:function(i){return t.cancel()}}},[t._v("返回")])],1)],1)],1):t._e()],1)},a=[],r=(e("b64b"),e("159b"),e("96cf"),e("1da1")),s=e("c6e7"),_={mixins:[s["a"]],data:function(){return{field:"attraction_information_id",url_add:"~/api/attraction_information/add?",url_set:"~/api/attraction_information/set?",url_get_obj:"~/api/attraction_information/get_obj?",url_upload:"~/api/attraction_information/upload?",query:{attraction_information_id:0},form:{attraction_name:"",types_of_attractions:"",attraction_cities:"",attraction_address:"",admission_price:0,opening_hours:"",map_link:"",appointment_points:0,tourist_attraction_routes:"",cover_photo:"",introduction_to_scenic_spots:"",attraction_information_id:0},disabledObj:{attraction_name_isDisabled:!1,types_of_attractions_isDisabled:!1,attraction_cities_isDisabled:!1,attraction_address_isDisabled:!1,admission_price_isDisabled:!1,opening_hours_isDisabled:!1,map_link_isDisabled:!1,appointment_points_isDisabled:!1,tourist_attraction_routes_isDisabled:!1,cover_photo_isDisabled:!1,introduction_to_scenic_spots_isDisabled:!1},list_types_of_attractions:[""]}},methods:{get_list_types_of_attractions:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$get("~/api/types_of_attractions/get_list?");case 2:e=i.sent,e.result&&e.result.list?t.list_types_of_attractions=e.result.list:e.error&&console.error(e.error);case 4:case"end":return i.stop()}}),i)})))()},upload_cover_photo:function(t){this.uploadFile(t.file,"cover_photo")},get_obj_before:function(t){var i=this,e="";return this.form&&e&&Object.keys(this.form).forEach((function(t){Object.keys(e).forEach((function(e){t===e&&(i.disabledObj[t+"_isDisabled"]=!0)}))})),$.db.del("form"),t},get_obj_after:function(t,i){},submit_check:function(t){return null},is_view:function(){var t="管理员"==this.user_group;return t||(t=this.$check_action("/attraction_information/table","add"),console.log(t?"你有表格添加权限视作有添加权限":"你没有表格添加权限")),t||(t=this.$check_action("/attraction_information/table","set"),console.log(t?"你有表格添加权限视作有修改权限":"你没有表格修改权限")),t||(t=this.$check_action("/attraction_information/view","add"),console.log(t?"你有视图添加权限视作有添加权限":"你没有视图添加权限")),t||(t=this.$check_action("/attraction_information/view","set"),console.log(t?"你有视图修改权限视作有修改权限":"你没有视图修改权限")),t||(t=this.$check_action("/attraction_information/view","get"),console.log(t?"你有视图查询权限视作有查询权限":"你没有视图查询权限")),console.log(t?"具有当前页面的查看权，请注意这不代表你有字段的查看权":"无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行"),t},uploadimg:function(t){this.uploadFile(t.file,"avatar")}},created:function(){this.get_list_types_of_attractions()}},c=_,n=(e("f929"),e("2877")),l=Object(n["a"])(c,o,a,!1,null,null,null);i["default"]=l.exports},"726b":function(t,i,e){},f929:function(t,i,e){"use strict";e("726b")}}]);
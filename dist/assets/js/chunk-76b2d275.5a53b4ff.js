(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b2d275"],{"6e1e":function(e,t,s){},"7f60":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-main",{staticClass:"bg table_wrap comtabel_t"},[s("el-form",{staticClass:"form p_4",attrs:{"label-position":"right",model:e.query,"label-width":"120"}},[s("el-row",{staticClass:"rows row1"},[s("el-col",{staticClass:"el_form_search_wrap",attrs:{xs:24,sm:24,lg:8}},[s("el-form-item",{attrs:{label:"用户姓名"}},[s("el-input",{model:{value:e.query.user_name,callback:function(t){e.$set(e.query,"user_name",t)},expression:"query.user_name"}})],1)],1)],1),s("el-row",{staticClass:"rows row2"},[s("el-col",{staticClass:"search_btn_wrap search_btns",attrs:{xs:24,sm:24,lg:24}},[s("el-col",{staticClass:"search_btn_1 search_btn_wrap_1 btns",attrs:{xs:24,sm:10,lg:8}},[s("el-button",{staticClass:"search_btn_find",attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")]),s("el-button",{staticClass:"search_btn_reset",staticStyle:{"margin-right":"74px"},on:{click:function(t){return e.reset()}}},[e._v("重置")]),"管理员"==e.user_group||e.$check_action("/online_service/table","del")||e.$check_action("/online_service/view","del")?s("el-button",{staticClass:"search_btn_del",attrs:{type:"danger"},on:{click:function(t){return e.delInfo()}}},[e._v("删除")]):e._e()],1)],1)],1)],1),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,id:"dataTable"},on:{"selection-change":e.selectionChange,"sort-change":e.$sortChange}},[s("el-table-column",{attrs:{fixed:"",type:"selection","tooltip-effect":"dark",width:"55"}}),"管理员"==e.user_group||e.$check_field("get","regular_users")?s("el-table-column",{attrs:{prop:"regular_users",label:"普通用户","min-width":"200"},on:{"sort-change":e.$sortChange},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.get_user_regular_users(t.row["regular_users"]))+" ")]}}],null,!1,1966286131)}):e._e(),"管理员"==e.user_group||e.$check_field("get","user_name")?s("el-table-column",{attrs:{prop:"user_name",label:"用户姓名","min-width":"200"},on:{"sort-change":e.$sortChange}}):e._e(),"管理员"==e.user_group||e.$check_field("get","consultation_time")?s("el-table-column",{attrs:{prop:"consultation_time",label:"咨询时间","min-width":"200"},on:{"sort-change":e.$sortChange},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$toTime(t.row["consultation_time"],"yyyy-MM-dd hh:mm:ss"))+" ")]}}],null,!1,2059086585)}):e._e(),"管理员"==e.user_group||e.$check_field("get","consultation_content")?s("el-table-column",{attrs:{prop:"consultation_content",label:"咨询内容","min-width":"200"},on:{"sort-change":e.$sortChange}}):e._e(),"管理员"==e.user_group||e.$check_field("get","reply_content")?s("el-table-column",{attrs:{prop:"reply_content",label:"回复内容","min-width":"200"},on:{"sort-change":e.$sortChange}}):e._e(),s("el-table-column",{attrs:{sortable:"",prop:"create_time",label:"创建时间","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$toTime(t.row["create_time"],"yyyy-MM-dd hh:mm:ss"))+" ")]}}])}),s("el-table-column",{attrs:{sortable:"",prop:"update_time",label:"更新时间","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$toTime(t.row["update_time"],"yyyy-MM-dd hh:mm:ss"))+" ")]}}])}),"管理员"==e.user_group||e.$check_action("/online_service/table","set")||e.$check_action("/online_service/view","set")||e.$check_action("/online_service/view","get")||e.$check_action("/${table.tableConfig.table_nav_name}/table","add")||e.$check_action("/${table.tableConfig.table_nav_name}/view","add")?s("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"view_a"},["管理员"==e.user_group||e.$check_action("/online_service/table","set")||e.$check_action("/online_service/view","set")||e.$check_action("/online_service/view","get")?s("router-link",{staticClass:"e-button el-button--small is-plain el-button--success",staticStyle:{margin:"5px !important"},attrs:{to:"./view?"+e.field+"="+t.row[e.field],size:"small"}},[s("span",[e._v("详情")])]):e._e()],1)]}}],null,!1,3928816831)}):e._e()],1),s("div",{staticClass:"mt text_center"},[s("el-pagination",{attrs:{"current-page":e.query.page,"page-sizes":[7,10,30,100],"page-size":e.query.size,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e.showModal?s("div",{staticClass:"modal_wrap"},[s("div",{staticClass:"modal_box"},[s("p",{staticClass:"modal_box_title"},[e._v("重要提醒")]),s("p",{staticClass:"modal_box_text"},[e._v("当前有数据达到预警值！")]),s("div",{staticClass:"btn_box"},[s("span",{on:{click:e.closeModal}},[e._v("取消")]),s("span",{on:{click:e.closeModal}},[e._v("确定")])])])]):e._e()],1)},a=[],n=(s("96cf"),s("1da1")),l=s("c6e7"),i={mixins:[l["a"]],data:function(){return{showModal:!1,url_get_list:"~/api/online_service/get_list?like=0",url_del:"~/api/online_service/del?",field:"online_service_id",query:{size:7,page:1,user_name:"",login_time:"",create_time:"",orderby:"create_time desc"},list:[],list_user_regular_users:[]}},methods:{closeModal:function(){this.showModal=!1},get_list_before:function(e){var t=this.user.user_group;if("管理员"!=t){var s="(";"普通用户"==t&&(s+="regular_users = "+this.user.user_id+" or "),s.length>1&&(s=s.substr(0,s.length-4),s+=")",e["sqlwhere"]=s)}return e},get_list_user_regular_users:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("~/api/user/get_list?user_group=普通用户");case 2:s=t.sent,s.result&&s.result.list?e.list_user_regular_users=s.result.list:s.error&&console.error(s.error);case 4:case"end":return t.stop()}}),t)})))()},get_user_regular_users:function(e){var t=this.list_user_regular_users.getObj({user_id:e}),s="";return t&&(s=t.nickname+"-"+t.username),s}},created:function(){this.get_list_user_regular_users()}},o=i,c=(s("d475"),s("2877")),u=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=u.exports},d475:function(e,t,s){"use strict";s("6e1e")}}]);
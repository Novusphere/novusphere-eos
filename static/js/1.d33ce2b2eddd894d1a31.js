webpackJsonp([1],{tAW0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),r=a("Xxa5"),o=a.n(r),i=a("exGp"),c=a.n(i),l=a("aKUZ"),u=a("p6/X"),m=a("TsL6"),p=a("aW/X"),d=a("dpOi"),v=a("RxEy"),f=a("xSwI"),_=a("67Q6"),h=a("Oh/4"),b=a("FPmW"),y=a("dYGJ"),k=(a("7t+N"),{name:"StartThread",components:{Pager:v.a,Post:f.a,PostSorter:_.a,Layout:h.a,RichTextEditor:b.a},watch:{},computed:{is_referendum:function(){return"referendum"==this.sub2.sub},is_referendum_multi:function(){return"options-v1"==this.referendum_type||"multi-select-v1"==this.referendum_type},expiry_delta:function(){var t=new Date(this.referendum_expires);return isNaN(t.getTime())?"?":this.getDeltaDays(t)}},mounted:function(){var t=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.load();case 1:case"end":return e.stop()}},e,t)}))()},methods:{updateTemp:function(t){1===t.key.length&&(this.customSub+=t.key),"Backspace"===t.key&&(this.customSub=this.customSub.substr(0,this.customSub.length-1))},addCustom:function(){var t={icon:"",sub:this.customSub,type:"custom"};this.sub_options.unshift(t),this.sub2=t,this.customSub=""},getDeltaDays:function(t){return((t.getTime()-(new Date).getTime())/864e5).toFixed(2)},load:function(){var t=this;return c()(o.a.mark(function e(){var a,s,n,r,i,c,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.f)();case 2:if(t.identity=e.sent,t.sub=t.$route.params.sub,!t.$route.params.edit_id){e.next=21;break}return a=t.$route.params.edit_id,s=Object(p.a)(),t.identity,e.next=10,s.api({aggregate:s.config.collection_forum,maxTimeMS:7500,cursor:{},pipeline:[{$match:s.query.match.threadById(a)},{$lookup:s.query.lookup.threadReplies()},{$project:s.query.project.post({recent_edit:!0})}]});case 10:return n=e.sent.cursor.firstBatch[0],n=new y.a(n),e.next=14,n.normalize();case 14:t.edit_post=n,t.sub=n.data.json_metadata.sub,t.title=n.data.json_metadata.title,r=n.data.json_metadata.attachment,t.attachment.value=r.value,t.attachment.type=r.type,t.attachment.display=r.display;case 21:i=[{icon:"",sub:t.sub}],c=0;case 23:if(!(c<m.e.subscribed_subs.length)){e.next=30;break}if(!i.find(function(t){return t.sub==m.e.subscribed_subs[c]})){e.next=26;break}return e.abrupt("continue",27);case 26:i.push({logo:u.a.novusphere.logo,sub:m.e.subscribed_subs[c]});case 27:c++,e.next=23;break;case 30:for(c=0;c<i.length;c++)(l=u.a[i[c].sub])&&l.logo&&(i[c].logo=l.logo);t.sub2=i[0],t.sub_options=i;case 33:case"end":return e.stop()}},e,t)}))()},setStatus:function(t){this.status=t},makePost:function(t){var e=this;return c()(o.a.mark(function a(){var s,r,i;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!=e.title.length){a.next=3;break}return e.setStatus("Post must have a title"),a.abrupt("return");case 3:if(0!=e.content.length){a.next=8;break}if(e.attachment.value){a.next=7;break}return e.setStatus("Post must have at least 1 character of content or an attachment"),a.abrupt("return");case 7:e.content="";case 8:if(s=e.edit_post,r=s?s.data.reply_to_poster||s.data.poster:"",window.__test(),a.t0=e.identity.account||"eosforumanon",a.t1=r,a.t2=s?s.data.reply_to_post_uuid||s.data.post_uuid:"",a.t3=e.content,a.t4=l.a.helpers.GeneratePostUuid(),a.t5=n.a,a.t6=e.title,a.t7=s?s.data.json_metadata.sub:e.sub2.sub,a.t8=s?s.data.post_uuid:"",a.t9=s?s.data.poster:"",a.t10=!!s,a.t11={value:e.attachment.value.trim(),type:e.attachment.type,display:e.attachment.value?e.attachment.display:""},!t){a.next=29;break}return a.next=26,l.a.helpers.GenerateAnonData(e.content);case 26:a.t12=a.sent,a.next=30;break;case 29:a.t12=null;case 30:return a.t13=a.t12,a.t14={title:a.t6,type:"novusphere-forum",sub:a.t7,parent_uuid:a.t8,parent_poster:a.t9,edit:a.t10,attachment:a.t11,anon_id:a.t13},a.t15=(0,a.t5)(a.t14),i={poster:a.t0,reply_to_poster:a.t1,reply_to_post_uuid:a.t2,certify:!1,content:a.t3,post_uuid:a.t4,json_metadata:a.t15},a.abrupt("return",i);case 35:case"end":return a.stop()}},a,e)}))()},postContent:function(t,e){var a=this;return c()(o.a.mark(function s(){var n,r;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.setStatus("Creating tx and broadcasting to EOS..."),s.next=3,a.makePost(t);case 3:if(n=s.sent){s.next=7;break}return a.setStatus("Unable to create transaction data!"),s.abrupt("return",null);case 7:if(r=null,!a.is_referendum){s.next=24;break}if(!a.is_referendum||!a.is_referendum_multi){s.next=13;break}if(!(a.referendum_options.length<2)){s.next=13;break}return a.setStatus("You must set at least 2 options for this referendum type!"),s.abrupt("return");case 13:return s.prev=13,s.next=16,l.a.actions.Referendum.PushNewProposal({expires_at:a.referendum_expires,title:a.title,content:a.content,type:a.referendum_type,options:a.referendum_options});case 16:r=s.sent,s.next=22;break;case 19:s.prev=19,s.t0=s.catch(13),a.setStatus(s.t0.message);case 22:s.next=27;break;case 24:return s.next=26,l.a.actions.PushNewPost(n,"",t,e,a.setStatus);case 26:r=s.sent;case 27:if(r){s.next=29;break}return s.abrupt("return",null);case 29:a.$router.push({name:"Thread",params:{sub:a.sub2.sub,id:a.edit_post?a.edit_post.o_transaction:r}});case 30:case"end":return s.stop()}},s,a,[[13,19]])}))()},updatePreview:function(){var t=this;return c()(o.a.mark(function e(){var a,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setStatus(""),e.next=3,t.makePost(!1);case 3:if(a=e.sent,!t.status){e.next=6;break}return e.abrupt("return");case 6:return s=new y.a({createdAt:parseInt((new Date).getTime()/1e3),transaction:"preview",id:1,name:"post",data:a}),e.next=9,s.normalize();case 9:t.preview=s;case 10:case"end":return e.stop()}},e,t)}))()}},data:function(){return{sub_options:[],preview:null,edit_post:null,identity:{},status:"",sub:"",sub2:{},title:"",content:"",attachment:{value:"",type:"",display:""},referendum_type:"referendum-v1",referendum_expires:"",referendum_option:"",referendum_options:[],customSub:""}}}),C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{load:t.load}},[a("template",{slot:"topic"},[a("span",[t._v(" "+t._s(t.edit_post?"Edit Thread":"Start Thread"))])]),t._v(" "),a("template",{slot:"content"},[a("b-button",{staticClass:"btn btn-sm btn-primary mb-1",on:{click:function(e){return t.$router.go(-1)}}},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),t._v("\n        back\n      ")],1),t._v(" "),a("div",{staticClass:"post"},[a("form",{staticClass:"form newtopic",attrs:{action:"#"}},[a("div",{staticClass:"topwrap"},[a("div",{staticClass:"posttext pull-left ml-2"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Title")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),t.edit_post||t.is_referendum?t._e():a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Sub")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("v-select",{staticClass:"form-control",attrs:{options:t.sub_options,label:"sub"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.addCustom(e))},click:function(e){t.customSub=""},keydown:function(e){return e.stopPropagation(),t.updateTemp(e)}},scopedSlots:t._u([{key:"option",fn:function(e){return[e.logo?a("img",{staticStyle:{"max-width":"24px"},attrs:{src:e.logo}}):t._e(),t._v("\n                          "+t._s(e.sub)+"\n                        ")]}}],null,!1,881367266),model:{value:t.sub2,callback:function(e){t.sub2=e},expression:"sub2"}})],1)]),t._v(" "),t.is_referendum?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Type")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("b-form-select",{model:{value:t.referendum_type,callback:function(e){t.referendum_type=e},expression:"referendum_type"}},[a("option",{attrs:{value:"referendum-v1"}},[t._v("Referendum")]),t._v(" "),a("option",{attrs:{value:"poll-yn-v1"}},[t._v("Poll (Y/N)")]),t._v(" "),a("option",{attrs:{value:"poll-yna-v1"}},[t._v("Poll (Y/N/A)")]),t._v(" "),a("option",{attrs:{value:"options-v1"}},[t._v("Options Poll")]),t._v(" "),a("option",{attrs:{value:"multi-select-v1"}},[t._v("Multi-select Poll")])])],1)]):t._e(),t._v(" "),t.is_referendum?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Expiry")]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.referendum_expires,expression:"referendum_expires"}],staticClass:"form-control",attrs:{type:"text",placeholder:"mm/dd/yyyy"},domProps:{value:t.referendum_expires},on:{input:function(e){e.target.composing||(t.referendum_expires=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("("+t._s(t.expiry_delta)+" days from now)")])]):t._e(),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Content")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("RichTextEditor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),t._v(" "),t.is_referendum&&t.is_referendum_multi?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Options")]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.referendum_option,expression:"referendum_option"}],staticClass:"form-control",attrs:{type:"text",placeholder:"option"},domProps:{value:t.referendum_option},on:{input:function(e){e.target.composing||(t.referendum_option=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.referendum_options.push(t.referendum_option)}}},[t._v("add")])]),t._v(" "),a("div",{staticClass:"offset-sm-2 col-sm-10"},t._l(t.referendum_options,function(e,s){return a("ul",{key:s},[a("li",[t._v("\n                          "+t._s(e)+"\n                          "),a("button",{staticClass:"btn btn-sm btn-danger ml-2",attrs:{type:"button"},on:{click:function(e){return t.referendum_options.splice(s,1)}}},[a("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)])])}),0)]):t._e(),t._v(" "),t.is_referendum?t._e():a("fieldset",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("legend",{staticClass:"col-form-label col-sm-2 pt-0"}),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.type,expression:"attachment.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentType",value:"",checked:""},domProps:{checked:t._q(t.attachment.type,"")},on:{change:function(e){return t.$set(t.attachment,"type","")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("No attachment")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.type,expression:"attachment.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentType",value:"url"},domProps:{checked:t._q(t.attachment.type,"url")},on:{change:function(e){return t.$set(t.attachment,"type","url")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("URL")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.type,expression:"attachment.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentType",value:"ipfs"},domProps:{checked:t._q(t.attachment.type,"ipfs")},on:{change:function(e){return t.$set(t.attachment,"type","ipfs")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("IPFS")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.type,expression:"attachment.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentType",value:"txid"},domProps:{checked:t._q(t.attachment.type,"txid")},on:{change:function(e){return t.$set(t.attachment,"type","txid")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("TXID")])])])])]),t._v(" "),""!=t.attachment.type?a("fieldset",{staticClass:"form-group"},[a("div",{staticClass:"row"},[a("legend",{staticClass:"col-form-label col-sm-2 pt-0"}),t._v(" "),"txid"==t.attachment.type?a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.display,expression:"attachment.display"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentDisplay",value:"referendum"},domProps:{checked:t._q(t.attachment.display,"referendum")},on:{change:function(e){return t.$set(t.attachment,"display","referendum")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("referendum")])])]):a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.display,expression:"attachment.display"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentDisplay",value:"link",checked:""},domProps:{checked:t._q(t.attachment.display,"link")},on:{change:function(e){return t.$set(t.attachment,"display","link")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("link")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.display,expression:"attachment.display"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentDisplay",value:"iframe"},domProps:{checked:t._q(t.attachment.display,"iframe")},on:{change:function(e){return t.$set(t.attachment,"display","iframe")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("iframe")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.display,expression:"attachment.display"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentDisplay",value:"mp4"},domProps:{checked:t._q(t.attachment.display,"mp4")},on:{change:function(e){return t.$set(t.attachment,"display","mp4")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("mp4")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.display,expression:"attachment.display"}],staticClass:"form-check-input",attrs:{type:"radio",name:"attachmentDisplay",value:"mp3"},domProps:{checked:t._q(t.attachment.display,"mp3")},on:{change:function(e){return t.$set(t.attachment,"display","mp3")}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v("mp3")])])])])]):t._e(),t._v(" "),""!=t.attachment.type?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attachment.value,expression:"attachment.value"}],staticClass:"form-control",attrs:{placeholder:"IPFS hash / URL / TXID"},domProps:{value:t.attachment.value},on:{input:function(e){e.target.composing||t.$set(t.attachment,"value",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"text-center"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.status))])]),t._v(" "),!t.identity.account&&t.is_referendum?a("div",{staticClass:"text-center"},[a("span",[t._v("You must be logged in to create a referendum proposal")])]):t._e()])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-sm-2 col-sm-10"},[t.identity.account?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.postContent(!1)}}},[t._v("Post")]):t._e(),t._v(" "),t.edit_post||t.is_referendum?t._e():a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.postContent(!0,!0)}}},[t._v("Post ID")]),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.updatePreview()}}},[t._v("Preview")])])]),t._v(" "),t.preview?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("post",{attrs:{post:t.preview,hideReplyBox:!0}})],1)]):t._e()]),t._v(" "),a("div",{staticClass:"clearfix"})])])])],1)],2)},staticRenderFns:[]};var x=a("VU/8")(k,C,!1,function(t){a("tORL"),a("ts91")},"data-v-d16040b8",null);e.default=x.exports},tORL:function(t,e){},ts91:function(t,e){}});
//# sourceMappingURL=1.d33ce2b2eddd894d1a31.js.map
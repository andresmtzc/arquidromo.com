var MonoTypeWebFonts={};MonoTypeWebFonts.addEvent=function(e,n){if("undefined"!=typeof MonoTypeWebFonts.loadFonts)MonoTypeWebFonts.addEvent(e,n);else{var o=this;setTimeout(function(){o.addEvent(e,n)},0)}};mti_loadScript( function () {if(window.addEventListener){  window.addEventListener('load', function(){MonoTypeWebFonts.cleanup();}, false);}else if(window.attachEvent){  window.attachEvent('onload', function(){MonoTypeWebFonts.cleanup();});}MonoTypeWebFonts.loadColo = function(){};MonoTypeWebFonts.cleanupExecuted = false;MonoTypeWebFonts.cleanup = function(){if(MonoTypeWebFonts.cleanupExecuted === true){ return; }MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);var className = document.documentElement.className;var MTIConfig = window['MTIConfig'] || { 'RemoveMTIClass': false };if(MTIConfig['RemoveMTIClass']==true){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 l(2,n){n(2);2=2.D;r(2){l(2,n);2=2.A}}8 e(4){9(j.e){o j.e(4)}x{5 k=[];l(j.I,8(2){5 a,c=2.4,i;9(c){a=c.z(\' \');p(i=0;i<a.f;i++){9(a[i]===4){k.F(2);J}}}});o k}}H(8(){5 3=e(\'m\');5 u=E.K;5 h=u.B(),C=8(t){o h.G(t)>-1},b=(!(/R|T/i.q(h))&&/S\\s(\\d)/.q(h)),c=L;9((v.$1==6)||(v.$1==7)){c=Q}r(3.f>0){p(5 i=0;i<3.f;i++){5 w=3[i].4.z(\' \');9(w.f==1&&!c){3[i].M(\'N\')}x{3[i].4=3[i].4.y(/m/O,\' \').y(/^\\s+|\\s+$/g,\'\')}}3=e(\'m\')}},P);',56,56,'||node|mti_elements|className|var|||function|if|||||getElementsByClassName|length||ua||document|results|walkTheDOM|mti_font_element|func|return|for|test|while||||RegExp|classList|else|replace|split|nextSibling|toLowerCase|is|firstChild|navigator|push|indexOf|setTimeout|body|break|userAgent|false|removeAttribute|class|ig|40000|true|opera|msie|webtv'.split('|'),0,{}))}className = className;if(!document.getElementById('MonoTypeFontApiFontTracker')){eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 3="6://j.i.z/t/1.7";a(k.l.h==\'8:\'){3=3.g(/6:/,\'8:\')}5 b=9.d(\'e\')[0];5 2=9.v(\'w\');a(2){2.4(\'y\',\'u\');2.4(\'s\',\'o/7\');2.4(\'q\',\'r\');2.4(\'f\',3+"?p=x&n=m");b.c(2)}',36,36,'||cssEle|fontTrackingUrl|setAttribute|var|http|css|https|document|if|head|appendChild|getElementsByTagName|HEAD|href|replace|protocol|fonts|fast|window|location|3b6344f4-38e2-46f1-919f-04153a1c8597|projectid|text|apiType|rel|stylesheet|type||MonoTypeFontApiFontTracker|createElement|LINK|js|id|net'.split('|'),0,{}))}window['mti_element_cache'] = [];};MonoTypeWebFonts._fontActiveEventList = [];MonoTypeWebFonts._fontLoadingEventList = [];MonoTypeWebFonts._activeEventList = [];MonoTypeWebFonts._inActiveEventList = [];MonoTypeWebFonts.addEvent = function(eventName, callbackFunction){   if(eventName.toLowerCase() == 'fontactive'){      MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'fontloading'){      MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'inactive'){      MonoTypeWebFonts._inActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'active'){      MonoTypeWebFonts._activeEventList.push(callbackFunction);  }};MonoTypeWebFonts.loadFonts = function(){MonoTypeWebFonts.load({monotype:{efg:true, reqSub:false, enableOtf: false, otfJsParentUrl: 'https://fast.fonts.net/jsapi/otjs/', pfL:[{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "900" ,'fontStyle' : "normal" ,contentIds :{EOT: '6bd004df-7217-4ef6-9ed8-c99a12b77bf1',WOFF: 'b65232b3-e982-4cd6-a8ae-4bee2ecdb90d',WOFF2: 'fb8331b5-dfd3-496e-9a0e-8afbb5014272',TTF: '2dec1b8b-9bad-4cc0-8bea-76f93ebb2331'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "900" ,'fontStyle' : "italic" ,contentIds :{EOT: 'a82f9027-d3f8-4cc6-a693-93bd687f7717',WOFF: 'd3520334-6c66-4dbd-af86-5902de1edff1',WOFF2: 'a530894d-0665-46f3-814a-63a6b8d26f59',TTF: 'd9c7bb66-56c0-491c-83af-07c7e962a7c1'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "700" ,'fontStyle' : "italic" ,contentIds :{EOT: '0b2112bc-4fb7-4a37-8c55-1e5848431681',WOFF: '5f085bad-f484-4825-8686-d347df989cf2',WOFF2: '27f146af-7709-44d9-8b45-d09866bec59f',TTF: 'a1133ba8-2dbc-4877-b3bc-b9a3a44652ba'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "700" ,'fontStyle' : "normal" ,contentIds :{EOT: 'c2440dd8-b25c-49ba-bc04-8a638a943324',WOFF: 'ec41d681-0313-4b04-88c0-820aebb51f4e',WOFF2: '80042803-0630-405f-b2d2-af97b4e50b46',TTF: '81434fc3-e426-4a4c-987d-f25c098198c4'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "250" ,'fontStyle' : "normal" ,contentIds :{EOT: '3e7e883c-d890-4392-9017-3238717c52e9',WOFF: '6f8f20de-6458-4121-be65-48f1075f0131',WOFF2: '3b485b1f-1671-4643-8881-d860c25e479f',TTF: 'd867ac7c-a971-4421-a621-27862985551d'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "250" ,'fontStyle' : "italic" ,contentIds :{EOT: '54663422-95c9-4736-94b7-2c511d990aa1',WOFF: '4626fff0-a1dd-4740-8635-c728d8d22d72',WOFF2: '4cf8ac66-d3f6-40f2-85b7-cc50e152755e',TTF: 'e58b7502-4a10-4aa5-9d79-840e9e4f3cb2'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "300" ,'fontStyle' : "italic" ,contentIds :{EOT: '9b4837d6-e74a-44ef-a6c4-6b35a90a3702',WOFF: '461e0a9e-689d-4609-bd34-f2316740e199',WOFF2: '9be1eedf-69e4-4b70-ba74-3b23121fde9c',TTF: 'ab9ca33b-f66e-4aaf-8370-a2cd16af4072'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "300" ,'fontStyle' : "normal" ,contentIds :{EOT: '0eaf6264-15ee-4251-826e-9c0a59e8395f',WOFF: '9b976f15-23b7-45cd-ad4b-59c95b2889f9',WOFF2: '8d11b8a0-868c-4a53-8b26-9f0ccbd58247',TTF: '864da3de-5a97-4ce6-a22b-22932ed4dfe0'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "500" ,'fontStyle' : "italic" ,contentIds :{EOT: '877f3b67-be6a-461d-a5a6-809160a59cd8',WOFF: '44cb396c-a0d9-43f0-a13f-bad6bd335656',WOFF2: '9da6ce88-4609-46ec-b6a3-9e8a69f8d053',TTF: 'aeb7ae09-586c-4808-bada-216d01ed5ec7'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "500" ,'fontStyle' : "normal" ,contentIds :{EOT: '27070da8-f8ed-4002-8324-4f0dd80f8fa4',WOFF: 'd493595c-97d2-4edc-bc9a-c09ad13b4913',WOFF2: 'fe0b48dd-7bb4-4787-913d-eaf613373f35',TTF: '449bb77f-1bc7-4956-a8f1-3d4ae9243a59'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "400" ,'fontStyle' : "italic" ,contentIds :{EOT: 'addba733-2fd3-4151-adf4-d0b563dc6517',WOFF: '90682d0e-e5df-4a2e-a2ff-6899b8ae8e4b',WOFF2: '87cd0dd6-3e8b-46f1-b677-ab7644ea015e',TTF: 'd1a6f359-b96c-43fd-87af-85f9762a4ecf'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "400" ,'fontStyle' : "normal" ,contentIds :{EOT: '941243bb-e692-46f8-91b9-6e621e5c1ff8',WOFF: '476fe015-ab32-40a2-8fed-0a5af9a3bba4',WOFF2: '8b31e0d7-5f53-45c2-b318-064f0b532543',TTF: 'd8bcfa37-4f93-49cf-8dea-c29e894af58e'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "600" ,'fontStyle' : "normal" ,contentIds :{EOT: 'e488d96e-1d10-41aa-a2a0-8cb7cc0a54a8',WOFF: '7cdc9309-dc21-43e2-a348-c6e3853fe8a9',WOFF2: '20755c49-19b5-4792-aaf3-27f6b048149a',TTF: 'fe0fe0a1-32b6-4795-80da-fb446ac9d5ea'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "600" ,'fontStyle' : "italic" ,contentIds :{EOT: '6158ec61-bf1b-4bd7-9dda-df9045c9c986',WOFF: '7e254ac6-68c1-4462-b775-f4064eea9be4',WOFF2: 'e03d67b8-21d1-471a-a052-5450498e2851',TTF: '3e17b546-0789-4b1e-b570-6590b98e9700'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "200" ,'fontStyle' : "normal" ,contentIds :{EOT: '42f55828-0bff-4980-96ec-f0e66bf17132',WOFF: '7deec5d5-c013-43cf-b573-d5656d323f03',WOFF2: '03d6e9c8-63d0-4bb4-9f03-225ecc92d0b5',TTF: '4977238e-b348-4aa3-98a2-b4142bb331bf'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Sofia Pro W01" ,'fontWeight' : "200" ,'fontStyle' : "italic" ,contentIds :{EOT: '48859599-5dc8-4131-b3b7-a0697ebdb0f2',WOFF: 'e006fedf-79f5-404e-80b4-2a3b184e8d31',WOFF2: 'e5442d63-bacc-4559-9cd3-9e5595665edf',TTF: '9f9b2bc8-f333-4ebe-bdb1-e9795526665a'}, enableSubsetting : false, enableOtf: false}],selectorFontMap:{},ck:'d44f19a684109620e4841578a790e818438dc601bba09b4d960375e2b7e9e240c8d641b6924a3093a14eb3a0b79fdf1be9678e396cb406a5c358ae4c2d31f26fb9b1f17802a1a869430fb470a8c2050d4dd664dddd31324398f6765abb898ddec7e85044ca67ab70c85eb36a7a22',fcURL:'http://fast.fonts.net/dv2/',env:'',projectId:'3b6344f4-38e2-46f1-919f-04153a1c8597',EOD:null},fontloading:function(fontFamily, fontDescription){  for(var i=0; i<MonoTypeWebFonts._fontLoadingEventList.length; i++){      MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},fontactive:function(fontFamily, fontDescription) {  for(var i=0; i<MonoTypeWebFonts._fontActiveEventList.length; i++){      MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},inactive:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._inActiveEventList.length; i++){      MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);  }},active:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._activeEventList.length; i++){      MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);  }}});};try {MonoTypeWebFonts.loadFonts(); } catch (e) {}setTimeout(function(){ MonoTypeWebFonts.cleanup(); }, 40000);});function mti_loadScript(a) { "undefined"!=typeof MTIConfig&&1==MTIConfig.EnableCustomFOUTHandler&&(document.documentElement.style.visibility="hidden");var mti_coreJsURL="https://fast.fonts.net/jsapi/core/mt.js";var env="";var UA=navigator.userAgent.toLowerCase(),isIE8=-1!=UA.indexOf("msie")?parseInt(UA.split("msie")[1]):!1;isIE8&&(mti_coreJsURL="https://fast.fonts.net/jsapi/core/mti.js");"undefined"!=typeof MTIConfig&&1==MTIConfig.EnableDSForAllFonts&&(mti_coreJsURL=isIE8?"https://fast.fonts.net/jsapi/core/mti_cjk.js":"https://fast.fonts.net/jsapi/core/mt_cjk.js");if("undefined"!=typeof MTIConfig&&"undefined"!=typeof MTIConfig.version&&""!=MTIConfig.version){var fileName=mti_coreJsURL.split("/").pop();mti_coreJsURL="https://fast.fonts.net/jsapi/core/"+MTIConfig.version+"/"+fileName}var b=document.createElement("script");b.type="text/javascript",b.readyState?b.onreadystatechange=function(){("loaded"==b.readyState||"complete"==b.readyState)&&(b.onreadystatechange=null,a())}:b.onload=function(){a()},b.src=mti_coreJsURL,document.getElementsByTagName("head")[0].appendChild(b);};
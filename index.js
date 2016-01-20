$vm.module_list={
    main_layout:                 ['--------','__BASE__/wappsystem/Unigreen-Food-Pty-Ltd/modules/main_layout.html','https://github.com/wappsystem/Unigreen-Food-Pty-Ltd/blob/master/modules/main_layout.html'],
    home:                        ['--------','__BASE__/wappsystem/Unigreen-Food-Pty-Ltd/modules/home.html','https://github.com/wappsystem/Unigreen-Food-Pty-Ltd/blob/master/modules/home.html'],
    business_portal_nav:         ['--------','__BASE__/wappsystem/Unigreen-Food-Pty-Ltd/modules/business_portal_nav.html','https://github.com/wappsystem/Unigreen-Food-Pty-Ltd/blob/master/modules/business_portal_nav.html'],
    production_list:             ['20003827','__BASE__/wappsystem/Unigreen-Food-Pty-Ltd/modules/production_list.html','https://github.com/wappsystem/Unigreen-Food-Pty-Ltd/blob/master/modules/unigreen/modules/production_list.html'],
    staff_list:                  ['20007255','__BASE__/wappsystem/Unigreen-Food-Pty-Ltd/modules/staff_list.html','https://github.com/wappsystem/Unigreen-Food-Pty-Ltd/blob/master/modules//unigreen/modules/staff_list.html'],
}
//--------------------------------------------------------
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js');
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js');
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js');
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js');
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108');
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 100);

}
//--------------------------------------------------------

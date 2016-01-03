<script>
function main__ID(){
    //------------------------------------
    var home_module='home.html';
    //------------------------------------
    VmFramework.root_layout_content_slot="content_slot__ID";
    VmFramework.root_layout_header='header__ID';
    VmFramework.root_layout_footer='footer__ID';
    //------------------------------------
    //for old vm.js
    g_vm.root_layout_content_slot="content_slot__ID";
    g_vm.root_layout_header='header__ID';
    g_vm.root_layout_footer='footer__ID';
    //------------------------------------
    $('#footer__ID').html('Copyright © '+(new Date()).getFullYear()+', Unigreen Food Pty Ltd'); document.title="Unigreen Pty Ltd";
    //------------------------------------
    var on_load=function(){
        layout_resize();
        load_module(home_module);
        //slide show timer
        setInterval(function () {
            moveRight();
        }, 6000);
        login_changed();
    };
    //------------------------------------
    window.onmessage=function(e){
        VmFramework.user=e.data.username;
        VmFramework.token=e.data.token;
    		g_user=e.data.username;
    		login_changed();
  	};
    //------------------------------------
    $('#D__ID').on('login_changed',function(){
        login_changed();
    });
    //------------------------------------
    $('#nav__ID li').on('click',function(event){
        event.stopPropagation();
        process_click(this);
    });
    //---------------------------------------------
    var load_module=function(name){
      var ver='?v=3',base=VmFramework.app_base;
      var url=base+name+ver;
      var pid=name.replace(/\./g,'_');
      VmFramework.load_module({pid:pid,slot:g_vm.root_layout_content_slot,url:url,base:base,ver:ver});
      process_background(name);
    }
    //------------------------------------
    var process_background=function(name){
      if(name==home_module){
          $('a.control_prev').show();$('a.control_next').show();
          $('#content_slot__ID').css('background','rgba(255, 255, 255, 0');
           $('#header__ID').css('opacity','0,7');
      }
      else{
          $('a.control_prev').hide();$('a.control_next').hide();
          $('#content_slot__ID').css('background','rgba(255, 255, 255, 1');
          $('#header__ID').css('opacity','1.0');
      }
    }
    //------------------------------------
    var process_click=function(src){
      var e=$(src).attr('data-e');
      var m=$(src).attr('data-m');
      var a=$(src).attr('data-a');
      var b=$(src).attr('data-b');
      if(e!==undefined){
        load_module(e);
      }
      else if(m!==undefined)  $(this).vm6('load_module',  m, VmFramework.root_layout_content_slot);
      else if(a!==undefined){
          window.open(a+"?d=1");
          return;
      }
      else if(b!==undefined){
          if(b==='1') window.open(VmFramework.api_base+"signin.aspx?url="+window.location.href,"Sign In","width=600, height=600");
          else if(b==='2') signout();
      }
      process_background(e);
    }
    //------------------------------------
    var login_changed=function(){
    	VmFramework.user=g_user;
    	VmFramework.user_id=g_user_id;
        $('#sign__ID').html(VmFramework.user);
        if(VmFramework.user!='guest'){
            $('#signin__ID').hide();
            $('#myaccount__ID').show();
            $('#signout__ID').show();
            $('#create__ID').hide();
        }
        else{
            $('#signin__ID').show();
            $('#myaccount__ID').hide();
            $('#signout__ID').hide();
            $('#create__ID').show();
        }
        load_module(home_module);
        show_hide_admin();
    };
    //---------------------------------------------
    var show_hide_admin=function(){
      $('#admin__ID').hide();
      if(VmFramework.server=='production'){
          $(this).vm6('request',{cmd:'query',fun:'vm_get_app_owner_v3',module:__ID}, function(c){
              if(c.ret=="1"){
                  $('#admin__ID').show();
              }
          });
      }
    }
    //---------------------------------------------
    var signout=function(){
        $(this).vm5('signout',VmFramework.user,function(c){
            g_user="guest";
            g_user_id="0";
            VmFramework.user="guest";
            VmFramework.user_id="0";
            $("#sign__ID").text("Account");
            login_changed();
        });
    };
    //---------------------------------------------
    //clide show
    if( $('#slider__ID').length!==0 ){
        var slideWidth=window.innerWidth;
        var slideHeight=window.innerHeight;
      	var slideCount = $('#slider__ID ul li').length;
      	var sliderUlWidth = slideCount * slideWidth;
      	$('#slider__ID').css({ width: slideWidth, height: slideHeight });
      	$('#slider__ID ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        $('#slider__ID ul li:last-child').prependTo('#slider__ID ul');
        var moveRight=function() {
            $('#slider__ID ul').animate({
                left: - slideWidth
            }, 700, function () {
                $('#slider__ID ul li:first-child').appendTo('#slider__ID ul');
                $('#slider__ID ul').css('left', '');
            });
        };
        var moveLeft=function() {
            $('#slider__ID ul').animate({
                left: + slideWidth
            }, 700, function () {
                $('#slider__ID ul li:last-child').prependTo('#slider__ID ul');
                $('#slider__ID ul').css('left', '');
            });
        };
        $('a.control_prev').click(function () { moveLeft(); });
        $('a.control_next').click(function () { moveRight();});
    }
    //------------------------------------
    var layout_resize=function(){
        g_vm_min_height=$(window).height()-$('#header__ID').outerHeight()-$('#footer__ID').outerHeight();
        VmFramework.min_height=$(window).height()-$('#header__ID').outerHeight()-$('#footer__ID').outerHeight();
        $('#content_slot__ID').css('min-height',VmFramework.min_height+'px');
    };
    //------------------------------------
    window.addEventListener("resize", function(){ layout_resize(); });
    //------------------------------------
    on_load(); //module entry point
    //------------------------------------
}
main__ID(); //main entry point
</script>

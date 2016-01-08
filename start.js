<script>
(function(){
      $vm.start=function(app_base,common_base){
      	//----------------------------------------
            g_server               ="development";
            var api_base           ="https://cbs.wappsystem.com/dev/";
            var code_base          ="https://github.com/vmiis/Unigreen-Food-Pty-Ltd/blob/master/";
      	//----------------------------------------
      	$vm.server=g_server;
      	$vm.app_base=app_base;
      	$vm.code_base=code_base;
      	$vm.common_base=common_base;
      	$VmAPI.api_base=api_base;
      	//-------------------------------------------------------------------------
      	//first do some init tasks, then load the main layout
      	$vm.init({callback:function(){
      		var param={
      			pid:Math.random().toString().replace('.',''),
      			slot:$vm.root_layout_content_slot,
      			url:$vm.app_base+'modules/main_layout.html',
      			source:'modules/main_layout.html'
      		}
      		$vm.load_module(param);
      		if(g_server=="development") $('#_help_').show();
      	}});
      	//-------------------------------------------------------------------------
      }
}());
</script>

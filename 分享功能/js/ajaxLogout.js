/**
 * AJAX Logout 
 */
//(function () {
    /**
     * Attaches event to a dom element.
     * @param {Element} el
     * @param type event name
     * @param fn callback This refers to the passed element
     */
    function passport_ajax_logout(url, callback) {
    	var logout_url = url + "/logout?ajax=1";
    	if (callback) {
    		logout_url += "&callback=" + callback;
    	}
    	
    	$('body').append($('<iframe/>').attr({  
            style: "display:none;width:0;height:0",   
            id: "ssoLogoutFrame",  
            name: "ssoLogoutFrame",  
            src: logout_url
        }));
    }
    
    function ajaxLogoutCallback(result) {
    	//alert(result);
    	deleteIFrame('#ssoLogoutFrame');
    }
    
    var deleteIFrame = function (iframeName) {  
        var iframe = $(iframeName);   
        if (iframe) { // 删除用完的iframe，避免页面刷新或前进、后退时，重复执行该iframe的请求
            iframe.remove();
        }  
    };  
//})(); 

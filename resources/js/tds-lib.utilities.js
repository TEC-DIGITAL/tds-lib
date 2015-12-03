/*
 * TDSLIB UTILITIES
 * CREATED BY VICTOR VARGAS (vargasvr94@gmail.com) Jan 2015
 */
var tds_lib_utilities = {
	cookies: {
		setCookie: function(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		getCookie: function(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
			}
			return null;
		},
		deleteCookie: function(cname) {
			document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	},
	/**
	* AJAX FUNCTIONALITIES
	* This doesn't has functional dependencies on other libraries like JQUERY or others.
	*/
	ajax: {
		x: function() {
			if (typeof XMLHttpRequest !== 'undefined') {
				return new XMLHttpRequest();  
			}
			var versions = [
				"MSXML2.XmlHttp.5.0",   
				"MSXML2.XmlHttp.4.0",  
				"MSXML2.XmlHttp.3.0",   
				"MSXML2.XmlHttp.2.0",  
				"Microsoft.XmlHttp"
			];

			var xhr;
			for(var i = 0; i < versions.length; i++) {  
				try {  
					xhr = new ActiveXObject(versions[i]);  
					break;  
				} catch (e) {
				}  
			}
			return xhr;
		},
		send: function(url, callback, method, data, sync) {
			var x = this.x();
			x.open(method, url, sync);
			x.onreadystatechange = function() {
				if (x.readyState == 4) {
					callback(x.responseText)
				}
			}
			if (method == 'POST') {
				x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			}
			x.send(data)
		},
		get: function(url, data, callback, sync) {
			var query = [];
			for (var key in data) {
				query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			this.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
		},
		post: function(url, data, callback, sync) {
			var query = [];
			for (var key in data) {
				query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			this.send(url, callback, 'POST', query.join('&'), sync)
		}
	}
}
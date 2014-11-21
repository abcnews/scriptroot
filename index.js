/*!
  * scriptroot
  * 
  * @copyright Australian Broadcasting Corporation
  * @author Simon Elvery
  * @license MIT
  */
!function (name, definition) {
	if (typeof module != 'undefined') module.exports = definition()
	else this[name] = definition()
}('scriptroot', function () {

	var script, scriptroot, doc;

	doc = document;
	script = getScript();
	scriptroot = function scriptroot(s) {
		s = s || script;
		return qualifyUrl(getUrl(s)).split('/').slice(0, -1).join('/')+'/';
	};
	scriptroot.script = script;

	return scriptroot;

	// Get the last recent script in the DOM.
	// This is not necessarily the last script in the page if DOM isn't finished
	// processing.
	function getScript() {
		var scripts = doc.getElementsByTagName('script');
		return scripts[scripts.length-1];
	}

	// Get the URL for the script
	function getUrl(script) {
		var url = (script.src) ? script.src : doc.location.href;
		return url.split('?')[0];
	}

	// Fully qualify a URL.
	function qualifyUrl(url) {
		if (!doc) return url;
		var a = doc.createElement('a');
		a.href = url;
		return a.href;
	}
});
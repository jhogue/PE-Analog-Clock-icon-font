/* 
 * Use this script if you need to support IE 7 and IE 6.
 * 
 * Version 1, August 28 2012 
 *
 * Credit goes to Keyamoon/IcoMoon for the pattern and solution presented here. 
 * http://icomoon.io/
 */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'pe-analogclock\'">' + entity + '</span>' + html;
	}
	var icons = {
			'.minute-00' : '&#x21;', 
			'.minute-0' : '&#x21;',
			'.minute-01' : '&#x21;',
			'.minute-59' : '&#x21;', 
			'.minute-60' : '&#x21;',
			'.minute-03' : '&#x22;',
			'.minute-02' : '&#x22;',
			'.minute-04' : '&#x22;',
            '.minute-06' : '&#x23;',
            '.minute-05' : '&#x23;',
            '.minute-07' : '&#x23;',
            '.minute-09' : '&#x24;',
            '.minute-08' : '&#x24;',
            '.minute-10' : '&#x24;',
            '.minute-12' : '&#x25;',
            '.minute-11' : '&#x25;',
            '.minute-13' : '&#x25;',
            '.minute-15' : '&#x26;',
            '.minute-14' : '&#x26;',
            '.minute-16' : '&#x26;',
            '.minute-18' : '&#x27;',
            '.minute-17' : '&#x27;',
            '.minute-19' : '&#x27;',
            '.minute-21' : '&#x28;',
            '.minute-20' : '&#x28;',
            '.minute-22' : '&#x28;',
            '.minute-24' : '&#x29;',
            '.minute-23' : '&#x29;',
            '.minute-25' : '&#x29;',
            '.minute-27' : '&#x2a;',
            '.minute-26' : '&#x2a;',
            '.minute-28' : '&#x2a;',
            '.minute-30' : '&#x2b;',
            '.minute-29' : '&#x2b;',
            '.minute-31' : '&#x2b;',
            '.minute-33' : '&#x2c;',
            '.minute-32' : '&#x2c;',
            '.minute-34' : '&#x2c;',
            '.minute-36' : '&#x2d;',
            '.minute-35' : '&#x2d;',
            '.minute-37' : '&#x2d;',
            '.minute-39' : '&#x2e;',
            '.minute-38' : '&#x2e;',
            '.minute-40' : '&#x2e;',
            '.minute-42' : '&#x2f;',
            '.minute-41' : '&#x2f;',
            '.minute-43' : '&#x2f;',
            '.minute-45' : '&#x30;',
            '.minute-44' : '&#x30;',
            '.minute-46' : '&#x30;',
            '.minute-48' : '&#x31;',
            '.minute-47' : '&#x31;',
            '.minute-49' : '&#x31;',
            '.minute-51' : '&#x32;',
            '.minute-50' : '&#x32;',
            '.minute-52' : '&#x32;',
            '.minute-54' : '&#x33;',
            '.minute-53' : '&#x33;',
            '.minute-55' : '&#x33;',
            '.minute-57' : '&#x34;',
            '.minute-56' : '&#x34;',
            '.minute-58' : '&#x34;',
			'hour-12' : '&#x25;',
			'hour-01' : '&#x26;',
			'hour-02' : '&#x27;',
			'hour-03' : '&#x28;',
			'hour-04' : '&#x29;',
			'hour-05' : '&#x2a;',
			'hour-06' : '&#x2b;',
			'hour-07' : '&#x2c;',
			'hour-08' : '&#x2d;',
			'hour-09' : '&#x2e;',
			'hour-10' : '&#x2f;',
			'hour-11' : '&#x30;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, h, m, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		h = el.className;
		h = h.match(/hour-[^\s'"]+/);
		if (h) {
			addIcon(el, icons[h[0]]);
		}
		m = el.className;
		m = m.match(/minute-[^\s'"]+/);
		if (m) {
			addIcon(el, icons[m[0]]);
		}
	}
};
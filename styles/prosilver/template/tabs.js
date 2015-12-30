function dE(n, s) { var e = document.getElementById(n); if (!s) { s = (e.style.display == '' || e.style.display == 'block') ? -1 : 1; } e.style.display = (s == 1) ? 'block' : 'none'; }
function subPanels(p) {
	var i, e, t;
	if (typeof(p) == 'string') { show_panel = p; }
	for (i = 0; i < panels.length; i++) {
		e = document.getElementById(panels[i]);
		t = document.getElementById(panels[i] + '-tab');
		if (e) {if (panels[i] == show_panel) {e.style.display = 'block';if (t) { t.className = 'activetab'; }} else {e.style.display = 'none';if (t) { t.className = ''; }}}
	}
}
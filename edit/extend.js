
(function ($) {
	$.fn.extend({
		insertAtCaret: function (myValue) {
			var $t = $(this)[0];
			if (document.selection) {
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			} else if ($t.selectionStart || $t.selectionStart == '0') {
				// var startPos = $t.selectionStart;
				// var endPos = $t.selectionEnd;
				// var scrollTop = $t.scrollTop;
				// $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
				// this.focus();
				// $t.selectionStart = startPos + myValue.length;
				// $t.selectionEnd = startPos + myValue.length;
				// $t.scrollTop = scrollTop;
			} else {
				this.value += myValue;
				this.focus();
			}
		}
	});
})(jQuery);




 $(function() {
	$("#wmd-button-bar .wmd-edittab").remove()
                $("#wmd-button-row .wmd-spacer").remove()
                $("#wmd-button-row #wmd-more-button").remove()
                $("#wmd-button-row #wmd-code-button").remove()
                $("#wmd-button-row #wmd-heading-button").remove()
                $("#wmd-fullscreen-button").on("click",function() {
	$(".fullscreen #text").css("top",$('.fullscreen #wmd-button-bar').outerHeight())
}
)
                $("#wmd-button-row #wmd-fullscreen-button").before(`
                    <li class="wmd-button custom" id="j-wmd-linecode" title="行内代码">
                        <svg t="1607495229023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1161" width="15" height="15"><path d="M810.666667 213.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v426.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V298.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h597.333334z m0 42.666667H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v426.666666a42.666667 42.666667 0 0 0 42.666666 42.666667h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666667V298.666667a42.666667 42.666667 0 0 0-42.666666-42.666667z" p-id="1162" fill="#888888"></path><path d="M593.194667 330.965333L774.229333 512l-181.034666 181.034667-53.546667-53.546667 128.554667-128.554667-127.445334-127.488 52.48-52.48z m-170.666667 0l52.48 52.48-127.445333 127.488 128.554666 128.554667-53.589333 53.546667L241.536 512l180.992-181.034667z" p-id="1163" fill="#888888"></path></svg>
                    </li>
                    <li class="wmd-button custom" id="j-wmd-code" title="代码块">
                        <svg t="1607495398743" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1936" width="15" height="15"><path d="M1144.876703 504.481774l-279.739458-253.118501a40.15084 40.15084 0 0 0-59.458348 5.631356 47.976231 47.976231 0 0 0 5.19255 64.065821l250.485658 226.716947-251.436407 227.521426a47.537424 47.537424 0 0 0-5.119415 63.480745 39.712033 39.712033 0 0 0 58.873272 5.485087l291.587247-263.796137a47.537424 47.537424 0 0 0 5.119415-63.480745 42.052337 42.052337 0 0 0-15.431379-12.505999zM108.926526 547.777397l250.485659-226.716947a47.976231 47.976231 0 0 0 5.192549-64.065821 40.15084 40.15084 0 0 0-59.458347-5.631356L25.333794 504.481774a44.685179 44.685179 0 0 0-24.86573 34.812021 46.952348 46.952348 0 0 0 14.6269 41.101588l291.587247 263.942407a39.712033 39.712033 0 0 0 58.873272-5.558222 47.537424 47.537424 0 0 0-5.19255-63.480745L108.853392 547.631128zM667.089022 0.804479a44.904582 44.904582 0 0 1 33.934407 52.218033L548.611133 984.975431a44.53891 44.53891 0 0 1-26.620957 36.128443 39.492629 39.492629 0 0 1-42.125471-8.044795 47.171752 47.171752 0 0 1-13.529883-43.880699L618.893387 37.298594a42.198606 42.198606 0 0 1 48.415038-36.567249z" p-id="1937" fill="#888888"></path></svg>
                    </li>
                    <li class="wmd-button custom" id="j-wmd-reply" title="回复可见">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.533978 927.744c-31.744 0-58.88-18.944-71.68-48.64-27.136-75.776-86.016-136.704-159.744-172.544v73.728c0 18.944-6.144 35.84-18.944 48.64-14.848 16.896-35.84 27.136-56.832 27.136-18.944 0-35.84-6.144-48.64-18.944l-349.184-296.448c-4.096-2.048-6.144-6.144-8.192-8.192-27.136-31.744-23.04-79.872 10.752-104.96L574.253978 133.12c29.696-25.088 75.776-20.992 100.864 4.096 14.848 14.848 20.992 33.792 20.992 52.736v92.672c191.488 58.88 328.192 242.176 328.192 441.856 0 52.736-8.192 104.96-27.136 155.648-8.192 20.992-23.04 37.888-44.032 44.032-8.704 3.584-17.408 3.584-25.6 3.584z m-261.12-298.496c4.096 0 6.144 0 10.752 2.048 111.616 35.84 201.728 119.808 239.616 227.328 2.048 8.192 10.752 8.192 14.848 6.144 4.096-2.048 6.144-4.096 6.144-6.144 14.848-41.984 23.04-88.576 23.04-132.608 0-178.688-126.464-340.992-303.104-387.072-14.848-2.048-25.088-14.848-25.088-31.744V189.44c0-10.752-12.8-14.848-20.992-8.192L264.493978 473.6c-4.096 4.096-6.144 12.8-2.048 16.896l2.048 2.048 349.184 299.008c2.048 2.048 6.144 2.048 8.192 2.048 2.048 0 6.144 0 8.192-4.096 2.048-2.048 2.048-4.096 2.048-8.192V660.48c0-10.752 4.096-18.944 12.8-25.088 8.704-4.096 15.36-6.144 21.504-6.144z m0 0" p-id="1791" fill="#888888"></path><path d="M309.037978 778.752c-8.192 0-14.848-2.048-20.992-8.192L24.877978 538.624 18.221978 532.48c-27.136-31.744-23.04-79.872 6.144-107.52l267.264-229.376c12.8-10.752 31.744-8.192 44.032 6.144 10.752 12.8 8.192 33.792-4.096 44.032L66.861978 473.6c-4.096 2.048-4.096 6.144-4.096 8.192 0 2.048 0 6.144 2.048 8.192l263.168 233.472c12.8 10.752 14.848 31.744 2.048 44.032-4.608 8.704-12.8 11.264-20.992 11.264z m0 0" p-id="1792" fill="#888888"></path></svg>
                    </li>
                    <li class="wmd-button custom" id="j-wmd-delete" title="删除线">
                        <svg t="1607494660243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1750" width="15" height="15"><path d="M968 542.9V481c0-1.7-0.5-3-2.3-3H571.6l-0.5-0.1c-10.7-2.1-21.6-4.2-32.5-6.2-16.9-3.1-23.2-4.3-31.8-6-53.1-10.4-85.4-20.7-111.6-35.8-37.9-22.1-56.3-52.2-56.3-92 0-39.7 16.4-72.8 47.3-95.7 30.1-22.3 72.8-34 123.3-34 57.8 0 102.6 15.3 133.1 45.5 15.6 15.4 27.1 34.3 34 56.2 1.6 4.9 3.1 11.4 4.6 18.8 0.5 2.5 2.7 4.3 5.3 4.3h75c2.9 0 5.4-2.3 5.4-5.2v-0.8c-1-6.8-1.3-12.1-2-15.9-7.3-43.8-28-82-59.9-110.8-44.7-40.8-110.8-62.4-191-62.4-73.4 0-139.4 18.3-185.9 51.5-25.8 18.6-45.6 41.4-58.8 67.9-13.4 27.2-20.3 58.7-20.3 93.5 0 29.5 5.6 54.5 17.2 76.5 8.2 15.5 19.3 29.2 34 41.9l10.2 8.8H59.2c-1.8 0-4.2 1.4-4.2 3.1V543c0 1.8 2.4 3 4.2 3h446.7l0.5 0.2c1.3 0.3 2.6 0.6 3.8 0.8 0.8 0.2 1.5 0.3 2.3 0.5 33 6.6 51.7 10.9 69 15.8 24.3 6.9 42.8 14.1 58 22.6 38.7 21.8 57.5 53.2 57.5 96 0 37.9-16.6 71.8-46.8 95.4-32.2 25.2-79.7 38.6-137.5 38.6-45.6 0-84.6-8.9-116-26.4-30.9-17.3-52.4-42.3-63.8-74.3-0.9-2.4-1.8-5.8-2.9-9.9-0.6-2.3-2.8-4.3-5.2-4.3h-82.1c-3 0-5.7 3-5.7 6v0.8c0 2.2 0.5 4.1 0.7 5.4 6.5 48.9 30.4 89 70.9 119 47.6 35.2 115 53.8 194.6 53.8 85.6 0 157.4-20.1 207.3-58 25-18.9 44.3-42.2 57.3-69.3 13.1-27.4 19.8-58.4 19.8-92.1 0-32-5.8-58.6-17.8-81.5-5.7-11.1-13-21.4-21.7-30.7l-7.9-8.5h225.3c2 0.1 2.5-1.3 2.5-3z" p-id="1751" fill="#888888"></path></svg>
                    </li>
                    <li class="wmd-button custom" id="j-wmd-table" title="插入表格">
                        <svg t="1607495516074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2817" width="15" height="15"><path d="M960 591.424V368.96c0-0.288 0.16-0.512 0.16-0.768s-0.16-0.512-0.16-0.768V192a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v175.424c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768v222.464c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768V864a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V592.96c0-0.288 0.16-0.512 0.16-0.768s-0.16-0.512-0.16-0.768z m-560-31.232v-160h208v160H400z m208 64V832H400V624.192h208z m-480-224h208v160H128v-160z m544 0h224v160H672v-160zM896 224v112.192H128V224h768zM128 624.192h208V832H128V624.192zM672 832V624.192h224V832H672z" p-id="2818" fill="#888888"></path></svg>
                    </li>

                `)
                $("#j-wmd-linecode").on("click",function() {
	insertAtCursor(' `行内代码` ');
}
)

$("#j-wmd-code").insertAtCaret($(this).attr("data-param"));


                $("#j-wmd-code").on("click",function() {
	insertAtCursor('\n```html\n<div>可以将html换成你需要使用的语法</div>\n```\n');
}
)
                $("#j-wmd-reply").on("click",function() {
	insertAtCursor('\n[hide]需要隐藏的内容[/hide]\n');
}
)
                $("#j-wmd-delete").on("click",function() {
	insertAtCursor(' ~~ 删除线效果 ~~ ');
}
)
                $("#j-wmd-table").on("click",function() {
	insertAtCursor('\n表头|表头|表头\n---|:--:|---:\n居左|居中|居右\n居左|居中|居右\n');
}
)

function insertAtCursor(myValue,myField = $('#text')[0]) {
	if (document.selection) {
	myField.focus();
	sel = document.selection.createRange();
	sel.text = myValue;
	sel.select();
}
else if (myField.selectionStart || myField.selectionStart == '0') {
	var startPos = myField.selectionStart;
	var endPos = myField.selectionEnd;
	var restoreTop = myField.scrollTop;
	myField.value = myField.value.substring(0,startPos) + myValue + myField.value.substring(endPos,myField.value.length);
	if (restoreTop > 0) {
	myField.scrollTop = restoreTop;
}
myField.focus();
	myField.selectionStart = startPos + myValue.length;
	myField.selectionEnd = startPos + myValue.length;
    
}else {
	myField.value += myValue;
	myField.focus();
}
}
})
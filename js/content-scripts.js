(function() {
	// パスワードフォームの変更
	var name_list = ['Password', 'PassRead', 'PassWrite', 'AuthPassThreadRead', 'AuthPassThreadWrite'];
	for(var name_key in name_list) {
		var elements = document.getElementsByName(name_list[name_key]);
		for(var element_key in elements) {
			elements[element_key].type = "password";
		}
	}

	// 広告削除
	var ad_img, d, ad_start;
	ad_img = document.getElementById('imobile_adspotdiv1');
	if(ad_img != null) ad_img.remove();
	d = document.getElementsByTagName('center');
	d[d.length-1].remove();

	// 書き込みフォームサイズ変更
	var subjects = document.getElementsByName('Subject');
	for(var i = 0; i < subjects.length; i++) {
		subjects[i].setAttribute('size', '40');
	}
	var comments = document.getElementsByName('Comment');
	for(var i = 0; i < comments.length; i++) {
		comments[0].cols = 100;
		comments[0].rows = 24;
	}
})(this);

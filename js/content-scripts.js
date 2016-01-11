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
	var ad;
	ad = document.getElementById('imobile_adspotdiv1');
	if(ad != null) {
		while(ad.parentElement.nextElementSibling != null) {
			ad.parentElement.nextElementSibling.remove();
		}
		ad.parentElement.remove();
	}
})(this);

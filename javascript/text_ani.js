function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}
	//スクロールしたら↓
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述


	//ローディングしたら↓
	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

	//-----------------------------　メモ ----------------------------------

	/* HTML スライドテキスト	
		<p><span class="slide-in leftAnime"><span class="slide-in_inner leftAnimeInner">
		スライドしたいテキスト
		</span></span><p>
		</body>の前に入れるjs↓
		<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
		<script src="/javascript/text_ani.js"></script>

	css スライドテキスト
		.slide-in {
			overflow: hidden;
			display: inline-block;
		}

		.slide-in_inner {
			display: inline-block;

		}

		.leftAnime{
			opacity: 0;//
		}

		.slideAnimeLeftRight {
			animation-name:slideTextX100;
			animation-duration:0.8s;
			animation-fill-mode:forwards;
			opacity: 0;
		}

		@keyframes slideTextX100 {
		from {
			transform: translateX(-100%); //要素を左の枠外に移動
				opacity: 0;
		}

		to {
			transform: translateX(0);//要素を元の位置に移動
			opacity: 1;
		}
		}

		.slideAnimeRightLeft {
			animation-name:slideTextX-100;
			animation-duration:0.8s;
			animation-fill-mode:forwards;
			opacity: 0;
		}


		@keyframes slideTextX-100 {
		from {
			transform: translateX(100%);//要素を右の枠外に移動
			opacity: 0;
		}

		to {
			transform: translateX(0);//要素を元の位置に移動
			opacity: 1;
		}
		
		*/
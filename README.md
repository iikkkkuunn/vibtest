Client_Mobile

	WebViewを使用したスマートフォンアプリの実験
	端末の加速度データをWebSocketを介してサーバに送出します。
	Monacaを使用して作成しました。
	設定は以下の通りです。

	◆Cordovaプラグイン
	Cordova v4.1.0
	・MonacaPlugin
	・SplashScreen
	・Device Motion
	・Device Orientation
	・Device

	◆JS/CSSコンポーネント
	・Cordova (Phone Gap) Loader
	・Monaca Core Utility
	・jQuery (Monaca Version)


Client_PC

	index.htmlをブラウザで開き、端末でStartボタンを押すと
	加速度データがグラフ表示されます。
	Google Chromeのみ確認済です。

Server

	今回はHerokuにデプロイしました。
	URL:	//vibtest.herokuapp.com
	
	node.jsとsocket.ioが必要です。
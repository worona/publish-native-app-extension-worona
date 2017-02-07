export default ({ appId, appName, siteURL, userEmail, userName, siteId }) =>
`<?xml version="1.0" encoding="UTF-8"?>

<!-- config.xml reference: https://build.phonegap.com/docs/config-xml -->
<widget xmlns     = "http://www.w3.org/ns/widgets"
        xmlns:gap = "http://phonegap.com/ns/1.0"
        id        = "${appId}"
        version   = "1.0.0">

    <name>${appName}</name>

    <author href="${siteURL}" email="${userEmail}">
        ${userName}
    </author>

    <!-- Define the main entry-point to the application -->
    <content src="index.html" />

    <!-- General preferences -->
    <preference name="orientation"            value="default" />
    <preference name="android-build-tool" value="gradle" />
    <!-- android: MIN SDK version supported on the target device. MAX version is blank by default. -->
    <preference name="android-minSdkVersion" value="15" />
    <preference name="android-targetSdkVersion" value="23" />
    <preference name="disallowOverscroll" value="true" />
    <!-- Define a specific version of PhoneGap to build into your app. -->
    <preference name="phonegap-version"       value="cli-6.5.0" />
    <!-- iOS specific settings -->
    <preference name="show-splash-screen-spinner" value="false" />
    <preference name="DisallowOverscroll" value="true" />
    <preference name="webviewbounce" value="false" />


    <!-- Define app icon and splashscreen for each platform. -->
    <platform name="android">
        <icon   src="www/res/icon/android/ldpi-icon.png"               qualifier="ldpi" />
        <icon   src="www/res/icon/android/mdpi-icon.png"               qualifier="mdpi" />
        <icon   src="www/res/icon/android/hdpi-icon.png"               qualifier="hdpi" />
        <icon   src="www/res/icon/android/xhdpi-icon.png"              qualifier="xhdpi" />
        <icon   src="www/res/icon/android/xxhdpi-icon.png"             qualifier="xxhdpi" />
        <icon   src="www/res/icon/android/xxxhdpi-icon.png"            qualifier="xxxhdpi" />
        <splash src="www/res/screen/android/ldpi.png"                  density="ldpi" />
        <splash src="www/res/screen/android/mdpi.png"                  density="mdpi" />
        <splash src="www/res/screen/android/hdpi.png"                  density="hdpi" />
        <splash src="www/res/screen/android/xhdpi.png"                 density="xhdpi" />
        <splash src="www/res/screen/android/xxhdpi.png"                density="xxhdpi" />
        <splash src="www/res/screen/android/xxxhdpi.png"               density="xxxhdpi" />
    </platform>

    <platform name="ios">
        <icon   src="www/res/icon/ios/icon.png"                         platform="ios" width="57"   height="57" />
        <icon   src="www/res/icon/ios/icon@2x.png"                      platform="ios" width="114"  height="114" />
        <icon   src="www/res/icon/ios/icon-40.png"                      platform="ios" width="40"   height="40" />
        <icon   src="www/res/icon/ios/icon-40@2x.png"                   platform="ios" width="80"   height="80" />
        <icon   src="www/res/icon/ios/icon-50.png"                      platform="ios" width="50"   height="50" />
        <icon   src="www/res/icon/ios/icon-50@2x.png"                   platform="ios" width="100"  height="100" />
        <icon   src="www/res/icon/ios/icon-60.png"                      platform="ios" width="60"   height="60" />
        <icon   src="www/res/icon/ios/icon-60@2x.png"                   platform="ios" width="120"  height="120" />
        <icon   src="www/res/icon/ios/icon-60@3x.png"                   platform="ios" width="180"  height="180" />
        <icon   src="www/res/icon/ios/icon-72.png"                      platform="ios" width="72"   height="72" />
        <icon   src="www/res/icon/ios/icon-72@2x.png"                   platform="ios" width="144"  height="144" />
        <icon   src="www/res/icon/ios/icon-76.png"                      platform="ios" width="76"   height="76" />
        <icon   src="www/res/icon/ios/icon-76@2x.png"                   platform="ios" width="152"  height="152" />
        <icon   src="www/res/icon/ios/icon-small.png"                   platform="ios" width="29"   height="29" />
        <icon   src="www/res/icon/ios/icon-small@2x.png"                platform="ios" width="58"   height="58" />
        <icon   src="www/res/icon/ios/icon-small@3x.png"                platform="ios" width="87"   height="87" />
        <splash src="www/res/screen/ios/Default.png"                    platform="ios" width="320"  height="480" />
        <splash src="www/res/screen/ios/Default@2x.png"                 platform="ios" width="640"  height="960" />
        <splash src="www/res/screen/ios/Default-568h@2x.png"            platform="ios" width="640"  height="1136" />
        <splash src="www/res/screen/ios/Default-667h@2x.png"            platform="ios" width="750"  height="1334" />
        <splash src="www/res/screen/ios/Default-Portrait-736h@3x.png"   platform="ios" width="1242" height="2208" />
        <splash src="www/res/screen/ios/Default-Portrait@2x.png"        platform="ios" width="1536" height="2048" />
        <splash src="www/res/screen/ios/Default-Portrait.png"           platform="ios" width="768"  height="1024" />
    </platform>


    <!-- Plugins -->
    <!-- Worona core plugins -->
    <plugin name="cordova-plugin-appsettings"         source="npm" />
    <!-- siteId preference. -->
    <preference name="siteId" value="${siteId}" />

    <!-- PhoneGap core plugins -->
    <plugin name="cordova-plugin-splashscreen"        source="npm" />
    <preference name="SplashScreenDelay"              value="3000" />
    <preference name="AutoHideSplashScreen"           value="true" />
    <preference name="SplashScreen"                   value="www/res/screen/android" />
    <preference name="SplashMaintainAspectRatio"      value="true" />

    <plugin name="cordova-plugin-battery-status"      source="npm" />
    <plugin name="cordova-plugin-camera"              source="npm" />
    <plugin name="cordova-plugin-media-capture"       source="npm" />
    <plugin name="cordova-plugin-contacts"            source="npm" />
    <plugin name="cordova-plugin-device"              source="npm" />
    <plugin name="cordova-plugin-device-motion"       source="npm" />
    <plugin name="cordova-plugin-device-orientation"  source="npm" />
    <plugin name="cordova-plugin-dialogs"             source="npm" />
    <plugin name="cordova-plugin-file"                source="npm" />
    <plugin name="cordova-plugin-file-transfer"       source="npm" />
    <plugin name="cordova-plugin-geolocation"         source="npm" />
    <plugin name="cordova-plugin-globalization"       source="npm" />
    <plugin name="cordova-plugin-inappbrowser"        source="npm" />
    <plugin name="cordova-plugin-media-capture"       source="npm" />
    <plugin name="cordova-plugin-media"               source="npm" />
    <plugin name="cordova-plugin-network-information" source="npm" />
    <plugin name="cordova-plugin-statusbar"           source="npm" />
    <plugin name="cordova-plugin-vibration"           source="npm" />
    <plugin name="cordova-plugin-whitelist"           source="npm" />
    <!-- Whitelist configuration. -->
    <allow-navigation href="*" />
    <allow-intent href="*" />
    <access origin="*" />
    <!-- Added the following intents to support the removal of whitelist code from base cordova to a plugin -->
    <allow-intent href="content:*" />
    <allow-intent href="dailymotion:*" />
    <allow-intent href="file:*" />
    <allow-intent href="fb:*" />
    <allow-intent href="fb-messenger:*" />
    <allow-intent href="feed:*" />
    <allow-intent href="geo:*" />
    <allow-intent href="googledrive:*" />
    <allow-intent href="google.streetview:*" />
    <allow-intent href="gplus:*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="instagram:" />
    <allow-intent href="intent:" />
    <allow-intent href="linkedin:" />
    <allow-intent href="mailto:*" />
    <allow-intent href="pocket:*" />
    <allow-intent href="skype:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="spotify:*" />
    <allow-intent href="tel:*" />
    <allow-intent href="tweetie:*" />
    <allow-intent href="twitter:*" />
    <allow-intent href="tg:*" />
    <allow-intent href="videos:*" />
    <allow-intent href="weixin:*" />
    <allow-intent href="whatsapp:*" />
    <allow-intent href="youtube:*" />
    <platform name="android">
        <allow-intent href="market:*" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
        <allow-intent href="comgooglemaps:*" />
        <allow-intent href="calshow:*" />
    </platform>

    <!-- Third party plugins -->
    <!-- Third party plugins -->
    <plugin name="cordova-plugin-x-socialsharing" source="npm" />
    <plugin name="cordova-plugin-admob"               source="npm" />
    <plugin name="onesignal-cordova-plugin" spec="^2.0.10" source="npm" />
    <plugin name="cordova-hot-code-push-plugin" source="npm" />
    <chcp>
      <config-file url="https://cdn.worona.io/api/v1/chcp/site/${siteId}/chcp.json"/>
      <auto-download enabled="false"/>
      <auto-install enabled="false"/>
    </chcp>
</widget>
`;

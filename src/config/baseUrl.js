export function getBaseURL (vm) {
    vm.dir='';
    // var bundleUrl = weex.config.bundleUrl;
  
    // var nativeBase;
    // var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    // var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    // if (isAndroidAssets) {
    //     nativeBase = 'file://assets/';
    // } else if (isiOSAssets) {
    //     nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    // } else {
    //     var host = '1.1.1.11:8080';
    //     var matches = /\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);
    //     if (matches && matches.length >= 2) {
    //         host = matches[1];
    //     }
    //     nativeBase = 'http://' + host + '/dist/';
    // }
    // var h5Base = './weex.html?page=./dist/';
    // // in Native
    // var base = nativeBase;
    // if (typeof window === 'object') {
    //     // in Browser or WebView
    //     base = h5Base;
    // }
    var base='';
    base='http://1.1.1.11:8080/output'
    // base='http://192.168.3.13:8080/output' //192.168.3.13:8080 home
    return base
}
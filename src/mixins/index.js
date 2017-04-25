var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
// var event=weex.requireModule('event')
export default {
  methods: {
    jump (to) {
      //1----->普通跳转
      // event.openURL(this.url)
      //2----->原生 navigator 导航
      modal.toast({ message: 'callback:' })
      navigator.push({
          url: to,
          animated: "true"
        }, event => {
          // modal.toast({ message: 'callback:' })
      })
    }
  }
}

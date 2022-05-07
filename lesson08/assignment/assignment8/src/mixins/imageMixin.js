export default {
    created: function () {
    },
    data() {
      return {
          isHidden: false,
          myVal: true
      }
    },
    methods: {
        toggleShowHide() {
            this.isHidden = !this.isHidden;
        },
        myMethod() {
            var element = document.getElementById("border");
            element.classList.toggle("frame");
        }}}

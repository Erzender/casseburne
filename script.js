var app = new Vue({
  el: '#app',
  data: {
    width: window.innerWidth>800?800:window.innerWidth,
    platformIsMoving: 0,
    platformPos: 0,
    isMobile: window.matchMedia("only screen and (max-width: 760px)").matches
  },
  computed: {
    platformLeft: function() { return {
      flex: 300 + this.platformPos
    }},
    platformRight: function() { return {
      flex: 300 - this.platformPos
    }}
  },
  methods: {
    loadMap () {
      var input = document.createElement('input');
      input.type = 'file';
      input.click();
    },
    moveEvents () {
      if (this.platformIsMoving === 2 && this.platformPos < 300) {
        this.platformPos = this.platformPos + 10
      }
      if (this.platformIsMoving === 1 && this.platformPos > -300) {
        this.platformPos = this.platformPos - 10
      }
    },
    movePlatform (trigger) {
      this.platformIsMoving = trigger
    }
  },
  beforeMount(){
    setInterval(this.moveEvents, 20)
  }
})

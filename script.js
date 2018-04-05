var app = new Vue({
  el: '#app',
  data: {
    dirPressed: [false, false],
    platformPos: 0,
    isMobile: window.matchMedia("only screen and (max-width: 760px)").matches
  },
  computed: {
    platformLeft: function() { return {
      display: "flex",
      flex: 300 + this.platformPos
    }},
    platformRight: function() { return {
      display: "flex",
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
      if (this.dirPressed[1] === true && this.dirPressed[0] === false && this.platformPos < 300) {
        this.platformPos = this.platformPos + 10
      }
      if (this.dirPressed[0] === true && this.dirPressed[1] === false && this.platformPos > -300) {
        this.platformPos = this.platformPos - 10
      }
    },
    movePlatform (dir, value) {
      if (dir === 2) {
        this.dirPressed[0] = value
        this.dirPressed[1] = value
        return
      }
      this.dirPressed[dir] = value
    },
  },
  beforeMount(){
    setInterval(this.moveEvents, 20)
  }
})

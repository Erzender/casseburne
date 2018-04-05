var app = new Vue({
  el: '#app',
  data: {
    dirPressed: [false, false],
    platformPos: 0,
    isMobile: window.matchMedia("only screen and (max-width: 760px)").matches,
    blockMap: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
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
    movePlatform (left, right) {
      this.dirPressed[0] = left
      this.dirPressed[1] = right
    },
  },
  beforeMount(){
    setInterval(this.moveEvents, 20)
  }
})

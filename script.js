var myElement = document.getElementById('game');
var mc = new Hammer(myElement);
mc.on('press', function(ev) {
   console.log(ev);
 });

var app = new Vue({
  el: '#app',
  data: {
    width: window.innerWidth>800?800:window.innerWidth,
    dirPressed: [false, false],
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
      if (this.dirPressed[1] === true && this.dirPressed[0] === false && this.platformPos < 300) {
        this.platformPos = this.platformPos + 10
      }
      if (this.dirPressed[0] === true && this.dirPressed[1] === false && this.platformPos > -300) {
        this.platformPos = this.platformPos - 10
      }
    },
    movePlatform (dir, value) {
      this.dirPressed[dir] = value
    }
  },
  beforeMount(){
    setInterval(this.moveEvents, 20)
  }
})

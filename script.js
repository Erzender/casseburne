var app = new Vue({
  el: '#app',
  data: {
    platformIsMoving: 0,
    platformPos: 0,
  },
  computed: {
    platformStyle: function() { return {
      width: "60px",
      height: "10px",
      backgroundColor: "red",
      borderRadius: "5px",
      marginLeft: this.platformPos + 270 + "px"
    }}
  },
  methods: {
    loadMap () {
      var input = document.createElement('input');
      input.type = 'file';
      input.click();
    },
    moveEvents () {
      if (this.platformIsMoving === 2 && this.platformPos < 270) {
        this.platformPos = this.platformPos + 10
      }
      if (this.platformIsMoving === 1 && this.platformPos > -270) {
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

(function() {
  document.addEventListener('DOMContentLoaded', function() {

    var elem = document.querySelector("div.scroll-box");
    if (elem !== null) {

      var scroll = document.createElement('div');
      scroll.setAttribute('class', 'scroll');
      scroll.innerHTML = "Scroll";

      scroll.addEventListener("mouseover", performScrolling.bind(elem));
      scroll.addEventListener("mouseout", resetScrolling.bind(elem));
      elem.insertAdjacentElement('afterEnd', scroll);

      var timeID;

      function performScrolling() {
        var elemHeight = this.clientHeight,
            sc = this;

        var timerId = setTimeout(function run() {
          if (sc.scrollHeight - sc.scrollTop > elemHeight) {
            sc.scrollTop += 1;
          }
          timeID = setTimeout(run, 200)
        }, 200);
      }

      function resetScrolling() {
        this.scrollTop = 0;
        clearTimeout(timeID);
      }
    }
  });
})();

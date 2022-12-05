$(document).ready(function() {
  var element = document.getElementById('transformer-generation');
  var toRotate = element.getAttribute('data-rotate');
  var period = element.getAttribute('data-period');
  setTimeout(function() {
          new TxtRotate(element, JSON.parse(toRotate), period);
  }, 2500);

  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '#txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = Math.floor(Math.random() * (this.toRotate.length + 1));
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 50 - Math.random() * 50;

    if (this.isDeleting) {
      delta /= 3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // this.loopNum++; // line responsible for linear iteration
      this.loopNum += Math.floor(Math.random() * (this.toRotate.length + 1)); // random iteration over list
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };
});
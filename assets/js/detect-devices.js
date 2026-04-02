(function () {
  const width = window.innerWidth;
  const hasTouch = navigator.maxTouchPoints > 0;

  let deviceType = 'desktop';

  if (width <= 768) {
    deviceType = 'mobile';
  } else if (width <= 1024 && hasTouch) {
    deviceType = 'tablet';
  } else {
    deviceType = 'desktop';
  }

  document.getElementById('deviceType').value = deviceType;
})();

/**
 * Wedding Countdown Timer Module
 * Calculates remaining time until target wedding date & updates DOM elements.
 * Compatible with direct file:// loading and HTTP/HTTPS server environments.
 */
(function (global) {
  'use strict';

  function initCountdown(targetDateIso = '2026-12-12T16:00:00+05:30') {
    const target = new Date(targetDateIso).getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      return null;
    }

    function tick() {
      const now = Date.now();
      const left = Math.max(0, target - now);

      daysEl.textContent = Math.floor(left / 86400000);
      hoursEl.textContent = String(Math.floor(left / 3600000) % 24).padStart(2, '0');
      minutesEl.textContent = String(Math.floor(left / 60000) % 60).padStart(2, '0');
      secondsEl.textContent = String(Math.floor(left / 1000) % 60).padStart(2, '0');
    }

    // Initial tick to populate numbers immediately without 1s delay
    tick();

    // Recurring 1-second update interval
    return setInterval(tick, 1000);
  }

  // Export for browser global & CommonJS / Module bundlers
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initCountdown };
  } else {
    global.WeddingCountdown = { init: initCountdown };
  }
})(typeof window !== 'undefined' ? window : this);

// js/device-detect.js

(function() {
  const ua = navigator.userAgent.toLowerCase();
  const html = document.documentElement;

  // OS Detection
  if (ua.includes('windows')) html.classList.add('os-windows');
  if (ua.includes('macintosh') || ua.includes('mac os x')) html.classList.add('os-macos');
  if (ua.includes('linux') && !ua.includes('android')) html.classList.add('os-linux');

  // Device Detection
  if (ua.includes('iphone')) {
    html.classList.add('device-iphone');
    // Rough heuristic for Pro vs Base (screen height)
    if (window.screen.height >= 844) html.classList.add('iphone-pro');
    else html.classList.add('iphone-base');
  }
  else if (ua.includes('ipad') || (ua.includes('macintosh') && 'ontouchend' in document)) {
    html.classList.add('device-ipad');
  }
  else if (ua.includes('android')) {
    html.classList.add('device-android');
    if (ua.includes('samsung') || ua.includes('sm-')) html.classList.add('device-samsung');
  }
  else if (html.classList.contains('os-macos')) {
    if (window.screen.width < 1728) html.classList.add('device-macbook');
    else html.classList.add('device-imac');
  }

  // Optional: GPU check for performance profiling (simplified)
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
      if (renderer.includes('apple') || renderer.includes('nvidia') || renderer.includes('amd')) {
        html.classList.add('gpu-high');
      }
    }
  } catch(e) {}
})();

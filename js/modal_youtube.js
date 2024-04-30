$(function () {
  $(".samplemodal .samplemodal-bg,.samplemodal .samplemodal-close,.all_close").click(function () {
    videoControl("pauseVideo");
    function videoControl(action) {
      var $playerWindow = $(".video-iframe")[0].contentWindow;
      $playerWindow.postMessage(
      '{"event":"command","func":"' + action + '","args":""}',
      "*");
    }
  });
});

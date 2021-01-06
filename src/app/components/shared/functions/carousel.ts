export function carousel(img:any) {
  $(document).ready(function () {
    var getActiveSlideIndex = function () {
      return $('#mobileProjects .active').index(
        '#mobileProjects .carousel-item'
      );
    };

    var slider = function (IndexNumber: any) {
      $(`.slider ${img}`)
        .removeClass('active')
        .eq(IndexNumber)
        .addClass('active');
    };
    slider(getActiveSlideIndex());
    $('#mobileProjects').on('slid.bs.carousel', function () {
      slider(getActiveSlideIndex());
    });
  });
}
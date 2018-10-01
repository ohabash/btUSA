import $ from 'jquery';
import 'slick-carousel';

export default function () {
    const $carousel = $('[data-slick]');

    // setTimeout( function() {
    if ($carousel.length) {
        $carousel.slick();
    }
    // }, 6000);

    // setTimeout( function() {
    // 	window.dispatchEvent(new Event('resize'));
    // 	window.dispatchEvent(new Event('visibilitychange'));
    // }, 2000);
}

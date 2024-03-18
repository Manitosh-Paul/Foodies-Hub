let toggler = document.querySelector('.close_sidebar');
let toggler_img = document.querySelector('.toggle_arrow');
let side_menu = document.querySelector('.sidebar_menu');
let dashboard_con = document.querySelector('.dashboard_content');

toggler.addEventListener('click', () => {
    toggler_img.classList.toggle('active_toggle_sidebar');
    toggler.classList.toggle('move_close_sidebar');
    side_menu.classList.toggle('hide_sidebar_menu');
    dashboard_con.classList.toggle('dashboard_content_width');
})
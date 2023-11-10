(function ($) {
	"use strict";


	const dropdownLink = document.querySelectorAll('.dropdown-link a')
	dropdownLink.forEach(link => {
		link.addEventListener('click', ()=>{
			link.parentElement.classList.toggle('active')
		})
	});

	$('select').niceSelect();

	// sticky
	var wind = $(window);
	var sticky = $('.header-top');
	wind.on('load', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('resize', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});



	$('#chk').click(function() {
		if ($(this).is(':checked')) {
			 $('.chk-option input').prop('checked', true);
		} else {
			 $('.chk-option input').prop('checked', false);
		}
  });


  const openMenu = document.querySelectorAll('.open-menu span')
  const closeMenu = document.querySelectorAll('.close-menu span')
  const dasboardMenu = document.querySelector('.dashboard-menu')

  openMenu.forEach(btn => {
	  btn.addEventListener('click', ()=>{
		dasboardMenu.classList.toggle('active')
	  })
  });
  closeMenu.forEach(btn => {
	  btn.addEventListener('click', ()=>{
		dasboardMenu.classList.toggle('active')
	  })
  });


  const dashboardLink = document.querySelectorAll('.dashboar-menu-link.has-submenu')

  dashboardLink.forEach(link => {
	  link.addEventListener('click', ()=>{
		if (link.classList.contains('active')) {
			link.classList.remove('active')
		}else{
		link.classList.add('active')
		}
		link.classList.toggle('active')
		let submenu =  link.querySelector('.submenu')
		if ( submenu.style.maxHeight) {
		 submenu.style.maxHeight = null
		}else{
		 submenu.style.maxHeight = submenu.style.maxHeight = submenu.scrollHeight + 'px'
		}
	  })
	 
  });
	
	

})(jQuery);


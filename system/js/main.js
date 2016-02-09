$(document).ready(function() {
	prepareMenu();
});
function cancelEvent(e) {
  e = e || window.event;
  if (!e) return false;
  while (e.originalEvent) {
    e = e.originalEvent;
  }
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}
function prepareMenu() {
	$(document).find('.menu').each(function() {
		$(this).find('li').click(function(event) {
			event = (!event) ? window.event : event;
			if($(this).hasClass('nojs')==false && $(this).find('a').first().attr('target')!='_blank' && event.which!=2) {
				$(this).parent().find('li').removeClass('active');
				$(this).addClass('active').find('.fa').attr('class', 'fa fa-spinner fa-spin');
			}
		});
	});
}
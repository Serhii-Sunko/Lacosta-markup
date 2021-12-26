$('.page-header__link').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    500,
  );
  return false;
});

$('.page-header__button').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    500,
  );
  return false;
});

$('.fixed-button__link').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    500,
  );
  return false;
});

$('.mobile-menu__link').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    500,
  );
  return false;
});

$('.mobile-menu__button').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    500,
  );
  return false;
});

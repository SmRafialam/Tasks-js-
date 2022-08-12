jQuery(function() {
  let formI = 1;

  $('.addForm').on('click', function() {
    let _cardBP = $('.sampleCardBP').clone();
    _cardBP.removeClass('sampleCardBP').addClass('sampleCard sampleCard'+formI);
    _cardBP.find('.delBtn').attr('data-formclass', 'sampleCard'+formI);
    _cardBP.find('.fornNo').text(formI++);
    $('.formsContainer').append(_cardBP);
    // $('.formsContainer').append(_cardBP).find(ff).checked().hide(ff);
  });

  // delete confirm modal show
  $(document).on('click', '.delBtn', function() {
    let _formClass = $(this).data('formclass');
    //console.log( _formIndex);
    // console.log($('.formDeleteConfirmModal')[0]);
    let _modalObj = $('.formDeleteConfirmModal').clone();

    _modalObj.find('.formDeleteConfirmBtn').attr('data-formclass', _formClass);

    var myModal = new bootstrap.Modal( _modalObj[0], {
      keyboard: false
    });

    myModal.show();
    return false;
  });


  // form delete action btn confirm
  $(document).on('click', '.formDeleteConfirmBtn', function() {
    let _formClass = $(this).data('formclass');
    console.log(this);
    $('.'+_formClass).remove();

  });




 
 

});
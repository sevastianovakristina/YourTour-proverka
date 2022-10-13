var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7 ( 0 0 0 ) 0 0 0 - 0 0 - 0 0',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

var lazyMask = IMask(
    document.getElementById('date'),
    {
      mask: Date,
      lazy: false,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1900, to: 2999, maxLength: 4}
      }
    }
  );

  var lazyMask = IMask(
    document.getElementById('date1'),
    {
      mask: Date,
      lazy: false,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'Д', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'М', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'Г', from: 1900, to: 2999, maxLength: 4}
      }
    }
  );
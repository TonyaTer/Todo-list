
const date = new Date();

exports.getDate = function(){
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

exports.getDay = function(){
  return date.toLocaleDateString('en-US', {  weekday: 'long' });
}

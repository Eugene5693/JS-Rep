const city = 'Днепр';

switch (city) {
  case 'Киев':
    console.log('Вы находитесь в Киеве');
    break;
  case 'Днепр':
    console.log('Вы находитесь в Днепре');
    break;
  case 'Запорожье':
    console.log('Вы находитесь в Запорожье');
    break;
  default:
    console.log('Не удалось определить ваше местоположение')
}
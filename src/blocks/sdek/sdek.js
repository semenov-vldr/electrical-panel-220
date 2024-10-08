function loadSdekWidget() {
  window.widget = new window.CDEKWidget({
    from: 'Новосибирск',
    root: 'cdek-map',
    apiKey: 'dad86943-dfef-45bd-9c5e-c404323cb093', // 'yandex-api-key
    canChoose: true,
    servicePath: './service.php',
    hideFilters: {
      have_cashless: false,
      have_cash: false,
      is_dressing_room: false,
      type: false,
    },
    hideDeliveryOptions: {
      office: false,
      door: true,
    },
    popup: true,
    debug: false,
    goods: [
      {
        width: 10,
        height: 10,
        length: 10,
        weight: 10,
      },
    ],
    defaultLocation: [82.9346, 55.0415],
    lang: 'rus',
    currency: 'RUB',
    tariffs: {
      office: [233, 137, 139],
      door: [234, 136, 138],
    },
    onReady() {
      console.log("Виджет загружен")
    },
    onCalculate() {
      alert('Расчет стоимости доставки произведен');
    },
    onChoose() {
      alert('Доставка выбрана');
    },
  });
}



//document.addEventListener('DOMContentLoaded', loadSdekWidget);
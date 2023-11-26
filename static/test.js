function init() {
  const user = {
    first_name: "test first_name",
    last_name: "last_name test",
    email: "test@email.com",
    phone_number: "+919876543210",
  };

  gtag("set", "user_data", user);
}

function conversion() {
  init();
  gtag("event", "conversion");
}

function conversionAds() {
  init();
  gtag("event", "conversion", {
    send_to: "AW-11335564912/ZocgCOjIyPkYEPD8m50q",
  });
}

function foobar() {
  init();
  gtag("event", "foobar");
}

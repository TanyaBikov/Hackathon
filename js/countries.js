   var refund = 0;
   var i = 0;
   var Countries
   = {
    Austria: {
        standardVat: 20,
        minimumPurchase: 75.01,
        currency: "EUR",
        eligible: "If you have permanent residence in a non-EU country and are older than 18",
    },
    Belgium: {
        standardVat: 21,
        minimumPurchase: 50,
        currency: "EUR",
        eligible: "If you have permanent residence in a non-EU country",
    },
    Croatia: {
        standardVat: 25,
        minimumPurchase: 740,
        currency: "HRK",
        eligible: "If you have permanent residence in a non-EU country",
    },
    Cyprus: {
        standardVat: 19,
        minimumPurchase: 50,
        currency: "EUR",
        eligible: ["If you have permanent residence in a non-EU country", "Residents of the Republic of Northern Cyprus holding the passport of Republic of Northern Cyprus are not eligible for refunds in Cyprus, but residents of the Republic of Northern Cyprus holding a Turkish passport can get a refund in cash if you submit a copy of the Turkish passport together with your form"],
    },
    "Czech Republic": {
        standardVat: 21,
        minimumPurchase: 2001,
        currency: "CZK",
        eligible: "If you have permanent residence in a non-EU country",
    },
    Denmark: {
        standardVat: 25,
        minimumPurchase: 300,
        currency: "DKK",
        eligible: "If you are living in, or have permanent residence in a non-EU country (Greenland included)",
    },
    Estonia: {
        standardVat: 20,
        minimumPurchase: 38.01,
        currency: "EUR",
        eligible: "If you have permanent residence in a non-EU country",
    },
    Finland: {
        standardVat: 24,
        minimumPurchase: 40,
        currency: "EUR",
        eligible: ["If you have permanent residence in a non-EU country (except Norway)", "If you make purchases two weeks prior to the expiration of your Finnish residence/ work permit"],
    },
    France: {
        standardVat: 20,
        minimumPurchase: 175.01,
        currency: "EUR",
        eligible: ["If you have permanent residence in a non-EU country", "If you are older than 16", "If you buy fewer than 15 items (per Tax Free Form)"],
    },
    Germany: {
        standardVat: 19,
        minimumPurchase: 75.01,
        currency: "EUR",
        eligible: ["If you have permanent residence in a non-EU country", "If you are older than 18", "If you have a valid long-term visa (over 3 months) for a non-EU country"],
    },
    Greece: {
        standardVat: 24,
        minimumPurchase: 50,
        currency: "EUR",
        eligible: ["If you have permanent residence in a non-EU country", "If you are older than 18"],
    },
    Hungary: {
        standardVat: 27,
        minimumPurchase: 54001,
        currency: "HUF",
        eligible: "If you have permanent residence in a non-EU country",
    },
    Iceland: {
        standardVat: 24,
        minimumPurchase: 6000,
        currency: "ISK",
        eligible: "If you have permanent residence outside Iceland",
    },
    Ireland: {
        standardVat: 23,
        minimumPurchase: 30,
        currency: "EUR",
        eligible: "If you are living or have a permanent residence in a non-EU country",
    },
    Italy: {
        standardVat: 22,
        minimumPurchase: 154.95,
        currency: "EUR",
        eligible: ["If you have a permanent residence in a non-EU country", "It is recommended that travellers under 18 years old are accompanied by their parents"],
    },
    Latvia: {
        standardVat: 21,
        minimumPurchase: 44,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Lithuania: {
        standardVat: 21,
        minimumPurchase: 55,
        currency: "EUR",
        eligible: ["If you have a permanent residence in a non-EU country", "It is recommended that the refund is claimed by the parents if the traveller is younger than 14 years of age"],
    },
    Luxembourg: {
        standardVat: 17,
        minimumPurchase: 74,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Netherlands: {
        standardVat: 21,
        minimumPurchase: 50,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Norway: {
        standardVat: 25,
        minimumPurchase: 315,
        currency: "NOK",
        eligible: ["If you have a permanent residence (minimum 183 days) outside Norway, Sweden, Finland or Denmark", "If you have a permanent residence at the Svalbard Islands or Jan Mayen Island, you are eligible for Tax refund if the purchase amount exceeds 1,000 NOK excluding VAT"],
    },
    Poland: {
        standardVat: 23,
        minimumPurchase: 300,
        currency: "PLN",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Portugal: {
        standardVat: 23,
        minimumPurchase: 61.35,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Slovakia: {
        standardVat: 20,
        minimumPurchase: 175.01,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Slovenia: {
        standardVat: 22,
        minimumPurchase: 50.01,
        currency: "EUR",
        eligible: "If you have a permanent residence in a non-EU country",
    },
    Spain: {
        standardVat: 21,
        minimumPurchase: 90.16,
        currency: "EUR",
        eligible: ["If you have a permanent residence in a non-EU country", "If you are older than 16"],
    },
    Sweden: {
        standardVat: 25,
        minimumPurchase: 200,
        currency: "SEK",
        eligible: ["If you have permanent residence in a non-EU country - except for Norway and Åland", "If you are a non-EU citizen who has a residence or work permit in EU, Norway or Åland, and you have obtained an official document from the tax authorities confirming that you are no longer living in EU, or Norway. The document cannot be older than 3 months", "If you are a EU or Norway citizen who has a 1 year residence, or work permit in a non-EU (and Norway) country and you can prove that you are no longer living in the EU"],
    },
    Switzerland: {
        standardVat: 8,
        minimumPurchase: 300,
        currency: "CHF",
        eligible: ["If you have permanent residence outside Switzerland or Samnaun", "If you are older than 18"],
    },
    Turkey: {
        standardVat: 18,
        minimumPurchase: 100,
        currency: "TRY",
        eligible: "If you have permanent residence outside Turkey and have not spent more than 6 months in Turkey",
    },
    "United Kingdom": {
        standardVat: 20,
        minimumPurchase: 30,
        currency: "GBP",
        eligible: ["If you have permanent residence in a non-EU country", "If you are a European Community resident intending to leave the United Kingdom for a destination outside the EU by the end of the third month after the month when you bought the goods. You must stay outside the EU for at least 12 months"],
    },
    Israel: {
        standardVat: 17,
        minimumPurchase: 400,
        currency: "NIS",
        eligible: "If you entered Israel on a B3, B2 or B4 visa and if your passport has been duly stamped",
    },

};
function dynamicallyCreateCountry(){
  for (var key in Countries) {
     i++;
     var newCountry = $("<option/>").attr('value', key);
     newCountry.text(key);
     $("#country-selector").append(newCountry);
 }
}
function calculateRefund(){
  if ($('#total').val() < Countries[$('select[name=selector]').val()]['minimumPurchase']) {
    $("#error-message").css("display", "block").text("Minimum purchase is: " + Countries[$('select[name=selector]').val()]['minimumPurchase'] )
 }
 else {
     refund =  $('#total').val() * (Countries[$('select[name=selector]').val()]['standardVat']) / 100;
     $("#refund-amount").css("display", "block");
     $("#refund-amount span").text(refund);
 }

}
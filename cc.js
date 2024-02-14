const conversionRates = {
    'USD': {
        'USD': 1,
        'EUR': 0.93,
        'INR': 83.06,
        'JPY': 150.66,
        'CAD': 1.36
    },
    'EUR': {
        'USD': 1.07,
        'EUR': 1,
        'INR': 88.88,
        'JPY': 161.30,
        'CAD': 1.45
    },
    'INR': {
        'USD': 0.012,
        'EUR': 0.0111,
        'INR': 1,
        'JPY': 1.81,
        'CAD': 0.016
    },
    
    'JPY': {
        'USD': 0.0066,
        'EUR': 0.0062,
        'INR': 0.55,
        'JPY': 1,
        'CAD': 0.0090
    },
    'CAD': {
        'USD': 0.74,
        'EUR': 0.69,
        'INR': 61.22,
        'JPY': 111.13,
        'CAD': 1
    }
};

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

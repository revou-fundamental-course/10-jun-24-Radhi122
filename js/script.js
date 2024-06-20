function convertToFahrenheit() {
    const celcius = document.getElementById('celciusInput').value;
    if (celcius !== '') {
        const fahrenheit = (celcius * 9/5) + 32;
        document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
        document.getElementById('calculationMethod').value = `${celcius} °C x 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    } else {
        alert('Masukkan suhu dalam Celcius');
    }
}

function convertToCelcius() {
    const fahrenheit = document.getElementById('fahrenheitInput').value;
    if (fahrenheit !== '') {
        const celcius = (fahrenheit - 32) / 1.8;
        document.getElementById('celciusInput').value = celcius.toFixed(2);
        document.getElementById('calculationMethod').value = `(${fahrenheit} °F - 32) / 1.8 = ${celcius.toFixed(2)} °C`;
    } else {
        alert('Masukkan suhu dalam Fahrenheit');
    }
}

function resetFields() {
    document.getElementById('celciusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('calculationMethod').value = '';
}

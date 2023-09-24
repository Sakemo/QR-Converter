const QR_BOX = document.getElementById('qrCont');
const QR_IMG = document.getElementById('QR_IMG');
const QR_DATA = document.getElementById('qr_data');

function generateQRCode(data) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
}

function Generate() {
    const inputValue = QR_DATA.value.trim();
    
    if (inputValue.length > 0) {
        let qrData = inputValue;

        if (!/^\d+$/.test(qrData)) {
            qrData = 'https://wa.me/' + (qrData.startsWith('+') ? qrData : '+55' + qrData);
        }

        QR_IMG.src = generateQRCode(qrData);
        QR_BOX.classList.add('show');
    } else {
        QR_DATA.classList.add('error');
        setTimeout(() => {
            QR_DATA.classList.remove('error');
        }, 500);
    }
}

const QR_BOX = document.getElementById('qrCont');
const QR_IMG = document.getElementById('QR_IMG');
const QR_DATA = document.getElementById('qr_data');

function Generate(){
    if(QR_DATA.value.length > 0){
        var regex = /^[0-9]+$/;
        if (regex.test(QR_DATA.value)) {
            var qrData = QR_DATA.value;
            if (qrData.startsWith('+')){
                QR_IMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&
                data=` + 'https://wa.me/' + QR_DATA.value;
                QR_BOX.classList.add("show");        
            }
            else{
                QR_IMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&
                data=` + 'https://wa.me/' + "+55" +QR_DATA.value;
                QR_BOX.classList.add("show");           
            }
        }
        else{
            QR_IMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&
            data=` + QR_DATA.value;
            QR_BOX.classList.add("show");
        }
    }else{
        QR_DATA.classList.add('error')
        setTimeout(()=>{
            QR_DATA.classList.remove('error')
        }, 500);
    };
};
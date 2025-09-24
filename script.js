function ajukanForm() {
    const data = {
        nama: document.getElementById("nama").value,
        telepon: document.getElementById("telepon").value,
        email: document.getElementById("email").value,
        layanan: document.getElementById("layanan").value,
        tanggal: document.getElementById("tanggal").value
    };

  localStorage.setItem("appointmentData", JSON.stringify(data));
  location.href = "preview_appointment.html";
}

function selesai() {
    if (confirm("Pengajuan akan dikirim, lanjutkan?")) {
        alert("Pengajuan telah terkirim!");
        localStorage.removeItem("appointmentData");
        location.href = "index.html";
    }
}

window.onload = function() {
    if (document.getElementById("previewData")) {
        const data = JSON.parse(localStorage.getItem("appointmentData"));
        if (data) {
        document.getElementById("previewData").innerHTML = `
            <p><strong>Nama:</strong> ${data.nama}</p>
            <p><strong>Telepon:</strong> ${data.telepon}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Layanan:</strong> ${data.layanan}</p>
            <p><strong>Tanggal:</strong> ${data.tanggal}</p>
        `;
        }
    }
};

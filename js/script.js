console.log("Hello World!")

// ambil nama pengunjung
function greet (){
    let username = prompt("Masukkan Nama Anda:");
    document.getElementById("pengunjung").innerText = username;
}
greet();

// form valid atau nggak
function validateForm() {
    const nama = document.getElementById("nama").value;
    const nomertelepon = document.getElementById("nomortelepon").value; 
    const tanggallahir = document.getElementById("tanggallahir").value;
    const pesan = document.getElementById("pesan").value;
    const jeniskelaminInput = document.querySelector('input[name="jeniskelamin"]:checked'); 

    if (nama === "") {
        alert("Nama harus diisi");
        return false;
    }
    if (nomertelepon === "") {
        alert("Nomer Telepon harus diisi");
        return false;
    }
    if (tanggallahir === "") {
        alert("Tanggal Lahir harus diisi");
        return false;
    }
    if (jeniskelaminInput === null) { 
        alert("Jenis Kelamin harus dipilih");
        return false;
    }
    if (pesan === "") {
        alert("Pesan harus diisi");
        return false;
    }

    const nilaiJenisKelamin = jeniskelaminInput.value;
    const displayArea = document.getElementById("display-area");
    const submittedContent = `
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold mb-4 border-b pb-2">Pesan Terkirim:</h3>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Nomor Telepon:</strong> ${nomertelepon}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggallahir}</p>
            <p><strong>Jenis Kelamin:</strong> ${nilaiJenisKelamin}</p> 
            <p><strong>Pesan:</strong> ${pesan}</p>
        </div>
    `; 
    displayArea.innerHTML = submittedContent; 
    
    alert("pesan berhasil ditulis");

    return false; 
}

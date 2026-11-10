// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0)
let porsi = 0

function beriMakan() {
  // tambah porsi makan +1
  porsi = porsi + 1
  
  updateTampilan()
}

// fungsi mengajak main kucing (porsi dikurangi 1)
function ajakMain() {
  // mengurangi porsi 1 tapi cegah jangan sampai negatif
  if (porsi > 0) {
    porsi = porsi - 1
  }
  
  updateTampilan()
}

function reset() {
  porsi = 0
  
  updateTampilan()
}

// fungsi untuk memperbarui tampilan html
function updateTampilan() {
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 20) {
    // ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "minigame/kucing3.png"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "Kucing Gemuk 😻"
  } else if (porsi >= 10) {
    // ganti gambar kucing menjadi kucing sedang
    document.getElementById('foto-kucing').src = "minigame/kucing2.png"
    
    // menampilkan tulisan kucing sedang
    document.getElementById('status-kucing').innerText = "Kucing Sedang 😼"
  } else {
    // ganti gambar kucing menjadi kucing kurus
    document.getElementById('foto-kucing').src = "minigame/kucing1.png"
    
    // menampilkan tulisan kucing kurus
    document.getElementById('status-kucing').innerText = "Kucing Kurus 😼"
  }
}
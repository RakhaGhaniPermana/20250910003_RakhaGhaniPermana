const dataAlumni = [
    // === 1 - 25: SISTEM INFORMASI (SI) ===
    { nim: "20200910001", nama: "Aditya Pratama", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "System Analyst" },
    { nim: "20200910002", nama: "Nabila Putri Rahayu", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "UI/UX Designer" },
    { nim: "20200910003", nama: "Rizky Ramadhan", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "Business Analyst" },
    { nim: "20200910004", nama: "Siti Nurhaliza", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "Database Administrator" },
    { nim: "20200910005", nama: "Fajar Nugraha", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "IT Consultant" },
    { nim: "20200910006", nama: "Aulia Zahra", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "Product Manager" },
    { nim: "20200910007", nama: "Dimas Saputra", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "ERP Specialist" },
    { nim: "20200910008", nama: "Fitriani Lestari", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "Data Analyst" },
    { nim: "20200910009", nama: "Ilham Maulana", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "Web Developer" },
    { nim: "20200910010", nama: "Dinda Permatasari", jurusan: "Sistem Informasi (SI)", lulus: 2024, pekerjaan: "IT Auditor" },
    { nim: "20210910011", nama: "Galih Permana", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "System Analyst" },
    { nim: "20210910012", nama: "Rina Marlina", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Quality Assurance" },
    { nim: "20210910013", nama: "Taufik Hidayat", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "IT Support Specialist" },
    { nim: "20210910014", nama: "Anisa Fitri", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "UI/UX Researcher" },
    { nim: "20210910015", nama: "Bagas Kara", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Digital Marketing Analyst" },
    { nim: "20210910016", nama: "Melati Kusuma", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Business Intelligence" },
    { nim: "20210910017", nama: "Hendra Gunawan", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Project Coordinator" },
    { nim: "20210910018", nama: "Wulan Dari", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "CRM Specialist" },
    { nim: "20210910019", nama: "Yusuf Mansur", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Fullstack Web Developer" },
    { nim: "20210910020", nama: "Intan Purnama", jurusan: "Sistem Informasi (SI)", lulus: 2025, pekerjaan: "Data Engineer" },
    { nim: "20220910021", nama: "Reza Pahlevi", jurusan: "Sistem Informasi (SI)", lulus: 2026, pekerjaan: "Frontend Developer" },
    { nim: "20220910022", nama: "Nadia Safitri", jurusan: "Sistem Informasi (SI)", lulus: 2026, pekerjaan: "IT Governance Staff" },
    { nim: "20220910023", nama: "Arif Budiman", jurusan: "Sistem Informasi (SI)", lulus: 2026, pekerjaan: "System Integrator" },
    { nim: "20220910024", nama: "Tiara Andini", jurusan: "Sistem Informasi (SI)", lulus: 2026, pekerjaan: "Product Owner" },
    { nim: "20220910025", nama: "Kevin Sanjaya", jurusan: "Sistem Informasi (SI)", lulus: 2026, pekerjaan: "Software Tester" },
    { nim: "20250910004", nama: "Dhika Muhamad Fhikri", jurusan: "Sistem Informasi (SI)", lulus: 2029, pekerjaan: "Perancang game" },


    // === 26 - 50: TEKNIK INFORMATIKA (TI) ===
    { nim: "20200810026", nama: "Muhammad Iqbal", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Backend Developer" },
    { nim: "20200810027", nama: "Putri Ayuningtyas", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Mobile App Developer" },
    { nim: "20200810028", nama: "Rendi Setiawan", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "DevOps Engineer" },
    { nim: "20200810029", nama: "Ayu Lestari", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Machine Learning Engineer" },
    { nim: "20200810030", nama: "Bayu Aji", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Cyber Security Analyst" },
    { nim: "20200810031", nama: "Citra Kirana", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Cloud Architect" },
    { nim: "20200810032", nama: "Deni Kurniawan", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Network Engineer" },
    { nim: "20200810033", nama: "Eka Yulianti", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Software Engineer" },
    { nim: "20200810034", nama: "Farhan Kamil", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "Game Programmer" },
    { nim: "20200810035", nama: "Gita Savitri", jurusan: "Teknik Informatika (TI)", lulus: 2024, pekerjaan: "AI Researcher" },
    { nim: "20210810036", nama: "Hafiz Ramadhan", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Fullstack Developer" },
    { nim: "20210810037", nama: "Indah Permata", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Frontend Engineer" },
    { nim: "20210810038", nama: "Joko Susilo", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "System Administrator" },
    { nim: "20210810039", nama: "Kartika Sari", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Data Scientist" },
    { nim: "20210810040", nama: "Lukman Hakim", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Android Developer" },
    { nim: "20210810041", nama: "Maya Anggraini", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "iOS Developer" },
    { nim: "20210810042", nama: "Nanda Pratama", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Penetration Tester" },
    { nim: "20210810043", nama: "Oktavia Rahma", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Software Architect" },
    { nim: "20210810044", nama: "Panji Trihatmodjo", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Embedded System Engineer" },
    { nim: "20210810045", nama: "Qoriatul Hasanah", jurusan: "Teknik Informatika (TI)", lulus: 2025, pekerjaan: "Blockchain Developer" },
    { nim: "20220810046", nama: "Rama Wijaya", jurusan: "Teknik Informatika (TI)", lulus: 2026, pekerjaan: "Backend Engineer" },
    { nim: "20220810047", nama: "Selvi Oktaviani", jurusan: "Teknik Informatika (TI)", lulus: 2026, pekerjaan: "QA Automation Engineer" },
    { nim: "20220810048", nama: "Teguh Santoso", jurusan: "Teknik Informatika (TI)", lulus: 2026, pekerjaan: "Site Reliability Engineer" },
    { nim: "20220810049", nama: "Umi Kulsum", jurusan: "Teknik Informatika (TI)", lulus: 2026, pekerjaan: "Computer Vision Engineer" },
    { nim: "20220810050", nama: "Vicky Prasetyo", jurusan: "Teknik Informatika (TI)", lulus: 2026, pekerjaan: "IoT Developer" },

    // === 51 - 75: DESAIN KOMUNIKASI VISUAL (DKV) ===
    { nim: "20200710051", nama: "Alvin Jonathan", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Art Director" },
    { nim: "20200710052", nama: "Bella Shofie", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Graphic Designer" },
    { nim: "20200710053", nama: "Candra Wijaya", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Motion Graphic Artist" },
    { nim: "20200710054", nama: "Devi Permata", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Illustrator" },
    { nim: "20200710055", nama: "Erlangga Putra", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Brand Identity Designer" },
    { nim: "20200710056", nama: "Fanny Fabriana", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Creative Director" },
    { nim: "20200710057", nama: "Gilang Dirga", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Video Editor" },
    { nim: "20200710058", nama: "Hana Pertiwi", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Packaging Designer" },
    { nim: "20200710059", nama: "Irfan Hakim", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "3D Animator" },
    { nim: "20200710060", nama: "Jessica Mila", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2024, pekerjaan: "Social Media Visual Specialist" },
    { nim: "20210710061", nama: "Kurniawan Dwi", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Concept Artist" },
    { nim: "20210710062", nama: "Larasati Putri", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "UI Visual Designer" },
    { nim: "20210710063", nama: "Mahesa Putra", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Commercial Photographer" },
    { nim: "20210710064", nama: "Niken Anjani", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Editorial Designer" },
    { nim: "20210710065", nama: "Oscar Lawalata", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Typography Designer" },
    { nim: "20210710066", nama: "Prilly Latuconsina", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Content Creator" },
    { nim: "20210710067", nama: "Raffi Ahmad", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Creative Producer" },
    { nim: "20210710068", nama: "Syifa Hadju", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Digital Illustrator" },
    { nim: "20210710069", nama: "Tara Basro", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Visual Merchandiser" },
    { nim: "20210710070", nama: "Uus Kusuma", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2025, pekerjaan: "Comic Artist" },
    { nim: "20220710071", nama: "Vina Panduwinata", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2026, pekerjaan: "Multimedia Designer" },
    { nim: "20220710072", nama: "Wahyu Hidayat", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2026, pekerjaan: "VFX Artist" },
    { nim: "20220710073", nama: "Xena Maharani", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2026, pekerjaan: "Brand Strategist" },
    { nim: "20220710074", nama: "Yoga Pratama", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2026, pekerjaan: "Videographer" },
    { nim: "20220710075", nama: "Zaskia Sungkar", jurusan: "Desain Komunikasi Visual (DKV)", lulus: 2026, pekerjaan: "Exhibition Designer" },

    // === 76 - 100: TEKNIK SIPIL (TS) ===
    { nim: "20200610076", nama: "Agus Salim", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Site Engineer" },
    { nim: "20200610077", nama: "Bambang Pamungkas", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Structural Engineer" },
    { nim: "20200610078", nama: "Chairul Tanjung", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Project Manager Konstruksi" },
    { nim: "20200610079", nama: "Dian Sastrowardoyo", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Quantity Surveyor" },
    { nim: "20200610080", nama: "Eko Patrio", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Quality Control Sipil" },
    { nim: "20200610081", nama: "Ferry Salim", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Geotechnical Engineer" },
    { nim: "20200610082", nama: "Gading Marten", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Estimator Proyek" },
    { nim: "20200610083", nama: "Herlina Putri", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "BIM Modeler" },
    { nim: "20200610084", nama: "Indra Bekti", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Konsultan Perencana" },
    { nim: "20200610085", nama: "Julia Perez", jurusan: "Teknik Sipil (TS)", lulus: 2024, pekerjaan: "Health & Safety Officer (K3)" },
    { nim: "20210610086", nama: "Komeng Alfiansyah", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Highway Engineer" },
    { nim: "20210610087", nama: "Luna Maya", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Water Resources Engineer" },
    { nim: "20210610088", nama: "Maudy Ayunda", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Urban Infrastructure Planner" },
    { nim: "20210610089", nama: "Nino Fernandez", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Surveyor Pemetaan" },
    { nim: "20210610090", nama: "Olla Ramlan", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Contract Engineer" },
    { nim: "20210610091", nama: "Pasha Ungu", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Field Supervisor" },
    { nim: "20210610092", nama: "Raisa Andriana", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Environmental Civil Specialist" },
    { nim: "20210610093", nama: "Surya Saputra", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Bridge Engineer" },
    { nim: "20210610094", nama: "Titi Kamal", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Construction Scheduler" },
    { nim: "20210610095", nama: "Udin Sedunia", jurusan: "Teknik Sipil (TS)", lulus: 2025, pekerjaan: "Material Testing Engineer" },
    { nim: "20220610096", nama: "Vino Bastian", jurusan: "Teknik Sipil (TS)", lulus: 2026, pekerjaan: "Drafter CAD Sipil" },
    { nim: "20220610097", nama: "Wendi Cagur", jurusan: "Teknik Sipil (TS)", lulus: 2026, pekerjaan: "Site Manager" },
    { nim: "20220610098", nama: "Yuni Shara", jurusan: "Teknik Sipil (TS)", lulus: 2026, pekerjaan: "Cost Control Engineer" },
    { nim: "20220610099", nama: "Zulham Zamrun", jurusan: "Teknik Sipil (TS)", lulus: 2026, pekerjaan: "Transportation Engineer" },
    { nim: "20220610100", nama: "Zaskia Adya Mecca", jurusan: "Teknik Sipil (TS)", lulus: 2026, pekerjaan: "Konsultan Pengawas" }
];

const alumniContainer = document.getElementById("alumniContainer");
const searchInput = document.getElementById("searchInput");
const jurusanFilter = document.getElementById("jurusanFilter");
const jumlahAlumni = document.getElementById("jumlahAlumni");

// Fungsi mengambil inisial nama (contoh: "Aditya Pratama" -> "AP")
function ambilInisial(nama) {
    const kata = nama.split(" ");
    return kata.length > 1 ? (kata[0][0] + kata[1][0]).toUpperCase() : kata[0][0].toUpperCase();
}

// Fungsi menampilkan daftar kartu alumni ke layar
function tampilkanAlumni(daftar) {
    alumniContainer.innerHTML = "";
    jumlahAlumni.textContent = `Menampilkan ${daftar.length} dari ${dataAlumni.length} Alumni`;

    if (daftar.length === 0) {
        alumniContainer.innerHTML = `<div class="kosong-msg">Data alumni tidak ditemukan. Coba kata kunci nama atau jurusan lain.</div>`;
        return;
    }

    daftar.forEach(function(mhs) {
        const card = document.createElement("div");
        card.className = "alumni-card";

        card.innerHTML = `
            <div class="avatar-inisial">${ambilInisial(mhs.nama)}</div>
            <h3>${mhs.nama}</h3>
            <span class="badge-jurusan">${mhs.jurusan}</span>
            <p><strong>NIM:</strong> ${mhs.nim}</p>
            <p><strong>Lulus:</strong> Tahun ${mhs.lulus}</p>
            <p><strong>Karir:</strong> ${mhs.pekerjaan}</p>
        `;

        alumniContainer.appendChild(card);
    });
}

// Fungsi filter berdasarkan teks pencarian (nama atau jurusan) & dropdown jurusan
function filterAlumni() {
    const kataKunci = searchInput.value.toLowerCase();
    const jurusanDipilih = jurusanFilter.value;

    const hasilFilter = dataAlumni.filter(function(mhs) {
        const cocokTeks = mhs.nama.toLowerCase().includes(kataKunci) || 
                          mhs.jurusan.toLowerCase().includes(kataKunci);
        const cocokJurusan = (jurusanDipilih === "Semua") || (mhs.jurusan === jurusanDipilih);

        return cocokTeks && cocokJurusan;
    });

    tampilkanAlumni(hasilFilter);
}

// Event Listener saat pengguna mengetik atau memilih jurusan
searchInput.addEventListener("input", filterAlumni);
jurusanFilter.addEventListener("change", filterAlumni);

// Tampilkan seluruh 100 data pertama kali saat halaman dibuka
tampilkanAlumni(dataAlumni);
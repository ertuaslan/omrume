
// 📌 SECTION AÇMA SİSTEMİ
function openSection(id) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}


// 💌 ŞİİRLER
let siirler = [
    "Gönlümüzdeki dualar,\nÖmrümüze nasip olsun...",
    "Hangi cennetin bahçesinde yetiştin ey güzel kadın;\nKokunun değdiği her yeri bahar sanıyorum",
    "Arzuhâl eyledim mâhı güzele\nÖmrümün vadesi kirpiğindedir\nAşkının ateşi düşmüş gönlüme\nVallahi tek şifam gözlerindedir" ,
    "Dünya gözüyle verilmiş bir cennetsin bana...\nBir ömür yaşasam,\nBir ömür daha dilerim seninle...",
    "Sensiz aldığım her nefesin,\nKalbime nasıl battığını\nbilseydin keşke",
    "Senin kusur sandığın\nHer zerrene\n     Aşığım ben",
    "Ah o Gözlerin...\nBana bu dünyadaki huzuru ve mutluluğu hissettiren tek şey.",
    "Sen var ya sen...\nSen hiçbir zaman kaybetmek istemeyeceğim tek insansın.",
    "Sende kusur arayanın\nGözleri yorulur güzelliğinden...",
    "Güzel sesini her duyduğumda\nGül yüzünü her gördüğümde\nVe cennet kokunu her aldığımda\nSeni yaratana şükrederim",
    "Bazı ruhlar,\nBazı ruhlara evvelden aşinadır.\nBu yüzden denir ki:\n'Kalbim ilk anda ısındı sana'",

];


// ✨ HARF HARF YAZMA FONKSİYONU
function typeText(text, element, speed = 40) {

    element.innerText = "";

    let i = 0;

    function typing() {

        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}


// 💌 RANDOM ŞİİR
function randomSiir() {

    let index = Math.floor(Math.random() * siirler.length);

    let text = document.getElementById("siirText");

    let newPoetBtn = document.getElementById("newPoet");

    typeText(siirler[index], text, 40);

    newPoetBtn.disabled = true;

    setTimeout(()=>{
        newPoetBtn.disabled = false;

    },(siirler[index].length)*45)

    // 💥 foto şovu da çalışsın
    showPhotos();
}
let photos = [
    "images/foto1.jpeg",
    "images/foto2.jpeg",
    "images/foto3.jpeg",
    "images/foto4.jpeg",
    "images/foto5.jpeg",
    "images/foto6.jpeg",
    "images/foto7.jpeg",
    "images/foto8.jpeg",
    "images/foto9.jpeg",
    "images/foto10.jpeg"
];

function showPhotos() {
    let container = document.getElementById("photoContainer");
    container.innerHTML = ""; // Önceki fotoğrafı temizle

    // 0 ile photos dizisinin uzunluğu arasında rastgele bir sayı seçiyoruz
    let randomIndex = Math.floor(Math.random() * photos.length);
    let selectedPhoto = photos[randomIndex];

    // Yeni img elementini oluşturuyoruz
    let img = document.createElement("img");
    img.src = selectedPhoto;

    // Tek fotoğraf geleceği için animasyon gecikmesini sabit tutabiliriz
    img.style.animationDelay = "0.1s";

    container.appendChild(img);
}
// --- 🎵 MÜZİK VE SÖZ SİSTEMİ ---

let currentSongIndex = 0;
let isPlaying = false;

// 📝 Playlist ve Sözler (Buraya 10 şarkını ekle)
const playlist = [
    
    {
        title: "Gençlik Başımda Duman",
        artist: "Güzin ile Baha",
        src: "musics/ates_bocegi.mp3",
        lyrics: [
            { time: 0, text: "..." },
            { time:17, text:"Aşk bahçemi süsleyen"},
            { time:19 , text: "İnci Çiçeğim misin?" },
            { time:21.1 , text: "Aşk bahçemi süsleyen" },
            { time:23.2 , text: "İnci çiçeğim misin" },
            { time:25.44 , text: "Gecemi aydınlatan" },
            { time:27.6 ,  text:"Ateş Böceğim misin? "},
            { time:29.66 , text:"Gecemi aydınlatan"},
            { time:31.66 , text: "Ateş Böceğim misin?" },
            { time:33.65 , text: "Gençlik başımda duman" },
            { time:35.8 ,  text:"ilk aşkım ilk heyecan "},
            { time:37.85 , text: "Gençlik başımda duman" },
            { time:40 ,  text:"ilk aşkım ilk heyecan "},
            { time:42 ,  text:"Kovaladıkça kaçan "},
            { time:44 ,  text:"Ateş böceğim misin?"},
            { time:46.2 ,  text:"Kovaladıkça kaçan "},
            { time:48.12 ,  text:"Ateş böceğim misin?"},
            {time:50.5 , text:"..." }

            
        ]
    },
    {
        title: "Gidem Yare",
        artist: "Azer Bülbül",
        src: "musics/azer.mp3",
        lyrics: [
            { time: 0, text: "Derman gelsin kollarıma" },
            { time: 3.3, text: "Derman gelsin kollarıma" },
            { time: 5.3, text: "Bak perişan hâllarıma" },
            { time: 7.52, text: "Bak perişan hâllarıma" },
            { time: 9.6, text: "Halı sermiş yollarıma" },
            { time: 11.50, text: "Kilim sermiş yollarıma" },
            { time: 13.6, text: "Bırak, gurbet, gide'm yâra" },
            { time: 15.6, text: "Bırak, gurbet, gide'm yâra" },
            { time: 17.85, text: "Gide'm yâra, gide'm yâra" },
            { time: 19.7, text: "Öldürür beni bu yara" },
            { time: 21.83, text: "Gide'm yâra, gide'm yâra" },
            { time: 24, text: "Söyle, var mı başka çara? " },
            

        ]
    },
   
        
    {
        title: "Endamın Yeter",
        artist: "Kıraç",
        src: "musics/kalbim_senden.mp3",
        lyrics: [
            { time: 0, text: "Kalbim senden, senden vazgeçmeyecek" },
            { time: 4.58, text: "Korkma, içimde aşkın hiç bitmeyecek" },
            { time: 9.07, text: "Eğer istersen sonsuza dek sürecek" },
            { time: 13.5, text: "İnan bu adam hep seni, seni sevecek" },
            { time: 19.35, text: "Gönlüm senden, senden vazgeçmeyecek" },
            { time: 23.98, text: "Korkma, içimde aşkın hiç bitmeyecek" },
            { time: 28.42, text: "Eğer istersen sonsuza dek sürecek" },
            { time: 32.65, text: "İnan bu adam hep seni, seni sevecek..." }
        ]
    },
    
    {
        title: "Aşk Yok Olmaktır",
        artist: "Yıldız Tilbe",
        src: "musics/tilbe.mp3",
        lyrics: [
            { time: 0, text: "Her ayrıntım sayıklıyor" },
            { time: 5.17, text: "Sükûnetim deliliğimden" },
            { time: 8.65, text: "'Aşk yok olmak', diyor biri" },
            { time: 11.71, text: "Yâr, ben yokum, yok zaten" },
            { time: 14.96, text: "Ayyaş ruhum sayıklıyor" },
            { time: 18.1, text: "Her zerrem sende çarpıyor" },
            { time: 21.27, text: "Aşk yok olmaksa şimdiden" },
            { time: 24.6, text: "Yâr, ben yokum, ben de zaten..." }
            

        ]
    },
    
    
    {
        title: "Yol",
        artist: "Niyazi Koyuncu",
        src: "musics/yol.mp3",
        lyrics: [
            { time: 0, text: "Bu sevdaluk olur mi" },
            { time: 7.7, text: "Sensuz hiç yaşanur mi" },
            { time: 12.7, text: "Seni görmeden geçen" },
            { time: 18.7, text: "Gün günden sayilur mi" },
        ]
    },
    {
        title:"Duy Beni",
        artist:"Göksel İpekçi",
        src:"musics/duybeni.mp3",
        lyrics:[
            {time: 0, text: "Bahset bana hayalinden" },
            {time: 2.81, text: "Ben hayalimi karşımda izliyorken" },
            {time: 5.1, text: "Okuduğum bi’ yerde şöyle diyordu" },
            {time: 7.57, text: "'Sevda duyarmış, ona seslenirsen'" },
            {time: 10.52, text: "Ey sevda, duy beni (duy beni)" },
            {time: 15.55, text: "Yanımda kalsın, o kalsın" },
            {time: 20.85, text: "İşlenmiş içime nakış gibi" },
            {time: 25.6, text: "Şu yüreğim onun için atsın" },

        ]
    },
    {
        title:"Ecel Olsun",
        artist:"Kibariye",
        src:"musics/kibariye.mp3",
        lyrics:[
            {time: 0, text: "İlk ve son sevgilim gerçek aşkımsın" },
            {time: 6.44, text: "Bugünüm yarınım derdim kahrımsın" },
            {time: 12.29, text: "İlk ve son sevgilim gerçek aşkımsın" },
            {time: 18.4, text: "Bugünüm yarınım derdim kahrımsın" },
            
            

        ]
    },
    {
        title:"Bu Sevda Bitmez",
        artist:"Mahsun Kırmızıgül",
        src:"musics/mahsun.mp3",
        lyrics:[
            {time: 0, text: "Ben hayata değil tek sana yenildim" },
            {time: 6.44, text: "Benim sana olan bu sevda bitmez" },
            {time: 12.22, text: "Zincirlere vursalar" },
            {time: 15.22, text: "Zamanı durdursalar" },
            {time: 17.94, text: "Sırtımdan da vursalar" },
            {time: 20.93, text: "Bu sevda bitmez" },
            {time: 23.86, text: "Zincirlere vursalar" },
            {time: 26.7, text: "Zamanı durdursalar" },
            {time: 29.6, text: "Toprağa da koysalar" },
            {time: 32.55, text: "Bu sevda bitmez" },
        ]
    },
    {
        title:"Ömrüm",
        artist:"Eypio",
        src:"musics/omrum.mp3",
        lyrics:[
            {time: 0, text: "Ya vur beni ya da"},
            {time: 2.40, text: "bu yükü al üstümden"},
            {time: 5.57, text: "Ateşim, külüm de sen"},
            {time: 8.79, text: "Dikensin 'Gülüm' desem"},
            {time: 10.96, text: "Gitmez ki bur'da her şey yolunda"},
            {time: 13.75, text: "Çözülür işler de "},
            {time: 14.95, text: "'Basit bi kulum' desen"},
            {time: 18.39, text: "Çektim her zulümde sen"},
            {time: 21.15, text: "Bi' kere gülümsesen"},
            {time: 23.58, text: "O zaman demek ki işler yolunda"},
            {time: 25.98, text: "..."},
            {time: 28.7, text: "Ömrüm, Ömrüm, Ömrüm"},
            {time: 35.15, text: "Bu yalan dünyada neler gördüm?"},
            {time: 41.22, text: "Ömrüm, Ömrüm, Ömrüm"},
            {time: 47.65, text: "Bu aşk da ben Veysel gibi kördüm"},
            
            
        ]
    },
    {
        title:"Çerkes Xatûn",
        artist:"Murat Dağ",
        src:"musics/CerkesXatun.mp3",
        lyrics:[
            {time: 0, text:"Aklımı aldı gitti"},
            {time: 5.44, text:"Kalbimi çaldı gitti"},
            {time: 9.55, text:"O güzel gözlerine"},
            {time: 13.6, text:"gözlerim daldı gitti"},
            {time: 17.5, text:"Aklımı aldı gitti"},
            {time: 21.66, text:"Kalbimi çaldı gitti"},
            {time: 25.56, text:"O güzel gözlerine"},
            {time: 29.65, text:"gözlerim daldı gitti"},

        ]
    }

    
    
];

const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const lyricsContainer = document.getElementById('lyricsContainer');

// Şarkıyı Yükle
function loadSong(index) {
    const song = playlist[index];
    document.getElementById("songTitle").innerText = song.title;
    document.getElementById("songArtist").innerText = song.artist;
    audio.src = song.src;
    
    // Sözleri HTML'e dök
    lyricsContainer.innerHTML = "";
    song.lyrics.forEach((item, i) => {
        let p = document.createElement("p");
        p.innerText = item.text;
        p.classList.add("lyric-line");
        p.setAttribute("id", "line-" + i);
        lyricsContainer.appendChild(p);
    });
}

// Oynat / Durdur
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶️";
    } else {
        audio.play();
        playBtn.innerText = "⏸️";
    }
    isPlaying = !isPlaying;
}

// Sonraki Şarkı
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

// Önceki Şarkı
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

// 🎤 Spotify Söz Takip Sistemi
audio.addEventListener('timeupdate', () => {
    const song = playlist[currentSongIndex];
    song.lyrics.forEach((item, i) => {
        if (audio.currentTime >= item.time) {
            // Hepsinden aktifliği kaldır
            document.querySelectorAll('.lyric-line').forEach(el => el.classList.remove('active'));
            
            // Sıradaki sözü parlat
            let activeLine = document.getElementById("line-" + i);
            if (activeLine) {
                activeLine.classList.add("active");
                // Otomatik aşağı kaydır
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});

// Sayfa ilk açıldığında ilk şarkıyı hazırda tut
loadSong(currentSongIndex);
// 🌈 Arka plan renkleri listesi
const renkler = ["#1a1a2e", "#16213e", "#4b1248", "#0f2027", "#1e3c72"];

// 📸 Anıların listesi (Burayı kendi fotolarına göre çoğalt)
const anilarim = [
    { src: "memory's/ani1.jpg", note: "Herşey böyle başladı,ömrümmm" },
    { src: "memory's/ani2.jpeg", note: "İlk beraber fotoğrafımız\n ben nereye bakıyorum 😂" },
    { src: "memory's/ani3.jpeg", note: "Her zamanki gibi çok güzelsin ömrüm\nHediyeler de çok güzeldi ❤️" },
    { src: "memory's/ani4.jpeg", note: "İnşallah böyle bi konağımız olurrr" },
    { src: "memory's/ani5.jpeg", note: "Ne güzel gözlerin var\n Kurban olurum 😍" },
    { src: "memory's/ani6.jpeg", note: "Bak Jessica sana hep bahsettiğim yerler" },
    { src: "memory's/ani7.jpeg", note: "Yine çok mutluyum 😂😂" },
    { src: "memory's/ani8.jpeg", note: "Arkada sonbahar,Yanımda ilkbaharım " },
    { src: "memory's/ani9.jpeg", note: "Çekinmek istememiştim ama ne çıkmışızzz beee" },
    { src: "memory's/ani10.jpeg", note: "Hem kalbimi yerinden çıkarttın hem de hırkamı " },
    { src: "memory's/ani11.jpeg", note: "Hiç sevilmemiş ki nereden bilsin" },
    { src: "memory's/ani12.jpeg", note: "❤️" },
    { src: "memory's/ani13.jpeg", note: "Ben poz vermeyi bilmiyorum 😂\nAma sevmeyi biliyorummm ❤️" },
    { src: "memory's/ani14.jpeg", note: "Sana hep böyle bakacağım" },
    { src: "memory's/ani15.jpeg", note: "Ölünce beni gözlerine gömsünler, mekanım cennet olsun ❤️" },
    { src: "memory's/ani16.jpeg", note: "Organizatör Ertuğrul Yürük & Yönetmen Merve Şahin" },
    { src: "memory's/ani17.jpeg", note: "Sevgim burnumdan daha büyük ❤️😂" },
    

];

let aktifAniIndex = 0;

function changeMemory(yon) {
    // Indexi ileri veya geri kaydır
    aktifAniIndex += yon;
    
    // Liste biterse başa dön veya sona git
    if (aktifAniIndex >= anilarim.length) aktifAniIndex = 0;
    if (aktifAniIndex < 0) aktifAniIndex = anilarim.length - 1;
    
    // HTML'deki resmi ve yazıyı değiştir
    const secilenAni = anilarim[aktifAniIndex];
    document.getElementById("memoryImg").src = secilenAni.src;
    document.getElementById("memoryCaption").innerText = secilenAni.note;
    
    // Arka planı rastgele değiştir
    document.body.style.background = renkler[Math.floor(Math.random() * renkler.length)];
}
// Sayfa ilk yüklendiğinde listenin en başındaki fotoyu getir
document.addEventListener("DOMContentLoaded", () => {
    if (anilarim && anilarim.length > 0) {
        const ilkAni = anilarim[0];
        const imgEl = document.getElementById("memoryImg");
        const captionEl = document.getElementById("memoryCaption");

        if (imgEl) imgEl.src = ilkAni.src;
        if (captionEl) captionEl.innerText = ilkAni.note;
    }
});
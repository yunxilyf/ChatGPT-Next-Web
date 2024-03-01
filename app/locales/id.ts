import { SubmitKey } from "../store/config";
import { PartialLocaleType } from "./index";

const id: PartialLocaleType = {
  WIP: "Coming Soon...",
  Error: {
    Unauthorized: "Akses tidak diizinkan, silakan masukkan kode akses atau masukkan kunci API OpenAI Anda. di halaman [autentikasi](/#/auth) atau di halaman [Pengaturan](/#/settings).",
    Content_Policy: {
      Title:
        "Permintaan Anda ditandai karena Pelanggaran Kebijakan Konten.",
      SubTitle:
        "Baca selengkapnya di sini: https://platform.openai.com/docs/guides/moderation/overview",
      Reason: {
        Title: "Alasan",
        sexual: "Seksual",
        hate: "Kebencian",
        harassment: "Pelecehan",
        "self-harm": "Melukai diri sendiri",
        "sexual/minors": "Seksual/anak-anak",
        "hate/threatening": "Kebencian/ancaman",
        "violence/graphic": "Kekerasan/grafis",
        "self-harm/intent": "Melukai diri sendiri/niat",
        "self-harm/instructions": "Melukai diri sendiri/instruksi",
        "harassment/threatening": "Pelecehan/ancaman",
        violence: "Kekerasan",
      },
    },
    TextModerationErr: "Kami menemui masalah saat meninjau pesan Anda:",
  },
  Auth: {
    Title: "Diperlukan Kode Akses",
    Tips: "Masukkan kode akses di bawah",
    SubTips: "Atau masukkan kunci API OpenAI Anda",
    Input: "Kode Akses",
    Confirm: "Konfirmasi",
    Later: "Nanti",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} pesan`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} pesan`,
    Actions: {
      ChatList: "Buka Daftar Chat",
      CompressedHistory: "Ekspor Riwayat Terkompresi",
      Export: "Ekspor Semua Pesan sebagai Markdown",
      Copy: "Salin",
      Stop: "Berhenti",
      Retry: "Coba Lagi",
      Pin: "Pin",
      PinToastContent: "2 pesan telah ditandai",
      PinToastAction: "Lihat",
      PinAppContent: {
        Pinned : "Aplikasi Desktop sekarang dipasangkan",
        UnPinned: "Aplikasi Desktop tidak lagi dipasangkan",
      },  
      Delete: "Hapus",
      Edit: "Edit",
    },
    Commands: {
      new: "Mulai Chat Baru",
      newm: "Mulai Chat Baru dengan Masks",
      next: "Chat Selanjutnya",
      prev: "Chat Sebelumnya",
      restart: "Restart klien",
      clear: "Bersihkan Percakapan",
      del: "Hapus Chat",
      save: "Simpan Percakapan Sesi Saat Ini",
      load: "Muat Percakapan Sesi",
      copymemoryai: "Salin sesi memori prompt AI",
      updatemasks: "Perbarui sesi memori prompt untuk sebuah Masks",
      summarize: "Rangkum sesi obrolan saat ini",
      UI: {
        MasksSuccess: "Berhasil memperbarui sesi Masks",
        MasksFail: "Gagal memperbarui sesi Masks",
        Summarizing: "Meringkas sesi percakapan ini",
        SummarizeSuccess: "Berhasil merangkum sesi obrolan ini",
        SummarizeFail: "Gagal merangkum sesi obrolan ini",
      },
    },
    InputActions: {
      Stop: "Berhenti",
      ToBottom: "Ke Bagian Bawah",
      Theme: {
        auto: "Otomatis",
        light: "Tema Terang",
        dark: "Tema Gelap",
      },
      Prompt: "Prompts",
      Masks: "Masks",
      Clear: "Bersihkan Percakapan",
      Settings: "Pengaturan",
    },
    Rename: "Ubah Nama Chat",
    Typing: "Mengetik...",
    GeneratingImage: "Menghasilkan Gambar...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} untuk mengirim`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter untuk membalut";
      }
      return (
        inputHints + ", / untuk mencari prompt, : untuk menggunakan perintah"
      );
    },
    Send: "Kirim",
    Config: {
      Reset: "Reset ke Default",
      SaveAs: "Simpan sebagai Masks",
    },
  },
  Export: {
    Title: "Ekspor Pesan",
    Copy: "Salin Semua",
    Download: "Unduh",
    MessageFromYou: "Pesan dari Anda",
    MessageFromChatGPT: {
      NoRole: "Pesan Dari ChatGPT",
      RoleAssistant: "Asisten",
      RoleSystem: "Sistem",
      SysMemoryPrompt: "Prompt Memori Sistem",
    },
    Share: "Bagikan ke ShareGPT",
    Format: {
      Title: "Format Ekspor",
      SubTitle: "Markdown atau Gambar PNG",
    },
    IncludeContext: {
      Title: "Sertakan Konteks",
      SubTitle: "Apakah akan menyertakan masks",
    },
    IncludeSysMemoryPrompt: {
      Title: "Termasuk Prompt Memori Sistem",
      SubTitle: "Ekspor prompt memori sistem dalam mask atau tidak",
    },
    Steps: {
      Select: "Pilih",
      Preview: "Pratinjau",
    },
  },
  Select: {
    Search: "Cari",
    All: "Pilih Semua",
    Latest: "Pilih Terbaru",
    Clear: "Bersihkan",
  },
  Memory: {
    Title: "Prompt Memori",
    EmptyContent: "Belum ada yang tersedia.",
    Send: "Kirim Memori",
    Copy: "Salin Memori",
    Reset: "Reset",
    ResetConfirm:
      "Jika Anda mereset, riwayat obrolan saat ini dan memori historis akan dihapus. Apakah Anda yakin ingin melakukan reset?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Anda yakin ingin menghapus percakapan yang dipilih?",
    DeleteToast: "Percakapan telah dihapus",
    Revert: "Kembali",
    Search: "Masukkan kata kunci filter",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Danger: {
      Reset: {
        Title: "Setel Ulang Semua Pengaturan",
        SubTitle: "Mengembalikan semua pengaturan ke nilai default",
        Action: "Setel Ulang",
        Confirm:
          "Anda yakin ingin mengembalikan semua pengaturan ke nilai default?",
      },
      Clear: {
        Title: "Hapus Semua Data",
        SubTitle: "Semua data yang tersimpan secara lokal akan dihapus",
        Action: "Hapus",
        Confirm:
          "Apakah Anda yakin ingin menghapus semua data yang tersimpan secara lokal?",
      },
    },
    Lang: {
      Name: "Bahasa", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Ubah ukuran font konten chat",
    },
    InjectSystemPrompts: {
      Title: "Suntikkan Petunjuk Sistem",
      SubTitle:
        "Tambahkan petunjuk simulasi sistem ChatGPT di awal daftar pesan yang diminta dalam setiap permintaan",
    },
    InputTemplate: {
      Title: "Template Input",
      SubTitle: "Pesan baru akan diisi menggunakan template ini",
    },

    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Versi terbaru ditemukan: ${x}`,
      GoToUpdate: "Perbarui Sekarang",
      IsUpdating: "Memperbarui...",
      UpdateSuccessful: "Versi telah diperbarui ke versi terbaru",
      UpdateFailed: "Pembaruan Gagal",
    },
    AutoGenerateTitle: {
      Title: "Hasilkan Judul Otomatis",
      SubTitle: "Hasilkan judul yang sesuai berdasarkan konten percakapan",
    },
    SpeedAnimation: {
      Title: "Kecepatan Respon Animasi",
      SubTitle: "Kecepatan Respon Animasi memungkinkan Anda mengontrol seberapa cepat teks respon ditampilkan selama animasi",
    },
    Sync: {
      CloudState: "Pembaruan Terakhir",
      NotSyncYet: "Belum disinkronkan",
      Success: "Sinkronisasi Berhasil",
      Fail: "Sinkronisasi Gagal",

      Config: {
        Modal: {
          Title: "Konfigurasi Sinkronisasi",
        },
        SyncType: {
          Title: "Tipe Sinkronisasi",
          SubTitle: "Pilih layanan sinkronisasi favorit Anda",
        },
        Proxy: {
          Title: "Aktifkan Proxy CORS",
          SubTitle:
            "Aktifkan Proxy untuk menghindari pembatasan atau pemblokiran lintas sumber",
        },
        ProxyUrl: {
          Title: "Lokasi Titik Akhir Proxy CORS",
          SubTitle: "Hanya berlaku untuk Proxy CORS bawaan untuk proyek ini",
        },

        AccessControl: {
          Title: "Aktifkan Kontrol Akses Timpa",
          SubTitle:
            "Hanya berlaku untuk pengaturan kontrol akses timpa seperti kode akses",
        },
        LockClient: {
          Title: "Aktifkan Jangan Sinkronkan Data Saat Ini",
          SubTitle:
            "Hanya menyinkronkan data dari sumber lain, bukan data saat ini",
        },

        WebDav: {
          Endpoint: {
            Name: "Titik Akhir WebDav",
            SubTitle: "Konfigurasikan Titik Akhir WebDav",
          },
          UserName: {
            Name: "Nama Pengguna",
            SubTitle: "Konfigurasikan Nama Pengguna",
          },
          Password: {
            Name: "Kata Sandi",
            SubTitle: "Konfigurasikan Kata Sandi",
          },
          FileName: {
            Name: "Nama File",
            SubTitle:
              "Nama File, misalnya: backtrackz.json (harus berupa file JSON)",
          },
        },
        GithubGist: {
          GistID: {
            Name: "Github Gist ID",
            SubTitle:
              "Lokasi ID Gist Anda, misalnya: gist.github.com/H0llyW00dzZ/<gistid>/dll. Salin <gistid> dan tempelkan di sini.",
          },
          FileName: {
            Name: "Nama File",
            SubTitle:
              "Nama File, misalnya: backtrackz.json (harus berupa file JSON)",
          },
          AccessToken: {
            Name: "Token Akses",
            SubTitle:
              "Pastikan Anda memiliki izin untuk sinkronisasi. Aktifkan Privat & Publik di sana.",
          },
        },

        GoSync: {
          Endpoint: "URL GoSync REST",
          UserName: "Nama Backup",
          Password: "Token GoSync REST",
          FileName: "Nama File",
        },

      },
      LocalState: "Data Lokal",
      Overview: (overview: any) => {
        return `${overview.chat} percakapan, ${overview.message} pesan, ${overview.prompt} prompt, ${overview.mask} masks`;
      },
      Description: {
        Chat: (overview: any) => {
          const title = "Percakapan";
          const description = `${overview.chat} percakapan, ${overview.message} pesan`;
          return { title, description };
        },
        Prompt: (overview: any) => {
          const title = "Prompts";
          const description = `${overview.prompt} Prompts`;
          return { title, description };
        },
        Masks: (overview: any) => {
          const title = "Masks";
          const description = `${overview.mask} masks`;
          return { title, description };
        },
      },
      ImportFailed: "Gagal mengimpor dari file",
      ImportChatSuccess: "Data chat berhasil diimpor.",
      ImportPromptsSuccess: "Impor data Prompts berhasil.",
    },
    SendKey: "Kirim",
    PinAppKey: "Tombol pintas Aplikasi",
    SystemPromptTemplate: {
      Title: "Template Perintah Sistem",
      SubTitle: "Sebuah template perintah sistem untuk setiap permintaan. Ini dapat menggunakan bahasa lokal. Jika bahasa tidak terdaftar, maka bahasa default (Inggris) akan digunakan.",
    },
    Theme: "Tema",
    TightBorder: "Batas Ketat",
    SendPreviewBubble: {
      Title: "Pratinjau Obrolan",
      SubTitle: "Pratinjau Obrolan dengan markdown",
    },
    AutoScrollMessage: {
      Title: "Balasan Auto-Scroll",
      SubTitle: "Gulir pesan saat membalas",
    },
    Mask: {
      Splash: {
        Title: "Layar Pembuka Masks",
        SubTitle:
          "Tampilkan layar pembuka masks sebelum memulai percakapan baru",
      },
      Builtin: {
        Title: "Sembunyikan Masks Bawaan",
        SubTitle: "Sembunyikan Masks bawaan dari daftar masks",
      },
    },
    Prompt: {
      Disable: {
        Title: "Nonaktifkan Otomatisasi",
        SubTitle: "Aktifkan/Matikan otomatisasi",
      },
      List: "Daftar Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} bawaan, ${custom} penggunaan khusus`,
      Edit: "Edit",
      Modal: {
        Title: "Daftar Prompt",
        Add: "Tambahkan",
        Search: "Cari Prompt",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Jumlah Pesan Riwayat",
      SubTitle: "Jumlah pesan yang akan dikirim setiap permintaan",
    },
    CompressThreshold: {
      Title: "Batas Kompresi Riwayat",
      SubTitle:
        "Jika panjang pesan melebihi batas yang ditentukan, pesan tersebut akan dikompresi",
    },
    Token: {
      Title: "Kunci API",
      SubTitle: "Gunakan kunci Anda untuk melewati batas kode akses",
      Placeholder: "Kunci API OpenAI",
    },
    Usage: {
      Title: "Saldo Akun",
      SubTitle(used: any, total: any) {
        const hardLimitusd = total.hard_limit_usd !== undefined ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'USD' }).format(total.hard_limit_usd) : "tidak diketahui";
        const hardLimit = total.system_hard_limit_usd !== undefined ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'USD' }).format(total.system_hard_limit_usd) : "tidak diketahui";
        const usedFormatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'USD' }).format(used);
        return `Digunakan bulan ini ${usedFormatted}, Batas maksimum ${hardLimitusd}, Batas penggunaan yang disetujui ${hardLimit}`;
      },
      IsChecking: "Memeriksa...",
      Check: "Periksa",
      NoAccess: `Masukkan Kunci Sesi pada Kunci API yang dimulai dengan awalan "sess-" untuk memeriksa saldo.`,
    },
    AccessCode: {
      Title: "Kode Akses",
      SubTitle: "Kontrol akses diaktifkan",
      Placeholder: "Diperlukan kode akses",
    },
    Endpoint: {
      Title: "Endpoint",
      SubTitle: "Harus dimulai dengan http(s):// untuk endpoint kustom",
    },
    Model: "Model",
    Temperature: {
      Title: "Suhu",
      SubTitle: "Semakin tinggi nilainya, semakin acak keluarannya",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Tidak mengubah nilai dengan suhu",
    },
    MaxTokens: {
      Title: "Token Maksimum",
      SubTitle: "Panjang maksimum token input dan output",
    },
    UseMaxTokens: {
      Title: "Gunakan Jumlah Token Maksimum",
      SubTitle: "Apakah akan menggunakan jumlah maksimum token.",
    },
    PresencePenalty: {
      Title: "Penalti Kehadiran",
      SubTitle: "Semakin tinggi nilai, semakin mungkin topik baru muncul",
    },
    FrequencyPenalty: {
      Title: "Penalti Frekuensi",
      SubTitle:
        "Semakin tinggi nilai, semakin rendah kemungkinan penggunaan ulang baris yang sama",
    },
    TextModeration: {
      Title: "Moderasi Teks",
      SubTitle: "Moderasi Teks untuk memeriksa apakah konten sesuai dengan kebijakan penggunaan OpenAI.",
    },
    NumberOfImages: {
      Title: "Buat Jumlah Gambar",
      SubTitle:
        "Sejumlah gambar yang akan dihasilkan\nHarus di antara 1 dan 10. Untuk dall-e-3, hanya 1 yang didukung.",
    },
    QualityOfImages: {
      Title: "Buat Kualitas Gambar",
      SubTitle:
        "Kualitas gambar yang akan dihasilkan\nKonfigurasi ini hanya didukung untuk dall-e-3.",
    },
    SizeOfImages: {
      Title: "Ukuran Gambar",
      SubTitle:
        "Ukuran gambar yang dihasilkan\nDALL·E-2: Harus menjadi salah satu dari `256x256`, `512x512`, atau `1024x1024`.\nDALL-E-3: Harus menjadi salah satu dari `1024x1024`, `1792x1024`, atau `1024x1792`.",
    },
    StyleOfImages: {
      Title: "Gaya Gambar",
      SubTitle:
        "Gaya gambar yang dihasilkan\nHarus menjadi salah satu dari cerah atau alami\nKonfigurasi ini hanya didukung untuk dall-e-3",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Bagaimana saya bisa membantu Anda hari ini?",
    Error: "Terjadi kesalahan, silakan coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan singkat dari riwayat percakapan: " + content,
      Topic:
        "Buat judul berisi empat hingga lima kata untuk percakapan kita yang tidak akan disertakan dalam ringkasan percakapan, seperti instruksi, format, kutipan, tanda baca awal, tanda kutip pendahuluan, atau karakter tambahan. Silakan coba dengan kutipan berakhir.",
      Summarize: // Ditingkatkan oleh H0llyW00dzZ Ref: https://github.com/H0llyW00dzZ/GoGenAI-Terminal-Chat
        "Dalam 200 kata atau kurang, sediakan ringkasan singkat tentang diskusi yang sedang berlangsung.\n" +
        "Ringkasan ini akan dijadikan sebagai petunjuk kontekstual untuk referensi di interaksi masa depan",
    },
  },
  Copy: {
    Success: "Tersalin ke clipboard",
    Failed:
      "Gagal menyalin, mohon berikan izin untuk mengakses clipboard atau Clipboard API tidak didukung (Tauri)",
  },
  Download: {
    Success: "Konten berhasil diunduh ke direktori Anda.",
    Failed: "Unduhan gagal.",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} promp kontekstual`,
    Edit: "Pengaturan Obrolan Saat Ini",
    Add: "Tambahkan Promp",
    Clear: "Bersihkan Konteks",
    Revert: "Kembali ke Posisi Sebelumnya",
  },
  Plugin: {
    Name: "Plugin",
  },
  FineTuned: {
    Sysmessage: "Anda adalah asisten yang",
  },
  PrivacyPage: {
    Name: "Privasi",
    Confirm: "Setuju",
  },
  Mask: {
    Name: "Masks",
    Page: {
      Title: "Template Promp",
      SubTitle: (count: number) => `${count} template prompt`,
      Search: "Cari template",
      Create: "Buat",
    },
    Item: {
      Info: (count: number) => `${count} prompt`,
      Chat: "Obrolan",
      View: "Lihat",
      Edit: "Edit",
      Delete: "Hapus",
      DeleteConfirm: "Anda yakin ingin menghapus?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Template Prompt ${readonly ? "(hanya baca)" : ""}`,
      Download: "Unduh",
      Clone: "Duplikat",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Nama Bot",
      Sync: {
        Title: "Gunakan Konfigurasi Global",
        SubTitle: "Gunakan konfigurasi global dalam percakapan ini",
        Confirm:
          "Pastikan untuk mengganti konfigurasi kustom dengan konfigurasi global?",
      },
      HideContext: {
        Title: "Sembunyikan Prompt Konteks",
        SubTitle: "Tidak menampilkan prompt konteks dalam obrolan",
        UnHide: "Tampilkan Prompt konteks dalam obrolan",
        Hide: "Sembunyikan Prompt konteks dalam obrolan",
      },
      ShowFullChatHistory: {
        Title: "Tampilkan Seluruh Riwayat Obrolan",
        SubTitle: "Tampilkan riwayat obrolan lengkap",
        UnHide: "Perlihatkan seluruh riwayat obrolan",
        Hide: "Sembunyikan seluruh riwayat obrolan (Hanya tampilkan 15 pesan terakhir)",
      },
      Share: {
        Title: "Bagikan Masks Ini",
        SubTitle: "Buat tautan untuk masks ini",
        Action: "Salin Tautan",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Lewati",
    Title: "Pilih Masks",
    SubTitle: "Berkonversasilah dengan diri Anda di balik masks",
    More: "Lebih Lanjut",
    NotShow: "Jangan Tampilkan Sekarang",
    ConfirmNoShow:
      "Pastikan untuk menonaktifkannya? Anda dapat mengaktifkannya nanti melalui pengaturan.",
  },

  UI: {
    Confirm: "Konfirmasi",
    Cancel: "Batal",
    Close: "Tutup",
    Create: "Buat",
    Continue: "Lanjutkan",
    Edit: "Edit",
    Manage: "Kelola",
  },
  // don't linting this `System_Template` keep format like this
  // this a object not string
  System_Template: `
Anda adalah ChatGPT, sebuah model bahasa besar yang dilatih oleh {{ServiceProvider}}.
Batas pengetahuan: {{cutoff}}
Model saat ini: {{model}}
Waktu saat ini: {{time}}
Latex inline: $x^2$ 
Latex block: $$e=mc^2$$`,
  Label_System_Template: {
    Default: "Template Sistem Standar",
    Local: "Template Sistem Lokal",
  },
  Exporter: {
    Description: {
      Title: "Hanya pesan setelah menghapus konteks yang akan ditampilkan",
    },
    Model: "Model",
    ServiceProvider: "Penyedia Layanan",
    Messages: "Pesan",
    Topic: "Topik",
    Time: "Tanggal & Waktu",
  },
  URLCommand: {
    Code: "Kode akses terdeteksi dari url, konfirmasi untuk mendaftar ? ",
    Settings: "Pengaturan terdeteksi dari url, konfirmasi untuk diterapkan ?",
  },
};

export default id;

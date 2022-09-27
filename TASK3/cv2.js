
            // sisa Durasi magang
            let start = document.getElementById('start').innerHTML = 'september 07 2022';
            let end = document.getElementById('end').innerHTML = 'Sekarang';

            let bulan_start = new Date(start).getMonth();
            let bulan_end = new Date().getMonth();

            let bulan = bulan_end - bulan_start;

            let day_start = new Date(start).getDate();
            let day_end = new Date().getDate();

            let day = day_end - day_start;

            document.getElementById('duration').innerHTML = `Durasi : ${bulan} bulan ${day} day `;

            // sisa Durasi magang
            let start = document.getElementById('start').innerHTML = 'September 07 2022';
            let end = document.getElementById('end').innerHTML = 'Sekarang';

            let month_start = new Date(start).getMonth();
            let month_end = new Date().getMonth();

            let month = month_end - month_start;

            let day_start = new Date(start).getDate();
            let day_end = new Date().getDate();

            let day = day_end - day_start;

            document.getElementById('duration').innerHTML = `Durasi : ${month} Month ${day} Day `;
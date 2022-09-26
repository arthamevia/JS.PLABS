
            //    Durasi magang
            let start = document.getElementById('start').innerHTML = 'September 07, 2022';
            let end = document.getElementById('end').innerHTML = 'December 22, 2022';

            start = new Date(start).getMonth();
            end = new Date(end).getMonth();

            let duration = end - start;

            document.getElementById('duration').innerHTML = `Durasi : ${duration} Bulan`;
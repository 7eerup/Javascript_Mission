const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjZhMDZkNDkyNzVhOTg2ZTU0NDhlNDkzMzhkZWU3YSIsInN1YiI6IjY0Nzg2MGY4Y2Y0YjhiMDEwMzFjZjc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlIR1_goS3lZdLowZoNrQip-uCXoS7DAIBb5V6c0qNs'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        console.log(response) // 응답
        const moviesArray = response.results; // [{...}, {...}, {...}]
         // var (X) -> 오래된 애 이제 거의 안씀 | 존재하는 이유는 오래된 코드로 작동하고있는 웹사이트가 아직 많아서, 지원차원에서 없어지지 않고있음
         // let vs const => 공부 | 재할당 하지 않을거면 const를 쓰는게 원칙이다

        const htmls = [];
        // moviesArray가 배열임으로 for문 또는 .forEach로 돌아준다 (반복문)
        const contentsContainer = document.querySelector('.contents') // contents 라는 클래스를 가진 요소를 자바스크립트로 가져오기
        // 돔 조작 | 바닐라 자바스크립트 | 돔 쿼리셀렉터 => 주말에 공부

        // string literal
        moviesArray.forEach(movie => {
            const html = `<div>
           <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
             <h3 class="title">${movie.title}</h3>
             <div class="movie-overview">${movie.overview}</div>
             <div>${movie.vote_average}</div>
            </div>`;

            htmls.push(html) // 또하나의 배열 메소드
            // 노드 수업 시작하기전에 -> 자바스크립트 기초를 탄탄히 익히셔야된다 (이론적부분 생략)
            // 데이터 구조, 배열 메소드, 문자열 메소드, 배열이 뭔지, 문자열이 뭔지
        })

        contentsContainer.innerHTML = htmls.join('')
    })
    .catch(err => console.error(err));

    // 공부를 더 하시고 도전해보기: .forEach 쓰고있는걸 .map 함수로 써보기
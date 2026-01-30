let movies = {
    movie1: {
        title: 'One battle after another',
        year: 2025,
        isFavorite: true,
        genre: 'Action',
        director: 'Nolan',
    },
    movie2: {
        title: 'A origem',
        year: 2010,
        isFavorite: false,
        genre: 'Ficção Cientifica',
        director: 'Calumbi',
    },
    movie3: {
        title: 'Ready or not',
        year: 2019,
        isFavorite: true,
        genre: 'horror',
    },
};
export function showMovies(movies) {
    console.log(movies);
}
showMovies(movies);

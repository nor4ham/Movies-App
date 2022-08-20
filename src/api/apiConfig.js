const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c8046225cb69705536b95f47b5f5072b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
module.exports = {
    proxyUrl: 'localhost:1337',
    browserRoot: '**/*',
    buildDir: 'assets',
    syncDirSrc: {
        all: [
            'assets/**/*'
        ],
        db: 'assets-source/localDiskDb.db'
    },
    mapsDest: './',
    sassDir: 'assets-source/styles/sass/**/*',
    sassSrc: 'assets-source/styles/sass/styles.scss',
    sassDest: 'assets/css',
    jsSrc: '**/*.js',
    jsDest: 'assets/js',
    templatesDir: 'assets-source/templates/**/*.html'
};
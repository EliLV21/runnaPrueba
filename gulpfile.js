var gulp = require("gulp");
var connect = require("gulp-connect");

var rutas = {
	rutaAssets: 'public/assets',
  rutaCSS: 'css/*.css',
	rutaJS: 'js/*.js',
	rutaNodeModules: 'node_modules/'
};

gulp.task("estilos", function(){
	gulp.src(rutas.rutaNodeModules)
	.pipe(gulp.dest("public"))
});

gulp.task("assets", function(){
	gulp.src('index.html')
	.pipe(gulp.dest("public"))
});
gulp.task("prepararCSS", function(){
	gulp.src(rutas.rutaCSS)
	.pipe( gulp.dest(rutas.rutaAssets + "/css"))
});

gulp.task('prepararJS', function(){
	gulp.src(rutas.rutaJS)
	.pipe( gulp.dest(rutas.rutaAssets + "/js"))
});
gulp.task('serveprod', function() {
  connect.server({
    root: "./public/",
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

gulp.task("observar", function(){
	gulp.watch('index.html',['assets']);
	gulp.watch(rutas.rutaCSS,['prepararCSS']);
	gulp.watch(rutas.rutasJS,['prepararJS']);
	gulp.watch(rutas.rutaNodeModules,['assets']);
	gulp.watch('index.html',['estilos']);
});

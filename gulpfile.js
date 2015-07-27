var gulp = require('gulp-help')(require('gulp'),{
  hideEmpty: true
});
var rsync = require('gulp-rsync');
var bump = require('gulp-bump');
var del = require('del');
var replace = require('gulp-replace');
var GulpSSH = require('gulp-ssh');
var deployConfig = require('./deployconfig.json');
var fs = require('fs');
var shell = require('gulp-shell');

gulp.task('clean',['clean:server'], function(done){
  return del(['./dist/**/*'], function(err){
    if(!err){
      done();
    }
  })
});

gulp.task('clean:server',function () {
  var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
      host: deployConfig.hostname,
      port: deployConfig.port,
      username: deployConfig.username,
      privateKey: fs.readFileSync(deployConfig.localKey)
    }
  });
  return gulpSSH
    .shell(['cd /home/SitePreProd/ambient-it-website/assets/admin', 'rm * -r'], {filePath: 'shell.log'})
    .pipe(gulp.dest('logs'));
});

gulp.task('template',['build'], function(){
  gulp.src(['dist/index.html'])
    .pipe(replace('<body', '<body ng-strict-di'))
    .pipe(replace('<base href="/"/>', '<base href="/admin/"/>'))
    .pipe(gulp.dest('dist'))
});


gulp.task('deploy',['template'], function(done){
  gulp.src(["./dist/**/*"])
    .pipe(rsync(deployConfig))
    .pipe(function(){
      done();
    });
});

gulp.task('build',['clean'], shell.task([
  'NODE_ENV=build webpack --bail -p --progress'
]));


gulp.task('minor:bump',['deploy'], function(){
  gulp.src('./package.json')
    .pipe(bump({type: 'minor'}))
    .pipe(gulp.dest('./'));
});
gulp.task('major:bump',['deploy'], function(){
  gulp.src('./package.json')
    .pipe(bump({type: 'major'}))
    .pipe(gulp.dest('./'));
});
gulp.task('patch:bump',['deploy'], function(){
  gulp.src('./package.json')
    .pipe(bump({type: 'patch'}))
    .pipe(gulp.dest('./'));
});

gulp.task('server:restart',function () {
  var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig:  {
      host: deployConfig.hostname,
      port: deployConfig.port,
      username: deployConfig.username,
      privateKey: fs.readFileSync(deployConfig.localKey)
    }
  });
  return gulpSSH
    .shell(['cd /home/SitePreProd/ambient-it-website', 'pm2 restart app'], {filePath: 'shell.log'})
    .pipe(gulp.dest('logs'));
});



gulp.task('patch','build, deploy with rsync and patch package.json',['patch:bump']);
gulp.task('minor','build, deploy with rsync and bump minor version of package.json',['minor:bump']);
gulp.task('major','build, deploy with rsync and bump major version of package.json',['major:bump']);
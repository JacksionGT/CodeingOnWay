# 网页自动刷新示例项目说明
这是一个实现了网页自动刷新的示例项目。开发系统环境是windows，并且需要安装下面的开发环境
* Node
* git源码管理软件

# 工具准备
开发工具：一个你顺手的代码编辑器
调试工具：谷歌浏览器

# 怎样使用
* 检出项目至你的本地文件夹。
* 使用Node.js command prompt命令行，转到本项目
* 在命令行中执行初始化命令，这个过程需要联网可能会耗费一些时间
```
npm install
```
* 执行项目启动命令
```
npm start
```

> Tips：_为了让正在开发中的html能够被自动刷新，必须在页面上加入下面的script标签内容_
```
<script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
</script>
```

> 你也可以将这段代码放到一个文件里面，比如项目中的live.js文件
> 如果你想你的自动刷新功能只作用于测试环境，还需要加入检测
```
if(location.host.indexOf('localhost') === 0){
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')    
}
```





# 网页自动刷新示例项目另外一种实现方法
以上是使用编码的方式实现了web页面的自动刷新。LiveReload也提供了桌面软件和插件的的方式，点点鼠标就可以实现。
## 需要软件
插件：谷歌浏览器livereload插件
软件：LiveReload客户端软件


## 软件获取方式
你可以访问[LiveReload](http://livereload.com/)下载软件及插件，为了方便起见，这里提供了一些传送门。

### 插件获取
* 下载已打包插件，离线安装。[点这里下载](http://ou3jnsbjg.bkt.clouddn.com/blog/170810/kc3bg9DKKi.crx)
* 从谷歌应用商店获取插件，[点这里](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei),不过你可能需要科学上网才能访问Chrome网上应用商店
* 从github上获取，并自行打包插件。[点击这里](https://github.com/livereload)

### 软件获取
* 点击[百度云下载](http://pan.baidu.com/s/1miFVmas)离线安装版 密码：5bqn
* 从官网下载最新在线安装版本

## 安装步骤
* 在Chrome中安装插件，如果你是下载的Chrome离线,你可能还需要了解[谷歌浏览器离线安装方式](http://chromecj.com/utilities/2014-09/181.html)
* 安装LiveReload客户端软件

## 使用方法
* 打开LiveReload客户端软件，界面像下面这样。点击`add` 并选择你的项目根目录
![mark](http://ou3jnsbjg.bkt.clouddn.com/blog/170810/8ecKaElm1d.png)
* 访问你的网站，并开启livereload插件。
* Tips livereload插件开启状态下应该跟下图中红色框线内的形状一致，注意图标的圆心是实心的。
![mark](http://ou3jnsbjg.bkt.clouddn.com/blog/170810/ddAkFKEjdl.png)


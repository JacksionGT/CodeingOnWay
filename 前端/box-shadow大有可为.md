# 边框 阴影
边框用来制作三角形的应用已经烂大街了,再加上阴影的特性:可以在一个元素上作用多层阴影,感觉此处若细心发掘,必大有可为.
``` css
.dot.active{
    box-shadow: 0 0 0 #ff0000, 
        0 0 0 #0091ff, 
        0 0 0 #00f5fe, 
        0 0 0 #fa00f0, 
        0 0 0 #6453bb, 
        0 0 0 #18611b, 
        0 0 0 #f1ed23, 
        0 0 0 #14e51e;
    border-width: 0;
}
.dot{
	width: 0;
    height: 0;
    display: block;
    margin: 300px auto;
    border-top-color: #c53a3a;
    border-left-color: #e79c9c;
    border-right-color: #f4ee11;
    border-bottom-color: #51c1c0;
    box-shadow: 50px -50px 0 #ff0000, 
        50px 50px 0 #0091ff, 
        -50px -50px 0 #00f5fe, 
        -50px 50px 0 #fa00f0, 
        100px 100px 0 #6453bb, 
        100px -100px 0 #18611b, 
        -100px 100px 0 #f1ed23, 
        -100px -100px 0 #14e51e;
    transition: all 1s cubic-bezier(0.51, -0.67, 0, 2.15);
    border-width: 30px;
    border-radius: 50%;
}
```

``` html
<span class="active dot"></span>
```

![mark](http://img2.ink-lotus.ink/odmbug/20190801/5u3OilFA4PT1.gif)
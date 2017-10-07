# 对字符串进行HTML编码和解码的JavaScript函数
## 将字符串中HTML标签转换HTML编码（编码）
``` javascript
function HtmlEncode(str) { 
    var t = document.createElement("div"); 
    t.textContent ? t.textContent = str : t.innerText = str; 
    return t.innerHTML; 
} 
```
如下HTML片段：
``` html
<div class="txt">
    <p>nihao</p>
    <span>
        nihao
    </span>
</div>
```
经调用HtmlEncode函数得到的结果
```
&lt;div class="txt"&gt;<br>		&lt;p&gt;nihao&lt;/p&gt;<br>		&lt;span&gt;<br>			nihao<br>		&lt;/span&gt;<br>	&lt;/div&gt;
```
HTML片段中的空格会被保留，换行符会被替换成<code>&lt;br&gt;</code>标签

## 将HTML编码转换成HTML代码片段（解码）
``` javascript
function HtmlDecode(str) { 
    var t = document.createElement("div"); 
    t.innerHTML = str; 
    return t.innerText || t.textContent 
} 
```
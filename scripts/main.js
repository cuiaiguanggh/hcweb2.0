var foot='<div class="foot-nav-box wrap">'+
'                <ul class="clearfix">'+
'                    <li>'+
'                        <h4>走进我们</h4>'+
'                        <p><a href="about.html">关于我们</a></p>'+
'                        <p><a href="honor.html">企业荣誉</a></p>'+
'                        <p><a href="index.html">公司首页</a></p>'+
'                    </li>'+
'                    <li>'+
'                        <h4>产品中心</h4>'+
'                        <p><a href="product.html">产品中心</a></p>'+
'                        <p><a href="sample.html">工程案例</a></p>'+
'                    </li>'+
'                    <li>'+
'                        <h4>企业展示</h4>'+
'                        <p><a href="show.html">企业展示</a></p>'+
'                    </li>'+
'                    <li>'+
'                        <h4>联系我们</h4>'+
'                        <p><a href="contact.html">联系我们</a></p>'+
'                    </li>'+
'                </ul>'+
'            </div>'+
'            <footer>'+
'                <p>Copyright © 2018 浙江汇诚电力科技有限公司 All rights reserved.  </p>'+
'            </footer>';
$(".fbox").html(foot);

var menuh='<div class="navbar navbar-inverse">'+
'            <div class="container navbar-container">'+
'                <div class="navbar-header">'+
'                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
'                        <span class="icon-bar"></span>'+
'                        <span class="icon-bar"></span>'+
'                        <span class="icon-bar"></span>'+
'                    </button>'+
'                    <div class="navbar-brand" style="padding:0">'+
'                        <img src="content/images/hc_logo.png" class="logo-box" alt="汇诚电力" />'+
'                        <div class="name-box">'+
'                            <a href="index.html">浙江汇诚电力科技有限公司</a>'+
'                            <p >Zhejiang Huicheng Electrical Power Technology</p>'+
'                        </div>'+
'                    </div>'+
'                    '+
'                </div>'+
'                <div class="navbar-collapse collapse">'+
'                    <ul class="nav navbar-nav">'+
'                        <li><a href="index.html">公司首页</a></li>'+
'                        <li><a href="product.html">产品中心</a></li>'+
'                        <li><a href="honor.html">企业荣誉</a></li>'+
'                        <li><a href="show.html">企业展示</a></li>'+
'                        <li><a href="sample.html">工程案例</a></li>'+
'                        <li><a href="about.html">关于我们</a></li>'+
'                        <li><a href="contact.html">联系我们</a></li>'+
'                    </ul>               '+
'                </div>'+
'            </div>'+
'    </div>';

$(".mbox").html(menuh);
$(function () {
    var index = $("#selectIndex").val();
    $("ul.navbar-nav li").removeClass("active").eq(index).addClass("active");
})
// var ans = 0;  只用js实现，用js的eval函数
$(document).ready(function(){
    var counter="";     //记录输入的数据与结果的字符串
    $("button").on("click",function(){
        var text = $(this).attr('value');
        if(text !== 'AC' && text !== 'CE' && text !== 'Ans' && text !== '='){
            counter +=text;
            $(".showAns").val(counter);
        }
        else if(text === 'AC'){
            counter="";
            $(".showAns").val(counter);
        }else if(text ==='CE'){
            counter = counter.slice(0,-1);
            $(".showAns").val(counter);
        }else if(text === '=') {
            // ans = eval(counter);
            //get方法提交数据，URL可以写成ip+port+app_url形式拼接
            $.get('http://127.0.0.1:8080/calculate/', {
                counter: $(".showAns").val()
            }, function (data) {
                 // console.info(data,"{{{{{{{{");
                 $(".showAns").val(data);
                 counter = "";
            })
        }

    });

});
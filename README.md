<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            background-color: #ddd;
              -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      margin: 0;
      padding: 0;
        max-height: 100%;
      font-family: 'Roboto', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
        }
         


        .header {            background: #E7E7E7;           background: -webkit-gradient(linear, left top, left bottom, from(#666), to(#8886));
            padding: 80px;
            
            text-align: center;
            
            color: white;
        }
        .header h1 {
            font-size: 40px;
        }

        .row {
            display: -ms-flexbox;
            /* IE10 */
            display: flex;
            -ms-flex-wrap: wrap;
            /* IE10 */
            flex-wrap: wrap;
        }
        .a {
            overflow: hidden;
            background-color: #333;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
        }

    }

    .main {
        -ms-flex: 70%;
        /* IE10 */
        flex: 70%;
        background-color: white;
        padding: 20px;
    }
    .fakeimg {
        margin-top: 16px;
        align-self: center;
        background: #000000;           background: -webkit-gradient(linear, left top, left bottom, from(#667), to(#555));
        border-radius: 14px;
        background-color: #000000;
        width: 100%;
    height: 450px;
webkit-box-shadow:inset 4px 4px 4px rgba(0,0,0,0.28), 10px 0 rgba(255,255,255,0.42);
box-shadow:inset 4px 4px 4px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.42);
box-shadow:inset 4px 4px 6px rgba(,0,0,0.28), 0 1px 0 rgba(255,255,255,0.42);
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
border-right: solid;
border-bottom: solid;
border-color: gray;
border-width: 1px;
        max-width: 800px;
        margin: auto;
    }
        .fakeimg2 {
        background: #000000;           background: -webkit-gradient(linear, left top, left bottom, from(#666), to(#222));
        border-radius: 14px;
        background-color: #000000;
        width: 100%;
    height: 430px;
webkit-box-shadow:inset 10px 20px 10px rgba(0,0,0,0.28), 10px 0 rgba(255,255,255,0.42);
box-shadow:inset 10px 10px 10px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.42);
box-shadow:inset 5px 5px 6px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.42);
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
border-right: solid;
border-bottom: solid;
border-color: gray;
border-width: 1px;
        max-width: 800px;
        margin: auto;
    }
    
        

    

    * {
        box-sizing: border-box;
    }

    .mybutton {
          
        background-color: #2196F3;
         
      border-radius: 10px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.23);
      box-sizing: border-box;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 600px;
      max-height: 4px;
      margin: 0 auto;
      overflow: hidden;
      padding: 20px;
      position: relative;
        font-size: 16px;
        border-radius: 15px;
      font-weight: 500;
      line-height: 19px;
      opacity: 1;
      width: 80%;
      height: 4%;
     position:static;
     
    }

    .mybutton:hover {
        background-color: #555;
        border-radius: 15px;

    }



    .green {
        background-color: #4CAF50;
    

    }
    .gray {
        background-color: #e09604;
        r
    }
    .footer {
    
height: 100%;
	box-shadow: 0px -2px -2px #000;
        padding: 20px;
        padding-bottom: 1000px;
        text-align: center;
        background: #8886;
    }
@media screen and (max-width: 500px) {
        .row {
            flex-direction: column;
        }
    }
@media screen and (max-width: 400px) {
        .navbar a {
            float: none;
            width: 100%;
        }
    }


    body {
        color: white;
    }
</style>
</head>
<body>
<div class="navbr">

<p style="text-align:right"></p>
</div>
<div class="header">
<h1>amir_ma</h1>
<p style="font-family:arial; color:#FF0000;">welcome</p>

</div>
    


		
		



<div class="footer" style="font-size:20px">



<br>
<div class="fakeimg">
<br>

<br>

<p >
hello, my name is amir mahdi
</p>


<br>
<h3>servers</h3>
<div class="mybutton green">
<a herf="#">test</a>
</div>
<br>
<div class="mybutton gray">
<a herf="#">test</a>
</div>
<br>
<br>
<br>


    <br>
 
<br>
<br>
<p>‌</p>
<br>
<br>
<br>
<p>‌</p>

<br>
<br>
<br>
<br>
</div>
<div class="fakeimg2" style="margin-top:28px">
    <br>
  <h3>customize</h3>
  <wbr>
<h4>background Color</h4>
<input id="color" type="color" value="fff">
<br>
<script>
setInterval(() => {
let color = document.getElementById('color');
let colorValue = color.value;
document.body.style.backgroundColor = colorValue;
}, 100);
</script>
<br>
<br>
<br>
<p>‌</p>
<br>
<br>
<br>
<p>‌</p>
</div>
</div>
</body>

</html>

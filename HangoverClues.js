<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
 
<form>
    Number 1: <input type="text" name="num1"><br>
    Number 2: <input type="text" name="num2"><br>
    Sum: <input type="text" name="sum"><br>
    <input type="button" value="Sum" onclick="calcSum()">
</form>
 
<script>
    function calcSum() {
        let num1 = document.getElementsByName("num1")[0].value;
        let num2 = document.getElementsByName("num2")[0].value;
        let sum = Number(num1) + Number(num2);
        document.getElementsByName("sum")[0].value = sum;
    }
</script>
 
 
</body>
</html>
 
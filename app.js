//��������ű�

//�ⲿģ��
var express=require("express");
var path=require("path");

//�Զ���ģ��
var app=express();

app.use("/",express.static(path.join(__dirname,"public")));

app.listen(3000);

console.log("��������...../n 45.78.50.233:3000");

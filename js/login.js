function loginCheck(){    
                let user=document.getElementById('username').value;
                let pass = document.getElementById('password').value;
                let url="loginCheck.php";
				let data="user="+user+"&"+"pass="+pass;
				if(window.XMLHttpRequest)
				{
					request=new XMLHttpRequest();
				}

				else if(window.ActiveXObject)
				{
					request=new ActiveXObject("Microsoft.XMLHTTP");
				}

				try{
					request.onreadystatechange=getInfo;
					request.open("POST",url,true);
					request.setRequestHeader("content-type","application/x-www-form-urlencoded");					
					request.send(data);
				}catch(e)
				{
					alert("Can't connect to server");
				}

				function getInfo()
					{
						if(request.readyState==4)
						{
							let res=request.responseText;
							if(res=="2"){
								alert("Login succesfull !");								
							}
							else if(res=="1"){
								alert("Wrong credentials !");
							}
							else {
								alert("Enter some data");
							}
							document.getElementById('password').value="";
						}
					}          
					return false;
}
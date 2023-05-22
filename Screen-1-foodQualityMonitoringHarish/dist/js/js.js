$(function(){
	var val = 0
	var decrease = 0 
	var incraese = 0 

	$('.temper').hover(function(){
	clearInterval(decrease)
		increase = setInterval(function(){//hover on function
			if (val<100){
				val += 1
				$('#percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	},function(){
	clearInterval(increase)
		decrease = setInterval(function(){//hover on function
			if (val>0){
				val -= 1
				$('#percent').text(val+"%")		
			}//close if
		},10)//close settimeout
	}

	)//close hover


	$('.moisture').hover(function(){
		clearInterval(decrease)
			increase = setInterval(function(){//hover on function
				if (val<100){
					val += 1
					$('#percent1').text(val+"%")		
				}//close if
			},10)//close settimeout
		},function(){
		clearInterval(increase)
			decrease = setInterval(function(){//hover on function
				if (val>0){
					val -= 1
					$('#percent1').text(val+"%")		
				}//close if
			},10)//close settimeout
		}
	
		)//close hover


		$('.humidity').hover(function(){
			clearInterval(decrease)
				increase = setInterval(function(){//hover on function
					if (val<100){
						val += 1
						$('#percent2').text(val+"%")		
					}//close if
				},10)//close settimeout
			},function(){
			clearInterval(increase)
				decrease = setInterval(function(){//hover on function
					if (val>0){
						val -= 1
						$('#percent2').text(val+"%")		
					}//close if
				},10)//close settimeout
			}
		
			)//close hover


})//close $(function)
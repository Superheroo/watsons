//火箭升空
			var rocket = document.querySelector(".rocket"),
				body_top, //滚动条头到页面头部距离
				rocket_top, //火箭头到页面顶部
				timer, //定时器
				scrollTop,
				rocket_run_length, //火箭走过的长度
				body_run_length; //滚动条走过的长度
			window.addEventListener("scroll", scroll_length)

			function scroll_length() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop > 200) {
					rocket.style.display = "block";
				} else {
					rocket.style.display = "";

				}
			}
			rocket.addEventListener("click", function() {
				var scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
				body_top = document.body.scrollTop,
					rocket_top = rocket.offsetTop,
					body_run_length = body_top / 50,
					rocket_run_length = rocket_top / 50;
				this.classList.add("rocket_run");
				timer = setInterval(function() {
					document.body.scrollTop -= body_run_length;
					window.pageYOffset -= body_run_length;
					document.documentElement.scrollTop -= body_run_length;
					body_top -= body_run_length;
					rocket_top -= rocket_run_length;
					document.body.scrollTop = body_top;
					rocket.style.top = rocket_top + "px";
					//					document.documentElement.scrollTop = scrollTop;
					if(body_top <= 0) {
						clearInterval(timer);
						rocket.classList.remove("rocket_run");
						rocket.style.top = "";
					}
				}, 20);

			})
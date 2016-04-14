var Show = function(button_id,toShow_id){
	this.button = document.getElementById(button_id);
	this.toShow = document.getElementById(toShow_id);
	this.body = document.getElementsByTagName('body')[0];
}
Show.prototype.resizeHide = function(){
	console.log(this.toShow.classList.contains('menu-shown'));
	if(this.toShow.classList.contains('menu-shown')){
		this.toShow.classList.remove('menu-shown');
	}
}
Show.prototype.toggle = function(){
	if(!this.toShow.classList.contains('menu-shown')){
		this.toShow.classList.add('menu-shown');
		this.button.classList.remove('shown');
		this.button.classList.add('hidden');
		unrollShow(list);
	}
	else{
		unrollHide(list);
		var hide = setInterval(function(){
			this.toShow.classList.remove('menu-shown');
			this.button.classList.remove('hidden');
			this.button.classList.add('shown');
			clearInterval(hide);
		}.bind(this),list.length*60);
	}
}

Show.prototype.addResizeHide = function(){
	this.body.addEventListener('resize',this.resizeHide.bind(this))
}

Show.prototype.addEventFunction = function(e){
	this.button.addEventListener(e,this.toggle.bind(this));
}

showMM = new Show('mm-button','mobile-menu');

showMM.addEventFunction('click');
showMM.addResizeHide();

var list = document.getElementById('mobile-menu').getElementsByTagName('li');

var unrollShow = function(list){
	var i = 0;
	var show = setInterval(function(){
		if(i==list.length){
			clearInterval(show);
		}
		else{
			list[i].style.display = 'block';
			i+=1;
		}
	},60)
}

var unrollHide= function(list){
	var i = list.length-1;
	var show = setInterval(function(){
		if(i==-1){
			clearInterval(show);
		}
		else{
			list[i].style.display = 'none';
			i-=1;
		}
	},60)
}

var styleLink = function(l){
	l.style.color = '#F9450C';
	l.style.borderColor = '#F9450C';
	l.style.borderWidth = '0px 0px 2px 0px'
	l.style.borderStyle = 'solid'
}

Array.prototype.slice.call(list).forEach(function(li){
	var thisURL = window.location.href;
	Array.prototype.slice.call(li.getElementsByTagName('a')).forEach(
		function(t){
			t.href == thisURL?styleLink(t):null
		})
})

/*document.getElementById('show-more-intro').onclick = function(e){
	e.preventDefault();
	this.style.display = 'none';
	document.getElementById('more-intro').style.display = 'block';
}*/
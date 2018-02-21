Router.map(function(){
	this.route('frLogin', {path: "/", layoutTemplate: "frLayout"});
	this.route('frAppointmentListing', {path:'/frAppointmentListing', layoutTemplate:'frLayout'});
	this.route('frLanding', {path:'/frLanding', layoutTemplate:'frLayout'});
	//this.route('frComponents', {path:'/frComponents', layoutTemplate:'frLayout'});
});
Router.map(function(){
	this.route('frLogin', {path: "/", layoutTemplate: "smtMrLayout"});
	this.route('frAppointmentListing', {path:'/frAppointmentListing', layoutTemplate:'frLayout'});
	this.route('frLanding', {path:'/frLanding', layoutTemplate:'frLayout'});
});
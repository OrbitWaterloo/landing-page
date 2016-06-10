'use strict';

/**
 * @ngdoc function
 * @name landingOrbitApp.controller:ViewdataCtrl
 * @description
 * # ViewdataCtrl
 * Controller of the landingOrbitApp
 */
angular.module('landingOrbitApp')
  .controller('ViewdataCtrl', function () {
    
    //  Use this link for figuring out icons http://fontawesome.io/icons/?utm_source=www.qipaotu.com
	this.services = [
		{
			title: "Comptetive Princing",
			imgSrc: "../../images/services/cheaper.svg",
			textBody: "Orbit lets you pick WHERE and WHEN you advertisement to be shown."
		},
		{
			title: "High Conversion Rate",
			imgSrc: "../../images/services/conversion_rate.svg",
			textBody: "Choose the geographical region where you want to be advertized."
		},
		{
			title: "Two Hour Lead Time",
			imgSrc: "../../images/services/lead_time.svg",
			textBody: "Feel free to share your business promotional coupon/NFC codes to engage more customer."
		},
		{
			title: "Custom Tailored Solutions",
			imgSrc: "../../images/services/custom_solutions.svg",
			textBody: "Orbit lets you pick WHERE and WHEN you advertisement to be shown."
		},
		{
			title: "Detailed Reports",
			imgSrc: "../../images/services/reports.svg",
			textBody: "Choose the geographical region where you want to be advertized."
		},
		{
			title: "Personal Account Manager",
			imgSrc: "../../images/services/account_manager.svg",
			textBody: "Feel free to share your business promotional coupon/NFC codes to engage more customer."
		}

	];
	this.steps = [
		{
			title: "Step 1",
			imgSrc: "../../images/about/get_started.svg", 
			stepTitle: "Get Started",
			textBody: "Register your business"
		},
		{
			title: "Step 2",
			imgSrc: "../../images/about/launch.svg",
			stepTitle: "Launch Campaign",
			textBody: "Your account manager will get in touch with you shortly to understand your goals. By leveraging our platform and geofencing technology, we will provide your business with a custom solution that you need."
		},
		{
			title: "Step 3",
			imgSrc: "../../images/about/detailed_feedback.svg",
			stepTitle: "Receive Reports",
			textBody: "Confirm the advertisment campaign details."
		},
		
	];

	// Use this to add a new team member. Changes are reflected in the UI
	this.team = [
		{
			name: "Jina Kim",
			title: "Founder and CEO",
			fbUrl: "",	// facebook url
			twUrl: "",	// twitter url
			liUrl: "",	// linkiedIn url
			imgSrc: "../../images/team/1.jpg" 
		},
		{
			name: "Brenton Law",
			title: "Founder and CEO",
			fbUrl: "",	// facebook url
			twUrl: "",	// twitter url
			liUrl: "",	// linkiedIn url
			imgSrc: "../../images/team/2.jpg" 
		},
		{
			name: "Tyler Zhang",
			title: "Lead Developer and CTO",
			fbUrl: "",	// facebook url
			twUrl: "",	// twitter url
			liUrl: "",	// linkiedIn url
			imgSrc: "../../images/team/3.jpg" 
		},
	];
  });

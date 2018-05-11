var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.countdownInstance=Handlebars.template({1:function(t,n,a,e){var s;return'<span class="pane-control metric-list-item-control metric-list-item-pin'+(null!=(s=n.if.call(t,null!=t?t.pinned:t,{name:"if",hash:{},fn:this.program(2,e,0),inverse:this.noop,data:e}))?s:"")+'"><svg class="icon icon-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.715 481.715"><path d="M470.951 106.124L375.59 10.765c-14.352-14.352-37.611-14.352-51.976 0a36.695 36.695 0 0 0-10.762 25.965c0 7.133 2.114 14.055 5.938 19.961L191.378 166.288c-13.12-6.07-27.472-9.416-42.217-9.416a100.534 100.534 0 0 0-71.104 29.459c-13.763 13.777-13.763 36.086 0 49.863l57.309 57.324L0 481.714l188.197-135.365 57.309 57.31c13.76 13.762 36.1 13.762 49.879 0a100.597 100.597 0 0 0 29.439-71.103c0-14.729-3.327-29.08-9.397-42.186l109.615-127.443c5.889 3.82 12.794 5.938 19.929 5.938a36.684 36.684 0 0 0 25.98-10.777c14.352-14.353 14.352-37.612 0-51.964z"/></svg></span>'},2:function(t,n,a,e){return" active "},4:function(t,n,a,e){return'<span class="pane-control metric-list-item-control metric-list-item-random active"><svg class="icon icon-random" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.988 26.988"><path d="M24.842.615H2.147A2.144 2.144 0 0 0 0 2.76v21.467c0 1.184.958 2.145 2.147 2.145h22.695a2.147 2.147 0 0 0 2.146-2.145V2.76A2.147 2.147 0 0 0 24.842.615zM6.167 8.779a2.779 2.779 0 1 1 .001-5.557 2.779 2.779 0 0 1-.001 5.557zm7.328 7.492a2.777 2.777 0 1 1 2.778-2.777 2.778 2.778 0 0 1-2.778 2.777zm7.669 7.348a2.778 2.778 0 0 1 0-5.554 2.778 2.778 0 0 1 0 5.554zm-.159-14.793a2.778 2.778 0 0 1-2.779-2.775 2.778 2.778 0 0 1 5.556 0 2.776 2.776 0 0 1-2.777 2.775zm-14.77 14.73a2.777 2.777 0 1 1 .002-5.554 2.777 2.777 0 0 1-.002 5.554z"/></svg></span> '},6:function(t,n,a,e){return'<span class="pane-control metric-list-item-control metric-list-item-unarchive" title="Unarchive"><svg class="icon icon-unarchive" title="Unarchive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.53 438.53"><path d="M421.12,134.19q-17.4-40.54-46.81-69.95t-70-46.82a216.26,216.26,0,0,0-166.3-1.57A221.7,221.7,0,0,0,68.24,60.53L31.12,23.7q-8.57-8.86-19.7-4Q0,24.56,0,36.55v127.9A17.56,17.56,0,0,0,5.43,177.3a17.56,17.56,0,0,0,12.85,5.43h127.9q12,0,16.85-11.42,4.84-11.15-4-19.71l-39.12-39.39a141.7,141.7,0,0,1,45.69-29,144.9,144.9,0,0,1,53.67-10.14A142.56,142.56,0,0,1,276,84.65a144.79,144.79,0,0,1,77.94,77.95,144.69,144.69,0,0,1,0,113.34A144.79,144.79,0,0,1,276,353.89a145,145,0,0,1-172-45.26q-2-2.85-6.57-3.43a10.28,10.28,0,0,0-7.14,2.57l-39.11,39.4A8.49,8.49,0,0,0,48.68,353a10.24,10.24,0,0,0,1.86,6.43,214.2,214.2,0,0,0,75.37,58.38,217.74,217.74,0,0,0,93.36,20.7,213.31,213.31,0,0,0,85.08-17.41q40.54-17.42,69.95-46.82t46.82-69.95a216.59,216.59,0,0,0,0-170.16Z" transform="translate(0 0)"/></svg></span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,a,e){var s,l,i=n.helperMissing,o="function",c=this.escapeExpression;return'<div title="'+c(typeof(l=null!=(l=n.friendlyDate||(null!=t?t.friendlyDate:t))?l:i)===o?l.call(t,{name:"friendlyDate",hash:{},data:e}):l)+'">\n\t<div class="metric-stat">\n\t\t<span class="metric-stat-number">'+c(typeof(l=null!=(l=n.time||(null!=t?t.time:t))?l:i)===o?l.call(t,{name:"time",hash:{},data:e}):l)+'</span><span class="metric-stat-unit">'+c(typeof(l=null!=(l=n.unit||(null!=t?t.unit:t))?l:i)===o?l.call(t,{name:"unit",hash:{},data:e}):l)+'</span>\n\t</div>\n\t<span class="metric-label-wrapper">\n\t\t<span class="metric-label">'+c(typeof(l=null!=(l=n.nameOrPlaceholder||(null!=t?t.nameOrPlaceholder:t))?l:i)===o?l.call(t,{name:"nameOrPlaceholder",hash:{},data:e}):l)+'</span>\n\t\t<span class="metric-tooltip">Randomly Displayed</span>\n\t</span>\n\n\t<span class="metric-message"></span>\n</div>\n<div class="pane-controls metric-list-item-controls">\n\t\x3c!--\n\t--\x3e<span class="pane-control metric-list-item-control metric-list-item-edit"><svg class="icon icon-gear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274"><path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z"></path></svg></span>\n\n\t'+(null!=(s=n.unless.call(t,null!=t?t.archived:t,{name:"unless",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?s:"")+"\n\n\t"+(null!=(s=n.if.call(t,null!=t?t.random:t,{name:"if",hash:{},fn:this.program(4,e,0),inverse:this.noop,data:e}))?s:"")+"\n\t"+(null!=(s=n.if.call(t,null!=t?t.archived:t,{name:"if",hash:{},fn:this.program(6,e,0),inverse:this.noop,data:e}))?s:"")+"\n</div>\n"},useData:!0}),addin.templates.editCountdown=Handlebars.template({1:function(t,n,a,e){var s=this.lambda,l=this.escapeExpression;return'\t\t\t\t\t<option value="'+l(s(t,t))+'">'+l(s(t,t))+"</option>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,n,a,e){var s,l;return'<section class="pop-body pane-body">\n\t<div class="input-group">\n\t\t<label for="countdown-name">Name</label>\n\t\t<input type="text" name="countdown-name" id="countdown-name" class="countdown-name" placeholder="'+this.escapeExpression("function"==typeof(l=null!=(l=n.placeholder||(null!=t?t.placeholder:t))?l:n.helperMissing)?l.call(t,{name:"placeholder",hash:{},data:e}):l)+'">\n\t</div>\n\n\t<div class="input-group">\n\t\t<label>Date</label>\n\n\t\t<div class="select-wrapper">\n\t\t\t<select name="month" id="month" class="month">\n\t\t\t\t<option value="01">Jan</option>\n\t\t\t\t<option value="02">Feb</option>\n\t\t\t\t<option value="03">Mar</option>\n\t\t\t\t<option value="04">Apr</option>\n\t\t\t\t<option value="05">May</option>\n\t\t\t\t<option value="06">Jun</option>\n\t\t\t\t<option value="07">Jul</option>\n\t\t\t\t<option value="08">Aug</option>\n\t\t\t\t<option value="09">Sep</option>\n\t\t\t\t<option value="10">Oct</option>\n\t\t\t\t<option value="11">Nov</option>\n\t\t\t\t<option value="12">Dec</option>\n\t\t\t</select >\n\t\t</div>\n\n\t\t<div class="select-wrapper">\n\t\t\t<select name="day" id="day" class="day"></select>\n\t\t</div>\n\n\t\t<div class="select-wrapper countdown-year-group">\n\t\t\t<select name="year" id="year" class="year">\n'+(null!=(s=n.each.call(t,null!=t?t.years:t,{name:"each",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?s:"")+'\t\t\t\t<option value="other">Other</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class="input-group countdown-year-other-group">\n\t\t\t<input type="text" id="countdown-year-other" name="countdown-year-other" placeholder="yyyy" size="4" class="countdown-year-other"><span class="option-cancel countdown-year-other-cancel">✕</span>\n\t\t</div>\n\t</div>\n\n\t<div class="option-wrapper add-time">\n\t\t<div class="option-action add-time-action"><span>Add a time</span> <span>&nbsp;&nbsp;<i class="icon icon-angle-down"></i><i class="icon icon-angle-down time-collapse"></i></span></div>\n\t\t<div class="option-form add-time-group">\n\t\t\t<div class="select-wrapper select-hour">\n\t\t\t\t<select name="hour" id="hour"></select>\n\t\t\t</div><span class="hour-punctuation">:</span>\n\n\t\t\t<div class="select-wrapper">\n\t\t\t\t<select name="minute" id="minute"></select>\n\t\t\t</div>\n\n\t\t\t<div class="select-wrapper period">\n\t\t\t\t<select name="period" id="period">\n\t\t\t\t\t<option value="AM">AM</option>\n\t\t\t\t\t<option value="PM">PM</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="metric-edit-controls">\n\t\t<span class="error-message"><span class="save-error"></span></span>\n\t\t<span class="button save">Save</span>\n\t</div>\n</section>\n'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.add-time-action span{position:relative}.add-time .icon{position:absolute;top:0;left:0}.add-time .time-collapse{transition:all .15s ease;opacity:0}.add-time.active .time-collapse{transform:rotateZ(180deg) translateY(-5px);opacity:1}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Countdowns = m.collect.SyncedCollection.extend({
	initialize: function (options) {
		options  = options || {}
		options.name = 'countdown'
		options.model = addin.models.Countdown
		m.collect.SyncedCollection.prototype.initialize.call(this, options)
	},
	findPinned: function(){
		return this.filter(function (metric) {
			return !metric.get('deleted') && !metric.get('archived') && metric.get('pinned')
		})
	}
})

/*
 Model    : `Countdown`
 Purpose  : Tracks the time remaining from the current date to a user-entered date.
            E.g. 27 days until wedding.
 Fields   :
 `name`      : The display label of the countdown
 `date`      : The date of the event being counted down to
 `hasHours`  : true if the countdown has a resolution of hours, false if simply days
 `past`      : true if `date` is in the past
 `isNew`     : true if the user hasn't yet seen the countdown
*/

addin.models.Countdown = Backbone.Model.extend({
    defaults: function () {
        return {
            name: '',
			pinned: false,
            date: this.initDate(),
            hasHours: false,
            past: false,
            isNew: true,
			deleted: false,
			archived: false,
			serverSetId: false
        }
    },

    placeholder: 'Countdown',

    getNameOrPlaceholder: function () {
        return this.get('name') || this.placeholder
    },

    // Helper function to add `days` to `date`
    dateAddDays: function (date, days) {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result
    },

    // Return the initial date for the countdown, with time of 00:00:00 in UTC
    initDate: function () {
        var date = this.dateAddDays(new Date(), 7)
        date.setHours(0, 0, 0, 0)
        date = this.toUTC(date)
        return date
    },

    // Convert from local time to UTC
    toUTC: function(date) {
        return toUTC(date);
    },

	// Reset the model so the user can enter new data
	// TODO when supporting multiple countdowns, archive the current model and create a new one rather than resetting the current model
    reset: function () {
        this.save({name: '', date: this.initDate(), hasHours: false, past: false, isNew: false})
    },
	getViewData: function() {
		var time = this.formatTime()
		var currentYear = new Date().getFullYear()
		this.lastSelectedYear = currentYear
		this.years = []
		for (var i = currentYear; i < currentYear + 5; i++) this.years.push(i)
		return {

			id: this.get('id'),
			pinned: this.get('pinned'),
			date: this.toLocalTime(this.get('date')),
			friendlyDate: getFriendlyDate(this.get('date')),
			time: time.number,
			unit: time.unit,
			nameOrPlaceholder: this.getNameOrPlaceholder(),
			placeholder: this.placeholder,
			years: this.years,
			archived: this.get('archived'),
			random: false
		}
	},
	formatTime: function () {
		var time = this.calculateTimeLeft()
		var hasHours = this.get('hasHours')
		var past = this.get('past')
		var number = ""
		var unit = ""

		if (hasHours && time.minutes < 60) {
			number = time.minutes
			unit = "m"
		} else if (hasHours && time.hours < 24) {
			number = time.hours
			unit = "h"
		} else {
			// if it's in the past, adjust time.days down by one because we rounded up
			if (past) time.days--
			number = time.days
			unit = "d"
		}

		if (past) unit = unit + " ago"

		if (!hasHours && past && time.hours < 24) {
			number = "Today"
			unit = ""
		}

		return {
			'number': number,
			'unit': unit
		}
	},
	calculateTimeLeft: function () {
		var then = this.toLocalTime(this.get('date'))
		var now = new Date()
		var minutes = Math.abs((then - now) / (1000 * 60))

		var past = false
		if (now > then) past = true
		if(past != this.get('past'))
			this.save('past', past, {silent: true})

		return {
			"days": Math.ceil(minutes / 60 / 24),
			"hours": Math.floor(minutes / 60),
			"minutes": Math.floor(minutes)
		}
	},

	getDetailViewVariables: function () {
		return { years: this.years, placeholder: this.placeholder}
	},

	toLocalTime: function (dateStr) {
		dateStr = dateStr || this.get('date')
		var date = new Date(dateStr)
		return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
	},

	isCountdownToday: function () {
		var then = this.toLocalTime(this.get('date'))
		var now = new Date()
		return (then.setHours(0, 0, 0, 0) == now.setHours(0, 0, 0, 0))
	},
	togglePinned: function(){
		this.save('pinned', !this.get('pinned'));
	},
	toggleArchive: function(){
		this.save('archived', !this.get('archived'));
	},
	delete: function(){
		this.save('deleted', true)
	}

})

/* Manager class to abstract out logic around countdowns + handle syncing with server */
addin.models.CountdownManager = Backbone.Model.extend({
    initialize: function () {
		addin.collect.countdowns = this.collection = new addin.collect.Countdowns()
        this.collection.fetch({reset: true})
    }
})

addin.views.Countdown = Backbone.View.extend({
	events: {
		"click .option-action": "toggleTimeOptions",
		"click .time-cancel": "cancelTime",
		"click .countdown-year-other-cancel": "cancelYearOther",
		'blur .countdown-year-other': 'handleBlurYearOther',
		'keydown .countdown-year-other': 'onKeydownCountdownYearOther',
		"change select": "changeSelect",
		"keyup #countdown-name": "checkName",
		"blur #countdown-name": "updateCountdown",
		"change #day": "updateCountdown",
		"change #year": "updateYear",
		"change #month": "updateCountdown",
		"change #period": "updateCountdown",
		"change #hour": "updateCountdown",
		"change #minute": "updateCountdown",
		"change #countdown-year-other": "updateCountdown",
		"click .save": "saveCountdown"
	},

	initialize: function (options) {
		this.collection = options.collection
		this.parentView = options.parentView
		var self = this
		setInterval(function () {
			self.updateWidget()
		}, 5000)

		var currentYear = new Date().getFullYear()
		this.lastSelectedYear = currentYear
		this.years = []
		for (var i = currentYear; i < currentYear + 5; i++) this.years.push(i)

		this.render()
	},

	render: function () {

		return this
	},

	// Update metric and popup to reflect changes in model (covers case where model
	// was changed by this view, and case where model was changed by account sync)
	onChange: function () {
		this.updateWidget()
		this.editDetail()
	},

	collectElements: function () {
		this.$popup = this.$('.widget-pop')
		this.$name = this.$('#countdown-name')
		this.$year = this.$('#year')
		this.$yearOther = this.$('#countdown-year-other')
		this.$month = this.$('#month')
		this.$day = this.$('#day')
		this.$addTime = this.$('.add-time')
		this.$hour = this.$('#hour')
		this.$minute = this.$('#minute')
		this.$period = this.$('.period')
		this.$periodOptions = this.$('#period option')
		this.$time = this.$('.time');
		this.$format = this.$('.format');
		this.$save = this.$('.save');
		this.updateWidget()
		this.collectedElements = true
	},

	checkName: function (e) {
		if(!this.$name)
			return
		var empty = this.$name.val().trim().length == 0
		this.$save.toggleClass('disabled', empty)
		this.saveDisabled = empty
		if(!empty && this.model && e.keyCode == 13){
			this.update(true)
		}
	},
	updateWidget: function () {
		var self = this
		this.collection.models.forEach( function(model){
			self.updateWidgetInstance(model)
		})
	},

	updateWidgetInstance: function (model) {

	},
	startAdding: function (e) {
		var self = this
		this.resetView()
		this.$el.find('.save').show()
		setTimeout(function () {self.$el.find('.metric-edit-input').first().focus()}, 50);
	},
	updateYear: function (e) {
		if(e.currentTarget.value == 'other') {
			var year = this.lastSelectedYear
			this.$yearOther.val(year)
		} else
			this.lastSelectedYear = parseInt(e.currentTarget.value)
		this.update()
	},
	focus: function () {
		this.$name.focus()
	},
	update: function (switchView) {
		this.$el.find('.error-message').hide()
		if(this.model)
			this.save(this.model, false, switchView)
	},
	updateCountdown: function () {
		this.update()
	},
	saveCountdown: function () {
		var model = this.save(null, true)
		if(model)
			this.parentView.selectMetricById(model.get('id'))
	},
	save: function (model, create, switchView) {
		var empty = this.$name.val().trim().length == 0
		if(empty) {
			this.$name.focus()
			return;
		}
		var name = capitalizeWords(this.$name.val().trim())
		var hasHours = this.$addTime.is('.active') ? true : false
		// Save date in UTC on model (displayed in local time on edit popup)
		var hour = parseInt(this.$('#hour').val()) || 0
		var period = this.$('#period').val()
		if (m.models.customization.get('hour12clock')) {
			if(hour==12 && period=='AM')
				hour = 0
			else if(period == 'PM' && hour != 12)
				hour += 12

		}
		var localDate = new Date(this.getYear(), parseInt(this.$month.val())-1, this.$day.val(), hour, this.$('#minute').val(), 0, 0)

		var date = toUTC(localDate)
		var modelData = {
			'name': name,
			'date': date,
			'hasHours': hasHours
		}
		if(create) {
			this.model = this.collection.create(modelData, {createdNow: true, ignoreRender: true})
			this.parentView.createMetric(this.model)
		}
		else {
			model.save(modelData, {ignoreRender: true})
			this.parentView.updateMetric(model, switchView)
		}
		return model || this.model
	},

	getYear: function () {
		var year = this.$year.val()
		if (year === 'other') year = this.$yearOther.val()
		return year
	},

	// Only allow positive integers to be entered as other year
	onKeydownCountdownYearOther: function (e) {
		// Allow: backspace, delete, tab, escape, and enter
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
				// Allow: Ctrl/cmd+A
				(e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
				// Allow: Ctrl/cmd+C
				(e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
				// Allow: Ctrl/cmd+X
				(e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
				// Allow: home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)) {
			// let it happen, don't do anything
			return
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) e.preventDefault()
	},

	// Default to current year if left blank
	handleBlurYearOther: function () {
		var now = new Date()
		if (!this.$yearOther.val()) this.$yearOther.val(now.getFullYear())
	},
	editDetail: function (model) {
		this.model = model;
		this.collectElements()
		// Update name in case changed by account sync
		this.$name.val(model.get('name'))
		// Set select options to existing settings
		var cdDate = model.toLocalTime(),
			cdYear = cdDate.getFullYear(),
			otherYear = !_.contains(this.years, cdYear),
			hour12clock = m.models.customization.get('hour12clock')

		this.$('#month option').eq(cdDate.getMonth()).prop('selected', true)
		if (otherYear) {
			this.$year.val('other')
			this.$yearOther.val(cdYear)
			this.$popup.addClass('show-other')
		} else {
			this.$('#year option[value="' + cdYear + '"]').prop('selected', true)
			this.$yearOther.val('')
			this.$popup.removeClass('show-other')
		}
		this.populateDays()
		this.$dayOptions.eq(cdDate.getDate() - 1).prop('selected', true)

		this.populateTimeOptions(hour12clock)
		this.selectTimeOptions(model, cdDate, hour12clock)
		this.$el.find('.save').hide()
		this.$el.find('.error-message').hide()
	},

	// Populate the days select box with the appropriate number of days for the month & year selected
	populateDays: function () {
		var month = this.$month.val()
		var year = this.$year.val()
		if (year === 'other') year = this.lastSelectedYear || this.getYear()
		var day = this.$day.val()
		var numDays = this.numDaysInMonth(year, month)
		this.$day.empty()
		for (var i = 1; i < numDays + 1; i++) this.$day.append('<option>' + i + '</option>')
		this.$dayOptions = this.$('#day option') // Note: initialize variable here, not in render, because day options don't exist until created in this function
		// Reselect previously selected day, bumping down previously selected day if DNE in current month
		if (day > numDays) day = numDays
		if (day) this.$dayOptions.eq(day - 1).prop('selected', true)
	},

	// Populate the time select boxes with appropriate options for 12/24h
	populateTimeOptions: function (hour12clock) {
		var i
		if (hour12clock) {
			this.$period.css('display', 'inline-block')
			this.hours = [12] // Start hours with 12, not 1
			for (i = 1; i < 12; i++) this.hours.push(i)
		} else {
			this.$period.css('display', 'none')
			this.hours = []
			for (i = 0; i < 24; i++) this.hours.push(twoDigit(i))
		}
		this.$hour.empty()
		for (i = 0; i < this.hours.length; i++) this.$hour.append('<option>' + this.hours[i] + '</option>')
		this.$hourOptions = this.$('#hour option')

		this.minutes = []
		for (i = 0; i < 60; i++) this.minutes.push(twoDigit(i))
		this.$minute.empty()
		for (i = 0; i < this.minutes.length; i++) this.$minute.append('<option>' + this.minutes[i] + '</option>')
		this.$minuteOptions = this.$('#minute option')
	},

	selectTimeOptions: function (model, countdownDate, hour12clock) {
		if (model.get('hasHours')) {
			var hour = countdownDate.getHours()
			if (hour12clock) {
				var period = 'AM'
				if (hour >= 12) {
					hour -= 12
					period = 'PM'
				}
				this.$("#period option[value='" + period + "']").prop('selected', true)
			}
			this.$hourOptions.eq(hour).prop('selected', true)
			this.$minuteOptions.eq(countdownDate.getMinutes()).prop('selected', true)
			this.$addTime.addClass('active')
		} else {
			this.resetHours()
		}
	},

	// Helper function to return the number of days in `year` and `month` (integer 1-12)
	numDaysInMonth: function (year, month) {
		// Month in next line is 0-11, so we are setting `d` to the zeroth day of the next month to find last day of current month
		var d = new Date(year, month, 0)
		return d.getDate()
	},

	// Save model when any select box changes. If month or year changes, ensure days option list is valid
	changeSelect: function (e) {
		var $select = $(e.currentTarget)
		if ($select.is('#year')) {
			if (this.$year.val() === 'other') {
				this.showOther()
				return
			} else {
				this.lastSelectedYear = this.$year[0].options[this.$year[0].selectedIndex].value
			}
		}
		if ($select.is('#month') || $select.is('#year')) this.populateDays()
	},

	showOther: function() {
		this.$popup.addClass('show-other')
		this.$yearOther.focus()
	},

	cancelYearOther: function(e) {
		this.$popup.removeClass('show-other')
		this.$year[0].value = this.lastSelectedYear
		this.update()
	},

	togglePopup: function (e) {
		this.$popup.hasClass('show') ? this.hidePopup(e) : this.showPopup()
	},
	cancelTime: function (e) {
		var self = this
		this.resetHours()
		var detailView = this.$el.find('.metric-detail-specific')
		setTimeout( function(){
			self.$el.find('.subpanes').css('max-height', detailView.closest('.subpane').outerHeight() + 'px')
		}, 1)
	},

	resetTimeOptions: function () {
		this.$hourOptions.eq(0).prop('selected', true)
		this.$minuteOptions.eq(0).prop('selected', true)
		this.$periodOptions.eq(0).prop('selected', true)
		this.update()
	},
	// Helper function to hide hours section of popup and set options to 0
	resetHours: function () {
		if(!this.$addTime || !this.$addTime.hasClass('active'))
			return
		this.$addTime.removeClass('active')
		this.resetTimeOptions()
	},

	resetView: function () {
		this.model = null;
		this.$el.find('.metric-detail-specific').html(addin.templates.editCountdown({ years: this.years, placeholder: "Countdown", createMode: true}))
		this.collectElements()
		this.populateDays()
		this.populateTimeOptions()
		this.resetHours()
		this.$name.val('')
		var countdownDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
		this.lastSelectedYear = countdownDate.getFullYear()
		this.$('#month option').eq(countdownDate.getMonth()).prop('selected', true)
		this.$('#year option[value="' + countdownDate.getFullYear() + '"]').prop('selected', true)
		this.$dayOptions.eq(countdownDate.getDate() - 1).prop('selected', true)
		this.$el.find('.error-message').hide()
		this.$save.addClass('disabled')
		this.saveDisabled = true
	},

	toggleTimeOptions: function (e) {
		var $parent = $(e.currentTarget).parent()
		var expanding = true
		if($parent.hasClass('active')) {
			expanding = false
			$parent.addClass('height-animate')
			setTimeout( function(){
				$parent.removeClass('height-animate')
			}, 500)
		}
		var self = this
		setTimeout( function(){
			$parent.toggleClass('active')
			if(!$parent.hasClass('active'))
				self.resetTimeOptions()
			var detailView = self.$el.find('.metric-detail-specific')
			setTimeout( function(){
				self.$el.find('.subpanes').css('max-height', detailView.closest('.subpane').outerHeight() + 'px')
			}, expanding?5:500)
		}, 1)

	}
})

/* Instantiations */
addin.models.countdownManager = new addin.models.CountdownManager()
addin.styles.style()
addin.views.countdown = m.widgetManager.handover('countdown', m.views.BaseMetric, {
	model: addin.models.countdown,
	region: 'top-right',
	order: 'append',
	metricType: 'Countdown',
	metricTitle: 'Countdowns',
	metricDescription: 'Count down the days until an important date',
	collection: addin.collect.countdowns,
	instanceView: addin.views.Countdown,
	instanceTemplate: addin.templates.countdownInstance,
	detailTemplate: addin.templates.editCountdown,
	updateInterval: 60000//1min
});
m.widgets.push(addin.views.countdown)

 }); if(m.addinManager) {m.addinManager.registerAddinFn("fb230b62-96ce-44b5-87c5-4a563553038b", fn_addin);}
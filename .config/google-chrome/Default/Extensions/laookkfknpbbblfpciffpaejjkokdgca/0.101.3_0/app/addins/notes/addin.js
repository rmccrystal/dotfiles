var fn_addin = (function (m, $) { var addin = addin || {}; addin.styles=addin.styles||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.templates=addin.templates||{},addin.templates.detail=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s;return'<div class="header notes-detail-header">\n\t<span class="action action-back" title="Back"><i class="icon icon-angle-left"></i></span>\n\n\t<span class="notes-detail-title"></span>\n\n\t<span class="action-right-group">\n\t\t<span class="action action-new" title="New Note"><i class="icon icon-plus"></i></span>\x3c!--\n\t\t--\x3e<span class="action action-delete" title="Delete"><i class="icon icon-trash"></i></span>\n\t</span>\n\n\t<span class="delete-group" title="">\n\t\t<span class="delete delete-msg">Delete?</span>\x3c!--\n\t\t--\x3e<span class="delete delete-loading">Deleting...</span>\x3c!--\n\t\t--\x3e<span class="delete delete-failed clickable" title="Click to retry">Trouble connecting...</span>\x3c!--\n\t\t--\x3e<span class="delete delete-yes clickable">Yes</span>\x3c!--\n\t\t--\x3e<span class="delete delete-no clickable">No</span>\n\t</span>\n</div>\n\n<div class="note-body"><textarea contenteditable="true" class="notes-input notes-textarea">'+this.escapeExpression("function"==typeof(s=null!=(s=e.body||(null!=t?t.body:t))?s:e.helperMissing)?s.call(t,{name:"body",hash:{},data:a}):s)+"</textarea></div>"},useData:!0}),addin.templates.item=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,l=e.helperMissing,i="function",o=this.escapeExpression;return'<div class="notes-list-title-group">\n\t<span class="notes-list-title">'+o(typeof(s=null!=(s=e.title||(null!=t?t.title:t))?s:l)===i?s.call(t,{name:"title",hash:{},data:a}):s)+'</span>\x3c!--\n\t--\x3e<span class="notes-list-date">'+o(typeof(s=null!=(s=e.updatedDate||(null!=t?t.updatedDate:t))?s:l)===i?s.call(t,{name:"updatedDate",hash:{},data:a}):s)+'</span>\n</div>\n<span class="notes-list-body">'+o(typeof(s=null!=(s=e.body||(null!=t?t.body:t))?s:l)===i?s.call(t,{name:"body",hash:{},data:a}):s)+"</span>"},useData:!0}),addin.templates.list=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<div class="notes-list-group">\n\t<div class="notes-list-header"></div>\n\t<div class="notes-empty loading">\n\t\t<p class="notes-empty-loading"><i class="loading-icon"></i>Loading...</p>\n\t\t<div class="notes-empty-new">\n\t\t\t<p class="notes-empty-title">Take quick notes and store wisdom to view later.</p>\n\t\t\t<p class="notes-empty-description">No notes yet. Add a note to get started!</p>\n\t\t</div>\n\t</div>\n\t<ol class="list notes-list"></ol>\n\t<div class="notes-new-container">\n\t\t<input class="notes-input notes-new" type="text" placeholder="New Note">\n\t\t<i class="loading-icon notes-new-loading"></i>\n\t\t<i class="error-icon notes-new-error" title="Trouble connecting... Click to retry">!</i>\n\t</div>\n</div>'},useData:!0});
addin["styles"] = addin["styles"] || {};
addin["styles"]["style"] = function() { var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.notes-detail .clickable,.notes-empty-new,.notes-list-item{cursor:pointer}.notes-pane{height:450px;width:450px;max-width:450px;overflow:hidden}.notes-pane.nipple-bottom-right:before{right:26px}.notes-list-header{padding:17px 0 0}.notes-empty{height:392px;padding-top:24px;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;text-align:center;-webkit-user-select:none;user-select:none}.notes-empty p{padding:0}.notes-empty-loading{display:none}.loading .notes-empty-loading{display:block}.loading .notes-empty-description,.loading .notes-empty-title,.notes-list{display:none}.notes-empty-title{margin:0 0 10px;font-size:110%;font-weight:500;opacity:.75}.notes-empty-description{margin:0;font-size:95%;opacity:.575}.notes-list{height:392px;overflow:auto}.notes-new-container{position:relative}.notes-new-loading{height:11px;width:11px;position:absolute;top:13px;right:10px;display:none;border-width:1px}.loading .notes-new-loading{display:inline}.notes-new-error{height:14px;width:14px;position:absolute;top:12px;right:16px;display:none;border-radius:100%;text-align:center;-webkit-user-select:auto;user-select:auto}.failed .notes-new-error{display:inline}.notes-list-date,.notes-list-title{display:inline-block;vertical-align:top}.notes-list-item{padding:8px 15px;position:relative;font-size:93.75%;-webkit-transition:color .05s ease}.notes-list-body,.notes-list-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.notes-list-title{max-width:320px;font-weight:500;opacity:.8}.notes-list-item.selected .notes-list-title,.notes-list-item:hover .notes-list-title{opacity:1}.notes-list-date{margin-top:3px;padding-left:9px;font-size:80%;opacity:.4}.notes-list-item.selected .notes-list-date,.notes-list-item:hover .notes-list-date{opacity:.6}.f--default .notes-list-date{margin-top:4px}.f--startup .notes-list-date{margin-top:8px}.f--quirky .notes-list-date{margin-top:2px}.notes-list-body{margin-top:3px;display:block;font-size:86.667%;opacity:.5}.notes-list-item.selected .notes-list-body,.notes-list-item:hover .notes-list-body{opacity:.8}.notes-list-item.selected{box-shadow:inset 4px 0 0 0 rgba(255,255,255,.6);z-index:10}.light .notes-list-item.selected{box-shadow:inset 4px 0 0 0 rgba(0,0,0,.4);z-index:10}.notes-input{width:100%;background:0 0;border:0;box-sizing:border-box;font-size:15px;opacity:.7;outline-width:0}.notes-new{padding:11px 15px 13px}.notes-detail-header{height:35px;padding:5px 0!important;line-height:35px;text-align:center;-webkit-user-select:none;user-select:none}.notes-detail-title{display:inline-block;font-size:75%;line-height:37px;opacity:.45;-webkit-user-select:text;user-select:text;vertical-align:top}.notes-detail-header .action-back{position:absolute;left:0;top:0}.notes-detail-header .action-right-group,.notes-detail-header .delete-group{position:absolute;right:0;top:0}.notes-detail .action{height:40px;width:30px;display:inline-block;cursor:pointer;line-height:45px;opacity:.4;text-align:center;vertical-align:top}.notes-detail .action:hover{opacity:1}.notes-detail .action-back{padding:0 50px 5px 5px;float:left;font-size:140%;opacity:.5}.notes-detail .action-new{padding-left:5px}.notes-detail .action-new i{vertical-align:-3%}.notes-detail .action-delete{padding-right:5px;font-size:95%}.notes-detail .delete-group{height:35px;padding-right:7px;display:none;line-height:43px}.notes-detail .clickable:hover{opacity:1}.notes-detail .clickable:active{opacity:.6}.notes-detail .delete{padding:8px 4px;font-size:81.25%;opacity:.5}.notes-detail .delete-failed,.notes-detail .delete-group.loading .delete,.notes-detail .delete-loading{display:none}.notes-detail .delete-group.loading .delete-loading{display:inline}.notes-detail .delete-group.failed .delete{display:none}.notes-detail .delete-group.failed .delete-failed{display:inline}.notes-textarea{height:390px;padding:0 15px;font-size:15px;line-height:140%;opacity:.9;resize:none;vertical-align:top}';document.getElementsByTagName('head')[0].appendChild(style);};
addin.collect.Notes = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("notes"),
	baseUrl: m.globals.urlRootApi + 'notes',
	notes_version: '1.0.3',

	initialize: function () {
		this.model = addin.models.Note
		this.listenTo(this, 'change', this.onChange)
		this.listenTo(this, 'reset', this.onReset)
		this.listenTo(this, 'add', this.onAdd)
		window.addEventListener('storage', this.handleStorageEvent.bind(this), false)
	},

	handleStorageEvent: function (e) {
		if (!this.removing_items && e.key.slice(0, 5) == 'notes') {
			this.fetch()
		}
	},

	activeNotes: function () {
		var sorted = _(this.where({ deleted: false }))
			.chain()
			.sortBy(function (item) { return -item.get('updatedDate') })
			.value()

		return sorted
	},

	// Return the Note that comes after `current` in the sorted list of active notes. Wrap to start of list if at end.
	next: function (currentNote) {
		var activeNotes = this.activeNotes()
		var currentIndex = activeNotes.indexOf(currentNote)
		var nextIndex = currentIndex == activeNotes.length - 1 ? 0 : currentIndex + 1
		return activeNotes[nextIndex]
	},

	// Return the Note that comes before `current` in the sorted list of active notes. Wrap to end of list if at start.
	prev: function (currentNote) {
		var activeNotes = this.activeNotes()
		var currentIndex = activeNotes.indexOf(currentNote)
		var prevIndex = currentIndex == 0 ? activeNotes.length - 1 : currentIndex - 1
		return activeNotes[prevIndex]
	},

	onReset: function () {
		var self = this
		var hasModels = this.models.length > 0
		if (hasModels && this.hasAttribute('changed_props')) {
			this.syncToServer(function () {
				self.fetchFromServer(function () {
					if (!hasModels) {
						if (self.models.length > 0) {
							self.trigger('active-model-changed')
						}
					}
				})
			})
		} else {
			self.fetchFromServer(function () {
				if (!hasModels) {
					if (self.models.length > 0) {
						self.trigger('active-model-changed')
					}
				}
			})
		}
	},

	findHavingAttribute: function (key) {
		return this.filter(function (model) {
			return model.has(key)
		})
	},

	findNotHavingAttribute: function (key) {
		return this.filter(function (model) {
			return !model.has(key)
		})
	},

	hasAttribute: function (key) {
		return !!this.find(function (model) {
			return model.has(key)
		})
	},

	onAdd: function (model, coll, options) {
		if (options && options.ignoreSave) return;
		this.syncToServer()
	},

	onChange: function (model, options) {
		var self = this
		if (options.ignoreSave) return

		var changed = model.changedAttributes()
		if (!changed) return
		var changed_props = null
		var newChanges = false
		for (prop in changed) {
			if (changed.hasOwnProperty(prop) && prop != 'changed_props' && prop != '_id') {
				if (!changed_props) {
					changed_props = model.get('changed_props') || []
				}
				if (!_.contains(changed_props, prop)) {
					changed_props.push(prop)
					newChanges = true
				}
			}
		}
		if (newChanges && changed_props) {
			model.save({ updatedDate: new Date() }, { silent: true, ignoreSave: true })
			changed_props.push('updatedDate')
			model.save({ changed_props: changed_props, updatedDate: Date.now() }, {
				silent: false,
				ignoreSave: true,
				success: function () {
					setTimeout(function () {
						self.syncToServer()
					}, 50)
				}
			})
		}
	},

	syncToServer: function (callback) {
		var self = this
		var changedModels = this.findHavingAttribute('changed_props')
		if (!changedModels || changedModels.length == 0) {
			changedModels = this.findNotHavingAttribute('_id')
			if (!changedModels || changedModels.length == 0) {
				if (callback) callback()
				return
			}
		}

		nimble.each(changedModels, function (model, asyncCallback) {
			var syncRequired = !model.has('_id')
			if (!syncRequired) {
				var changedProps = model.get('changed_props')
				if (!changedProps || changedProps.length == 0) {
					asyncCallback()
					return
				}
			}

			var changes = {}

			if (syncRequired) {
				var modelAttributes = model.toJSON()
				modelAttributes['_cid'] = modelAttributes['id']
				delete modelAttributes['changed_props']
				delete modelAttributes['id']
				modelAttributes.notes_version = self.notes_version
				$.ajax({
						url: self.baseUrl,
						contentType: 'application/json',
						type: "POST",
						beforeSend: m.utils.setMomentumAuthHeader,
						data: JSON.stringify(modelAttributes)
					})
					.done(function (postResult) {
						if (postResult && postResult._id) {
							model.save({ changed_props: null, _id: postResult._id }, { silent: true, ignoreSave: true })
						}
					})
					.fail(function (xhr, desc) {
						// TODO: should we do something here?
					})
					.always(function () {
						asyncCallback()
						return
					})
			} else {
				_.each(changedProps, function (prop) {
					if (prop != 'changed_props') {
						changes[prop] = model.get(prop)
					}
				})

				if ((Object.keys(changes).length == 1 && changes.hasOwnProperty('updatedDate')) ||
					(Object.keys(changes).length == 2 && changes.hasOwnProperty('updatedDate') && changes.hasOwnProperty('id'))) {
					model.save({ changed_props: null }, { silent: true, ignoreSave: true })
					asyncCallback()
					return
				}

				var url = self.baseUrl + '/' + encodeURIComponent(model.get('_id'))

				changes.notes_version = self.notes_version
				$.ajax({
						url: url,
						contentType: 'application/json',
						type: "PATCH",
						beforeSend: m.utils.setMomentumAuthHeader,
						data: JSON.stringify(changes)
					})
					.done(function (patchResult) {
						model.save({ changed_props: null }, { silent: true, ignoreSave: true })
					})
					.fail(function (xhr, desc) {
						// TODO: should we do something here?
					})
					.always(function () {
						asyncCallback()
						return
					})
			}
		}, function () {
			if (callback) callback()
		});
	},

	fetchFromServer: function (callback) {
		var self = this
		// TODO: fetch from server
		$.ajax({
				url: this.baseUrl,
				contentType: 'application/json',
				type: "GET",
				beforeSend: m.utils.setMomentumAuthHeader
			})
			.done(function (getResult) {
				if (getResult) {
					var current_ids = []
					_.each(getResult, function (item) {
						var model = self.findWhere({ id: item.id })
						if (!model) {
							model = self.findWhere({ _id: item._id })
						}
						if (model) {
							current_ids.push(model.id)
							model.save(item, { silent: true, ignoreSave: true })
						} else {
							current_ids.push(item.id)
							self.create(item, { ignoreSave: true, ignoreSave: true })
						}
					})
					var removed_ids = []
					self.each(function (note) {
						if (note.has('id') && !_.contains(current_ids, note.get('id'))) {
							removed_ids.push(note.get('id'))
						}
					})
					if (removed_ids.length > 0) {
						self.removing_items = true
						_.each(removed_ids, function (id) {
							var note = self.get(id)
							if (note) note.destroy()
						})
						self.removing_items = false
					}
				}
			})
			.fail(function (xhr, desc) {
				// TODO: should we do something here?
			})
			.always(function () {
				if (callback) callback()
			})
		// TODO: store timestamp?
	}
})

addin.models.Note = Backbone.Model.extend({
	defaults: function () {
		return {
			body: '',
			createdDate: new Date(),
			updatedDate: Date.now(),
			deleted: false
		}
	},

	constants: {
		'titleLengthGuide': 60,
		'bodyPreviewMaxLength': 150,
	},

	delete: function (options) {
		this.save({ deleted: true }, options)
	},

	generateTitle: function () {
		var body = this.get('body')
		var title, newLineIndex, endIndex

		// Empty note: use placeholder
		if (!body) return 'Empty Note'

		// If multiline note, only work with the first line when setting title
		newLineIndex = body.indexOf('\n')
		newLineIndex != -1 ? title = body.slice(0, newLineIndex) : title = body

		// Truncate title if necessary by checking for the first space after the length guideline
		endIndex = title.indexOf(' ', this.constants.titleLengthGuide - 1)
		if (endIndex != -1) title = title.slice(0, endIndex)

		return title
	},

	getBodyPreview: function () {
		var body = this.get('body')
		var title = this.generateTitle()
		var preview, newLineIndex

		// Empty note
		if (!body) return this.getRandomDelighter()

		// Short note
		if (title == body) {
			preview = 'New Note'
		// Longer note
		} else {
			preview = body.substr(title.length, this.constants.bodyPreviewMaxLength).trim()
		}

		return preview
	},

	getRandomDelighter: function () {
		var messages = [
			'Type something cool!',
			'Think of the possibilities...',
			'Record some wisdom',
			'Use your words',
			'Type a tidbit',
			'This is your canvas',
		]
		return messages[Math.floor(Math.random() * messages.length)]
	},
})
addin.views.Detail = Backbone.View.extend({
	className: 'notes-detail',
	template: addin.templates.detail,
	autosaveInterval: 10000,
	usingMouse: false,

	events: {
		'click .action-back': 'handleClickBack',
		'click .action-new': 'new',
		'click .action-delete': 'toggleDeleteConf',
		'click .delete-yes': 'handleClickDelete',
		'click .delete-no': 'toggleDeleteConf',
		'click .delete-failed': 'handleClickDelete',
		'blur .notes-textarea': 'onBlur',
	},

	initialize: function (options) {
		this.list = options.list
		this.listenTo(m, 'globalEvent:arrowLeft globalEvent:key:backspace globalEvent:esc globalEvent:metaEnter', this.handleGlobalBack)
		this.listenTo(m, 'globalEvent:metaBackspace', this.handleGlobalMetaBackspace)
		this.listenTo(m, 'globalEvent:shiftN', this.handleGlobalCtrlN)
		this.listenTo(m, 'globalEvent:metaBracketLeft', this.handleGlobalMetaBracketLeft)
		this.listenTo(m, 'globalEvent:metaBracketRight', this.handleGlobalMetaBracketRight)
		this.listenTo(m.models.customization, 'change:hour12clock', this.updateTitle)
		this.listenTo(this.model, 'change:updatedDate', this.updateTitle)
		this.listenTo(this, 'destroy', this.destroy)
		this.render()
		this.startAutosaveInterval()
	},

	render: function () {
		this.$el.html(this.template({ body: this.model.get('body') }))

		this.$noteTitle = this.$('.notes-detail-title')
		this.$actionRightGroup = this.$('.action-right-group')
		this.$deleteGroup = this.$('.delete-group')
		this.$deleteYes = this.$('.delete-yes')
		this.$textarea = this.$el.find('.notes-textarea')

		this.updateTitle()
		this.focusTextarea()

		return this
	},

	updateTitle: function () {
		this.$noteTitle.text(this.formatDate(new Date(this.model.get('updatedDate')), m.models.customization.get('hour12clock')))
	},

	destroy: function () {
		this.clearAutosaveInterval()
		this.remove()
		this.unbind()
		this.$el.html('')
	},

	onBlur: function () {
		this.saveToModel()
	},

	saveToModel: function () {
		var body = this.$textarea.val()
		this.model.save({ body: body })
	},

	startAutosaveInterval: function () {
		var self = this
		if (!this.saveNoteInterval) {
			this.saveNoteInterval = setInterval(function () {
				self.saveToModel()
			}, this.autosaveInterval)
		}
	},

	clearAutosaveInterval: function () {
		if (this.saveNoteInterval) {
			clearInterval(this.saveNoteInterval)
			this.saveNoteInterval = null
		}
	},

	focusTextarea: function () {
		var self = this
		// Focus textarea, using 0 timeout hack to get it to work
		setTimeout(function () {
			self.$textarea.focus()

			// Move cursor to end of selection, without changing scroll position (it remains at top)
			var ta = self.$textarea[0]
			ta.selectionStart = ta.selectionEnd = ta.value.length
		}, 0)
	},

	handleClickBack: function (e) {
		this.usingMouse = true
		e.stopPropagation()
		this.back()
	},

	handleClickDelete: function (e) {
		this.usingMouse = true
		e.stopPropagation()
		this.delete()
	},

	back: function () {
		this.saveToModel()
		this.list.handleBack(false)
	},

	new: function () {
		this.list.createNoteDetail()
	},

	toggleDeleteConf: function () {
		this.$deleteGroup.toggle()
		this.$deleteYes.removeClass('loading failed')
		this.$actionRightGroup.toggle()
	},

	delete: function () {
		var self = this
		self.$deleteGroup.removeClass('failed').addClass('loading')

		self.model.delete({
			wait: true,
			success: function () {
				self.$deleteGroup.removeClass('loading')
				self.list.handleBack(true)
			},
			error: function () {
				self.$deleteGroup.removeClass('loading').addClass('failed')
			},
		})
		m.sendEvent('Notes', 'Delete')
	},

	deleteViaHotkey: function () {
		this.toggleDeleteConf()
		this.delete()
	},

	handleGlobalBack: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.back()
		}
	},

	handleGlobalMetaBackspace: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.deleteViaHotkey()
		}
	},

	handleGlobalShiftN: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.list.createNoteDetail()
		}
	},

	handleGlobalMetaBracketLeft: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.saveToModel()
			this.list.detailPrevNote(this.model)
		}
	},

	handleGlobalMetaBracketRight: function (e) {
		if (this.list.open) {
			e.preventDefault();
			e.stopPropagation()
			this.saveToModel()
			this.list.detailNextNote(this.model)
		}
	},

	formatDate: function (date, hour12clock) {
		var now = new Date()
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		var yearStr = now.getFullYear() == date.getFullYear() ? '' : ', ' + date.getFullYear() // Don't show year if date is in current year

		var hours24 = date.getHours()
		var minsStr = twoDigit(date.getMinutes())
		var hoursStr
		if (hour12clock) {
			var hours12 = hours24 % 12 || 12 // Convert from 24h to 12h, with 12 instead of 0
			var period = hours24 >= 12 ? 'PM' : 'AM'
			hoursStr = hours12 + ':' + minsStr + ' ' + period
		} else {
			hoursStr = twoDigit(hours24) + ':' + minsStr
		}

		return months[date.getMonth()] + ' ' + date.getDate() + yearStr + ' at ' + hoursStr
	},
})

addin.views.Item = Backbone.View.extend({
	attributes: { class: 'list-borders notes-list-item' },
	tagName: 'li',
	template:  addin.templates.item,

	constants: {
		'days': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		'months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},

	events: {
		'click': 'handleClick',
	},

	initialize: function (options) {
		this.list = options.list
		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'change:archive change:deleted', this.remove)
		this.listenTo(m.models.customization, 'change:hour12clock', this.render)
	},

	render: function () {
		this.$placeholder = $('<li></li>').addClass('placeholder')
		this.$placeholder.appendTo(this.el)
		this.$placeholder.hide()

		var variables = {
			title: this.model.generateTitle(),
			body: this.model.getBodyPreview(),
			updatedDate: this.formatDate(new Date(this.model.get('updatedDate'))),
		}
		this.$el.html(this.template(variables))
		this.$el.attr('data-note-id', this.model.id)

		return this
	},

	destroy: function () {
		this.remove()
		this.unbind()
	},

	handleClick: function () {
		this.list.handleItemClick(this.model)
	},

	formatDate: function (date) {
		var dateInSeconds = date.getTime()
		var now = new Date()

		var today = now.setHours(0, 0, 0, 0)
		var thisWeek = now - ((now.getDay() - 1) * 24 * 60 * 60 * 1000) // subtract number of days since start of week, plus one because we're treating the week as starting on Monday
		var thisYear = now.setMonth(1, 1)

		if (dateInSeconds > today) {
			return this.formatTime(date, m.models.customization.get('hour12clock'))
		} else if (dateInSeconds > thisWeek) {
			return this.constants.days[date.getDay()]
		} else if (dateInSeconds > thisYear) {
			return this.constants.months[date.getMonth()] + ' ' + date.getDate()
		} else {
			return this.constants.months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
		}
	},

	formatTime: function (date, hour12clock) {
		var hours24 = date.getHours()
		var minsStr = twoDigit(date.getMinutes())

		if (hour12clock) {
			var hours12 = hours24 % 12 || 12 // Convert from 24h to 12h, with 12 instead of 0
			var period = hours24 >= 12 ? 'PM' : 'AM'
			return hours12 + ':' + minsStr + ' ' + period
		} else {
			return twoDigit(hours24) + ':' + minsStr
		}
	},
})
addin.views.List = Backbone.View.extend({
	attributes: { id: 'notes', class: 'pane notes-pane' },
	template: addin.templates.list,
	open: false,
	selectedNote: null,

	events: {
		'click .notes-empty-new': 'createNoteDetail',
		'keyup .notes-new': 'handleInputKeyup',
		'click .notes-new-error': 'handleClickError',
	},

	initialize: function () {
		this.$el.attr(_.result(this, 'attributes'))
		this.subViews = []
		this.render()

		this.listenTo(m, 'globalEvent:arrowUp', this.handleGlobalArrowUp)
		this.listenTo(m, 'globalEvent:arrowDown', this.handleGlobalArrowDown)
		this.listenTo(m, 'globalEvent:arrowRight globalEvent:key:enter', this.handleGlobalArrowRight)
		this.listenTo(m, 'globalEvent:key:shiftN globalEvent:key:A', this.focusOnNewNote)
		this.listenTo(m, 'globalEvent:metaBackspace', this.handleGlobalMetaBackspace)
		this.listenTo(this.collection, 'reset', this.addAll)
		this.listenTo(this.collection, 'add', this.onCollectionAdd)
		this.listenTo(this.collection, 'update', this.handleUpdate)
		this.listenTo(this.collection, 'change:updatedDate', this.handleChangeUpdatedDate)

		this.collection.fetch({ reset: true })
	},

	handleChangeUpdatedDate: function () {
		this.addAll()
	},

	render: function () {
		this.$el.html(this.template())

		this.$empty = this.$('.notes-empty')
		this.$notesListGroup = this.$('.notes-list-group')
		this.$noteList = this.$('.notes-list')
		this.$notesNewContainer = this.$('.notes-new-container')
		this.$notesNew = this.$('.notes-new')

		return this
	},

	addAll: function () {
		var self = this
		_.each(this.subViews, function (e) {
			if (e) e.destroy()
		})
		this.subViews = []
		_.each(this.collection.activeNotes(), function (note) {
			self.addOne(note, true)
		})

		// Loading of collection is now complete
		this.$empty.removeClass('loading')
		this.handleUpdate()
	},

	addOne: function (noteModel, append) {
		var noteView = new addin.views.Item({ model: noteModel, list: this })
		var $noteEl = noteView.render().el
		this.subViews.push(noteView)
		append ? this.$noteList.append($noteEl) : this.$noteList.prepend($noteEl)
	},

	onCollectionAdd: function (noteModel) {
		this.addOne(noteModel, false)
	},

	handleUpdate: function () {
		var activeNoteCount = this.collection.activeNotes().length
		if (activeNoteCount == 0) {
			this.$empty.show()
			this.$noteList.hide()
		} else {
			this.$empty.hide()
			this.$noteList.show()
			// If note was deleted via detail view and last note on list was selected, `this.selectedNote` needs to be decremented
			if (this.selectedNote == activeNoteCount) this.selectedNote--
				$(this.$('.notes-list-item')[this.selectedNote]).addClass('selected')
		}
	},

	handleItemClick: function (model) {
		this.switchToDetailView(model)
	},

	handleClickError: function (e) {
		e.stopPropagation()
		this.createNote()
	},

	switchToDetailView: function (model) {
		if (this.isDetailActive()) this.destroyDetailView()
		this.detailView = new addin.views.Detail({ model: model, list: this })
		this.selectItemById(model.id)
		this.$notesListGroup.after(this.detailView.render().el)
			.hide()
	},

	destroyDetailView: function () {
		this.detailView.destroy()
		this.detailView = null
	},

	handleBack: function (wasDeleted) {
		this.$notesListGroup.show()
		this.handleUpdate()
		if (!wasDeleted) this.selectItemById(this.detailView.model.id)
		this.scrollItemIntoView(this.$noteList.find('.notes-list-item.selected'))
		if (this.detailView.usingMouse) this.clearSelectedNote()
		this.focusNewNote()
		this.destroyDetailView()
	},

	handleInputKeyup: function (e) {
		// Enter key
		if (e.keyCode == 13) {
			e.stopPropagation()
			this.createNote()
			// Escape key
		} else if (e.keyCode == 27) {
			e.stopPropagation()
			this.$notesNew.blur()
			// Up arrow
		} else if (e.keyCode == 38) {
			this.$notesNew.blur()
			this.selectPrevItem()
			// Down arrow
		} else if (e.keyCode == 40) {
			this.$notesNew.blur()
			this.selectNextItem()
		}
	},

	handleGlobalArrowUp: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.selectPrevItem()
		}
	},

	handleGlobalArrowDown: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.selectNextItem()
		}
	},

	handleGlobalArrowRight: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.switchToDetailFromKeyboard()
		}
	},

	focusOnNewNote: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.focusNewNoteViaHotkey()
		}
	},

	handleGlobalMetaBackspace: function (e) {
		if (this.open && !this.isDetailActive()) {
			e.preventDefault();
			e.stopPropagation()
			this.deleteItemFromKeyboard()
		}
	},

	selectPrevItem: function () {
		if (this.collection.activeNotes().length == 0) return

		var $listItems = this.$('.notes-list-item')
		// First press of up arrow selects last note in list
		if (this.selectedNote == undefined) {
			this.selectedNote = $listItems.length - 1
			// Subsequent presses select the note above the selected note, wrapping to end of list if at start
		} else {
			$($listItems[this.selectedNote]).removeClass('selected')
			this.selectedNote = this.selectedNote == 0 ? $listItems.length - 1 : this.selectedNote - 1
		}
		$($listItems[this.selectedNote]).addClass('selected')
		this.scrollItemIntoView($($listItems[this.selectedNote]))
	},

	selectNextItem: function () {
		if (this.collection.activeNotes().length == 0) return

		var $listItems = this.$('.notes-list-item')
		// First press of down arrow selects first note in list
		if (this.selectedNote == undefined) {
			this.selectedNote = 0
			// Subsequent presses select the next note below the selected note, wrapping to start of list if at end
		} else {
			$($listItems[this.selectedNote]).removeClass('selected')
			this.selectedNote = this.selectedNote == $listItems.length - 1 ? 0 : this.selectedNote + 1
		}
		$($listItems[this.selectedNote]).addClass('selected')
		this.scrollItemIntoView($($listItems[this.selectedNote]))
	},

	selectItemById: function (noteId) {
		this.$noteList.find('.notes-list-item.selected').removeClass('selected')
		this.selectedNote = this.$noteList.find('[data-note-id="' + noteId + '"]').addClass('selected').index()
	},

	clearSelectedNote: function () {
		this.$noteList.find('.notes-list-item.selected').removeClass('selected')
		this.selectedNote = null
	},

	switchToDetailFromKeyboard: function () {
		this.switchToDetailView(this.getSelectedNoteModel())
	},

	deleteItemFromKeyboard: function () {
		this.getSelectedNoteModel().delete()
		// When last note deleted via keyboard, ensure new note is focused
		if (this.collection.activeNotes().length == 0) {
			this.selectedNote = null
			this.focusNewNote()
		}
	},

	getSelectedNoteModel: function () {
		var noteId = $(this.$('.notes-list-item')[this.selectedNote]).data('note-id')
		return this.collection.get(noteId)
	},

	createNote: function (e) {
		var self = this
		if (this.$notesNewContainer.hasClass('loading')) return

		var bodyInput = this.$notesNew[0].value.trim()
		if (!bodyInput) return
		// Append a newline to the note so when the detail view loads, the cursor is on the next line
		bodyInput = bodyInput + '\n'

		this.$notesNewContainer.removeClass('failed').addClass('loading')
		self.collection.create({ body: bodyInput }, {
			wait: true,
			success: function (model) {
				self.$notesNewContainer.removeClass('loading')
				self.switchToDetailView(model)
				self.$notesNew[0].value = ''
			},
			error: function () {
				self.$notesNewContainer.removeClass('loading').addClass('failed')
			},
		})
		m.sendEvent('Notes', 'Create from List')
	},

	createNoteDetail: function () {
		var self = this
		self.collection.create({ body: '' }, {
			wait: true,
			success: function (model) {
				self.switchToDetailView(model)
			},
			error: function () {
				console.log('error creating note')
			}
		})
		m.sendEvent('Notes', 'Create from Detail')
	},

	detailNextNote: function (currentNote) {
		this.switchToDetailView(this.collection.next(currentNote))
	},

	detailPrevNote: function (currentNote) {
		this.switchToDetailView(this.collection.prev(currentNote))
	},

	focusNewNote: function () {
		// Only autofocus if user hasn't yet used up/down arrow hotkeys
		if (this.selectedNote == undefined) this.$notesNew.focus()
	},

	focusNewNoteViaHotkey: function () {
		if (this.selectedNote != undefined) this.clearSelectedNote()
		this.$notesNew.focus()
	},

	scrollItemIntoView: function ($el) {
		var el = $el[0]
		var parent = $el.parent()[0]

		if(el) {
			// Scroll bottom into view if necessary
			var bottomOffset = el.getBoundingClientRect().bottom - parent.getBoundingClientRect().bottom
			if (bottomOffset > 0) parent.scrollTop += bottomOffset

			// Scroll top into view if necessary
			// Note: in our case items are always smaller than the containing list, so only one scroll adjustment (top or bottom) will happen
			var topOffset = el.getBoundingClientRect().top - parent.getBoundingClientRect().top
			if (topOffset < 0) parent.scrollTop += topOffset
		}
	},

	onShowPane: function () {
		this.open = true
		if (this.isDetailActive()) {
			this.detailView.startAutosaveInterval()
			this.detailView.focusTextarea()
		} else {
			this.focusNewNote()
		}
	},

	onHidePane: function () {
		this.open = false
		if (this.isDetailActive()) this.detailView.clearAutosaveInterval()
	},

	isDetailActive: function () {
		return !!this.detailView
	},

	preventCloseOnEsc: function () {
		// Prevent closing this pane if the detail view is showing - it will handle the Escape
		return this.isDetailActive()
	},
})

m.collect.notes = new addin.collect.Notes()

addin.styles.style()
m.views.notes = m.widgetManager.handover('notes', addin.views.List, { collection: m.collect.notes, region: 'bottom-right', order: 'prepend' })

m.widgets.push(m.views.notes) }); if(m.addinManager) {m.addinManager.registerAddinFn("23c67761-9831-415e-b358-c6844eb6c244", fn_addin);}
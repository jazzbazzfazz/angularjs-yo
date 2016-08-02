angularjsYoApp
  .controller('CalendarCtrl', function ($scope, $log, moment, calendarConfig) {
    var vm = this;
    
    vm.calendarView = "month";
    vm.calendarDate = moment();
    vm.calendarTitle = "Calendar Title";
    //
    // build some events for the demo, on the 1st, 10th, 15th and 25th of the current month
    //
    var currentMonth = vm.calendarDate.month();
    var currentYear = vm.calendarDate.year();
    var actions = [{ // an array of actions that will be displayed next to the event title
      label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
      cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
      onClick: function (args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
        console.log('Edit event', args.calendarEvent);
      }
    }];

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };
    
    var _1Am = 1;
    var _2Am = 2;
    vm.events = [
      {
        title: 'ng-world Conference',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: '<i>CyberCamp week</i>',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: 'TEEX KEC Anniversary',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
        actions: actions
      }
    ];


  })

  .config(function (calendarConfig) {
    console.log(calendarConfig); //view all available config
    //calendarConfig.templates.calendarMonthView = '../views/calendar.html'; //change the month view template globally to a custom template
    calendarConfig.dateFormatter = 'moment'; //use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.
    calendarConfig.allDateFormats.moment.date.hour = 'HH:mm'; //this will configure times on the day view to display in 24 hour format rather than the default of 12 hour
    calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM'; //this will configure the day view title to be shorter
    calendarConfig.i18nStrings.weekNumber = 'Week {week}'; //This will set the week number hover label on the month view
    calendarConfig.displayAllMonthEvents = true; //This will display all events on a month view even if they're not in the current month. Default false.
    calendarConfig.showTimesOnWeekView = true; //Make the week view more like the day view, with the caveat that event end times are ignored.
  })

  

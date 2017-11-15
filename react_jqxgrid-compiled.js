'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jqx = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               jQWidgets v5.3.2 (2017-Sep)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2011-2017 jQWidgets.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               License: http://jqwidgets.com/license/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var JQXLite = window.JQXLite;

var jqx = exports.jqx = window.jqx;

var JqxGrid = function (_React$Component) {
    _inherits(JqxGrid, _React$Component);

    function JqxGrid() {
        _classCallCheck(this, JqxGrid);

        return _possibleConstructorReturn(this, (JqxGrid.__proto__ || Object.getPrototypeOf(JqxGrid)).apply(this, arguments));
    }

    _createClass(JqxGrid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var options = this.manageAttributes();
            this.createComponent(options);
        }
    }, {
        key: 'manageAttributes',
        value: function manageAttributes() {
            var properties = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'selectionmode', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'disabled', 'editable', 'editmode', 'filter', 'filterable', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
            var options = {};
            for (var item in this.props) {
                if (item === 'settings') {
                    for (var itemTwo in this.props[item]) {
                        options[itemTwo] = this.props[item][itemTwo];
                    }
                } else {
                    if (properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                    }
                }
            }
            return options;
        }
    }, {
        key: 'createComponent',
        value: function createComponent(options) {
            if (!this.style) {
                for (var style in this.props.style) {
                    JQXLite(this.componentSelector).css(style, this.props.style[style]);
                }
            }
            if (this.props.className !== undefined) {
                var classes = this.props.className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    JQXLite(this.componentSelector).addClass(classes[i]);
                }
            }
            if (!this.template) {
                JQXLite(this.componentSelector).html(this.props.template);
            }
            JQXLite(this.componentSelector).jqxGrid(options);
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            JQXLite(this.componentSelector).jqxGrid('setOptions', options);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            if (arguments.length === 0) {
                throw Error('At least one argument expected in getOptions()!');
            }
            var resultToReturn = {};
            for (var i = 0; i < arguments.length; i++) {
                resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxGrid(arguments[i]);
            }
            return resultToReturn;
        }
    }, {
        key: 'on',
        value: function on(name, callbackFn) {
            JQXLite(this.componentSelector).on(name, callbackFn);
        }
    }, {
        key: 'off',
        value: function off(name) {
            JQXLite(this.componentSelector).off(name);
        }
    }, {
        key: 'altrows',
        value: function altrows(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('altrows', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('altrows');
            }
        }
    }, {
        key: 'altstart',
        value: function altstart(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('altstart', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('altstart');
            }
        }
    }, {
        key: 'altstep',
        value: function altstep(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('altstep', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('altstep');
            }
        }
    }, {
        key: 'autoshowloadelement',
        value: function autoshowloadelement(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autoshowloadelement', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autoshowloadelement');
            }
        }
    }, {
        key: 'autoshowfiltericon',
        value: function autoshowfiltericon(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon');
            }
        }
    }, {
        key: 'autoshowcolumnsmenubutton',
        value: function autoshowcolumnsmenubutton(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton');
            }
        }
    }, {
        key: 'clipboard',
        value: function clipboard(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('clipboard', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('clipboard');
            }
        }
    }, {
        key: 'closeablegroups',
        value: function closeablegroups(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('closeablegroups', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('closeablegroups');
            }
        }
    }, {
        key: 'columnsmenuwidth',
        value: function columnsmenuwidth(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth');
            }
        }
    }, {
        key: 'columnmenuopening',
        value: function columnmenuopening(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnmenuopening', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnmenuopening');
            }
        }
    }, {
        key: 'columnmenuclosing',
        value: function columnmenuclosing(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnmenuclosing', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnmenuclosing');
            }
        }
    }, {
        key: 'cellhover',
        value: function cellhover(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('cellhover', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('cellhover');
            }
        }
    }, {
        key: 'enablekeyboarddelete',
        value: function enablekeyboarddelete(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete');
            }
        }
    }, {
        key: 'enableellipsis',
        value: function enableellipsis(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enableellipsis', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enableellipsis');
            }
        }
    }, {
        key: 'enablemousewheel',
        value: function enablemousewheel(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enablemousewheel', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enablemousewheel');
            }
        }
    }, {
        key: 'enableanimations',
        value: function enableanimations(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enableanimations', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enableanimations');
            }
        }
    }, {
        key: 'enabletooltips',
        value: function enabletooltips(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enabletooltips', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enabletooltips');
            }
        }
    }, {
        key: 'enablehover',
        value: function enablehover(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enablehover', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enablehover');
            }
        }
    }, {
        key: 'enablebrowserselection',
        value: function enablebrowserselection(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('enablebrowserselection', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('enablebrowserselection');
            }
        }
    }, {
        key: 'everpresentrowposition',
        value: function everpresentrowposition(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('everpresentrowposition', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('everpresentrowposition');
            }
        }
    }, {
        key: 'everpresentrowheight',
        value: function everpresentrowheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('everpresentrowheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('everpresentrowheight');
            }
        }
    }, {
        key: 'everpresentrowactions',
        value: function everpresentrowactions(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('everpresentrowactions', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('everpresentrowactions');
            }
        }
    }, {
        key: 'everpresentrowactionsmode',
        value: function everpresentrowactionsmode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode');
            }
        }
    }, {
        key: 'filterrowheight',
        value: function filterrowheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('filterrowheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('filterrowheight');
            }
        }
    }, {
        key: 'filtermode',
        value: function filtermode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('filtermode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('filtermode');
            }
        }
    }, {
        key: 'groupsrenderer',
        value: function groupsrenderer(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupsrenderer', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupsrenderer');
            }
        }
    }, {
        key: 'groupcolumnrenderer',
        value: function groupcolumnrenderer(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer');
            }
        }
    }, {
        key: 'groupsexpandedbydefault',
        value: function groupsexpandedbydefault(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault');
            }
        }
    }, {
        key: 'handlekeyboardnavigation',
        value: function handlekeyboardnavigation(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation');
            }
        }
    }, {
        key: 'pagerrenderer',
        value: function pagerrenderer(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagerrenderer', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagerrenderer');
            }
        }
    }, {
        key: 'rtl',
        value: function rtl(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rtl', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rtl');
            }
        }
    }, {
        key: 'showdefaultloadelement',
        value: function showdefaultloadelement(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement');
            }
        }
    }, {
        key: 'showfiltercolumnbackground',
        value: function showfiltercolumnbackground(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground');
            }
        }
    }, {
        key: 'showfiltermenuitems',
        value: function showfiltermenuitems(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems');
            }
        }
    }, {
        key: 'showpinnedcolumnbackground',
        value: function showpinnedcolumnbackground(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground');
            }
        }
    }, {
        key: 'showsortcolumnbackground',
        value: function showsortcolumnbackground(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground');
            }
        }
    }, {
        key: 'showsortmenuitems',
        value: function showsortmenuitems(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showsortmenuitems', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showsortmenuitems');
            }
        }
    }, {
        key: 'showgroupmenuitems',
        value: function showgroupmenuitems(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems');
            }
        }
    }, {
        key: 'showrowdetailscolumn',
        value: function showrowdetailscolumn(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn');
            }
        }
    }, {
        key: 'showheader',
        value: function showheader(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showheader', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showheader');
            }
        }
    }, {
        key: 'showgroupsheader',
        value: function showgroupsheader(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showgroupsheader', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showgroupsheader');
            }
        }
    }, {
        key: 'showaggregates',
        value: function showaggregates(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showaggregates', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showaggregates');
            }
        }
    }, {
        key: 'showgroupaggregates',
        value: function showgroupaggregates(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showgroupaggregates', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showgroupaggregates');
            }
        }
    }, {
        key: 'showeverpresentrow',
        value: function showeverpresentrow(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showeverpresentrow', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showeverpresentrow');
            }
        }
    }, {
        key: 'showfilterrow',
        value: function showfilterrow(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showfilterrow', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showfilterrow');
            }
        }
    }, {
        key: 'showemptyrow',
        value: function showemptyrow(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showemptyrow', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showemptyrow');
            }
        }
    }, {
        key: 'showstatusbar',
        value: function showstatusbar(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showstatusbar', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showstatusbar');
            }
        }
    }, {
        key: 'statusbarheight',
        value: function statusbarheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('statusbarheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('statusbarheight');
            }
        }
    }, {
        key: 'showtoolbar',
        value: function showtoolbar(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('showtoolbar', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('showtoolbar');
            }
        }
    }, {
        key: 'selectionmode',
        value: function selectionmode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('selectionmode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('selectionmode');
            }
        }
    }, {
        key: 'updatefilterconditions',
        value: function updatefilterconditions(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('updatefilterconditions', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('updatefilterconditions');
            }
        }
    }, {
        key: 'updatefilterpanel',
        value: function updatefilterpanel(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('updatefilterpanel', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('updatefilterpanel');
            }
        }
    }, {
        key: 'theme',
        value: function theme(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('theme', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('theme');
            }
        }
    }, {
        key: 'toolbarheight',
        value: function toolbarheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('toolbarheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('toolbarheight');
            }
        }
    }, {
        key: 'autoheight',
        value: function autoheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autoheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autoheight');
            }
        }
    }, {
        key: 'autorowheight',
        value: function autorowheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autorowheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autorowheight');
            }
        }
    }, {
        key: 'columnsheight',
        value: function columnsheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsheight');
            }
        }
    }, {
        key: 'deferreddatafields',
        value: function deferreddatafields(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('deferreddatafields', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('deferreddatafields');
            }
        }
    }, {
        key: 'groupsheaderheight',
        value: function groupsheaderheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupsheaderheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupsheaderheight');
            }
        }
    }, {
        key: 'groupindentwidth',
        value: function groupindentwidth(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupindentwidth', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupindentwidth');
            }
        }
    }, {
        key: 'height',
        value: function height(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('height', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('height');
            }
        }
    }, {
        key: 'pagerheight',
        value: function pagerheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagerheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagerheight');
            }
        }
    }, {
        key: 'rowsheight',
        value: function rowsheight(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rowsheight', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rowsheight');
            }
        }
    }, {
        key: 'scrollbarsize',
        value: function scrollbarsize(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('scrollbarsize', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('scrollbarsize');
            }
        }
    }, {
        key: 'scrollmode',
        value: function scrollmode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('scrollmode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('scrollmode');
            }
        }
    }, {
        key: 'scrollfeedback',
        value: function scrollfeedback(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('scrollfeedback', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('scrollfeedback');
            }
        }
    }, {
        key: 'width',
        value: function width(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('width', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('width');
            }
        }
    }, {
        key: 'autosavestate',
        value: function autosavestate(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autosavestate', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autosavestate');
            }
        }
    }, {
        key: 'autoloadstate',
        value: function autoloadstate(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('autoloadstate', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('autoloadstate');
            }
        }
    }, {
        key: 'columns',
        value: function columns(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columns', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columns');
            }
        }
    }, {
        key: 'columngroups',
        value: function columngroups(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columngroups', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columngroups');
            }
        }
    }, {
        key: 'columnsmenu',
        value: function columnsmenu(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsmenu', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsmenu');
            }
        }
    }, {
        key: 'columnsresize',
        value: function columnsresize(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsresize', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsresize');
            }
        }
    }, {
        key: 'columnsautoresize',
        value: function columnsautoresize(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsautoresize', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsautoresize');
            }
        }
    }, {
        key: 'columnsreorder',
        value: function columnsreorder(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('columnsreorder', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('columnsreorder');
            }
        }
    }, {
        key: 'disabled',
        value: function disabled(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('disabled', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('disabled');
            }
        }
    }, {
        key: 'editable',
        value: function editable(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('editable', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('editable');
            }
        }
    }, {
        key: 'editmode',
        value: function editmode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('editmode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('editmode');
            }
        }
    }, {
        key: 'filter',
        value: function filter(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('filter', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('filter');
            }
        }
    }, {
        key: 'filterable',
        value: function filterable(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('filterable', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('filterable');
            }
        }
    }, {
        key: 'groupable',
        value: function groupable(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groupable', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groupable');
            }
        }
    }, {
        key: 'groups',
        value: function groups(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('groups', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('groups');
            }
        }
    }, {
        key: 'horizontalscrollbarstep',
        value: function horizontalscrollbarstep(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep');
            }
        }
    }, {
        key: 'horizontalscrollbarlargestep',
        value: function horizontalscrollbarlargestep(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep');
            }
        }
    }, {
        key: 'initrowdetails',
        value: function initrowdetails(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('initrowdetails', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('initrowdetails');
            }
        }
    }, {
        key: 'keyboardnavigation',
        value: function keyboardnavigation(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('keyboardnavigation', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('keyboardnavigation');
            }
        }
    }, {
        key: 'localization',
        value: function localization(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('localization', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('localization');
            }
        }
    }, {
        key: 'pagesize',
        value: function pagesize(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagesize', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagesize');
            }
        }
    }, {
        key: 'pagesizeoptions',
        value: function pagesizeoptions(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagesizeoptions', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagesizeoptions');
            }
        }
    }, {
        key: 'pagermode',
        value: function pagermode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagermode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagermode');
            }
        }
    }, {
        key: 'pagerbuttonscount',
        value: function pagerbuttonscount(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount');
            }
        }
    }, {
        key: 'pageable',
        value: function pageable(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('pageable', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('pageable');
            }
        }
    }, {
        key: 'rowdetails',
        value: function rowdetails(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rowdetails', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rowdetails');
            }
        }
    }, {
        key: 'rowdetailstemplate',
        value: function rowdetailstemplate(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate');
            }
        }
    }, {
        key: 'ready',
        value: function ready(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('ready', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('ready');
            }
        }
    }, {
        key: 'rendered',
        value: function rendered(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rendered', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rendered');
            }
        }
    }, {
        key: 'renderstatusbar',
        value: function renderstatusbar(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('renderstatusbar', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('renderstatusbar');
            }
        }
    }, {
        key: 'rendertoolbar',
        value: function rendertoolbar(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rendertoolbar', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rendertoolbar');
            }
        }
    }, {
        key: 'rendergridrows',
        value: function rendergridrows(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('rendergridrows', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('rendergridrows');
            }
        }
    }, {
        key: 'sortable',
        value: function sortable(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('sortable', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('sortable');
            }
        }
    }, {
        key: 'selectedrowindex',
        value: function selectedrowindex(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('selectedrowindex', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('selectedrowindex');
            }
        }
    }, {
        key: 'selectedrowindexes',
        value: function selectedrowindexes(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('selectedrowindexes', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('selectedrowindexes');
            }
        }
    }, {
        key: 'source',
        value: function source(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('source', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('source');
            }
        }
    }, {
        key: 'sorttogglestates',
        value: function sorttogglestates(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('sorttogglestates', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('sorttogglestates');
            }
        }
    }, {
        key: 'updatedelay',
        value: function updatedelay(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('updatedelay', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('updatedelay');
            }
        }
    }, {
        key: 'virtualmode',
        value: function virtualmode(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('virtualmode', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('virtualmode');
            }
        }
    }, {
        key: 'verticalscrollbarstep',
        value: function verticalscrollbarstep(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep');
            }
        }
    }, {
        key: 'verticalscrollbarlargestep',
        value: function verticalscrollbarlargestep(arg) {
            if (arg !== undefined) {
                JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep', arg);
            } else {
                return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep');
            }
        }
    }, {
        key: 'autoresizecolumns',
        value: function autoresizecolumns(type) {
            JQXLite(this.componentSelector).jqxGrid('autoresizecolumns', type);
        }
    }, {
        key: 'autoresizecolumn',
        value: function autoresizecolumn(dataField, type) {
            JQXLite(this.componentSelector).jqxGrid('autoresizecolumn', dataField, type);
        }
    }, {
        key: 'beginupdate',
        value: function beginupdate() {
            JQXLite(this.componentSelector).jqxGrid('beginupdate');
        }
    }, {
        key: 'clear',
        value: function clear() {
            JQXLite(this.componentSelector).jqxGrid('clear');
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            JQXLite(this.componentSelector).jqxGrid('destroy');
        }
    }, {
        key: 'endupdate',
        value: function endupdate() {
            JQXLite(this.componentSelector).jqxGrid('endupdate');
        }
    }, {
        key: 'ensurerowvisible',
        value: function ensurerowvisible(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('ensurerowvisible', rowBoundIndex);
        }
    }, {
        key: 'focus',
        value: function focus() {
            JQXLite(this.componentSelector).jqxGrid('focus');
        }
    }, {
        key: 'getcolumnindex',
        value: function getcolumnindex(dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcolumnindex', dataField);
        }
    }, {
        key: 'getcolumn',
        value: function getcolumn(dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcolumn', dataField);
        }
    }, {
        key: 'getcolumnproperty',
        value: function getcolumnproperty(dataField, propertyName) {
            return JQXLite(this.componentSelector).jqxGrid('getcolumnproperty', dataField, propertyName);
        }
    }, {
        key: 'getrowid',
        value: function getrowid(rowBoundIndex) {
            return JQXLite(this.componentSelector).jqxGrid('getrowid', rowBoundIndex);
        }
    }, {
        key: 'getrowdata',
        value: function getrowdata(rowBoundIndex) {
            return JQXLite(this.componentSelector).jqxGrid('getrowdata', rowBoundIndex);
        }
    }, {
        key: 'getrowdatabyid',
        value: function getrowdatabyid(rowID) {
            return JQXLite(this.componentSelector).jqxGrid('getrowdatabyid', rowID);
        }
    }, {
        key: 'getrowboundindexbyid',
        value: function getrowboundindexbyid(rowID) {
            return JQXLite(this.componentSelector).jqxGrid('getrowboundindexbyid', rowID);
        }
    }, {
        key: 'getrowboundindex',
        value: function getrowboundindex(rowDisplayIndex) {
            return JQXLite(this.componentSelector).jqxGrid('getrowboundindex', rowDisplayIndex);
        }
    }, {
        key: 'getrows',
        value: function getrows() {
            return JQXLite(this.componentSelector).jqxGrid('getrows');
        }
    }, {
        key: 'getboundrows',
        value: function getboundrows() {
            return JQXLite(this.componentSelector).jqxGrid('getboundrows');
        }
    }, {
        key: 'getdisplayrows',
        value: function getdisplayrows() {
            return JQXLite(this.componentSelector).jqxGrid('getdisplayrows');
        }
    }, {
        key: 'getdatainformation',
        value: function getdatainformation() {
            return JQXLite(this.componentSelector).jqxGrid('getdatainformation');
        }
    }, {
        key: 'getsortinformation',
        value: function getsortinformation() {
            return JQXLite(this.componentSelector).jqxGrid('getsortinformation');
        }
    }, {
        key: 'getpaginginformation',
        value: function getpaginginformation() {
            return JQXLite(this.componentSelector).jqxGrid('getpaginginformation');
        }
    }, {
        key: 'hidecolumn',
        value: function hidecolumn(dataField) {
            JQXLite(this.componentSelector).jqxGrid('hidecolumn', dataField);
        }
    }, {
        key: 'hideloadelement',
        value: function hideloadelement() {
            JQXLite(this.componentSelector).jqxGrid('hideloadelement');
        }
    }, {
        key: 'hiderowdetails',
        value: function hiderowdetails(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('hiderowdetails', rowBoundIndex);
        }
    }, {
        key: 'iscolumnvisible',
        value: function iscolumnvisible(dataField) {
            return JQXLite(this.componentSelector).jqxGrid('iscolumnvisible', dataField);
        }
    }, {
        key: 'iscolumnpinned',
        value: function iscolumnpinned(dataField) {
            return JQXLite(this.componentSelector).jqxGrid('iscolumnpinned', dataField);
        }
    }, {
        key: 'localizestrings',
        value: function localizestrings(localizationObject) {
            JQXLite(this.componentSelector).jqxGrid('localizestrings', localizationObject);
        }
    }, {
        key: 'pincolumn',
        value: function pincolumn(dataField) {
            JQXLite(this.componentSelector).jqxGrid('pincolumn', dataField);
        }
    }, {
        key: 'refreshdata',
        value: function refreshdata() {
            JQXLite(this.componentSelector).jqxGrid('refreshdata');
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            JQXLite(this.componentSelector).jqxGrid('refresh');
        }
    }, {
        key: 'performRender',
        value: function performRender() {
            JQXLite(this.componentSelector).jqxGrid('render');
        }
    }, {
        key: 'scrolloffset',
        value: function scrolloffset(top, left) {
            JQXLite(this.componentSelector).jqxGrid('scrolloffset', top, left);
        }
    }, {
        key: 'scrollposition',
        value: function scrollposition() {
            return JQXLite(this.componentSelector).jqxGrid('scrollposition');
        }
    }, {
        key: 'showloadelement',
        value: function showloadelement() {
            JQXLite(this.componentSelector).jqxGrid('showloadelement');
        }
    }, {
        key: 'showrowdetails',
        value: function showrowdetails(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('showrowdetails', rowBoundIndex);
        }
    }, {
        key: 'setcolumnindex',
        value: function setcolumnindex(dataField, index) {
            JQXLite(this.componentSelector).jqxGrid('setcolumnindex', dataField, index);
        }
    }, {
        key: 'setcolumnproperty',
        value: function setcolumnproperty(dataField, propertyName, propertyValue) {
            JQXLite(this.componentSelector).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
        }
    }, {
        key: 'showcolumn',
        value: function showcolumn(dataField) {
            JQXLite(this.componentSelector).jqxGrid('showcolumn', dataField);
        }
    }, {
        key: 'unpincolumn',
        value: function unpincolumn(dataField) {
            JQXLite(this.componentSelector).jqxGrid('unpincolumn', dataField);
        }
    }, {
        key: 'updatebounddata',
        value: function updatebounddata(type) {
            JQXLite(this.componentSelector).jqxGrid('updatebounddata', type);
        }
    }, {
        key: 'updating',
        value: function updating() {
            return JQXLite(this.componentSelector).jqxGrid('updating');
        }
    }, {
        key: 'getsortcolumn',
        value: function getsortcolumn() {
            return JQXLite(this.componentSelector).jqxGrid('getsortcolumn');
        }
    }, {
        key: 'removesort',
        value: function removesort() {
            JQXLite(this.componentSelector).jqxGrid('removesort');
        }
    }, {
        key: 'sortby',
        value: function sortby(dataField, sortOrder) {
            JQXLite(this.componentSelector).jqxGrid('sortby', dataField, sortOrder);
        }
    }, {
        key: 'addgroup',
        value: function addgroup(dataField) {
            JQXLite(this.componentSelector).jqxGrid('addgroup', dataField);
        }
    }, {
        key: 'cleargroups',
        value: function cleargroups() {
            JQXLite(this.componentSelector).jqxGrid('cleargroups');
        }
    }, {
        key: 'collapsegroup',
        value: function collapsegroup(group) {
            JQXLite(this.componentSelector).jqxGrid('collapsegroup', group);
        }
    }, {
        key: 'collapseallgroups',
        value: function collapseallgroups() {
            JQXLite(this.componentSelector).jqxGrid('collapseallgroups');
        }
    }, {
        key: 'expandallgroups',
        value: function expandallgroups() {
            JQXLite(this.componentSelector).jqxGrid('expandallgroups');
        }
    }, {
        key: 'expandgroup',
        value: function expandgroup(group) {
            JQXLite(this.componentSelector).jqxGrid('expandgroup', group);
        }
    }, {
        key: 'getrootgroupscount',
        value: function getrootgroupscount() {
            return JQXLite(this.componentSelector).jqxGrid('getrootgroupscount');
        }
    }, {
        key: 'getgroup',
        value: function getgroup(groupIndex) {
            return JQXLite(this.componentSelector).jqxGrid('getgroup', groupIndex);
        }
    }, {
        key: 'insertgroup',
        value: function insertgroup(groupIndex, dataField) {
            JQXLite(this.componentSelector).jqxGrid('insertgroup', groupIndex, dataField);
        }
    }, {
        key: 'iscolumngroupable',
        value: function iscolumngroupable() {
            return JQXLite(this.componentSelector).jqxGrid('iscolumngroupable');
        }
    }, {
        key: 'removegroupat',
        value: function removegroupat(groupIndex) {
            JQXLite(this.componentSelector).jqxGrid('removegroupat', groupIndex);
        }
    }, {
        key: 'removegroup',
        value: function removegroup(dataField) {
            JQXLite(this.componentSelector).jqxGrid('removegroup', dataField);
        }
    }, {
        key: 'addfilter',
        value: function addfilter(dataField, filterGroup, refreshGrid) {
            JQXLite(this.componentSelector).jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
        }
    }, {
        key: 'applyfilters',
        value: function applyfilters() {
            JQXLite(this.componentSelector).jqxGrid('applyfilters');
        }
    }, {
        key: 'clearfilters',
        value: function clearfilters() {
            JQXLite(this.componentSelector).jqxGrid('clearfilters');
        }
    }, {
        key: 'getfilterinformation',
        value: function getfilterinformation() {
            return JQXLite(this.componentSelector).jqxGrid('getfilterinformation');
        }
    }, {
        key: 'getcolumnat',
        value: function getcolumnat(index) {
            return JQXLite(this.componentSelector).jqxGrid('getcolumnat', index);
        }
    }, {
        key: 'removefilter',
        value: function removefilter(dataField, refreshGrid) {
            JQXLite(this.componentSelector).jqxGrid('removefilter', dataField, refreshGrid);
        }
    }, {
        key: 'refreshfilterrow',
        value: function refreshfilterrow() {
            JQXLite(this.componentSelector).jqxGrid('refreshfilterrow');
        }
    }, {
        key: 'gotopage',
        value: function gotopage(pageNumber) {
            JQXLite(this.componentSelector).jqxGrid('gotopage', pageNumber);
        }
    }, {
        key: 'gotoprevpage',
        value: function gotoprevpage() {
            JQXLite(this.componentSelector).jqxGrid('gotoprevpage');
        }
    }, {
        key: 'gotonextpage',
        value: function gotonextpage() {
            JQXLite(this.componentSelector).jqxGrid('gotonextpage');
        }
    }, {
        key: 'addrow',
        value: function addrow(rowIds, data, rowPosition) {
            JQXLite(this.componentSelector).jqxGrid('addrow', rowIds, data, rowPosition);
        }
    }, {
        key: 'begincelledit',
        value: function begincelledit(rowBoundIndex, dataField) {
            JQXLite(this.componentSelector).jqxGrid('begincelledit', rowBoundIndex, dataField);
        }
    }, {
        key: 'beginrowedit',
        value: function beginrowedit(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('beginrowedit', rowBoundIndex);
        }
    }, {
        key: 'closemenu',
        value: function closemenu() {
            JQXLite(this.componentSelector).jqxGrid('closemenu');
        }
    }, {
        key: 'deleterow',
        value: function deleterow(rowIds) {
            JQXLite(this.componentSelector).jqxGrid('deleterow', rowIds);
        }
    }, {
        key: 'endcelledit',
        value: function endcelledit(rowBoundIndex, dataField, confirmChanges) {
            JQXLite(this.componentSelector).jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
        }
    }, {
        key: 'endrowedit',
        value: function endrowedit(rowBoundIndex, confirmChanges) {
            JQXLite(this.componentSelector).jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
        }
    }, {
        key: 'getcell',
        value: function getcell(rowBoundIndex, datafield) {
            return JQXLite(this.componentSelector).jqxGrid('getcell', rowBoundIndex, datafield);
        }
    }, {
        key: 'getcellatposition',
        value: function getcellatposition(left, top) {
            return JQXLite(this.componentSelector).jqxGrid('getcellatposition', left, top);
        }
    }, {
        key: 'getcelltext',
        value: function getcelltext(rowBoundIndex, dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcelltext', rowBoundIndex, dataField);
        }
    }, {
        key: 'getcelltextbyid',
        value: function getcelltextbyid(rowID, dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcelltextbyid', rowID, dataField);
        }
    }, {
        key: 'getcellvaluebyid',
        value: function getcellvaluebyid(rowID, dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcellvaluebyid', rowID, dataField);
        }
    }, {
        key: 'getcellvalue',
        value: function getcellvalue(rowBoundIndex, dataField) {
            return JQXLite(this.componentSelector).jqxGrid('getcellvalue', rowBoundIndex, dataField);
        }
    }, {
        key: 'isBindingCompleted',
        value: function isBindingCompleted() {
            return JQXLite(this.componentSelector).jqxGrid('isBindingCompleted');
        }
    }, {
        key: 'openmenu',
        value: function openmenu(dataField) {
            JQXLite(this.componentSelector).jqxGrid('openmenu', dataField);
        }
    }, {
        key: 'setcellvalue',
        value: function setcellvalue(rowBoundIndex, dataField, value) {
            JQXLite(this.componentSelector).jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
        }
    }, {
        key: 'setcellvaluebyid',
        value: function setcellvaluebyid(rowID, dataField, value) {
            JQXLite(this.componentSelector).jqxGrid('setcellvaluebyid', rowID, dataField, value);
        }
    }, {
        key: 'showvalidationpopup',
        value: function showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
            JQXLite(this.componentSelector).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
        }
    }, {
        key: 'updaterow',
        value: function updaterow(rowIds, data) {
            JQXLite(this.componentSelector).jqxGrid('updaterow', rowIds, data);
        }
    }, {
        key: 'clearselection',
        value: function clearselection() {
            JQXLite(this.componentSelector).jqxGrid('clearselection');
        }
    }, {
        key: 'getselectedrowindex',
        value: function getselectedrowindex() {
            return JQXLite(this.componentSelector).jqxGrid('getselectedrowindex');
        }
    }, {
        key: 'getselectedrowindexes',
        value: function getselectedrowindexes() {
            return JQXLite(this.componentSelector).jqxGrid('getselectedrowindexes');
        }
    }, {
        key: 'getselectedcell',
        value: function getselectedcell() {
            return JQXLite(this.componentSelector).jqxGrid('getselectedcell');
        }
    }, {
        key: 'getselectedcells',
        value: function getselectedcells() {
            return JQXLite(this.componentSelector).jqxGrid('getselectedcells');
        }
    }, {
        key: 'selectcell',
        value: function selectcell(rowBoundIndex, dataField) {
            JQXLite(this.componentSelector).jqxGrid('selectcell', rowBoundIndex, dataField);
        }
    }, {
        key: 'selectallrows',
        value: function selectallrows() {
            JQXLite(this.componentSelector).jqxGrid('selectallrows');
        }
    }, {
        key: 'selectrow',
        value: function selectrow(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('selectrow', rowBoundIndex);
        }
    }, {
        key: 'unselectrow',
        value: function unselectrow(rowBoundIndex) {
            JQXLite(this.componentSelector).jqxGrid('unselectrow', rowBoundIndex);
        }
    }, {
        key: 'unselectcell',
        value: function unselectcell(rowBoundIndex, dataField) {
            JQXLite(this.componentSelector).jqxGrid('unselectcell', rowBoundIndex, dataField);
        }
    }, {
        key: 'getcolumnaggregateddata',
        value: function getcolumnaggregateddata(dataField, aggregates) {
            return JQXLite(this.componentSelector).jqxGrid('getcolumnaggregateddata', dataField, aggregates);
        }
    }, {
        key: 'refreshaggregates',
        value: function refreshaggregates() {
            JQXLite(this.componentSelector).jqxGrid('refreshaggregates');
        }
    }, {
        key: 'renderaggregates',
        value: function renderaggregates() {
            JQXLite(this.componentSelector).jqxGrid('renderaggregates');
        }
    }, {
        key: 'exportdata',
        value: function exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
            return JQXLite(this.componentSelector).jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
        }
    }, {
        key: 'getstate',
        value: function getstate() {
            return JQXLite(this.componentSelector).jqxGrid('getstate');
        }
    }, {
        key: 'loadstate',
        value: function loadstate(stateObject) {
            JQXLite(this.componentSelector).jqxGrid('loadstate', stateObject);
        }
    }, {
        key: 'savestate',
        value: function savestate() {
            return JQXLite(this.componentSelector).jqxGrid('savestate');
        }
    }, {
        key: 'render',
        value: function render() {
            var id = 'jqxGrid' + JQXLite.generateID();
            this.componentSelector = '#' + id;
            return _react2.default.createElement(
                'div',
                { id: id },
                this.props.value,
                this.props.children
            );
        }
    }]);

    return JqxGrid;
}(_react2.default.Component);

;

window.JqxGrid = JqxGrid;
exports.default = JqxGrid;

odoo.define('pos_base', function (require) {
    var models = require('point_of_sale.models');
    var core = require('web.core');
    var _t = core._t;
    var rpc = require('web.rpc');
    var gui = require('point_of_sale.gui');
    var PopupWidget = require('point_of_sale.popups');

    var alert_input = PopupWidget.extend({
        template: 'alert_input',
        show: function (options) {
            var self = this;
            if (options) {
                swal({
                    title: options.title || '',
                    html: options.html || '',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).catch(swal.noop);
            }
            this._super(options);
            $('.swal2-confirm').click(function () {
                self.click_confirm();
            });
            $('.swal2-cancel').click(function () {
                self.click_cancel();
            })
        }
    });
    gui.define_popup({name: 'alert_input', widget: alert_input});

    var alert_result = PopupWidget.extend({
        template: 'alert_result',
        show: function (options) {
            var self = this;
            var timer = 1000;
            if (options) {
                swal({
                    title: options.title,
                    text: options.body,
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-info",
                    timer: options.timer || timer
                }).catch(swal.noop)
            }
            this._super(options);
            $('.swal2-confirm').click(function () {
                self.click_confirm();
            });
            $('.swal2-cancel').click(function () {
                self.click_cancel();
            })
        }
    });
    gui.define_popup({name: 'alert_result', widget: alert_result});

    var alert_confirm = PopupWidget.extend({
        template: 'alert_confirm',
        show: function (options) {
            var self = this;
            if (options) {
                swal({
                    title: options.title,
                    text: options.body || '',
                    type: options.type || 'warning',
                    showCancelButton: true,
                    confirmButtonText: options.confirmButtonText || '',
                    cancelButtonText: options.cancelButtonText || '',
                    confirmButtonClass: "btn btn-success",
                    cancelButtonClass: "btn btn-danger",
                    buttonsStyling: false
                });
            }
            this._super(options);
            $('.swal2-confirm').click(function () {
                self.click_confirm();
            });
            $('.swal2-cancel').click(function () {
                self.click_cancel();
            })

        }
    });
    gui.define_popup({name: 'alert_confirm', widget: alert_confirm});
});

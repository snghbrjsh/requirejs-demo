/**
 * Created by Insignia on 8/3/2015.
 */

require.config({
    paths: {
        jquery: 'lib/jquery',
        basePath: '../js'
    }
})

require(['jquery', 'basePath/app'], function($, App){
	'use strict';
    App.init();
	$('body').text('This text is changed on the fly..!! :)');
});
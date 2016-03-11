var navMap = {'<void>':['al_index.php',['index.css','index.js']],'<other>':['al_profile.php',['profile.css','page.css','profile.js','page.js']],'public\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'event\\d+($|/)':['al_events.php',['groups.css','page.css','groups.js','page.js']],'club\\d+($|/)':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'publics\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'groups(\\d+)?$':['al_groups.php',['groups.css','groups_list.js','indexer.js']],'events$':['al_events.php',['events.css','page.css','events.js','page.js']],'changemail$':['register.php',['reg.css']],'mail($|/)':['al_mail.php',['mail.css','mail.js']],'write\\d*($|/)':['al_mail.php',['mail.css','mail.js']],'im($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']],'gim\\d+($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']],'audio-?\\d+_\\d+$':['al_audio.php',['audio.css','audio.js']],'audios(-?\\d+)?$':['al_audio.php',['audio.css','audio.js']],'audio($|/)':['al_audio.php',['audio.css','audio.js']],'apps_check($|/)':['al_apps_check.php',['apps.css','apps.js']],'apps($|/)':['al_apps.php',['apps.css','apps.js']],'editapp($|/)':['al_apps_edit.php',['apps.css','apps.js']],'regstep\\d$':['register.php',['reg.js','reg.css','ui_controls.js','ui_controls.css','selects.js']],'video(-?\\d+_\\d+)?$':['al_video.php',['video.js','video.css','videoview.js','videoview.css','indexer.js']],'videos(-?\\d+)?$':['al_video.php',['video.js','video.css','indexer.js']],'feed$':['al_feed.php',['page.css','page.js','feed.css','feed.js']],'friends$':['al_friends.php',['friends.js','friends.css','privacy.css']],'friendsphotos$':['al_photos.php',['friendsphotos.js','photoview.js','friendsphotos.css','photoview.css']],'wall-?\\d+(_\\d+)?$':['al_wall.php',['page.js','page.css','wall.js','wall.css']],'tag\\d+$':['al_photos.php',['photos.js','photoview.js','photos.css','photoview.css']],'albums(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'photos(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'album-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css']],'photo-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css','photoview.js','photoview.css']],'search$':['al_search.php',['search.css','search.js']],'people($|/)':['al_search.php',['search.css','search.js']],'communities$':['al_search.php',['search.css','search.js']],'brands$':['al_search.php',['search.css','search.js']],'invite$':['invite.php',['invite.css','invite.js','ui_controls.css','ui_controls.js']],'join$':['join.php',['join.css','join.js']],'settings$':['al_settings.php',['settings.js','settings.css']],'edit$':['al_profileEdit.php',['profile_edit.js','profile_edit.css']],'blog$':['blog.php',['blog.css']],'fave$':['al_fave.php',['fave.js','fave.css','page.css','wall.css','qsorter.js','indexer.js']],'topic$':['al_board.php',['board.css']],'board\\d+$':['al_board.php',['board.css','board.js']],'topic-?\\d+_\\d+$':['al_board.php',['board.css','board.js']],'stats($|/)':['al_stats.php',['stats.css']],'ru/(.*)?$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'pages($|/)':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'page-?\\d+_\\d+$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'restore($|/)':['al_restore.php',['restore.js','restore.css']],'recover($|/)':['recover.php',['recover.js','recover.css']],'gifts\\d*$':['al_gifts.php',['gifts.js','gifts.css']],'docs($|/)':['docs.php',['docs.css','docs.js','indexer.js']],'doc-?\\d+_\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'docs-?\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'login($|/)':['al_login.php',['login.css']],'tasks($|/)':['tasks.php',['tasks.css','tasks.js']],'abuse($|/)':['abuse.php',['abuse.css','abuse.js']],'abuse2($|/)':['abuse2.php',[]],'restore2($|/)':['restore2.php',['dyn-restore2.css','dyn-restore2.js','dyn-restore2_aa.js','sorter.js']],'support($|/)':['al_tickets.php',['tickets.css','tickets.js']],'helpdesk($|/)':['al_helpdesk.php',['tickets.css','tickets.js']],'offersdesk($|/)':['offers.php',['offers.css','offers.js']],'payments($|/)':['al_payments.php',['payments.css']],'faq($|/)':['al_faq.php',['faq.css','faq.js']],'tlmd($|\\d+|/)':['al_talmud.php',['faq.js','faq.css','tickets.css','tickets.js','tags_dd.js','tags_dd.css']],'sms_office($|/)':['sms_office.php',['sms_office.css','sms_office.js']],'dev($|/)':['dev.php',['dev.css','dev.js']],'developers($|/)':['al_developers.php',['developers.css']],'help($|/)':['al_help.php',['help.css','help.js']],'claims($|/)':['al_claims.php',['claims.css','claims.js']],'video_embed($|/)':['al_video_embed.php',['video_embed.css','video_embed.js']],'ads$':['ads.php',['ads.css','ads.js']],'adbonus$':['ads.php',['ads.css','ads.js']],'adsbonus$':['ads.php',['ads.css','ads.js']],'adregister$':['ads.php',['ads.css','ads.js']],'adsedit$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adscreate$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adsmoder$':['ads_moder.php',['ads.css','ads.js','ads_moder.css','ads_moder.js']],'adsweb$':['ads_web.php',['ads.css','ads.js','ads_web.css','ads_web.js']],'exchange$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'exchangemoder$':['ads_posts_moder.php',['ads.css','ads.js','exchange_moder.css','exchange_moder.js']],'offers$':['ads_offers.php',['ads.css','ads.js','ads_offers.css','ads_offers.js']],'offersmoder$':['ads_offers_moder.php',['ads.css','ads.js','ads_offers_moder.css','ads_offers_moder.js']],'test$':['al_help.php',['help.css','help.js']],'agenttest$':['al_help.php',['help.css','help.js']],'grouptest$':['al_help.php',['help.css','help.js']],'dmca$':['al_tickets.php',['tickets.css','tickets.js']],'terms$':['al_help.php',['help.css','help.js']],'privacy$':['al_help.php',['help.css','help.js']],'licence$':['al_help.php',['help.css','help.js']],'editdb$':['editdb.php',['editdb.css','editdb.js']],'note\\d+_\\d+$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'notes(\\d+)?$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'bugs($|/)':['bugs.php',['bugs.css','bugs.js']],'wkview.php($)':['wkview.php',['wkview.js','wkview.css','wk.js','wk.css']],'stickers_office($|/)':['stickers_office.php',['stickers_office.css','stickers_office.js']],'charts($|/)':['al_audio.php',['audio.css','audio.js']],'maps($|/)':['maps.php',[]],'jobs$':['al_jobs.php',['jobs.css','jobs.js']],'ui$':['ui.php',[]],'translation$':['al_translation.php',[]],'mobile$':['al_login.php',[]],'stickers($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']],'print$':['al_print.php',['print.css','print.js']],'pattern(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'link(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'autoreg(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'statlogs($|/)':['statlogs_view.php',['statlogs.css']],'market(-?\\d+)?(_\\d+)?$':['al_market.php',['market.css','market.js']]}; var stVersions = { 'nav': 19161, 'common.js': 1130, 'common.css': 512, 'pads.js': 82, 'pads.css': 83, 'retina.css': 429, 'uncommon.js': 11, 'uncommon.css': 94, 'filebutton.css': 9, 'filebutton.js': 9, 'lite.js': 91, 'lite.css': 37, 'ie6.css': 26, 'ie7.css': 18, 'rtl.css': 187, 'pagination.js': 19, 'blog.css': 7, 'html5audio.js': 5, 'html5video.js': 55, 'html5video.css': 26, 'audioplayer.js': 149, 'audioplayer.css': 17, 'audio_html5.js': 7, 'audio.js': 259, 'audio.css': 136, 'gifts.css': 57, 'gifts.js': 45, 'cc.js': 7, 'indexer.js': 20, 'graph.js': 43, 'graph.css': 2, 'boxes.css': 22, 'box.js': 5, 'rate.css': 4, 'tooltips.js': 86, 'tooltips.css': 98, 'sorter.js': 21, 'qsorter.js': 29, 'usorter.js': 3, 'phototag.js': 9, 'phototag.css': 3, 'photoview.js': 399, 'photoview.css': 197, 'fullscreen_pv.js': 2, 'fullscreen_pv.css': 2, 'friendsphotos.js': 13, 'friendsphotos.css': 17, 'friends.js': 206, 'friends.css': 149, 'friends_search.js': 19, 'friends_search.css': 8, 'board.js': 77, 'board.css': 52, 'photos.css': 88, 'photos.js': 83, 'photos_add.css': 17, 'photos_add.js': 42, 'wkpoll.js': 14, 'wkview.js': 141, 'wkview.css': 121, 'single_pv.css': 9, 'single_pv.js': 4, 'video.js': 245, 'video.css': 174, 'videocat.js': 29, 'videocat.css': 27, 'videoview.js': 334, 'videoview.css': 187, 'video_edit.js': 22, 'video_edit.css': 32, 'video_upload.js': 47, 'video_youtube.js': 16, 'video_youtube.css': 10, 'translation.js': 31, 'translation.css': 18, 'reg.css': 26, 'reg.js': 56, 'invite.css': 17, 'invite.js': 13, 'prereg.js': 14, 'index.css': 27, 'index.js': 33, 'join.css': 70, 'join.js': 96, 'intro.css': 21, 'owner_photo.js': 26, 'owner_photo.css': 13, 'page.js': 942, 'page.css': 789, 'about.css': 1, 'page_fixed.css': 24, 'page_help.css': 18, 'public.css': 69, 'public.js': 46, 'events.css': 33, 'events.js': 38, 'pages.css': 52, 'pages.js': 42, 'groups.css': 115, 'groups.js': 39, 'groups_list.js': 63, 'groups_edit.css': 79, 'groups_edit.js': 100, 'profile.css': 226, 'profile.js': 218, 'calendar.css': 7, 'calendar.js': 16, 'wk.css': 41, 'wk.js': 14, 'pay.css': 3, 'pay.js': 6, 'tagger.js': 15, 'tagger.css': 13, 'qsearch.js': 11, 'wall.css': 76, 'wall.js': 83, 'walledit.js': 60, 'thumbs_edit.css': 7, 'thumbs_edit.js': 25, 'mail.css': 81, 'mail.js': 93, 'email.css': 2, 'im.css': 366, 'im.js': 419, 'emoji.js': 154, 'wide_dd.css': 15, 'wide_dd.js': 31, 'writebox.css': 13, 'writebox.js': 52, 'sharebox.js': 22, 'fansbox.js': 29, 'postbox.css': 6, 'postbox.js': 6, 'feed.js': 412, 'feed.css': 239, 'privacy.js': 100, 'privacy.css': 52, 'apps.css': 223, 'apps.js': 287, 'apps_edit.js': 116, 'apps_edit.css': 121, 'apps_check.js': 25, 'apps_check.css': 25, 'settings.js': 110, 'settings.css': 91, 'profile_edit.js': 85, 'profile_edit.css': 37, 'profile_edit_edu.js': 8, 'profile_edit_job.js': 7, 'profile_edit_mil.js': 2, 'search.js': 117, 'search.css': 90, 'datepicker.js': 26, 'datepicker.css': 10, 'oauth_popup.css': 31, 'oauth_page.css': 15, 'oauth_touch.css': 5, 'notes.css': 18, 'notes.js': 30, 'wysiwyg.js': 46, 'wysiwyg.css': 34, 'wiki.css': 10, 'fave.js': 49, 'fave.css': 51, 'widget_comments.css': 89, 'widget_auth.css': 4, 'widget_community.css': 63, 'widget_post.css': 3, 'api/widgets/al_comments.js': 129, 'api/widgets/al_auth.js': 5, 'api/widgets/al_poll.js': 8, 'api/widgets/al_community.js': 66, 'api/widgets/al_subscribe.js': 1, 'api/widgets/al_like.js': 30, 'api/widgets/al_post.js': 12, 'al_poll.css': 3, 'widget_recommended.css': 3, 'widgets.css': 20, 'common_light.js': 2, 'developers.css': 8, 'touch.css': 7, 'notifier.js': 383, 'notifier.css': 151, 'earthday.js': 5, 'earthday.css': 5, 'restore.js': 28, 'restore.css': 16, 'recover.js': 1, 'recover.css': 3, 'docs.js': 64, 'docs.css': 70, 'tags_dd.js': 18, 'tags_dd.css': 17, 'tasks.js': 26, 'tasks.css': 33, 'helpdesk.js': 1, 'tickets.js': 212, 'tickets.css': 177, 'faq.js': 36, 'faq.css': 36, 'meminfo.css': 15, 'groupinfo.css': 6, 'bugs.js': 26, 'bugs.css': 28, 'login.css': 56, 'upload.js': 109, 'graffiti.js': 27, 'graffiti.css': 22, 'graffiti_new.js': 2, 'graffiti_new.css': 2, 'abuse.js': 15, 'abuse.css': 19, 'verify.css': 6, 'stats.css': 31, 'payments.css': 53, 'payments.js': 6, 'offers.css': 18, 'offers.js': 23, 'call.js': 78, 'call.css': 15, 'aes_light.css': 52, 'aes_light.js': 90, 'ads.css': 94, 'ads.js': 73, 'ads_payments.js': 6, 'ads_edit.css': 39, 'ads_edit.js': 136, 'ads_moder.css': 63, 'ads_moder.js': 54, 'ads_tagger.js': 2, 'ads_web.css': 11, 'ads_web.js': 26, 'mrtarg.js': 3, 'mrtarg.css': 1, 'health.css': 11, 'health.js': 5, 'pinbar.js': 6, 'sms_office.css': 18, 'sms_office.js': 12, 'help.css': 19, 'help.js': 11, 'claims.css': 8, 'claims.js': 8, 'video_embed.js': 1, 'video_embed.css': 1, 'site_stats.css': 10, 'site_stats.js': 8, 'blank.css': 4, 'wk_editor.js': 73, 'wk_editor.css': 28, 'btagger.js': 12, 'btagger.css': 11, 'filters.js': 58, 'filters_pe.js': 17, 'pe.js': 24, 'pe.css': 5, 'dev.js': 82, 'dev.css': 101, 'share.css': 7, 'stickers_office.css': 1, 'stickers_office.js': 1, 'mapbox.js': 1, 'mapbox.css': 1, 'jobs.js': 4, 'jobs.css': 7, 'print.js': 11, 'print.css': 6, 'qrcode.js': 2, 'contests.css': 5, 'ui.css': 3, 'ui.js': 5, 'admin.js': 3, 'admin.css': 2, 'exchange.css': 34, 'exchange.js': 29, 'exchange_moder.css': 3, 'exchange_moder.js': 7, 'ads_offers.css': 21, 'ads_offers.js': 31, 'ads_offers_moder.css': 7, 'ads_offers_moder.js': 7, 'chronicle.css': 16, 'market.css': 15, 'market.js': 28, 'vk2016.css': 5, 'landing_community_message.css': 4, 'vkme.css': 1, 'ui_controls.js': 189, 'highcharts.js': 2, 'ui_controls.css': 66, 'selects.js': 27, 'mentions.js': 50, 'apps_flash.js': 65, 'maps.js': 39, 'places.js': 47, 'places.css': 38, 'map2.js': 4, 'map.css': 8, 'sort.js': 8, 'paginated_table.js': 51, 'paginated_table.css': 9, 'api/share.js': 93, 'api/openapi.js': 121, 'api/xdm.js': 9, 'q_frame.php': 7, '/swf/api_wrapper.swf': 7, '/swf/api_external.swf': 8, '/swf/api_wrapper2_0.swf': 8, '/swf/audio_lite.swf': 13, '/swf/uploader_lite.swf': 13, '/swf/photo_uploader_lite.swf': 17, '/swf/CaptureImg.swf': 12, '/swf/video.swf': 142, '/swf/vkvideochat.swf': 50, '/swf/vchatdevices.swf': 1, 'favicon': 3, 'lang': 6698}; var stTypes = {fromLib:{'md5.js':1,'ui_controls.js':1,'highcharts.js':1,'selects.js':1,'sort.js':1,'maps.js':1},fromRoot:{'api/share.js':1,'api/openapi.js':1,'api/xdm.js':1,'apps_flash.js':1,'mentions.js':1,'map2.js':1,'ui_controls.css':1,'map.css':1,'paginated_table.js':1,'paginated_table.css':1}}; var _rnd = 1717;
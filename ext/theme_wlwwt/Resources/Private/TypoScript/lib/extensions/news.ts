# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or at your option) any later version.
# ******************************************************************************


# **********************************************************
# Changes to EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPath = EXT:theme_husaberg/Resources/Private/Templates/Extensions/news/Templates/
		partialRootPath = EXT:theme_husaberg/Resources/Private/Templates/Extensions/news/Partials/
		layoutRootPath = EXT:theme_husaberg/Resources/Private/Templates/Extensions/news/Layouts/
        widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:theme_husaberg/Resources/Private/Templates/Extensions/news/
	}

	settings.list.media.image {
		maxHeight = 89
		maxWidth = 131

	}
        settings.list.paginate.templatePath = typo3conf/ext/theme_husaberg/Resources/Private/Templates/Extensions/news/ViewHelpers/Widget/Paginate/Index.html
	settings.cropMaxCharacters = 300
	settings.list.paginate.insertAbove = 0
        settings.list.paginate.itemsPerPage = 6

	settings.list.rss.channel {
		title = Husaberg News
		description =
		link = http://wwww.husaberg.com
		language = en_GB
		copyright = Husaberg
	}
}


#-------------------------------------------------------------------------------
#	EXT:news Latest news
#-------------------------------------------------------------------------------

lib.extensions.news_latest = USER
lib.extensions.news_latest {
	userFunc = tx_extbase_core_bootstrap->run
	extensionName = News
	pluginName = Pi1

	switchableControllerActions {
		News {
			1 = list
		}
	}
	settings < plugin.tx_news.settings
	settings {
		hidePagination = 1
		cropMaxCharacters = {$plugin.theme_configuration.extensions.news.latest.cropMaxCharacters}
		detailPid = {$plugin.theme_configuration.extensions.news.latest.detailPid}
		limit = {$plugin.theme_configuration.extensions.news.latest.limit}
		startingpoint = {$plugin.theme_configuration.extensions.news.latest.startingpoint}

		isLatest = 1
	}
}

#-------------------------------------------------------------------------------
#	EXT:news RSS feed
#-------------------------------------------------------------------------------

# RSS Feed
[globalVar = TSFE:type = 9818]
	# Cleanup
	lib.stdheader >
	tt_content.stdWrap.innerWrap >
	tt_content.stdWrap.outerWrap >
	tt_content.stdWrap.wrap >

	pageNewsRSS = PAGE
	pageNewsRSS.typeNum = 9818
	pageNewsRSS.10 < styles.content.get
	pageNewsRSS.10.select.where = colPos=0 AND list_type = "news_pi1"
	pageNewsRSS.10.select {
	  orderBy = sorting DESC
	  max = 1
	}

  config {
	# deactivate Standard-Header
	disableAllHeaderCode = 1
	# no xhtml tags
	xhtml_cleaning = none
	admPanel = 0
	metaCharset = utf-8
	# define charset
	additionalHeaders = Content-Type:text/xml;charset=utf-8
	disablePrefixComment = 1
	baseURL = {$plugin.sitestarter.url}
	absRefPrefix = {$plugin.sitestarter.url}
  }

	# set the format
	plugin.tx_news.settings.format = xml
[global]
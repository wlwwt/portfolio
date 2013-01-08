# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Basic Constants of the PRODUCTION mode
# **********************************************************

plugin.theme_configuration.url = http://192.168.2.200/wlwwt/
plugin.theme_configuration.general.logo.link = 1
plugin.theme_configuration.navigation_header = 2,3,4,5
plugin.theme_configuration.navigation_footer = 7

# **********************************************************
# Constants for searchbox
# **********************************************************
plugin.theme_configuration.extensions.indexed_search.form-target = 22

# **********************************************************
# Constants for news
# **********************************************************
plugin.theme_configuration.extensions.news.latest {
	limit = 5
	detailPid = 33
	startingpoint = 10
	cropMaxCharacters = 120
}
plugin.theme_configuration.extensions.news.opengraph.site_name = wlwwt - TYPO3, Magento, Shopware aus Passau

# **********************************************************
# Changes in styles
# **********************************************************
styles.content.imgtext.maxW = 1030

# **********************************************************
# Changes in styles
# **********************************************************
plugin.theme_configuration.realurl = 1

# **********************************************************
# solr config
# **********************************************************
plugin.tx_solr.solr.host = localhost
plugin.tx_solr.solr.port = 8080
plugin.tx_solr.solr.path = /solr/main
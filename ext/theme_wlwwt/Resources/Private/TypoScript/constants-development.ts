# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Basic Constants of the DEVELOPMENT mode
# **********************************************************

plugin.theme_configuration.url = http://localhost/wlwwt/
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
	limit = 3
	detailPid = 33
	startingpoint = 10
	cropMaxCharacters = 120
}
plugin.theme_configuration.extensions.news.opengraph.site_name = wlwwt - TYPO3, Solr aus Passau

# **********************************************************
# Changes in styles
# **********************************************************
styles.content.imgtext.maxW = 1030

# **********************************************************
# Changes in styles
# **********************************************************
plugin.theme_configuration.realurl = 0

# **********************************************************
# solr config
# **********************************************************
plugin.tx_solr.solr.host = localhost
plugin.tx_solr.solr.port = 8080
plugin.tx_solr.solr.path = /solr/wlwwt
plugin.tx_solr.enableDebugMode = 1
plugin.tx_solr.eid = http://localhost/wlwwt/?eID=tx_solr_suggest&id=22
# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for indexed_search snippets
# Content:
#	* Search box
# **********************************************************


#-------------------------------------------------------------------------------
#	EXT:indexed_search Searchbox for the top bar
#-------------------------------------------------------------------------------
#<form class="navbar-search pull-right">
#<input class="span4" type="text" placeholder="Suchbegriff">
#</form>
lib.extensions.solr_search_box = COA
lib.extensions.solr_search_box {
#
#	# Open form tag and set URL to target page
#	10 = TEXT
#	10 {
#		wrap = <form class="navbar-search pull-right" action="|" method="get">
#		typolink {
#			parameter = {$plugin.theme_configuration.extensions.indexed_search.form-target}
#			returnLast = url
#                        additionalParams = tx_solr[q]
#                        additionalParams.insertData = 1
#		}
#	}
#
#	# Add rest of template
#	20 = TEXT
#	20 {
#		
#                insertData = 1
#		value (
#			<input class="span4" name="tx_solr[q]" type="text" placeholder="{LLL:EXT:theme_wlwwt/Resources/Private/Language/locallang.xml:search-placeholder}">
#			</form>
#		)
#	}
}

# enables solr-indexing
config.index_enable = 1

plugin.tx_solr.solr.host = {$plugin.tx_solr.solr.host}
plugin.tx_solr.solr.port = {$plugin.tx_solr.solr.port}
plugin.tx_solr.solr.path = {$plugin.tx_solr.solr.path}
plugin.tx_solr.enableDebugMode = {$plugin.tx_solr.enableDebugMode}
plugin.tx_solr.search.faceting = {plugin.tx_solr.search.faceting}


# indexing news
plugin.tx_solr.index.queue {

	news = 1
	news {
		table = tx_news_domain_model_news

		fields {
			abstract = teaser

			author = author
			authorEmail_stringS = author_email

			title = title

			content = COA
			content {
				10 = TEXT
				10 {
					field = bodytext
					noTrimWrap = || |
				}

				20 = SOLR_RELATION
				20 {
					localField = content_elements
					foreignLabelField = bodytext
					singleValueGlue = | |
				}
			}

			category_stringM = SOLR_RELATION
			category_stringM {
				localField = categories
				multiValue = 1
			}

			keywords = SOLR_RELATION
			keywords {
				localField = tags
				multiValue = 1
			}

			url = TEXT
			url {
				typolink.parameter = {$plugin.theme_configuration.extensions.news.latest.detailPid}
				typolink.additionalParams = &tx_news_pi1[controller]=News&tx_news_pi1[action]=detail&tx_news_pi1[news]={field:uid}
				typolink.additionalParams.insertData = 1
				typolink.useCacheHash = 1
				typolink.returnLast = url
			}
		}

		attachments {
			fields = related_files
		}
	}

}

# enables solr-indexing
config.index_enable = 1
plugin.tx_solr.solr {
    host = {$plugin.tx_solr.solr.host}
    port = {$plugin.tx_solr.solr.port}
    path = {$plugin.tx_solr.solr.path}
    enableDebugMode = {$plugin.tx_solr.enableDebugMode}
}
plugin.tx_solr.search {
    faceting = {$plugin.tx_solr.search.faceting}

    results.resultsHighlighting = {$plugin.tx_solr.search.results.resultsHighlighting}
}

# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Rendering of all colpos'
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Header (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.header = COA
lib.content.header {
    wrap = <!-- TYPO3SEARCH_begin -->|<!-- TYPO3SEARCH_end -->
    stdWrap.wrap = <div class="hidden-phone">|</div>
    10 < styles.content.get
}
lib.content.0 < lib.content.header

#-------------------------------------------------------------------------------
#	CONTENT: Main(colPos = 1)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
    wrap = <!-- TYPO3SEARCH_begin -->|<!-- TYPO3SEARCH_end -->
    stdWrap.wrap = |
    10 < styles.content.getLeft
}
lib.content.1 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.meta = COA
lib.content.meta {
    wrap = <!-- TYPO3SEARCH_begin -->|<!-- TYPO3SEARCH_end -->
    stdWrap.wrap = |
    10 < styles.content.getRight
}
lib.content.2 < lib.content.meta
#-------------------------------------------------------------------------------
#	CONTENT: Border Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.border = COA
lib.content.border {
    wrap = <!-- TYPO3SEARCH_begin -->|<!-- TYPO3SEARCH_end -->
    stdWrap.wrap = |
    10 < styles.content.getBorder
}
lib.content.3 < lib.content.border
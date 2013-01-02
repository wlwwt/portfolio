# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for TypoScript about navigations.
# Content:
#	* header
#	* Sidebar
#	* Language switch
#	* Footer menu (left & right)
# **********************************************************



#-------------------------------------------------------------------------------
#	NAVIGATION: Header
#-------------------------------------------------------------------------------
lib.navigation.header = COA
lib.navigation.header {
	stdWrap.wrap = <ul class="nav">|</ul>

	10 = HMENU
	10 {
		special = list
		special.value = {$plugin.theme_configuration.navigation_header}

		1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}

			CUR <.NO
			CUR {
				wrapItemAndSub = <li class="active">|</li>
				doNotLinkIt = 0
			}
		}
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Sidebar
#-------------------------------------------------------------------------------
lib.navigation.subnav = COA
lib.navigation.subnav {
	stdWrap.wrap = <ul class="nav subnav">|</ul>

	10 = HMENU
	10 {
		1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
                            wrapItemAndSub = <li>|</li>
                            ATagTitle.field = subtitle // title
                            stdWrap.htmlSpecialChars = 1
			}

			ACT <.NO
			ACT.wrapItemAndSub = <li class="active">|</li>
			#ACT.ATagParams = class="active"
			ACT.ATagBeforeWrap = 1
		}

		2 <.1
		2.wrap = <ul>|</ul>
	}
}

#-------------------------------------------------------------------------------
#	NAVIGATION: Footer
#-------------------------------------------------------------------------------
lib.navigation.footer = COA
lib.navigation.footer {
	stdWrap.wrap = |

	10 = HMENU
	10 {
		special = directory
		special.value = {$plugin.theme_configuration.navigation_footer}

		1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
				wrapItemAndSub =  |&nbsp;&#124;|*|&nbsp;|&nbsp;&#124;|*|&nbsp;|
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
	}
}

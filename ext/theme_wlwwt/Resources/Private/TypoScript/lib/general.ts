# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************



#-------------------------------------------------------------------------------
#	GENERAL: Logo Link
#-------------------------------------------------------------------------------
# <a class="brand" href="#"><span>wlwwt</span></a>
lib.general.logo = COA
lib.general.logo {
        10 = TEXT
	10 {	
            value = <span>wlwwt - TYPO3, Magento, Shopware aus Passau</span>
            typolink.ATagParams = class="brand"
            typolink.parameter = {$plugin.theme_configuration.general.logo.link}
	}
}
#-------------------------------------------------------------------------------
#	GENERAL: Copyright
#-------------------------------------------------------------------------------
# <p>&copy; wlwwt 2012</p>
lib.general.copyright = COA
lib.general.copyright {
        10 = TEXT
	10 {	
            noTrimWrap = |<p>&copy; wlwwt |</p>|
            data = date:U
            strftime = %Y
	}
}
#-------------------------------------------------------------------------------
#	GENERAL: Print
#-------------------------------------------------------------------------------
# <a href="javascript:self.print()"><i class="icon-print"></i>&nbsp;Seite drucken</a> 
lib.general.print-page = COA
lib.general.print-page {
        10 = TEXT
	10 {	
            data = LLL:EXT:theme_wlwwt/Resources/Private/Language/locallang.xml:print-page
            wrap = <a href="javascript:self.print()"><i class="icon-print"></i>&nbsp;|</a>
	}
}

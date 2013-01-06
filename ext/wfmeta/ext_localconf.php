<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'WLWWT.' . $_EXTKEY,
	'Pi1',
	array(
		'Column' => 'list',
		
	),
	// non-cacheable actions
	array(
		'Column' => '',
		
	)
);

?>